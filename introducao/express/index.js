const  express = require("express"); //importando o express
const res = require("express/lib/response");
const app = express(); //iniciando o express

app.get("/",function(req,res){
    res.send("Bem vindo!!!");
});

app.get("/blog/:artigo?",function(req,res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }else{
        res.send("<h1>Bem Vindo ao meu Blog!!!</h1>");
    }
})

app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido");
    }
});

app.get("/ola/:nome/:empresa",function(req,res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>OI!!" + nome + " do " + empresa + "</h1>");
})

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro");
    }else{
        console.log("servidor iniciado com sucesso");
    }
})
