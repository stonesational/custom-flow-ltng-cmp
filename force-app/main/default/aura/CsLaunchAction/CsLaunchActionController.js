({
    init : function(cmp, event, helper) {
        cmp.find("navigationService").navigate({
            type: "standard__component",
            attributes: {
                componentName: "c__CsHome" },
            state: {
                "caseId": cmp.get("v.caseId")
            } 
        }, true); // replace = true 
    }
})
