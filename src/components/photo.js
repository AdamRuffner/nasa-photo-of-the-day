import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const StyledPhoto = styled.img`
     width: 80%;
`




export default function Photo({ url }){
    return <StyledPhoto src = {url} alt = 'NASA photo of the day' />
}