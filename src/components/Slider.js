import React from 'react'
import red from '../img/slide-vermelho.png'
import blue from '../img/slide-azul.png'
import green from '../img/slide-verde.png'
import orange from '../img/slide-laranja.png'
import black from '../img/slide-preto.png'

const slider = () => {
  return (
    <>
    <ul className="slider">
        <img src={red} className="foto" alt="slider01"/>
        <img src={blue} className="foto" alt="slider02"/>
        <img src={green} className="foto" alt="slider03"/>
        <img src={orange} className="foto" alt="slider04"/>
        <img src={black} className="foto" alt="slider05"/>
    </ul>
    </>
  )
}

export default slider