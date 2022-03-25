// Cards
const showCarsInAvailable = (checked) => {
    newArray = JSON.parse(JSON.stringify(cards));
    if (checked) {
        newArray = newArray.filter((objEl) => {
            if (objEl.invaliable) {
                return objEl;
            }
        });
        setDefaultValues(checked)
    }
    createCards(newArray);
};

const optionValues = {
    year: 0,
    make: "",
    model: "",
    trim: "",
    mileage: "",
    descendingDate: "",
    ascendingPrice: "",
    descendingPrice: "",
    ascendingMileage: "",
    descendingMileage: "",
    ascendingPerformance: "",
    descendingPerformance: "",
};

const createCards = (arrayCars) => {
        rootElementCards.innerHTML = "";
        arrayCars.map((el) => {
                    const cardHTML = $('<div></div>');
                    let imgSrc = el.img;
                    let km = "" + el.mileage;
                    km = km.replace(".", ",");

                    cardHTML.html(`<div class="card" ${el.sold ? `style="opacity:0.7;"` : ""}>
                                    ${el.newCar ?
                                        `<div class="block-new">
                                            <span class="text-new">New</span>
                                        </div>` 
                                        :
                                        `<div></div>`
                                    }
                                    <img src=${imgSrc}>
                                    <card-body class="card-body">
                                        <span class="card-year">${el.year}</span>
                                        <h4 class="card-name">${el.nameCar}</h4>
                                        <div class="card-detail">
                                            <span>${km} km</span>
                                            <span>${el.transmission}</span>
                                            <span>${el.engine}</span>
                                        </div>
                                        <div class="card-price">$${el.price}</div>
                                    </card-body>
                                </div>`);
        $(rootElementCards).append($(cardHTML));
    });
};

const showAllCars = (buttonClick = false) => {
    buttonClick && setDefaultValues();
    rootElementCards.innerHTML = "";
    createCards(cards);
};

const reverseList = (src) => {
    checkBox.checked = false;
    if (!newArray) {
        newArray = JSON.parse(JSON.stringify(cards));
    }
    if (src.includes("group_arrow_up")) {
        imgEl.src = "./img/group_arrow_down.png";
    }
    if (src.includes("group_arrow_down")) {
        imgEl.src = "./img/group_arrow_up.png";
    }
    newArray.reverse();
    createCards(newArray);
};

