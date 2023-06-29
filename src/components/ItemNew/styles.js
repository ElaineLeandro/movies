import styled from 'styled-components'

export const Container = styled.div`
    grid-area:newItem;
    height: 56px;
    display: flex;
    /* align-items: center; */
    /* inline-size: max-content; */

   
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

    border: ${({theme, isNew}) => isNew ? ` 1px dashed ${theme.COLORS.GRAY_300}` : "none" };

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    > button{
        border: none;
        background: none;
    }

    > input{
        
       
        /* width:113px; */
        /* inline-size: max-content; */
        

        padding: 12px;

        background:transparent;
        color: white;
        
        border: none;

       &::placeholder{
        color: red;
       }
    }
`

// export const ItemNewIcon = styled.