import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as actionsPagina } from '../store/ducks/Pagina'
import History from '../helpers/History'

export default () => {
  const dispacth = useDispatch()

  const jogos = useSelector(state => state.jogos)
  let destaque = jogos.filter(item => item.destaque)[0]

  const clicaDestaque = () => {
    dispacth(actionsPagina.selecionaJogo(destaque.id))
    History.push('/jogo/' + destaque.id)
  }

  return (
    <>
      <section className="container-med flex flex-wrap">
        {jogos.map((destaque, i) => {
          if (i <= 1) {
            return (
              <div className="item shrink-1-basis">
                <img src={destaque.img01} className="img-media" alt={destaque.alt}></img>
                <div className="caixa-preta"></div>
                <img src={destaque.mini} className="img-mini" alt={destaque.alt}></img>
                <h2>{destaque.nome}</h2>
                <p>{destaque.texto}</p>
              </div>
            ) //return1
          }
        })}
      </section>
      <section className="container-med flex flex-wrap">
        {jogos.map((destaque, i) => {
          if (i >= 2) {
            return (
              <div className="item shrink-1-basis">
                <img src={destaque.img01} className="img-media" alt={destaque.alt}></img>
                <div className="caixa-preta"></div>
                <img src={destaque.mini} className="img-mini" alt={destaque.alt}></img>
                <h2>{destaque.nome}</h2>
                <p>{destaque.texto}</p>
              </div>
            ) //return1
          }
        })}
      </section>
    </>
  )
}