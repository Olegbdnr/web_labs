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


let books = [];

const itemTemplate = ({tittle, author, numberOfPages, price}) => {
    return `
    <li class="list-item" id="item">
                <div class="item-body">
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
                            <span class="item-field-value">${numberOfPages}</span>
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
    itemsList.forEach(item => {
        res += itemTemplate(item);
    })
    itemsContainer.innerHTML = res;
}

const sortBooksByPrice = (books) => {
    let sorted = books.slice(0);
    sorted.sort(function (a, b) {return b.price - a.price;});
    renderItemsList(sorted);
}

const findByTittle = (books) => {
    let result = books.slice(0);
    result = result.filter(book => {return book.tittle.includes(findInput.value)});
    console.log(result);
    renderItemsList(result);
}

countBtn.addEventListener("click", () => {
    totalAmountValue.innerHTML = books.length;
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let book = {
        tittle: tittleInput.value,
        author: authorInput.value,
        numberOfPages: numberOfPagesInput.value,
        price: priceInput.value
    }
    books.push(book);
    itemsContainer.insertAdjacentHTML("afterbegin", itemTemplate(book));
} )

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
} )
