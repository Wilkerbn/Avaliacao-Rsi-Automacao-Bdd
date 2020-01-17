package br.com.rsinet.hub.bdd.suport;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class Wait {
	
	public static void EsperarJS (WebDriver driver) {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
	    jse.executeAsyncScript("window.setTimeout(arguments[arguments.length - 1], 1000);");
	}
	
}
