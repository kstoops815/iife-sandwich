console.log("in main js");

let myBread = Sandwich.getBread();
console.log("myBread", myBread);

let myCheese = Sandwich.getCheese();
console.log("myCheese", myCheese);

// let myCondiments = Sandwich.getCondiments();
// console.log("myCondiments", myCondiments);

// let myMeat = Sandwich.getMeat();
// console.log("myMeat", myMeat);

// let myVeggies = Sandwich.getVeggies();
// console.log("myVeggies", myVeggies);

// let breadName = Object.keys(myBread);
// console.log("breadName", breadName);


const buildDomString = (selections) => {
	let name = Object.keys(selections);
	console.log(name);
	let price = Object.values(selections);
	console.log(price);
	let finalString = "";
 	for(var i = 0; i < name.length; i++){
		let domString = "";
		domString +=	`<input type="checkbox" name="${name[i]}" value="${price[i]}">${name[i]}<br>`;
		finalString += domString;
	}
	writeToDom(finalString);
}

const writeToDom = (items) => {
	document.getElementById("menuItems").innerHTML += items;
}

buildDomString(myBread);
buildDomString(myCheese);
