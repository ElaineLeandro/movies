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

  const [tagInput, setTagInput] = useState('');
  const {tagList, addTag, removeTag} = useTagList('');
  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState('')
  const [rating, setRating] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [observation, setObservation] = useState('');
  const [observationError, setObservationError] = useState('')

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

  function validateComment(){
    console.log("Caiu Aqui!",comment)
    if(comment.length === ''){
      setCommentError('Este campo é obrigatório')
    }else if( comment.length < 3){
      setCommentError('O titulo deve ter no minimo 3 carcteres')
    }else if(comment.length > 3){
      setCommentError('')
    }
  }

  function validateRating(event){
    // const ratingMax = (event.target.value)
   
    if(rating === ''){
      setRatingError('Este campo é obrigatório')
    }else if( rating.length < 1){
      setRatingError('A nota deve estar entre 0 e 5')
    }else {
      setRatingError('')
    }
  }


  // function validateObservation(){
  //   if(observation === ''){
  //     setObservationError('Este campo é obrigatório')
  //   }else if( observation.length > 300){
  //     setObservationError('O comentário deve ter no máximo 300 carcteres')
  //   }else{
  //     setObservationError('')
  //   }
  // }

  function handleCommentChange(event){
    setComment(event.target.value)
    validateComment() 
  }
  
  function handleRatingChange(event){
    
    setRating(event.target.value)
    validateRating()
    console.log("Caiu Aqui2" )
  }
  // function handleObservationChange(event){
  //   setObservation(event.target.value)
  //   validateObservation() 
  // }


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
                  value={comment} 
                  onChange={handleCommentChange}
                  className={commentError ? 'error-input' : '' }
                />
                {commentError  && <span className="error-message">{commentError}</span>}
            </PackageInt>
            <PackageInN>
              <InputForm 
                  placeholder='Sua nota (de 0 a 5)'
                  type="number"
                  min={0}
                  max={5}
                  maxLength={1}
                  value={rating}
                  onChange={handleRatingChange}
                  className={ratingError? 'error-input' : ''}
                  
                />
              {ratingError  && <span className="error-message">{ratingError}</span>}
            </PackageInN>
          </WrapUp>
{/* 
          <Textarea
           placeholder='Observações'
           value={observation}
           onChange={handleObservationChange} */}
           
          {/* //  className={observationError? 'error-input' : ''}
          />   */}
          {/* {observationError && <span className="error-message">{observationError}</span>} */}

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