({
    /*	Child panels can use this to have CsHome explicitly store session on the server
        CsHome should save session on each panel navigation but this can be used in addition whenever it's appropriate within a Panel
	 */
    save : function(cmp, event, helper) {
        var CsSaveSessionEvt = cmp.getEvent("CsSaveSessionEvt");
        CsSaveSessionEvt.setParams({ "session" : helper.reassembleSession(cmp) });
        CsSaveSessionEvt.fire();
    },

    /*	Navigate to the next panel. Pulls Panel name from the lightning:button's aura:id attribute.
	 */
    next : function(cmp, event, helper) {        
        var nextPanel = event.getSource().getLocalId();
        var session = helper.reassembleSession(cmp);

        var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
        CsNavigatePanelEvt.setParams({
             "target" : nextPanel, 
             "session" : session, 
             "fromProgressPanel" : false
        }); 
        CsNavigatePanelEvt.fire();
    },

    /*	aura:iteration requires a typed list (unfortunately). Before any save or navigate the individual attributes are 
        reassembed into the session object before being sent to the server
	 */
    reassembleSession : function(cmp){
        var session = cmp.get("v.session");
        session.currentCards = cmp.get("v.currentCards");
        session.replacementCards = cmp.get("v.replacementCards");
        return session;
    }
    
})
