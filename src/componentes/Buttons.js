import React from 'react'
import './styles/Buttons.css'
function Buttons({baseDelRectangulo,alturaDelRectangulo,setResultado}) {
    const calcularArea =(baseDelRectangulo,alturaDelRectangulo)=>{
        const area =  baseDelRectangulo * alturaDelRectangulo;
        setResultado(area);
    }
    const calcularPerimetro =(baseDelRectangulo,alturaDelRectangulo)=>{
        const perimetro = 2 * baseDelRectangulo + alturaDelRectangulo * 2;
        setResultado(perimetro);
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment" onClick={()=>calcularArea(baseDelRectangulo,alturaDelRectangulo)}>Calcular el area</button>
            <button className="button-container__payment" onClick={()=>calcularPerimetro(baseDelRectangulo,alturaDelRectangulo)}>Calcular el perimetro</button>
            <a href="/">
            <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
    )
}

export {Buttons}