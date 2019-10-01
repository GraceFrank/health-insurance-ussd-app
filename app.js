const express = require('express');
const bodyParser = require('body-parser');
const log = require('morgan');
const connectToDb = require('./connect-database');
const transactions = require('./transactions');

const app = express();

app.use(log('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  return res.send(
    `This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>`
  );
});

app.post('*', (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  if (text == '') {
    transactions.start();
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose account information you want to view
    1. Account number
    2. Account balance`;
    res.send(response);
  } else if (text == '2') {
    // Business logic for first level response
    let response = `END Your phone number is ${phoneNumber}`;
    res.send(response);
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001';
    // This is a terminal request. Note how we start the response with END
    let response = `END Your account number is ${accountNumber}`;
    res.send(response);
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance
    let balance = 'NGN 10,000';
    // This is a terminal request. Note how we start the response with END
    let response = `END Your balance is ${balance}`;
    res.send(response);
  } else {
    res.status(400).send('Bad request!');
  }
});

const port = process.env.PORT || 3003;

connectToDb().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});
