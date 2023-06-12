import styled from  'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width:
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: 105px auto; */
    grid-template-areas:
    "header header"
    "linkMovie linkMovie"
    "newMovie newMovie"
    "form form";
    margin: 0 auto;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
`; 

export const LinkMovie = styled.div`
  grid-area:linkMovie;

  display: flex;
  align-items: center;
  justify-content: start;
  gap:10px;

  >a{
  color: ${({theme})=> theme.COLORS.PINKDARK};
  }
`;

export const NewMovie = styled.title`
  grid-area: newMovie;
  display: flex;
  font-size: 36px;
  color: ${({theme})=> theme.COLORS.WHITE};
`;

export const Form = styled.form`
  grid-area: form;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 40px;

`;


export const Input = styled.input`
  width:537px;
  height: 55px;

  display: flex;
  justify-content: center;

  border:none;
  border-radius: 10px;
  padding: 18px 16px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`