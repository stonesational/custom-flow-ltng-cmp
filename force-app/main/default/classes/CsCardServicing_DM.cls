public with sharing class CsCardServicing_DM {
    public CsCardServicing_DM() {

    }

    public List<CardPlastic> getCards(String argCustomerId){
        List<CardPlastic> toReturn = new List<CardPlastic>();
        CardPlastic card;
        
        card = new CardPlastic();
        card.name='Card1';
        card.id='12345';
        card.address='1 Market Street, San Francisco, CA, 94111';
        toReturn.add(card);

        card = new CardPlastic();
        card.name='Card2';
        card.id='67890';
        card.address='555 Main Street, Sprinfiled, IL, 55555';
        toReturn.add(card);

        card = new CardPlastic();
        card.name='Card3';
        card.id='87651';
        card.address='123 Evelyn Way, Chicago, IL, 44444';
        toReturn.add(card);


        return toReturn;
    }

    public void processReplacement(CsSession argSession){
        //call service and save.
    }
}
