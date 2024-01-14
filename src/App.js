import imageRickMorty from './img/rick-morty.png'
import './App.css';
import Characters from './components/Characters';
import { useState } from 'react';



function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()

    // CONTROLAR QUE SE CONECTE CORRECTAMENTE
    console.log(api)
    console.log(characterApi)
    
    setCharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title' >Rick & Morty</h1>
        { characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className='btn-search' >Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
