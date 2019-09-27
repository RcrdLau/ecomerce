import React from 'react'
import { useSelector } from 'react-redux'
import img01 from '../img/img-jogo/anthem/anthem.jpg'

const Detalhes01 = () => {

  const jogos = useSelector(state => state.jogos)
  const pagina = useSelector(state => state.pagina)
  const jogoSelecionado = jogos.filter(item => item.id == pagina.jogoAtual)[0]
  
  return (
    <section className="container-detalhes">
        <img src={jogoSelecionado.imagem_destaque01} className="img-detalhes" alt="Imagem de Anthem"></img>
        <h3>{jogoSelecionado.titulo_destaque01}</h3>
        <p>{jogoSelecionado.texto_destaque01}</p>
    </section>
  )
}
//Toda vez que adentra o mundo como freelancer, você<br/>escolhe um exoesqueleto de lança: uma armadura<br/>desenvolvida para dar ao piloto incríveis habilidades de<br/>ataque e defesa.
export default Detalhes01