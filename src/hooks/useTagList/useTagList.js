import { useState } from "react";

export function useTagList() {
    const [tagList, setTagList] = useState([]);
  
    function addTag(tag) {
      setTagList([...tagList, tag]);
    }

    
  
    return {
      tagList,
      addTag,
    };
  }
  