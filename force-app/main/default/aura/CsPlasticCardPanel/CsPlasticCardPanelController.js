({
    init : function(cmp, event, helper) {
        //do something
    },
    
    next : function(cmp, event, helper) {        
        let nextPanel = event.getSource().getLocalId();

        var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
        CsNavigatePanelEvt.setParams({ "target" : nextPanel });
        CsNavigatePanelEvt.fire();
    },

    save : function(cmp, event, helper) {
        helper.save(cmp);
    },

    updateCard : function(cmp, event, helper) {
        helper.updateCard(cmp, helper);
    }

    
})
