({
    CsNavigatePanelEvt : function(cmp, event, helper) {
        if( event.getParam("fromProgressPanel") == false ){
            cmp.set("v.currentStep", event.getParam("target"));
        }
    },

    navigate : function(cmp, event, helper) {
        let target = event.getSource().getLocalId();
        var CsNavigatePanelEvt = $A.get("e.c:CsNavigatePanelEvt");     
        CsNavigatePanelEvt.setParams({ 
            "target" : target, 
            "fromProgressPanel" : true 
        });
        CsNavigatePanelEvt.fire();
    }
})
