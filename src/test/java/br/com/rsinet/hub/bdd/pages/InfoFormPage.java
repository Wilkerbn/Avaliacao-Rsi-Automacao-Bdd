package br.com.rsinet.hub.bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import br.com.rsinet.hub.bdd.suport.Wait;

public class InfoFormPage extends Wait {

	
	/* Construtor da Page Factory onde recebe um m�todo est�tico que � respons�vel por inicializar todos objetos da p�gina*/
	public InfoFormPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);
	}

	/* Aqui s�o todos os elementos capturados */
	@FindBy(how = How.NAME, using = "usernameRegisterPage")
	private WebElement campoApelido;

	@FindBy(how = How.NAME, using = "passwordRegisterPage")
	private WebElement campoSenha;

	@FindBy(how = How.NAME, using = "confirm_passwordRegisterPage")
	private WebElement campoConfirmaSenha;

	@FindBy(how = How.NAME, using = "emailRegisterPage")
	private WebElement campoEmail;

	@FindBy(how = How.NAME, using = "first_nameRegisterPage")
	private WebElement campoPrimeiroNome;

	@FindBy(how = How.NAME, using = "last_nameRegisterPage")
	private WebElement campoUltimoNome;

	@FindBy(how = How.NAME, using = "phone_numberRegisterPage")
	private WebElement campoTelefone;

	@FindBy(how = How.NAME, using = "countryListboxRegisterPage")
	private WebElement campoPais;

	@FindBy(how = How.NAME, using = "cityRegisterPage")
	private WebElement campoCidade;

	@FindBy(how = How.NAME, using = "addressRegisterPage")
	private WebElement campoEndereco;

	@FindBy(how = How.NAME, using = "state_/_province_/_regionRegisterPage")
	private WebElement campoEstado;

	@FindBy(how = How.NAME, using = "postal_codeRegisterPage")
	private WebElement campoCep;

	@FindBy(how = How.NAME, using = "i_agree")
	private WebElement campoDeTermos;

	@FindBy(how = How.ID, using = "register_btnundefined")
	private WebElement botaoDeRegistrarConta;

	@FindBy(how = How.ID, using = "menuUserLink")
	private WebElement usuarioLogado;

	@FindBy(how = How.XPATH, using = "//*[@id=\"registerPage\"]/article/sec-form/div[2]/label[1]")
	private WebElement mensagemUsuarioJaExiste;

	/* Aqui s�o todos os m�todos onde informo uma a��o nos elementos que s�o localizados */
	public void inserirApelidoDoUsuario(String apelidoUsuario) {
		campoApelido.sendKeys(apelidoUsuario);
	}

	public void inserirSenhaDoUsuario(String senha) {
		campoSenha.sendKeys(senha);
	}

	public void inserirNovamenteSenhaDoUsuario(String confirmaSenha) {
		campoConfirmaSenha.sendKeys(confirmaSenha);
	}

	public void inserirEmailDoUsuario(String email) {
		campoEmail.sendKeys(email);
	}

	public void inserirPrimeiroNome(String nome) {
		campoPrimeiroNome.sendKeys(nome);
	}

	public void inserirUltimoNome(String ultimoNome) {
		campoUltimoNome.sendKeys(ultimoNome);
	}

	public void inserirTelefone(String telefone) {
		campoTelefone.sendKeys(telefone);
	}

	public void inserirPais(String pais) {
		new Select(campoPais).selectByVisibleText(pais);
	}

	public void inserirCidade(String cidade) {
		campoCidade.sendKeys(cidade);
	}

	public void inserirEndereco(String endereco) {
		campoEndereco.sendKeys(endereco);
	}

	public void inserirEstado(String estado) {
		campoEstado.sendKeys(estado);
	}

	public void inserirCep(String cep) {
		campoCep.sendKeys(cep);
	}

	public void clicarEmAceitarTermos() {
		campoDeTermos.click();
	}

	public void clicarNoBotaoRegistrar() {
		botaoDeRegistrarConta.click();

	}

	public void verificarSeAContaFoiCriadaComSucesso(String informacaoEsperada) {
		esperarCarregarPagina();
		Assert.assertEquals(informacaoEsperada, usuarioLogado.getText());
	}

	public void verificarSeUsuarioJaExiste(String informacaoEsperada) {
		usaScrollNaPagina(); esperarCarregarPagina();
		Assert.assertEquals(informacaoEsperada, mensagemUsuarioJaExiste.getText());
	}
	
	

}
