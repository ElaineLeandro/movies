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

  function validateComment(){
    console.log("Caiu Aqui!",comment)
    // if(comment.length === ''){
    //   setCommentError('Este campo é obrigatório')
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
    setComment(event.target.value)
    validateComment() 
  }

  function handleRatingChange (e) {
    const regex = /^[0-9\b]+$/;    
    if (e.target.value === "" || regex.test(e.target.value)) { 
      setRating(e.target.value);  
    }


    // const value = event.target.value



    // console.log("Pizza",value)
    // if(!value){
    //   setRatingError("Esse campo é obrigatorio!")
    //   setRating('')
    //   return 
    // }
    // const filteredValue = value.match(/[0-5]/g).join()
    // setRating(filteredValue)
    // console.log(filteredValue)
   }

  // function validateRating(event) {
  //   const value = event.target.value;
  //   const convertValue = Number(value)
  //   console.log("CAIU BALÃO Number",convertValue)
  //   if(!/^\d+$/.test(value)){
  //     console.log("Mostra o Valor",value)
  //     return 
  //   }
  //   console.log("Mostra O valor", value)
  //   if (value === ' ') {
  //     console.log("Caiu Aqui!",convertValue)
  //     setRatingError('Este campo é obrigatório!');

  //   } else if (convertValue < 0 || convertValue > 5) {
  //     setRating('');
  //     setRatingError('A classificação deve ser um número entre 0 e 5!');
  //   } else {
  //     setRating(value);
  //     setRatingError('');
  //   }
  // }
  function handleObservationChange(event){
    setObservation(event.target.value)
    validateObservation() 
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
                  placeholder='Sua nota (de 0 a 5)'
                  type="number"
                  min={0}
                  max={5}
                  maxlength={1}
                  // pattern="[0-9]+"
                  value={rating}
                  onChange={handleRatingChange}
                  className={ratingError? 'error-input' : ''}
                  
                />
                {rating}
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
            {console.log(observationError)}  
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