import React from 'react'
import './styles/Buttons.css'
function Buttons() {
    return (
        <section className ="button-container">
            <button className="button-container__payment">Calcular el area</button>
            <button className="button-container__payment">Calcular el perimetro</button>
            <a href="/">
            <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
    )
}

export {Buttons}