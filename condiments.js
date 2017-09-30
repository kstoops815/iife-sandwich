var Sandwich = (function(oldSandwich){
	const condiments = {"ketchup": 0.25, "honey mustard": 0.25, "mayonnaise": 0.25, "mustard": 0.25, "none": 0.00};

	oldSandwich.getCondiments = function(){
		return condiments;
	};

	oldSandwich.addCondiments = function(newCondiments){
		condiments.push(newCondiments);
	};

	// oldSandwich.writeBread = function(){
	// 	let domString = "";
	// 	for(var i = 0; i < Object.keys(condiments).length; i++){
	// 		domString += `<input type="checkbox" class="checkbox" name="${Object.keys(condiments)[i]}" value="${breads[Object.keys(condiments)[i]]">${Object.keys(condiments)[i]}`;
	// 	}
	// 	writeToDom(domString);
	// }

	// function writeToDom(string){
	// 	document.getElementById("bread-options").innerHTML = string;
	// }

	return oldSandwich;
})(Sandwich || {});