const express = require('express');
const {fatorialSum} = require('./problema_1');


const app = express();



app.use(express.json());

app.get('/', (request, response) => {
    return response.json({teste: 'resposta 1'});
})

/*app.post('/fatorial', (req,res) =>{



}*/

app.post('/problema2')


app.listen(3000);