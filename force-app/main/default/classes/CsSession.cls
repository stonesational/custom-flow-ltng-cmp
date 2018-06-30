/*------------------------------------------------------------
Wrapper class that holds all elements of a Card Servicing session
Components Using: CsHome
------------------------------------------------------------*/
public with sharing class CsSession {
    
    @AuraEnabled public String caseId { get; set; }
    @AuraEnabled public List<CardPlastic> currentCards { get; set; }
    @AuraEnabled public List<CsReplacementCard> replacementCards { get; set; }
       
    public CsSession() {
        
    }
    
}
