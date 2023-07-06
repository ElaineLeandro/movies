import styled from 'styled-components'
import groupImg from '../../assets/group.png'

export const Container = styled.div`
height:100vh;

font-family: 'Roboto Slab', serif;
background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
display: flex;
align-items: stretch;




`
export const GroupImge = styled.div`
    flex: 1;
    background: url(${groupImg}) no-repeat center center;
    background-size: cover;
`

export const Form = styled.div`
    padding: 0 163px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > div:nth-child(6){
    margin-bottom: 24px;
    }

   >h1{
    color: ${({theme})=> theme.COLORS.CYAN_400};
    font-size:48px;
    text-align: center;
    }

    >h2{
    margin:48px 0 48px;
    font-size:24px;
    }

    >p{
        
    font-size:16px;
    color: ${({theme})=> theme.COLORS.GRAY_101};
    } 

    >button{
        color: ${({theme})=> theme.COLORS.BACKGROUND_800};
        :hover{
            background: ${({theme})=> theme.COLORS.CYAN_500};
        }
    
    }

    >a{
        display:flex;
        justify-content:center;
        align-items:end;
        gap:6px;
        margin-top:42px;
        font-size:16px;
        
        :hover{
            color: #00AEED;
        }
        
    }
`