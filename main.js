console.log("in main js");

let myBread = Sandwich.getBread();
console.log("myBread", myBread);

let myCheese = Sandwich.getCheese();
console.log("myCheese", myCheese);

let myMeat = Sandwich.getMeat();
console.log("myMeat", myMeat);

let myVeggies = Sandwich.getVeggies();
console.log("myVeggies", myVeggies);

let myCondiments = Sandwich.getCondiments();
console.log("myCondiments", myCondiments);

let breadName = Object.keys(myBread);
console.log("breadName", breadName);

//i need to declare a var message as an h3 tag



const buildDomString = (message, selections, category) => {
	let name = Object.keys(selections);
	console.log("in builddomstring", name);
	let price = Object.values(selections);
	console.log(price);
	let finalString = "";

	var chooseItem = `<h3>${message}</3<br><br>`;

 	for(var i = 0; i < name.length; i++){
		let domString = "";
		domString +=	`<input type="checkbox" class="checkbox" class="${category}" name="${name[i]}" value="${price[i].toFixed(2)}">${name[i]}<br>`;
		finalString += domString;
	}
	writeToDom(chooseItem + finalString);
}

const writeToDom = (items) => {
	document.getElementById("menuItems").innerHTML += items;
}

buildDomString("Choose your bread:", myBread, "bread");
buildDomString("Choose your cheese:", myCheese, "cheese");
buildDomString("Choose your meat:", myMeat, "meat");
buildDomString("Choose your veggies:", myVeggies, "veggies");
buildDomString("Choose your condiments:", myCondiments, "condiments");

let checkbox = document.getElementsByClassName("checkbox");
//console.log("checkbox", checkbox);

for(let j = 0; j < checkbox.length; j++){
	checkbox[j].addEventListener("click", function(e){
		//console.log("for loop event", event);
		buildSandwich(e);
	});
}

finalChoicesArray = [];
const buildSandwich = (e) => {
	let choices = document.getElementsByTagName("input");
	let finalChoices = "";
	let finalChoicesString = "";
	let finalPriceArray = 0;
	let breadChoices = document.getElementsByClassName("bread");
	for(let i =0 ; i < choices.length; i++){
		if(choices[i].type === "checkbox" && choices[i].checked){
			finalChoices += `<div>`;
			finalChoices += 	`<div>${choices[i].name} ${choices[i].value} </div>`;
			finalChoices += `</div>`;

			finalChoicesString = finalChoices;
	}
	finalChoicesArray.push(finalChoicesString);
	//console.log("final choices array", finalChoicesArray);
	document.getElementById("finalSelections").innerHTML = finalChoices;

	finalPriceArray += parseFloat(choices[i].value);
	}

	document.getElementById("finalSelections").innerHTML += `<h3>Total Price = ${finalPriceArray}</h3>`;
};


