import React from 'react'
// import lupa from '../img/lupa.png'
// import cart from '../img/cart.png'

const menu = () => {
  return (
    <>
        <section class="container">
            <nav> 
                <h1>
                    <a href="/"> {/* colocar o link da pagina inicial do site, seria index.html ??? */}
                        <img src="#" alt="Logo do Site"/>
                    </a>
                </h1>
                <form>
                    <input type="search" placeholder="Procure jogos..." />
                </form>
                <ul className="lista-menu">
                    <li>Acesso</li>
                    <li><a href="/jogo">Jogo</a></li>
                </ul>
                <hr/>
                <ul className="lista-auxiliar">
                    <li>Sobre</li>
                    <li>Baixar</li>
                    <li>Ajuda</li>
                </ul>

                <section className="acesso">                  
                    <ul className="lista-cadastro">
                        <li>
                            <button className="btn btn-entrar">
                                <a  href="www.google.com">Entrar</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-inscrever">
                                <a  href="www.google.com">Inscreva-se</a>
                            </button>
                        </li>
                        <hr/>
                        <a className="escolha-idioma" href="www.google.com">Escolha seu idioma</a>
                    </ul>
                </section>
            </nav>
            {/* <div className="clear"></div> */}
        </section>
    </>
  )
}

export default menu
