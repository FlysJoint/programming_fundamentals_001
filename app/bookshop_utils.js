function addVAT(price) {
    return price >= 0 ? price + (0.2 * price) : 'Pricing Error';
}

function getFullName(firstName, lastName) { 
    if (typeof firstName === "string" && typeof lastName === "string") {
        return firstName + ' ' + lastName;
    }
    else if (firstName === undefined || lastName === undefined) {
        return 'Need more info';
    }
    else {
        return 'Only strings allowed';
    }
}

function makeHalfPrice(price) {
    return price >= 0 ? price * 0.5 : 'Pricing Error';
}

function countBooks(books) {

    let notAString = false;

    if (books !== undefined) {
        for (let i = 0; i < books.length; i++) {
            if (typeof books[i] !== 'string') {
                notAString = true; 
            }
        }
    }
    else {
        return undefined;
    }
    return notAString === true ? 'Book Title Error' : books.length;
}

function isInStock(book) {
    return book.quantity > 0;
}

function getTotalOrderPrice(price, quantity) {

    if (price >= 0) {
        return quantity > 0 ? addVAT(price * quantity) : 'Quantity must be greater than 0' ;
    }
    else {
        return 'Pricing Error';
    }
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};