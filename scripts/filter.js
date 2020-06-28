var filterContainer = document.querySelector('.filter-container');
var filterTick = document.querySelector('.filter__tick');
var filterName = document.querySelector('.filter__name');
var close = document.querySelector('.filter-nav__unit_close');
var priceCont = document.querySelector('.filter-characteristics-price-cont');
var priceInside = document.querySelector('.price-inside');
var colorCont = document.querySelector('.filter-characteristics-color-cont');
var colorSet = document.querySelector('.filter-characteristics-color-set');
var collectionCont = document.querySelector('.filter-characteristics-collection-cont');
var collectionSet = document.querySelector('.filter-characteristics-collection-set');
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
var firstColor = document.querySelector('.filter-characteristics-color-set__unit_first');
var firstColorFlag = 0;
var secondColor = document.querySelector('.filter-characteristics-color-set__unit_second');
var secondColorFlag = 0;
var thirdColor = document.querySelector('.filter-characteristics-color-set__unit_third');
var thirdColorFlag = 0;
var fourthColor = document.querySelector('.filter-characteristics-color-set__unit_fourth');
var fourthColorFlag = 0;
var fifthColor = document.querySelector('.filter-characteristics-color-set__unit_fifth');
var fifthColorFlag = 0;
var sixthColor = document.querySelector('.filter-characteristics-color-set__unit_sixth');
var sixthColorFlag = 0;
var casual = document.querySelector('.filter-characteristics-collection-set__unit_casual');
var casualLink = document.querySelector('.filter-characteristics-collection-set__link_casual');
var casualFlag = 0;
var petite = document.querySelector('.filter-characteristics-collection-set__unit_petite');
var petiteLink = document.querySelector('.filter-characteristics-collection-set__link_petite');
var petiteFlag = 0;
var classic = document.querySelector('.filter-characteristics-collection-set__unit_classic');
var classicLink = document.querySelector('.filter-characteristics-collection-set__link_classic');
var classicFlag = 1;
var soulluxe = document.querySelector('.filter-characteristics-collection-set__unit_soulluxe');
var soulluxeLink = document.querySelector('.filter-characteristics-collection-set__link_soulluxe');
var soulluxeFlag = 0;
var clearAllMin = document.querySelector('.filter-nav__unit_clear-all');
var noProducts = document.querySelector('.no-products');
var loadMore = document.querySelector('.load-more__button');
var assortmentsOne = document.querySelector('.assortments-one');
var assortmentsTwo = document.querySelector('.assortments-two');
var assortmentsThree = document.querySelector('.assortments-three');
var assortmentsFour = document.querySelector('.assortments-four');
var numberOfElements = document.querySelector('.load-more__name_number');
var lineOfLoad = document.querySelector('.load-more__name_line');

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

//открытие-закртие характеристик в меню

priceCont.onclick = function(evt) {
    priceInside.classList.toggle('price-none');
    evt.stopPropagation();
}

colorCont.onclick = function(evt) {
    colorSet.classList.toggle('color-none');
    evt.stopPropagation();
}

