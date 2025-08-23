import { NextResponse } from "next/server";

async function fetchFreddieMacRates() {
  try {
    // Freddie Mac Primary Mortgage Market Survey API (free, weekly updates)
    // This is the most reliable free source
    const response = await fetch(
      "https://www.freddiemac.com/pmms/pmms_30yr.json",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          "Upgrade-Insecure-Requests": "1",
        },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Freddie Mac API responded with status: ${response.status}`
      );
    }

    const data = await response.json();
    if (data.pmms && data.pmms.length > 0) {
      const latestRates = data.pmms[0];
      return {
        source: "Freddie Mac",
        rate: parseFloat(latestRates.rate),
        date: latestRates.date,
        success: true,
      };
    }

    throw new Error("No rate data from Freddie Mac");
  } catch (error) {
    console.error("Freddie Mac API error:", error.message);
    return { success: false, error: error.message };
  }
}

async function fetchBankrateRates() {
  try {
    // Bankrate - Free public rates (no API key needed)
    const response = await fetch("https://www.bankrate.com/mortgage-rates/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Bankrate responded with status: ${response.status}`);
    }

    const html = await response.text();

    // Extract rate from HTML (this is a simple approach)
    // Look for common rate patterns in the HTML
    const rateMatch = html.match(/(\d+\.\d+)%/);
    if (rateMatch) {
      const rate = parseFloat(rateMatch[1]);
      if (rate > 0 && rate < 20) {
        // Sanity check
        return {
          source: "Bankrate",
          rate: rate,
          date: new Date().toISOString().split("T")[0],
          success: true,
        };
      }
    }

    throw new Error("Could not extract rate from Bankrate");
  } catch (error) {
    console.error("Bankrate error:", error.message);
    return { success: false, error: error.message };
  }
}

async function fetchMarketWatchRates() {
  try {
    // MarketWatch - Free mortgage rates
    const response = await fetch(
      "https://www.marketwatch.com/investing/bond/tmbmkde-10y",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(`MarketWatch responded with status: ${response.status}`);
    }

    const html = await response.text();

    // Extract rate from MarketWatch
    const rateMatch = html.match(/(\d+\.\d+)%/);
    if (rateMatch) {
      const rate = parseFloat(rateMatch[1]);
      if (rate > 0 && rate < 20) {
        // Sanity check
        return {
          source: "MarketWatch",
          rate: rate + 2.5, // Add spread for mortgage rate
          date: new Date().toISOString().split("T")[0],
          success: true,
        };
      }
    }

    throw new Error("Could not extract rate from MarketWatch");
  } catch (error) {
    console.error("MarketWatch error:", error.message);
    return { success: false, error: error.message };
  }
}

