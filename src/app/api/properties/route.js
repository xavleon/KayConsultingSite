import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "New York";
  const state = searchParams.get("state") || "NY";
  const limit = parseInt(searchParams.get("limit") || "10");
  const offset = parseInt(searchParams.get("offset") || "0");

  const url = `https://api.rentcast.io/v1/properties?city=${encodeURIComponent(
    city
  )}&state=${state}&limit=${limit}&offset=${offset}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-Key": process.env.RENTCAST_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
