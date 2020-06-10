const path = require("path")
const express = require("express")
const server = express()

//configurar pastas publicas
server.use("/public", 
    express.static(path.resolve(__dirname, "..","./public"))
);
server.use("/views",
    express.static(path.resolve(__dirname, "./views/"))
);

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//fazer o servidor enchergar a pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//Ligar o servidor
server.listen(3022)