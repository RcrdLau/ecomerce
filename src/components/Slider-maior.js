import React from 'react'
import { useSelector } from 'react-redux'
import jogo01 from '../img/img-jogo/anthem/anthem-detalhes3.jpg'
import jogo02 from '../img/img-jogo/anthem/anthem.jpg'
import jogo03 from '../img/img-jogo/anthem/anthem-detalhes2.jpg'


const SliderMaior = () => {

  const jogos = useSelector(state => state.jogos)
  const pagina = useSelector(state => state.pagina)
  const jogoSelecionado = jogos.filter(item => item.id == pagina.jogoAtual)[0]

  return (
    <>
    <ul className="slider-maior">
        <h3>Imagens e vídeos</h3>
        <section class="container flex">
            <div class="item">
                <img src={jogoSelecionado.imagem_destaque01} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">
              <img src={jogoSelecionado.img_destaque04} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">
              <img src={jogoSelecionado.img_destaque05} className="img-quadro" alt="Imagem do jogo"></img>
            </div>
            <div class="item">Teste 4</div>
        </section>
    </ul>
    </>
  )
}

export default SliderMaior