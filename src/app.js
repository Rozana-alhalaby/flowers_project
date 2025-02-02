import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import "./css/styles.css";
const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);

window.onload = function(){
document.getElementById("addRegistration").addEvenetListener("submit",
  (event) => {
    event.preventDefault()
    full_name = document.addRegistration.full_name.value
    email =  document.addRegistration.email.value
    message =  document.addRegistration.message.value

   })
}

