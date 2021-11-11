import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { Header } from './Header'
import { Main } from './Main'
import './styles/Rectangulo.css'

function Rectangulo() {
    const [baseDelRectangulo, setbaseDelRectangulo]=useState('');
    const [alturaDelRectangulo, setalturaDelRectangulo]=useState('');
    const [resultado, setResultado]= useState(0);

    return (
        <article className="rectangulo-card">
            <Header/>
            <Main
             baseDelRectangulo={baseDelRectangulo}
             setbaseDelRectangulo={setbaseDelRectangulo}
             alturaDelRectangulo={alturaDelRectangulo}
             setalturaDelRectangulo={setalturaDelRectangulo}
             resultado={resultado}
             setResultado={setResultado}
             />
            <Buttons
            baseDelRectangulo={baseDelRectangulo}
            alturaDelRectangulo={alturaDelRectangulo}
            setResultado={setResultado}
            />

        </article>
    
    )
}

export {Rectangulo}