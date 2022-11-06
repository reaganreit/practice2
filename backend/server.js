// connect to the database
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
// teammembers = [];
//     pool
//         .query('SELECT * FROM menu;')
//         .then(query_res => {
//             for (let i = 0; i < query_res.rowCount; i++){
//                 teammembers.push(query_res.rows[i]);
//                 console.log(query_res.rows[i]);
//             }});

updateInventory("Veggie Bowl,Butter Chicken Bowl");


const Order = (()=>{
    let orderItems = "";
    let rawPrice = 0.00;
    let tax = 0.00;
    let totalPrice = 0.00;
    const orderID = getID(); // TODO: MAKE THIS FUNCTION
    const customerName = "";


    const addItem = () =>{

    }

    // get price and tax details
    const updatePrice = () => {
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

// send orders to database
function sendOrder(orderItems) {
    // get order items
    // get time
    // get name
    // format query
    // execute query
    updateInventory(orderItems);
}

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
           query = "SELECT quantity FROM ingredients WHERE name ='" + ingred[j] +"';";
           await pool
            .query(query)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    quant_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
            quant=quant_str.quantity; //int
            quant-=1; //update
            console.log(quant);
            // Update value of that item
            query = "UPDATE ingredients SET quantity = " + quant+ " WHERE name = '" + ingred[j] + "';";
            console.log(query);
            await pool.query(query)
        }
    }

    
}

