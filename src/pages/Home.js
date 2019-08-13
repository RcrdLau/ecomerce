import React from 'react'
import Menu from '../components/Menu'
import Lightbox from '../components/Lightbox'
// import Slider from '../components/Slider'
// import Tipos from '../components/Tipos-pagamento'
// import Produtos from '../components/Produtos'
// import Rodape from '../components/Rodape'

const homepage = () => {
  return (
    <>
      <Menu></Menu>
      {/* <Slider></Slider>
      <Tipos></Tipos>
      <Produtos></Produtos>
    <Rodape></Rodape> */}

      {/* SEMPRE COMO ULTIMO */}
      <Lightbox></Lightbox>
    </>
  )
}

export default homepage
