  const Uzcard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
   return '**** **** **** ' + last;
  };

  console.log(Uzcard(8600123456789101));

  //8600 ******** 9101

