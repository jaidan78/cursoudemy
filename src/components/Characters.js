export default function Characters(props) {
    // VERIFICAR LO QUE LLEGA POR props
    console.log(props)
    const { characters, setCharacters } = props

    const resetCharacter = ()=>{
        setCharacters(null)
    }

    return (
        <div className="characters" >
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacter}>Volver a la home</span>
            <div className="container-characters" >
                {characters.map((character, index) =>(
                    <div className="character-container" key={index}>
                      <div>
                        <img src={character.image} alt={character.name} />
                      </div>
                      <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ?(
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey" >Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                        <div className="numero"><span className="indice">{character.id}</span></div>
                      </div>
                    </div>
                ))}
            </div>
            <div>
                <span className="back-home" onClick={resetCharacter} >Volver a la home</span>
            </div>
        </div>
    )
}