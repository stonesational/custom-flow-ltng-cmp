public with sharing class CardPlastic {
    
    @AuraEnabled public String id { get; set; }
    @AuraEnabled public String name { get; set; }
    @AuraEnabled public String address { get; set; }
    @AuraEnabled public Boolean selected { get; set; }
    
    public CardPlastic() {
        selected = false;
    }
}
