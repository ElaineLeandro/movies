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
    grid-gap: 801px;
    
    margin-left: 120px;
    padding: 0 4vw;
    text-align: center;
    inline-size: max-content;
    font-size:32px;
    color: ${({theme})=> theme.COLORS.WHITE};
   
`


export const Package = styled.div`
    grid-area: package; 
    width: 85%;
    height: auto;

    display: flex;
    flex-direction: column; 
    margin: 37px auto;
    border: none;
    border-radius: 16px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_100};
    gap: 24px;
    padding: 0 5vw;

    overflow-y: scroll;
    height: 100vh;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.COLORS.DAR};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 4px;
  }
    
`

   






  

