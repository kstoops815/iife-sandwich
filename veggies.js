var Sandwich = (function(oldSandwich){
	const veggies = {"spinach": 1.50, "pickles": 1.00, "tomatoes": 1.25, "onions": 1.00, "none": 0.00};

	oldSandwich.getVeggies = function(){
		return veggies;
	};

	oldSandwich.addVeggies = function(newVeggies){
		veggies.push(newVeggies);
	}

	return oldSandwich;
})(Sandwich || {});