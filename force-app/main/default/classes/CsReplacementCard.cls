/*------------------------------------------------------------
Replacement card as part of Card Servicing flow
Components Using: CsHome
------------------------------------------------------------*/
public with sharing class CsReplacementCard {
    
    @AuraEnabled public string id { get;set; }
    @AuraEnabled public string name { get;set; }
    @AuraEnabled public string address { get;set; }
    
    public CsReplacementCard() {

    }
}
