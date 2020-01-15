package br.com.rsinet.hub.bdd.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

	private WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void botaoUsuario() {
		driver.findElement(By.id("menuUserSVGPath")).click();
	}
	
	public void criarNovaConta() throws Exception {
							
		
		WebElement clicarCriarConta = driver.findElement(By.linkText("CREATE NEW ACCOUNT"))
				.findElement(By.xpath("/html/body/login-modal/div/div/div[3]/a[2]"));
		clicarCriarConta.sendKeys(Keys.ENTER);
		
	}
}
