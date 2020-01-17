$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastroDeUsuarioTest.feature");
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
        "Wilkerbn204",
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
        "Wilkerbn204"
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
  "name": "preencher meu nome de usuário \"Wilkerbn204\"",
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
  "name": "devo receber a informação com o nome de usuario\"Wilkerbn204\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 11246620900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 116718600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 514760300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn204",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 345975100,
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
  "duration": 157627500,
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
  "duration": 130935900,
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
  "duration": 245938400,
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
  "duration": 102811600,
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
  "duration": 113640400,
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
  "duration": 146999700,
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
  "duration": 343595600,
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
  "duration": 119271800,
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
  "duration": 295154800,
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
  "duration": 83652800,
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
  "duration": 128964100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 77340300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 89741200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn204",
      "offset": 48
    }
  ],
  "location": "CadastroDeUsuarioTest.devo_receber_a_informação_com_o_nome_de_usuario(String)"
});
formatter.result({
  "duration": 551487700,
  "status": "passed"
});
formatter.after({
  "duration": 1194925800,
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
  "duration": 9946782700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 87506300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 496898800,
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
  "duration": 359786000,
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
  "duration": 150786600,
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
  "duration": 142248300,
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
  "duration": 381673700,
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
  "duration": 111846700,
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
  "duration": 117754300,
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
  "duration": 130741700,
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
  "duration": 169937300,
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
  "duration": 121621600,
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
  "duration": 214008700,
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
  "duration": 85598100,
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
  "duration": 126513200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 84320400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 76411100,
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
  "duration": 1077696900,
  "status": "passed"
});
formatter.after({
  "duration": 947934000,
  "status": "passed"
});
});