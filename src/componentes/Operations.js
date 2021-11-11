import React from 'react'
import './styles/Operations.css'
function Operations({radioCirculo,setRadioCirculo,resultado,setResultado}) {
    const handleOnChange = (event) =>{
        setRadioCirculo(event.target.value);
    }
    return (
        <section class="operation-container">
        <label for="radio-circulo">Radio del Circulo</label>
        <input type="text" id="radio-circulo" value={radioCirculo} onChange={handleOnChange} placeholder="Ingrese una cantidad en centimetros"/>
        <div className="operation-container__resultado">
          <span>Resultado</span>
          <p>{resultado}</p>
        </div>
      </section>
    )
}

export {Operations
}