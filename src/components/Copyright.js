import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled, { keyframes } from 'styled-components'


const StyledCopyright = styled.p`
    font-size: 2rem;
`

export default function Copyright(props)  {
    console.log(props)
   return (<StyledCopyright><b> © Copyright:</b> 
   {props.copyright} 
   </StyledCopyright>)
    

}


