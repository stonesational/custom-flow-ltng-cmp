({
    init : function(cmp, event, helper) {
        helper.getSession(cmp, helper, cmp.get("v.pageReference.state.c__caseId"));
    },

    CSNavigatePanelEvt : function(cmp, event, helper) {
        console.log('STONE: event::: ' + event);
        helper.loadPanel(cmp, event.getParams().target);
    },

    CsSaveSessionEvt : function(cmp, event, helper){
        let session = event.getParam("session");
        cmp.set("v.session", session);
        helper.saveSession(cmp);
        event.stopPropagation();
    }
})
