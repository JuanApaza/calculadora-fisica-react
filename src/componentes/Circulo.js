import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { Header } from './Header'
import { Main } from './Main'
import './styles/Circulo.css'
function Circulo() {
    const [radioCirculo, setRadioCirculo]=useState('');
    const [resultado, setResultado]= useState(0);

    return (
        <article className="circulo-card">
            <Header/>
            <Main
             radioCirculo={radioCirculo}
             setRadioCirculo={setRadioCirculo}
             resultado={resultado}
             setResultado={setResultado}
             />
            <Buttons
            radioCirculo={radioCirculo}
            setResultado={setResultado}
            />

        </article>
    )
}

export {Circulo}
