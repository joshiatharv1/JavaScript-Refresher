import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      console.log(response.data)
      setJokes[response]
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>
      <h1>Basic Full Stack Application</h1>
      <p>Jokes : {jokes.length}</p>
      {
        jokes.map((myJoke)=>
           (
           <div key={myJoke.id}>
            <h3>Jokes Title: {myJoke.name}</h3>
            <h3>Jokes City: {myJoke.ddress}</h3>
          </div>
          )
        )
      }
    </>
  )
}

export default App
