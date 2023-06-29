import styled from 'styled-components'

export const Container = styled.div`
   width: 80%;
   display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "header header"
    "Content Content"
    ;
    margin: 0 auto;
    font-family:'Roboto Slab', serif;
    background-color:$({(theme)}=> theme.COLORS);
`

export const Content = styled.div`
  color: ${({theme})=> theme.COLORS.PINKDARK};
  font-size:16px;
  display:flex;
  align-items:center;
  gap: 8px; 
`

