import React from 'react'
import './styles/Main.css'
import { Operations } from './Operations'

function Main(props) {
    return (
        
        <main>
            <h1>Calculadora de Fisica</h1>
            <p>Circulo</p>
            <Operations
            radioCirculo={props.radioCirculo}
            setRadioCirculo={props.setRadioCirculo}
            resultado={props.resultado}
            setResultado={props.setResultado}
            />
        </main>
    )
}

export {Main}
