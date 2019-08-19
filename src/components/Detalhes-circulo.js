import React from 'react'
import patrulheiro from '../img/img-jogo/anthem/anthem-patrulheiro.jpg'
import colosso from '../img/img-jogo/anthem/anthem-colosso.jpg'
import interceptador from '../img/img-jogo/anthem/anthem-interceptador.jpg'


const DetalhesCirculo = () => {
  return (
    <section className="container-detalhes-circulo">
        <div className="intro-circulo">
            <h3>Exoesqueletos de lança</h3>
            <p>Toda vez que adentra o mundo como freelancer, você escolhe um<br/>
            exoesqueleto de lança: uma armadura desenvolvida para dar ao piloto<br/>
            incríveis habilidades de ataque e defesa.
            </p>
        </div>
        <div className="conteudo-circulo">
            <img src={patrulheiro} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>Patrulheiro</h3>
            <p>O mais versátil dos exoesqueletos permite uma transição<br/>
            suave entre o combate corpo a corpo e poderosos<br/>
            projéteis de longo alcance. Equipe a maça de choque para<br/>
            atingir seus inimigos usando uma voltagem altíssima ou<br/>
            acerte pequenos mísseis em dezenas de alvos em<br/>
            movimento. Reúna seus companheiros de equipe e faça<br/>
            uma pausa para recuperar equipamentos. Então, lance<br/>
            granadas de gelo e granadas guiadas para ter um controle<br/>
            de grupo eficaz.
            </p>
        </div>
        <div className="conteudo-circulo">
            <img src={colosso} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>Colosso</h3>
            <p>A gigante Colosso é uma máquina de guerra completa.<br/>
            Esse exoesqueleto conta com artilharia montada,<br/>
            blindagem e um lança-chamas, podendo desferir pesados<br/>
            ataques corpo a corpo em inimigos de todos os tamanhos,<br/>
            derrubando-os e deixando-os vulneráveis para ataques<br/>
            consecutivos. Para os que preferem a força bruta à<br/>
            agilidade, a Colosso é o acréscimo perfeito para qualquer<br/>
            arsenal de lanças.
            </p>
        </div>
        <div className="conteudo-circulo">
            <img src={interceptador} className="img-circulo" alt="Imagem do jogo Anthem"></img>
            <h3>Interceptador</h3>
            <p>A forma pequena e esguia da Interceptador é ideal para<br/>
            batedores de longo alcance, infiltradores e assassinos.<br/>
            Gere um turbilhão de danos com adagas de lâmina dupla<br/>
            para aumentar suas chances de vitória. A leveza da<br/>
            armadura permite que você se mova com agilidade,<br/>
            entrando e saindo de combate, explorando as fraquezas<br/>
            dos inimigos.
            </p>
        </div>

    </section>
  )
}

export default DetalhesCirculo