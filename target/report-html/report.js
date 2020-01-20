$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/cadastroDeUsuarioTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de usuario",
  "description": "Como um usuário quero preencher minhas informações\nPara que eu possa ter meu cadastro no site",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@regressivo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Deve inserir uma conta",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencher meu nome de usuário \"\u003capelidoUsuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher minha senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher a confirmação da senha \"\u003cconfirmaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher meu e-mail \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu primeiro nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu ultimo nome \"\u003cultimoNome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher meu número de telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "selecionar meu país \"\u003cpais\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher minha cidade \"\u003ccidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher meu endereço \"\u003cendereco\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu estado \"\u003cestado\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher meu cep \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo receber a informação com o nome de usuario\"\u003cinformacaoEsperada\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta;",
  "rows": [
    {
      "cells": [
        "apelidoUsuario",
        "senha",
        "confirmaSenha",
        "email",
        "nome",
        "ultimoNome",
        "telefone",
        "pais",
        "cidade",
        "endereco",
        "estado",
        "cep",
        "informacaoEsperada"
      ],
      "line": 29,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta;;1"
    },
    {
      "cells": [
        "Wilkerbn220",
        "Wbn000001",
        "Wbn000001",
        "wilker.bn@hotmail.com",
        "Wilker",
        "Nogueira",
        "11911111111",
        "Brazil",
        "Osasco",
        "R. Autonomistas 1",
        "SP",
        "11111-111",
        "Wilkerbn220"
      ],
      "line": 30,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 30,
  "name": "Deve inserir uma conta",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@regressivo"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencher meu nome de usuário \"Wilkerbn220\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo receber a informação com o nome de usuario\"Wilkerbn220\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 11242129300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1167783100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 504525100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn220",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 344791000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wbn000001",
      "offset": 23
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMinhaSenha(String)"
});
formatter.result({
  "duration": 150552300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wbn000001",
      "offset": 34
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherAConfirmaçãoDaSenha(String)"
});
formatter.result({
  "duration": 147237300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wilker.bn@hotmail.com",
      "offset": 22
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEMail(String)"
});
formatter.result({
  "duration": 395336600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilker",
      "offset": 29
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuPrimeiroNome(String)"
});
formatter.result({
  "duration": 106786000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nogueira",
      "offset": 27
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuUltimoNome(String)"
});
formatter.result({
  "duration": 122678800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11911111111",
      "offset": 34
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNúmeroDeTelefone(String)"
});
formatter.result({
  "duration": 130565100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brazil",
      "offset": 21
    }
  ],
  "location": "CadastroDeUsuarioTest.selecionarMeuPaís(String)"
});
formatter.result({
  "duration": 336650100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Osasco",
      "offset": 24
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMinhaCidade(String)"
});
formatter.result({
  "duration": 116085200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R. Autonomistas 1",
      "offset": 24
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEndereço(String)"
});
formatter.result({
  "duration": 191006700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SP",
      "offset": 22
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEstado(String)"
});
formatter.result({
  "duration": 83317000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111-111",
      "offset": 19
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuCep(String)"
});
formatter.result({
  "duration": 144205200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 89881300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 76572200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn220",
      "offset": 48
    }
  ],
  "location": "CadastroDeUsuarioTest.devo_receber_a_informação_com_o_nome_de_usuario(String)"
});
formatter.result({
  "duration": 1657154000,
  "status": "passed"
});
formatter.after({
  "duration": 651916600,
  "status": "passed"
});
formatter.after({
  "duration": 165200,
  "status": "passed"
});
formatter.after({
  "duration": 141200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Deve informar que a conta já foi adicionada",
  "description": "",
  "id": "cadastro-de-usuario;deve-informar-que-a-conta-já-foi-adicionada",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "preencher meu nome de usuário \"\u003capelidoUsuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "preencher minha senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "preencher a confirmação da senha \"\u003cconfirmaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "preencher meu e-mail \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "preencher meu primeiro nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "preencher meu ultimo nome \"\u003cultimoNome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "preencher meu número de telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "selecionar meu país \"\u003cpais\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "preencher minha cidade \"\u003ccidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "preencher meu endereço \"\u003cendereco\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "preencher meu estado \"\u003cestado\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "preencher meu cep \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "devo receber a informação que o usuario já existe \"\u003cinformacaoEsperada\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;deve-informar-que-a-conta-já-foi-adicionada;",
  "rows": [
    {
      "cells": [
        "apelidoUsuario",
        "senha",
        "confirmaSenha",
        "email",
        "nome",
        "ultimoNome",
        "telefone",
        "pais",
        "cidade",
        "endereco",
        "estado",
        "cep",
        "informacaoEsperada"
      ],
      "line": 53,
      "id": "cadastro-de-usuario;deve-informar-que-a-conta-já-foi-adicionada;;1"
    },
    {
      "cells": [
        "Wilkerbn156",
        "Wbn000001",
        "Wbn000001",
        "wilker.bn@hotmail.com",
        "Wilker",
        "Nogueira",
        "11911111111",
        "Brazil",
        "Osasco",
        "R. Autonomistas 1",
        "SP",
        "11111-111",
        "User name already exists"
      ],
      "line": 54,
      "id": "cadastro-de-usuario;deve-informar-que-a-conta-já-foi-adicionada;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 54,
  "name": "Deve informar que a conta já foi adicionada",
  "description": "",
  "id": "cadastro-de-usuario;deve-informar-que-a-conta-já-foi-adicionada;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@regressivo"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "preencher meu nome de usuário \"Wilkerbn156\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 49,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "devo receber a informação que o usuario já existe \"User name already exists\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 10001588800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1168546000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 497865800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn156",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 353231500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wbn000001",
      "offset": 23
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMinhaSenha(String)"
});
formatter.result({
  "duration": 148500800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wbn000001",
      "offset": 34
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherAConfirmaçãoDaSenha(String)"
});
formatter.result({
  "duration": 152746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wilker.bn@hotmail.com",
      "offset": 22
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEMail(String)"
});
formatter.result({
  "duration": 387590000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilker",
      "offset": 29
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuPrimeiroNome(String)"
});
formatter.result({
  "duration": 116317700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nogueira",
      "offset": 27
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuUltimoNome(String)"
});
formatter.result({
  "duration": 130834400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11911111111",
      "offset": 34
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNúmeroDeTelefone(String)"
});
formatter.result({
  "duration": 139917600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brazil",
      "offset": 21
    }
  ],
  "location": "CadastroDeUsuarioTest.selecionarMeuPaís(String)"
});
formatter.result({
  "duration": 325507900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Osasco",
      "offset": 24
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMinhaCidade(String)"
});
formatter.result({
  "duration": 117530000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R. Autonomistas 1",
      "offset": 24
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEndereço(String)"
});
formatter.result({
  "duration": 191593300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SP",
      "offset": 22
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuEstado(String)"
});
formatter.result({
  "duration": 85973700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111-111",
      "offset": 19
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuCep(String)"
});
formatter.result({
  "duration": 140496300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 86505500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 79867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User name already exists",
      "offset": 51
    }
  ],
  "location": "CadastroDeUsuarioTest.devo_receber_a_informação_que_o_usuario_já_existe(String)"
});
formatter.result({
  "duration": 1396178200,
  "status": "passed"
});
formatter.after({
  "duration": 632102200,
  "status": "passed"
});
formatter.after({
  "duration": 40600,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.uri("features/consultaDeProdutoCampoPesquisaTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Consulta de produto por campo de pesquisa",
  "description": "\r\nComo um usuário quero efetuar uma pesquisa de produto através do campo de pesquisa de produtos",
  "id": "consulta-de-produto-por-campo-de-pesquisa",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": ": Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_campo_pesquisa"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "inserir a categoria de meu produto \"\u003ccategoria\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "selecionar um determinado produto \"\u003cproduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo visualizar o meu produto \"\u003cconfirmaProduto\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "confirmaProduto"
      ],
      "line": 16,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;1"
    },
    {
      "cells": [
        "Laptop",
        "HP PAVILION 15Z TOUCH LAPTOP",
        "HP PAVILION 15Z TOUCH LAPTOP"
      ],
      "line": 17,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;2"
    },
    {
      "cells": [
        "Mice",
        "HP Z3600 WIRELESS MOUSE",
        "HP Z3600 WIRELESS MOUSE"
      ],
      "line": 18,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;3"
    },
    {
      "cells": [
        "Speakers",
        "HP ROAR MINI WIRELESS SPEAKER",
        "HP ROAR MINI WIRELESS SPEAKER"
      ],
      "line": 19,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 17,
  "name": ": Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_campo_pesquisa"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "inserir a categoria de meu produto \"Laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "selecionar um determinado produto \"HP PAVILION 15Z TOUCH LAPTOP\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo visualizar o meu produto \"HP PAVILION 15Z TOUCH LAPTOP\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 9997735900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 94136600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 36
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserir_a_categoria_de_meu_produto(String)"
});
formatter.result({
  "duration": 170672300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PAVILION 15Z TOUCH LAPTOP",
      "offset": 35
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.selecionarUmDeterminadoProduto(String)"
});
formatter.result({
  "duration": 932642100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PAVILION 15Z TOUCH LAPTOP",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devo_visualizar_o_meu_produto(String)"
});
formatter.result({
  "duration": 547264400,
  "status": "passed"
});
formatter.after({
  "duration": 21700,
  "status": "passed"
});
formatter.after({
  "duration": 631225900,
  "status": "passed"
});
formatter.after({
  "duration": 25700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_campo_pesquisa"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "inserir a categoria de meu produto \"Mice\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "selecionar um determinado produto \"HP Z3600 WIRELESS MOUSE\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo visualizar o meu produto \"HP Z3600 WIRELESS MOUSE\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 10045556300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 71924800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mice",
      "offset": 36
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserir_a_categoria_de_meu_produto(String)"
});
formatter.result({
  "duration": 157255600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Z3600 WIRELESS MOUSE",
      "offset": 35
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.selecionarUmDeterminadoProduto(String)"
});
formatter.result({
  "duration": 959687100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Z3600 WIRELESS MOUSE",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devo_visualizar_o_meu_produto(String)"
});
formatter.result({
  "duration": 524748700,
  "status": "passed"
});
formatter.after({
  "duration": 15400,
  "status": "passed"
});
formatter.after({
  "duration": 649132800,
  "status": "passed"
});
formatter.after({
  "duration": 103200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_campo_pesquisa"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "inserir a categoria de meu produto \"Speakers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "selecionar um determinado produto \"HP ROAR MINI WIRELESS SPEAKER\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo visualizar o meu produto \"HP ROAR MINI WIRELESS SPEAKER\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 10004940500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 80177500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Speakers",
      "offset": 36
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserir_a_categoria_de_meu_produto(String)"
});
formatter.result({
  "duration": 199490400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP ROAR MINI WIRELESS SPEAKER",
      "offset": 35
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.selecionarUmDeterminadoProduto(String)"
});
formatter.result({
  "duration": 900786100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP ROAR MINI WIRELESS SPEAKER",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devo_visualizar_o_meu_produto(String)"
});
formatter.result({
  "duration": 555072400,
  "status": "passed"
});
formatter.after({
  "duration": 79600,
  "status": "passed"
});
formatter.after({
  "duration": 621476400,
  "status": "passed"
});
formatter.after({
  "duration": 74900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": ": Deve efetuar uma pesquisa de produto invalido",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "inserir a categoria invalida de meu produto \"\u003ccategoria\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar a mensagem de confirmacao \"\u003cconfirmaProduto\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;",
  "rows": [
    {
      "cells": [
        "categoria",
        "confirmaProduto"
      ],
      "line": 30,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;1"
    },
    {
      "cells": [
        "Video Game",
        "No results for"
      ],
      "line": 31,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;2"
    },
    {
      "cells": [
        "Celular",
        "No results for"
      ],
      "line": 32,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;3"
    },
    {
      "cells": [
        "Carro",
        "No results for"
      ],
      "line": 33,
      "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 31,
  "name": ": Deve efetuar uma pesquisa de produto invalido",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "inserir a categoria invalida de meu produto \"Video Game\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar a mensagem de confirmacao \"No results for\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 9997422900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 77805100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video Game",
      "offset": 45
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserirACategoriaInvalidaDeMeuProduto(String)"
});
formatter.result({
  "duration": 194042500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results for",
      "offset": 43
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devoVisualizarAMensagemDeConfirmacao(String)"
});
formatter.result({
  "duration": 1339777500,
  "status": "passed"
});
formatter.after({
  "duration": 44000,
  "status": "passed"
});
formatter.after({
  "duration": 751326100,
  "status": "passed"
});
formatter.after({
  "duration": 73200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": ": Deve efetuar uma pesquisa de produto invalido",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "inserir a categoria invalida de meu produto \"Celular\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar a mensagem de confirmacao \"No results for\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 9943390400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 81548000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Celular",
      "offset": 45
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserirACategoriaInvalidaDeMeuProduto(String)"
});
formatter.result({
  "duration": 160234100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results for",
      "offset": 43
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devoVisualizarAMensagemDeConfirmacao(String)"
});
formatter.result({
  "duration": 1385222500,
  "status": "passed"
});
formatter.after({
  "duration": 15900,
  "status": "passed"
});
formatter.after({
  "duration": 753195100,
  "status": "passed"
});
formatter.after({
  "duration": 69600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": ": Deve efetuar uma pesquisa de produto invalido",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "inserir a categoria invalida de meu produto \"Carro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar a mensagem de confirmacao \"No results for\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 9960692300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 80342700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carro",
      "offset": 45
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserirACategoriaInvalidaDeMeuProduto(String)"
});
formatter.result({
  "duration": 140731200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results for",
      "offset": 43
    }
  ],
  "location": "ConsultaDeProdutoCampoPesquisaTest.devoVisualizarAMensagemDeConfirmacao(String)"
});
formatter.result({
  "duration": 1417311400,
  "status": "passed"
});
formatter.after({
  "duration": 17500,
  "status": "passed"
});
formatter.after({
  "duration": 634069900,
  "status": "passed"
});
formatter.after({
  "duration": 73400,
  "status": "passed"
});
formatter.uri("features/consultaDeProdutoTelaPrincipalTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Consulta de produto por campo de pesquisa",
  "description": "\r\nComo um usuário quero efetuar uma pesquisa de produto através da tela principal do sistema",
  "id": "consulta-de-produto-por-campo-de-pesquisa",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_tela_principal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na categoria do produto \"\u003ccategoria\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "selecionar o produto desejado \"\u003cproduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "devo visualizar a pagina com meu produto \"\u003cconfirmaProduto\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "confirmaProduto"
      ],
      "line": 14,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;1"
    },
    {
      "cells": [
        "LAPTOPS",
        "HP Pavilion 15z Laptop",
        "HP PAVILION 15Z LAPTOP"
      ],
      "line": 15,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;2"
    },
    {
      "cells": [
        "MICE",
        "HP Z8000 Bluetooth Mouse",
        "HP Z8000 BLUETOOTH MOUSE"
      ],
      "line": 16,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;3"
    },
    {
      "cells": [
        "SPEAKERS",
        "Bose SoundLink Wireless Speaker",
        "BOSE SOUNDLINK WIRELESS SPEAKER"
      ],
      "line": 17,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_tela_principal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na categoria do produto \"LAPTOPS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "selecionar o produto desejado \"HP Pavilion 15z Laptop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "devo visualizar a pagina com meu produto \"HP PAVILION 15Z LAPTOP\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 9998990900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LAPTOPS",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 129690300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Pavilion 15z Laptop",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 558787400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP PAVILION 15Z LAPTOP",
      "offset": 42
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devo_visualizar_a_pagina_com_meu_produto(String)"
});
formatter.result({
  "duration": 784311800,
  "status": "passed"
});
formatter.after({
  "duration": 19800,
  "status": "passed"
});
formatter.after({
  "duration": 10600,
  "status": "passed"
});
formatter.after({
  "duration": 629444500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_tela_principal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na categoria do produto \"MICE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "selecionar o produto desejado \"HP Z8000 Bluetooth Mouse\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "devo visualizar a pagina com meu produto \"HP Z8000 BLUETOOTH MOUSE\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 10025047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MICE",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 114735400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Z8000 Bluetooth Mouse",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 504505500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Z8000 BLUETOOTH MOUSE",
      "offset": 42
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devo_visualizar_a_pagina_com_meu_produto(String)"
});
formatter.result({
  "duration": 725818600,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.after({
  "duration": 7900,
  "status": "passed"
});
formatter.after({
  "duration": 615824200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-pesquisa;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@consulta_de_produto_tela_principal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "clicar na categoria do produto \"SPEAKERS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "selecionar o produto desejado \"Bose SoundLink Wireless Speaker\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "devo visualizar a pagina com meu produto \"BOSE SOUNDLINK WIRELESS SPEAKER\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 9960347500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPEAKERS",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 119683800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bose SoundLink Wireless Speaker",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 492185400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOSE SOUNDLINK WIRELESS SPEAKER",
      "offset": 42
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devo_visualizar_a_pagina_com_meu_produto(String)"
});
formatter.result({
  "duration": 630034600,
  "status": "passed"
});
formatter.after({
  "duration": 48100,
  "status": "passed"
});
formatter.after({
  "duration": 10700,
  "status": "passed"
});
formatter.after({
  "duration": 613447800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na categoria do produto \"\u003ccategoria\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "selecionar o produto desejado \"\u003cproduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "selecionar quantidade fora do permitido \"\u003cquantidadeDeProdutos\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "inserir o produto no carrinho de compra",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "devo visualizar uma mensagem informando sobre a quantidade invalida \"\u003cconfirmaProduto\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "quantidadeDeProdutos",
        "confirmaProduto"
      ],
      "line": 31,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;1"
    },
    {
      "cells": [
        "LAPTOPS",
        "HP Pavilion 15z Laptop",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 32,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;2"
    },
    {
      "cells": [
        "MICE",
        "HP Z8000 Bluetooth Mouse",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 33,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;3"
    },
    {
      "cells": [
        "SPEAKERS",
        "Bose SoundLink Wireless Speaker",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 34,
      "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 32,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na categoria do produto \"LAPTOPS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "selecionar o produto desejado \"HP Pavilion 15z Laptop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "selecionar quantidade fora do permitido \"999\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "inserir o produto no carrinho de compra",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "devo visualizar uma mensagem informando sobre a quantidade invalida \"Oops! We only have 10 in stock. We updated your order accordingly\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 9953774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LAPTOPS",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 134690400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Pavilion 15z Laptop",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 536887100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 41
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionarQuantidadeForaDoPermitido(String)"
});
formatter.result({
  "duration": 608023000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 68558600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oops! We only have 10 in stock. We updated your order accordingly",
      "offset": 69
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String)"
});
formatter.result({
  "duration": 1426669400,
  "status": "passed"
});
formatter.after({
  "duration": 15900,
  "status": "passed"
});
formatter.after({
  "duration": 7500,
  "status": "passed"
});
formatter.after({
  "duration": 629328000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na categoria do produto \"MICE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "selecionar o produto desejado \"HP Z8000 Bluetooth Mouse\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "selecionar quantidade fora do permitido \"999\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "inserir o produto no carrinho de compra",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "devo visualizar uma mensagem informando sobre a quantidade invalida \"Oops! We only have 10 in stock. We updated your order accordingly\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 9989815800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MICE",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 105056100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP Z8000 Bluetooth Mouse",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 538991800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 41
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionarQuantidadeForaDoPermitido(String)"
});
formatter.result({
  "duration": 478894800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 72380900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oops! We only have 10 in stock. We updated your order accordingly",
      "offset": 69
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String)"
});
formatter.result({
  "duration": 1382853100,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.after({
  "duration": 7400,
  "status": "passed"
});
formatter.after({
  "duration": 645002000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou na aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "clicar na categoria do produto \"SPEAKERS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "selecionar o produto desejado \"Bose SoundLink Wireless Speaker\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "selecionar quantidade fora do permitido \"999\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "inserir o produto no carrinho de compra",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "devo visualizar uma mensagem informando sobre a quantidade invalida \"Oops! We only have 10 in stock. We updated your order accordingly\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.que_estou_na_aplicacao()"
});
formatter.result({
  "duration": 10038031600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SPEAKERS",
      "offset": 32
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.clicar_na_categoria_do_produto(String)"
});
formatter.result({
  "duration": 120017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bose SoundLink Wireless Speaker",
      "offset": 31
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionar_o_produto_desejado(String)"
});
formatter.result({
  "duration": 532116800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 41
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.selecionarQuantidadeForaDoPermitido(String)"
});
formatter.result({
  "duration": 458144000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 67577400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oops! We only have 10 in stock. We updated your order accordingly",
      "offset": 69
    }
  ],
  "location": "ConsultaDeProdutoTelaPrincipalTest.devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String)"
});
formatter.result({
  "duration": 1442873000,
  "status": "passed"
});
formatter.after({
  "duration": 15100,
  "status": "passed"
});
formatter.after({
  "duration": 7100,
  "status": "passed"
});
formatter.after({
  "duration": 634389600,
  "status": "passed"
});
});