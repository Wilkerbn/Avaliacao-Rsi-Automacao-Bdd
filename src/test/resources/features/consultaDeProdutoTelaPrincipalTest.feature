#language:pt
Funcionalidade: Consulta de produto na tela principal
  
  Como um usuário quero efetuar uma pesquisa de produto através da tela principal do sistema
 
@consulta_de_produto_tela_principal
Esquema do Cenário: Deve efetuar uma pesquisa 
    Dado que estou na aplicacao 
    Quando clicar na categoria do produto "<categoria>"
    E selecionar o produto desejado "<produto>"
    Então devo visualizar a pagina com meu produto "<confirmaProduto>"
    
Exemplos: 
      | categoria         | produto                         | confirmaProduto                  |
      | LAPTOPS           | HP Pavilion 15z Laptop          | HP PAVILION 15Z LAPTOP           |
      | MICE							| HP Z8000 Bluetooth Mouse        | HP Z8000 BLUETOOTH MOUSE         |
      | SPEAKERS          | Bose SoundLink Wireless Speaker | BOSE SOUNDLINK WIRELESS SPEAKER  |
 


Esquema do Cenário: Deve efetuar uma compra com a quantidade invalida de produtos
    
    Dado que estou na aplicacao 
    Quando clicar na categoria do produto "<categoria>"
    E selecionar o produto desejado "<produto>"
    E selecionar quantidade fora do permitido "<quantidadeDeProdutos>"
    E inserir o produto no carrinho de compra
    Então devo visualizar uma mensagem informando sobre a quantidade invalida "<confirmaProduto>"
    
Exemplos: 
      | categoria         | produto                         | quantidadeDeProdutos | confirmaProduto                                                   |
      | LAPTOPS           | HP Pavilion 15z Laptop          | 999                  | Oops! We only have 10 in stock. We updated your order accordingly |
      | MICE							| HP Z8000 Bluetooth Mouse        | 999                  | Oops! We only have 10 in stock. We updated your order accordingly |
      | SPEAKERS          | Bose SoundLink Wireless Speaker | 999                  | Oops! We only have 10 in stock. We updated your order accordingly |
      
      
      