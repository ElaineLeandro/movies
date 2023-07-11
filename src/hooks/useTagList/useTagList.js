import { useState } from "react";

export function useTagList() {
    const [tagList, setTagList] = useState([]);
  
    function addTag(tag){
      if(!tagList.includes(tag)){

        setTagList([...tagList, tag]);

      }

    }

    function removeTag(tag){
      const updatedTagLtagList = tagList.filter( (item) =>{ 
        console.log("O Segredo",item)
        return item !== tag;

      })
      
      console.log("Aqui Tem pereba",updatedTagLtagList)
          setTagList(updatedTagLtagList)
      console.log("A magica Acontece 2",setTagList(updatedTagLtagList))
  
    } 
 
    
   
  
    return {
      tagList,
      addTag,
      removeTag,
    
    };
  }
  