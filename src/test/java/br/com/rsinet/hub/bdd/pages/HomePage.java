package br.com.rsinet.hub.bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import br.com.rsinet.hub.bdd.suport.Wait;



public class HomePage extends Wait {
	
	/* Construtor da Page Factory onde recebe um método estático que é responsável por inicializar todos objetos da página*/
	public HomePage(WebDriver driver) {
		super (driver);
		PageFactory.initElements(driver, this);
		}
	
	/* Aqui são todos os elementos capturados da página a ser testada */
	@FindBy (how = How.ID, using = "menuSearch")
	private WebElement campoLupaDePesquisa;
	
	@FindBy (how = How.ID, using = "autoComplete")
	private WebElement campoParaEscreverCategoria;
	
	@FindBy (how = How.CLASS_NAME, using = "top6Products")
	private WebElement campoComTopProdutosLocalizados;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"Description\"]/h1")
	private WebElement produtoLocalizado;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"our_products\"]/div[2]")
	private WebElement categoriaTelaPrincipalLocalizada;
	
	@FindBy (how = How.XPATH, using = "//div[@class='cell categoryRight']")
	private WebElement produtosTelaPrincipalLocalizados;
	
	@FindBy (how = How.NAME, using ="quantity")
	private WebElement campoParaInserirQuantidadeDeProdutos;
	
	@FindBy (how = How.NAME, using = "save_to_cart")
	private WebElement botaoParaAdicionarComprasNoCarrinho;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"productProperties\"]/label")
	private WebElement mensagemInformandoQuantidadeInvalida;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"searchPage\"]/div[3]/div/label/span")
	private WebElement mensagemInformandoProdutoInvalido;
	
	/* Aqui são todos os métodos onde informamos uma ação nos elementos localizados */
	public void pesquisaProdutoInvalidoNaLupa(String categoriaInvalida) {
		campoParaEscreverCategoria.sendKeys(categoriaInvalida +Keys.ENTER);
	}
		
	public void clicarNaLupaDePesquisa() {
		campoLupaDePesquisa.click();
	}
	
	public void escreverProduto(String categoria) {
		campoParaEscreverCategoria.sendKeys(categoria);
	}
	
	public void selecionaProdutoDesejadoLupa(String produto) {
		esperarCarregarPagina();
		campoComTopProdutosLocalizados.findElement(By.xpath("//*[. ='" + produto + "']")).click();
	}
	
	public void verificaProdutoSelecionado(String confirmaProduto) {
		esperarCarregarPagina();
		String produtoObtido = produtoLocalizado.getText();
		Assert.assertEquals(confirmaProduto, produtoObtido);
	}
	
	public void clicarNaCategoriaDoProdutoNaTelaPrincipal(String categoria) {
		categoriaTelaPrincipalLocalizada.findElement(By.xpath("//*[.='"+ categoria +"']")).click();
	}
	
	public void clicarNoProdutoEscolhidoNaTelaPrincipal(String produto) {
		produtosTelaPrincipalLocalizados.findElement(By.xpath("//*[.='"+ produto +"']")).click();
	}
	
	public void inserirQuantidadeDeProdutosNaTelaPrincipal(String quantidadeDeProdutos) {
		campoParaInserirQuantidadeDeProdutos.sendKeys(quantidadeDeProdutos);
	}
		
	public void inserirProdutosNoCarrinhoDeCompras() {
		botaoParaAdicionarComprasNoCarrinho.click();
		
	}
	
	public void verificaMensagemInvalidaDeQuantidadeDeProdutos(String confirmaProduto) {
		esperarCarregarPagina(); usaScrollNaPagina();
		String mensagemInvalidaObtida = mensagemInformandoQuantidadeInvalida.getText();
		Assert.assertEquals(confirmaProduto, mensagemInvalidaObtida);
	}
	
	public void verificarMensagemInvalidaDeProdutoPesquisado(String confirmaProduto) {
		esperarCarregarPagina();
		String mensagemProdutoInvalidoObtido = mensagemInformandoProdutoInvalido.getText();
		Assert.assertTrue(mensagemProdutoInvalidoObtido.contains(confirmaProduto));
	}

}