async function fetchSimpleRates() {
  try {
    // Simple, reliable approach - use a public rate source
    // This should work even when other APIs fail
    const response = await fetch(
      "https://www.mortgagenewsdaily.com/mortgage-rates/",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Mortgage News Daily responded with status: ${response.status}`
      );
    }

    const html = await response.text();

    // Look for rate patterns in the HTML
    const rateMatch = html.match(/(\d+\.\d+)%/);
    if (rateMatch) {
      const rate = parseFloat(rateMatch[1]);
      if (rate > 0 && rate < 20) {
        // Sanity check
        return {
          source: "Mortgage News Daily",
          rate: rate,
          date: new Date().toISOString().split("T")[0],
          success: true,
        };
      }
    }

    throw new Error("Could not extract rate from Mortgage News Daily");
  } catch (error) {
    console.error("Mortgage News Daily error:", error.message);
    return { success: false, error: error.message };
  }
}

async function fetchCurrentRates() {
  try {
    console.log("🔄 Fetching mortgage rates from multiple FREE sources...");

    // Try multiple free APIs in order of reliability
    const apiResults = await Promise.allSettled([
      fetchFreddieMacRates(),
      fetchSimpleRates(),
      fetchBankrateRates(),
      fetchMarketWatchRates(),
    ]);

    // Log results for debugging
    const sources = [
      "Freddie Mac",
      "Mortgage News Daily",
      "Bankrate",
      "MarketWatch",
    ];
    apiResults.forEach((result, index) => {
      if (result.status === "fulfilled" && result.value.success) {
        console.log(
          `✅ ${sources[index]}: Success - Rate: ${result.value.rate}%`
        );
      } else {
        console.log(
          `❌ ${sources[index]}: Failed - ${
            result.reason || result.value?.error || "Unknown error"
          }`
        );
      }
    });

    // Find the first successful result
    let bestRate = null;

    for (let i = 0; i < apiResults.length; i++) {
      if (apiResults[i].status === "fulfilled" && apiResults[i].value.success) {
        bestRate = apiResults[i].value;
        console.log(`🎯 Using rates from: ${bestRate.source}`);
        break;
      }
    }

    if (bestRate) {
      // Use real rates from the best available source
      const baseRate = bestRate.rate;

      const currentRates = {
        30: { rate: baseRate, apr: baseRate + 0.15 },
        20: { rate: baseRate - 0.25, apr: baseRate - 0.1 },
        15: { rate: baseRate - 0.5, apr: baseRate - 0.35 },
        10: { rate: baseRate - 0.75, apr: baseRate - 0.6 },
      };

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
                time: bestRate.date,
                rate: currentRates[30].rate,
                apr: currentRates[30].apr,
              },
            ],
            allRates: currentRates,
            source: bestRate.source,
            lastUpdated: bestRate.date,
            realTime: true,
            note: `Real rates from ${bestRate.source}. Updated regularly.`,
          },
        },
      };
    }

    // Fallback to realistic simulated rates if all APIs fail
    console.log(
      "⚠️ All free APIs failed, using realistic simulated rates as fallback"
    );
    const currentDate = new Date();

    // Use more realistic base rates based on current market conditions
    const baseRate = 7.25 + (Math.random() * 0.5 - 0.25); // 7.0% - 7.5% range

    const currentRates = {
      30: { rate: baseRate, apr: baseRate + 0.15 },
      20: { rate: baseRate - 0.25, apr: baseRate - 0.1 },
      15: { rate: baseRate - 0.5, apr: baseRate - 0.35 },
      10: { rate: baseRate - 0.75, apr: baseRate - 0.6 },
    };

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
              time: currentDate.toISOString(),
              rate: currentRates[30].rate,
              apr: currentRates[30].apr,
            },
          ],
          allRates: currentRates,
          source: "Market Simulation (Fallback)",
          lastUpdated: currentDate.toISOString(),
          realTime: false,
          note: "Using realistic simulated rates. Free APIs are temporarily unavailable.",
        },
      },
    };
  } catch (error) {
    console.error("❌ Critical error in fetchCurrentRates:", error.message);

    // Fallback to static rates if anything fails
    const fallbackRates = {
      30: { rate: 7.25, apr: 7.4 },
      20: { rate: 7.0, apr: 7.15 },
      15: { rate: 6.75, apr: 6.9 },
      10: { rate: 6.5, apr: 6.65 },
    };

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
              rate: fallbackRates[30].rate,
              apr: fallbackRates[30].apr,
            },
          ],
          allRates: fallbackRates,
          source: "Fallback rates",
          lastUpdated: new Date().toISOString(),
          realTime: false,
          note: "Using fallback rates due to system error.",
        },
      },
    };
  }
}

export async function GET() {
  try {
    const rates = await fetchCurrentRates();

    // Add cache control headers - cache for 1 hour since rates change frequently
    const response = NextResponse.json(rates);
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=600"
    );
    response.headers.set("X-Rate-Source", rates.rates.default.source);
    response.headers.set("X-Last-Updated", rates.rates.default.lastUpdated);
    response.headers.set(
      "X-Real-Time",
      rates.rates.default.realTime.toString()
    );

    return response;
  } catch (error) {
    console.error("Error fetching mortgage rates:", error);
    return NextResponse.json(
      { error: "Failed to fetch mortgage rates" },
      { status: 500 }
    );
  }
}
