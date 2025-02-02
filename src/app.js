document.addEventListener("DOMContentLoaded", function () {
  initCart(); 
  initForm(); 
});

function initCart() {
  
  let addToCartButtons = document.querySelectorAll(".add-to-cart");
  
  addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
  });
  updateCartCounter(); 
  displayCartItems(); 

}

function addToCart(event) {
  let button = event.currentTarget; // event.currentTarget gives us the button that was clicked so for that we put event in the function
  // You want to find the .group element (which is the parent of the button) that contains the button.
  let productElement = button.closest(".group");
  let productName = productElement.querySelector("h3").innerText;
  let productPrice = productElement.querySelector("p").innerText;
  let productImage = productElement.querySelector("img").src;

  let product = { name: productName, price: productPrice, image: productImage };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // ⬆ Get cart from localStorage (if it exists), otherwise, initialize an empty array.
  cart.push(product);
   // ⬆ Adds the new product object to the end of the cart array.
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("✅ Item added to cart!"); 

  updateCartCounter();
}

// ✅ Update cart counter
function updateCartCounter() {
  // cause in local storage it only stores strings so we wnat to retries it as object we put json.parse
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartCounter = document.getElementById("cart-counter");

  if (cartCounter) {
      cartCounter.innerText = cart.length;
      cartCounter.style.display = cart.length > 0 ? "inline-block" : "none";
  }
}

function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart-items");


  if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
  }
  // Clearing the cart container (innerHTML = "") is essential for ensuring that the page reflects only the current items in the cart.
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
      let itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
          <img class='mt-10'src="${item.image}" width="100">
          <p>${item.name} - ${item.price}</p>
          <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
  });

  document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", function () {
          removeItemFromCart(this.getAttribute("data-index"));
      });
  });
}

// ✅ Remove an item from the cart
function removeItemFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);//it removes one item from the array at specified index
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
  updateCartCounter(); 
}



function initForm() {
  let form = document.getElementById("addRegistration");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      let fullName = document.getElementById("full_name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      let formData = { fullName, email, message };
      localStorage.setItem("registrationData", JSON.stringify(formData));

      alert("✅ Your data has been saved!");
  });
}
