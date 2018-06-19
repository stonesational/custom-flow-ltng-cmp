({
    init : function(cmp, event, helper) {
        //do something
    },
    
    next : function(cmp, event, helper) {        
        let nextPanel = ""+event.getSource().getLocalId();

        var CsNavigatePanelEvt = cmp.getEvent("CsNavigatePanelEvt");
        CsNavigatePanelEvt.setParams({ "target" : nextPanel });
        CsNavigatePanelEvt.fire();
    },

    save : function(cmp, event, helper) {
        helper.save(cmp);
    },

    //TODO: Move bulk of this to helper
    updateCard : function(cmp, event, helper) {
        helper.updateCard(cmp, helper);
    }

    
})
