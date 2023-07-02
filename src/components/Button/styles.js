import Styled  from "styled-components";

export const Container = Styled.button`
    background-color: ${({theme})=> theme.COLORS.CYAN_500};
    color: "blue";
    width: 100%;
    height: 48px;

    border:none;
    border-radius:10px;
    font-weight: 500;
   
   &:disabled{
        opacity: 0.5;
        cursor:pointer;
   }
`