var Sandwich = (function(oldSandwich){
	const meat = {"turkey": 5.00, "ham": 3.50, "roast beef": 4.50, "salami": 4.00, "none": 0.00};

	oldSandwich.getMeat = function(){
		return meat;
	};

	oldSandwich.addMeat = function(newMeat){
		meat.push(newMeat);
	}

	return oldSandwich;
})(Sandwich || {});