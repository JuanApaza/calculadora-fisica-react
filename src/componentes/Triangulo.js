import React, { useState } from 'react'
import { Buttons } from './Buttons'
import { Header } from './Header'
import { Main } from './Main'
import './styles/Triangulo.css'

function Triangulo() {
    const [baseDelTriangulo, setbaseDelTriangulo]=useState('');
    const [alturaDelTriangulo, setalturaDelTriangulo]=useState('');
    const [resultado, setResultado]= useState(0);

    return (
        <article className="triangulo-card">
            <Header/>
            <Main
             baseDelTriangulo={baseDelTriangulo}
             setbaseDelTriangulo={setbaseDelTriangulo}
             alturaDelTriangulo={alturaDelTriangulo}
             setalturaDelTriangulo={setalturaDelTriangulo}
             resultado={resultado}
             setResultado={setResultado}
             />
            <Buttons
            baseDelTriangulo={baseDelTriangulo}
            alturaDelTriangulo={alturaDelTriangulo}
            setResultado={setResultado}
            />

        </article>
    )
}

export {Triangulo}
