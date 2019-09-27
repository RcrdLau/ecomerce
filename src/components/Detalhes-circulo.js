import React from 'react'
import { useSelector } from 'react-redux'
import patrulheiro from '../img/img-jogo/anthem/anthem-patrulheiro.jpg'
import colosso from '../img/img-jogo/anthem/anthem-colosso.jpg'
import interceptador from '../img/img-jogo/anthem/anthem-interceptador.jpg'


const DetalhesCirculo = () => {
    const jogos = useSelector(state => state.jogos)
    const pagina = useSelector(state => state.pagina)
    const jogoSelecionado = jogos.filter(item => item.id == pagina.jogoAtual)[0]

  return (
    <section className="container-detalhes-circulo">
        <div className="intro-circulo">
            <h3>{jogoSelecionado.titulo_destaque03}</h3>
            <p>{jogoSelecionado.texto_destaque03}</p>
            {/* Toda vez que adentra o mundo como freelancer, você escolhe um<br/>
            exoesqueleto de lança: uma armadura desenvolvida para dar ao piloto<br/>
            incríveis habilidades de ataque e defesa. */}
        </div>
        <div className="conteudo-circulo">
            <img src={jogoSelecionado.img_circulo01} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>{jogoSelecionado.titulo_circulo01}</h3>
            <p>{jogoSelecionado.txt_circulo01}</p>
            {/* O mais versátil dos exoesqueletos permite uma transição<br/>
            suave entre o combate corpo a corpo e poderosos<br/>
            projéteis de longo alcance. Equipe a maça de choque para<br/>
            atingir seus inimigos usando uma voltagem altíssima ou<br/>
            acerte pequenos mísseis em dezenas de alvos em<br/>
            movimento. Reúna seus companheiros de equipe e faça<br/>
            uma pausa para recuperar equipamentos. Então, lance<br/>
            granadas de gelo e granadas guiadas para ter um controle<br/>
            de grupo eficaz. */}
        </div>
        <div className="conteudo-circulo">
            <img src={colosso} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>{jogoSelecionado.titulo_circulo02}</h3>
            <p>{jogoSelecionado.txt_circulo02}</p>
            {/* A gigante Colosso é uma máquina de guerra completa.<br/>
            Esse exoesqueleto conta com artilharia montada,<br/>
            blindagem e um lança-chamas, podendo desferir pesados<br/>
            ataques corpo a corpo em inimigos de todos os tamanhos,<br/>
            derrubando-os e deixando-os vulneráveis para ataques<br/>
            consecutivos. Para os que preferem a força bruta à<br/>
            agilidade, a Colosso é o acréscimo perfeito para qualquer<br/>
            arsenal de lanças. */}
        </div>
        <div className="conteudo-circulo">
            <img src={interceptador} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>{jogoSelecionado.titulo_circulo03}</h3>
            <p>{jogoSelecionado.txt_circulo03}</p>
            {/* A forma pequena e esguia da Interceptador é ideal para<br/>
            batedores de longo alcance, infiltradores e assassinos.<br/>
            Gere um turbilhão de danos com adagas de lâmina dupla<br/>
            para aumentar suas chances de vitória. A leveza da<br/>
            armadura permite que você se mova com agilidade,<br/>
            entrando e saindo de combate, explorando as fraquezas<br/>
            dos inimigos. */}
        </div>

    </section>
  )
}

export default DetalhesCirculo