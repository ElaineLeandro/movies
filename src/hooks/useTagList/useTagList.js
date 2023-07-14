import { useState } from "react";

export function useTagList() {
    const [tagList, setTagList] = useState([]);
  
    function addTag(tag){
      if(!tagList.includes(tag)){

        setTagList([...tagList, tag]);

      }

    }

    function removeTag(tag){
      setTagList(oldTagList => {
        const removeId = oldTagList.findIndex(item => item === tag)
        oldTagList.splice(removeId, 1)
        console.log("Caiu Aqui!",oldTagList);
        return [...oldTagList]
      });
      // console.log("Daleee",tagList)
      // // tagList.splice(removeId, 1);
      // console.log("Pizza",removeId)
      // // setTagList(tagList.slice(removeId + 1))
      // // console.log(tagList.splice(removeId, 1))
      // console.log(tagList.slice(removeId))

      // setTagList((oldtagList) => oldtagList.filter( (item) =>{ 
      //   return item !== tag;
      // })
      // );

      // const updatedTagLtagList = tagList.filter( (item) =>{ 
      //   // console.log("O Segredo",item)
      //   return item !== tag;

      // })
      
      // console.log("Aqui Tem pereba",updatedTagLtagList)
          // setTagList(updatedTagLtagList)
      // console.log("A magica Acontece 2",setTagList(updatedTagLtagList))
  
    } 
 
    
   
  
    return {
      tagList,
      addTag,
      removeTag,
    
    };
  }
  