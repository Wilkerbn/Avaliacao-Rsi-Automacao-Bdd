package br.com.rsinet.hub.bdd.steps;

import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.HomePage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;


public class ConsultaDeProdutoTelaPrincipalTest {
	
	WebDriver driver = null;
	HomePage homePage;	
	
	@Dado("^que estou na aplicacao$")
	public void que_estou_na_aplicacao()  {
		driver = Web.createChrome();
		homePage = new HomePage(driver);
	}

	@Quando("^clicar na categoria do produto \"([^\"]*)\"$")
	public void clicar_na_categoria_do_produto(String categoria) {
		homePage.clicarNaCategoriaDoProdutoNaTelaPrincipal(categoria);
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionar_o_produto_desejado(String produto)  {
		homePage.clicarNoProdutoEscolhidoNaTelaPrincipal(produto);
	}
	
	@Quando("^selecionar quantidade fora do permitido \"([^\"]*)\"$")
	public void selecionarQuantidadeForaDoPermitido(String quantidadeDeProdutos)  {
		homePage.inserirQuantidadeDeProdutosNaTelaPrincipal(quantidadeDeProdutos);
	}

	@Quando("^inserir o produto no carrinho de compra$")
	public void inserirOProdutoNoCarrinhoDeCompra()  {
		homePage.inserirProdutosNoCarrinhoDeCompras();
	}

	@Então("^devo visualizar uma mensagem informando sobre a quantidade invalida \"([^\"]*)\"$")
	public void devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String confirmaProduto) {
		homePage.verificaMensagemInvalidaDeQuantidadeDeProdutos(confirmaProduto);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalInvalido.png");
	}

	@Então("^devo visualizar a pagina com meu produto \"([^\"]*)\"$")
	public void devo_visualizar_a_pagina_com_meu_produto(String confirmaProduto)  {
		homePage.verificaProdutoSelecionado(confirmaProduto);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalValido.png");
	}
	
	@After
	public void finaliza() {
		Web.killDriver(driver);
	}
}
