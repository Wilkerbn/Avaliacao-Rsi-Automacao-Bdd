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

public class ConsultaDeProdutoCampoPesquisaTest {
	private WebDriver driver;
	HomePage homePage;	
	
	
	@Dado("^que estou na tela aplicacao$")
	public void que_estou_na_tela_aplicacao() {
		driver = Web.createChrome();
		homePage = new HomePage(driver);
	}

	@Quando("^clicar na opcao de pesquisa$")
	public void clicar_na_opcao_de_pesquisa() {
		homePage.clicarNaLupaDePesquisa();
	}

	@Quando("^inserir a categoria de meu produto \"([^\"]*)\"$")
	public void inserir_a_categoria_de_meu_produto(String categoria) {
		homePage.escreverProduto(categoria);
	}
	
	@Quando("^inserir a categoria invalida de meu produto \"([^\"]*)\"$")
	public void inserirACategoriaInvalidaDeMeuProduto(String categoria)  {
		homePage.pesquisaProdutoInvalidoNaLupa(categoria);
	}
	
	@Quando("^selecionar um determinado produto \"([^\"]*)\"$")
	public void selecionarUmDeterminadoProduto(String produto)  {
		homePage.selecionaProdutoDesejadoLupa(produto);
	}	

	@Então("^devo visualizar o meu produto \"([^\"]*)\"$")
	public void devo_visualizar_o_meu_produto(String confirmaProduto){
		homePage.verificaProdutoSelecionado(confirmaProduto);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaValido.png");
	}
	
	@Então("^devo visualizar a mensagem de confirmacao \"([^\"]*)\"$")
	public void devoVisualizarAMensagemDeConfirmacao(String confirmaProduto)  {
		homePage.verificarMensagemInvalidaDeProdutoPesquisado(confirmaProduto);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " consultaDeProdutoCampoPesquisaInvalido.png");
	}
			
	@After
	public void finaliza() {
		Web.killDriver(driver);
	}

}
