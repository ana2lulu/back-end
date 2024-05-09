/*********************************************
 * Autor: Ana Luiza 
 * data: 21/03/2024
 * versão: 0.1 versão
 ***************************************** */


// Import da biblioteca para criar a API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Cria um objeto app tendo como referencia a classe do express
const app = express();
app.use((request,response,next) => {
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    app.use(cors())
    next();

})


/************************************************************* */
// Importando os arquivos da controller
// const controllerFilmes = require('./controller/controller_filme.js')
const controllerGenero = require('./controller/controller_genero.js')

/***************************************************/

//criando um objeto para controlar a chegada dos dados da requisição em formato json
const bodyParserJSON = bodyParser.json();


// 01 EndPoint: Listar todos os filmes do arquivo
// app.get('/v1/AcmeFilmes/ListarFilmes', cors(), async function(request, response){
//     let controleListaFilmes = require('./controller/controller_filmes.Js')
//     let filmes = controleListaFilmes.getListaDeFilmes();
//     response.json(filmes);
//     response.status(200);
// });




//versão 2.0 retorna todos od filmes do banco de dados
// app.get('/v2/AcmeFilmes/listarFilmes', cors(), async function(request, response){

//     let dadosFilmes = await controllerFilmes.getBuscarFilmes()

//     if(dadosFilmes){
//             response.json(dadosFilmes)
//             response.status(200)
//     }else{
//     response.json({message: 'Nenhum registro foi encontrado'})
//     response.status(404)
//     }   
    
// });
    
// 02 Endpoint: Listar os filmes e suas informações com base no id
// app.get('/v1/AcmeFilmes/ListarFilmes', cors(), async function(request, response){
//     let id = request.query.id
//     let controleListaFilmes = require('./controller/controller_function.Js')
//     let filmes = controleListaFilmes.getFilme(id);

//     if(filmes){
//         response.json(filmes);
//         response.status(200);
//     } else{
//         response.status(404)
//         response.json({erro:'Item nao encontrado.'})
//     }
// });

// app.post('/v2/acmefilmes/filme', cors(), bodyParserJSON(), async function(request, response){

//     //recebe a content-type  como o tipo de dados encaminhado da requisição
//     let contentType = request.headers['content-type']

//     //recebe dodos os dados da requisição pelo body
//     let dadosBody = request.body

//     //Encaminhar oS dados para o controller enviar para o DAO
//     let resultDadosNovoFilme = await controllerFilmes.setInserirNovoFilme(dadosBody, contentType)

//     response.status(resultDadosNovoFilme.status_code)
//     response.json(resultDadosNovoFilme)
// })

// app.delete('/v2/acmefilmes/filme/deletar', cors(), async function(request,response){


// })


// app.listen('3306', function(){
//     console.log('rodando')
// })


// const express = require('express');
// const routes = require('./routes');

// const app = express();


// app.use(express.json());


// app.use('./', routes);


// const PORT = process.env.PORT || 3306;
// app.listen(PORT, () => {
//     console.log(`Servidor em execução na porta ${PORT}`);




// Executa a API e faz ela ficar aguardando requisições
app.listen('8080',function(){
    console.log('API rodando')

})
