public with sharing class CardPlastic {
    
    @AuraEnabled public String id { get; set; }
    @AuraEnabled public String name { get; set; }
    @AuraEnabled public String address { get; set; }
    
    public CardPlastic() {

    }
}
