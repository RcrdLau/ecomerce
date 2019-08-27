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
      {jogos.map((item, i) => {
        if (i%2 == 0) {
          return (
            <section class="container-med flex flex-wrap">
              <div class="item shrink-1-basis">
                <img src={item.img01} className="img-media" alt={item.alt}></img>
                <div className="caixa-preta"></div>
                <img src={item.mini} className="img-mini"  alt={item.alt}></img>
                <h2>{item.nome}</h2>
                <p>{item.texto}</p>
              </div>
          )
          } else {
              return (
                  <div class="item shrink-1-basis">
                    <img src={item.img01} className="img-media" alt={item.alt}></img>
                    <div className="caixa-preta"></div>
                    <img src={item.mini} className="img-mini"  alt={item.alt}></img>
                    <h2>{item.nome}</h2>
                    <p>{item.texto}</p>
                  </div>
                </section>
              )
            }
      }
    </>
  )
}