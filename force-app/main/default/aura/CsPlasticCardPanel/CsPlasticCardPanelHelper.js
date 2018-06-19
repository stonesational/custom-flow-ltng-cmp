({
    save : function(cmp) {
        var CsSaveSessionEvt = cmp.getEvent("CsSaveSessionEvt");
        CsSaveSessionEvt.setParams({ "session" : cmp.get("v.session") });
        CsSaveSessionEvt.fire();
    },

    updateCard : function(cmp, helper) {
        var session = cmp.get("v.session");
        var currentCards = session.currentCards;
        var replacementCards = [];
        
        var searchResults = cmp.find("dynamicResult");
        var radioButtons = [];
        if (searchResults.constructor === Array) {
            radioButtons = searchResults;
        } else {
            radioButtons = [searchResults];
        }
 
        for(var i = 0; i < radioButtons.length; i++) {
            var isSelected = radioButtons[i].get("v.checked");
            var fieldName = radioButtons[i].get("v.name");
            for(var j = 0; j < currentCards.length; j++) {
                if(fieldName === currentCards[j].id && isSelected) {
                    replacementCards.push( {
                        'id' : fieldName, 
                        'name' : currentCards[j].name, 
                        'address' : currentCards[j].address 
                    });
                }
            }
        }
        session.replacementCards = replacementCards;
        cmp.set("v.session", session);
        helper.save(cmp);
    }
})
