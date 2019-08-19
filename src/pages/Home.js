import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Produtos from '../components/Produtos'
import Slider from '../components/Slider'
import Rodape from '../components/Rodape'
import ProdutosAlinhados from '../components/ProdutosAlinhados'
import Lightbox from '../components/Lightbox'
// import Tipos from '../components/Tipos-pagamento'

const homepage = () => {
  return (
    <>
      <Menu></Menu>
      <ProdutosAlinhados></ProdutosAlinhados>
      {/* <Banner></Banner>
      <Produtos></Produtos>
      <Slider></Slider>
      <Rodape></Rodape> */}
      {/* SEMPRE COMO ULTIMO */}
      {/* <Lightbox></Lightbox> */}
    </>
  )
}

export default homepage
