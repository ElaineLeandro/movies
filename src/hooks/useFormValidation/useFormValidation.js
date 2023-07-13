import { useState } from 'react';

export function useFormValidation(){
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')

  function validateInput(value){
    const regex = /^[1-5]$/; // Apenas números de 1 a 5

    if(!regex.test(value)){
        setInputError('Digite um valor entre 1 e 5')
    }else{
        setInputError('')
    }
    setInputValue(value)
  }

  
  function handleChange(event){
    const newValue = event.target.value
    setvalue(newValue)
  }

  return{
    inputValue,
    setInputValue,
    inputError,
    validateInput,
    handleChange,
  }
};
