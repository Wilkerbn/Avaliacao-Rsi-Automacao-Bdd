package br.com.rsinet.hub.bdd.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Rule;
import org.junit.rules.TestName;
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

	WebDriver driver = null;

	@Rule
	public TestName test = new TestName();

	@Dado("^que estou acessando a aplica��o$")
	public void queEstouAcessandoAAplica��o() {
		driver = Web.createChrome();
	}

	@Quando("^selecionar a op��o usu�rio$")
	public void selecionarAOp��oUsu�rio() {
		new LoginPage(driver).botaoUsuario();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		new LoginPage(driver).criarNovaConta();
	}

	@Quando("^preencher meu nome de usu�rio \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsu�rio(String nomeUsuario) {
		new InfoFormPage(driver).campoApelido(nomeUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		new InfoFormPage(driver).campoSenha(senha);
	}

	@Quando("^preencher a confirma��o da senha \"([^\"]*)\"$")
	public void preencherAConfirma��oDaSenha(String confirmaSenha) {
		new InfoFormPage(driver).campoConfirmaSenha(confirmaSenha);
	}

	@Quando("^preencher meu e-mail \"([^\"]*)\"$")
	public void preencherMeuEMail(String email) {
		new InfoFormPage(driver).campoEmail(email);
	}

	@Quando("^preencher meu primeiro nome \"([^\"]*)\"$")
	public void preencherMeuPrimeiroNome(String nome) {
		new InfoFormPage(driver).campoPrimeiroNome(nome);
	}

	@Quando("^preencher meu ultimo nome \"([^\"]*)\"$")
	public void preencherMeuUltimoNome(String ultimoNome) {
		new InfoFormPage(driver).campoUltimoNome(ultimoNome);
	}

	@Quando("^preencher meu n�mero de telefone \"([^\"]*)\"$")
	public void preencherMeuN�meroDeTelefone(String telefone) {
		new InfoFormPage(driver).campoTelefone(telefone);
	}

	@Quando("^selecionar meu pa�s \"([^\"]*)\"$")
	public void selecionarMeuPa�s(String pais) {
		new InfoFormPage(driver).campoPais(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		new InfoFormPage(driver).campoCidade(cidade);
	}

	@Quando("^preencher meu endere�o \"([^\"]*)\"$")
	public void preencherMeuEndere�o(String endereco) {
		new InfoFormPage(driver).campoEndereco(endereco);
	}

	@Quando("^preencher meu estado \"([^\"]*)\"$")
	public void preencherMeuEstado(String estado) {
		new InfoFormPage(driver).campoEstado(estado);
	}

	@Quando("^preencher meu cep \"([^\"]*)\"$")
	public void preencherMeuCep(String cep) {
		new InfoFormPage(driver).campoCep(cep);
	}

	@Quando("^selecionar a op��o para aceitar os termos$")
	public void selecionarAOp��oParaAceitarOsTermos() {
		new InfoFormPage(driver).campoAceitaTermos();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		new InfoFormPage(driver).botaoRegistra();
	}

	@Ent�o("^devo receber a informa��o \"([^\"]*)\"$")
	public void devoReceberAInforma��o(String informacaoEsperada) {
		new InfoFormPage(driver).informacaoEsperada(informacaoEsperada);
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
