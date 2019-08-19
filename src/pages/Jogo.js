import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import MenuPequeno from '../components/Menu-pequeno'
import SliderMaior from '../components/Slider-maior'
import Detalhes01 from '../components/Detalhes01'
import Detalhes02 from '../components/Detalhes02'
import DetalhesCirculo from '../components/Detalhes-circulo'

import Rodape from '../components/Rodape'

const Jogo = () => {
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <MenuPequeno></MenuPequeno>
      <SliderMaior></SliderMaior>
      <Detalhes01></Detalhes01>
      <Detalhes02></Detalhes02>
      <DetalhesCirculo></DetalhesCirculo>

      <Rodape></Rodape>
    </>
  )
}

export default Jogo
