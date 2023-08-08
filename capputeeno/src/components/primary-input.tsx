import { InputHTMLAttributes } from 'react'
import { styled } from 'styled-components'
import { SearchIcon } from './icons/search-icon'


export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: .8rem;
    border: none;
    padding: 1rem 1.6rem;

    font-family: inherit;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;

    background-color: var(--bg-secondary);
    color: var(--text-dark);

    @media (min-width:${props => props.theme.desktopBreakpoint}) {
        font-size: 1.4rem;
        line-height: 2.2rem;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 25rem;

    svg {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }

    @media(min-width:${props => props.theme.desktopBreakpoint}) {
        width: 35.2rem;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput 
            onChange={(event) => props.handleChange(event.target.value)}
            {...props}
            />
            <SearchIcon/>
        </InputContainer>
    )
}