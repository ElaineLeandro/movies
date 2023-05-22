import styled from  'styled-components'

export const Container = styled.div`
    width: 0 auto;
    
    background-color: ${({theme})=> theme.COLORS. BACKGROUND_900}

    grid-template-areas: 
    "header", "Title", "Package",

`
export const Title = styled.title`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    text-align: center;
    font-size:32px;
    color: ${({theme})=> theme.COLORS.WHINTE}
    
`


export const Package = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
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



  

