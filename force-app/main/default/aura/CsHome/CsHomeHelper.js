({
    
    loadPanel : function(cmp, panel, params) {
        $A.createComponent('c:'+panel,
            { session: cmp.get("v.session") },
            function(newPanel) {
                if (cmp.isValid()) {
                    cmp.set("v.body", [ newPanel ] );
                }
        });
    },
    
    getSession : function(cmp, helper, caseId){
        var action = cmp.get("c.getSession");
        action.setParams({ argCaseId :caseId });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.session", response.getReturnValue());
                helper.loadPanel(cmp, 'CsPlasticCardPanel');
            }
            else if (state === "INCOMPLETE") console.log('Incomplete');
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) console.log("Error message: " + errors[0].message);
                } else console.log("Unknown error");
            }
        });
        $A.enqueueAction(action);       
    },

    saveSession : function(cmp){
        var action = cmp.get("c.saveSession");
        action.setParams( { 
            argSession : JSON.stringify(cmp.get("v.session")) 
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('STONE: saved!!');
            }
            else if (state === "INCOMPLETE") console.log('Incomplete');
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) console.log("Error message: " + errors[0].message);
                } else console.log("Unknown error");
            }
        });
        $A.enqueueAction(action);    
    },

    processReplacement : function(cmp){
        var action = cmp.get("c.processReplacement");
        action.setParams( { 
            argSession : JSON.stringify(cmp.get("v.session")) 
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('STONE: saved!!');
            }
            else if (state === "INCOMPLETE") console.log('Incomplete');
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) console.log("Error message: " + errors[0].message);
                } else console.log("Unknown error");
            }
        });
        $A.enqueueAction(action);    
    }
})
