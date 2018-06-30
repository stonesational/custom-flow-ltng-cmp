/*------------------------------------------------------------
Custom Controller for CsHome
Components Using: CsHome
------------------------------------------------------------*/
public with sharing class CsHome_CC {
    public CsHome_CC() {

    }

    /*------------------------------------------------------------
	Provides the card servicing sessoin info to the CsHome component
    
	@param caseId for the case that represents this card servicing session
	@return CsSession: If an existing Card Servicing session exists as an Attachement 
            on Case then use that. Otherwise get a new one from CsCardServicing_DM
	------------------------------------------------------------*/
    @AuraEnabled
    public static CsSession getSession(String argCaseId) {
        //TODO - FUTURE: Check case for a persisted session attachment and populate
        CsSession session = new CsSession();
        session.caseId = argCaseId;
        session.currentCards = new CsCardServicing_DM().getCards('case.contact.id');
        session.replacementCards = new List<CsReplacementCard>();
        return session;
    }

    /*------------------------------------------------------------
	Saves the session as an Attachemnt on Case
    
	@param CsSession with all the information for the current card servicing request.
	@return Nothing
	------------------------------------------------------------*/
    @AuraEnabled
    public static void saveSession(String argSession){
        System.debug(argSession); //DEMO Purpose
        
        CsSession session = (CsSession) JSON.deserialize(argSession, CsSession.class);

        //Demo Purpose: Show successful deserialization
        for(CardPlastic c : session.currentCards ){
            System.debug('STONE: Outputting CurrentCards');
            System.debug(c.id);
            System.debug(c.name);
            System.debug(c.address);
        }
        
       //TODO: Serialize as attachment on Case Record
    }

    /*------------------------------------------------------------
	Validate and process by using CsCardServicing_DM
    TODO: Return messages with success message or errors
	@param CsSession with all the info needed to process the replacement
	@return Success/error messages
	------------------------------------------------------------*/
     @AuraEnabled
    public static void processReplacement(String argSession){       
        CsSession session = (CsSession) JSON.deserialize(argSession, CsSession.class);       
        CsCardServicing_DM service = new CsCardServicing_DM();
        service.processReplacement(session);
    }

}
