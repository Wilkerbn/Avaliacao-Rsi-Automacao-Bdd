package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				features = "src/test/resources/features/cadastroDeUsuarioTest.feature",
				glue = "steps",
				monochrome = true,
				plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
				snippets = SnippetType.CAMELCASE
		)
public class Runner {
}
