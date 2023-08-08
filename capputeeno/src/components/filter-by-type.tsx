"use client"
import { useFilter } from '@/hooks/useFilter'
import { FilterType } from '@/types/filter-types'
import { styled } from 'styled-components'

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${ props => props.selected ? '600' : '400' };
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${ props => props.selected ? '4px solid var(--orange-low)' : 'none'};

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
`

export function FilterByType(){
    const { type, setType } = useFilter()

    function handleChangeType(value: FilterType){
        setType(value)
    }

    return (
        <FilterList>
            <FilterItem 
                selected={ type === FilterType.ALL}
                onClick={()=> handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem 
                selected={ type === FilterType.SHIRT}
                onClick={()=> handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem 
                selected={ type === FilterType.MUG}
                onClick={()=> handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}