import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const PokeLista = () => {

    const[pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    const funcionNavegarASnivy = () => {
        navigate("/pokemon/495");
    }


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            setPokemons(response.data.results);
        });
    }, [])

    return <div>
        <button onClick={funcionNavegarASnivy}>Navega a Snivy</button>
        <Link to="/pokemon/25">IR A PIKACHU</Link>
        <h1>Lista</h1>
        { pokemons.map(p => {
            return <>
            <p>Este pokemon es {p.name} </p> 
            <div onCLick={() => {navigate("/pokemon/"+p.name)}}> Navegar</div>
            <Link to = {"/pokemon/"+p.name}>Navegar</Link>
            </> 
        }
        )}
    </div>
}

export default PokeLista;