$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastroDeUsuarioTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de usuario",
  "description": "\nComo um usuário quero preencher minhas informações\nPara que eu possa ter meu cadastro no site",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "preencher meu nome de usuário \"\u003cnomeUsuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencher minha senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher a confirmação da senha \"\u003cconfirmaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher meu e-mail \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher meu primeiro nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu ultimo nome \"\u003cultimoNome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu número de telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "selecionar meu país \"\u003cpais\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher minha cidade \"\u003ccidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher meu endereço \"\u003cendereco\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher meu estado \"\u003cestado\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu cep \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "devo receber a informação \"\u003cinformacaoEsperada\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "nomeUsuario",
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
      "line": 28,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "Wilkerbn10",
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
        "Wilkerbn10"
      ],
      "line": 29,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;;2"
    },
    {
      "cells": [
        "Wilkerbn10",
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
      "line": 30,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 29,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "preencher meu nome de usuário \"Wilkerbn10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "devo receber a informação \"Wilkerbn10\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7422168900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1071421000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 3786256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn10",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 151604600,
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
  "duration": 143689000,
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
  "duration": 148667100,
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
  "duration": 403967100,
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
  "duration": 118093300,
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
  "duration": 139740500,
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
  "duration": 141311600,
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
  "duration": 3900559300,
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
  "duration": 119240200,
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
  "duration": 188170400,
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
  "duration": 92214800,
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
  "duration": 125613700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 82020200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 569620400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn10",
      "offset": 27
    }
  ],
  "location": "CadastroDeUsuarioTest.devoReceberAInformação(String)"
});
formatter.result({
  "duration": 28614800,
  "status": "passed"
});
formatter.after({
  "duration": 471865600,
  "status": "passed"
});
formatter.after({
  "duration": 632664700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "preencher meu nome de usuário \"Wilkerbn10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "devo receber a informação \"User name already exists\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5795449700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1102266800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 3686523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn10",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 144063200,
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
  "duration": 127012500,
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
  "duration": 132246200,
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
  "duration": 376942500,
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
  "duration": 124064800,
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
  "duration": 131679600,
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
  "duration": 162725900,
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
  "duration": 4303430800,
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
  "duration": 122737000,
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
  "duration": 187983200,
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
  "duration": 80747300,
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
  "duration": 137607500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "duration": 74537200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "duration": 564706500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User name already exists",
      "offset": 27
    }
  ],
  "location": "CadastroDeUsuarioTest.devoReceberAInformação(String)"
});
formatter.result({
  "duration": 27612700,
  "status": "passed"
});
formatter.after({
  "duration": 280603500,
  "status": "passed"
});
formatter.after({
  "duration": 619924600,
  "status": "passed"
});
});