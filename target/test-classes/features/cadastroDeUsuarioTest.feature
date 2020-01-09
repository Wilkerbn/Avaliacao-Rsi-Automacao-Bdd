#language:pt
@regressivo
Funcionalidade: Cadastro de usuario 
  
  Como um usuário quero preencher minhas informações
  Para que eu possa ter meu cadastro no site 
  
@cadastro_de_usuario
Esquema do Cenário: Deve inserir uma conta 
    Dado que estou acessando a aplicação
    Quando selecionar a opção usuário
    E clicar em criar uma nova conta
    E preencher meu nome de usuário "<nomeUsuario>"
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
    Então devo receber a informação "<informacaoEsperada>"
    
Exemplos: 
      | nomeUsuario      | senha     | confirmaSenha  | email                         | nome      | ultimoNome | telefone    | pais     | cidade      | endereco          | estado         | cep       | informacaoEsperada       |
      | Wilkerbn15       | Wbn000001 | Wbn000001      | wilker.bn@hotmail.com         |	Wilker  	|	Nogueira	 | 11911111111 | Brazil   | Osasco      | R. Autonomistas 1 | SP             | 11111-111 | Wilkerbn15         			|
      | Wilkerbn15       | Wbn000001 | Wbn000001      | wilker.bn@hotmail.com         |	Wilker  	|	Nogueira	 | 11911111111 | Brazil   | Osasco      | R. Autonomistas 1 | SP             | 11111-111 | User name already exists |
    