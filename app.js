const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
        .then(()=> {console.log("DB OK")})
        .catch((err) => {console.log(err)});

app.post("/auth", (req,res)=> {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'storbook@gmail.com',
    pass: '17'
  }
});

var mailOptions = {
  from: 'XYZ',
  to: 'sagarsc17@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});


app.listen(3000, ()=> {
  console.log("Connected");
})