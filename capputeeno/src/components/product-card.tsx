import { formatPrice } from "@/utils/format-price"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string
}

const Card = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0 0 4px 4px;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);

    width: 25.6rem;
   
    img {
        width: 25.6rem;
        height: 30rem;
        border-radius: 4px 4px 0 0;

    }

    h3 {
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: .8rem 0;
        
        > div {
            width: 22.8rem;
            height: 1px;
            padding: 0;
            margin: .8rem 0;
            text-align: center;
            background: var(--shapes);
        }
    }
`
    

export function ProductCard( props: ProductCardProps){
    const price = formatPrice(props.price)

    const router = useRouter()

    const handleNavigate = () => {
        router.push("/product?id=" + props.id)
    }

    return(
        <Card onClick={handleNavigate}>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}