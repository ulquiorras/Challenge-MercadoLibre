const express = require('express');


// crear servidor express 

const app = express();

// rutas

app.use('/api/items/', require('./routes/items'));


// escuchar

app.listen(4000, () =>{
    console.log(`servidor en puerto ${4000}`)
})