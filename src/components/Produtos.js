import React from 'react'
import produto1 from '../img/televisao.png'
import produto2 from '../img/sapato.png'
import produto3 from '../img/camisa.png'
import produto4 from '../img/celular.png'
import produto5 from '../img/relogio.png'

const produtos = () => {
    return (
      <>
        <section class="container flex">
            <div class="item flex-item-1">
                <img src={produto1} alt="televisao"/>
                <p>Preço R$**,** |</p>
                <p> Desconto **%</p>
                <p>Valor parcelado 12x R$**,**</p>
            </div>                       
            <div class="item flex-item-1">
                <img src={produto2} alt="sapato"/>
                <p>Preço R$**,** |</p>
                <p> Desconto **%</p>
                <p>Valor parcelado 12x R$**,**</p>
            </div>
            <div class="item flex-item-1">
                <img src={produto3} alt="camisa"/>
                <p>Preço R$**,** |</p>
                <p> Desconto **%</p>
                <p>Valor parcelado 12x R$**,**</p>
            </div>
            <div class="item flex-item-1">
                <img src={produto4} alt="celular"/>
                <p>Preço R$**,** |</p>
                <p> Desconto **%</p>
                <p>Valor parcelado 12x R$**,**</p>
            </div>
            <div class="item flex-item-1">
                <img src={produto5} alt="relogio"/>
                <p>Preço R$**,** |</p>
                <p> Desconto **%</p>
                <p>Valor parcelado 12x R$**,**</p>
            </div> 
        </section>
      </>
    )
  }
  
  export default produtos