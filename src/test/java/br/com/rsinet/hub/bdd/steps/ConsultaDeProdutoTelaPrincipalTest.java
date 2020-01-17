package br.com.rsinet.hub.bdd.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import br.com.rsinet.hub.bdd.suport.Web;
import cucumber.api.Scenario;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;


public class ConsultaDeProdutoTelaPrincipalTest {
	
	WebDriver driver = null;
	
	@Dado("^que estou na aplicacao$")
	public void que_estou_na_aplicacao()  {
		driver = Web.createChrome();
	}

	@Quando("^clicar na categoria do produto \"([^\"]*)\"$")
	public void clicar_na_categoria_do_produto(String categoria)  {
		driver.findElement(By.xpath("//*[. ='" + categoria + "']")).click();
	}

	@Quando("^selecionar o produto desejado \"([^\"]*)\"$")
	public void selecionar_o_produto_desejado(String produto)  {
		driver.findElement(By.xpath("//*[. ='" + produto + "']")).click();
	}

	@Então("^devo visualizar a pagina com meu produto \"([^\"]*)\"$")
	public void devo_visualizar_a_pagina_com_meu_produto(String confirmaProduto)  {
		WebElement element = driver.findElement(By.xpath("//*[. ='" + confirmaProduto + "']"));
		String textoProduto = element.getText();
		Assert.assertEquals(textoProduto, confirmaProduto);
	}
	
	@After
	public void finalizaTest(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		driver.quit();
	}
}
