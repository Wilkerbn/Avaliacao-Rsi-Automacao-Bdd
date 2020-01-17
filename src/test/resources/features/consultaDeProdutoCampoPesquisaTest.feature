#language:pt
Funcionalidade: Consulta de produto por campo de pesquisa 
  
  Como um usuário quero efetuar uma pesquisa de produto através do campo de pesquisa de produtos
 
@consulta_de_produto_campo_pesquisa
Esquema do Cenário:: Deve efetuar uma pesquisa 
    Dado que estou na tela aplicacao
    Quando clicar na opcao de pesquisa
    E inserir a categoria de meu produto "<categoria>"
    E selecionar um determinado produto "<produto>"
    Então devo visualizar o meu produto "<confirmaProduto>"
    
    
Exemplos: 
      | categoria  | produto                      | confirmaProduto              |
      | Laptop     | HP PAVILION 15Z TOUCH LAPTOP | HP PAVILION 15Z TOUCH LAPTOP |
      
   