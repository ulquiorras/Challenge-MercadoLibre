import React from 'react'
import mesita from '../assets/mesita.jpg'

export const Details = () => {
    return (
        <React.Fragment>
            <div className="categories">
                <p className="category">Categoria1 - Categoria2 -Categoria3</p>
            </div>
            <div className="container">
                <div className="row1">
                    <img src={mesita} />
                </div>
                <div className="row2">
                    <p className="condition"> nuevo | 500 vendidos | ARS</p>
                    <p className="title"><strong>Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones</strong></p>
                    <p className="shipping">envio gratis</p>
                    <h2 className="price">$2450 </h2>
                    <button type="button" class="btnBuy"><a href="/">Comprar</a></button>
                </div>
                <br />
                <br />
                <br />
                <div className="description">
                    <h3>Descripcion del producto</h3>
                    <p className="descriptionProduct">Altura 60cm, Ancho 40cm, Prof 24cm. (Las medidas pueden variar unos milimetros) - Mueble encolado, grampas y Atornillado. - Fabricadas en madera de pino de excelente calidad. - - - CONTAMOS CON STOCK DISPONIBLE PARA ENTREGA INMEDIATA - - - - - - SOMOS FABRICANTES - - - * CONTAMOS CON PRECIOS MAYORISTAS Y MINORISTAS * * QUERI ACCESORIOS *</p>
                </div>
            </div>
        </React.Fragment>
        
    )
}
