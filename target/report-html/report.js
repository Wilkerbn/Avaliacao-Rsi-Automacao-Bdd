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
  "keyword": "Funcionalidade"
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
        "Wilkerbn911",
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
        "Wilkerbn911"
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
  "name": "preencher meu nome de usuário \"Wilkerbn911\"",
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
  "name": "devo receber a informação com o nome de usuario\"Wilkerbn911\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 11509565600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1265756400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 550847800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn911",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 427019100,
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
  "duration": 286644300,
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
  "duration": 194948700,
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
  "duration": 390806200,
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
  "duration": 115049100,
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
  "duration": 148017100,
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
  "duration": 154988600,
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
  "duration": 1776433000,
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
  "duration": 170725100,
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
  "duration": 255995000,
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
  "duration": 122428100,
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
  "duration": 164454300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 106851600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 97851600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn911",
      "offset": 48
    }
  ],
  "location": "CadastroDeUsuarioTest.devo_receber_a_informação_com_o_nome_de_usuario(String)"
});
formatter.result({
  "duration": 1954577900,
  "status": "passed"
});
formatter.after({
  "duration": 175800,
  "status": "passed"
});
formatter.after({
  "duration": 685135800,
  "status": "passed"
});
formatter.after({
  "duration": 82800,
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
        "Wilkerbn157",
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
  "name": "preencher meu nome de usuário \"Wilkerbn157\"",
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
  "duration": 10321946100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1249276300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 550804100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn157",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 447514200,
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
  "duration": 186850300,
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
  "duration": 167229300,
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
  "duration": 278207600,
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
  "duration": 136787100,
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
  "duration": 180588400,
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
  "duration": 182103800,
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
  "duration": 2090010300,
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
  "duration": 117206300,
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
  "duration": 336659200,
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
  "duration": 94540500,
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
  "duration": 155858400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 99143000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 109385400,
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
  "duration": 1498617400,
  "status": "passed"
});
formatter.after({
  "duration": 43900,
  "status": "passed"
});
formatter.after({
  "duration": 653485200,
  "status": "passed"
});
formatter.after({
  "duration": 79400,
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
formatter.scenario({
  "line": 7,
  "name": ": Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa",
  "type": "scenario",
  "keyword": "Cenário"
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
  "name": "inserir a categoria de meu produto",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "selecionar um determinado produto",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "devo visualizar o meu produto",
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 11625797500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 99299600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserir_a_categoria_de_meu_produto()"
});
formatter.result({
  "duration": 265019300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.selecionar_um_determinado_produto()"
});
formatter.result({
  "duration": 1159326600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.devo_visualizar_o_meu_produto()"
});
formatter.result({
  "duration": 1503449800,
  "status": "passed"
});
formatter.after({
  "duration": 642439300,
  "status": "passed"
});
formatter.after({
  "duration": 90300,
  "status": "passed"
});
formatter.after({
  "duration": 49600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": Deve efetuar uma pesquisa de produto invalido",
  "description": "",
  "id": "consulta-de-produto-por-campo-de-pesquisa;:-deve-efetuar-uma-pesquisa-de-produto-invalido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 15,
  "name": "que estou na tela aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "clicar na opcao de pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "inserir a categoria invalida de meu produto",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "devo visualizar a mensagem de confirmacao",
  "keyword": "Então "
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.que_estou_na_tela_aplicacao()"
});
formatter.result({
  "duration": 10313923600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 112964900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.inserir_a_categoria_invalida_de_meu_produto()"
});
formatter.result({
  "duration": 221503600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.devo_visualizar_a_mensagem_de_confirmacao()"
});
formatter.result({
  "duration": 1361420500,
  "status": "passed"
});
formatter.after({
  "duration": 642284600,
  "status": "passed"
});
formatter.after({
  "duration": 62500,
  "status": "passed"
});
formatter.after({
  "duration": 37200,
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
  "name": "Consulta de produto na tela principal",
  "description": "\r\nComo um usuário quero efetuar uma pesquisa de produto através da tela principal do sistema",
  "id": "consulta-de-produto-na-tela-principal",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
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
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "confirmaProduto"
      ],
      "line": 14,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;1"
    },
    {
      "cells": [
        "LAPTOPS",
        "HP Pavilion 15z Laptop",
        "HP PAVILION 15Z LAPTOP"
      ],
      "line": 15,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;2"
    },
    {
      "cells": [
        "MICE",
        "HP Z8000 Bluetooth Mouse",
        "HP Z8000 BLUETOOTH MOUSE"
      ],
      "line": 16,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;3"
    },
    {
      "cells": [
        "SPEAKERS",
        "Bose SoundLink Wireless Speaker",
        "BOSE SOUNDLINK WIRELESS SPEAKER"
      ],
      "line": 17,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
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
  "duration": 10463445700,
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
  "duration": 137188200,
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
  "duration": 741064900,
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
  "duration": 1366343400,
  "status": "passed"
});
formatter.after({
  "duration": 14200,
  "status": "passed"
});
formatter.after({
  "duration": 9200,
  "status": "passed"
});
formatter.after({
  "duration": 917447400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
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
  "duration": 10477509700,
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
  "duration": 147163900,
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
  "duration": 603302700,
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
  "duration": 1343725300,
  "status": "passed"
});
formatter.after({
  "duration": 14400,
  "status": "passed"
});
formatter.after({
  "duration": 7500,
  "status": "passed"
});
formatter.after({
  "duration": 626482000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve efetuar uma pesquisa",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-pesquisa;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
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
  "duration": 10137991100,
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
  "duration": 153054600,
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
  "duration": 745849000,
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
  "duration": 1535292200,
  "status": "passed"
});
formatter.after({
  "duration": 34600,
  "status": "passed"
});
formatter.after({
  "duration": 167500,
  "status": "passed"
});
formatter.after({
  "duration": 649363300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos",
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
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;",
  "rows": [
    {
      "cells": [
        "categoria",
        "produto",
        "quantidadeDeProdutos",
        "confirmaProduto"
      ],
      "line": 31,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;1"
    },
    {
      "cells": [
        "LAPTOPS",
        "HP Pavilion 15z Laptop",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 32,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;2"
    },
    {
      "cells": [
        "MICE",
        "HP Z8000 Bluetooth Mouse",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 33,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;3"
    },
    {
      "cells": [
        "SPEAKERS",
        "Bose SoundLink Wireless Speaker",
        "999",
        "Oops! We only have 10 in stock. We updated your order accordingly"
      ],
      "line": 34,
      "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 32,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;2",
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
  "duration": 10227640000,
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
  "duration": 106336900,
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
  "duration": 828082400,
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
  "duration": 688422900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 67671200,
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
  "duration": 1531017200,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.after({
  "duration": 637663200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;3",
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
  "duration": 10224957700,
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
  "duration": 134501100,
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
  "duration": 748692800,
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
  "duration": 478989900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 64174900,
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
  "duration": 1419217600,
  "status": "passed"
});
formatter.after({
  "duration": 36100,
  "status": "passed"
});
formatter.after({
  "duration": 20300,
  "status": "passed"
});
formatter.after({
  "duration": 632723900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Deve efetuar uma compra com a quantidade invalida de produtos",
  "description": "",
  "id": "consulta-de-produto-na-tela-principal;deve-efetuar-uma-compra-com-a-quantidade-invalida-de-produtos;;4",
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
  "duration": 10189460800,
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
  "duration": 115171700,
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
  "duration": 582960100,
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
  "duration": 664999200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoTelaPrincipalTest.inserirOProdutoNoCarrinhoDeCompra()"
});
formatter.result({
  "duration": 69570700,
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
  "duration": 1544040300,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.after({
  "duration": 657532200,
  "status": "passed"
});
});