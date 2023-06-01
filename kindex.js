var databaseUrl = "mongodb://127.0.0.1:27017/Sample";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected");

exports.savekuser = function(name,ar,email,Cus_city,adrs,Cus_State,cntry,pin,pno,qty) {
    console.log('Saving user to mongo');
    db.users.insert({ "username": name, "Area": ar,"Email":email,"City":Cus_city,"Address":adrs,"State":Cus_State,"Country":cntry,"PIN Code": pin,"Phone No":pno,"Quantity":qty }, function(err, saved) {
        if (err || !saved) {
            console.log(err);
           
        } else {
            console.log("User saved");
            console.log(name);
            console.log(ar);
            
        }
    });
};