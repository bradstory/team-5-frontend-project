class product {
  constructor(name, category, description, price) {
    this.name = name;
    this.category = category;
    this.description = description;
    //   this.image = image;
    this.price = price;
  }
}

const cristmasTree = new product(
  "Christmas Tree",
  "Nice",
  "Decorate your house with this beautify traditional style Christmas Tree!",
  100
);
const mask = new product(
  "Christmas Mask",
  "Nice",
  "Protect yourself in style with this Christmas mask!",
  20
);
const stocking = new product(
  "Christmas Stocking",
  "Nice",
  "Decorate your chimney with yule tidings this year with this beautiful Christmas Stocking",
  25
);
const uglySweater = new product(
  "Ugly Sweater",
  "Naughty",
  "Be the life of the party this year with this one-of-a-kind uggo sweater",
  55
);
const ornament = new product(
  "Christmas Ornament",
  "Nice",
  "Put some Christmas cheer on your tree this year with this special ornament",
  15
);
const vinylRecord = new product(
  "Christmas Vinyl Record",
  "Nice",
  "As good or better than Michael Bublé",
  30
);
const socks = new product(
  "Socks",
  "Nice",
  "It's like a stocking but for your feet.",
  15
);
const lumpOfCoal = new product(
  "Lump Of Coal",
  "Naughty",
  "Someone's been naughty this year.",
  500
);
const coffeeMug = new product(
  "Coffee Mug",
  "Nice",
  "You'll need something stronger than coffee to get through the holiday's this year.",
  20
);
const whiteElephant = new product(
  "White Elephant",
  "Naughty",
  "As George Carlin would say - Could be meat, could be cake",
  1000
);

document.getElementById("christmasTree").getElementsByClassName("name")[0].innerHTML = cristmasTree.name;
document.getElementById("christmasTree").getElementsByClassName("category")[0].innerHTML = cristmasTree.category;
document.getElementById("christmasTree").getElementsByClassName("description")[0].innerHTML = cristmasTree.description;
document.getElementById("christmasTree").getElementsByClassName("price")[0].innerHTML = cristmasTree.price;

document.getElementById("mask").getElementsByClassName("name")[0].innerHTML = mask.name;
document.getElementById("mask").getElementsByClassName("category")[0].innerHTML = mask.category;
document.getElementById("mask").getElementsByClassName("description")[0].innerHTML = mask.description;
document.getElementById("mask").getElementsByClassName("price")[0].innerHTML = mask.price;

document.getElementById("stocking").getElementsByClassName("name")[0].innerHTML = stocking.name;
document.getElementById("stocking").getElementsByClassName("category")[0].innerHTML = stocking.category;
document.getElementById("stocking").getElementsByClassName("description")[0].innerHTML = stocking.description;
document.getElementById("stocking").getElementsByClassName("price")[0].innerHTML = stocking.price;

document.getElementById("uglySweater").getElementsByClassName("name")[0].innerHTML = uglySweater.name;
document.getElementById("uglySweater").getElementsByClassName("category")[0].innerHTML = uglySweater.category;
document.getElementById("uglySweater").getElementsByClassName("description")[0].innerHTML = uglySweater.description;
document.getElementById("uglySweater").getElementsByClassName("price")[0].innerHTML = uglySweater.price;

document.getElementById("ornament").getElementsByClassName("name")[0].innerHTML = ornament.name;
document.getElementById("ornament").getElementsByClassName("category")[0].innerHTML = ornament.category;
document.getElementById("ornament").getElementsByClassName("description")[0].innerHTML = ornament.description;
document.getElementById("ornament").getElementsByClassName("price")[0].innerHTML = ornament.price;

document.getElementById("vinylRecord").getElementsByClassName("name")[0].innerHTML = vinylRecord.name;
document.getElementById("vinylRecord").getElementsByClassName("category")[0].innerHTML = vinylRecord.category;
document.getElementById("vinylRecord").getElementsByClassName("description")[0].innerHTML = vinylRecord.description;
document.getElementById("vinylRecord").getElementsByClassName("price")[0].innerHTML = vinylRecord.price;

document.getElementById("socks").getElementsByClassName("name")[0].innerHTML = socks.name;
document.getElementById("socks").getElementsByClassName("category")[0].innerHTML = socks.category;
document.getElementById("socks").getElementsByClassName("description")[0].innerHTML = socks.description;
document.getElementById("socks").getElementsByClassName("price")[0].innerHTML = socks.price;

document.getElementById("lumpOfCoal").getElementsByClassName("name")[0].innerHTML = lumpOfCoal.name;
document.getElementById("lumpOfCoal").getElementsByClassName("category")[0].innerHTML = lumpOfCoal.category;
document.getElementById("lumpOfCoal").getElementsByClassName("description")[0].innerHTML = lumpOfCoal.description;
document.getElementById("lumpOfCoal").getElementsByClassName("price")[0].innerHTML = lumpOfCoal.price;

