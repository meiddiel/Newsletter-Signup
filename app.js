//jslint esversionv:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  
  var options = {
    url:'https://us9.api.mailchimp.com/3.0/lists/38afe7fe55',
    method:'post',
    headers:{
      'Authorization': 'Meiddiel 877867563316e2bb30bce3cc5d2a0e79'
    }
  };

  request(options, function(error, response, body){
    if (error){
      console.log(error);
    } else {
      console.log(response.statusCode);
    }
  });
});
  
app.listen(port, function(){
  console.log('Server is running on port ' + port);
});

