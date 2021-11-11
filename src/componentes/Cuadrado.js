import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { Header } from './Header'
import { Main } from './Main'
import './styles/Cuadrado.css'
function Cuadrado() {
    const [ladoCuadrado, setladoCuadrado]=useState('');
    const [resultado, setResultado]= useState(0);

    return (
        <article className="cuadrado-card">
            <Header/>
            <Main
             ladoCuadrado={ladoCuadrado}
             setladoCuadrado={setladoCuadrado}
             resultado={resultado}
             setResultado={setResultado}
             />
            <Buttons
            ladoCuadrado={ladoCuadrado}
            setResultado={setResultado}
            />

        </article>
    )
}

export {Cuadrado}
