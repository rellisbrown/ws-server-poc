const { faker } = require('@faker-js/faker');

const createRange = (value, range) => {
  return faker.finance.amount(value - range / 2, value + range / 2, 0);
};

const getCurrencyList = () => {
  return [
    {
      id: 1,
      title: 'PLN',
      projected: createRange(574, 20),
      actual: createRange(42, 20),
      projFailing: createRange(-6621, 200),
      actFailing: createRange(-14096, 500),
      trVolume: createRange(20, 5),
      time: '09:30',
    },
    {
      id: 2,
      title: 'BGN',
      projected: createRange(5000, 500),
      actual: createRange(4000, 500),
      projFailing: createRange(-3000, 400),
      actFailing: createRange(-2000, 300),
      trVolume: createRange(20, 5),
      time: '10:00',
    },
    {
      id: 3,
      title: 'DKK',
      projected: createRange(-106341, 1000),
      actual: createRange(-5395, 500),
      projFailing: createRange(-70436, 700),
      actFailing: createRange(-44697, 1000),
      trVolume: createRange(24, 5),
      time: '10:30',
    },
    {
      id: 4,
      title: 'EUR',
      projected: createRange(164005, 2000),
      actual: createRange(-1006, 100),
      projFailing: createRange(-567853, 5000),
      actFailing: createRange(-367400, 5000),
      trVolume: createRange(144, 20),
      time: '11:00',
    },
    {
      id: 5,
      title: 'BHD',
      projected: createRange(150, 30),
      actual: createRange(200, 50),
      projFailing: createRange(100, 20),
      actFailing: createRange(100, 20),
      trVolume: createRange(100, 20),
      time: '17:00',
    },
    {
      id: 6,
      title: 'CZK',
      projected: createRange(54, 20),
      actual: createRange(-254, 50),
      projFailing: createRange(-345458, 5000),
      actFailing: createRange(45, 20),
      trVolume: createRange(35, 20),
      time: '17:00',
    },
    {
      id: 7,
      title: 'JPY',
      projected: createRange(56, 20),
      actual: createRange(-254, 50),
      projFailing: createRange(-345458, 5000),
      actFailing: createRange(45, 20),
      trVolume: createRange(0, 5),
      time: '17:30',
    },
    {
      id: 8,
      title: 'INR',
      projected: createRange(56, 20),
      actual: createRange(-254, 50),
      projFailing: createRange(-345458, 5000),
      actFailing: createRange(45, 20),
      trVolume: createRange(0, 5),
      time: '18:00',
    },
    {
      id: 9,
      title: 'ZAR',
      projected: createRange(100, 20),
      actual: createRange(500, 50),
      projFailing: createRange(1000, 200),
      actFailing: createRange(50, 20),
      trVolume: createRange(20, 5),
      time: '07:30',
    },
    {
      id: 10,
      title: 'ABC',
      projected: createRange(100, 20),
      actual: createRange(500, 50),
      projFailing: createRange(1000, 200),
      actFailing: createRange(50, 20),
      trVolume: createRange(20, 5),
      time: '23:30',
    },
  ];
};

module.exports = { getCurrencyList };
