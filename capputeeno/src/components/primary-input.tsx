import { styled } from 'styled-components'
import { SearchIcon } from './search-icon'

import { InputHTMLAttributes } from 'react'

export const PrimaryInput = styled.input`
    width: 35.2rem;
    border-radius: .8rem;
    border: none;
    padding: 1rem 1.6rem;

    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;

    background-color: var(--bg-secondary);
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 35.2rem;

    svg {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}