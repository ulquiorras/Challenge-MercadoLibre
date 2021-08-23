import React from 'react'
import mesita from '../assets/mesita.jpg'


export const List = () => {

    return (
        <React.Fragment>
        <div className="categories">
            <p className="category">Categoria1 - Categoria2 -Categoria3</p>
        </div>
        <div className="container">
            <div className="main-items">
                <div className="view-items">
                    <div className="row-1">
                        <img src={mesita} />
                    </div>
                    <div className="row-2">
                        <h3 className="price">$1900</h3>
                        <p className="title">Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones</p>
                    </div>
                    <div className="row-3">
                        <p className="shipping">Free Shipping</p>
                    </div>
                </div>
            </div>

            <div className="main-items">
                <div className="view-items">
                    <div className="row-1">
                        <img src={mesita} />
                    </div>
                    <div className="row-2">
                        <h3 className="price">$1900</h3>
                        <p className="title">Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones</p>
                    </div>
                    <div className="row-3">
                        <p className="shipping">Free Shipping</p>
                    </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>        
    )
}