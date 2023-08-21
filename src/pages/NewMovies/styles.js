import styled from  'styled-components'

export const Container= styled.div`
    width: 82%;
    font-family:'Roboto Slab', serif;
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
    font-family: 'Roboto Slab';

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


export const LinkMovie = styled.div`
  grid-area:linkMovie;
  display: flex;
  align-items: center;
  justify-content: start;
  gap:10px;
  margin-bottom:24px;

  >a{
  color: ${({theme})=> theme.COLORS.CYAN_500};
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
  flex-direction: column;
 
  gap: 40px;

  .tags{
    background: #0D0C0F;
    display: flex;
    flex-wrap:wrap !important;
    padding: 16px;
    border-radius:8px;
    gap: 20px;
  };
  .error-message{
    color: red;
    margin-top: 5px;
  }
`;

export const WrapUp = styled.div`
  display:flex;
  gap: 40px;
  .input-container{ 
    display:flex;
    flex-direction: column;
    background: pink;
  }

  .error-message{
    color: red;
    margin-top: 5px;
  }
`
export const PackageInt = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;

`

export const PackageInN = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;

`

export const InputForm = styled.input`
  height: 55px;
  display: flex;
  flex: 1;
  justify-content: center;
  border:none;
  border-radius: 10px;
  padding: 18px 16px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  &.error-input {
    border-color: red;
  }
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
  color: ${({theme}) => theme.COLORS.CYAN_500};
  padding: 16px 250px;
  inline-size: max-content;
  weight: 500;
  font-size:16px;
`

export const ButtonSave = styled.button`
  grid-area:buttonSave;
  width:537px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.CYAN_500};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  padding: 16px 250px;
  inline-size: max-content;
  font-size:16px;
`