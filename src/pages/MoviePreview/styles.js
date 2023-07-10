import styled from 'styled-components'

export const Container = styled.div`
   width: 80%;
   display: grid;
   grid-template-columns:1fr;
   
   grid-template-areas: 
    " header"
    "content"
    "title"
    "datetime"
    "moviestags"
    "description"
   ;
   
    padding: 24px;
    margin: 0 auto;
    font-family:'Roboto Slab', serif;
    background-color:$({(theme)}=> theme.COLORS);

    font-family: 'Roboto Slab';

    overflow-y: auto;
    height: 40vh;
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

`;

export const Content = styled.div`
  grid-area:content;
  color: ${({theme})=> theme.COLORS.CYAN_500};
  font-size:20px;
  display:flex;
  align-items:center;
  gap: 8px; 

`;

export const ContentTitle = styled.div`
  grid-area: title;
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
        
        
    };
`

export const ContentDateTime = styled.div`
 grid-area: datetime;
 display: flex;
 margin-top: 24px;
 font-size:16px;
 gap: 8px;
 font-family:'Roboto',sans-serif;
 
 >span{
    display: flex;
    justify-content: center;
    gap: 8px;

 };

 >span>img{
    
    border-radius: 8px;
    height: 20px;
    width: 20px;
    

 };

 >strong{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
 };
 

`
export const Tags = styled.div`
  grid-area: moviestags;
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 8px;
  font-size: 12px;
  font-family: 'Roboto';
`

export const ContentDescription = styled.div`
grid-area: description;

`

export const Description = styled.p`
display: flex;
flex-direction: column; 
`