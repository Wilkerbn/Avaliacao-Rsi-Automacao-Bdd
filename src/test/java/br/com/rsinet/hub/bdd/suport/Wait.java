package br.com.rsinet.hub.bdd.suport;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class Wait {
	private WebDriver driver;
	
	
	
	public Wait(WebDriver driver) {
		this.driver = driver;
	}

	public void esperarCarregarPagina() {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
	    jse.executeAsyncScript("window.setTimeout(arguments[arguments.length - 1], 1000);");
	}
	
	public void usaScrollNaPagina() {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("scrollBy(0,200)", "");
	}
}
