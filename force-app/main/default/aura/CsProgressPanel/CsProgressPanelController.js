({
    CsNavigatePanelEvt : function(cmp, event, helper) {
        cmp.set("v.currentStep", event.getParams().target);
    },

    navigate : function(cmp, event, helper) {
        let target = event.getSource().getLocalId();
        var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
        CsNavigatePanelEvt.setParams({ "target" : target });
        CsNavigatePanelEvt.fire();
    }
})
