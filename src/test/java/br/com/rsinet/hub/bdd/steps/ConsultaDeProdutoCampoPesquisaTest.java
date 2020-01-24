package br.com.rsinet.hub.bdd.steps;

import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.HomePage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import br.com.rsinet.hub.bdd.utility.Constant;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
import cucumber.api.java.pt.Quando;

public class ConsultaDeProdutoCampoPesquisaTest {
	private WebDriver driver;
	HomePage homePage;	
	
	@Dado("^que estou na tela aplicacao$")
	public void que_estou_na_tela_aplicacao() throws Exception {
		/* Chamada do navegador  */
		driver = Web.createChrome();
		
		/* Chamada do construtor da HomePage */
		homePage = new HomePage(driver);
		
	    /* Chamada do m�todo para informar em qual aba da planilha est� a massa de dados */
		Constant.recebeDadosDoExcel("Produtos");
	}

	@Quando("^clicar na opcao de pesquisa$")
	public void clicar_na_opcao_de_pesquisa() {
		/* Chamada do Clica na lupa de pesquisa */
		homePage.clicarNaLupaDePesquisa();
	}

	@Quando("^inserir a categoria de meu produto$")
	public void inserir_a_categoria_de_meu_produto() throws Exception {
		/* Chamada do m�todo que escreve o produto capturado do Excel */
		homePage.escreverProduto(Constant.categoria());
	}
	
	@Quando("^inserir a categoria invalida de meu produto$")
	public void inserir_a_categoria_invalida_de_meu_produto() throws Exception  {
		/* Chamada do m�todo que escreve o produto inv�lido capturado do Excel */
		homePage.pesquisaProdutoInvalidoNaLupa(Constant.categoriaInvalida());
	}
	
	@Quando("^selecionar um determinado produto$")
	public void selecionar_um_determinado_produto() throws Exception  {
		/* Chamada do m�todo que seleciona o produto na p�gina capturado do Excel */
		homePage.selecionaProdutoDesejadoLupa(Constant.produto().toUpperCase());
	}	

	@Ent�o("^devo visualizar o meu produto$")
	public void devo_visualizar_o_meu_produto() throws Exception{
		/* Chamada do m�todo que verifica o produto selecionado */
		homePage.verificaProdutoSelecionado(Constant.confirmaProduto());
		
		/* Chamada do m�todo que tira screenshot utilizando um gerador para data e hora */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaValido.png");
	}
	
	@Ent�o("^devo visualizar a mensagem de confirmacao$")
	public void devo_visualizar_a_mensagem_de_confirmacao() throws Exception  {
		/* Chamada do m�todo que verifica o produto inv�lido selecionado */
		homePage.verificarMensagemInvalidaDeProdutoPesquisado(Constant.confirmaProdutoInvalido());
		
		/* Chamada do m�todo que tira screenshot utilizando um gerador para data e hora */
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaInvalido.png");
	}
			
	@After
	public void finaliza() {
		/* Chamada do m�todo que finaliza o navegador */
		Web.killDriver(driver);
	}

}
