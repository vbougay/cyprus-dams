"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import { DataProvider } from "@/context/DataContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        storageKey="cyprus-dams-theme"
        enableSystem
        disableTransitionOnChange
      >
        <LanguageProvider>
          <DataProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
              <Analytics />
            </TooltipProvider>
          </DataProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
