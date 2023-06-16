import styled from  'styled-components'

export const ContainerNew = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 105px auto; */
    grid-template-areas:
    "header header"
    "linkMovie linkMovie"
    "newMovie newMovie"
    "form form";
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

export const ButtonDelete = styled.button`
  width:537px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_901};
  color: ${({theme}) => theme.COLORS.PINKDARK};
  padding: 16px 250px;
  inline-size: max-content;
`

export const ButtonSave = styled.button`
  width:537px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PINKDARK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  padding: 16px 250px;
  inline-size: max-content;
`