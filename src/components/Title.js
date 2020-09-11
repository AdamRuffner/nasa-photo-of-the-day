import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'


const StyledTitle = styled.div`

    h1{
        font-size: 5rem;
        color: white;
    }
    h2{
        font-size: 2rem;
        color: white;
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
