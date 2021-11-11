import React from 'react'
import './styles/Operations.css'
function Operations({ladoCuadrado,setladoCuadrado,resultado,setResultado}) {
    const handleOnChange = (event) =>{
        setladoCuadrado(event.target.value);
    }
    return (
        <section class="operation-container">
        <label for="lado-cuadrado">Lado Cuadrado</label>
        <input type="text" id="lado-cuadrado" value={ladoCuadrado} onChange={handleOnChange} placeholder="Ingrese una cantidad en centimetros"/>
        <div className="operation-container__resultado">
          <span>Resultado</span>
          <p>{resultado}</p>
        </div>
      </section>
    )
}

export {Operations}