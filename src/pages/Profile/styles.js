import styled from 'styled-components'

export const ContainerProfile =  styled.div`
    width:100%;

    >header{
        width:100%;
        height:144px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        padding: 0 144px;



        background-color:${({theme})=> theme.COLORS.BACKGROUND_901};

      a{
        color:${({theme})=> theme.COLORS.PINKDARK};
        font-size:24px;
      }
      
    }
`

export const Form = styled.form`

    width: 100%;
    max-width: 340px;
    margin: 30px auto 0;
    background-color: blue;

    > div:nth-child(4){
    margin-top: 24px;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -120px auto 32px;
  width:186px;
  height:186px;

  img{
    width:186px;
    height:186px;
    border-radius:50%;
  }

  >label{
    width: 48px;
    
  }
`



