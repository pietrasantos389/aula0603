const express = require("express");
const app = express();

app.get("/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params
    res.status(200).json({
        mensagem: `Nome: ${nome}, Idade: ${idade}`
    })
})

app.get("/teste", (req, res)=>{
    res.send("Olá Mundo teste")
})

app.listen(3001, ()=>{
    console.log("Pietra, o servidor está ligado")
})