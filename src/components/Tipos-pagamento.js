import React from 'react'

const tiposPagamento = () => {
  return (
    <>  
        <section class="container flex">
            <div class="item flex-item-1"><h3>Pagamento rápido e seguro</h3></div>
            <div class="item flex-item-1"><h3>Até 12x sem juros</h3></div>
            <div class="item flex-item-1"><h3>À vista no boleto</h3></div>
            <div class="item flex-item-1"><h3>Mais formas de pagamento</h3></div> {/* terá icones ao lado das frases */}
        </section>
    </>
  )
}

export default tiposPagamento