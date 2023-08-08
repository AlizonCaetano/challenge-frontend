'use client'
import { styled } from 'styled-components'
import { PrimaryInputWithSearchIcon } from './primary-input' 
import { CartControl } from './cart-control'

import { Saira_Stencil_One } from 'next/font/google'
import { useFilter } from '@/hooks/useFilter'

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    
    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 2rem 16rem;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;

    @media(min-width: ${props => props.theme.tabletBreakpoint}) {
        font-size: 2.4rem;
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 4rem;
    }
`
export function Header(){
    const { search, setSearch } = useFilter()
    
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>
                Capputeeno
            </Logo>
            <div>
                <PrimaryInputWithSearchIcon 
                value={search}
                handleChange={setSearch}
                placeholder="Procurando por algo específico?"/>
                <CartControl/>
            </div>
        </TagHeader>
    )
}