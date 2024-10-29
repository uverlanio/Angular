/**
 * Classe de teste para ExpurgoCriticaProposta
 * 28/02/2024
 */
@IsTest
public with sharing class ExpurgoCriticaPropostaTest {
    @IsTest 
    static void getDadosExpurgoTest() {
        ExpurgoCriticaProposta expurgo= new ExpurgoCriticaProposta();
        
        try {
            List<Object> expList= expurgo.getDadosExpurgo(1);
            System.assert(true);
        } catch (Exception e) {
            System.assert(false, 'Erro gerando dados para expurgo');
        }
    }
}