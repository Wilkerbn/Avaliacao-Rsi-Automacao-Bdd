package br.com.rsinet.hub.bdd.pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class InfoFormPage {

private WebDriver driver;
	
	public InfoFormPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void campoApelido(String nomeUsuario) {
		driver.findElement(By.name("usernameRegisterPage")).sendKeys(nomeUsuario);
	}
	
	public void campoSenha(String senha) {
		driver.findElement(By.xpath("//*[@id=\"formCover\"]/div[1]/div[2]/sec-view[1]/div/input")).sendKeys(senha);
	}
	
	public void campoConfirmaSenha(String confirmaSenha) {
		driver.findElement(By.xpath("//*[@id=\"formCover\"]/div[1]/div[2]/sec-view[2]/div/input")).sendKeys(confirmaSenha);
	}
	
	public void campoEmail(String email) {
		driver.findElement(By.name("emailRegisterPage")).sendKeys(email);
	}
	
	public void campoPrimeiroNome(String nome) {
		driver.findElement(By.name("first_nameRegisterPage")).sendKeys(nome);
	}
	
	public void campoUltimoNome(String ultimoNome) {
		driver.findElement(By.name("last_nameRegisterPage")).sendKeys(ultimoNome);
	}
	
	public void campoTelefone(String telefone) {
		driver.findElement(By.name("phone_numberRegisterPage")).sendKeys(telefone);
	}
	
	public void campoPais(String pais) {
		WebElement selecionaPais = driver.findElement(By.name("countryListboxRegisterPage"));
		new Select(selecionaPais).selectByVisibleText(pais);
	}
	
	public void campoCidade(String cidade) {
		driver.findElement(By.name("cityRegisterPage")).sendKeys(cidade);
	}
	
	public void campoEndereco(String endereco) {
		driver.findElement(By.name("addressRegisterPage")).sendKeys(endereco);
	}
	
	public void campoEstado(String estado) {
		driver.findElement(By.name("state_/_province_/_regionRegisterPage")).sendKeys(estado);
	}
	
	public void campoCep(String cep) {
		driver.findElement(By.name("postal_codeRegisterPage")).sendKeys(cep);
	}
	
	public void campoAceitaTermos() {
		driver.findElement(By.name("i_agree")).click();
	}
	
	public void botaoRegistra() throws Exception {
		driver.findElement(By.id("register_btnundefined")).click();
		Thread.sleep(500);
	}
	
	public void informacaoEsperada(String informacaoEsperada) {
		if (informacaoEsperada.equals("User name already exists")) {
			String informacaoRecebida = driver
					.findElement(By.xpath("//*[@id=\"registerPage\"]/article/sec-form/div[2]/label[1]")).getText();
			assertEquals(informacaoEsperada, informacaoRecebida);
		} else {
			String informacaoRecebida = driver.findElement(By.id("menuUserLink")).getText();
			assertEquals(informacaoEsperada, informacaoRecebida);
		}
	}
}
