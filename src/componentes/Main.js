import React from 'react'
import './styles/Main.css'
import { Operations } from './Operations'

function Main(props) {
    return (
        
        <main>
            <h1>Calculadora de Fisica</h1>
            <p>Triangulo</p>
            <Operations
            baseDelTriangulo={props.baseDelTriangulo}
            setbaseDelTriangulo={props.setbaseDelTriangulo}
            alturaDelTriangulo={props.alturaDelTriangulo}
            setalturaDelTriangulo={props.setalturaDelTriangulo}
            resultado={props.resultado}
            setResultado={props.setResultado}
            />
        </main>
    )
}

export {Main}
