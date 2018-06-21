({
    next : function(cmp, event, helper) {        
        let nextPanel = event.getSource().getLocalId();

        var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
        CsNavigatePanelEvt.setParams({ "target" : nextPanel });
        CsNavigatePanelEvt.fire();
    }
})
