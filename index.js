var express = require("express")
var app = express()
var utils = require('../models/index');
app.post('/usuarios',function (req,res){
	usuarios
	.create(req.body)
	.then(function(usuario){
		utils.response(res, true ,"O usuário foi adicionado",usuarios, undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	});
app.get('/usuarios', function(req, res) {
  usuarios
    .findAll()
    .then(function(usuarios) {
        utils.response(res, true, undefined, usuarios, undefined);
    })
});

app.get("usuarios/:id",function(req,res){
	usuarios
	.findById(parseInt(req.params.id))
	.then(function(usuario){
		if(usuario){
			utils.response(res,true,undefined,usuario,undefined);
		}else{
			utils.response(res,false,"o usuário do  ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.delete('/usuarios/:id', function(req, res) {
    usuarios
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "O usuário foi removido.", undefined, req.params.id);
      });
});
app.post("/mensagens",function(req,res){
	mensagens
	.create(req.body)
	.then(function(mensagens){
		utils.response(res,true,"A mensagem foi criada",mensagens,undefined);
	},function(erro){
		utils.response(res,false,undefined,erro,undefined);
	})
});
app.get("mensagens/:id",function(req,res){
	mensagens
	.findById(parseInt(req.params.id))
	.then(function(mensagens){
		if(mensagens){
			utils.response(res,true,undefined,mensagens,undefined);
		}else{
			utils.response(res,false,"A mensagem do  ID especificado não existe", undefined,req.params.id);
		}
	})


});
app.delete('/mensagens/:id', function(req, res) {
    mensagens
      .destroy({
          where: {
              id: req.params.id
          }
      })
      .then(function() {
          utils.response(res, true, "A mensagem foi removida.", undefined, req.params.id);
      });
});

});
module.exports =app;