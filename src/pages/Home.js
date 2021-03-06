import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Produtos from '../components/Produtos'
import Slider from '../components/Slider'
import Rodape from '../components/Rodape'
// import ProdutosAlinhados from '../components/ProdutosAlinhados'
import Lightbox from '../components/Lightbox'

export default () => {
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Produtos></Produtos>
      <Slider></Slider>
      {/* <ProdutosAlinhados></ProdutosAlinhados> */}
      <Rodape></Rodape>
      {/* SEMPRE COMO ULTIMO */}
      <Lightbox></Lightbox>
    </>
  )
}