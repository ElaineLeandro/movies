import styled from 'styled-components'

export const Container = styled.div`
   width: 80%;
   display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "header header"
    "Content Content"
    "ContentTitle "
    ;
    margin: 0 auto;
    font-family:'Roboto Slab', serif;
    background-color:$({(theme)}=> theme.COLORS);

    overflow-y: auto;
    font-family: 'Roboto Slab';

    scrollbar-color: #FF859B transparent;

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

export const Content = styled.div`
  color: ${({theme})=> theme.COLORS.CYAN_500};
  font-size:20px;
  display:flex;
  align-items:center;
  gap: 8px; 

`

export const ContentTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 24px;
  
  font-size:36px;

  
 
`
export const Icon = styled.div`
    display: flex;
    gap: 8px;
    

    >svg{
      width: 20px;
      height: 20px;
      color: ${({theme})=> theme.COLORS.CYAN_400};
        
        
    }
`

export const ContentDateTime = styled.div`
 display: flex;

`
export const Tags = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 8px;
  font-size: 12px;
  font-family: 'Roboto';
`