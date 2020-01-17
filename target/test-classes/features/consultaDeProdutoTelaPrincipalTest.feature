#language:pt
Funcionalidade: Consulta de produto por campo de pesquisa 
  
  Como um usuário quero efetuar uma pesquisa de produto através da tela principal do sistema
 
@consulta_de_produto_tela_principal
Esquema do Cenário: Deve efetuar uma pesquisa 
    Dado que estou na aplicacao 
    Quando clicar na categoria do produto "<categoria>"
    E selecionar o produto desejado "<produto>"
    Então devo visualizar a pagina com meu produto "<confirmaProduto>"
    
Exemplos: 
      | categoria         | produto                | confirmaProduto        |
      | LAPTOPS           | HP Pavilion 15z Laptop | HP PAVILION 15Z LAPTOP |
     
        

