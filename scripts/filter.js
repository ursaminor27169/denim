var filterContainer = document.querySelector('.filter-container');
var filterTick = document.querySelector('.filter__tick');
var filterName = document.querySelector('.filter__name');
var close = document.querySelector('.filter-nav__unit_close');
var priceCont = document.querySelector('.filter-characteristics-price-cont');
var priceInside = document.querySelector('.price-inside');
var rangeFrom = document.querySelector('.filter-characteristics-price__range_from');
var rangeTo = document.querySelector('.filter-characteristics-price__range_to');
var pNumberFrom = document.querySelector('.filter-characteristics-price__price_number-from');
var pNumberTo = document.querySelector('.filter-characteristics-price__price_number-to');
var dataNumberFrom = 0;
var dataNumberTo = 200;
var prices = document.querySelectorAll('.assortments-unit__price_number');
var assortments = document.querySelectorAll('.assortments-unit');
var assortmentsAll = document.querySelector('.assortments');
var apply = document.querySelector('.filter__button');
var clearAll = document.querySelector('.filter__button-more768px');
var clearAllMin = document.querySelector('.filter-nav__unit_clear-all');
var noProducts = document.querySelector('.no-products');
var loadMore = document.querySelector('.load-more__button');
var assortmentsOne = document.querySelectorAll('.assortments-one');
var assortmentsTwo = document.querySelectorAll('.assortments-two');
var assortmentsThree = document.querySelectorAll('.assortments-three');
var assortmentsFour = document.querySelectorAll('.assortments-four');
var numberOfElements = document.querySelector('.load-more__name_number');
var lineOfLoad = document.querySelector('.load-more__name_line');
var numberOfItems = document.querySelector('.all-products__name-number');
var kolP = 0;

//открытие-закрытие фильтра

filterTick.onclick = function() {
    filterContainer.classList.toggle('filter-container-open');
};

filterName.onclick = function() {
    filterContainer.classList.toggle('filter-container-open');
}

close.onclick = function(evt) {
    filterContainer.classList.toggle('filter-container-open');
    evt.stopPropagation();
};

//открытие-закрытие характеристики в меню

priceCont.onclick = function(evt) {
    priceInside.classList.toggle('price-none');
    evt.stopPropagation();
}

//цена

rangeFrom.oninput = function() {
    pNumberFrom.textContent = rangeFrom.value;
    dataNumberFrom = rangeFrom.value;
}

rangeTo.oninput = function() {
    pNumberTo.textContent = rangeTo.value;
    dataNumberTo = rangeTo.value;
}

//функция отбора

var applyFunction = function() {
    var kolP = parseInt(assortments.length,10);
    for (var i = 0; i < assortments.length; i++) {
        if ((parseInt(prices[i].textContent,10) > dataNumberFrom) && (parseInt(prices[i].textContent,10) < dataNumberTo)) {
            assortments[i].classList.remove('assortments-none');
        } else {
            assortments[i].classList.add('assortments-none');
            kolP = kolP - 1;
            console.log(kolP);
        }
    }
}

var clearAllFunction = function() {
    for (var i = 0; i < assortments.length; i++) {
        assortments[i].classList.remove('assortments-none');
    }
    rangeFrom.value = 0;
    rangeTo.value = 250;
    pNumberFrom.textContent = 0;
    pNumberTo.textContent = 250;
}

//вывод надписи "No appropriate products"

var noProductsFunction = function() {
    if (kolP == 0) {
        noProducts.classList.add('no-products-show');
        console.log('1');
    } else {
        noProducts.classList.remove('no-products-show');
        console.log('2');
    }
}

//кнопки фильтров

apply.onclick = function(evt) {
    evt.preventDefault();
    applyFunction();
    filterContainer.classList.toggle('filter-container-open');
    if (document.documentElement.clientWidth > 768) {
        window.scrollTo(0,250);
    }
    noProductsFunction();
}

clearAll.onclick = function(evt) {
    evt.preventDefault();
    clearAllFunction();
    filterContainer.classList.toggle('filter-container-open');
    window.scrollTo(0,250);
    noProductsFunction();
}

clearAllMin.onclick = function(evt) {
    evt.preventDefault();
    clearAllFunction();
    filterContainer.classList.toggle('filter-container-open');
    noProductsFunction();
}