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
				
				/* Informa o pacote onde está adicionado as classes a serem executadas*/
				glue = "br.com.rsinet.hub.bdd.steps", 
				
				/* Quando está true deixa a saída mais legível do cucumber no console */
				monochrome = true,
				
				/* Plugins adicionais 
				 * Pretty : Imprime a fonte Gherkin com cores adicionais e empilha os traços para erros. 
				 * Html : Isso irá gerar um relatório HTML no local mencionado.
				 * Json : Este relatório contém todas as informações no formato JSON, utilizado por ferramentas de terceiros como Jenkins.
				 * Extend Report : Outro tipo de relatório utilizado com informações inerentes aos testes executados.  */
				plugin = {"pretty", "html:target/report-html", "json:target/report.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"},
				
				/* Altera o trecho do código para utilização do padrão CamelCase */
				snippets = SnippetType.CAMELCASE,
				
				/* Padrão de execução que verifica quando "true" se cada etapa mencionada escrita no arquivo está de acordo
				 * com a definição de etapa */
				dryRun = false
				
				/* Outra maneira de se testar utilizando tag, geralmente utilizado para informar qual teste a ser executado */
				//tags = {"@cadastro_de_usuario"} //Com essa tag adicionada consigo informar que quero executar somente esse cenário
		)
public class Runner {
	@AfterClass
	public static void writeExtentReport() {
		/* Informa o caminho onde está minhas configurações em XML do Extend Report */
		Reporter.loadXMLConfig(new File("src/test/resources/configs/extension-config.xml"));
		
		/* Informa qual o sistema foi utilizado para efetuar os testes */
		Reporter.setSystemInfo("OS", "Windows10");
		
		/* Informa o nome do analista no relatório */
		Reporter.setSystemInfo("Tester Name", "Wilker");
		
	}
}



