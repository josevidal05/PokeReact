import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImgFrontUrl] = useState("");
    const [ImgBackUrl, setImgBackurl] = useState("");
    const [baseHP, setBaseHP] = useState("");
    const [baseAttack, setBaseAttack] = useState("");
    const [baseDefense, setBaseDefense] = useState("");

    const params = useParams();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ ID) .then(response=>{
            setNombre(response.data.name);
            setImgBackurl(response.data.sprites.back_default);
            setImgFrontUrl(response.data.sprites.front_default);
            setBaseHP(getStats("hp", response.data.stats));
            setBaseAttack(getStats("attack", response.data.stats))
            setBaseDefense(getStats("defense", response.data.stats))
        })
    }, [])

    const ID = params.id;

    function getStats(nombreStat, arraystats){
        const filteredArray = arraystats.filter(s=>s.stat.name === nombreStat);
        if (filteredArray.length === 0){
            return -1;
        }
        return filteredArray[0].base_stat;
    }

    //la sintaxis mas moderna es async-await
   


    const onSubirNivel = (event) => {
        setNivel(n => n+1);
    }

    const onBajarNivel = (event) => {
        setNivel(n => n-1);
    }

    const calcularHP = () => {
        //TO DO: Use real formula
        return baseHP + (nivel *3);
    }

    const calcularAtaque = () => {
        return baseAttack + (nivel * 2)
    }

    const calcularDefensa = () => {
        return baseDefense + (nivel * 2);
    }

    return <div>
        <h1>{nombre}</h1>
        <img src={imgFrontUrl}/>
        <img src={ImgBackUrl}/>
        <p>Nivel: {nivel}</p>
        <button onClick={onSubirNivel}>Subir nivel</button>
        <button onClick={onBajarNivel}>Bajar nivel</button>
        <p>HP: {calcularHP()}</p>
        <p>Ataque: {calcularAtaque()}</p>
        <p>Defensa: {calcularDefensa()}</p>
    </div>
}

export default Pokemon;