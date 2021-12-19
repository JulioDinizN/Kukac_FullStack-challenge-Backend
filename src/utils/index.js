const axios = require('axios');

module.exports.printPalindromesBetweenTwoNumbers =
  function printPalindromesBetweenTwoNumbers(numero1, numero2) {
    let array = [];

    for (let i = numero1; i <= numero2; i++) {
      if (Palindrome(i)) {
        array.push(i)
      }
    }

    return array;
  };

function Palindrome(i) {
  var rem,
    temp,
    final = 0;
  var number = Number(i);

  temp = number;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    return true;
  } else {
    return false;
  }
}

module.exports.changeBills = function changeBills(price, payment) {
  const billValues = [100, 10, 1];

  let totalChangeBills = [0, 0, 0];

  const change = payment - price;

  var changeTemp = change;

  for (let i = 0; changeTemp !== 0; i) {
    if (changeTemp >= billValues[i]) {
      changeTemp = changeTemp - billValues[i];

      totalChangeBills[i] = totalChangeBills[i] + 1;
    } else {
      i++;
    }
  }

  return {
    bills: {
      hundred: totalChangeBills[0],
      ten: totalChangeBills[1],
      one: totalChangeBills[2]
    },
    price: Number(price),
    payment: Number(payment),
    change: change,
  };
};

module.exports.getCep = async function getCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data
  } catch (error) {
    return { error: error.message }
  }
};
