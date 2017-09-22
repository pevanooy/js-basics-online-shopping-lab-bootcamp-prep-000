var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1;
 var myItem = {[item]: price};
 cart.push(myItem);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
      console.log("Your shopping cart is empty.");
      return
  }
  else if (cart.length == 1){
    var myObj = cart[0];
    var retString =  `In your cart, you have ${Object.keys(myObj)[0]} at $${myObj[Object.keys(myObj)[0]]}.`
    console.log(retString)
  }
  else if (cart.length == 2){
    var retString = "In your cart, you have "
    for (var i=0; i < cart.length; i++){
        var myObj = cart[i];
        retString = retString + `${Object.keys(myObj)[0]} at \$${myObj[Object.keys(myObj)[0]]} and `
      }
      retString = retString.slice(0,-5) + "."
      console.log(retString)
    }
    else {
      var cartSize = cart.length
      var LastItemIndex = cartSize - 1
      var retString = "In your cart, you have "
      for (var i=0; i < LastItemIndex; i++){
          var myObj = cart[i];
          retString = retString + `${Object.keys(myObj)[0]} at \$${myObj[Object.keys(myObj)[0]]}, `
      }
      myObj = cart[LastItemIndex]
      retString = retString + `and ${Object.keys(myObj)[0]} at \$${myObj[Object.keys(myObj)[0]]}.`
      console.log(retString)
  }
}

function total() {
  var myTotal = 0;
  for (var i=0; i < cart.length; i++){
    var myObj = cart[i];
    myTotal += myObj[Object.keys(myObj)[0]]
  }
  return myTotal;
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)){
      var index = cart.findIndex(item);
      cart.splice(index, 1);
      return cart;
    } else {
      console.log("That item is not in your cart.");
      return cart;
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
