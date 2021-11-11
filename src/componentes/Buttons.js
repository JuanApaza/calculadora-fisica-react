import React from 'react'
import './styles/Buttons.css'
function Buttons({baseDelTriangulo,alturaDelTriangulo,setResultado}) {
    const calcularArea =(baseDelTriangulo,alturaDelTriangulo)=>{
        const area = baseDelTriangulo * alturaDelTriangulo /2;
        setResultado(area);
    }
    const calcularPerimetro =(baseDelTriangulo,alturaDelTrianguloo)=>{
        const ladosIsoseles = Math.pow( Math.pow(baseDelTriangulo/2,2) + Math.pow(alturaDelTriangulo,2) ,0.5)
        const perimetro = Math.round( 2*ladosIsoseles+baseDelTriangulo*100)/100;
        setResultado(perimetro);
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment" onClick={()=>calcularArea(baseDelTriangulo,alturaDelTriangulo)}>Calcular el area</button>
            <button className="button-container__payment" onClick={()=>calcularPerimetro(baseDelTriangulo,alturaDelTriangulo)}>Calcular el perimetro</button>
            <a href="/">
            <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
    )
}

export {Buttons}