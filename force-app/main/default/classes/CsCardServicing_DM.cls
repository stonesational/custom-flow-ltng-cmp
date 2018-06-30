/*------------------------------------------------------------
Data Manager for interacting with Card Servcing Microservices
------------------------------------------------------------*/
public with sharing class CsCardServicing_DM {
    public CsCardServicing_DM() {

    }

    /*------------------------------------------------------------
	Get cards owned by the customer
	@param argCustomerId: The unique ID of the customer. Likely ECN
	@return List<CardPlastic>: All plastic cards that can be replaced
	------------------------------------------------------------*/
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

    /*------------------------------------------------------------
	Process card replacement for card(s). Should be the final step of the Card Servicing flow
    TODO: Change return type to include messages for each card
	@param argSession: All cards that are to be replaced
	@return Messages for each card
	------------------------------------------------------------*/
    public void processReplacement(CsSession argSession){
        //call service and save.
    }
}
