import React from 'react'
import jogo01 from '../img/img-jogo/apex/apex-mini.jpg'


const slider = () => {
  return (
    <>
    <ul className="slider">
      <section class="container flex">
        <div class="item">
          <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
          <p>Apex Legends</p>
          <h3>R$50,00</h3>
        </div>
        <div class="item">Teste 2</div>
        <div class="item">Teste 3</div>
        <div class="item">Teste 4</div>
        <div class="item">Teste 5</div>
        <div class="item">Teste 6</div>
        <div class="item">Teste 7</div>
      </section>
    </ul>
    </>
  )
}

export default slider