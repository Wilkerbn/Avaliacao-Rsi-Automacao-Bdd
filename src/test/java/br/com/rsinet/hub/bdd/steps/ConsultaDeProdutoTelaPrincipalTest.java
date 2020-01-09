package br.com.rsinet.hub.bdd.steps;

import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class ConsultaDeProdutoTelaPrincipalTest {
	
//	WebDriver driver = null;
//	
//	@Dado("^que estou acessando a aplicação$")
//	public void queEstouAcessandoAAplicação() {
//		driver = Web.createChrome();
//	}
	
	@Quando("^clicar na categoria do produto \"([^\"]*)\"$")
	public void clicar_na_categoria_do_produto(String arg1)  {
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionar_o_produto_desejado(String arg1)  {
	}

	@Então("^devo visualizar a página com meu produto$")
	public void devo_visualizar_a_página_com_meu_produto()  {
	}

}
