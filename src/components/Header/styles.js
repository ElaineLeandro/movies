import styled from "styled-components"

export const Section = styled.header`
    grid-area: header;
    width: 100%;
    height: 116px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    margin-bottom: 32px;
    
    display: flex;
    justify-content: center;
    align-items:center;
`

export const Container = styled.div`
    width: 80%;  

    display: flex;
    align-items: center;
    justify-content: space-between;
   
`
export const  Brand = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
    text-align: center;  
`

export const Input = styled.input`
    width: 630px;
    height: 56px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;

    color: ${({theme})=> theme.COLORS.GRAY_400};
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
   

    >img{
        width: 64px;
        height:64px;
        border-radius: 50%;

    }

    >div{
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap:10px;
        font-size: 14px;
       

        >strong{
            inline-size: max-content;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            margin-bottom: 5px;
        }

        >span{
            color: ${({theme}) => theme.COLORS.GRAY_400};
            margin-left: 80px;
           
        }
    }

`