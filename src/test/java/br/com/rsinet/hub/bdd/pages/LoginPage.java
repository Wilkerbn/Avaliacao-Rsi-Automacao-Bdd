package br.com.rsinet.hub.bdd.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import br.com.rsinet.hub.bdd.suport.Wait;

public class LoginPage extends Wait{

	/* Construtor da Page Factory onde recebe um m�todo est�tico que � respons�vel por inicializar todos objetos da p�gina*/
	public LoginPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);
	}

	/* Aqui s�o todos os elementos capturados da p�gina a ser testada */
	@FindBy(how = How.ID, using = "menuUser")
	private WebElement botaoUsuario;

	@FindBy(how = How.LINK_TEXT, using = "CREATE NEW ACCOUNT")
	private WebElement botaoCriarNovaConta;

	public void clicaNoBotaoUsuario() {
		esperarCarregarPagina();
		botaoUsuario.click();
	}

	public void clicaNoBotaoCriarNovaConta() {
		botaoCriarNovaConta.sendKeys(Keys.ENTER);
	}

}
