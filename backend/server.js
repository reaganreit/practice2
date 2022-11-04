// connect to the database
var pg = require('pg');
var connectionString = "postgres://csce315_905_keener:530003826@csce-315-db.engr.tamu.edu/ip:5432/csce315_905_51";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

// adding new items to menu - will probably change this to an event listener tied to a button
function addMenu() {
    // have text entry points - will get these from front end code
    // get text from these fields
    let itemName = // get name from entry
    let itemPrice = // get from entry
    let itemIngreds = // get from entry
    // connect to database
    // send in query
    const query = "INSERT INTO menu VALUES('" + itemName +"', " + itemPrice +", '" + itemIngreds + "');";
    let result = pgClient.query(query);
}

// send orders to database
function sendOrder(orderItems) {
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

