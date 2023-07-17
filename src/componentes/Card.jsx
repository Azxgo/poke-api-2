import React, { useEffect, useState } from 'react';
import '../css/estilos.css'

function Card(props){

const [pokemon,setPokemon]=useState({});
const [pokemon2,setPokemon2]=useState({});
const [pokemon3,setPokemon3]=useState({});
const [pokemon4,setPokemon4]=useState({});
const [pokemon5,setPokemon5]=useState({});
const [pokemon6,setPokemon6]=useState({});
const [pokemon7,setPokemon7]=useState({});
const [pokemon8,setPokemon8]=useState({});
const [pokemon9,setPokemon9]=useState({});
const [pokemon10,setPokemon10]=useState({});
const [isLoading,setIsLoading]=useState(true);
    const url='https://pokeapi.co/api/v2/pokemon/scizor'
    const fethApi=async()=>{
        const response=await fetch(url)
        const json=await response.json()
        setPokemon(json)
    }
    const url2='https://pokeapi.co/api/v2/pokemon/metagross'
    const fethApi2=async()=>{
        const response=await fetch(url2)
        const json=await response.json()
        setPokemon2(json)
    }
    const url3='https://pokeapi.co/api/v2/pokemon/gliscor'
    const fethApi3=async()=>{
        const response=await fetch(url3)
        const json=await response.json()
        setPokemon3(json)
    }
    const url4='https://pokeapi.co/api/v2/pokemon/weavile'
    const fethApi4=async()=>{
        const response=await fetch(url4)
        const json=await response.json()
        setPokemon4(json)
    }
    const url5='https://pokeapi.co/api/v2/pokemon/garchomp'
    const fethApi5=async()=>{
        const response=await fetch(url5)
        const json=await response.json()
        setPokemon5(json)
    }
    const url6='https://pokeapi.co/api/v2/pokemon/darkrai'
    const fethApi6=async()=>{
        const response=await fetch(url6)
        const json=await response.json()
        setPokemon6(json)
    }
    const url7='https://pokeapi.co/api/v2/pokemon/decidueye'
    const fethApi7=async()=>{
        const response=await fetch(url7)
        const json=await response.json()
        setPokemon7(json)
    }
    const url8='https://pokeapi.co/api/v2/pokemon/gengar'
    const fethApi8=async()=>{
        const response=await fetch(url8)
        const json=await response.json()
        setPokemon8(json)
    }
    const url9='https://pokeapi.co/api/v2/pokemon/absol'
    const fethApi9=async()=>{
        const response=await fetch(url9)
        const json=await response.json()
        setPokemon9(json)
    }
    const url10='https://pokeapi.co/api/v2/pokemon/gardevoir'
    const fethApi10=async()=>{
        const response=await fetch(url10)
        const json=await response.json()
        setPokemon10(json)
    }

    useEffect(()=>{
        (async()=>{
            await fethApi(); 
            await fethApi2();
            await fethApi3();
            await fethApi4();
            await fethApi5();
            await fethApi6();
            await fethApi7();
            await fethApi8();
            await fethApi9();
            await fethApi10();
            setIsLoading(false)
        })()
    
        
    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(
<div className='contenedorPokemon'>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Scizor</h5>
    <p className='contenedorParrafo'>Bicho / Acero</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon2.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Metagross</h5>
    <p className='contenedorParrafo'>Acero / Psiquico</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon3.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Gliscor</h5>
    <p className='contenedorParrafo'>Tierra / Volador</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon4.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Weavile</h5>
    <p className='contenedorParrafo'>Hielo / Siniestro</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon5.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Garchomp</h5>
    <p className='contenedorParrafo'>Tierra / Dragon</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon6.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Darkrai</h5>
    <p className='contenedorParrafo'>Siniestro</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon7.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Decidueye</h5>
    <p className='contenedorParrafo'>Planta / Fantasma</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon8.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Gengar</h5>
    <p className='contenedorParrafo'>Fantama / Veneno</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon9.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Absol</h5>
    <p className='contenedorParrafo'>Siniestro</p>
</div>
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon10.sprites.front_default} alt='imagen'/> 
    <h5 className='contenedorTitulo'> Gardevoir</h5>
    <p className='contenedorParrafo'>Psiquico / Hada</p>
</div>
</div>



);
}
export default Card;