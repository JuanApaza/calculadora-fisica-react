import React from 'react'
import './styles/Buttons.css'
function Buttons({ladoCuadrado,setResultado}) {
    const calcularArea =(ladoCuadrado)=>{
        const area = ladoCuadrado * ladoCuadrado;
        setResultado(area);
    }
    const calcularPerimetro =(ladoCuadrado)=>{
        const perimetro = (4 * ladoCuadrado).toFixed(2);
        setResultado(perimetro);
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment" onClick={()=>calcularArea(ladoCuadrado)}>Calcular el area</button>
            <button className="button-container__payment" onClick={()=>calcularPerimetro(ladoCuadrado)}>Calcular el perimetro</button>
            <a href="/">
            <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
    )
}

export {Buttons}