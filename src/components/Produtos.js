import React from 'react'
import { useSelector } from 'react-redux'
import jogo01 from '../img/img-jogo/fifa/fifa.jpg'
import jogo01mini from '../img/img-jogo/fifa/fifa-mini.jpg'
import jogo02 from '../img/img-jogo/bf/bf.jpg'
import jogo02mini from '../img/img-jogo/bf/bf-mini.jpg'
import jogo03 from '../img/img-jogo/apex/apex-med.jpg'
import jogo03mini from '../img/img-jogo/apex/apex-mini.jpg'
import jogo04 from '../img/img-jogo/thesims/thesims.jpg'
import jogo04mini from '../img/img-jogo/thesims/thesims-mini.jpg'

export default () => {
    const jogos = useSelector(state => state.jogos)

    return (
      <>
        <section class="container-med flex-wrap">
        {jogos.map(item => (
            <div class="item shrink-1-basis">
                <img src={jogo01} className="img-media" alt="Imagem do jogo Fifa"></img>
                <div className="caixa-preta"></div>
                <img src={jogo01mini} className="img-mini"  alt="Imagem do jogo Fifa miniatura"></img>
                <h2>{item.nome}</h2>
                <p>{item.texto}</p>
            </div>
        ))}
        </section>
      </>
    )
  }
//   Será que você conquistará a coroa?
//   Descubra um novo modo de jogo e muito mais no Evento de Coleção Coroa de Ferro
//   export default produtos