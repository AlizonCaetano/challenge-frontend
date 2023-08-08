import { styled } from "styled-components";
import { ReturnIcon } from "@/components/icons/return-icon"
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    background: transparent;
    border: none;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 150%;
    color: var(--secondary-text);
`

interface BtnProps {
    navigate: string
}

export function BackButton({ navigate }: BtnProps){
    const router = useRouter()
    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <Button onClick={handleNavigate}>
            <ReturnIcon/>
            Voltar
        </Button>
    )
}