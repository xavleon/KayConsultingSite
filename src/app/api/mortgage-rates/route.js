import { NextResponse } from "next/server";

async function fetchCurrentRates() {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Current approximate rates for NY as of now (this would normally come from a real API)
  const currentRate = 7.0;
  const currentAPR = 7.15; // APR is typically slightly higher than the rate

  return {
    rates: {
      default: {
        query: {
          program: "Fixed30Year",
          loanType: "Conventional",
          loanAmountBucket: "Conforming",
          loanToValueBucket: "Normal",
          creditScoreBucket: "VeryHigh",
          stateAbbreviation: "NY",
        },
        samples: [
          {
            time: new Date().toISOString(),
            rate: currentRate,
            apr: currentAPR,
          },
        ],
      },
    },
  };
}

export async function GET() {
  try {
    const rates = await fetchCurrentRates();
    return NextResponse.json(rates);
  } catch (error) {
    console.error("Error fetching mortgage rates:", error);
    return NextResponse.json(
      { error: "Failed to fetch mortgage rates" },
      { status: 500 }
    );
  }
}
