"use client"
import { BackButton } from "@/components/back-button"
import { CartItem } from "@/components/cart/cart-item"
import { DefaultPageLayout } from "@/components/default-page-layout"
import { Divider } from "@/components/divider"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Product, ProductInCart } from "@/types/product"
import { formatPrice } from "@/utils/format-price"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 3.2rem;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        flex-direction: row;
    }
`

const CartListContainer = styled.div`

    h3 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 150%;
        color: var(--text-dark);

        span {
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 2.4rem;
    height: 100%;
`

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: white;
    min-width: 35rem;
    padding: 1.6rem 2.4rem;

    h3 {
        font-weight: 600;
        font-size: 2rem;
        color: var(--text-dark-2);
        text-transform: uppercase;
    }
`

const TotalItem = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 1%.6rem;
    line-height: 150%;

    margin-bottom: .8rem;
`

const ShopButton = styled.button`
    color: white;
    border-radius: 0.4rem;
    background: var(--sucess-color);
    border: none;
    padding: 1.2rem;
    text-transform: uppercase;
    width: 100%;
    margin-top: 4rem;
    cursor: pointer;
`

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatPrice(calculateTotal(value))
    const deliveryFee = 4000
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity}
        })

        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <DefaultPageLayout>
            <Container>
                <CartListContainer>
                <BackButton navigate="/"/>
                    <h3>Seu carrinho</h3>
                    <p>
                         Total {value.length} produtos
                        <span>{cartTotal}</span>
                    </p>
                    <CartList>
                        {value.map(item => 
                            <CartItem
                                product={item} 
                                key={item.id}
                                handleUpdateQuantity={handleUpdateQuantity}
                                handleDelete={handleDeleteItem}
                            />
                        )}
                    </CartList>
                </CartListContainer>
                <CartResultContainer>
                    <h3>Resumo do pedido</h3>
                    <TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>
                    </TotalItem>
                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatPrice(4000)}</p>
                    </TotalItem>
                    <Divider/>
                    <TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </TotalItem>
                    <ShopButton>Finalizar compra</ShopButton>
                </CartResultContainer>
            </Container>
        </DefaultPageLayout>
    )
}