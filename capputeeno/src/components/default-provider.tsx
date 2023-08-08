"use client"
import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    tabletBreakpoint: "768px",
    desktopBreakpoint: "968px"
}

export function DefaultProvider({ children }: DefaultProvidersProps) {
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    { children }
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}