import React from 'react'
import './styles/Main.css'
import { Operations } from './Operations'

function Main(props) {
    return (
        
        <main>
            <h1>Calculadora de Fisica</h1>
            <p>Cuadrado</p>
            <Operations
            ladoCuadrado={props.ladoCuadrado}
            setladoCuadrado={props.setladoCuadrado}
            resultado={props.resultado}
            setResultado={props.setResultado}
            />
        </main>
    )
}

export {Main}
