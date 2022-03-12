// Cards
const rootElementCards = document.getElementById("cards");
const allSelect = document.querySelectorAll(".offers-filter > select");
const imgEl = document.getElementById("sort-img");
const checkBox = document.querySelector(
    ".offers-sub-filters-instant > .container-checkbox > input"
);
const optionsSort = document.querySelector(
    "select[name=offers-sub-filters-sorted-option]"
);

let newArray;
const cards = [{
        year: 2019,
        img: "./img/cars/tiguan.png",
        nameCar: "Volkswagen Tiguan",
        mileage: "19.855",
        transmission: "Automatic",
        engine: "Diesel",
        price: "34,888",
        newCar: false,
        invaliable: true,
        date: 1
    },
    {
        year: 2014,
        img: "./img/cars/toyota.jpg",
        nameCar: "Toyota Highlander XLE",
        mileage: "69.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "27,875",
        newCar: true,
        invaliable: true,
        date: 2
    },
    {
        year: 2017,
        img: "./img/cars/lexus.jpg",
        nameCar: "Lexus RX 350 LUXURY",
        mileage: "39.850",
        transmission: "Automatic",
        engine: "Gas",
        price: "38,775",
        newCar: false,
        invaliable: true,
        date: 3
    },
    {
        year: 2016,
        img: "./img/cars/highlander4.jpg",
        nameCar: "Toyota Highlander LE A...",
        mileage: "104.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "23,728",
        newCar: false,
        invaliable: true,
        date: 4
    },
    {
        year: 2017,
        img: "./img/cars/elantra.jpg",
        nameCar: "Hyundai Elantra",
        mileage: "95.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "11,788",
        newCar: false,
        invaliable: true,
        date: 5
    },
    {
        year: 2016,
        img: "./img/cars/gle.jpg",
        nameCar: "Mercedes-Benz GLE-Cl...",
        mileage: "59.800",
        transmission: "Automatic",
        engine: "Diesel",
        price: "38,878",
        newCar: false,
        invaliable: true,
        date: 6
    },
    {
        year: 2015,
        img: "./img/cars/venza.png",
        nameCar: "Toyota Venza AWD XLE...",
        mileage: "99.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "18,620",
        newCar: false,
        invaliable: false,
        date: 7
    },
    {
        year: 2016,
        img: "./img/cars/lexus_sport.png",
        nameCar: "Lexus RX 350 F-SPORT",
        mileage: "86.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "34,888",
        newCar: true,
        invaliable: true,
        date: 8
    },
    {
        year: 2019,
        img: "./img/cars/tiguan.png",
        nameCar: "Volkswagen Tiguan",
        mileage: "19.855",
        transmission: "Automatic",
        engine: "Diesel",
        price: "34,888",
        newCar: false,
        invaliable: true,
        date: 9
    },
    {
        year: 2014,
        img: "./img/cars/toyota.jpg",
        nameCar: "Toyota Highlander XLE",
        mileage: "69.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "27,875",
        newCar: false,
        invaliable: true,
        date: 10
    },
    {
        year: 2017,
        img: "./img/cars/lexus.jpg",
        nameCar: "Lexus RX 350 LUXURY",
        mileage: "39.850",
        transmission: "Automatic",
        engine: "Gas",
        price: "38,775",
        newCar: false,
        invaliable: true,
        date: 11
    },
    {
        year: 2016,
        img: "./img/cars/highlander4.jpg",
        nameCar: "Toyota Highlander LE A...",
        mileage: "104.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "23,728",
        newCar: false,
        invaliable: true,
        date: 12
    },
    {
        year: 2019,
        img: "./img/cars/tiguan.png",
        nameCar: "Volkswagen Tiguan",
        mileage: "19.855",
        transmission: "Automatic",
        engine: "Diesel",
        price: "34,888",
        newCar: true,
        invaliable: true,
        date: 13
    },
    {
        year: 2014,
        img: "./img/cars/toyota.jpg",
        nameCar: "Toyota Highlander XLE",
        mileage: "69.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "27,875",
        newCar: false,
        invaliable: true,
        date: 14
    },
    {
        year: 2017,
        img: "./img/cars/lexus.jpg",
        nameCar: "Lexus RX 350 LUXURY",
        mileage: "39.850",
        transmission: "Automatic",
        engine: "Gas",
        price: "38,775",
        newCar: false,
        invaliable: true,
        date: 15
    },
    {
        year: 2016,
        img: "./img/cars/highlander4.jpg",
        nameCar: "Toyota Highlander LE A...",
        mileage: "104.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "23,728",
        newCar: false,
        invaliable: true,
        date: 16
    },
    {
        year: 2017,
        img: "./img/cars/elantra.jpg",
        nameCar: "Hyundai Elantra",
        mileage: "95.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "11,788",
        newCar: false,
        invaliable: true,
        date: 17
    },
    {
        year: 2016,
        img: "./img/cars/gle.jpg",
        nameCar: "Mercedes-Benz GLE-Cl...",
        mileage: "59.800",
        transmission: "Automatic",
        engine: "Diesel",
        price: "38,878",
        newCar: false,
        invaliable: true,
        date: 18
    },
    {
        year: 2015,
        img: "./img/cars/venza.png",
        nameCar: "Toyota Venza AWD XLE...",
        mileage: "99.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "18,620",
        newCar: false,
        invaliable: true,
        date: 19
    },
    {
        year: 2016,
        img: "./img/cars/lexus_sport.png",
        nameCar: "Lexus RX 350 F-SPORT",
        mileage: "86.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "34,888",
        newCar: true,
        invaliable: true,
        date: 20
    },
    {
        year: 2019,
        img: "./img/cars/tiguan.png",
        nameCar: "Volkswagen Tiguan",
        mileage: "86.000",
        transmission: "Automatic",
        engine: "Diesel",
        price: "34,888",
        newCar: false,
        invaliable: true,
        date: 21
    },
    {
        year: 2014,
        img: "./img/cars/toyota.jpg",
        nameCar: "Toyota Highlander XLE",
        mileage: "69.000",
        transmission: "Automatic",
        engine: "Gas",
        price: "27,875",
        newCar: false,
        invaliable: true,
        date: 22
    },
];

