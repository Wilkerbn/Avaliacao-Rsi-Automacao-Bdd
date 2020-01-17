package br.com.rsinet.hub.bdd.steps;



import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import org.junit.Rule;
import org.junit.rules.TestName;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.InfoFormPage;
import br.com.rsinet.hub.bdd.pages.LoginPage;
import br.com.rsinet.hub.bdd.suport.Web;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
import cucumber.api.java.pt.Quando;

public class CadastroDeUsuarioTest {
	private WebDriver driver;
	InfoFormPage infoFormPage;
	LoginPage loginPage ;

	@Rule
	public TestName test = new TestName();

	@Dado("^que estou acessando a aplica��o$")
	public void queEstouAcessandoAAplica��o() {
		driver = Web.createChrome();
		infoFormPage = new InfoFormPage(driver);
		loginPage = new LoginPage(driver);
	}

	@Quando("^selecionar a op��o usu�rio$")
	public void selecionarAOp��oUsu�rio() {
		loginPage.clicaNoBotaoUsuario();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		loginPage.clicaNoBotaoCriarNovaConta();
	}

	@Quando("^preencher meu nome de usu�rio \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsu�rio(String apelidoUsuario) {
		infoFormPage.inserirApelidoDoUsuario(apelidoUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		infoFormPage.inserirSenhaDoUsuario(senha);
	}

	@Quando("^preencher a confirma��o da senha \"([^\"]*)\"$")
	public void preencherAConfirma��oDaSenha(String confirmaSenha) {
		infoFormPage.inserirNovamenteSenhaDoUsuario(confirmaSenha);
	}

	@Quando("^preencher meu e-mail \"([^\"]*)\"$")
	public void preencherMeuEMail(String email) {
		infoFormPage.inserirEmailDoUsuario(email);
	}

	@Quando("^preencher meu primeiro nome \"([^\"]*)\"$")
	public void preencherMeuPrimeiroNome(String nome) {
		infoFormPage.inserirPrimeiroNome(nome);
	}

	@Quando("^preencher meu ultimo nome \"([^\"]*)\"$")
	public void preencherMeuUltimoNome(String ultimoNome) {
		infoFormPage.inserirUltimoNome(ultimoNome);
	}

	@Quando("^preencher meu n�mero de telefone \"([^\"]*)\"$")
	public void preencherMeuN�meroDeTelefone(String telefone) {
		infoFormPage.inserirTelefone(telefone);
	}

	@Quando("^selecionar meu pa�s \"([^\"]*)\"$")
	public void selecionarMeuPa�s(String pais) {
		infoFormPage.inserirPais(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		infoFormPage.inserirCidade(cidade);
	}

	@Quando("^preencher meu endere�o \"([^\"]*)\"$")
	public void preencherMeuEndere�o(String endereco) {
		infoFormPage.inserirEndereco(endereco);
	}

	@Quando("^preencher meu estado \"([^\"]*)\"$")
	public void preencherMeuEstado(String estado) {
		infoFormPage.inserirEstado(estado);
	}

	@Quando("^preencher meu cep \"([^\"]*)\"$")
	public void preencherMeuCep(String cep) {
		infoFormPage.inserirCep(cep);
	}

	@Quando("^selecionar a op��o para aceitar os termos$")
	public void selecionarAOp��oParaAceitarOsTermos() {
		infoFormPage.clicarEmAceitarTermos();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		infoFormPage.clicarNoBotaoRegistrar();
	}
	
	@Ent�o("^devo receber a informa��o que o usuario j� existe \"([^\"]*)\"$")
	public void devo_receber_a_informa��o_que_o_usuario_j�_existe(String informacaoEsperada)  {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeAsyncScript("window.setTimeout(arguments[arguments.length - 1], 1000);");
		infoFormPage.verificarSeUsuarioJaExiste(informacaoEsperada);
	}
	
	@Ent�o("^devo receber a informa��o com o nome de usuario\"([^\"]*)\"$")
	public void devo_receber_a_informa��o_com_o_nome_de_usuario(String informacaoEsperada)  {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
	    jse.executeAsyncScript("window.setTimeout(arguments[arguments.length - 1], 500);");
		infoFormPage.verificarSeAContaFoiCriadaComSucesso(informacaoEsperada);
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
