import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const jogos = useSelector(state => state.jogos)

  return (
    <>
      <div className="conteudo-todo">
        {jogos.map((item, i) => {
            return (
                <div class="item">
                  <img src={item.mini} className="img-quadro" alt="imagem do jogo"></img>
                  <p>{item.nome}</p>
                  <h3>R${item.valor}</h3>
                </div>
            ) //return1
        })} 

      </div>
      {jogos.map((item, i) => {
        if (i >= 2) {
          return (
            <section className="container-med flex flex-wrap">
              <div className="item shrink-1-basis">
                <img src={item.img01} className="img-media" alt={item.alt}></img>
                <div className="caixa-preta"></div>
                <img src={item.mini} className="img-mini" alt={item.alt}></img>
                <h2>{item.nome}</h2>
                <p>{item.texto}</p>
              </div>
            </section>
          ) //return1

        }
      }//for

      )
      }
    </>
  )
}