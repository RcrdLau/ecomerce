import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as actionsPagina } from '../store/ducks/Pagina'
import History from '../helpers/History'

export default () => {
  const dispacth = useDispatch()

  const jogos = useSelector(state => state.jogos)
  let banner = jogos.filter(item => item.banner)[0]

  const clicaBanner = () => {
    dispacth(actionsPagina.selecionaJogo(banner.id))
    History.push('/jogo/' + banner.id)
  }

  return (banner &&
    <section className="container-banner">
      <div className="img-banner">
        <img src={banner.img01} className="img-grande" alt="Banner do jogo Anthem"></img>
        <div className="box-preta"></div>
        <img src={banner.mini} className="img-pequena" alt="Banner pequeno do jogo Anthem"></img>
        <h2>{banner.nome}</h2>
        <p>{banner.texto}</p>
        <button
          onClick={clicaBanner}
          className="btn-adquira"
        >
          Ir para o jogo
        </button>
        <div className="clear"></div>
      </div>
    </section>
  )
}