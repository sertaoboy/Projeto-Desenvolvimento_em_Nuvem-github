// ARQUIVO index.js USADO NA AULA DE NODEJS COM QUERY PARAMS


const express = require("express"); // importacao do modulo para o arquivo
const app = express(); // criacao de uma instancia do express

//rota com query params
app.get("/consulta", function(req,res){
    var cpf = req.query["cpf"];
    if(cpf){
        res.send("Consulta realizada com sucesso para o CPF: " + cpf);
    }else{
        res.send("CPF NAO FORNECIDO");
    }
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})

