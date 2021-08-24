import React, {useState, useEffect} from 'react'

export const Details = () => {

    const url = 'http://localhost:4000/api/items/MLA772921213'
    const [product, setProducts] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url)
        /* console.log(response.statusText) */
        const resJson = await response.json([])
        setProducts(resJson['msg'])
         console.log(resJson['msg']) 
    }

    useEffect(() =>{
        fetchApi()
    }, [])

    return (
        <React.Fragment>
            <div className="categories">
                <p className="category">Categoria1 - Categoria2 -Categoria3</p>
            </div>
            
            <div className="container">
                <div className="row1">
                    <img src={product['thumbnail']} />
                </div>
                <div className="row2">
                    <p className="condition">{product['condition']} | {product['sold_quantity']} vendidos | {product['currency_id']}</p>
                    <p className="title"><strong>{product['title']}</strong></p>
                    <h2 className="price">{product['price']} </h2>
                    <button type="button" className="btnBuy"><a href="/">Comprar</a></button>
                </div>
                <br />
                <br />
                <br />
                <div className="description">
                    <h3>Descripcion del producto</h3>
                    <p className="descriptionProduct">{product['description']}</p>
                </div>
            </div>
        
        </React.Fragment>
        
    )
}
