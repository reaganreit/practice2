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
    let orderID;
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

        // Subtracts inventory items used up in this order
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


//will probably delete this later
async function doWait(ingredients_str){
    return await new Promise((resolve,reject)=>{
        // if(err){
        //     throw err
        // }
        pool
            .query('SELECT ingredients_used FROM menu WHERE item_name = \'' +items[i] +'\';')
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    //console.log(query_res.rowCount);
                    ingredients.push(query_res.rows[i]);
                    ingredients_str=query_res.rows[i];
                   // console.log("here",ingredients[ingredients.size-1]);
                    console.log(query_res.rows[i]);
                    //resolve();
                }});//.then( () => resolve())
        resolve();
    })
}
//updateInventory("Butter Chicken Bowl,Fries")
//Update inventory table when orders sent
async function updateInventory(orderItems){
    items = orderItems.split(",");
    console.log(items[0]);
    ingredients=[];
    for(i = 0; i < items.length; i++){
        await pool
            .query('SELECT ingredients_used FROM menu WHERE item_name = \'' +items[i] +'\';')
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    ingredients.push(query_res.rows[i]);
                    console.log(query_res.rows[i]);
                }});
    }
    for(i = 0; i < ingredients.length; i++){
        ingredients_str=ingredients[i].ingredients_used;
        console.log(ingredients_str);
        ingred=ingredients_str.split(",");
        for(j = 0; j < ingred.length; j++){
            // get current value of item
           quant_str = "";
           console.log("Ingredient: ", ingred[j]);
           query_str = "SELECT quantity FROM ingredients WHERE name ='" + ingred[j] +"';";
           await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    quant_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
            quant=quant_str.quantity; //int
            quant-=1; //update
            console.log(quant);
            // Update value of that item
            query_str = "UPDATE ingredients SET quantity = " + quant+ " WHERE name = '" + ingred[j] + "';";
            console.log(query_str);
            await pool.query(query_str)
        }
    }
}

//array of bowls
async function bowlContent(){
    let bowl;
    bowls=[];
    await pool
            .query("SELECT item_name FROM menu WHERE item_name like '%Bowl%';")
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    bowl=query_res.rows[i];
                    console.log(query_res.rows[i]);
                    bowls.push(bowl.item_name);
                }});
    //console.log(bowls[0])
    return bowls;
}

//array of gyros
async function gyrosContent(){
    let gyro;
    gyros=[];
    await pool
            .query("SELECT item_name FROM menu WHERE item_name like '%Gyro%';")
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    gyro=query_res.rows[i];
                    console.log(query_res.rows[i]);
                    gyros.push(gyro.item_name);
                }});
    //console.log(gyros[0])
    return gyros;
}

//array of drinks
function drinksContent(){
    drinks=["Fountain Drinks", "Bottled Water"];
    return drinks;
}

//array of extras
function extrasContent(){
    extras=["2 Meatballs", "2 Falafels", "Fries", "Garlic Fries", "Hummus & Pita", "Extra Dressing", "Extra Hummus", "Extra Protein", "Pita Bread"];
    return extras;
}

//the quantity of times that items were ordered in a time frame for POS report
//returns the number of times it was ordered
async function reportContent(item,date1, date2){ //params are item name the first date and the second date all strings
    quantity_str="";
    query_str ="SELECT count(order_items) AS quantity FROM receipts where order_items like'%"+item +"%'and timestamp between '"+date1+" "+"00:00:00' and '"+date2+" "+"00:00:00'";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    quantity_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
    quantity=quantity_str.quantity;
    //console.log(quantity)
    return quantity;
}
    
function addMenu() {
    // have text entry points - will get these from front end code
    // get text from these fields
    let itemName = "";// get name from entry
    let itemPrice = 0;// get from entry
    let itemIngreds = "";// get from entry
    // check if each item ingredient exists in the database
    let individuals = itemIngreds.split(',');
    for(let i = 0; i < individuals.size(); i++){
        let name = individuals[i];
        pool.query("SELECT EXISTS()")
    }
    
    // send in query
    const query = "INSERT INTO menu VALUES('" + itemName +"', " + itemPrice +", '" + itemIngreds + "');";
    pool.query(query);
}

