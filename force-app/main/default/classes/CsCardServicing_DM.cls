public with sharing class CsCardServicing_DM {
    public CsCardServicing_DM() {

    }

    public List<CardPlastic> getCards(String argCustomerId){
        List<CardPlastic> toReturn = new List<CardPlastic>();
        
        CardPlastic card1 = new CardPlastic();
        card1.name='Card1';
        card1.id='12345';
        card1.address='1 Market Street, San Francisco, CA, 94111';
        toReturn.add(card1);

        CardPlastic card2 = new CardPlastic();
        card2.name='Card2';
        card2.id='67890';
        card2.address='555 Main Street, Sprinfiled, IL, 55555';
        toReturn.add(card2);

        return toReturn;
    }

    public void processReplacement(CsSession argSession){
        //call service and save.
    }
}
