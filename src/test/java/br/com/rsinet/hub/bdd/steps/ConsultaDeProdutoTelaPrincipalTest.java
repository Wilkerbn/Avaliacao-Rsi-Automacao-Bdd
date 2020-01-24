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
	private WebDriver driver;
	HomePage homePage;	
	
	@Dado("^que estou na aplicacao$")
	public void que_estou_na_aplicacao()  {
		/* Chamada do navegador  */
		driver = Web.createChrome();
		
		/* Chamada do construtor da HomePage */
		homePage = new HomePage(driver);
	}

	@Quando("^clicar na categoria do produto \"([^\"]*)\"$")
	public void clicar_na_categoria_do_produto(String categoria) {
		/* Chamada do método que clica na categoria passando a informação na String categoria que é retirado da feature */
		homePage.clicarNaCategoriaDoProdutoNaTelaPrincipal(categoria);
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionar_o_produto_desejado(String produto)  {
		/* Chamada do método que clica no produto passando a informação na String produto que é retirado da feature */
		homePage.clicarNoProdutoEscolhidoNaTelaPrincipal(produto);
	}
	
	@Quando("^selecionar quantidade fora do permitido \"([^\"]*)\"$")
	public void selecionarQuantidadeForaDoPermitido(String quantidadeDeProdutos)  {
		/* Chamada do método que insere quantidade de produto passando a informação na String quantidadeDeProdutos que é retirado da feature */
		homePage.inserirQuantidadeDeProdutosNaTelaPrincipal(quantidadeDeProdutos);
	}

	@Quando("^inserir o produto no carrinho de compra$")
	public void inserirOProdutoNoCarrinhoDeCompra()  {
		/* Chamada do método que insere o produto no carrinho */
		homePage.inserirProdutosNoCarrinhoDeCompras();
	}

	@Então("^devo visualizar uma mensagem informando sobre a quantidade invalida \"([^\"]*)\"$")
	public void devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String confirmaProduto) {
		/* Chamada do método que verifica a mensagem de quantidade inválida inserida no carrinho */
		homePage.verificaMensagemInvalidaDeQuantidadeDeProdutos(confirmaProduto);
		
		/* Chamada do método que tira screenshot da tela gerando data e hora para o arquivo */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalInvalido.png");
	}

	@Então("^devo visualizar a pagina com meu produto \"([^\"]*)\"$")
	public void devo_visualizar_a_pagina_com_meu_produto(String confirmaProduto)  {
		/* Chamada do método que compara o produto obtido com o produto informado na feature */
		homePage.verificaProdutoSelecionado(confirmaProduto);
		
		/* Chamada do método que tira screenshot da tela gerando data e hora para o arquivo */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalValido.png");
	}
	
	@After
	public void finaliza() {
		/* Chamada do método que finaliza o driver */
		Web.killDriver(driver);
	}
}
