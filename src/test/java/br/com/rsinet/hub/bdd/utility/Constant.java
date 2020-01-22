package br.com.rsinet.hub.bdd.utility;

public class Constant {

	public static final String Path_TestData = "C:\\Users\\wilker.nogueira\\eclipse-workspace\\avaliacao-automacao-tdd\\src\\test\\java\\br\\com\\rsinet\\hub\\tdd\\testdata\\";

	public static final String File_TestData = "TestData.xlsx";

	public static void recebeDadosDoExcel(String planilha) throws Exception {
		ExcelUtils.setExcelFile(Constant.Path_TestData + Constant.File_TestData, planilha);

	}

	public static String categoria() throws Exception {
		return ExcelUtils.getCellData(2, 0);
	}

	public static String categoriaInvalida() throws Exception {
		return ExcelUtils.getCellData(11, 0);
	}

	public static String produto() throws Exception {
		return ExcelUtils.getCellData(2, 1);
	}

	public static String confirmaProduto() throws Exception {
		return ExcelUtils.getCellData(2, 2);
	}
	
	public static String confirmaProdutoInvalido() throws Exception {
		return ExcelUtils.getCellData(11, 1);
	}

}
