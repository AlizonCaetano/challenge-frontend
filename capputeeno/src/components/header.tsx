'use client'
import { styled } from 'styled-components'
import { PrimaryInputWithSearchIcon } from './primary-input' 
import { CartControl } from './cart-control'

import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 16rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 4rem;
    line-height: 150%;
`
export function Header(props: HeaderProps){
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>
                Capputeeno
            </Logo>
            <div>
                <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?"/>
                <CartControl/>
            </div>
        </TagHeader>
    )
}