collectionCont.onclick = function(evt) {
    collectionSet.classList.toggle('collection-none');
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

//цвета

firstColor.onclick = function() {
    firstColor.classList.toggle('filter-characteristics-color-set__unit_first_click');
    if (firstColor.classList.contains('filter-characteristics-color-set__unit_first_click')) {
        firstColorFlag = 1;
    } else {
        firstColorFlag = 0;
    }
}

secondColor.onclick = function() {
    secondColor.classList.toggle('filter-characteristics-color-set__unit_second_click');
    if (secondColor.classList.contains('filter-characteristics-color-set__unit_second_click')) {
        secondColorFlag = 1;
    } else {
        secondColorFlag = 0;
    }
}

thirdColor.onclick = function() {
    thirdColor.classList.toggle('filter-characteristics-color-set__unit_third_click');
    if (thirdColor.classList.contains('filter-characteristics-color-set__unit_third_click')) {
        thirdColorFlag = 1;
    } else {
        thirdColorFlag = 0;
    }
}

fourthColor.onclick = function() {
    fourthColor.classList.toggle('filter-characteristics-color-set__unit_fourth_click');
    if (fourthColor.classList.contains('filter-characteristics-color-set__unit_fourth_click')) {
        fourthColorFlag = 1;
    } else {
        fourthColorFlag = 0;
    }
}

fifthColor.onclick = function() {
    fifthColor.classList.toggle('filter-characteristics-color-set__unit_fifth_click');
    if (fifthColor.classList.contains('filter-characteristics-color-set__unit_fifth_click')) {
        fifthColorFlag = 1;
    } else {
        fifthColorFlag = 0;
    }
}

sixthColor.onclick = function() {
    sixthColor.classList.toggle('filter-characteristics-color-set__unit_sixth_click');
    if (sixthColor.classList.contains('filter-characteristics-color-set__unit_sixth_click')) {
        sixthColorFlag = 1;
    } else {
        sixthColorFlag = 0;
    }
}

//коллекции

casual.onclick = function(evt) {
    evt.preventDefault();
    casual.classList.toggle('filter-characteristics-collection-set__unit_active');
    casualLink.classList.toggle('filter-characteristics-collection-set__link_active');
    if (casual.classList.contains('filter-characteristics-collection-set__unit_active')) {
        casualFlag = 1;
        petite.classList.remove('filter-characteristics-collection-set__unit_active');
        petiteLink.classList.remove('filter-characteristics-collection-set__link_active');
        classic.classList.remove('filter-characteristics-collection-set__unit_active');
        classicLink.classList.remove('filter-characteristics-collection-set__link_active');
        soulluxe.classList.remove('filter-characteristics-collection-set__unit_active');
        soulluxeLink.classList.remove('filter-characteristics-collection-set__link_active');
        petiteFlag = 0;
        classicFlag = 0;
        soulluxeFlag = 0;
    } else {
        casualFlag = 0;
    }
}

petite.onclick = function(evt) {
    evt.preventDefault();
    petite.classList.toggle('filter-characteristics-collection-set__unit_active');
    petiteLink.classList.toggle('filter-characteristics-collection-set__link_active');
    if (petite.classList.contains('filter-characteristics-collection-set__unit_active')) {
        petiteFlag = 1;
        casual.classList.remove('filter-characteristics-collection-set__unit_active');
        casualLink.classList.remove('filter-characteristics-collection-set__link_active');
        classic.classList.remove('filter-characteristics-collection-set__unit_active');
        classicLink.classList.remove('filter-characteristics-collection-set__link_active');
        soulluxe.classList.remove('filter-characteristics-collection-set__unit_active');
        soulluxeLink.classList.remove('filter-characteristics-collection-set__link_active');
        casualFlag = 0;
        classicFlag = 0;
        soulluxeFlag = 0;
    } else {
        petiteFlag = 0;
    }
}

classic.onclick = function(evt) {
    evt.preventDefault();
    classic.classList.toggle('filter-characteristics-collection-set__unit_active');
    classicLink.classList.toggle('filter-characteristics-collection-set__link_active');
    if (classic.classList.contains('filter-characteristics-collection-set__unit_active')) {
        classicFlag = 1;
        casual.classList.remove('filter-characteristics-collection-set__unit_active');
        casualLink.classList.remove('filter-characteristics-collection-set__link_active');
        petite.classList.remove('filter-characteristics-collection-set__unit_active');
        petiteLink.classList.remove('filter-characteristics-collection-set__link_active');
        soulluxe.classList.remove('filter-characteristics-collection-set__unit_active');
        soulluxeLink.classList.remove('filter-characteristics-collection-set__link_active');
        casualFlag = 0;
        petiteFlag = 0;
        soulluxeFlag = 0;
    } else {
        classicFlag = 0;
    }
}

soulluxe.onclick = function(evt) {
    evt.preventDefault();
    soulluxe.classList.toggle('filter-characteristics-collection-set__unit_active');
    soulluxeLink.classList.toggle('filter-characteristics-collection-set__link_active');
    if (soulluxe.classList.contains('filter-characteristics-collection-set__unit_active')) {
        soulluxeFlag = 1;
        casual.classList.remove('filter-characteristics-collection-set__unit_active');
        casualLink.classList.remove('filter-characteristics-collection-set__link_active');
        petite.classList.remove('filter-characteristics-collection-set__unit_active');
        petiteLink.classList.remove('filter-characteristics-collection-set__link_active');
        classic.classList.remove('filter-characteristics-collection-set__unit_active');
        classicLink.classList.remove('filter-characteristics-collection-set__link_active');
        casualFlag = 0;
        petiteFlag = 0;
        classicFlag = 0;
    } else {
        soulluxeFlag = 0;
    }
}

//функция отбора

var applyFunction = function() {
    for (var i = 0; i < assortments.length; i++) {
        if ((parseInt(prices[i].textContent,10) > dataNumberFrom) && (parseInt(prices[i].textContent,10) < dataNumberTo)) {
            assortments[i].classList.remove('assortments-none');
        } else {
            assortments[i].classList.add('assortments-none');
        }
        var sumFlag = firstColorFlag + secondColorFlag + thirdColorFlag + fourthColorFlag + fifthColorFlag + sixthColorFlag;
        var flag = 0;
        if ((!(assortments[i].classList.contains('assortments-none'))) && (sumFlag > 0)) {
            if ((firstColorFlag == 1) && (!(assortments[i].dataset.color == 'first'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((firstColorFlag == 1) && (assortments[i].dataset.color == 'first')) {
                flag = 1;
            }
            if ((secondColorFlag == 1) && (!(assortments[i].dataset.color == 'second'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((secondColorFlag == 1) && (assortments[i].dataset.color == 'second')) {
                flag = 1;
            }
            if ((thirdColorFlag == 1) && (!(assortments[i].dataset.color == 'third'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((thirdColorFlag == 1) && (assortments[i].dataset.color == 'third')) {
                flag = 1;
            }
            if ((fourthColorFlag == 1) && (!(assortments[i].dataset.color == 'fourth'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((fourthColorFlag == 1) && (assortments[i].dataset.color == 'fourth')) {
                flag = 1;
            }
            if ((fifthColorFlag == 1) && (!(assortments[i].dataset.color == 'fifth'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((fifthColorFlag == 1) && (assortments[i].dataset.color == 'fifth')) {
                flag = 1;
            }
            if ((sixthColorFlag == 1) && (!(assortments[i].dataset.color == 'sixth'))) {
                assortments[i].classList.add('assortments-none');
            } else if ((sixthColorFlag == 1) && (assortments[i].dataset.color == 'sixth')) {
                flag = 1;
            }
            if (flag > 0) {
                assortments[i].classList.remove('assortments-none');
            }
        }
        if (!(assortments[i].classList.contains('assortments-none'))) {
            if ((casualFlag == 1) && (!(assortments[i].dataset.collection == 'casual'))) {
                assortments[i].classList.add('assortments-none');
            }
            if ((petiteFlag == 1) && (!(assortments[i].dataset.collection == 'petite'))) {
                assortments[i].classList.add('assortments-none');
            }
            if ((soulluxeFlag == 1) && (!(assortments[i].dataset.collection == 'soulluxe'))) {
                assortments[i].classList.add('assortments-none');
            }
            if (classicFlag == 1) {
                assortments[i].classList.remove('assortments-none');
            }
        }
    }
}

var clearAllFunction = function() {
    for (var i = 0; i < assortments.length; i++) {
        assortments[i].classList.remove('assortments-none');
    }
    assortmentsAll.classList.remove('assortments-flex');
    assortmentsOne.classList.remove('assortments-flex');
    assortmentsTwo.classList.remove('assortments-flex');
    assortmentsThree.classList.remove('assortments-flex');
    assortmentsFour.classList.remove('assortments-flex');
    rangeFrom.value = 0;
    rangeTo.value = 250;
    pNumberFrom.textContent = 0;
    pNumberTo.textContent = 250;
    firstColor.classList.remove('filter-characteristics-color-set__unit_first_click');
    firstColorFlag = 0;
    secondColor.classList.remove('filter-characteristics-color-set__unit_second_click');
    secondColorFlag = 0;
    thirdColor.classList.remove('filter-characteristics-color-set__unit_third_click');
    thirdColorFlag = 0;
    fourthColor.classList.remove('filter-characteristics-color-set__unit_fourth_click');
    fourthColorFlag = 0;
    fifthColor.classList.remove('filter-characteristics-color-set__unit_fifth_click');
    fifthColorFlag = 0;
    sixthColor.classList.remove('filter-characteristics-color-set__unit_sixth_click');
    sixthColorFlag = 0;
    classicFlag = 1;
    classic.classList.add('filter-characteristics-collection-set__unit_active');
    classicLink.classList.add('filter-characteristics-collection-set__link_active');
    casual.classList.remove('filter-characteristics-collection-set__unit_active');
    casualLink.classList.remove('filter-characteristics-collection-set__link_active');
    petite.classList.remove('filter-characteristics-collection-set__unit_active');
    petiteLink.classList.remove('filter-characteristics-collection-set__link_active');
    soulluxe.classList.remove('filter-characteristics-collection-set__unit_active');
    soulluxeLink.classList.remove('filter-characteristics-collection-set__link_active');
    casualFlag = 0;
    petiteFlag = 0;
    soulluxeFlag = 0;
}

//вывод надписи "no-products"

var showNoProducts = function() {
    var sumAssortmentsNone = 0;
    for (var i = 0; i < assortments.length; i++) {
        if (assortments[i].classList.contains('assortments-none')) {
            sumAssortmentsNone++
        }
    }
    if (sumAssortmentsNone == 9) {
        noProducts.classList.add('no-products-show');
    } else {
        noProducts.classList.remove('no-products-show');
    }
}

//кнопки фильтров

apply.onclick = function(evt) {
    evt.preventDefault();
    applyFunction();
    showNoProducts();
    assortmentsAll.classList.add('assortments-flex');
    assortmentsOne.classList.add('assortments-flex');
    assortmentsTwo.classList.add('assortments-flex');
    assortmentsThree.classList.add('assortments-flex');
    assortmentsFour.classList.add('assortments-flex');
    filterContainer.classList.toggle('filter-container-open');
    if (document.documentElement.clientWidth > 768) {
        window.scrollTo(0,250);
    }
}

clearAll.onclick = function(evt) {
    evt.preventDefault();
    clearAllFunction();
    filterContainer.classList.toggle('filter-container-open');
    window.scrollTo(0,250);
}

clearAllMin.onclick = function(evt) {
    evt.preventDefault();
    clearAllFunction();
    filterContainer.classList.toggle('filter-container-open');
}

//кнопка загрузки новых элементов

loadMore.onclick = function(evt) {
    evt.preventDefault();
    if (assortmentsOne.classList.contains('assortments-none')) {
        assortmentsOne.classList.remove('assortments-none');
        numberOfElements.textContent = 18;
        lineOfLoad.style.width = "78px";
        lineOfLoad.style.left = "-64px";
    } else if (assortmentsTwo.classList.contains('assortments-none')) {
        assortmentsTwo.classList.remove('assortments-none');
        numberOfElements.textContent = 27;
        lineOfLoad.style.width = "115px";
        lineOfLoad.style.left = "-46px";
    } else if (assortmentsThree.classList.contains('assortments-none')) {
        assortmentsThree.classList.remove('assortments-none');
        numberOfElements.textContent = 36;
        lineOfLoad.style.width = "154px";
        lineOfLoad.style.left = "-27px";
    } else if (assortmentsFour.classList.contains('assortments-none')) {
        assortmentsFour.classList.remove('assortments-none');
        numberOfElements.textContent = 45;
        lineOfLoad.style.width = "207px";
        lineOfLoad.style.left = "0px";
        this.innerHTML="Hide all";
    } else {
        this.innerHTML="Load more";
        numberOfElements.textContent = 9;
        lineOfLoad.style.width = "39px";
        lineOfLoad.style.left = "-80px";
        assortmentsOne.classList.add('assortments-none');
        assortmentsTwo.classList.add('assortments-none');
        assortmentsThree.classList.add('assortments-none');
        assortmentsFour.classList.add('assortments-none');
        if (document.documentElement.clientWidth > 768) {
            window.scrollTo(0,250);
        } else {
            window.scrollTo(0,0);
        }
    }
}