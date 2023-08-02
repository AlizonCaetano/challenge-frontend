import { styled } from 'styled-components'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from './icons/cart-icon'

const CartCount = styled.span`
    width: 1.7rem;
    height: 1.7rem;

    background: var(--delete-color);
    color: #fff;

    border-radius: 50%;
    padding: 0 5px;
    font-size: 1.2rem;

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon/>
            { value.length > 0 && <CartCount>{value.length}</CartCount> }
        </Container>
    )
}