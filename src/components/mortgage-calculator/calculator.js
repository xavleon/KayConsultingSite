"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, RefreshCw } from "lucide-react";

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("550,000");
  const [downPaymentAmount, setDownPaymentAmount] = useState("110,000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [loanProgram, setLoanProgram] = useState("30");
  const [interestRate, setInterestRate] = useState("7.0");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
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

      if (price && rate && years && down >= 0 && down < price) {
        const principal = price - down;
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = years * 12;

        if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
          const monthlyPI =
            (principal *
              (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

          if (isFinite(monthlyPI) && monthlyPI > 0) {
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

  const withCommas = (value) => {
    const digits = String(value ?? "").replace(/[^0-9]/g, "");
    if (!digits) return "";
    return Number(digits).toLocaleString("en-US");
  };

  const handleDownPaymentAmountChange = (value) => {
    const amount = withCommas(value);
    setDownPaymentAmount(amount);
    if (homePrice && amount) {
      const percent =
        (parseNumericInput(amount) / parseNumericInput(homePrice)) * 100;
      setDownPaymentPercent(Number(percent.toFixed(1)).toString());
    }
  };

  const handleDownPaymentPercentChange = (value) => {
    const percent = value.replace(/[^0-9.]/g, "");
    setDownPaymentPercent(percent);
    if (homePrice && percent) {
      const amount = Math.round(
        parseNumericInput(homePrice) * (parseNumericInput(percent) / 100)
      );
      setDownPaymentAmount(withCommas(amount));
    }
  };

  const handleHomePriceChange = (value) => {
    const price = withCommas(value);
    setHomePrice(price);
    if (price && downPaymentPercent) {
      const amount = Math.round(
        parseNumericInput(price) * (parseNumericInput(downPaymentPercent) / 100)
      );
      setDownPaymentAmount(withCommas(amount));
    }
  };

  const calculateMortgage = (e) => {
    e.preventDefault();

    const price = parseNumericInput(homePrice);
    const down = parseNumericInput(downPaymentAmount);
    const rate = parseNumericInput(interestRate);
    const years = parseNumericInput(loanProgram);

    if (!price || !rate || !years || down < 0 || down >= price) {
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
      setMonthlyPayment(monthlyPI);
    } else {
      setMonthlyPayment(null);
    }
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined || value === "") return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value) => {
    if (value === null || value === undefined || value === "") return "";
    return `${value}%`;
  };

  const refreshRates = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    fetch("/api/mortgage-rates")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch rates");
        return response.json();
      })
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
  };

  const priceValue = parseNumericInput(homePrice);
  const downValue = parseNumericInput(downPaymentAmount);
  const loanAmount = Math.max(priceValue - downValue, 0);
  const downShare =
    priceValue > 0 ? Math.min((downValue / priceValue) * 100, 100) : 0;
  const selectedRate =
    currentRates?.rates?.default?.allRates?.[loanProgram]?.rate ??
    currentRates?.rates?.default?.samples?.[0]?.rate;
  const selectedApr =
    currentRates?.rates?.default?.allRates?.[loanProgram]?.apr ??
    currentRates?.rates?.default?.samples?.[0]?.apr;

  const fieldClass =
    "h-12 w-full rounded-xl border border-stone-200 bg-white text-base text-ink shadow-none outline-none focus:ring-2 focus:ring-pine";
  const labelClass = "mb-2 block text-sm font-medium text-stone-700";

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        onSubmit={calculateMortgage}
        className="order-2 space-y-7 rounded-[2rem] border border-stone-200 bg-white p-6 sm:p-8 lg:order-1"
      >
        <div>
          <Label htmlFor="homePrice" className={labelClass}>
            Home price
          </Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              $
            </span>
            <Input
              id="homePrice"
              type="text"
              inputMode="numeric"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(e.target.value)}
              className={`${fieldClass} pl-7`}
              placeholder="550,000"
              required
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="downPaymentAmount" className="text-sm font-medium text-stone-700">
              Down payment
            </Label>
            <span className="text-sm text-stone-500">
              {downShare.toFixed(0)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            aria-label="Down payment percent"
            value={Math.min(Number(downPaymentPercent) || 0, 100)}
            onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
            className="mb-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-stone-200 accent-pine"
          />
          <div className="flex gap-3">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                $
              </span>
              <Input
                id="downPaymentAmount"
                type="text"
                inputMode="numeric"
                value={downPaymentAmount}
                onChange={(e) => handleDownPaymentAmountChange(e.target.value)}
                className={`${fieldClass} pl-7`}
                placeholder="110,000"
                required
              />
            </div>
            <div className="relative w-28">
              <Input
                id="downPaymentPercent"
                type="text"
                inputMode="decimal"
                value={downPaymentPercent}
                onChange={(e) => handleDownPaymentPercentChange(e.target.value)}
                className={`${fieldClass} pr-8`}
                placeholder="20"
                required
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
                %
              </span>
            </div>
          </div>
          {downPaymentPercent && Number(downPaymentPercent) < 20 && (
            <div className="mt-3 flex items-start gap-2 text-sm text-stone-600">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <p>
                Down payments under 20% usually require mortgage insurance,
                which is not in this estimate.
              </p>
            </div>
          )}
        </div>

        <div>
          <p className={labelClass}>Loan term</p>
          <div className="grid grid-cols-4 gap-2">
            {["30", "20", "15", "10"].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handleLoanProgramChange(term)}
                className={`h-11 rounded-xl text-sm font-medium transition-colors ${
                  loanProgram === term
                    ? "bg-pine text-white"
                    : "bg-paper text-stone-600 hover:text-ink"
                }`}
              >
                {term} yr
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="interestRate" className={labelClass}>
            Interest rate
          </Label>
          <div className="relative">
            <Input
              id="interestRate"
              type="text"
              inputMode="decimal"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(e.target.value.replace(/[^0-9.]/g, ""))
              }
              className={`${fieldClass} pr-8`}
              placeholder="6.8"
              required
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
              %
            </span>
          </div>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-full bg-pine text-base text-white hover:bg-[#14332f]"
        >
          Update estimate
        </Button>
      </form>

      <aside className="order-1 h-fit rounded-[2rem] bg-pine p-7 text-white lg:sticky lg:top-28 lg:order-2">
        <p className="text-sm text-stone-300">Estimated monthly payment</p>
        <p className="mt-2 text-5xl font-semibold tracking-tight">
          {monthlyPayment ? formatCurrency(monthlyPayment) : "—"}
        </p>
        <p className="mt-2 text-sm text-stone-300">Principal and interest</p>

        <div className="mt-8">
          <div className="flex h-2 overflow-hidden rounded-full bg-white/15">
            <div
              className="bg-[#e4d3b4]"
              style={{ width: `${downShare}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-sm text-stone-300">
            <span>Down {formatCurrency(downValue) || "$0"}</span>
            <span>Loan {formatCurrency(loanAmount) || "$0"}</span>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium">Market rate</p>
            <button
              type="button"
              onClick={refreshRates}
              disabled={isRefreshing || isLoadingRates}
              className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white disabled:opacity-50"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`}
              />
              {isRefreshing ? "Refreshing" : "Refresh"}
            </button>
          </div>

          {isLoadingRates ? (
            <p className="mt-3 text-sm text-stone-300">Loading current rates…</p>
          ) : ratesError ? (
            <div className="mt-3">
              <p className="text-sm text-red-200">
                Rates did not load. The estimate is using {interestRate || "your"}%.
              </p>
              <button
                type="button"
                onClick={refreshRates}
                className="mt-3 text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                Try again
              </button>
            </div>
          ) : currentRates ? (
            <div className="mt-4 space-y-3">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                    {loanProgram}-year fixed
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    {formatPercent(selectedRate)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.16em] text-stone-400">
                    APR
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    {formatPercent(selectedApr)}
                  </p>
                </div>
              </div>
              {rateTrend && (
                <p className="text-sm text-stone-300">
                  {rateTrend === "up" ? "Up" : "Down"} since the last refresh
                  {previousRates
                    ? ` by ${Math.abs(
                        (selectedRate || 0) -
                          (previousRates.rates.default.allRates[loanProgram]
                            ?.rate || 0)
                      ).toFixed(2)}%`
                    : ""}
                  .
                </p>
              )}
              <p className="text-xs leading-5 text-stone-400">
                {currentRates.rates.default.source}
                {currentRates.rates.default.realTime ? " · Live" : ""}
                {" · "}
                {new Date(
                  currentRates.rates.default.lastUpdated
                ).toLocaleString()}
                . Actual rates vary with credit, loan size, and location.
              </p>
              {currentRates.rates.default.note && (
                <p className="rounded-xl bg-white/10 p-3 text-xs leading-5 text-[#e4d3b4]">
                  {currentRates.rates.default.note}
                </p>
              )}
            </div>
          ) : (
            <p className="mt-3 text-sm text-stone-300">
              Market rates are unavailable. Enter a rate to estimate.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
