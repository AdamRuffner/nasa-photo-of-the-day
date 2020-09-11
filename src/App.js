import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY , BASE_URL} from './index'
import Photo from './components/Photo'
import Copyright from './components/Copyright'
import Title from './components/Title'
import styled, { keyframes } from 'styled-components'
import Theme from './theme'
import Explanation from "./components/Explanation";

const StyledApp = styled.div`
  background-color:${Theme.backgroundColor};
  text-align: center;
`


function App() {
  const [photoURL, setPhotoURL] = useState('')
  const [copyright, setCopyright] = useState('')
  const [title, setTitle] = useState(null)
  const [explanation, setExplanation] = useState(null)

useEffect(() => {
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=2020-09-09`) 
  .then(res => {
    setPhotoURL(res.data.url)
    setCopyright(res.data.copyright)
    setTitle(res.data.title)
    setExplanation(res.data.explanation)
  })
  .catch(err => {
    console.log('Error:' + err)
  })
}, [])



  return (
    <StyledApp>
      <Title title = {title} />
      <div className = 'photo-container'>
        <Photo url = {photoURL} />
      </div>
      <div className = 'info-container'>
        
        <Explanation explanation = {explanation} />
        <Copyright copyright = {copyright} />
      </div>
      
     
    </StyledApp>
  );
}

export default App;
