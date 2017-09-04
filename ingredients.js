var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i = 0;
while(i < ingredients.length){
    if (i === 0){
      console.log("\nMy 'While' list of " + ingredients.length + " ingredients");
    }
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for(var i = 0; i < ingredients.length; i++){
    if (i === 0){
      console.log("\nMy 'For' list of " + ingredients.length + " ingredients");
    }
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(var i = ingredients.length-1; i >= 0; i--){
    if (i === ingredients.length-1){
      console.log("\nMy 'Backwards For' list of " + ingredients.length + " ingredients");
    }
  console.log(ingredients[i]);
}