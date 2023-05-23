const User = require("./user-model");

const lgas = [
  "",
  "Brass",
  "Ekeremor",
  "Kolokuma/Opokuma",
  "Nembe",
  "Ogbia",
  "Sagbama",
  "Southern Ijaw",
  "Yenagoa",
];

const Plans = ["", "monthly", "daily", "yearly"];

const paymentText = `CON Payment Plan
1. Daily (₦20)
2. Monthly(₦520)`;

const enterNameText = "CON Enter FullName";

const transactions = {
  start: (res, phoneNumber) => {
    res.send(
      `CON Welcome to 360 Health Insurance
    1. Register
    2. BHIS Number
    3. Payment Summary`
    );
    User.create({ _id: phoneNumber });
  },

  1: (res) =>
    res.send(`CON Local Govt Area
  1. Brass
  2. Ekeremor
  3. Kolokuma/Opokuma
  4. Nembe
  5. Ogbia
  6. Sagbama
  7. Southern Ijaw
  8. Yenagoa`),

  //after choosing in lga
  "1*1": (res, phoneNumber) => {
    res.send(paymentText);
    User.findByIdAndUpdate(phoneNumber, { lga: lgas[1] });
  },
  "1*2": (res, phoneNumber) => {
    res.send(paymentText);
    User.findByIdAndUpdate(phoneNumber, { lga: lgas[2] });
  },

  "1*3": (res, phoneNumber) => {
    res.send(paymentText);
    User.findByIdAndUpdate(phoneNumber, { lga: lgas[3] });
  },

  //after choose payment plan
  "1*1*1": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[1] });
  },

  "1*1*2": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[2] });
  },

  "1*2*1": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[1] });
  },

  "1*2*2": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[2] });
  },

  "1*3*1": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[1] });
  },

  "1*3*2": (res, phoneNumber) => {
    res.send(enterNameText);
    User.findByIdAndUpdate(phoneNumber, { paymentPlan: Plans[2] });
  },

  2: (res, phoneNumber) => {
    res.send(`Your BHIS Reg No is: BYS${phoneNumber}`);
  },
};

module.exports = transactions;
