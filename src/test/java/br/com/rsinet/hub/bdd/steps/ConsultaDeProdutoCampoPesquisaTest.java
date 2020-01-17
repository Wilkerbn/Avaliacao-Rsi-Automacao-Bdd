package br.com.rsinet.hub.bdd.steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class ConsultaDeProdutoCampoPesquisaTest {
	
	@Dado("^que estou na tela aplicacao$")
	public void que_estou_na_tela_aplicacao() {
	}

	@Quando("^clicar na opcao de pesquisa$")
	public void clicar_na_opcao_de_pesquisa() {
	}

	@Quando("^inserir a categoria de meu produto \"([^\"]*)\"$")
	public void inserir_a_categoria_de_meu_produto(String arg1) {
	}

	@Então("^devo visualizar o meu produto \"([^\"]*)\"$")
	public void devo_visualizar_o_meu_produto(String arg1) {
	}

}
