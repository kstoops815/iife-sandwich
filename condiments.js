var Sandwich = (function(oldSandwich){
	const condiments = {"ketchup": 0.25, "honey mustard": 0.25, "mayonnaise": 0.25, "mustard": 0.25, "none": 0.00};

	oldSandwich.getCondiments = function(){
		return condiments;
	};

	oldSandwich.addBread = function(newCondiments){
		condiments.push(newCondiments);
	}

	return oldSandwich;
})(Sandwich || {});