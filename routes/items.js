const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');




//EndPoint busqueda
router.get('/search/:query', (req, res) =>{

    //variable capture params
    const queryProduct = (req.params);

    //Use function sendPost
    let sendApi = sendPost({}, `https://api.mercadolibre.com/sites/MLA/search?q=${queryProduct["query"]}`)
    sendApi.then(result => {
        res.json({
            author:[{'name':'Jeisson Damian'},{'lastname':'Becerra Rodriguez'}],
            msg: result['results'].slice(0,4)
            
        })
        
    })

}); 




//EndPoint id and details
router.get('/:id', (req, res) =>{

   const idProduct = (req.params);
   let getItem = {}

   //Function sendPost for id product

    let sendApi = sendPost({}, `https://api.mercadolibre.com/items/${idProduct["id"]}`)
    sendApi.then(result => {
        getItem = result;

        let sendApi2 = sendPost({}, `https://api.mercadolibre.com/items/${idProduct["id"]}/description`)
        sendApi2.then(result2 => {
            getItem['description'] = result2['plain_text']
            res.json({
                author:[{'name':'Jeisson Damian'},{'lastname':'Becerra Rodriguez'}],
                msg: getItem
            })
            //console.log(getItem)
        });
    });


    
});

//function sendPost for use in the endpoints

async function sendPost(getData, url){
    try{
        const requestOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        return data;
    }catch(error){
        return {"status": 500, "error": "Error de Petición", "e": error}
    }
};




module.exports = router;