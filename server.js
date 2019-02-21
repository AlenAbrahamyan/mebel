const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alenabrahamyan0@gmail.com',
    pass: '077386613'
  }
});

var mailOptions = {
  from: 'alenabrahamyan0@gmail.com',
  to: 'alen.abrahamyan7@tumo.org',
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


const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/font', express.static('font'));
app.use('/fonts', express.static('fonts'));
app.use('/fancybox', express.static('fancybox'));
app.use('/jsfiles', express.static('jsfiles'));
app.use('/quiz', express.static('quiz'));
app.use('/img', express.static('img'));
app.use('/libs', express.static('libs'));

app.set('view engine', 'ejs');

var birthday = new Date();
var date1 = birthday.getDate();

app.get('/', (req, res) => {
    res.render('index', {tiv: date1});
});

app.post('/', urlencodedParser, (req, res) => {
    
  res.render('index', {data: req.body});
  console.log(req.body.phone);
  console.log(req.body.item11);
  
});


app.get('/quiz', (req, res) => {
  res.render('quiz');
});


app.get('/test', (req, res) => {
  res.render('test', {tiv: date1, url_code: req.query});
  console.log(req.query);
});


app.post('/test', urlencodedParser, (req, res) => {
    
  res.render('test', {data: req.body, url_code: req.query});
  console.log(req.body.step1);
  console.log(req.body.step2);
  console.log(req.body.step3);
  console.log(req.body.step4);
  console.log(req.body.step5);
  console.log(req.body.step6);
  console.log(req.body.phone);
 

});










app.listen(process.env.PORT || 3000, console.log("server start"));