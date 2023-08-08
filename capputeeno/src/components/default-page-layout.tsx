"use client"

import { styled } from "styled-components"

export const DefaultPageLayout = styled.div`
    min-height: 100vh;
    background-color: var(--bg-primary);
    padding: 1.2rem 2.4rem;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 3.4rem 16rem !important;
    }
`