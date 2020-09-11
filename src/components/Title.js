import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

const StyledTitle = styled.div`
background-color: red;
    h2{
        font-size: 5rem;
    }
`


export default function Title(props){

    return( 
    <StyledTitle>
         <h1>NASA Photo of the Day</h1>
        <h2>{props.title}</h2>
    </StyledTitle>

    )
}
