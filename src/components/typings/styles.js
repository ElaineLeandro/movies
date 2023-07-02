import  styled from "styled-components";


export const  Container = styled.div`
    grid-area: typings;
    display: flex;
    flex-direction: column;
        
   >h1{
        gap: 8px;
        font-weight: 700;
        font-size: 24px;
        line-height: 22px;
        color: ${({theme})=> theme.COLORS.GRAY_200}; 
   }

  >p{
        color: ${({theme})=> theme.COLORS.GRAY_300};
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
`
export const Star = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;

    >svg{
    
        width: 12px;
        height: 12px;
        color: ${({theme})=> theme.COLORS.CYAN_400};
        background-color: ${({theme})=> theme.COLORS.CYAN_400};
        
    }

`

