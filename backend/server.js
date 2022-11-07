// connect to the database
const { query } = require('express');
const express = require('../node_modules/express');
const { Pool } = require('../node_modules/pg');
const dotenv = require('../node_modules/dotenv').config();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// Create express app
const app = express();
const port = 5000;
// Create pool
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

// Names for orders
firstName = ["\'Bob","\'Dylan","\'Brother","\'Bear","\'Guy","\'Ur","\'My","\'Same","\'Kim","\'Light","\'Queen","\'Waltuh"];
lastName =  ["Smith\'","Williams\'","Lopez\'","Keener\'","Petras\'","Brown\'","Ashtray\'","Asatryan\'",
            "Reitmeyer\'","Ha\'","Hak\'","Hawk\'","Mmmmmmmm\'","White\'","Mom\'"];

    // Attributes for the Order
    let orderItems = "";
    let rawPrice = 0.00;
    let tax = 0.00;
    let totalPrice = 0.00;
    let orderID;
    const customerName = getName();


// ***************** Functions directly related to the current Order *****************
    async function addItem(itemName){
        if(orderItems = ""){
            orderItems += itemName;
        }else{
            orderItems += "," + itemName;
        }
    }

    // get price and tax details
    async function updatePrice(itemName) {
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
            }})
        .then(()=>{
            itemPrice = price.item_price;
            rawPrice += roundTotal(itemPrice);
            // calculate tax
            console.log("itemPrice: " + itemPrice);
            let taxPrice = roundTotal(itemPrice * 0.0825);
            // Update amount being paid in taxes
            tax += taxPrice;
            // calculate order total
            totalPrice = roundTotal(parseFloat(itemPrice) + parseFloat(taxPrice));
            console.log("totalPrice: " + totalPrice + "\n tax: " + tax);
        });
    }

    // send orders to database
    async function sendOrder(paymentType, empName){
        // get time
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        time = time.substring(0, 8);
        let updatedDate = date + " " + time;
        cardNum = cardNumberGenerator(12);
        custName = getName();
        // for receipt: order_id, payment_type, total, date/timestamp, order_items, customer_name, card_number, employeee_name
        // for orders: order_id, total, timestamp
        getID();
        let query = "INSERT INTO receipts values(" + orderID + "," + paymentType + "," + totalPrice + ",'" + updatedDate + "','" + orderItems + "'," 
                                                 + custName + "," + cardNum + ",'" + empName + "');";
        // execute query
        let orderQuer = "INSERT INTO orders values(" + orderID + "," + totalPrice + ",'" + updatedDate +"');";
        if(orderItems != ""){
            pool.query(query)
            .then(()=>{
                pool.query(orderQuer)
            })
            .then(()=>{
                // Subtracts inventory items used up in this order
                updateInventory(orderItems);
                return 1;
            })
        }
    
        return 0;
    }
// *************************************************************************************



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cardNumberGenerator(cardlen){
    cardNumber = "\'"
    for (let i = 0; i < cardlen; i++){
        cardNumber += getRandomInt(10) 
    }
    cardNumber += "\'"

    return cardNumber
}

function getName() {
    let numFirst = getRandomInt(firstName.length)
    let numLast = getRandomInt(lastName.length)
    let fullName = firstName[numFirst] + " " + lastName[numLast];

    return fullName;
}

// adding new items to menu
let itemID;
async function addMenu(itemName, itemPrice, itemIngreds) {
    await getItemID()
    .then(()=>{
        // send in query
        const query = "INSERT INTO menu VALUES(" +itemID + ",'" + itemName +"', " + itemPrice +", '" + itemIngreds + "');";
        console.log(query);
        pool.query(query);
    })
    
    // check if each item ingredient exists in the database
    //let individuals = itemIngreds.split(',');
    // for(let i = 0; i < individuals.length; i++){
    //     let name = individuals[i];
    //     let exists;
    //     pool.query("SELECT EXISTS(SELECT FROM ingredients where ingredient_name = '" + name + "');").then(query_res => {
    //         for (let i = 0; i < query_res.rowCount; i++){
    //             exists = query_res.rows[i];
    //             console.log(query_res.rows[i]);
    //         }
    //         if(!exists.exists){
    //             addInventoryItem(name);
    //         }
    //     });
    // }
}

async function getItemID() {
    console.log("IN GETITEMID");
    let newID;
    pool
    .query("SELECT max(item_id) FROM menu;")
    .then(query_res => {
        for (let i = 0; i < query_res.rowCount; i++){
            newID = query_res.rows[i];
            console.log(query_res.rows[i]);
        }})
    .then(()=>{
        console.log("FINISHED WITH GETITEMID");
        itemID = newID.max+1;
        //return newID.max+1;
    }) 
}

function getID() {
    let newID;
    pool
    .query("SELECT max(order_id) FROM receipts;")
    .then(query_res => {
        for (let i = 0; i < query_res.rowCount; i++){
            newID = query_res.rows[i];
            console.log(query_res.rows[i]);
        }}).then(()=>{
            orderID = newID.order_id + 1;
            // return orderID;
        });
}

