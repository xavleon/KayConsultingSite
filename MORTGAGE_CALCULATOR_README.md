# Mortgage Calculator - Real-Time Rate Integration

## Overview

This mortgage calculator provides real-time mortgage rate integration with fallback rates for demonstration purposes. It automatically calculates monthly payments based on current market rates and allows users to compare different loan terms.

## Features

### ✅ **Current Features**

- **Real-time rate fetching** from multiple API sources
- **Automatic rate updates** every 4 hours
- **Rate trend tracking** (up/down indicators)
- **Multiple loan terms** (10, 15, 20, 30 years)
- **Interactive calculator** with real-time updates
- **Error handling** with retry mechanisms
- **Responsive design** for all devices

### 🔄 **Rate Sources**

Currently using **simulated rates** that update daily. In production, you can integrate with:

#### **Free/Public APIs:**

- **Freddie Mac PMMS**: Weekly government-backed rates
- **Federal Reserve Economic Data (FRED)**: Historical rate data

#### **Paid/Partner APIs:**

- **Mortgage News Daily API**: Real-time rates, requires subscription
- **Zillow Mortgage API**: Partnership required
- **Bankrate API**: Partnership required
- **Mortgage Bankers Association**: Industry data

## How to Integrate Real Mortgage Rate APIs

### 1. **Freddie Mac Integration** (Recommended for free tier)

```javascript
// In src/app/api/mortgage-rates/route.js
async function fetchFreddieMacRates() {
  try {
    const response = await fetch(
      "https://www.freddiemac.com/pmms/pmms_30yr.json"
    );
    const data = await response.json();
    const latestRates = data.pmms[0];

    return {
      source: "Freddie Mac",
      rate: parseFloat(latestRates.rate),
      date: latestRates.date,
      success: true,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### 2. **Mortgage News Daily API** (Paid service)

```javascript
// Requires API key from https://www.mortgagenewsdaily.com/api
async function fetchMNDRates() {
  try {
    const response = await fetch("https://api.mortgagenewsdaily.com/rates", {
      headers: {
        Authorization: `Bearer ${process.env.MND_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    // Process response...
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### 3. **Web Scraping Approach** (Fallback option)

```javascript
// Use libraries like Puppeteer or Cheerio to scrape rates
import puppeteer from "puppeteer";

async function scrapeRates() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.bankrate.com/mortgage-rates/");

  const rate = await page.$eval(".rate-value", (el) => el.textContent);
  await browser.close();

  return parseFloat(rate);
}
```

## Environment Variables

Create a `.env.local` file in your project root:

```bash
# For real API integration
MND_API_KEY=your_mortgage_news_daily_api_key
ZILLOW_API_KEY=your_zillow_api_key
BANKRATE_API_KEY=your_bankrate_api_key

# Rate update frequency (in milliseconds)
RATE_UPDATE_INTERVAL=14400000  # 4 hours
```

## API Endpoints

### `GET /api/mortgage-rates`

Returns current mortgage rates for different loan terms.

**Response:**

```json
{
  "rates": {
    "default": {
      "allRates": {
        "30": { "rate": 7.0, "apr": 7.15 },
        "20": { "rate": 6.75, "apr": 6.9 },
        "15": { "rate": 6.5, "apr": 6.65 },
        "10": { "rate": 6.25, "apr": 6.4 }
      },
      "source": "Market Simulation (Demo)",
      "lastUpdated": "2024-01-15T10:30:00.000Z",
      "realTime": false
    }
  }
}
```

## Rate Calculation Logic

The calculator uses the standard mortgage payment formula:

```
Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]

Where:
P = Principal loan amount
r = Monthly interest rate (annual rate ÷ 12)
n = Total number of payments (years × 12)
```

## Error Handling

The system includes comprehensive error handling:

- **API failures**: Falls back to simulated rates
- **Network issues**: Retry mechanisms with exponential backoff
- **Invalid data**: Validation and fallback values
- **User feedback**: Clear error messages and retry options

## Performance Optimizations

- **Caching**: Rates cached for 1 hour with stale-while-revalidate
- **Rate limiting**: Prevents multiple simultaneous API calls
- **Lazy loading**: Rates only fetched when needed
- **Background updates**: Automatic refresh every 4 hours

## Testing

Test the calculator with different scenarios:

```bash
# Test API endpoint
curl http://localhost:3000/api/mortgage-rates

# Test calculator component
npm run test

# Test build
npm run build
```

## Deployment Considerations

### **Production Setup:**

1. **Environment variables**: Set API keys securely
2. **Rate limiting**: Implement API rate limiting
3. **Monitoring**: Add logging and error tracking
4. **Backup rates**: Ensure fallback rates are always available
5. **Caching**: Use Redis or similar for rate caching

### **Security:**

- Never expose API keys in client-side code
- Use server-side API calls only
- Implement proper CORS policies
- Validate all input data

## Troubleshooting

### **Common Issues:**

1. **Rates not updating:**

   - Check API endpoint accessibility
   - Verify environment variables
   - Check browser console for errors

2. **Calculator not working:**

   - Ensure all form fields are filled
   - Check for JavaScript errors
   - Verify component mounting

3. **API errors:**
   - Check network connectivity
   - Verify API key validity
   - Check rate limits

### **Debug Mode:**

Enable debug logging by setting:

```bash
NODE_ENV=development
DEBUG=mortgage-calculator:*
```

## Future Enhancements

- **Rate alerts**: Notify users of rate changes
- **Historical data**: Show rate trends over time
- **Comparison tools**: Compare multiple loan scenarios
- **Mobile app**: Native mobile application
- **Rate predictions**: AI-powered rate forecasting

## Support

For issues or questions:

1. Check the browser console for errors
2. Verify API endpoints are accessible
3. Review environment variable configuration
4. Check network connectivity
5. Review API documentation for rate limits

---

**Note**: This calculator currently uses simulated rates for demonstration. For production use, integrate with real mortgage rate APIs as described above.
