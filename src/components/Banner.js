import React from 'react'
import imagemBanner from '../img/img-jogo/anthem/anthem-banner.jpg'
import imagemBannerPequeno from '../img/img-jogo/anthem/anthem-banner-pequeno.jpg'


const banner = () => {
  return (
    <section className="container-banner">
      <div className="img-banner">
        <img src={imagemBanner} className="img-grande" alt="Banner do jogo Anthem"></img>
        <div className="informacoes"></div>  
        <div className="clear"></div>
        <img src={imagemBannerPequeno} className="img-pequena relativa" alt="Banner pequeno do jogo Anthem"></img>
        <h2 className="relativa">Anthem</h2>
        <p className="relativa">Forme uma equipe neste RPG de ação cooperativa</p>
        <button className="btn-adquira relativa">Adquira o jogo</button>
        <div className="clear"></div>
      </div>
      
    </section>
  )
}

export default banner
