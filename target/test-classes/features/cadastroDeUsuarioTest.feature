#language:pt
@regressivo
Funcionalidade: Cadastro de usuario 
  Como um usuário quero preencher minhas informações
  Para que eu possa ter meu cadastro no site 


Esquema do Cenário: Deve inserir uma conta 
		Dado que estou acessando a aplicação
    Quando selecionar a opção usuário
    E clicar em criar uma nova conta
    E preencher meu nome de usuário "<apelidoUsuario>"
    E preencher minha senha "<senha>"
    E preencher a confirmação da senha "<confirmaSenha>"
    E preencher meu e-mail "<email>"
    E preencher meu primeiro nome "<nome>"
    E preencher meu ultimo nome "<ultimoNome>"
    E preencher meu número de telefone "<telefone>"
    E selecionar meu país "<pais>"
    E preencher minha cidade "<cidade>"
    E preencher meu endereço "<endereco>"
    E preencher meu estado "<estado>"
    E preencher meu cep "<cep>"
    E selecionar a opção para aceitar os termos
    E clicar em registrar
    Então devo receber a informação com o nome de usuario"<informacaoEsperada>"
    
Exemplos: 
      | apelidoUsuario       | senha     | confirmaSenha  | email                         | nome       | ultimoNome  | telefone    | pais     | cidade      | endereco          | estado         | cep       | informacaoEsperada       |
      | Wilkerbn229          | Wbn000001 | Wbn000001      | wilker.bn@hotmail.com         |	Wilker  	 |	Nogueira	 | 11911111111 | Brazil   | Osasco      | R. Autonomistas 1 | SP             | 11111-111 | Wilkerbn229         			|
      
Esquema do Cenário: Deve informar que a conta já foi adicionada
		Dado que estou acessando a aplicação
    Quando selecionar a opção usuário
    E clicar em criar uma nova conta
    E preencher meu nome de usuário "<apelidoUsuario>"
    E preencher minha senha "<senha>"
    E preencher a confirmação da senha "<confirmaSenha>"
    E preencher meu e-mail "<email>"
    E preencher meu primeiro nome "<nome>"
    E preencher meu ultimo nome "<ultimoNome>"
    E preencher meu número de telefone "<telefone>"
    E selecionar meu país "<pais>"
    E preencher minha cidade "<cidade>"
    E preencher meu endereço "<endereco>"
    E preencher meu estado "<estado>"
    E preencher meu cep "<cep>"
    E selecionar a opção para aceitar os termos
    E clicar em registrar
		Então devo receber a informação que o usuario já existe "<informacaoEsperada>"
		
Exemplos:
      | apelidoUsuario       | senha     | confirmaSenha  | email                         | nome       | ultimoNome  | telefone    | pais     | cidade      | endereco          | estado         | cep       | informacaoEsperada       |
      | Wilkerbn156          | Wbn000001 | Wbn000001      | wilker.bn@hotmail.com         |	Wilker  	 |	Nogueira	 | 11911111111 | Brazil   | Osasco      | R. Autonomistas 1 | SP             | 11111-111 | User name already exists |