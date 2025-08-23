"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, AlertCircle, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("550000");
  const [downPaymentAmount, setDownPaymentAmount] = useState("110000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [loanProgram, setLoanProgram] = useState("30");
  const [interestRate, setInterestRate] = useState("7.0");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [principalAndInterest, setPrincipalAndInterest] = useState(null);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [currentRates, setCurrentRates] = useState(null);
  const [isLoadingRates, setIsLoadingRates] = useState(true);
  const [rateTrend, setRateTrend] = useState(null); // 'up', 'down', or null
  const [previousRates, setPreviousRates] = useState(null);
  const [ratesError, setRatesError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Update interest rate when loan program changes
  const handleLoanProgramChange = (value) => {
    setLoanProgram(value);
    if (currentRates?.rates?.default?.allRates?.[value]) {
      setInterestRate(
        currentRates.rates.default.allRates[value].rate.toString()
      );
    }
  };

  // Fetch current rates
  useEffect(() => {
    const fetchRates = async () => {
      setIsLoadingRates(true);
      setRatesError(null);
      try {
        const response = await fetch("/api/mortgage-rates");
        if (!response.ok) {
          throw new Error("Failed to fetch rates");
        }
        const data = await response.json();

        // Simple rate trend check
        if (currentRates && data?.rates?.default?.allRates?.[loanProgram]) {
          const currentRate = data.rates.default.allRates[loanProgram].rate;
          const previousRate =
            currentRates.rates.default.allRates[loanProgram]?.rate;

          if (previousRate && currentRate !== previousRate) {
            setRateTrend(currentRate > previousRate ? "up" : "down");
            setPreviousRates(currentRates);
          }
        }

        setCurrentRates(data);
        // Update interest rate to match the selected loan program
        if (data?.rates?.default?.allRates?.[loanProgram]) {
          setInterestRate(
            data.rates.default.allRates[loanProgram].rate.toString()
          );
        }
        setIsLoadingRates(false);
      } catch (error) {
        console.error("Error fetching rates:", error);
        setRatesError(error.message);
        setIsLoadingRates(false);
      }
    };

    fetchRates();

    // Auto-refresh rates every 4 hours instead of every hour to reduce API calls
    const interval = setInterval(fetchRates, 4 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [loanProgram]); // Removed currentRates to prevent infinite loop

  // Auto-calculate payment on mount with default values
  useEffect(() => {
    if (homePrice && downPaymentAmount && interestRate && loanProgram) {
      const price = parseNumericInput(homePrice);
      const down = parseNumericInput(downPaymentAmount);
      const rate = parseNumericInput(interestRate);
      const years = parseNumericInput(loanProgram);

      if (price && down && rate && years) {
        const principal = price - down;
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = years * 12;

        if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
          const monthlyPI =
            (principal *
              (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

          if (isFinite(monthlyPI) && monthlyPI > 0) {
            setPrincipalAndInterest(monthlyPI);
            setMonthlyPayment(monthlyPI);
          }
        }
      }
    }
  }, [homePrice, downPaymentAmount, interestRate, loanProgram]);

  // Parse string to number, removing commas and other non-numeric characters
  const parseNumericInput = (value) => {
    if (!value) return 0;
    return Number(value.replace(/[^0-9.]/g, ""));
  };

  const handleDownPaymentAmountChange = (value) => {
    const amount = value.replace(/[^0-9]/g, "");
    setDownPaymentAmount(amount);
    if (homePrice && amount) {
      const percent = (
        (parseNumericInput(amount) / parseNumericInput(homePrice)) *
        100
      ).toFixed(2);
      setDownPaymentPercent(percent);
    }
  };

  const handleDownPaymentPercentChange = (value) => {
    const percent = value.replace(/[^0-9.]/g, "");
    setDownPaymentPercent(percent);
    if (homePrice && percent) {
      const amount = Math.round(
        parseNumericInput(homePrice) * (parseNumericInput(percent) / 100)
      );
      setDownPaymentAmount(amount.toString());
    }
  };

  const handleHomePriceChange = (value) => {
    const price = value.replace(/[^0-9]/g, "");
    setHomePrice(price);
    if (price && downPaymentPercent) {
      const amount = Math.round(
        parseNumericInput(price) * (parseNumericInput(downPaymentPercent) / 100)
      );
      setDownPaymentAmount(amount.toString());
    }
  };

  const calculateMortgage = (e) => {
    e.preventDefault();

    const price = parseNumericInput(homePrice);
    const down = parseNumericInput(downPaymentAmount);
    const rate = parseNumericInput(interestRate);
    const years = parseNumericInput(loanProgram);

    if (!price || !down || !rate || !years) {
      return;
    }

    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      return;
    }

    const monthlyPI =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    if (isFinite(monthlyPI) && monthlyPI > 0) {
      setPrincipalAndInterest(monthlyPI);
      setMonthlyPayment(monthlyPI);
    } else {
      setPrincipalAndInterest(null);
      setMonthlyPayment(null);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value) => {
    if (!value) return "";
    return `${value}%`;
  };

  const inputStyles =
    "w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all";
  const labelStyles = "text-gray-700 font-medium mb-1 block";

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-100 shadow-xl">
      <CardContent className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            Monthly payment
          </h2>
          {monthlyPayment !== null && (
            <>
              <p className="text-gray-700 mb-2">Estimated monthly payment</p>
              <p className="text-4xl font-bold mb-4 text-gray-900">
                {formatCurrency(monthlyPayment)}
              </p>

              <button
                onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium text-gray-900">
                    Principal & interest
                  </span>
                  <div className="flex items-center">
                    <span className="mr-2 font-medium text-gray-900">
                      {formatCurrency(principalAndInterest)}
                    </span>
                    {isDetailsExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>
            </>
          )}
        </div>

        {/* Current Market Rates Section */}
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Current Market Rates
              </h3>
            </div>
            <button
              onClick={() => {
                if (isRefreshing) return; // Prevent multiple simultaneous requests
                setIsRefreshing(true);
                fetch("/api/mortgage-rates")
                  .then((response) => response.json())
                  .then((data) => {
                    setCurrentRates(data);
                    if (data?.rates?.default?.allRates?.[loanProgram]) {
                      setInterestRate(
                        data.rates.default.allRates[loanProgram].rate.toString()
                      );
                    }
                    setRatesError(null);
                    setIsRefreshing(false);
                  })
                  .catch((error) => {
                    console.error("Error refreshing rates:", error);
                    setRatesError(error.message);
                    setIsRefreshing(false);
                  });
              }}
              disabled={isRefreshing}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
          {isLoadingRates ? (
            <p className="text-gray-600">Loading current rates...</p>
          ) : ratesError ? (
            <div className="text-center p-4">
              <p className="text-red-600 mb-2">
                Error loading rates: {ratesError}
              </p>
              <button
                onClick={() => {
                  if (isRefreshing) return;
                  setIsRefreshing(true);
                  fetch("/api/mortgage-rates")
                    .then((response) => response.json())
                    .then((data) => {
                      setCurrentRates(data);
                      if (data?.rates?.default?.allRates?.[loanProgram]) {
                        setInterestRate(
                          data.rates.default.allRates[
                            loanProgram
                          ].rate.toString()
                        );
                      }
                      setRatesError(null);
                      setIsRefreshing(false);
                    })
                    .catch((error) => {
                      console.error("Error refreshing rates:", error);
                      setRatesError(error.message);
                      setIsRefreshing(false);
                    });
                }}
                disabled={isRefreshing}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isRefreshing ? "Loading..." : "Try Again"}
              </button>
            </div>
          ) : currentRates ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    {loanProgram}-Year Fixed
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {formatPercent(
                        currentRates.rates.default.allRates[loanProgram]
                          ?.rate || currentRates.rates.default.samples[0].rate
                      )}
                    </p>
                    {rateTrend && (
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          rateTrend === "up"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {rateTrend === "up" ? "↗" : "↘"}{" "}
                        {rateTrend === "up" ? "Up" : "Down"}
                        {previousRates && (
                          <span className="ml-1">
                            {Math.abs(
                              (currentRates.rates.default.allRates[loanProgram]
                                ?.rate || 0) -
                                (previousRates.rates.default.allRates[
                                  loanProgram
                                ]?.rate || 0)
                            ).toFixed(2)}
                            %
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">APR</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {formatPercent(
                      currentRates.rates.default.allRates[loanProgram]?.apr ||
                        currentRates.rates.default.samples[0].apr
                    )}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  Source: {currentRates.rates.default.source}
                  {currentRates.rates.default.realTime && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Live
                    </span>
                  )}
                </p>
                <p>
                  Last updated:{" "}
                  {new Date(
                    currentRates.rates.default.lastUpdated
                  ).toLocaleString()}
                </p>
                {currentRates.rates.default.note && (
                  <p className="text-amber-600 bg-amber-50 p-2 rounded">
                    {currentRates.rates.default.note}
                  </p>
                )}
                <p>
                  Actual rates may vary based on credit score, loan amount, and
                  other factors.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Unable to load current rates</p>
          )}
        </div>

        <form onSubmit={calculateMortgage} className="space-y-6">
          <div>
            <Label htmlFor="homePrice" className={labelStyles}>
              Home price
            </Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
                $
              </span>
              <Input
                id="homePrice"
                type="text"
                inputMode="numeric"
                value={homePrice}
                onChange={(e) => handleHomePriceChange(e.target.value)}
                className={`${inputStyles} pl-7`}
                placeholder="550,000"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="downPayment" className={labelStyles}>
              Down payment
            </Label>
            <div className="flex gap-2 mt-1">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
                  $
                </span>
                <Input
                  id="downPaymentAmount"
                  type="text"
                  inputMode="numeric"
                  value={downPaymentAmount}
                  onChange={(e) =>
                    handleDownPaymentAmountChange(e.target.value)
                  }
                  className={`${inputStyles} pl-7`}
                  placeholder="110,000"
                  required
                />
              </div>
              <div className="relative w-24">
                <Input
                  id="downPaymentPercent"
                  type="text"
                  inputMode="decimal"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    handleDownPaymentPercentChange(e.target.value)
                  }
                  className={`${inputStyles} pr-7`}
                  placeholder="20"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
                  %
                </span>
              </div>
            </div>
            {downPaymentPercent && Number(downPaymentPercent) < 20 && (
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <AlertCircle className="h-4 w-4" />
                <p>
                  Mortgage insurance is usually required for down payments below
                  20%.
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="loanProgram" className={labelStyles}>
                Loan program
              </Label>
              <Select
                value={loanProgram}
                onValueChange={handleLoanProgramChange}
              >
                <SelectTrigger className={`${inputStyles} mt-1 h-[42px]`}>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-300 text-gray-900">
                  <SelectItem value="30">30-year fixed</SelectItem>
                  <SelectItem value="20">20-year fixed</SelectItem>
                  <SelectItem value="15">15-year fixed</SelectItem>
                  <SelectItem value="10">10-year fixed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="interestRate" className={labelStyles}>
                Interest rate
              </Label>
              <div className="relative mt-1">
                <Input
                  id="interestRate"
                  type="text"
                  inputMode="decimal"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))
                  }
                  className={`${inputStyles} pr-7`}
                  placeholder="6.812"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
                  %
                </span>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
          >
            Calculate Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
