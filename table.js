
// const mysql=require('mysql');


// const db =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root123",
//     database:"sree"
// })

// db.connect (function (err) {
//     if(err)throw err;
//     console.log("Connected..!");
//     const sql="CREATE TABLE product6(id int AUTO_INCREMENT PRIMARY KEY, Product_Name  VARCHAR(255),Product_cost  VARCHAR(255),Person_age  VARCHAR(25),Order_date  VARCHAR(50),Product_image BLOB(200))";
//     db.query(sql,(err,result)=>{
//         if(err)throw err;
//         console.log("Table created...!")
//     });

// });