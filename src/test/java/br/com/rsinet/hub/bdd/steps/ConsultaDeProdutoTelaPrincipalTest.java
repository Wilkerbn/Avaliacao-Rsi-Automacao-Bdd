package br.com.rsinet.hub.bdd.steps;

import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.HomePage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
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
		/* Chamada do m�todo que clica na categoria passando a informa��o na String categoria que � retirado da feature */
		homePage.clicarNaCategoriaDoProdutoNaTelaPrincipal(categoria);
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionar_o_produto_desejado(String produto)  {
		/* Chamada do m�todo que clica no produto passando a informa��o na String produto que � retirado da feature */
		homePage.clicarNoProdutoEscolhidoNaTelaPrincipal(produto);
	}
	
	@Quando("^selecionar quantidade fora do permitido \"([^\"]*)\"$")
	public void selecionarQuantidadeForaDoPermitido(String quantidadeDeProdutos)  {
		/* Chamada do m�todo que insere quantidade de produto passando a informa��o na String quantidadeDeProdutos que � retirado da feature */
		homePage.inserirQuantidadeDeProdutosNaTelaPrincipal(quantidadeDeProdutos);
	}

	@Quando("^inserir o produto no carrinho de compra$")
	public void inserirOProdutoNoCarrinhoDeCompra()  {
		/* Chamada do m�todo que insere o produto no carrinho */
		homePage.inserirProdutosNoCarrinhoDeCompras();
	}

	@Ent�o("^devo visualizar uma mensagem informando sobre a quantidade invalida \"([^\"]*)\"$")
	public void devoVisualizarUmaMensagemInformandoSobreAQuantidadeInvalida(String confirmaProduto) {
		/* Chamada do m�todo que verifica a mensagem de quantidade inv�lida inserida no carrinho */
		homePage.verificaMensagemInvalidaDeQuantidadeDeProdutos(confirmaProduto);
		
		/* Chamada do m�todo que tira screenshot da tela gerando data e hora para o arquivo */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalInvalido.png");
	}

	@Ent�o("^devo visualizar a pagina com meu produto \"([^\"]*)\"$")
	public void devo_visualizar_a_pagina_com_meu_produto(String confirmaProduto)  {
		/* Chamada do m�todo que compara o produto obtido com o produto informado na feature */
		homePage.verificaProdutoSelecionado(confirmaProduto);
		
		/* Chamada do m�todo que tira screenshot da tela gerando data e hora para o arquivo */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoTelaPrincipalValido.png");
	}
	
	@After
	public void finaliza() {
		/* Chamada do m�todo que finaliza o driver */
		Web.killDriver(driver);
	}
}
