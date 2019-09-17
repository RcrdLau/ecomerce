import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const jogos = useSelector(state => state.jogos)
  const pagina = useSelector(state => state.pagina)
  console.log("jogos", jogos)
  console.log("pagina", pagina)
  const jogoSelecionado = jogos.filter(item => item.id == pagina.jogoAtual)[0]

  const clicaAdquirir = () => {
    alert("Manda jogo para o carrinho")
  }

  return (
    <section className="container-banner">
      <div className="img-banner">
        <img src={jogoSelecionado.img01} className="img-grande" alt="Banner do jogo Anthem"></img>
        <div className="box-preta"></div>
        <img src={jogoSelecionado.mini} className="img-pequena" alt="Banner pequeno do jogo Anthem"></img>
        <h2>{jogoSelecionado.nome}</h2>
        <p>{jogoSelecionado.texto}</p>
        <button
          onClick={clicaAdquirir}
          className="btn-adquira"
        >
          Adquira o jogo
        </button>
        <div className="clear"></div>
      </div>
    </section>
  )
}