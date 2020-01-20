package br.com.rsinet.hub.bdd.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				//features = "src/test/resources/features/cadastroDeUsuarioTest.feature",
				features = "classpath:features",
				glue = "br.com.rsinet.hub.bdd.steps",
				monochrome = true,
				plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
				snippets = SnippetType.CAMELCASE,
				dryRun = false
				//tags = {"@cadastro_de_usuario"} //Com essa tag adicionada consigo informar que quero executar somente esse cenário
		)
public class Runner {
	
}

