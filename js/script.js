// const Uzcard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return '**** **** **** ' + last;
// };

// console.log(Uzcard(8600123456789101));

//  //8600 ******** 9101
const maskCreditCard = function (number) {
  const cardNumber = String(number);
  const length = cardNumber.length;

  if (length < 15 || length > 16) {
    throw "Invalid Number of Digits";
  }

  const [input, lastDigits] = cardNumber.match(/\d{12}(\d+)/);

  return `**** **** **** ${lastDigits}`;
};
