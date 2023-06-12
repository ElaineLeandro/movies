import {Header} from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Container, Form, LinkMovie, NewMovie,Input} from "./styles";
import { BiArrowBack } from 'react-icons/bi';


export function NewMovies(){

    return(
        <Container>
            <Header/>

            <LinkMovie>
            <BiArrowBack color="#FF859B" size={16}/>  
            <a href="/">Voltar</a>
            </LinkMovie>

            <NewMovie>
                Novo filme
            </NewMovie>
            

            <Form>
               <Input placeholder='Título'/>
               <Input placeholder='Sua nota (de 0 a 5)'/>
                <Textarea placeholder='Observações'/>  
              
            </Form>
  
                
 
                    
        </Container>
    )
}