const brands = [
  {
      "id": "1",
      "name": "Rogneda",
      "manufacturer": "Rogneda",
      "country": "Россия"
  },
  {
      "id": "2",
      "name": "Ralex",
      "manufacturer": "Ralex",
      "country": "Россия"
  },
  {
      "id": "3",
      "name": "Polchem",
      "manufacturer": "Aypol",
      "country": "Турция"
  },
  {
      "id": "4",
      "name": "Казань пороховой",
      "manufacturer": "КП",
      "country": "Россия"
  },
  {
      "id": "5",
      "name": "Иран",
      "manufacturer": "Иран",
      "country": "Иран"
  },
  {
      "id": "6",
      "name": "Москва (Master)",
      "manufacturer": "Мастер",
      "country": "Россия"
  },
  {
      "id": "7",
      "name": "Интерсинтез",
      "manufacturer": "Интерсинтез",
      "country": "Россия"
  },
  {
      "id": "8",
      "name": "Химавто",
      "manufacturer": "Химавто",
      "country": "Россия"
  },
  {
      "id": "9",
      "name": "Дзержинский",
      "manufacturer": "Дзержинский",
      "country": "Россия"
  },
  {
      "id": "10",
      "name": "Россия",
      "manufacturer": "Россия",
      "country": "Россия"
  },
  {
      "id": "11",
      "name": "DUBAI Arab Emirat",
      "manufacturer": "ОАЭ",
      "country": "ОАЭ"
  },
  {
      "id": "12",
      "name": "Церта Патина",
      "manufacturer": "Церта",
      "country": "Россия"
  },
  {
      "id": "13",
      "name": "Белгород",
      "manufacturer": "Россия",
      "country": "Россия"
  },
  {
      "id": "14",
      "name": "Китай",
      "manufacturer": "Китай",
      "country": "Китай"
  }
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', brands, {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),

  getBrands: () => brands,
};
