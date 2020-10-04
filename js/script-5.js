const countryName = "АвСТРалия";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  console.log(country);
  switch (country) {
    case "Китай":
      country = CHINA;
      price = 100;
      //   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Австралия":
      country = AUSTRALIA;
      price = 170;
      //   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Индия":
      country = INDIA;
      price = 80;
      //   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Ямайка":
      country = JAMAICA;
      price = 120;
      //   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (country === CHINA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (country === AUSTRALIA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (country === INDIA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (country === JAMAICA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
