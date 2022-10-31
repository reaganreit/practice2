

// adding new items to menu
function addMenu() {
    // have text entry points - will get these from front end code
    // get text from these fields
    // connect to database
    // send in query
}

// send orders to database
function sendOrder() {
    // get order items
    // get time
    // get name
    // format query
    // execute query
}

// get price and tax details
function updatePrice(currTotal) {
    // calculate item total
    let itemPrice = 0.00;
        // get new order item's price from database
    // calculate tax
    currTotal += itemPrice;
    let taxPrice = currTotal * 0.0825;
    // calculate order total
    let orderTotal = currTotal + taxPrice;
    // return tax and order total
    // may have to make these variables global variables
    let result = {orderTotal, taxPrice};
    return result;
}

