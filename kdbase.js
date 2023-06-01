var module = require('./dbkop');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
    var data1 = '';
    console.log("Hello JS ");
    request.on('data', function(chunk) { data1 += chunk; });
    request.on('end', function() {
        var qs = querystring.parse(data1);
        var name = qs['name'];
        var ar = qs['area'];
        var email = qs['email'];
        var Cus_city = qs['city'];
        var adrs = qs['address']; 
        var Cus_State = qs['state'];
        var cntry = qs['country'];
        var pin = qs['pincode'];
        var pno = qs['mobile'];
        var qty = qs['quantity'];
        console.log(name);
        console.log(Cus_city);

        if (request.url === '/login') {
            module.savekuser(name, ar, email, Cus_city, adrs, Cus_State, cntry, pin, pno, qty);
        }
    });
}).listen(3000);
console.log("Server started");