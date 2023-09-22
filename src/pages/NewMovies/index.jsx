import { Header } from '../../components/Header'
import { Textarea } from '../../components/TexTarea';
import { Section } from '../../components/Section';
import { ItemNew } from '../../components/ItemNew';
import { Container,Form, LinkMovie, NewMovie,WrapUp, InputForm, ButtonSave, ContainerButton, PackageInt,PackageInN  } from "./styles";
import { BiArrowBack } from 'react-icons/bi';
import { useState } from 'react';
import { useTagList } from '../../hooks/useTagList/useTagList';
import { Link } from 'react-router-dom';


export function NewMovies(){

  const [tagInput, setTagInput] = useState('');
  const {tagList, addTag, removeTag} = useTagList('');
  // const [form, setForm] = useState({ 
  //   comment:"",
  //   rating: "",
  //   observation: ""

  //  })
  //  const [messageError, setMessageError] = useState({ 
  //   comment:"",
  //   rating: "",
  //   observation: ""

  //   /** setMessageError(oldError => ({...oldError, comment: 'O titulo deve ter no minimo 3 carcteres'}) )  */
  //  })
  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState('')
  const [rating, setRating] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [observation, setObservation] = useState('');
  const [observationError, setObservationError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleAddTag(){
    if (tagInput !== ''){
      addTag(tagInput);
      setTagInput('');
    }
  }

  function handleRemoveTag(tag) {
    removeTag(tag);

  }

  function validateComment(){
    if( comment.length < 3 ){
      setCommentError('O titulo deve ter no minimo 3 carcteres')
    }else if(comment.length > 3){
      setCommentError('')
    }
  }

  function validateObservation(){
    if(observation === ''){
      setObservationError('Este campo é obrigatório')
    }else if( observation.length > 100){
      setObservationError('O comentário deve ter no máximo 100 carcteres')
    }else{
      setObservationError('')
    }
  }

  function handleCommentChange(event){
    const newComment = event.target.value
    setComment(newComment)
    validateComment() 
    const formData = {
      comment: newComment,
      rating: rating,
      observation: observation,
      tagList: tagList,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  function handleRatingChange (e) {
    if(!e.target.value.length){
      setRatingError("Esse campo é obrigatório.")
      setRating('')
      return
    }

    const regex = /[^0-5]/g;
    const valueInput = e.target.value.replace(regex,'')
    const valueAsNumber = parseInt(valueInput)

    if (valueAsNumber >= 0 && valueAsNumber <= 5) {
      
      setRating(valueInput)
      setRatingError("")
      return
    }
   
   }

  
  function handleObservationChange(event){
    setObservation(event.target.value)
    validateObservation() 
  }

  function handleSubmit(e){
    e.preventDefault();

    if (commentError || ratingError || observationError || tagList.length === 0) {
      // Não envie o formulário se houver erros de validação
      return;
    }
    setIsSubmitting(true)
    saveData()
    setIsSubmitting(false)
  }

  function saveData(){
    const oldMovies = JSON.parse(localStorage.getItem('MOVIES') ?? '[]')
    const newMovie = {
      title: comment,
      rating,
      description: observation,
      tags: tagList
    }

    localStorage.setItem('MOVIES', JSON.stringify([...oldMovies, newMovie]))
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
                  value={comment} 
                  onChange={(event) => handleCommentChange(event)}
                  className={commentError ? 'error-input' : '' }
                />
                {commentError  && <span className="error-message">{commentError}</span>}
            </PackageInt>
            <PackageInN>
              <InputForm 
                 type='number'
                  placeholder='Sua nota (de 0 a 5)'
                  maxLength={1}
                  value={rating}
                  onChange={handleRatingChange}
                  className={ratingError? 'error-input' : ''}
                  
                />
              {ratingError  && <span className="error-message">{ratingError}</span>}
            </PackageInN>
          </WrapUp>

          <Textarea
           type="text"
           placeholder='Observações'
           value={observation}
           onChange={handleObservationChange} 
           
           className={observationError? 'error-input' : ''}
          /> 
           {observationError && <span className="error-message">{observationError}</span>} 

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
            <ContainerButton>

{/* 
              <ButtonDelete>
                Excluir filme
              </ButtonDelete> */}

              <ButtonSave
               onClick={handleSubmit}
              >
                Salvar Filme
              </ButtonSave>   
              
            </ContainerButton>
        </Form>
                         
      </Container>
    </>
  )
}