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
  if (text == '') transactions.start(res);

  transactions[text](res);

  if (!transaction[text]) res.status(400).send('Bad request!');
});

const port = process.env.PORT || 3003;

connectToDb().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});
