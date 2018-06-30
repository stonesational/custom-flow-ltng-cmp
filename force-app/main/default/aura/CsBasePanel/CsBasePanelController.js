({
    /*	Splits any List variabiables from Session into seperate attributes for use in iterations 
     *  aura:iteration needs a list to be typed
	 */
    doInit : function(cmp, event, helper) {
        cmp.set("v.currentCards", cmp.get("v.session").currentCards);
        cmp.set("v.replacementCards", cmp.get("v.session").replacementCards);
    },

    /*	Recieves events fromProgressPanel. Adds the session to the event before re-firing to be handled in CsHome
	 */
    CsNavigatePanelEvt : function(cmp, event, helper) {
        var nextPanel = event.getParam("target");
        var session = helper.reassembleSession(cmp);
        
        if( event.getParam("fromProgressPanel") == true ){
            var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
            CsNavigatePanelEvt.setParams({
                 "target" : nextPanel, 
                 "session" : session, 
                 "fromProgressPanel" : false
            }); 
            CsNavigatePanelEvt.fire();
        }
    }
})
