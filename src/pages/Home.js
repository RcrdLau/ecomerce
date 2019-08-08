import React from 'react'
// import Lista from '../components/Lista-menu'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import Tipos from '../components/Tipos-pagamento'
// import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

const homepage = () => {
  return (
    <>
      <Menu></Menu>
      {/* <Lista></Lista> */}
      <Slider></Slider>
      <Tipos></Tipos>
    </>
  )
}

export default homepage
