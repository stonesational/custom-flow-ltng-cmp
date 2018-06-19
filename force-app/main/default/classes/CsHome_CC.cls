public with sharing class CsHome_CC {
    public CsHome_CC() {

    }

    @AuraEnabled
    public static CsSession getSession(String argCaseId) {
        //TODO - FUTURE: Check case for a persisted session attachment and populate
        CsSession session = new CsSession();
        session.caseId = argCaseId;
        session.currentCards = new CsCardServicing_DM().getCards('case.contact.id');
        session.replacementCards = new List<CsReplacementCard>();
        return session;
    }


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


     @AuraEnabled
    public static void processReplacement(String argSession){       
        CsSession session = (CsSession) JSON.deserialize(argSession, CsSession.class);       
        CsCardServicing_DM service = new CsCardServicing_DM();
        service.processReplacement(session);
    }

}
