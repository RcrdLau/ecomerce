import React from 'react'
import imagemPequena from '../img/img-jogo/anthem/anthem-banner-pequeno.jpg'

const Lightbox = () => {
  return (
    <div className="lightbox">
      <div className="fundo"></div>
      <div className="conteudo">
        <div className="sombra-topo">
          <h1>Rever compra</h1>
        </div>
        <div className="container-compra">
          <div className="dados-compra">
            <ul>
              <hr/>
              <li>
                <img className="img-pequena" src={imagemPequena} alt="Imagem miniatura do jogo Anthem"></img>
                <h3>Anthem</h3>
                <p>R$ XX,XX</p>
              </li>
              <div className="clear"></div>
              <hr/>
            </ul>
            <div className="dados-total">
              <p>R$ XX,XX</p>
              <p>Total</p>
            </div>
          </div>
          <div className="forma-pagamento">
            <p>Pagamento em dinheiro</p>
          </div>
        </div>
        <hr/>
        <p className="detalhes-compra-mini">Clique em "Pagar agora" para passar à página de pagamento por terceiros que selecionou e completar a sua compra. Os termos do seu intermediário de pagamento selecionado serão aplicáveis.<br/><br/>
        Ao clicar em "Pague agora", eu concordo que (i) a utilização do conteúdo digital iniciará imediatamente e eu perderei assim meus direitos de rescisão e que (ii) eu aceito
        os Termos de Venda, incluindo informações sobre meus direitos de rescisão, o Contrato do Usuário da EA, a Política de Privacidade e Cookies e as informações do jogo
        aplicáveis, conforme descrito aqui.<br/> Eu também compreendo que podem ser necessárias a instalação do Cliente Origin e a aceitação do Contrato de Licença do Usuário
        Final do Origin (EULA) para eu acessar minhas compras.<br/><br/>
        Precisa de mais ajuda com seu pedido? Visite a Ajuda EA.
        </p>
      </div>
    </div> 
    
  )
}

export default Lightbox
