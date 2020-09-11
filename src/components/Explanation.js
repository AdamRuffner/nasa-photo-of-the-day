import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

const StyledExplanation = styled.p`
    color: white;
    width: 80%;
    margin: 0 auto;
`


export default function Explanation(props) {
    return (
        <StyledExplanation>
            <p> {props.explanation}</p>
        </StyledExplanation>

    )
}