
// //---insert data ----

// const mysql=require('mysql');

// const db =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root123",
//     database:"mydatabase"
// });
// db.connect (function (err) {
//     if(err)throw err;
//     console.log("Connected..!");
//     // const sql="INSERT INTO mytable2(name,address) Values('srinu','uppalapadu vg owk md nandyal dt')";
//     const sql="INSERT INTO mytable(name,address) Values ?"
//     var values = [
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//       ];
//     db.query(sql,[values],(err,result)=>{
//         if(err)throw err;
//         console.log("Data inserted...!",result.affectedRows);
//     });

// });

// //---select from----

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name,address FROM mytable", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //-----where--- 1 
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM mytable WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //-----where----2 starts with 'S'
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM mytable WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //----order by----desc
// // 

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //---delete----
// // 
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });


// //----drop table ------
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE mytable2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

// //---update table----

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE mytable SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

// //--limit  the result---

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //----in between---
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "mydatabase"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM mytable LIMIT 2, 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });