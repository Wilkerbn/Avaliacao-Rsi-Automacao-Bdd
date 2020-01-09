#language:pt
Funcionalidade: Consulta de produto por campo de pesquisa 
  
  Como um usuário quero efetuar uma pesquisa de produto através do campo de pesquisa de produtos
 

Esquema do Cenário:: Deve efetuar uma pesquisa 
    Dado que estou acessando a aplicação
    Quando clicar na opção de pesquisa
    E inserir a categoria de meu produto "<categoria>"
    E selecionar o produto desejado "<produto>"
    Então devo visualizar a página com meu produto
    
    
Exemplos: 
      | categoria        | produto                | 
      | Laptop           | HP PAVILION 15Z LAPTOP | 