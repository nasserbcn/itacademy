// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i=0; i<products.length;i++) {
        if(id==products[i].id) {
           cartList.push(products[i]);
           
           break; 
        }
    }
    

}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = 0;

    let cart_list = document.getElementById("cart_list");

    let total_price = document.getElementById("total_price");
    total_price.textContent = total.toFixed(2);

    while (cart_list.firstChild) {
        cart_list.removeChild(cart_list.lastChild);
      }
}

// Exercise 3
function calculateTotal(cartToCalculate) {
    // Calculate total price of the cart using the "cartList" array
      
    total=0;

    /*
    for (let i=0; i<cartToCalculate.length;i++) {
        total+=cartToCalculate[i].price;
    }
    */
    for (let i=0; i <cartToCalculate.length;i++) {

        if (cartToCalculate[i].subtotalWithDiscount) {
          total += cartToCalculate[i].subtotalWithDiscount;
        } 
        else {
          total += cartToCalculate[i].subtotal;
        }
    }
   

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   
    //reset cart
    cart = [];
    //console.log("create cart:"+JSON.stringify(cart))

    for (let i=0; i<cartList.length;i++) {

        var found=false;
        
        for(let j=0; (j<cart.length); j++)
        {
         
         if(cart[j].id==cartList[i].id && !found) {
          found=true;
          cart[j].quantity=cart[j].quantity+1;
          //break;
         }
        }

        if(!found) {
            //console.log("push cart:"+JSON.stringify(cart))
            cartList[i].quantity=1;
            cart.push(cartList[i])
        }

       
    }

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for(let j=0; j<cart.length; j++) {

       if((cart[j].id==1 || cart[j].id==3) && cart[j].quantity>=cart[j].offer.number) {
          //cart[j].subtotal=(cart[j].quantity*cart[j].price);
          cart[j].subtotalWithDiscount=cart[j].quantity*(cart[j].price - ((cart[j].price * cart[j].offer.percent) / 100));
       }
       else {
         cart[j].subtotal=(cart[j].quantity*cart[j].price);
       }
        
     
    }

}
    
    

// Exercise 6
function printCart() {
    
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart();
    applyPromotionsCart();
    calculateTotal(cart);
    //console.log("printCart:"+JSON.stringify(cart))

    let cart_list = document.getElementById("cart_list");
    let total_price = document.getElementById("total_price");
  
    while (cart_list.firstChild) {
        cart_list.removeChild(cart_list.lastChild);
      }

    for (let i = 0; i < cart.length; i++) {
        
      let html_tr = document.createElement("tr");
      let html_th = document.createElement("th");
      let html_td_price = document.createElement("td");
      let html_td_quantity = document.createElement("td");
      let html_td_total = document.createElement("td");
  
      html_th.textContent = cart[i].name;
      html_td_price.textContent = cart[i].price;
      html_td_quantity.textContent = cart[i].quantity;
  
      //if el indice de cart posee la propiedad subtotalWithDiscount, toma ese valor para calcular el total,
      // si no la posee entonces toma subtotal.
  
      if(cart[i].hasOwnProperty("subtotalWithDiscount")) {
        html_td_total.textContent=cart[i].subtotalWithDiscount.toFixed(2);;
      }
      else {
        html_td_total.textContent=cart[i].subtotal.toFixed(2);
      }
  
        html_tr.appendChild(html_th);
        html_tr.appendChild(html_td_price);
        html_tr.appendChild(html_td_quantity);
        html_tr.appendChild(html_td_total);
      cart_list.appendChild(html_tr);
    }
    
    
    total_price.textContent = total.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	//console.log("Open Modal");
	printCart();
}