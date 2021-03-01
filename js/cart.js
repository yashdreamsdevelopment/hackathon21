console.log("hello world");
(function autoRun() {
  let cartItem = document.getElementById("cartItem");
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    itemObj = [];
  } else {
    itemObj = JSON.parse(cart);
  }

  let cartLength = itemObj.length;
  cartItem.innerHTML = cartLength;
})();

let cartButton = document.querySelectorAll(".cart");
// console.log(Array.from(cartButton));

cartButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    target = e.target;
    var vegiImg = target.parentNode.parentNode.children[0].src;
    console.log(vegiImg);
    let vegiName = target.parentNode.children[0].innerText;
    console.log(vegiName);
    let vegiPrice = parseInt(
      target.parentNode.children[1].innerText.slice(2, 4)
    );
    console.log(vegiPrice);
    let vegiDelPrice = parseInt(
      target.parentNode.children[2].innerText.slice(1, 3)
    );
    console.log(vegiDelPrice);
    class Cart {
      constructor(vegiImg, vegiName, vegiPrice, vegiDelPrice) {
        this.vegiImg = vegiImg;
        this.vegiName = vegiName;
        this.vegiPrice = vegiPrice;
        this.vegiDelPrice = vegiDelPrice;
      }
    }

    let item = new Cart(vegiImg, vegiName, vegiPrice, vegiDelPrice);
    console.log(item);

    insertToLocalStorage(item);
  });
});

function insertToLocalStorage(item) {
  let itemObj;

  let cart = localStorage.getItem("cart");
  if (cart == null) {
    itemObj = [];
  } else {
    itemObj = JSON.parse(cart);
  }
  itemObj.push(item);
  localStorage.setItem("cart", JSON.stringify(itemObj));

  showMessage("success", "Item successfully added to cart");
}

function showMessage(alert, msg) {
  let message = document.querySelector("#message");

  message.innerHTML = `<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                            <strong class="fs-3">Success!</strong> <span class="fs-3"> ${msg} </span>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
}
