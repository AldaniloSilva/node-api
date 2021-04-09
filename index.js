const express = require('express');
const {fatorialSum} = require('./problema_1');


const app = express();



app.use(express.json());

app.get('/', (request, response) => {
    return response.json({teste: 'resposta 1'});
})

app.post('/fatorial', (req,res) =>{

    const body = req.body;
    const result = fatorialSum(body.num1,body.num2);

    return res.json({result: result});

});

app.post('/problema2')


app.listen(3000);