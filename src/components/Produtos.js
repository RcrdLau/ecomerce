import React from 'react'
import jogo01 from '../img/img-jogo/fifa/fifa.jpg'
import jogo01mini from '../img/img-jogo/fifa/fifa-mini.jpg'
import jogo02 from '../img/img-jogo/bf/bf.jpg'
import jogo02mini from '../img/img-jogo/bf/bf-mini.jpg'
import jogo03 from '../img/img-jogo/apex/apex-med.jpg'
import jogo03mini from '../img/img-jogo/apex/apex-mini.jpg'
import jogo04 from '../img/img-jogo/thesims/thesims.jpg'
import jogo04mini from '../img/img-jogo/thesims/thesims-mini.jpg'


const produtos = () => {
    return (
      <>
        <section class="container-med flex-wrap">
            <div class="item shrink-1-basis">
                <img src={jogo01} className="img-media" alt="Imagem do jogo Fifa"></img>
                <div className="caixa-preta"></div>
                <img src={jogo01mini} className="img-mini"  alt="Imagem do jogo Fifa miniatura"></img>
                <h2>Fifa</h2>
                <p>Uma nova experiência realista de futebol!</p>
            </div>
            <div class="item shrink-1-basis">
                <img src={jogo02} className="img-media" alt="Imagem do jogo Battlefield"></img>
                <div className="caixa-preta"></div>
                <img src={jogo02mini} className="img-mini"  alt="Imagem do jogo Battlefield miniatura"></img>    
                <h2>Battlefield</h2>
                <p>Faça parte do caos glorioso da guerra!</p>
            </div>
        </section>
        <section class="container-med flex-wrap">
            <div class="item shrink-1-basis">
                <img src={jogo03} className="img-media" alt="Imagem do jogo Apex"></img>
                <div className="caixa-preta"></div>
                <img src={jogo03mini} className="img-mini"  alt="Imagem do jogo Apex miniatura"></img>
                <h2>Apex Legends</h2>
                <p>Descubra um modo de jogo e muito mais!</p>
            </div>
            <div class="item shrink-1-basis">
                <img src={jogo04} className="img-media" alt="Imagem do jogo Thesims"></img>
                <div className="caixa-preta"></div>
                <img src={jogo04mini} className="img-mini"  alt="Imagem do jogo Thesims miniatura"></img>
                <h2>The Sims</h2>
                <p>Descubra um modo de jogo e muito mais!</p>
            </div>
        </section>
      </>
    )
  }

  export default produtos
//   Será que você conquistará a coroa?
//   Descubra um novo modo de jogo e muito mais no Evento de Coleção Coroa de Ferro
//   export default produtos