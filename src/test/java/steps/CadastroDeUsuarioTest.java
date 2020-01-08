package steps;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
import cucumber.api.java.pt.Quando;
import suport.Web;

public class CadastroDeUsuarioTest {

	WebDriver driver = null;

	@Rule
	public TestName test = new TestName();

	@Dado("^que estou acessando a aplica��o$")
	public void queEstouAcessandoAAplica��o() {
		driver = Web.createChrome();
	}

	@Quando("^selecionar a op��o usu�rio$")
	public void selecionarAOp��oUsu�rio() {
		driver.findElement(By.id("menuUserSVGPath")).click();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		Thread.sleep(2000);
		WebElement clicarCriarConta = driver.findElement(By.linkText("CREATE NEW ACCOUNT"))
				.findElement(By.xpath("/html/body/login-modal/div/div/div[3]/a[2]"));
		clicarCriarConta.click();
	}

	@Quando("^preencher meu nome de usu�rio \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsu�rio(String nomeUsuario) {
		driver.findElement(By.name("usernameRegisterPage")).sendKeys(nomeUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		driver.findElement(By.xpath("//*[@id=\"formCover\"]/div[1]/div[2]/sec-view[1]/div/input")).sendKeys(senha);
	}

	@Quando("^preencher a confirma��o da senha \"([^\"]*)\"$")
	public void preencherAConfirma��oDaSenha(String confirmaSenha) {
		driver.findElement(By.xpath("//*[@id=\"formCover\"]/div[1]/div[2]/sec-view[2]/div/input"))
				.sendKeys(confirmaSenha);
	}

	@Quando("^preencher meu e-mail \"([^\"]*)\"$")
	public void preencherMeuEMail(String email) {
		driver.findElement(By.name("emailRegisterPage")).sendKeys(email);
	}

	@Quando("^preencher meu primeiro nome \"([^\"]*)\"$")
	public void preencherMeuPrimeiroNome(String nome) {
		driver.findElement(By.name("first_nameRegisterPage")).sendKeys(nome);
	}

	@Quando("^preencher meu ultimo nome \"([^\"]*)\"$")
	public void preencherMeuUltimoNome(String ultimoNome) {
		driver.findElement(By.name("last_nameRegisterPage")).sendKeys(ultimoNome);
	}

	@Quando("^preencher meu n�mero de telefone \"([^\"]*)\"$")
	public void preencherMeuN�meroDeTelefone(String telefone) {
		driver.findElement(By.name("phone_numberRegisterPage")).sendKeys(telefone);
	}

	@Quando("^selecionar meu pa�s \"([^\"]*)\"$")
	public void selecionarMeuPa�s(String pais) {
		WebElement selecionaPais = driver.findElement(By.name("countryListboxRegisterPage"));
		new Select(selecionaPais).selectByVisibleText(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		driver.findElement(By.name("cityRegisterPage")).sendKeys(cidade);
	}

	@Quando("^preencher meu endere�o \"([^\"]*)\"$")
	public void preencherMeuEndere�o(String endereco) {
		driver.findElement(By.name("addressRegisterPage")).sendKeys(endereco);
	}

	@Quando("^preencher meu estado \"([^\"]*)\"$")
	public void preencherMeuEstado(String estado) {
		driver.findElement(By.name("state_/_province_/_regionRegisterPage")).sendKeys(estado);
	}

	@Quando("^preencher meu cep \"([^\"]*)\"$")
	public void preencherMeuCep(String cep) {
		driver.findElement(By.name("postal_codeRegisterPage")).sendKeys(cep);
	}

	@Quando("^selecionar a op��o para aceitar os termos$")
	public void selecionarAOp��oParaAceitarOsTermos() {
		driver.findElement(By.name("i_agree")).click();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		driver.findElement(By.id("register_btnundefined")).click();
		Thread.sleep(500);
	}

	@Ent�o("^devo receber a informa��o \"([^\"]*)\"$")
	public void devoReceberAInforma��o(String informacaoEsperada) {
		if (informacaoEsperada.equals("User name already exists")) {
			String informacaoRecebida = driver
					.findElement(By.xpath("//*[@id=\"registerPage\"]/article/sec-form/div[2]/label[1]")).getText();
			assertEquals(informacaoEsperada, informacaoRecebida);
		} else {
			String informacaoRecebida = driver.findElement(By.id("menuUserLink")).getText();
			assertEquals(informacaoEsperada, informacaoRecebida);
		}
	}

	@After(order = 1)
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0)
	public void fecharBrowser() {
		driver.quit();
	}
}