document.getElementById("coffeeMug").getElementsByClassName("name")[0].innerHTML = coffeeMug.name;
document.getElementById("coffeeMug").getElementsByClassName("category")[0].innerHTML = coffeeMug.category;
document.getElementById("coffeeMug").getElementsByClassName("description")[0].innerHTML = coffeeMug.description;
document.getElementById("coffeeMug").getElementsByClassName("price")[0].innerHTML = coffeeMug.price;

document.getElementById("whiteElephant").getElementsByClassName("name")[0].innerHTML = whiteElephant.name;
document.getElementById("whiteElephant").getElementsByClassName("category")[0].innerHTML = whiteElephant.category;
document.getElementById("whiteElephant").getElementsByClassName("description")[0].innerHTML = whiteElephant.description;
document.getElementById("whiteElephant").getElementsByClassName("price")[0].innerHTML = whiteElephant.price;

// Adding Items to the cart with a IIFE//

const cart = [];

(function addToCart() {
  const cartButton = document.querySelectorAll(".addToCart");

  cartButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
      console.log(event.target);
      if (event.target.parentElement.classList.contains("card")) {
        //console logs the card element containing all the item info
        console.log(event.target.parentElement); 

        const item = {};        

        //Img is the 2nd child element
        let itemPic = event.target.parentElement.children[1].src;
        // console.log(itemPic);

        //gives the index of the img tag in the src url that itemPic gives
        let imgSlice = itemPic.indexOf("img");
        // console.log(imgSlice);
        let slicedImagePath = itemPic.slice(imgSlice);
        // console.log(slicedImagePath);
        item.img = slicedImagePath;

        //Name is the first child element in the card container. Grabs the text and then assigns it
        let itemName = event.target.parentElement.children[0].textContent;
        // console.log(itemName)
        item.name = itemName;

        //get Category
        let itemCat = event.target.parentElement.children[2].textContent;
        // console.log(itemCat);
        item.category = itemCat;

        //get Description
        let itemDescr = event.target.parentElement.children[3].textContent;
        // console.log(itemDescr);
        item.description = itemDescr;

        //Price is the 4th child element in the card container. Grabs the text and then assigns it
        // let itemPrice = event.target.parentElement.children[4].textContent;
        
        // items.price = itemPrice;

        let priceTxt = event.target.parentElement.children[4].textContent;
        let priceNumber = parseInt(priceTxt, 10);
        item.price = priceNumber;

        const cartItem = document.createElement('div');
        cartItem.classList.add("product");
        cartItem.innerHTML = `
                <div class="product-image">
              <img src="${item.img}" height="auto" width="250px">
            </div>
            <div class="product-details">
              <div class="product-title">${item.name}</div>
              <div class="product-category">${item.category}</div>
              <p class="product-description">${item.description}</p>
            </div>
            <div class="product-price">$ ${item.price}</div>
          </div>`;
        
        function subTotal(a){
          var subTotal = 0;
          for(var i=0;i<a.length;i++)
          subTotal += a[i].price;  
          
          document.getElementById("cart-subtotal").innerHTML = subTotal;
          tax = subTotal * 0.05;
          document.getElementById("cart-tax").innerHTML = tax;
          document.getElementById("cart-total").innerHTML = tax + subTotal;
        }
        
        cart.push(item);
        subTotal(cart);
        
        if (cart.length > 0) {
          const payCard = document.getElementById("payCard");

          payCard.classList.add("show");
          payCard.classList.remove("hide");
          //adding show/hide pay with cash button
          const showPayWithCash = document.getElementById('pay-options')
          showPayWithCash.classList.add('showMe');
          showPayWithCash.classList.remove('hide');
          // adding Subtotal, Tax, Final amount to show/hide with cart
          const totals = document.getElementById('totals');
          totals.classList.add('showMe')
        }

        const displayProducts = document.getElementById('displayProducts');
        const innerProdChild = document.getElementById('prodPlace');
        //creating and appending the element
        displayProducts.append(cartItem);
      }
    });
  });
})();

const receipt = [];

