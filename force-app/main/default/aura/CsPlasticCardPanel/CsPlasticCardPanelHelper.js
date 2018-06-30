/*	Example helper used as a starter when creating a new Panel
    Parent helper methods from CsHome are also available
 */
({
    /*	When a card is selected it's added to the v.replacementCards array
    Note: Don't update the session for cards directly. Cards are overwritten on session on save or navigate next
    */
    updateCard : function(cmp, helper) {
        var session = cmp.get("v.session");
        var currentCards = cmp.get("v.currentCards")
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
        cmp.set("v.replacementCards", replacementCards);
    }
})
