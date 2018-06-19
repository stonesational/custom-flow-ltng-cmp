public with sharing class CsReplacementCard {
    
    @AuraEnabled public string id { get;set; }
    @AuraEnabled public string name { get;set; }
    @AuraEnabled public string address { get;set; }
    
    public CsReplacementCard() {

    }
}
