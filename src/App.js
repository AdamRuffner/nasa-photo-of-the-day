import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY , BASE_URL} from './index'
import Photo from './components/photo'


function App() {
  const [photoURL, setPhotoURL] = useState('')
  const [copyright, setCopyright] = useState('')
  const [title, setTitle] = useState(null)
  const [explanation, setExplanation] = useState(null)

useEffect(() => {
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`) 
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
    <div className="App">
      <div className = 'title-container'>
        <h1>NASA Photo of the Day</h1>
        <h2>{title}</h2>
      </div>
      <div className = 'photo-container'>
          <Photo url = {photoURL} />
      </div>
      <div className = 'info-container'>
          <p>{explanation}</p>
          <p><b> © Copyright:</b> {copyright}</p>
      </div>
      
     
    </div>
  );
}

export default App;
