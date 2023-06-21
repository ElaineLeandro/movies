import { Header } from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Section } from '../../components/Section';
import { ItemNew } from '../../components/ItemNew';
import { Container,Form, LinkMovie, NewMovie, InputForm, ButtonDelete, ButtonSave, ContainerButton} from "./styles";
import { BiArrowBack } from 'react-icons/bi';



export function NewMovies(){
  return(
    <>
      <Header/>

      <Container>

        <LinkMovie>
          <BiArrowBack color="#FF859B" size={16}/>  
          <a href="/">Voltar</a>
        </LinkMovie>
          <NewMovie>
             Novo filme
          </NewMovie>
        <Form>
          <InputForm placeholder='Título'/>
          <InputForm placeholder='Sua nota (de 0 a 5)'/>
          <Textarea placeholder='Observações'/>                                  
          </Form>

        <Section title="Marcadores">
          
            <ItemNew value="teste"/>
            <ItemNew isNew/>
           
          
        </Section>

      <ContainerButton>

        <ButtonDelete>
          Excluir filme
        </ButtonDelete>

        <ButtonSave>
          Salvar Filme
        </ButtonSave>   
        
      </ContainerButton>
                         
      </Container>
    </>
  )
}