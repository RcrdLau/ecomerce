import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as actionsPagina } from '../store/ducks/Pagina'
import History from '../helpers/History'

export default () => {
    const jogos = useSelector(state => state.jogos)
    const dispacth = useDispatch()

    const clicaMenu = (jogo) => {
        dispacth(actionsPagina.selecionaJogo(jogo.id))
        History.push('/jogo/' + jogo.id)
    }

    return (
        <>
            <section class="container-menu">
                <nav>
                    <h1>
                        <a href="/">
                            <img src="#" alt="Is not Origin" />
                        </a>
                    </h1>
                    <form>
                        <input type="search" placeholder="Procure jogos..." />
                    </form>
                    <ul className="lista-menu">
                        <li>Lista de Jogos</li>
                        {jogos.map(item => {
                            return (
                                <li>
                                    <a
                                        onClick={() => clicaMenu(item)}
                                    >
                                        {item.nome}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <section className="acesso">
                        <ul className="lista-cadastro">
                            <hr />
                            <li>
                                <button className="btn btn-entrar">
                                    <a href="www.google.com">Carrinho </a>
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