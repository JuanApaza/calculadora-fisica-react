import React from 'react'
import './styles/Operations.css'
function Operations({baseDelTriangulo,setbaseDelTriangulo,alturaDelTriangulo,setalturaDelTriangulo,resultado,setResultado}) {
    const handleOnChangeTwo = (event) =>{
        setbaseDelTriangulo(event.target.value);
    }
    const handleOnChangeOne = (event) =>{
      setalturaDelTriangulo(event.target.value);
  }
    return (
        <section class="operation-container">
        <label for="altura-triangulo">Altura del Triangulo</label>
        <input type="text" id="altura-triangulo" value={alturaDelTriangulo} onChange={handleOnChangeOne} placeholder="Ingrese una cantidad en centimetros"/>
        <label for="base-triangulo">Base del Triangulo</label>
        <input type="text" id="base-triangulo" value={baseDelTriangulo} onChange={handleOnChangeTwo} placeholder="Ingrese una cantidad en centimetros"/>
        <div className="operation-container__resultado">
          <span>Resultado</span>
          <p>{resultado}</p>
        </div>
      </section>
    )
}

export {Operations}