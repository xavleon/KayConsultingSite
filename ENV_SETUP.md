# 🔧 Environment Setup for Free Mortgage APIs

## 📁 **Create Environment File**

1. **In your project root**, create a file called `.env.local`
2. **Add this line** for unlimited FRED API calls:

```bash
FRED_API_KEY=your_actual_api_key_here
```

## 🔑 **Get Your Free FRED API Key**

1. **Visit**: https://fred.stlouisfed.org/
2. **Click**: "My Account" (top right)
3. **Click**: "Create an Account" (if you don't have one)
4. **Go to**: https://fred.stlouisfed.org/docs/api/api_key.html
5. **Click**: "Request API Key"
6. **Fill form** and get your key instantly

## 🧪 **Test Without API Key**

You can test immediately - the system will:

- Use `demo` key for FRED (limited but works)
- Fall back to other free APIs
- Use simulated rates if all fail

## ✅ **What Happens Now**

Your mortgage calculator will:

1. **Try Freddie Mac** (government rates, weekly)
2. **Try FRED API** (Federal Reserve, daily)
3. **Try Yahoo Finance** (real-time market data)
4. **Fall back gracefully** if any fail

## 🚀 **Benefits of Adding API Key**

- **Unlimited requests** to FRED API
- **More reliable** rate data
- **Better performance** (no rate limits)
- **Professional appearance**

## 📝 **File Structure**

```
kay-website/
├── .env.local          ← Create this file
├── src/
├── package.json
└── ... other files
```

## 🔒 **Security Note**

- `.env.local` is automatically ignored by Git
- Your API key stays private
- Never commit API keys to version control
