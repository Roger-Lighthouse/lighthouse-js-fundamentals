var ingredients=["eggs", "milk", "flour", "sugar", "baking soda", "chocolate chips", "bananas"];

// while loop

var x=0;
while(x<ingredients.length){
	console.log(ingredients[x]);
	x++;
}


for (var i=0; i<ingredients.length; i++) {
	console.log(ingredients[i]);
}

for (var i=ingredients.length - 1; i>-1; i--) {
	console.log(ingredients[i]);
}