package br.com.rsinet.hub.bdd.steps;



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

	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() {
		/* Chamada do navegador  */
		driver = Web.createChrome();
		
		/* Chamada do construtor da InfoFormPage */
		infoFormPage = new InfoFormPage(driver);
		
		/* Chamada do construtor da LoginPage */
		loginPage = new LoginPage(driver);
	}

	@Quando("^selecionar a opção usuário$")
	public void selecionarAOpçãoUsuário() {
		/* Chamada do método que clica no botão de usuário */
		loginPage.clicaNoBotaoUsuario();
	}

	@Quando("^clicar em criar uma nova conta$")
	public void clicarEmCriarUmaNovaConta() throws Exception {
		/* Chamada do método que clica em criar uma nova conta */
		loginPage.clicaNoBotaoCriarNovaConta();
	}

	@Quando("^preencher meu nome de usuário \"([^\"]*)\"$")
	public void preencherMeuNomeDeUsuário(String apelidoUsuario) {
		/* Chamada do método insere o UserName */
		infoFormPage.inserirApelidoDoUsuario(apelidoUsuario);
	}

	@Quando("^preencher minha senha \"([^\"]*)\"$")
	public void preencherMinhaSenha(String senha) {
		/* Chamada do método insere a senha do Usuário */
		infoFormPage.inserirSenhaDoUsuario(senha);
	}

	@Quando("^preencher a confirmação da senha \"([^\"]*)\"$")
	public void preencherAConfirmaçãoDaSenha(String confirmaSenha) {
		/* Chamada do método confirma a senha do Usuário */
		infoFormPage.inserirNovamenteSenhaDoUsuario(confirmaSenha);
	}

	@Quando("^preencher meu e-mail \"([^\"]*)\"$")
	public void preencherMeuEMail(String email) {
		/* Chamada do método insere o e-mail do Usuário */
		infoFormPage.inserirEmailDoUsuario(email);
	}

	@Quando("^preencher meu primeiro nome \"([^\"]*)\"$")
	public void preencherMeuPrimeiroNome(String nome) {
		/* Chamada do método insere o primeiro nome do Usuário */
		infoFormPage.inserirPrimeiroNome(nome);
	}

	@Quando("^preencher meu ultimo nome \"([^\"]*)\"$")
	public void preencherMeuUltimoNome(String ultimoNome) {
		/* Chamada do método insere o ultimo nome do Usuário */
		infoFormPage.inserirUltimoNome(ultimoNome);
	}

	@Quando("^preencher meu número de telefone \"([^\"]*)\"$")
	public void preencherMeuNúmeroDeTelefone(String telefone) {
		/* Chamada do método insere o telefone do Usuário */
		infoFormPage.inserirTelefone(telefone);
	}

	@Quando("^selecionar meu país \"([^\"]*)\"$")
	public void selecionarMeuPaís(String pais) {
		/* Chamada do método insere o país do Usuário */
		infoFormPage.inserirPais(pais);
	}

	@Quando("^preencher minha cidade \"([^\"]*)\"$")
	public void preencherMinhaCidade(String cidade) {
		/* Chamada do método insere a cidade do Usuário */
		infoFormPage.inserirCidade(cidade);
	}

	@Quando("^preencher meu endereço \"([^\"]*)\"$")
	public void preencherMeuEndereço(String endereco) {
		/* Chamada do método insere o endereço do Usuário */
		infoFormPage.inserirEndereco(endereco);
	}

	@Quando("^preencher meu estado \"([^\"]*)\"$")
	public void preencherMeuEstado(String estado) {
		/* Chamada do método insere o estado do Usuário */
		infoFormPage.inserirEstado(estado);
	}

	@Quando("^preencher meu cep \"([^\"]*)\"$")
	public void preencherMeuCep(String cep) {
		/* Chamada do método insere o cep do Usuário */
		infoFormPage.inserirCep(cep);
	}

	@Quando("^selecionar a opção para aceitar os termos$")
	public void selecionarAOpçãoParaAceitarOsTermos() {
		/* Chamada do método que aceita os termos de uso */
		infoFormPage.clicarEmAceitarTermos();
	}

	@Quando("^clicar em registrar$")
	public void clicarEmRegistrar() throws Exception {
		/* Chamada do método que clica em registrar */
		infoFormPage.clicarNoBotaoRegistrar();
	}
	
	@Então("^devo receber a informação que o usuario já existe \"([^\"]*)\"$")
	public void devo_receber_a_informação_que_o_usuario_já_existe(String informacaoEsperada)  {
		/* Chamada do método que verifica se o usuario já existe */
		infoFormPage.verificarSeUsuarioJaExiste(informacaoEsperada);
		
		/* Chamada do método que tira screenshot*/
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroJaExiste.png");
	}
	
	@Então("^devo receber a informação com o nome de usuario\"([^\"]*)\"$")
	public void devo_receber_a_informação_com_o_nome_de_usuario(String informacaoEsperada)  {
		/* Chamada do método que verifica se a conta foi criada com sucesso */
		infoFormPage.verificarSeAContaFoiCriadaComSucesso(informacaoEsperada);
		
		/* Chamada do método que tira screenshot*/
		Screenshot.tirar(driver, "target/screenshot/" + Generator.dataHoraParaArquivo() + " cadastroValido.png");
	}

	@After
	public void finaliza() {
		/* Chamada do método que finaliza o driver */
		Web.killDriver(driver);
	}
}