const showCarsInAvailable = (checked) => {
    newArray = JSON.parse(JSON.stringify(cards));
    if (checked) {
        newArray = newArray.filter((objEl) => {
            if (objEl.invaliable) {
                return objEl;
            }
        });
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
        const blockCard = document.createElement("div");
        const imgCard = document.createElement("img");
        const blockBodyCard = document.createElement("card-body");
        const yearCard = document.createElement("span");
        const nameCard = document.createElement("h4");
        const cardDetail = document.createElement("div");
        const kmCard = document.createElement("span");
        const transmissionCard = document.createElement("span");
        const styleEngineCard = document.createElement("span");
        const priceCard = document.createElement("div");

        blockCard.className = "card";
        blockBodyCard.className = "card-body";
        yearCard.className = "card-year";
        nameCard.className = "card-name";
        cardDetail.className = "card-detail";
        priceCard.className = "card-price";

        imgCard.src = el.img;
        yearCard.innerHTML = el.year;
        nameCard.innerHTML = el.nameCar;
        let km = "" + el.mileage;
        km = km.replace(".", ",");
        kmCard.innerHTML = `${km} km`;
        transmissionCard.innerHTML = el.transmission;
        styleEngineCard.innerHTML = el.engine;
        priceCard.innerHTML = `$${el.price}`;

        cardDetail.appendChild(kmCard);
        cardDetail.appendChild(transmissionCard);
        cardDetail.appendChild(styleEngineCard);

        blockBodyCard.appendChild(yearCard);
        blockBodyCard.appendChild(nameCard);
        blockBodyCard.appendChild(cardDetail);
        blockBodyCard.appendChild(priceCard);

        blockCard.appendChild(imgCard);
        blockCard.appendChild(blockBodyCard);

        rootElementCards.appendChild(blockCard);
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

const setDefaultValues = () => {
    preventDefaultOptionValues();
    setDefaultValuesSort();
    checkBox.checked = false;
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
        newArray = ascendingPrice(newArray);
    }
    if (optionValues.descendingPrice) {
        setDefaultValuesSort();
        newArray = descendingPrice(newArray);
    }
    if (optionValues.ascendingMileage) {
        setDefaultValuesSort();
        newArray = ascendingMileage(newArray);
    }
    if (optionValues.descendingMileage) {
        setDefaultValuesSort();
        newArray = descendingMileage(newArray);
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

const ascendingPrice = (array) => {
    let newArray = intoInt(array);
    newArray.sort((a, b) => a.price - b.price);
    newArray = returnWithConnect(newArray, ",", "price");
    return newArray;
};
const descendingPrice = (array) => {
    let newArray = intoInt(array);
    newArray.sort((a, b) => b.price - a.price);
    newArray = returnWithConnect(newArray, ",", "price");
    return newArray;
};
const ascendingMileage = (array) => {
    let newArray = intoInt(array, true);
    newArray.sort((a, b) => a.mileage - b.mileage);
    newArray = returnWithConnect(newArray, ".", "mileage");
    return newArray;
}
const descendingMileage = (array) => {
    let newArray = intoInt(array, true);
    newArray.sort((a, b) => b.mileage - a.mileage);
    newArray = returnWithConnect(newArray, ".", "mileage");
    return newArray;
}
const intoInt = (array, itsMileage = false) => {
    let symbolReplace;
    let keyFinder;
    if (itsMileage) {
        symbolReplace = ".";
        keyFinder = "mileage";
    } else {
        symbolReplace = ",";
        keyFinder = "price";
    }
    let newArray = array.map((el) => {
        const value = parseInt(el[keyFinder].replace(symbolReplace, ""));
        el[keyFinder] = value;
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