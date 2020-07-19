// Question 3:
// Imagine you are going out to do some grocery shopping.So you have an array called shoppingList with all the products you want to buy.
// Now that you are inside of the shop, you have a basket with all the products from your list, but you want toadd a few more.Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add somenew products into it.

shoppingList = ["Tooth Paste", "Tooth Brush", " Soap", "Shampoo"];
shoppingList.push("Hair Oil");
console.log("shoppingList:", shoppingList);

shoppingBasket = [
  "Salt",
  "Sugar",
  "Poha ",
  ...shoppingList,
  "Tea Powder ",
  "Chilly ",
];
shoppingBasket.push(" Biscuit");

console.log("shoppingBasket:", shoppingBasket);