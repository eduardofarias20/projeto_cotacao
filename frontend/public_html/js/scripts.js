
var app = angular.module('produtosApp', []);
            app.controller('ProdutosController', function($scope, ProdutosService) { 
                
               $scope.produto = {};
               
               listar();
               
                function listar(){
                    ProdutosService.getProdutos().then(function(res){
                        $scope.produtos = res.data;
                    });
                };
               $scope.salvar = function(produto){
                    ProdutosService.salvar(produto).then(listar);
                    $scope.produto = {};
               };
               $scope.excluir = function(produto){
                    ProdutosService.excluir(produto).then(listar);
               };
               $scope.editar = function(produto){
                   $scope.produto = angular.copy(produto);
               };
               
               $scope.cancelar = function(){
                   $scope.produto = {};
               };
            });
            
            app.service('ProdutosService', function($http){
                
               var api = "http://localhost:8080/api/webresources/produtos/";
               
               this.getProdutos = function(){
                   return $http.get(api);  
               };
               
               this.salvar = function(produto){
                    if(produto.id){
                          //atualizar PUT
                          return $http.put(api +'/'+ produto.id, produto);
                    }else{
                        //adicionar POST
                        return $http.post(api, produto);
                    }
                };
               
               this.excluir = function(produto){
                   return $http.delete(api +'/'+ produto.id);
                };
            });