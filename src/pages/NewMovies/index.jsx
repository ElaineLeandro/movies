import { Header } from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Section } from '../../components/Section';
import { ItemNew } from '../../components/ItemNew';
import { Container,Form, LinkMovie, NewMovie, Tags, InputForm, ButtonDelete, ButtonSave, ContainerButton} from "./styles";
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';



export function NewMovies(){

  const [valueIpunt, setValueInput] = useState('');

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

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
          <InputForm 
            placeholder='Título'
          />
          <InputForm 
            placeholder='Sua nota (de 0 a 5)'
            type="number"
            min={0}
            max={5}
            value={valueIpunt}
            onChange={handleChange}

          />
          <Textarea placeholder='Observações'/>  

          <Section title="Marcadores">
            <Tags>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            </Tags>
           
         
          </Section>                                
          </Form>



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