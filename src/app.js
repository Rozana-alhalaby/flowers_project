import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import "./css/styles.css";

const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        var currentPage = window.location.pathname.replace(/^\/|\/$/g, '');
        
        var linkHref = link.getAttribute('href').replace(/^\/|\/$/g, '');
        if (linkHref === currentPage) {
            event.preventDefault(); 
        }
    });
});
// Array to store cart items (you can use IDs or full item objects for more complex use cases)
let cart = [];

// Function to handle the "Add to Cart" button click
function addToCart(itemId) {
  // Check if the item is already in the cart (simple check)
  if (!cart.includes(itemId)) {
    cart.push(itemId); // Add item to the cart
    updateCartCount(); // Update the cart count
  }
  
  // Optionally, you can redirect to the cart page after adding the item
  window.location.href = "cart.html"; // Replace with your actual cart page URL
}

// Function to update the cart count on the page
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length; // Display the current number of items in the cart
}

// Attach event listener to the "Add to Cart" button
document.querySelector("#add-to-cart-form button").addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  addToCart("Wireless Headphones"); // Add item to cart with a unique identifier
});


