import React from 'react'



const menu = () => {
  return (
    <>
        <div class="container">
            <nav> 
                <h1>
                    <a href="www.google.com"> {/* colocar o link da pagina inicial do site, seria index.html ??? */}
                        <img src="#" alt="Logo do Site"/>
                    </a>
                </h1>
                <ul className="lista menu">
                    <li>Categorias</li>
                    <li>Historico</li>
                    <li>Produtos com desconto</li>
                    <li>Vender</li>
                    <li>Contato</li>
                </ul>
                <div className="pesquisa-cadastro">
                    <form>
                        <input type="search" id="busca"/>
                        <img src="#" className="btn" alt="lupa" /> {/* não consegui colocar o link da img */}
                    </form>
                    <ul className="lista cadastro">
                        <li><a className="btn" href="www.google.com">Login</a></li>
                        <li><a className="btn" href="www.google.com">Cadastre-se</a></li>
                        <li>
                            <a className="btn" href="www.google.com">Carrinho</a>
                            <img src="" className="btn" alt="carrinho" />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="clear"></div>
        </div>
    </>
  )
}

export default menu
