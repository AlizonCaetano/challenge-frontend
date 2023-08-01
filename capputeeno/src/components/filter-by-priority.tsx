import { styled } from 'styled-components'
import { ArrowIcon } from './arrow-icon'
import { useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityTypes } from '@/types/priority-types'

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    button {
        cursor: pointer;
        border: none;

        background: transparent;

        font-family: inherit;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const PriorityFilter = styled.ul`
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 0;

    text-align: start;
    
    width: 20rem;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 1.2rem 1.6rem;
    list-style: none;
    
    li {
        color: var(--text-dark);
        font-size: 1.4rem;
    }

    li + li {
        margin-top: .6rem;
    }
`

export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen]= useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por 
                <ArrowIcon/>
                {isOpen &&
                    <PriorityFilter>
                        <li onClick={()=> handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                        <li onClick={()=> handleUpdatePriority(PriorityTypes.NEWS)}>Preço: Maior - menor</li>
                        <li onClick={()=> handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                        <li onClick={()=> handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Mais vendidos</li>
                    </PriorityFilter>
                }
            </button>
        </FilterContainer>
    )
}