import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'

import Lightbox from '../components/Lightbox'
// import Slider from '../components/Slider'
// import Tipos from '../components/Tipos-pagamento'
// import Produtos from '../components/Produtos'
import Rodape from '../components/Rodape'

const homepage = () => {
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
     
    <Rodape></Rodape>

      {/* SEMPRE COMO ULTIMO */}
      <Lightbox></Lightbox>
    </>
  )
}

export default homepage
