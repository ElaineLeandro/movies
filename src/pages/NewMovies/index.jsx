import { Header } from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Section } from '../../components/Section';
import { ItemNew } from '../../components/ItemNew';
import { Container,Form, LinkMovie, NewMovie, InputForm, ButtonDelete, ButtonSave, ContainerButton} from "./styles";
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';
import { useTagList } from '../../hooks/useTagList/useTagList';


export function NewMovies(){

  const [valueIpunt, setValueInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const {tagList, addTag, removeTag} = useTagList('');

  function handleAddTag(){
    if (tagInput !== '' || tagInput == tagInput){
      addTag(tagInput);
      setTagInput('');
    }

  }
 



  function handleRemoveTag(tag) {
    removeTag(tag);
    console.log("A Magica acontece",removeTag(tag))
  }

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
            <div className= "tags">
              {tagList.map((tag, index) =>(<ItemNew value={tag} key={index} onClick={()=>handleRemoveTag(tag)}/>))}
            <ItemNew 
              value={tagInput}
              onChange={event => setTagInput(event.target.value) }
              onClick={handleAddTag}
              isNew placeholder="Novo marcador"/>
            {/* <ItemNew value="react"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/>
            <ItemNew value="react"/>
            <ItemNew isNew placeholder="Novo marcador"/> */}
            
            </div>
           
         
          </Section>     
          
                                     
          </Form>



      <ContainerButton>

        <ButtonDelete>
          Excluir filme
        </ButtonDelete>

        <ButtonSave
        //  onClick={()=> addTag(tagInput)}
        >
          Salvar Filme
        </ButtonSave>   
        
      </ContainerButton>
                         
      </Container>
    </>
  )
}