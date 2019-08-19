import React from 'react'
import img01 from '../img/img-jogo/anthem/anthem-detalhes.jpg'

const Detalhes02 = () => {
  return (
    <section className="container-detalhes2">
        <img src={img01} className="img-detalhes" alt="Imagem de Anthem"></img>
        <h3>Personalize seus<br/>equipamentos</h3>
        <p>Os exoesqueletos de lança, incluindo seus equipamentos e<br/>
        armas complementares, podem ser amplamente<br/>
        personalizados. À medida que sobe de nível, você coleta<br/>
        equipamentos e desbloqueia fantásticas opções para<br/>
        personalizar suas lanças, que passam a servir como atestado<br/>
        de suas habilidades e conquistas.
        </p>
        <div className="clear"></div>
    </section>
  )
}

export default Detalhes02