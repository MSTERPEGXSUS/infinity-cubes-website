// ============================
// Infinity Cubes V3
// app.js
// ============================

let cart = [];

const cartCounter = document.getElementById("cartCount");

// Load saved cart
window.addEventListener("DOMContentLoaded", () => {

    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if(savedCart){

        cart = savedCart;

    }

    updateCartCounter();

    animateHero();

});

// --------------------------
// Cart
// --------------------------

function updateCartCounter(){

    if(cartCounter){

        cartCounter.textContent = cart.length;

    }

}

function addToCart(product){

    cart.push(product);

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCartCounter();

    showNotification("Added to cart!");

}

// --------------------------
// Notification
// --------------------------

function showNotification(message){

    const notification = document.createElement("div");

    notification.className = "notification";

    notification.innerHTML = message;

    document.body.appendChild(notification);

    setTimeout(()=>{

        notification.classList.add("show");

    },100);

    setTimeout(()=>{

        notification.classList.remove("show");

        setTimeout(()=>{

            notification.remove();

        },500);

    },2500);

}

// --------------------------
// Hero Animation
// --------------------------

function animateHero(){

    const hero = document.querySelector(".hero");

    hero.style.opacity="0";

    hero.style.transform="translateY(50px)";

    setTimeout(()=>{

        hero.style.transition="1s";

        hero.style.opacity="1";

        hero.style.transform="translateY(0px)";

    },200);

}

// --------------------------
// Button Events
// --------------------------

document.querySelector(".primary").addEventListener(

"click",

()=>{

showNotification(

"🛒 Shop coming soon..."

);

}

);

document.querySelector(".secondary").addEventListener(

"click",

()=>{

showNotification(

"🖨️ Custom Prints coming soon..."

);

}

);