function roundTotal(num){
    let newNum = "";
    let currNum = "";
    currNum += num;
    let numDigs = 0;
    let hitDeci = false;
    for(let char of currNum){
        newNum += char;
        if(char == '.'){
            hitDeci = true;
        }
        if(hitDeci){
            numDigs++;
        }
        if(numDigs == 3){
            break;
        }
    }
    return parseFloat(newNum);
}

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
    query_str ="SELECT count(order_items) AS quantity FROM receipts where order_items like'%"+item +"%'and timestamp between '"+date1+" "+"00:00:00' and '"+date2+" "+"00:00:00';";
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

//all receipts
async function receipts(){
    query_str = "SELECT * FROM receipts;";
    receipts=[];
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    receipts.push(query_res.rows[i]);
                    //console.log(query_res.rows[i]);
                }});
    //console.log(receipts[1])
    return receipts;
}

//get all the ingredients in id order
async function getInventoy(){
    query_str = "SELECT * FROM ingredients ORDER BY ingredient_id;";
    inventory=[];
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    inventory.push(query_res.rows[i]);
                    //console.log(query_res.rows[i]);
                }});
    //console.log(inventory[1])
    return inventory;
}

//get all the menu items in id order
async function getMenu(){
    query_str = "SELECT * FROM menu ORDER BY item_id;";
    menuItems=[];
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    menuItems.push(query_res.rows[i]);
                    //console.log(query_res.rows[i]);
                }});
    //console.log(menuItems[1])
    return menuItems;
}

//get all the receipts between two dates
async function combosData(date1, date2){
    query_str = "SELECT * FROM receipts where timestamp between '"+date1+" "+"00:00:00' and '"+date2+" "+"00:00:00';";
    receipts=[];
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    receipts.push(query_res.rows[i]);
                    //console.log(query_res.rows[i]);
                }});
    //console.log(receipts[1])
    return receipts;
}

//gets the quantity in the inventory of a particular item
async function inventoryQuantity(item){
    quantity_str="";
    query_str ="SELECT quantity as quan FROM ingredients where name = '"+item+"';";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    quantity_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
    quantity=quantity_str.quan;
    console.log(quantity)
    return quantity;
}

//get the ingredients used of a specific item
async function ingredientsUsed(item){
    ingredients_str="";
    query_str ="SELECT ingredients_used FROM menu WHERE item_name ='" + item +"';";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    ingredients_str=query_res.rows[i];
                    //console.log(query_res.rows[i]);
                }});
    ingredients=ingredients_str.ingredients_used;
   // console.log(ingredients)
    return ingredients;
}

//get the price of an item, returns price as an int
async function getPrice(item){
    query_str = "select item_price AS price from menu where item_name= '"+item+"';";
    price_str="";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    price_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
    price=price_str.price;
    //console.log(price)
    return price;
}

//get the quantity of an item from ingredients, returns quantity as an int
async function getQuantity(item){
    query_str = "SELECT quantity as quan FROM ingredients where name = '"+item+"';";
    quantity_str="";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    quantity_str=query_res.rows[i];
                    console.log(query_res.rows[i]);
                }});
    quantity=quantity_str.quan;
    //console.log(quantity)
    return quantity;
}

//gets the pinpad entry and returns a person with its name, id(pinpad), and role(manager or employee)
async function employeeType(id){
    let person ={};
    employee_name="";
    query_str="SELECT employee_name from employees where employee_id = "+ id +";";
    await pool
            .query(query_str)
            .then(query_res => {
                for (let i = 0; i < query_res.rowCount; i++){
                    employee_name=query_res.rows[i];
                    console.log(query_res.rows[i]);
                    person.name=employee_name.employee_name;
                }});
    person.id=id;
    if(person.name =="Reagan R" || person.name =="Lightfoot" ){
        person.role="Manager";
    }else{
        person.role="Employee";
    }
    // console.log(person.name);
    // console.log(person.id);
    // console.log(person.role);
    return person;
}

async function main(){
    // updates price and orderitems
    app.post("/addItem",jsonParser,(req,res)=>{
        updatePrice(req.body.itemName);
        addItem(req.body.itemName)
        .then(()=>{
            res.send("Successfully added item to order");
        })
    })

    // sends final order in to database
    app.post("/sendOrder",jsonParser,(req,res)=> {
        sendOrder(req.body.paymentType, req.body.empName)
        .then(() => {
            res.send("Howdy");
        })
    })

    // Adds new menu items
    app.post("/newItem",jsonParser,(req,res)=>{
        addMenu(req.body.itemName,req.body.itemPrice,req.body.itemIngreds)
        .then(()=>{
            res.send("Successfully added new menu item");
        })
    })

    app.listen(port,()=> console.log(`Listening to port ${port}`));
}

//main();