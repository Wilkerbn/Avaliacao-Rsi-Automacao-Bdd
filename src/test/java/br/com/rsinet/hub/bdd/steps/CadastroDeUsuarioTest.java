package br.com.rsinet.hub.bdd.steps;



import org.junit.Rule;
import org.junit.rules.TestName;
import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.InfoFormPage;
import br.com.rsinet.hub.bdd.pages.LoginPage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class CadastroDeUsuarioTest {
	private WebDriver driver;
	InfoFormPage infoFormPage;
	LoginPage loginPage ;

	@Rule
	public TestName test = new TestName();

	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() {
		driver = Web.createChrome();
		infoFormPage = new InfoFormPage(driver);
		loginPage = new LoginPage(driver);
	}

	@Quando("^selecionar a opção usuário$")
	public void selecionarAOpçãoUsuário() {
		loginPage.clicaNoBotaoUsuario();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		loginPage.clicaNoBotaoCriarNovaConta();
	}

	@Quando("^preencher meu nome de usuário \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsuário(String apelidoUsuario) {
		infoFormPage.inserirApelidoDoUsuario(apelidoUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		infoFormPage.inserirSenhaDoUsuario(senha);
	}

	@Quando("^preencher a confirmação da senha \"([^\"]*)\"$")
	public void preencherAConfirmaçãoDaSenha(String confirmaSenha) {
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

	@Quando("^preencher meu número de telefone \"([^\"]*)\"$")
	public void preencherMeuNúmeroDeTelefone(String telefone) {
		infoFormPage.inserirTelefone(telefone);
	}

	@Quando("^selecionar meu país \"([^\"]*)\"$")
	public void selecionarMeuPaís(String pais) {
		infoFormPage.inserirPais(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		infoFormPage.inserirCidade(cidade);
	}

	@Quando("^preencher meu endereço \"([^\"]*)\"$")
	public void preencherMeuEndereço(String endereco) {
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

	@Quando("^selecionar a opção para aceitar os termos$")
	public void selecionarAOpçãoParaAceitarOsTermos() {
		infoFormPage.clicarEmAceitarTermos();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		infoFormPage.clicarNoBotaoRegistrar();
	}
	
	@Então("^devo receber a informação que o usuario já existe \"([^\"]*)\"$")
	public void devo_receber_a_informação_que_o_usuario_já_existe(String informacaoEsperada)  {
		infoFormPage.verificarSeUsuarioJaExiste(informacaoEsperada);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroJaExiste.png");
	}
	
	@Então("^devo receber a informação com o nome de usuario\"([^\"]*)\"$")
	public void devo_receber_a_informação_com_o_nome_de_usuario(String informacaoEsperada)  {
		infoFormPage.verificarSeAContaFoiCriadaComSucesso(informacaoEsperada);
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroValido.png");
	}

	@After
	public void finaliza() {
		Web.killDriver(driver);
	}
}
