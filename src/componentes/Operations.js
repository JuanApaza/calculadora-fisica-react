import React from 'react'
import './styles/Operations.css'
function Operations() {
    return (
        <section class="operation-container">
        <label for="radio-circulo">Radio del Circulo</label>
        <input type="text" id="radio-circulo" placeholder="Ingrese una cantidad en centimetros"/>
        <div className="operation-container__resultado">
          <span>Resultado</span>
          <p id="resultado"></p>
        </div>
      </section>
    )
}

export {Operations
}