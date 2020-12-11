class product {
  constructor(name, category, description, price) {
    this.name = name;
    this.category = category;
    this.description = description;
  //   this.image = image;
    this.price = price;
  }
}

const cristmasTree = new product("Christmas Tree", "Traditional", "Decorate your house with this beautify traditional style Christmas Tree!", 100);
const mask = new product("Christmas Mask", "Traditional", "Protect yourself in style with this Christmas mask!", 20);
const stocking = new product("Christmas Stocking", "Traditional", "Decorate your chimney with yule tidings this year with this beautiful Christmas Stocking", 25);
const uglySweater = new product("Ugly Sweater", "Traditional", "Be the life of the party this year with this one-of-a-kind uggo sweater", 55);
const ornament = new product("Christmas Ornament", "Traditional", "Put some Christmas cheer on your tree this year with this special ornament", 15);
const vinylRecord = new product("Christmas Vinyl Record", "Traditional", "As good or better than Michael Bublé", 30);
const socks = new product("Socks", "Traditional", "It's like a stocking but for your feet.", 15);
const lumpOfCoal = new product("Lump Of Coal", "Traditional", "Someone's been naughty this year.", 500);
const coffeeMug = new product("Coffee Mug", "Traditional", "You'll need something stronger than coffe to get through the holiday's this year.", 20);
const whiteElephant = new product("White Elephant", "Traditional", "As George Carlin would say - Could be meat, could be cake", 1000);

document.getElementById("products").getElementsByClassName("name")[0].innerHTML = cristmasTree.name;
document.getElementById("products").getElementsByClassName("category")[0].innerHTML = cristmasTree.category;
document.getElementById("products").getElementsByClassName("description")[0].innerHTML = cristmasTree.description;
document.getElementById("products").getElementsByClassName("price")[0].innerHTML = cristmasTree.price;

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
