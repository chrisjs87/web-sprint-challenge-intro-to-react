import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersData, setCharactersData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(function (response) {
      setCharactersData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
    </div>
  );
}