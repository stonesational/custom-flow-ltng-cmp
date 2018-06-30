/*	Example controller used as a starter when creating a new Panel
 */
({
    
    next : function(cmp, event, helper) {        
       helper.next(cmp, event, helper); //See CsBasePanel helper
    },

    save : function(cmp, event, helper) {
        helper.save(cmp, event, helper); //See CsBasePanel helper
    },

    /*	Called when a card has been selected
    */
    updateCard : function(cmp, event, helper) {
        helper.updateCard(cmp, helper);
    },
    
})
