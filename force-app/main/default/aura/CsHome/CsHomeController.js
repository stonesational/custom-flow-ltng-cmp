({
    /*	Get the caseId from the QueryString
        Get a new session or an existing one if the Case already has a session attached
    */
    init : function(cmp, event, helper) {
        const caseId = cmp.get("v.pageReference.state.c__caseId");
        helper.getSession(cmp, helper, caseId);
    },

    /*	Load a new panel if the event was from a Panel. 
        Ignore if Progress panel fired as it's handled differently. Need session from the current panel before destroying it
    */
    CsNavigatePanelEvt : function(cmp, event, helper) {
        if( event.getParam("fromProgressPanel") == false ){
            cmp.set("v.session", event.getParam("session"));
            helper.loadPanel(cmp, event.getParam("target"));
        } 
    },

    /*	Save session to the server
    */
    CsSaveSessionEvt : function(cmp, event, helper){
        var session = event.getParam("session");
        cmp.set("v.session", session);
        helper.saveSession(cmp);
        event.stopPropagation();
    }
})
