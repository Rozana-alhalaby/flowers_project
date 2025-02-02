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



