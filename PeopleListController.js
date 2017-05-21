({
    doInit : function(component, event) {
        var searchtype = component.get("v.searchtype");
        console.log(searchtype);
        var action = component.get("c.getUsers");
        action.setCallback(this, function(a) {
            component.set("v.users", a.getReturnValue());
            //component.set("v.members", a.getReturnValue());
        });
        $A.enqueueAction(action);
        
        var action2 = component.get("c.getURLPrefix");
        action2.setCallback(this, function(b) {
            component.set("v.urlprefix", b.getReturnValue());
        });
        $A.enqueueAction(action2);
    },
    
    searchKeyChange: function(component, event) {
        var searchtype = component.get("v.searchtype");
        console.log(searchtype);
        var searchKey = event.getParam("searchKey");
        var action = component.get("c.searchProfile");
        if (searchtype=="Name"){
            console.log("findbyName");
        	action = component.get("c.findbyName");
    	}
     
        action.setParams({
          "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.users", a.getReturnValue());
            //component.set("v.members", a.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})
