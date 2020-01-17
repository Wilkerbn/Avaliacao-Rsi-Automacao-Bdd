$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/consultaDeProdutoCampoPesquisaTest.feature");
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
  "duration": 11373752900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaDeProdutoCampoPesquisaTest.clicar_na_opcao_de_pesquisa()"
});
formatter.result({
  "duration": 63004500,
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
  "duration": 183671000,
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
  "duration": 920255700,
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
  "duration": 206028400,
  "status": "passed"
});
formatter.after({
  "duration": 1033400,
  "status": "passed"
});
formatter.after({
  "duration": 1024100199,
  "status": "passed"
});
});