  const Uzcard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
   return '**** **** **** ' + last;
  };

  console.log(Uzcard(8600123456789101));

  //8600 ******** 9101



  function repearStr(str, num){
    for (let i = 0; i < num; i++){
         console.log(str +(i+1))


    }
}

let a = "hello "
repearStr(a, 6)

