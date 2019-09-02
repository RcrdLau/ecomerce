import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const jogos = useSelector(state => state.jogos)

  return (
    <>
      <section className="container-med flex flex-wrap">
        {jogos.map((item, i) => {
          if (i <= 1) {
            return (
              <div className="item shrink-1-basis">
                <img src={item.img01} className="img-media" alt={item.alt}></img>
                <div className="caixa-preta"></div>
                <img src={item.mini} className="img-mini" alt={item.alt}></img>
                <h2>{item.nome}</h2>
                <p>{item.texto}</p>
              </div>
            ) //return1
          }
        }//for
        )
        }
      </section>
      <section className="container-med flex flex-wrap">
        {jogos.map((item, i) => {
          if (i >= 2) {
            return (
              <div className="item shrink-1-basis">
                <img src={item.img01} className="img-media" alt={item.alt}></img>
                <div className="caixa-preta"></div>
                <img src={item.mini} className="img-mini" alt={item.alt}></img>
                <h2>{item.nome}</h2>
                <p>{item.texto}</p>
              </div>
            ) //return1

          }
        }//for
        )
        }
      </section>
    </>
  )
}