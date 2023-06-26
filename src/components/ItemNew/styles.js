import styled from 'styled-components'

export const Container = styled.div`
    grid-area:newItem;
    width:100%;
    display: flex;
    align-items: center;
   
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_901};

    border: ${({theme, isNew}) => isNew ? ` 1px dashed ${theme.COLORS.GRAY_300}` : "none" };

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    > button{
        border: none;
        background: none;
    }

    > input{
        height: 56px;
        width: 100%;

        padding: 12px;

        background:transparent;
        

        border: none;

       &::placeholder{
        color: red;
       }
    }
`
