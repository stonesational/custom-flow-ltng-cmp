({
    /*	Navigate to the component and pass the caseId as a querystring parameter
    */
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
