import { Container, Content} from "./styles";
import { Header } from "../../components/Header";
import {BiArrowBack} from "react-icons/bi"

export function MoviePreview(){
    return(
        <>
            <Header/>
            <Container>
            <Content>
            <BiArrowBack color="#FF859B" size={24}/>  
              Voltar
            </Content>
            
            <Movie>
                
            </Movie>
                

             </Container>
        </>
       
    )
}