console.log("hello console");

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  // console.log(navbar);
  navbar.classList.toggle("mystyle", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let top = document.getElementsByClassName("go-top")[0];

  top.classList.toggle("topshow", window.scrollY > 0);
});

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
