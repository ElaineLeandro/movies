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
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    > div:nth-child(0){
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

    > button{
        color: ${({theme})=> theme.COLORS.BACKGROUND_800};

        :hover !important{
            background: ${({theme})=> theme.COLORS.CYAN_400};
        }
    
    }

    >a{
        margin-top:42px;
        text-align: center;
        color: ${({theme})=> theme.COLORS.CYAN_400};

        :hover{
            color:#00AEED;
        }
    }
`