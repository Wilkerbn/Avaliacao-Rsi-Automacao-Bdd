package br.com.rsinet.hub.bdd.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				/* Localiza meu pacote com as features */
				features = "classpath:features", //features = "src/test/resources/features/cadastroDeUsuarioTest.feature" Forma utilizada para testar feature separadamente.
				
				/* Informa o pacote onde est� adicionado as classes a serem executadas*/
				glue = "br.com.rsinet.hub.bdd.steps", 
				
				/* Quando est� true deixa a sa�da mais leg�vel do cucumber no console */
				monochrome = true,
				
				/* Plugins adicionais 
				 * Pretty : Imprime a fonte Gherkin com cores adicionais e empilha os tra�os para erros. 
				 * Html : Isso ir� gerar um relat�rio HTML no local mencionado.
				 * Json : Este relat�rio cont�m todas as informa��es no formato JSON, utilizado por ferramentas de terceiros como Jenkins.
				 * Extend Report : Outro tipo de relat�rio utilizado com informa��es inerentes aos testes executados.  */
				plugin = {"pretty", "html:target/report-html", "json:target/report.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"},
				
				/* Altera o trecho do c�digo para utiliza��o do padr�o CamelCase */
				snippets = SnippetType.CAMELCASE,
				
				/* Padr�o de execu��o que verifica quando "true" se cada etapa mencionada escrita no arquivo est� de acordo
				 * com a defini��o de etapa */
				dryRun = false
				
				/* Outra maneira de se testar utilizando tag, geralmente utilizado para informar qual teste a ser executado */
				//tags = {"@cadastro_de_usuario"} //Com essa tag adicionada consigo informar que quero executar somente esse cen�rio
		)
public class Runner {
	@AfterClass
	public static void writeExtentReport() {
		/* Informa o caminho onde est� minhas configura��es em XML do Extend Report */
		Reporter.loadXMLConfig(new File("src/test/resources/configs/extension-config.xml"));
		
		/* Informa qual o sistema foi utilizado para efetuar os testes */
		Reporter.setSystemInfo("OS", "Windows10");
		
		/* Informa o nome do analista no relat�rio */
		Reporter.setSystemInfo("Tester Name", "Wilker");
		
	}
}



