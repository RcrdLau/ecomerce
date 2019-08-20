import React from 'react'
import imagemBanner from '../img/img-jogo/anthem/anthem-banner.jpg'
import imagemBannerPequeno from '../img/img-jogo/anthem/anthem-banner-pequeno.jpg'


const banner = () => {
  return (
    <section className="container-banner">
      <div className="img-banner">
        <img src={imagemBanner} className="img-grande" alt="Banner do jogo Anthem"></img>
        <div className="box-preta"></div>  
        <img src={imagemBannerPequeno} className="img-pequena" alt="Banner pequeno do jogo Anthem"></img>
        <h2>Anthem</h2>
        <p>Forme uma equipe neste RPG de ação cooperativa</p>
        <button className="btn-adquira">Adquira o jogo</button>
        <div className="clear"></div>
      </div>      
    </section>
  )
}

export default banner
