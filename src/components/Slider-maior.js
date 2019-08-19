import React from 'react'
import jogo01 from '../img/img-jogo/anthem/anthem-detalhes3.jpg'
import jogo02 from '../img/img-jogo/anthem/anthem.jpg'
import jogo03 from '../img/img-jogo/anthem/anthem-detalhes2.jpg'


const SliderMaior = () => {
  return (
    <>
    <ul className="slider-maior">
        <h3>Imagens e vídeos</h3>
        <section class="container flex">
            <div class="item">
                <img src={jogo01} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">
              <img src={jogo02} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">
              <img src={jogo03} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">Teste 4</div>
        </section>
    </ul>
    </>
  )
}

export default SliderMaior