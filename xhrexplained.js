//Creating a XHR object
var req = new XMLHttpRequest();

//Open a connection
//TRUE boolean is used so that in case of data is missing in between, it should not effect the execution of the program
req.open("GET", "https://restcountries.com/v3.1/all", true);

//Send the connection, send the request
req.send();

// Once data is received successfully from the server, the action to be taken with the data is stored in a function and is loaded into a global event handler 'onload'
// Data from server is in string format
// to convert it into a js object we use json parse
// this means current
req.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  //for(var i=0; i<data.length; i++){
  //	console.log(data[i].name.common);
  //}
};
