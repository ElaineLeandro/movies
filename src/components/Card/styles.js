import  styled from "styled-components";


export const  Container = styled.div`
    grid-area: typings;
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: 200px;
    padding: 22px;
    border:none;
    border-radius: 16px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
   

`
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom:8px;
  inline-size: max-content;
  color: ${({theme})=> theme.COLORS.GRAY_200};
 
`
export const Icon = styled.div`
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
export const Content = styled.span`
color: ${({theme})=> theme.COLORS.GRAY_300};
font-weight: 700;
font-size: 16px;
line-height: 18px;
margin-top: 15px;
margin-bottom: 15px;`
;

export const Flags = styled.div`
    display: flex;
    gap: 8px;
    
`

