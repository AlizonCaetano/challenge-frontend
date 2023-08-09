import { styled } from 'styled-components'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from './icons/cart-icon'
import { useRouter } from 'next/navigation'

const CartCount = styled.span`
    width: 1.7rem;
    height: 1.7rem;

    background: var(--delete-color);
    color: #fff;

    border-radius: 50%;
    padding: 2px 5px;
    font-size: 1.2rem;

    margin-left: -10px;
`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }



    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            { value.length > 0 && <CartCount>{value.length}</CartCount> }
        </Container>
    )
}