package br.com.rsinet.hub.bdd.steps;



import org.openqa.selenium.WebDriver;

import br.com.rsinet.hub.bdd.pages.InfoFormPage;
import br.com.rsinet.hub.bdd.pages.LoginPage;
import br.com.rsinet.hub.bdd.suport.Generator;
import br.com.rsinet.hub.bdd.suport.Screenshot;
import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
import cucumber.api.java.pt.Quando;

public class CadastroDeUsuarioTest {
	private WebDriver driver;
	InfoFormPage infoFormPage;
	LoginPage loginPage ;

	@Dado("^que estou acessando a aplica��o$")
	public void queEstouAcessandoAAplica��o() {
		/* Chamada do navegador  */
		driver = Web.createChrome();
		
		/* Chamada do construtor da InfoFormPage */
		infoFormPage = new InfoFormPage(driver);
		
		/* Chamada do construtor da LoginPage */
		loginPage = new LoginPage(driver);
	}

	@Quando("^selecionar a op��o usu�rio$")
	public void selecionarAOp��oUsu�rio() {
		/* Chamada do m�todo que clica no bot�o de usu�rio */
		loginPage.clicaNoBotaoUsuario();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		/* Chamada do m�todo que clica em criar uma nova conta */
		loginPage.clicaNoBotaoCriarNovaConta();
	}

	@Quando("^preencher meu nome de usu�rio \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsu�rio(String apelidoUsuario) {
		/* Chamada do m�todo insere o UserName */
		infoFormPage.inserirApelidoDoUsuario(apelidoUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		/* Chamada do m�todo insere a senha do Usu�rio */
		infoFormPage.inserirSenhaDoUsuario(senha);
	}

	@Quando("^preencher a confirma��o da senha \"([^\"]*)\"$")
	public void preencherAConfirma��oDaSenha(String confirmaSenha) {
		/* Chamada do m�todo confirma a senha do Usu�rio */
		infoFormPage.inserirNovamenteSenhaDoUsuario(confirmaSenha);
	}

	@Quando("^preencher meu e-mail \"([^\"]*)\"$")
	public void preencherMeuEMail(String email) {
		/* Chamada do m�todo insere o e-mail do Usu�rio */
		infoFormPage.inserirEmailDoUsuario(email);
	}

	@Quando("^preencher meu primeiro nome \"([^\"]*)\"$")
	public void preencherMeuPrimeiroNome(String nome) {
		/* Chamada do m�todo insere o primeiro nome do Usu�rio */
		infoFormPage.inserirPrimeiroNome(nome);
	}

	@Quando("^preencher meu ultimo nome \"([^\"]*)\"$")
	public void preencherMeuUltimoNome(String ultimoNome) {
		/* Chamada do m�todo insere o ultimo nome do Usu�rio */
		infoFormPage.inserirUltimoNome(ultimoNome);
	}

	@Quando("^preencher meu n�mero de telefone \"([^\"]*)\"$")
	public void preencherMeuN�meroDeTelefone(String telefone) {
		/* Chamada do m�todo insere o telefone do Usu�rio */
		infoFormPage.inserirTelefone(telefone);
	}

	@Quando("^selecionar meu pa�s \"([^\"]*)\"$")
	public void selecionarMeuPa�s(String pais) {
		/* Chamada do m�todo insere o pa�s do Usu�rio */
		infoFormPage.inserirPais(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		/* Chamada do m�todo insere a cidade do Usu�rio */
		infoFormPage.inserirCidade(cidade);
	}

	@Quando("^preencher meu endere�o \"([^\"]*)\"$")
	public void preencherMeuEndere�o(String endereco) {
		/* Chamada do m�todo insere o endere�o do Usu�rio */
		infoFormPage.inserirEndereco(endereco);
	}

	@Quando("^preencher meu estado \"([^\"]*)\"$")
	public void preencherMeuEstado(String estado) {
		/* Chamada do m�todo insere o estado do Usu�rio */
		infoFormPage.inserirEstado(estado);
	}

	@Quando("^preencher meu cep \"([^\"]*)\"$")
	public void preencherMeuCep(String cep) {
		/* Chamada do m�todo insere o cep do Usu�rio */
		infoFormPage.inserirCep(cep);
	}

	@Quando("^selecionar a op��o para aceitar os termos$")
	public void selecionarAOp��oParaAceitarOsTermos() {
		/* Chamada do m�todo que aceita os termos de uso */
		infoFormPage.clicarEmAceitarTermos();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		/* Chamada do m�todo que clica em registrar */
		infoFormPage.clicarNoBotaoRegistrar();
	}
	
	@Ent�o("^devo receber a informa��o que o usuario j� existe \"([^\"]*)\"$")
	public void devo_receber_a_informa��o_que_o_usuario_j�_existe(String informacaoEsperada)  {
		/* Chamada do m�todo que verifica se o usuario j� existe */
		infoFormPage.verificarSeUsuarioJaExiste(informacaoEsperada);
		
		/* Chamada do m�todo que tira screenshot*/
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroJaExiste.png");
	}
	
	@Ent�o("^devo receber a informa��o com o nome de usuario\"([^\"]*)\"$")
	public void devo_receber_a_informa��o_com_o_nome_de_usuario(String informacaoEsperada)  {
		/* Chamada do m�todo que verifica se a conta foi criada com sucesso */
		infoFormPage.verificarSeAContaFoiCriadaComSucesso(informacaoEsperada);
		
		/* Chamada do m�todo que tira screenshot*/
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroValido.png");
	}

	@After
	public void finaliza() {
		/* Chamada do m�todo que finaliza o driver */
		Web.killDriver(driver);
	}
}
