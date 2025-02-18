"use client";
import { I18nProviderClient } from "@/src/locales/client";
import { NuqsAdapter } from "nuqs/adapters/next";
import type { ReactNode } from "react";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Providers({ locale, children }: ProviderProps) {
  return (
    <NuqsAdapter>
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </NuqsAdapter>
  );
}
