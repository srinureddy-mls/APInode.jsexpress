//server connection 

// const express=require('express')
// const cors=require('cors')
// const mysql=require('mysql')

// const app=express();
// app.use(express.json());
// app.use(cors());


// app.listen(8000 ,() =>{
//     console.log('server is running...!')
// })


// server check in ui localhost:8000

//-----database connected to  server  and creating table(node.js&express.js)

const express=require('express')
const cors=require('cors')
const mysql=require('mysql')

const app = express();
app.use(express.json());
app.use(cors());
 
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"sree"
  
})

db.connect (function (err) {
    if(err)throw err;
    console.log("Connected..!");
    const sql="CREATE TABLE sreetable(id int AUTO_INCREMENT PRIMARY KEY, Product_Name  VARCHAR(255),Product_cost  VARCHAR(255),Person_age  VARCHAR(25),Order_date  VARCHAR(50),Product_image BLOB(200))";
    db.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("Table created...!")
    });

});
//------create database-- and -- table 

// app.get('/create',(res,req)=>{
//     const sql="CREATE DATABASE base";
//     db.query(sql,(err,result)=>{
//         res.send("Database is created...!");
//     });
// });
// app.get('/table',(res,req)=>{
//     const sql="CREATE TABLE profile(id int AUTO_INCREMENT,fullname VARCHAR(255),address VARCHAR(255),PRIMARY KEY(id))";
//     db.query(sql,(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//         res.send("table created...!")
//     }) ;
// });


 
app.listen(3000 ,() =>{
    console.log('server is running...!')
})