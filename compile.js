// mobile menu button
let menu_btn = document.getElementById('menu_btn');
let mobile_menu = document.getElementById('nav__menu');
let openMenu = document.getElementById('menuIcon-hamburger');
let closeMenu = document.getElementById('menuIcon-cancel');

menu_btn.addEventListener('click', function(){
    mobile_menu.classList.toggle("is-active");
    openMenu.classList.toggle("is-active");
    closeMenu.classList.toggle("is-active");
});

// mobile menu products & nutrition dropdown button
let products_btn = document.getElementById('products-button');
let products = document.getElementById('products-content');
let chevron1 = document.getElementById('chevron1');

let nutrition_btn = document.getElementById('nutrition-button');
let nutrition_items = document.getElementById('nutrition-items');
let chevron2 = document.getElementById('chevron2');
const mediaQuery = window.matchMedia('(max-width: 1040px)');

if (mediaQuery.matches) {
    products_btn.addEventListener('click', function(){
        products.classList.toggle("button-active");
        products_btn.classList.toggle("button-active");
        chevron1.classList.toggle("button-active");
});

    nutrition_btn.addEventListener('click', function(){
        nutrition_items.classList.toggle("button-active");
        nutrition_btn.classList.toggle("button-active");
        chevron2.classList.toggle("button-active");
});
};

// flag button pop-up page
let desktop_flag = document.getElementById('desktop-flagIcon');
let mobile_flag = document.getElementById('mobile-flagIcon');
let stores = document.getElementById('stores-location');
let cancel = document.getElementById('cancel-icon');

desktop_flag.addEventListener('click', function(){
    stores.classList.toggle("button-active");
});

mobile_flag.addEventListener('click', function(){
    stores.classList.toggle("button-active");
});

cancel.addEventListener('click', function(){
    stores.classList.toggle("button-active");
});

// desktop menu search_bar dropdown button
let search_btn = document.getElementById('search-btn1');
let search_wrapper = document.getElementById('search-wrapper');
let backdrop = document.getElementById('backdrop');

search_btn.addEventListener('click', function(){
    search_wrapper.classList.toggle("search-active");
    backdrop.classList.toggle("search-active");
});


// mobile menu search_bar slideup button
let mobileSearch_btn = document.getElementById('mobile-searchBtn');
let mobileSearch = document.getElementById('mobile-search');

mobileSearch_btn.addEventListener('click', function(){
    mobileSearch.classList.toggle("mobileSearch-active");
});

