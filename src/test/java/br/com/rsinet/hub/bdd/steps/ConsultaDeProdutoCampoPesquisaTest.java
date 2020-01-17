package br.com.rsinet.hub.bdd.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.HomePage;
import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.Scenario;
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
	
	@Quando("^selecionar um determinado produto \"([^\"]*)\"$")
	public void selecionarUmDeterminadoProduto(String produto) throws Throwable {
		HomePage.selecionaProdutoLupa(driver, produto).click();
	}	

	@Então("^devo visualizar o meu produto \"([^\"]*)\"$")
	public void devo_visualizar_o_meu_produto(String confirmaProduto){
		homePage.verificaProdutoSelecionado(confirmaProduto);
	}
	
	@After
	public void finalizaTest(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}

		driver.quit();
	}

}
