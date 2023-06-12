import styled from "styled-components"

export const Container = styled.input`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.GRAY_300};
    
    border: ${({theme, isNew})=> isNew ?` 1px dashed ${theme.COLORS.GRAY_300}` : "none"};
   
   
`