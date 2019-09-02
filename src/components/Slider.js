import React from 'react'
import { useSelector } from 'react-redux'
import jogo01 from '../img/img-jogo/apex/apex-mini.jpg'


export default () => {
  const jogos = useSelector(state => state.jogos)

  return (
    <>
      <section class="container-slider">
        <div>
          <h2>Lista de jogos
            <button>right</button>
            <button>left</button>
          </h2>
        </div>
        <div className="conteudo-todo">
        {jogos.map((item) => {
            return (
                <div class="item">
                  <img src={item.mini} className="img-quadro" alt="imagem do jogo"></img>
                  <p>{item.nome}</p>
                  <h3>R${item.valor}</h3>
                </div>
            ) //return1
        })} 
        {jogos.map((item) => {
            return (
                <div class="item">
                  <img src={item.mini} className="img-quadro" alt="imagem do jogo"></img>
                  <p>{item.nome}</p>
                  <h3>R${item.valor}</h3>
                </div>
            ) //return1
        })}
        {jogos.map((item) => {
            return (
                <div class="item">
                  <img src={item.mini} className="img-quadro" alt="imagem do jogo"></img>
                  <p>{item.nome}</p>
                  <h3>R${item.valor}</h3>
                </div>
            ) //return1
        })}
          
          {/* <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>
          <div class="item">
            <img src={jogo01} className="img-quadro" alt="imagem do jogo"></img>
            <p>Apex Legends</p>
            <h3>R$50,00</h3>
          </div>  */}
        </div> 
      </section>
    </>
  )
}

