import styled from  'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header"
    "title buttonAddition"
    "package package";
    margin: 0 auto;
   
 

`
export const Title = styled.title`
    grid-area: title; 
    display: flex;
    grid-gap: 935px;
    
    margin-left: 120px;
    text-align: center;
    inline-size: max-content;
    font-size:32px;
    color: ${({theme})=> theme.COLORS.WHITE}
   
`


export const Package = styled.div`
    grid-area: package; 
    width: 85%;
    height; auto;

    display: flex;
    flex-direction: column; 
    margin: 37px auto;
    border: none;
    border-radius: 16px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_100};
    padding: 32px;
    gap: 24px;
    
    
`





  

