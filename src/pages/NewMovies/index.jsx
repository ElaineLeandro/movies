import { Header } from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Section } from '../../components/Section';
import { ItemNew } from '../../components/ItemNew';
import { Container,Form, LinkMovie, NewMovie,WrapUp, InputForm, ButtonDelete, ButtonSave, ContainerButton, PackageInt,PackageInN  } from "./styles";
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';
import { useTagList } from '../../hooks/useTagList/useTagList';
import { Link } from 'react-router-dom';


export function NewMovies(){

  // const [valueIpunt, setValueInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const {tagList, addTag, removeTag} = useTagList('');
  const[error, setError] = useState('');
  const [validationFailed, setValidationFailed] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [odservations, setODServations] = useState('');

  function handleAddTag(){
    if (tagInput !== '' || tagInput == tagInput){
      addTag(tagInput);
      setTagInput('');
    }
  }

  function handleRemoveTag(tag) {
    removeTag(tag);
    // console.log("A Magica acontece",removeTag(tag))
  }

  // function handleChange(event){
  //   const newValue = event.target.value

  //   if(/^\d{5}$/.test(newValue)){
  //     setError("")
      
  //     setValidationFailed(false)
  //   }else{
  //     setError('O valor deve conter exatamente 5 caracteres numéricos.')
  //     setValidationFailed(true)
  //   }

  //   setValueInput(newValue)
  // }

  function handleTitleChange(event) {
    const newTitle = event.target.value;

    if(newTitle <= 100){
      setTitle(newTitle);
      setTitleError("")
    }else{
      setTitle('')
      setTitleError("O nome do filme tem que conter maximo de 100 caracteres")
    }
  }

  function handleRatingChange(event){
    const newRating = event.target.value;

    if(newRating >= 0 && newRating <=5){
      setRating(newRating);
      setRatingError("")
    }else{
      setRating('')
      setRatingError("A nota deve estar entre 0 e 5.")
    }
  }


  return(
    <>
      <Header/>

      <Container>

        <LinkMovie>
          <BiArrowBack color="#FF859B" size={16}/>  
          <Link to= "/">Voltar</Link>
        </LinkMovie>
          <NewMovie>
             Novo filme
          </NewMovie>
        <Form>
          <WrapUp>
            <PackageInt>
                <InputForm 
                  placeholder='Título'
                  type="text"
                  value={title}
                  onChange={handleChange}
                 
                />
            </PackageInt>
            <PackageInN>
              <InputForm 
                  placeholder='Sua nota (de 0 a 5)'
                  type="number"
                  min={0}
                  max={5}
                  value={valueIpunt}
                  onChange={handleChange}
                  className={validationFailed ? 'error-input' : ''}
                />
              {validationFailed && <span className="error-message">{error}</span>}
            </PackageInN>
          </WrapUp>

          <Textarea
           placeholder='Observações'
           value={odservations}
           onChange={event => {
            if(event.target.value.length <= 300){
              setODServations(event.target.value)
            }
           }}
          />  

          <Section title="Marcadores">
            <div className= "tags">
              {tagList.map((tag, index) =>(
                <ItemNew 
                  value={tag} 
                  key={index} 
                  onClick={()=>handleRemoveTag(tag)}/>))
              }
            <ItemNew 
              value={tagInput}
              onChange={event => setTagInput(event.target.value) }
              onClick={handleAddTag}
              isNew placeholder="Novo marcador"/>
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