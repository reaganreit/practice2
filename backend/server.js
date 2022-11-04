// connect to the database
const { query } = require('express');
const express = require('../node_modules/express');
const { Pool } = require('../node_modules/pg');
const dotenv = require('../node_modules/dotenv').config();
// Create express app
const app = express();
const port = 3000;
// Create pool
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

const Order = (()=>{
    let orderItems = "";
    let rawPrice = 0.00;
    let tax = 0.00;
    let totalPrice = 0.00;
    let orderID; // TODO: MAKE THIS FUNCTION
    const customerName = "";


    const addItem = () =>{

    }

    // get price and tax details
    const updatePrice = (itemName) => {
        // calculate item total
        let itemPrice = 0.00;
        // get new order item's price from database
        let price;
        pool
        .query("SELECT item_price FROM menu WHERE item_name ='" + itemName + "';")
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                price = query_res.rows[i];
                console.log(query_res.rows[i]);
            }});
        itemPrice = price.item_price;
        // calculate tax
        currTotal += itemPrice;
        let taxPrice = currTotal * 0.0825;
        // calculate order total
        let orderTotal = currTotal + taxPrice;
        // return tax and order total
        // may have to make these variables global variables
        let result = {orderTotal, taxPrice};
    }

    // send orders to database
    function sendOrder() {
        // get order items
        // get time
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        time = time.substring(0, 8);
        let updatedDate = date + " " + time;
        // get name
        // format query
        // for receipt: order_id, payment_type, total, date/timestamp, order_items, customer_name, card_number, employeee_name
        // for orders: order_id, total, timestamp
        orderID = getID();
        let query = "INSERT INTO orders values(" + orderID + "," + paymentType + "," + orderTotal + "," + updatedDate + "," + orderItems + "," 
                                                 + custName + "," + cardNum + "," + empName + ";";
        // execute query
        pool.query(query);

        // call updateInventory
        updateInventory(orderItems);
    }

    function getID() {
        let newID;
        pool
        .query("SELECT max(order_id) FROM receipts;")
        .then(query_res => {
            for (let i = 0; i < query_res.rowCount; i++){
                newID = query_res.rows[i];
                console.log(query_res.rows[i]);
            }});
        orderID = newID.order_id + 1;
    }
});

// adding new items to menu - will probably change this to an event listener tied to a button
// function addMenu() {
//     // have text entry points - will get these from front end code
//     // get text from these fields
//     let itemName = // get name from entry
//     let itemPrice = // get from entry
//     let itemIngreds = // get from entry
//     // connect to database
//     // send in query
//     const query = "INSERT INTO menu VALUES('" + itemName +"', " + itemPrice +", '" + itemIngreds + "');";
//     let result = pgClient.query(query);
// }

