const sortBooksCheckBox = document.getElementById("accept");
const itemsContainer = document.getElementById("items-container");
const tittleInput = document.getElementById("tittle-input");
const authorInput = document.getElementById("author-input");
const numberOfPagesInput = document.getElementById("pages-num-input");
const priceInput = document.getElementById("price-input");
const submitBtn = document.getElementById("submit-btn");
const findInput = document.getElementById("find-input");
const findBtn = document.getElementById("find-btn");
const clearBtn = document.getElementById("clear-btn");
const totalAmountValue = document.getElementById("total-amount-value");
const countBtn = document.getElementById("count-btn");
const homeBtn = document.getElementById("home-btn");
const createBtn = document.getElementById("create-btn");
const main = document.getElementById("main");
const createForm = document.getElementById("add-form");
const sideSection = document.getElementsByClassName("side-section");
const itemsSection = document.getElementsByClassName("items-section");
const formTittle = document.getElementById("form-tittle");
const editBtn = document.getElementById("submit-edit");

const clickEvent = new Event("click");

let books = [];

fetch('http://localhost:5000/api/books', {method: 'GET'}).then(
    (response) => {
        response.json().then(
            (json) => {
                books = json;
                renderItemsList(books);
            })
    });

let currentIndex;

const itemTemplate = ({tittle, author, pages, price}, index) => {
    return `
                <li class="list-item" id="item">
                    <div class="item-body">
                        <div class="btn-wrapper">
                            <div id="delete-btn" onclick="updateItem(${index})">
                                <img src="img/pngwing.com%20(11).png" alt="edit" class="delete-btn">
                            </div>
                            <div id="edit-btn" onclick="deleteItem(${index})">
                                <img src="img/clipart1087676.png" alt="delete" class="delete-btn">
                            </div>
                        </div>
                        <img src="img/E22lyoP.png" alt="book-image" class="item-img">
                        <div class="item-data-wrapper">
                            <div class="item-field-wrapper">
                                <span class="item-field">Tittle:</span>
                                <span class="item-field-value">${tittle}</span>
                            </div>
                            <div class="item-field-wrapper">
                                <span class="item-field">Author:</span>
                                <span class="item-field-value">${author}</span>
                            </div>
                            <div class="item-field-wrapper">
                                <span class="item-field">Number of pages:</span>
                                <span class="item-field-value">${pages}</span>
                            </div>
                            <div class="item-field-wrapper">
                                <span class="item-field">Price:</span>
                                <span class="item-field-value">${price}</span>
                            </div>
                        </div>
                    </div>
                </li>`
}

const renderItemsList = (itemsList) => {
    let res = ``;
    itemsList.forEach((item, index) => {
        res += itemTemplate(item, index);
    })
    itemsContainer.innerHTML = res;
}

const clearValuesFromInputs = () => {
    tittleInput.value = "";
    authorInput.value = "";
    numberOfPagesInput.value = "";
    priceInput.value = "";
}

const fillInputsValue = (book) => {
    tittleInput.value = book.tittle;
    authorInput.value = book.author;
    numberOfPagesInput.value = book.pages;
    priceInput.value = book.price;
}


const sortBooksByPrice = (books) => {
    let sorted = books.slice(0);
    sorted.sort(function (a, b) {
        return b.price - a.price;
    });
    renderItemsList(sorted);
}

const findByTittle = (books) => {
    let result = books.slice(0);
    result = result.filter(book => {
        return book.tittle.includes(findInput.value)
    });
    renderItemsList(result);
}

const countTotalAmount = (books) => {
    let res = 0;
    books.forEach(book => {
        res += Number(book.price);
    });
    return res + "$";
}

const deleteItem = (index) => {
    fetch(`http://localhost:5000/api/books/${books[index]._id}`, {
        method: 'DELETE',
    }).then(
        response => {
            response.json().then(
                (json) => {
                    console.log(json);
                })
        });
    books.splice(index, 1);
    renderItemsList(books);
}

const updateItem = (index) => {
    createBtn.dispatchEvent(clickEvent);
    formTittle.innerText = "Edit book";
    fillInputsValue(books[index]);
    submitBtn.style.display = "none";
    editBtn.style.display = "block";
    currentIndex = index;
}

const validateInputForms = () => {
    if (!tittleInput.value.trim().length) {
        alert("Field TITTLE cannot be empty");
        return false;
    }
    if (!authorInput.value.trim().length) {
        alert("Field AUTHOR cannot be empty");
        return false;
    }
    if (!numberOfPagesInput.value.trim().length || parseInt(numberOfPagesInput.value) === 0) {
        alert("Field NUMBER OF PAGES cannot be 0");
        return false
    }
    if (!priceInput.value.trim().length) {
        alert("Field PRICE cannot be 0");
        return false
    }
    return true;
}


countBtn.addEventListener("click", () => {
    totalAmountValue.innerHTML = countTotalAmount(books);
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateInputForms()) {
        const book = {
            tittle: tittleInput.value,
            author: authorInput.value,
            description: "none",
            pages: Number(numberOfPagesInput.value),
            price: Number(priceInput.value),
            picture: "default-picture"
        }
        fetch('http://localhost:5000/api/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json; charset=UTF-8',},
        }).then(
            response => {
                response.json().then(
                    (json) => {
                        console.log(json);
                    })
            });
        books.push(book);
        clearValuesFromInputs();
    }
})

findBtn.addEventListener("click", () => {
    findByTittle(books);
})

clearBtn.addEventListener("click", () => {
    findInput.value = "";
    renderItemsList(books);
})

sortBooksCheckBox.addEventListener("click", () => {
    if (sortBooksCheckBox.checked) {
        sortBooksByPrice(books);
    } else {
        renderItemsList(books);
    }
})

homeBtn.addEventListener("click", () => {
    if (createBtn.classList.contains("outlined")) {
        createBtn.classList.remove("outlined");
        homeBtn.classList.add("outlined");
    }
    createForm.style.display = "none";
    sideSection[0].style.display = "block";
    itemsSection[0].style.display = "block";
    main.style.justifyContent = "normal";
    renderItemsList(books);
})

createBtn.addEventListener("click", () => {
    if (homeBtn.classList.contains("outlined")) {
        homeBtn.classList.remove("outlined");
        createBtn.classList.add("outlined");
    }
    formTittle.innerHTML = "Create book";
    submitBtn.style.display = "block";
    editBtn.style.display = "none";
    createForm.style.display = "inline-block";
    sideSection[0].style.display = "none";
    itemsSection[0].style.display = "none";
    main.style.justifyContent = "center";
    clearValuesFromInputs();
})

editBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateInputForms()) {
        const book = {
            _id: books[currentIndex]._id,
            tittle: tittleInput.value,
            author: authorInput.value,
            description: "none",
            pages: Number(numberOfPagesInput.value),
            price: Number(priceInput.value),
            picture: "default-picture"
        }
        fetch('http://localhost:5000/api/books', {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json; charset=UTF-8',},
        }).then(
            response => {
                response.json().then(
                    (json) => {
                        console.log(json);
                    })
            });
        books[currentIndex] = book;
        homeBtn.dispatchEvent(clickEvent);
    }
})








