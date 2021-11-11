import React from 'react'
import './styles/Buttons.css'
function Buttons({radioCirculo,setResultado}) {
    const calcularArea =(radioCirculo)=>{
        const area = (Math.PI * Math.pow(radioCirculo, 2)).toFixed(2);
        setResultado(area);
    }
    const calcularPerimetro =(radioCirculo)=>{
        const perimetro = (2 * Math.PI * radioCirculo).toFixed(2);
        setResultado(perimetro);
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment" onClick={()=>calcularArea(radioCirculo)}>Calcular el area</button>
            <button className="button-container__payment" onClick={()=>calcularPerimetro(radioCirculo)}>Calcular el perimetro</button>
            <a href="/">
            <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
    )
}

export {Buttons}