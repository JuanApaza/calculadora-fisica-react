import React from 'react'
import './styles/Operations.css'
function Operations({baseDelRectangulo,setbaseDelRectangulo,alturaDelRectangulo,setalturaDelRectangulo,resultado,setResultado}) {
    const handleOnChangeTwo = (event) =>{
        setbaseDelRectangulo(event.target.value);
    }
    const handleOnChangeOne = (event) =>{
      setalturaDelRectangulo(event.target.value);
  }
    return (
        <section class="operation-container">
        <label for="altura-Rectangulo">Altura del Rectangulo</label>
        <input type="text" id="altura-Rectangulo" value={alturaDelRectangulo} onChange={handleOnChangeOne} placeholder="Ingrese una cantidad en centimetros"/>
        <label for="base-Rectangulo">Base del Rectangulo</label>
        <input type="text" id="base-Rectangulo" value={baseDelRectangulo} onChange={handleOnChangeTwo} placeholder="Ingrese una cantidad en centimetros"/>
        <div className="operation-container__resultado">
          <span>Resultado</span>
          <p>{resultado}</p>
        </div>
      </section>
    )
}

export {Operations}