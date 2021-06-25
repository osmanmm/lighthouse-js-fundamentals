// Write a for loop that prints out the contents of ingredients:
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for ( let i = 0; i <= ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write a while loop that prints out the contents of ingredients:
let x = 0;
while (x <= ingredients.length){
  console.log(ingredients[x]);
  x++
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let y = ingredients.length; y >= 0; y--) {
  console.log(ingredients[y]);
}