(function addToReceipt() {
  const cartButton = document.querySelectorAll(".addToCart");

  cartButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // console.log(event.target);
      if (event.target.parentElement.classList.contains("card")) {
        //console logs the card element containing all the item info
        // console.log(event.target.parentElement); 

        const item = {};        

        //Img is the 2nd child element
        let itemPic = event.target.parentElement.children[1].src;
        // console.log(itemPic);

        //gives the index of the img tag in the src url that itemPic gives
        let imgSlice = itemPic.indexOf("img");
        // console.log(imgSlice);
        let slicedImagePath = itemPic.slice(imgSlice);
        // console.log(slicedImagePath);
        item.img = slicedImagePath;

        //Name is the first child element in the card container. Grabs the text and then assigns it
        let itemName = event.target.parentElement.children[0].textContent;
        // console.log(itemName)
        item.name = itemName;

        //get Category
        let itemCat = event.target.parentElement.children[2].textContent;
        // console.log(itemDescr);
        item.category = itemCat;

        //get Description
        let itemDescr = event.target.parentElement.children[3].textContent;
        // console.log(itemDescr);
        item.description = itemDescr;

        //Price is the 4th child element in the card container. Grabs the text and then assigns it
        // let itemPrice = event.target.parentElement.children[4].textContent;
        
        // items.price = itemPrice;

        let priceTxt = event.target.parentElement.children[4].textContent;
        let priceNumber = parseInt(priceTxt, 10);
        item.price = priceNumber;

        const cartItem = document.createElement('div');
        cartItem.classList.add("product");
        cartItem.innerHTML = `
                <div class="product-image">
              <img src="${item.img}" height="auto" width="250px">
            </div>
            <div class="product-details">
              <div class="product-title">${item.name}</div>
              <div class="product-category">${item.category}</div>
              <p class="product-description">${item.description}</p>
            </div>
            <div class="product-price">$ ${item.price}</div>
          </div>`;
        //defining the shopping cart
        const ReceiptCart = document.getElementById('r-displayProducts');
        //creating and appending the element
        ReceiptCart.append(cartItem);
        receipt.push(item);

        
        function reciptTotal(a){
          var amountPaid = document.getElementById('amount-paying').value
          var subTotal = 0;
          for(var i=0;i<a.length;i++)
          subTotal += a[i].price;
          
          document.getElementById("r-cart-subtotal").innerHTML = subTotal;
          tax = subTotal * 0.05;
          document.getElementById("r-cart-tax").innerHTML = tax;
          document.getElementById("r-cart-total").innerHTML = tax + subTotal;
          
        }
        reciptTotal(receipt);

        const receiptCart2 = document.getElementById('receipt');
        const receiptDiv = document.getElementById('r-displayProducts');
        //creating and appending the element
        receiptCart2.insertBefore(cartItem,receiptDiv);
      }
    });
  });
})();


function showPayments(e) {
  const creditOpt = document.querySelector(".creditOpt");
  creditOpt.classList.toggle("show");
}

// reveal the shopping cart when button is clicked
  function checkoutToggle(e) {
  const showCart = document.getElementById("cart");
  showCart.style.display = "block";
}

// const taxRate = .06;
// const subtotal = document.getElementById('subtotalAmount').textContent;

function showPayCash() {
  
  const cashBlock = document.getElementById('cash-transaction')
  cashBlock.classList.toggle('showMe')
  //Populates Subtotal
  var getSub = document.getElementById('pay-subtotal');
  var putSub = document.getElementById("cart-subtotal").innerHTML
  getSub.innerHTML = '$ ' + putSub;
  //Populates the Tax
  var getTax = document.getElementById('pay-tax')
  var putTax = document.getElementById("cart-tax").innerHTML
  getTax.innerHTML = '$ ' + putTax;
  //Populates the grand Total
  var getGrand = document.getElementById('pay-total')
  var putGrand = document.getElementById("cart-total").innerHTML
  getGrand.innerHTML = '$ ' + putGrand;
}

function getChange() {
  //Grabs the innerHTML of Final total then parses it as an integer
  const finalAmount = document.getElementById('cart-total').innerHTML
  // console.log(finalAmount)
  const amountPaying = parseInt(document.getElementById('amount-paying').value)///////////////
  // console.log(amountPaying)
  var changeDue = parseInt(document.getElementById('getMeSomeChange').innerHTML)
  if(amountPaying < finalAmount) {
    alert('Nice try! No short Changing us!')
  } else if(amountPaying > finalAmount) {
    changeDue = amountPaying - finalAmount;
    console.log(changeDue)
    
    document.getElementById('changeDue').innerHTML = new Intl.NumberFormat("en-HOSSDDG",{
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
   }).format(changeDue)
   //Pushes values to receipt
   document.getElementById('r-cart-amount-paid').innerHTML = amountPaying;
   document.getElementById('r-cart-change').innerHTML = document.getElementById('changeDue').innerHTML
  } 
}

function checkoutToggle() {
  const newIndow = document.getElementById("cart");
  newIndow.classList.toggle("show");
}

function toggleReceipt() {
  const reciptBox = document.getElementById("receipt");

  reciptBox.classList.toggle("show");
}
