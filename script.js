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


console.log(cristmasTree);

document.getElementById("products").getElementsByClassName("name")[0].innerHTML = cristmasTree.name;
document.getElementById("products").getElementsByClassName("category")[0].innerHTML = cristmasTree.category;
document.getElementById("products").getElementsByClassName("description")[0].innerHTML = cristmasTree.description;
document.getElementById("products").getElementsByClassName("price")[0].innerHTML = cristmasTree.price;

document.getElementById("mask").getElementsByClassName("name")[0].innerHTML = mask.name;

