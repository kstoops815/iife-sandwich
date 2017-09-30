var Sandwich = (function(oldSandwich){
	const cheese = {"american": 0.50, "swiss": 0.75, "provolone": 0.75, "cheddar": 0.50, "none": 0.00};

	oldSandwich.getCheese = function(){
		return cheese;
	};

	oldSandwich.addCheese = function(newCheese){
		cheese.push(newCheese);
	}

	return oldSandwich;
})(Sandwich || {});