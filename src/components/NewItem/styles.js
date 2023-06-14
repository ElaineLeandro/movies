import styled from "styled-components"

export const Container = styled.input`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.GRAY_300};
    
    border: ${({theme, isNew})=> isNew ?` 1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 10px;
   
    >button {
        border:none;
        background:none;
    }
   
   >input {
    width: 100%;
    height:88px;
   }

   padding: 12px;
   color: ${({theme})=> theme.COLORS.WHITE};
   background: transparent;

   border: none;

   &::placeholder {
    color:${({theme})=> theme.COLORS.GRAY_300};
   }

`