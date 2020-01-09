#language:pt
Funcionalidade: Consulta de produto por campo de pesquisa 
  
  Como um usuário quero efetuar uma pesquisa de produto através da tela principal do sistema
 

Esquema do Cenário: Deve efetuar uma pesquisa 
    Dado que estou acessando a aplicação
    Quando clicar na categoria do produto "<categoria>"
    E selecionar o produto desejado "<produto>"
    Então devo visualizar a página com meu produto
    
Exemplos: 
      | categoria        | produto                | 
      | Laptop           | HP PAVILION 15Z LAPTOP | 
     
        

