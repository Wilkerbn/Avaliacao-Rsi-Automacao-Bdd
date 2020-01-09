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
  "description": "\nComo um usuário quero preencher minhas informações\nPara que eu possa ter meu cadastro no site",
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
  "line": 9,
  "name": "Deve inserir uma conta",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@cadastro_de_usuario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher meu nome de usuário \"\u003cnomeUsuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher minha senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher a confirmação da senha \"\u003cconfirmaSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu e-mail \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu primeiro nome \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher meu ultimo nome \"\u003cultimoNome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher meu número de telefone \"\u003ctelefone\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "selecionar meu país \"\u003cpais\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher minha cidade \"\u003ccidade\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu endereço \"\u003cendereco\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher meu estado \"\u003cestado\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "preencher meu cep \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "devo receber a informação \"\u003cinformacaoEsperada\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta;",
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
      "line": 30,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta;;1"
    },
    {
      "cells": [
        "Wilkerbn15",
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
        "Wilkerbn15"
      ],
      "line": 31,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta;;2"
    },
    {
      "cells": [
        "Wilkerbn15",
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
      "line": 32,
      "id": "cadastro-de-usuario;deve-inserir-uma-conta;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 31,
  "name": "Deve inserir uma conta",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@cadastro_de_usuario"
    },
    {
      "line": 2,
      "name": "@regressivo"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher meu nome de usuário \"Wilkerbn15\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "devo receber a informação \"Wilkerbn15\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTest.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7295647400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 1019823400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 572466500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn15",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "duration": 10055170500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027usernameRegisterPage\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RSI1596\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\WILKER~1.NOG\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a43737780854cd8f728d6254e89e35e9\n*** Element info: {Using\u003dname, value\u003dusernameRegisterPage}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat br.com.rsinet.hub.bdd.pages.InfoFormPage.campoApelido(InfoFormPage.java:19)\r\n\tat br.com.rsinet.hub.bdd.steps.CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(CadastroDeUsuarioTest.java:46)\r\n\tat ✽.E preencher meu nome de usuário \"Wilkerbn15\"(features/cadastroDeUsuarioTest.feature:13)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn15",
      "offset": 27
    }
  ],
  "location": "CadastroDeUsuarioTest.devoReceberAInformação(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 314166500,
  "status": "passed"
});
formatter.after({
  "duration": 619666700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Deve inserir uma conta",
  "description": "",
  "id": "cadastro-de-usuario;deve-inserir-uma-conta;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@cadastro_de_usuario"
    },
    {
      "line": 2,
      "name": "@regressivo"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "selecionar a opção usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar em criar uma nova conta",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencher meu nome de usuário \"Wilkerbn15\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencher minha senha \"Wbn000001\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencher a confirmação da senha \"Wbn000001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencher meu e-mail \"wilker.bn@hotmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencher meu primeiro nome \"Wilker\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencher meu ultimo nome \"Nogueira\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencher meu número de telefone \"11911111111\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "selecionar meu país \"Brazil\"",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencher minha cidade \"Osasco\"",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencher meu endereço \"R. Autonomistas 1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencher meu estado \"SP\"",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "preencher meu cep \"11111-111\"",
  "matchedColumns": [
    11
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "selecionar a opção para aceitar os termos",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "clicar em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 27,
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
  "duration": 5850508600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoUsuário()"
});
formatter.result({
  "duration": 993107800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta()"
});
formatter.result({
  "duration": 1558673200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"javascript:void(0)\" role\u003d\"link\" class\u003d\"create-new-account ng-scope\" translate\u003d\"CREATE_NEW_ACCOUNT\" data-ng-click\u003d\"createNewAccount()\"\u003e...\u003c/a\u003e is not clickable at point (517, 342). Other element would receive the click: \u003cdiv class\u003d\"loader\" style\u003d\"display: block; opacity: 1;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RSI1596\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\WILKER~1.NOG\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57416}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8677c35bcf83a6423e829bb138f22ca8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat br.com.rsinet.hub.bdd.pages.LoginPage.criarNovaConta(LoginPage.java:25)\r\n\tat br.com.rsinet.hub.bdd.steps.CadastroDeUsuarioTest.clicarEmCriarUmaNovaConta(CadastroDeUsuarioTest.java:41)\r\n\tat ✽.E clicar em criar uma nova conta(features/cadastroDeUsuarioTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wilkerbn15",
      "offset": 31
    }
  ],
  "location": "CadastroDeUsuarioTest.preencherMeuNomeDeUsuário(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.selecionarAOpçãoParaAceitarOsTermos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroDeUsuarioTest.clicarEmRegistrar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 316872800,
  "status": "passed"
});
formatter.after({
  "duration": 600250400,
  "status": "passed"
});
});