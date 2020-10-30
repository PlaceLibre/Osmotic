import React, { useState } from 'react'
import { Icon } from "@chakra-ui/core"

import { BsStarFill } from "react-icons/bs";


const Favorite = (props) => {
    const [starred, setStarred] = useState(false);
  
    function handleClick() {
      setStarred(!starred);
    }
  
    return <Icon as={BsStarFill} boxSize={props.boxSize} color={starred ? 'brand' : 'brandMiddle'} onClick={handleClick} />
  }

  export default Favorite