import React, {useState, useEffect} from 'react'




export const List = () => {

    const url = 'http://localhost:4000/api/items/search/:query'
    const [products, setProducts] = useState([])
    const fetchApi = async () => {
        const response = await fetch(url)
        /* console.log(response.statusText) */
        const resJson = await response.json()
        setProducts(resJson['msg'])
        /* console.log(resJson['msg'])  */
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
        { products.map(function(object, i){
            
            return<div className="main-items" key={i}>
                <div className="view-items">
                    <div className="row-1">
                        <img src={object['thumbnail']} />
                    </div>
                    <div className="row-2">
                        <h3 className="price">$ {object['price']}</h3>
                        <a onClick={event =>  window.location.href=`/items/${object['id']}`} className="title">{object['title']}</a>
                    </div>
                    <div className="row-3">
                        <p className="shipping" >{object['condition']}</p>
                    </div>
                </div>
            </div>;
        })}
            
        </div>
        
        </React.Fragment>        
    )
}
