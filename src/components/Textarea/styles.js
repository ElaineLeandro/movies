import styled  from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    border: none;
    resize:none;

    border-radius: 10px;
    padding: 19px 16px;

   &::placehoder{
    color: ${({theme}) => theme.COLORS.GRAY_300};
    };   
    

`