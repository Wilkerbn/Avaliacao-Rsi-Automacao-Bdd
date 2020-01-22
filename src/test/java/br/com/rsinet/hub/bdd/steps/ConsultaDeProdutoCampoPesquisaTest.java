package br.com.rsinet.hub.bdd.steps;

import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.HomePage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import br.com.rsinet.hub.bdd.utility.Constant;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class ConsultaDeProdutoCampoPesquisaTest {
	private WebDriver driver;
	HomePage homePage;	
	
	
	
	@Dado("^que estou na tela aplicacao$")
	public void que_estou_na_tela_aplicacao() throws Exception {
		driver = Web.createChrome();
		homePage = new HomePage(driver);
		Constant.recebeDadosDoExcel("Produtos");
		
	}

	@Quando("^clicar na opcao de pesquisa$")
	public void clicar_na_opcao_de_pesquisa() {
		homePage.clicarNaLupaDePesquisa();
	}

	@Quando("^inserir a categoria de meu produto$")
	public void inserir_a_categoria_de_meu_produto() throws Exception {
		homePage.escreverProduto(Constant.categoria());
	}
	
	@Quando("^inserir a categoria invalida de meu produto$")
	public void inserir_a_categoria_invalida_de_meu_produto() throws Exception  {
		homePage.pesquisaProdutoInvalidoNaLupa(Constant.categoriaInvalida());
	}
	
	@Quando("^selecionar um determinado produto$")
	public void selecionar_um_determinado_produto() throws Exception  {
		homePage.selecionaProdutoDesejadoLupa(Constant.produto().toUpperCase());
	}	

	@Então("^devo visualizar o meu produto$")
	public void devo_visualizar_o_meu_produto() throws Exception{
		homePage.verificaProdutoSelecionado(Constant.confirmaProduto());
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaValido.png");
	}
	
	@Então("^devo visualizar a mensagem de confirmacao$")
	public void devo_visualizar_a_mensagem_de_confirmacao() throws Exception  {
		homePage.verificarMensagemInvalidaDeProdutoPesquisado(Constant.confirmaProdutoInvalido());
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaInvalido.png");
	}
			
	@After
	public void finaliza() {
		Web.killDriver(driver);
	}

}
