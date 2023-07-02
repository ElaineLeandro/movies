import styled from  'styled-components'

export const Container = styled.div`
    width: 80%;
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "header header"
    "title buttonAddition"
    "package package";
    margin: 0 auto;
    font-family:'Roboto Slab', serif;
`
export const Title = styled.title`
    grid-area: title; 
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    text-align: center;
    font-size:32px;
    color: ${({theme})=> theme.COLORS.WHITE};
   
`


export const Package = styled.div`
    grid-area: package; 
   
    
    display: flex;
    flex-direction: column; 
    margin-top: 37px;
    border: none;
    border-radius: 16px;
   
    gap: 24px;
  

    overflow-y: auto;
    height: 50vh;

    scrollbar-color: #22d3ee transparent;

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
   
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.CYAN_400};
      border-radius: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_100};
    border-radius: 3px;
    }
    
`

   






  

