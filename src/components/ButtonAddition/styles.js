import styled from "styled-components"

export const Container = styled.button`
    width: 207px;
    height: 48px;
    
    display:flex;
    align-items: center;
    justify-content: center;
    grid-area: buttonAddition;

    font-size: 16px;
    weight: 400;
   
    border: none;
    border-radius: 8px;
    background-color: ${({ theme}) => theme.COLORS.CYAN_500};
    color: ${({ theme }) => theme.COLORS. BACKGROUND_900};
    padding: 32px;
    cursor: pointer;
`