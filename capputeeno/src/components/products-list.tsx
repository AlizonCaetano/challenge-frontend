"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import { styled } from "styled-components"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 3.2rem;
    max-width: 100%;

    margin-top: 3.2rem;
`

export function ProductList(){
    const { data }= useProducts()
    return(
       <ListContainer>
        {data?.map(product => <ProductCard
            key={product.id}
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
        />)}
       </ListContainer>
   )
}