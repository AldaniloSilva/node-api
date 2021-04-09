const express = require('express');
const {fatorialSum} = require('./problema_1');
const{run} = require('./problema_2');
//const{} = require('./problema_3');


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

app.post('/flowers', (req,res) => {
    const body = req.body;
    const result = run(body.num1,body.num2,body.num3)

    return res.json({result: result});

});


app.listen(3000);