import React from 'react'
// import lupa from '../img/lupa.png'
// import cart from '../img/cart.png'

const menu = () => {
  return (
    <>
        <section class="container-menu">
            <nav> 
                <h1>
                    <a href="/">
                        <img src="#" alt="Is not Origin"/>
                    </a>
                </h1>
                <form>
                    <input type="search" placeholder="Procure jogos..." />
                </form>
                <ul className="lista-menu">
                    <li>Lista de Jogos</li>
                    <li><a href="/jogo">Anthem</a></li>
                    <li><a href="/jogo">ApexLegends</a></li>
                    <li><a href="/jogo">Battlefield</a></li>
                    <li><a href="/jogo">Fifa</a></li>
                    <li><a href="/jogo">TheSims</a></li>
                </ul> 
                <section className="acesso">                  
                    <ul className="lista-cadastro">
                        <hr/>
                        <li>
                            <button className="btn btn-entrar">
                                <a  href="www.google.com">Carrinho </a>
                            </button>
                        </li>
                    </ul>
                </section>
            </nav>
            <div className="clear"></div>
        </section>
    </>
  )
}

export default menu
