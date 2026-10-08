import { NextResponse } from "next/server";

function largerPhoto(href) {
  if (!href) return null;
  return href.replace(/s\.jpg(?=$|\?)/, "rd-w1280_h960.jpg");
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = (searchParams.get("city") || "Mineola").trim();
  const state = (searchParams.get("state") || "NY").trim().slice(0, 2).toUpperCase();
  const limit = Math.min(
    Math.max(parseInt(searchParams.get("limit") || "9", 10) || 9, 1),
    42
  );
  const offset = Math.max(parseInt(searchParams.get("offset") || "0", 10) || 0, 0);

  if (!process.env.RAPID_API_KEY) {
    return NextResponse.json(
      { error: "Property search is not configured." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://realty-in-us.p.rapidapi.com/properties/v3/list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
        },
        body: JSON.stringify({
          limit,
          offset,
          city,
          state_code: state,
          status: ["for_sale"],
          sort: { direction: "desc", field: "list_date" },
        }),
        next: { revalidate: 60 * 60 },
      }
    );

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        response.status === 429
          ? "The free listing limit was reached. Try again later."
          : "Listings could not be loaded.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const search = payload?.data?.home_search;
    const results = Array.isArray(search?.results) ? search.results : [];
    const properties = results.map((home) => {
      const address = home.location?.address || {};
      const href = home.href || "";
      return {
        property_id: home.property_id,
        address: address.line || "Address unavailable",
        city: address.city || city,
        state: address.state_code || state,
        price: home.list_price,
        bedrooms: home.description?.beds,
        bathrooms: home.description?.baths,
        squareFootage: home.description?.sqft,
        imgSrc: largerPhoto(home.primary_photo?.href),
        href: href.startsWith("http")
          ? href
          : href
            ? `https://www.realtor.com${href}`
            : null,
      };
    });

    return NextResponse.json({
      properties,
      total: search?.total ?? properties.length,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Listings could not be loaded." },
      { status: 500 }
    );
  }
}
