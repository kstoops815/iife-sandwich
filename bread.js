var Sandwich = (function(oldSandwich){
	const bread = {"honey oat": 1.75, "white": 1.50, "pumpernickel": 2.00, "wheat": 1.75, "none": 0.00};

	oldSandwich.getBread = function(){
		return bread;
	};

	oldSandwich.addBread = function(newBread){
		bread.push(newBread);
	};

return oldSandwich;
})(Sandwich || {});