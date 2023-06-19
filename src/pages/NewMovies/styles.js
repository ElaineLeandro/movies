import styled from  'styled-components'

export const Container= styled.div`
    width: 82%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
    "header header"
    "linkMovie linkMovie"
    "newMovie newMovie"
    "form form"
    "button button";
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    margin: 0 auto;

    overflow-y: auto;
    height: 50vh;
    padding:24px;

    scrollbar-color: #FF859B transparent;

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
   
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.PINK};
      border-radius: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_100};
    border-radius: 3px;
    }
`; 


export const LinkMovie = styled.div`
  grid-area:linkMovie;
  display: flex;
  align-items: center;
  justify-content: start;
  gap:10px;
  margin-bottom:24px;

  >a{
  color: ${({theme})=> theme.COLORS.PINKDARK};
  }
`;

export const NewMovie = styled.title`
  grid-area: newMovie;
  display: flex;
  font-size: 36px;
  margin-bottom:40px;
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
  width:907px;
  height: 55px;

  display: flex;
  justify-content: center;

  border:none;
  border-radius: 10px;
  padding: 18px 16px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const ContainerButton = styled.div`
  grid-area: button;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

`
export const ButtonDelete = styled.button`
  grid-area:buttonDelete;
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
  grid-area:buttonSave;
  width:537px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PINKDARK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  padding: 16px 250px;
  inline-size: max-content;
`