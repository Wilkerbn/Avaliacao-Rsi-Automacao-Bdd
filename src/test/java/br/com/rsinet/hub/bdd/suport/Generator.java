package br.com.rsinet.hub.bdd.suport;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

public class Generator {
	
public static String dataHoraParaArquivo() {
		
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		return new SimpleDateFormat("yyyy_MM_dd_hh-mm-ss").format(ts);
		
	}

}