const setDefaultValues = (checked) => {
    preventDefaultOptionValues();
    setDefaultValuesSort();
    if (!checked) {
        checkBox.checked = false;
    }
    imgEl.src = "./img/group_arrow_up.png";
    optionsSort.value = "";
    allSelect.forEach((el) => {
        el.value = "";
    });
};
const setDefaultValuesSort = () => {
    optionValues.descendingDate = "";
    optionValues.ascendingPrice = "";
    optionValues.descendingPrice = "";
    optionValues.ascendingMileage = "";
    optionValues.descendingMileage = "";
    optionValues.ascendingPerformance = "";
    optionValues.descendingPerformance = "";
}
const filterArrayForValue = (option, value) => {
    if (option === "offers-filter-year") {
        optionValues.year = value;
    }
    if (option === "offers-filter-make") {
        optionValues.make = value;
    }
    if (option === "offers-filter-model") {
        optionValues.model = value;
    }
    if (option === "offers-filter-trim") {
        optionValues.trim = value;
    }
    if (option === "offers-filter-mileage") {
        optionValues.mileage = value;
    }

    if (
        option === "offers-sub-filters-sorted-option" &&
        value === ""
    ) {
        setDefaultValuesSort();
        newArray = newArray.sort((a, b) => a.date - b.date);
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "descendingDate"
    ) {
        optionValues.descendingDate = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "ascendingPrice"
    ) {
        optionValues.ascendingPrice = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "descendingPrice"
    ) {
        optionValues.descendingPrice = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "ascendingMileage"
    ) {
        optionValues.ascendingMileage = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "descendingMileage"
    ) {
        optionValues.descendingMileage = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "ascendingPerformance"
    ) {
        optionValues.ascendingPerformance = value;
    }
    if (
        option === "offers-sub-filters-sorted-option" &&
        value === "descendingPerformance"
    ) {
        optionValues.descendingPerformance = value;
    }

    createCards(returnNewFilterArray());
};
const preventDefaultOptionValues = () => {
    optionValues.year = 0;
    optionValues.make = "";
    optionValues.mileage = "";
    optionValues.model = "";
    optionValues.trim = "";
};
const returnNewFilterArray = () => {
    checkBox.checked = false;
    newArray = JSON.parse(JSON.stringify(cards));

    if (optionValues.year) {
        newArray = newArray.filter((objEl) => {
            if (parseInt(optionValues.year) === objEl.year) {
                return objEl;
            }
        });
    }
    if (optionValues.make) {
        newArray = newArray.filter((objEl) => {
            if (objEl.nameCar.includes(optionValues.make)) {
                return objEl;
            }
        });
    }
    if (optionValues.model) {
        newArray = newArray.filter((objEl) => {
            if (objEl.nameCar.includes(optionValues.model)) {
                return objEl;
            }
        });
    }
    if (optionValues.trim) {
        newArray = newArray.filter((objEl) => {
            if (objEl.engine.includes(optionValues.trim)) {
                return objEl;
            }
        });
    }
    if (optionValues.mileage) {
        newArray = newArray.filter((objEl) => {
            if (mileageFit(objEl.mileage)) {
                return objEl;
            }
        });
    }
    // * option sort * //
    if (optionValues.descendingDate) {
        setDefaultValuesSort();
        newArray = newArray.sort((a, b) => b.date - a.date);
    }
    if (optionValues.ascendingPrice) {
        setDefaultValuesSort();
        newArray = sortArrayDescOrAsc(newArray, ",", "asc", "price");
    }
    if (optionValues.descendingPrice) {
        setDefaultValuesSort();
        newArray = sortArrayDescOrAsc(newArray, ",", "desc", "price");
    }
    if (optionValues.ascendingMileage) {
        setDefaultValuesSort();
        newArray = sortArrayDescOrAsc(newArray, ".", "asc", "mileage");
    }
    if (optionValues.descendingMileage) {
        setDefaultValuesSort();
        newArray = sortArrayDescOrAsc(newArray, ".", "desc", "mileage");
    }
    if (optionValues.ascendingPerformance) {
        setDefaultValuesSort();
        newArray = newArray.sort((a, b) => a.year - b.year);
    }
    if (optionValues.descendingPerformance) {
        setDefaultValuesSort();
        newArray = newArray.sort((a, b) => b.year - a.year);
    }
    // * option sort * //
    return newArray;
};
const sortArrayDescOrAsc = (array, connectVar, sortMethod, sortValue) => {
    let newArray = intoInt(array, sortValue, connectVar);
    if (sortMethod === "asc") {
        newArray.sort((a, b) => a[sortValue] - b[sortValue]);
    } else if (sortMethod === "desc") {
        newArray.sort((a, b) => b[sortValue] - a[sortValue]);
    }
    newArray = returnWithConnect(newArray, connectVar, sortValue);
    return newArray;
}
const intoInt = (array, key, symbolReplace) => {
    let newArray = array.map((el) => {
        const value = parseInt(el[key].replace(symbolReplace, ""));
        el[key] = value;
        return el;
    });
    return newArray;
}
const returnWithConnect = (array, symbolConnect, keyFinder) => {
    let numPositionEl;
    let newArray = array.map((el) => {
        value = ("" + el[keyFinder]).split("").map(Number);
        if (value.length === 6) {
            numPositionEl = 3;
        } else {
            numPositionEl = 2;
        }
        value.splice(numPositionEl, 0, symbolConnect);
        el[keyFinder] = value.join("");
        return el;
    });
    return newArray;
}
const mileageFit = (mileage) => {
    const arrayMileage = optionValues.mileage.split("-");
    const mileageValue = parseInt(mileage.replace(".", ""));
    if (
        parseInt(arrayMileage[0]) <= mileageValue &&
        mileageValue <= parseInt(arrayMileage[1])
    ) {
        return true;
    }
    return false;
};
showAllCars();
// end Cards

// Click on spoiler
$(function() {
    $(".card").click(function() {
        const lastElement = this.lastElementChild;
        setClassShow(lastElement, "show");
        setClassShow(this, "open-issue");
    });
});

function setClassShow(element, newClass) {
    element.classList.contains(newClass) ?
        $(element).removeClass(newClass) :
        $(element).addClass(newClass);
}
// end click on spoiler

// * validation e-mail * //
$(function() {
    $(".btn-outline-secondary").on("click", validate);

    function validateEmail(email) {
        const res = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return res.test(String(email).toLowerCase());
    }

    function validate() {
        const email = $(".email");
        const divEmail = $("#symbol");
        const $error = $(".error");
        const elMail = email[0];
        const elDiv = divEmail[0];

        $error.text("Incorrect email");

        if (validateEmail(email.val())) {
            $error.fadeOut();
            elMail.className = "email email-success";
            elDiv.className = "symbol-success";
        } else {
            $error.fadeIn();
            elMail.className = "email email-error";
            elDiv.className = "symbol-error";
        }
    }
});
// * validation e-mail * //