import styled from  'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header"
    "title buttonAddition"
    "package package";
    margin: 0 auto;
   
    background-color: ${({theme})=> theme.COLORS. BACKGROUND_900}

    

`
export const Title = styled.title`
    grid-area: title; 
    display: flex;
    grid-gap: 935px;
    
    margin-left: 120px;
    text-align: center;
    inline-size: max-content;
    font-size:32px;
    color: ${({theme})=> theme.COLORS.WHINTE}
   
`


export const Package = styled.div`
    grid-area: package; 
    width: 85%;

    display: flex;
    flex-direction: column; 
    margin: 37px auto;
    border: none;
    border-radius: 16px;
    background-color: ${({theme})=> theme.COLORS. BACKGROUND_500};
    padding: 32px;
   

    >subtitle{
        display:flex;
        gap: 8px;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
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
/* padding: 8px; */
>svg{
   
    width: 12px;
    height: 12px;
    color: ${({theme})=> theme.COLORS.PINK};
    background-color: ${({theme})=> theme.COLORS.PINK_200};
    
}

`



  

