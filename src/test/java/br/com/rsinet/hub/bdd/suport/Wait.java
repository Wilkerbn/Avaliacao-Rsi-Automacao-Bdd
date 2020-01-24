package br.com.rsinet.hub.bdd.suport;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class Wait {
	private WebDriver driver;
	
	/* Construtor */
	public Wait(WebDriver driver) {
		this.driver = driver;
	}
	
	/* Método de Espera Implicita */
	public void esperaCarregarPaginaImplicita() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	/* Método de Espera utilizando JavaScript */
	public void esperarCarregarPagina() {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
	    jse.executeAsyncScript("window.setTimeout(arguments[arguments.length - 1], 1000);");
	}
	
	/* Método que usa o Scroll na página, utilizado para tirar screenshot corretamente em alguns casos */
	public void usaScrollNaPagina() {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("scrollBy(0,200)", "");
	}
}
