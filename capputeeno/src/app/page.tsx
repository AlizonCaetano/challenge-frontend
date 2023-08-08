'use client'

import { FilterBar } from '@/components/filter-bar'
import { ProductList } from '@/components/products-list'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 2.4rem;
  height: 100%;
  background-color: var(--bg-primary);

  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 3.4rem 16rem !important;
  }
`

export default function Home() {

  return (
      <PageWrapper>
        <FilterBar/>
        <ProductList/>
      </PageWrapper>
  )
}
