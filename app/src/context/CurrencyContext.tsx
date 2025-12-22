import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type CurrencyCode = "USD" | "EUR" | "AUD" | "GBP" | "ZAR";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatCurrency: (amountUsd: number) => string;
};

const exchangeRates: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  AUD: 1.52,
  GBP: 0.78,
  ZAR: 18.5,
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [currency]
  );

  const formatCurrency = (amountUsd: number) => formatter.format(amountUsd * exchangeRates[currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
};
