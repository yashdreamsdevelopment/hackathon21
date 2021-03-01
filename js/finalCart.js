console.log("hello console");

let cartIterate = document.querySelector(".cartIterate");
console.log(cartIterate);

let itemObj;
let cart = localStorage.getItem("cart");
if (cart == null) {
  itemObj = [];
} else if (cart == "[]") {
  cartIterate.innerHTML = "<h1 style=color:red; > No Item in Cart </h1>";
} else {
  itemObj = JSON.parse(cart);
  //   console.log(itemObj.length);
  let cartLength = document.querySelector(".cartLength");
  //   console.log(cartLength);
  let cartitem = itemObj.length;
  cartLength.innerHTML = cartitem;

  iterateItem();
}

function iterateItem() {
  //   console.log(itemObj);
  let html = "";
  itemObj.forEach((element, index) => {
    // console.log(element);

    let vegiImg = element.vegiImg;
    let vegiName = element.vegiName;
    let vegiDelPrice = element.vegiDelPrice;
    let vegiPrice = element.vegiPrice;

    html += `<div class="box m-2 shadow p-3 mb-5 bg-body rounded">
                    <div class="img">
                        <img src=${vegiImg} style="width: 200px;" alt="">
                    </div>
                    <div class="info">
                        <h1>${vegiName}</h1>
                        <h2 class="price">Price: ₹ ${vegiPrice} per/Kg <span class="fs-5"> <del>₹${vegiDelPrice}</del></span> </h2>

                        <h2>Total: ₹<span class="total"> ${vegiPrice}</span> </h2>

                        <button class="btn btn-primary fs-3" id="${index}" onclick="deleteitem(this.id)">
                          Delete
                        </button>
                    </div>
                </div>`;
    cartIterate.innerHTML = html;
  });
}

function deleteitem(index) {
  console.log(index);

  let itemObj;
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    itemObj = [];
  } else {
    itemObj = JSON.parse(cart);
    console.log(itemObj);
  }
  itemObj.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(itemObj));
  console.log(itemObj);
  iterateItem();
  window.location.reload();
}

function costing() {
  let itemObj;
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    itemObj = [];
  } else {
    itemObj = JSON.parse(cart);
  }
  let sum = 0;
  let save = 0;
  itemObj.forEach((element) => {
    sum += element.vegiPrice;
    save += element.vegiDelPrice;
  });

  let cost = document.getElementById("cost");
  cost.innerHTML = sum;
  let ship = parseInt(document.getElementById("ship").innerHTML);
  console.log(ship);
  let total = document.getElementById("total");
  console.log(total);
  total.innerHTML = sum + ship;
  let saving = document.getElementById("saving");
  saving.innerHTML = save - (sum + ship);
}
costing();
