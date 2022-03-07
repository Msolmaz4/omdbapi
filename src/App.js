import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {


const API_URL =' http://www.omdbapi.com/?i=tt3896198&apikey=92cd55bd'


const searchMovies = async (title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.Search)
        
}



useEffect(()=>{
searchMovies('spiderman')
},[])


  return (

    <div className="App">





      App
     </div>
  );
}

export default App;
