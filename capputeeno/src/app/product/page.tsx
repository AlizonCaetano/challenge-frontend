"use client"

import { styled } from "styled-components"
import { DefaultPageLayout } from '@/components/default-page-layout'
import { BackButton } from "@/components/back-button"
import { useProduct } from "@/hooks/useProduct"
import { formatPrice } from "@/utils/format-price"
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon"


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 3.2rem;
        margin-top: 2.4rem;


        img {
            max-width: 64rem;
            width: 50%;
        }

        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115d8c;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 1rem 0;
                text-align: center;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .8rem;
            }

        }
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 150%;
        color: var(--text-dark-2)
    }

    h2 {
        font-weight: 300;
        font-size: 3.2rem;
        line-height: 150%;
        color: var(--text-dark-2)
    }

    span:nth-of-type(2) {
        font-size: 2rem;
        font-weight: 600;
        color: var(--shapes-dark);
        margin-bottom: 2.4rem;
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--text-dark)
    }

    div {
        margin-top: 3rem;

        h3 {
            margin-bottom: 1rem;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 500;
            color: var(--text-dark);
        }
    }
`

export default function Product({ searchParams }: { searchParams: { id:string }}) {
    const { data } = useProduct(searchParams.id)

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} />
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
                            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <div>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button>
                            <ShoppingBagIcon/>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}