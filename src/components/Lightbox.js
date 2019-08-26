import React from 'react'
import imagemPequena from '../img/img-jogo/anthem/anthem-banner-pequeno.jpg'
import dinheiroIcon from '../img/img-icone/dinheiro.png'

const Lightbox = () => {
  return (
    <div className="lightbox">
      <div className="fundo"></div>
      <div className="conteudo">
        <div className="topo">
          <h3>Dados da compra</h3>
        </div>  
        <div className="conteudo-esquerda">
          <hr/>
          <div className="lista-pedidos">
            <ul>
              <li>
                <img src={imagemPequena} alt="Imagem miniatura do jogo"></img>
                <h3>Anthem</h3>
                <p>R$ XX,XX</p>
                <div className="clear"></div>
                <hr/>
              </li>
              <li>
                <img src={imagemPequena} alt="Imagem miniatura do jogo"></img>
                <h3>Anthem</h3>
                <p>R$ XX,XX</p>
                <div className="clear"></div>
                <hr/>
              </li>
              <li>
                <img src={imagemPequena} alt="Imagem miniatura do jogo"></img>
                <h3>Anthem</h3>
                <p>R$ XX,XX</p>
                <div className="clear"></div>
                <hr/>
              </li>
            </ul>
            <h3>Total: </h3>
            <p>XX,XX</p>
          </div>
        </div>  
        <div className="conteudo-direita">
          <p>Pagamento em dinheiro</p>
          <img src={dinheiroIcon} alt="icone de dinheiro"></img>
        </div> 
        <div className="clear"></div>
        <hr/>
        <div className="conteudo-meio">
          
          <p>Clique em "Pagar agora" para passar à página de pagamento por terceiros que selecionou e completar a sua compra. <br/><br/>
          Os termos do seu intermediário de pagamento selecionado serão aplicáveis.<br/><br/>
          Ao clicar em "Pague agora", eu concordo que (i) a utilização do conteúdo digital iniciará imediatamente e eu perderei assim meus direitos de rescisão<br/>
          e que (ii) eu aceito os Termos de Venda, incluindo informações sobre meus direitos de rescisão, o Contrato do Usuário da EA, a Política de Privacidade<br/>
          e Cookies e as informações do jogo aplicáveis, conforme descrito aqui.<br/><br/>
          Eu também compreendo que podem ser necessárias a instalação do Cliente Origin e a aceitação do Contrato de Licença do Usuário
          Final do Origin (EULA)<br/> para eu acessar minhas compras.<br/><br/> 
          Precisa de mais ajuda com seu pedido? Visite a Ajuda EA.
          </p>
        </div>  
        <div className="conteudo-baixo">
          <h3>Total: </h3>
          <p>XX,XX</p>
          <div className="clear"></div>
          <button className="btn-adquira">Finalizar compra</button>
        </div>
      </div>
    </div> 
    
  )
}

export default Lightbox
