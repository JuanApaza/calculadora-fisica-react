import React from 'react'
import { Buttons } from './Buttons'
import { Header } from './Header'
import { Main } from './Main'
import './styles/Circulo.css'
function Circulo() {
    return (
        <article className="circulo-card">
            <Header/>
            <Main/>
            <Buttons/>

        </article>
    )
}

export {Circulo}
