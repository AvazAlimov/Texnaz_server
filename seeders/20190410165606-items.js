module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Items', [
    {
      // name: 'SELÜLOZİK İPEK MAT VERNİK',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 1,
      quantity: 400,
      contract_price: 7.91,
      customs_price: 4,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SELÜLOZİK İPEK MAT VERNİK',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 2,
      quantity: 200,
      contract_price: 29.63,
      customs_price: 15.9,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SELÜLOZİK MAT VERNİK',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 3,
      quantity: 200,
      contract_price: 8.43,
      customs_price: 4,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SELÜLOZİK MAT VERNİK',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 4,
      quantity: 20,
      contract_price: 31.72,
      customs_price: 15.9,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL PARLAK VERN',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 5,
      quantity: 80,
      contract_price: 28.58,
      customs_price: 15.9,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL PARLAK VERN',
      // packing: 24,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 6,
      contract_price: 56.02,
      customs_price: 31.7,
      quantity: 50,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL KREM BOYA',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 7,
      contract_price: 39.15,
      customs_price: 21.6,
      quantity: 40,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL BEYAZ BOYA',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 8,
      contract_price: 37.84,
      customs_price: 21.6,
      quantity: 50,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL BEYAZ BOYA',
      // packing: 2.5,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 9,
      contract_price: 9.06,
      customs_price: 4.5,
      quantity: 100,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL DOLGU VERN',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 10,
      contract_price: 24.31,
      customs_price: 15.9,
      quantity: 50,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL DOLGU VERN',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 11,
      contract_price: 29.46,
      customs_price: 15.9,
      quantity: 100,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SEL DOLGU VERN',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 12,
      contract_price: 7.82,
      customs_price: 4,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU ASTAR BEYAZ',
      // packing: 18,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 13,
      contract_price: 27.65,
      customs_price: 27,
      quantity: 140,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU SERTLEŞTİRİCİ',
      // packing: 6,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 14,
      contract_price: 15.83,
      customs_price: 6.48,
      quantity: 140,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU SÜP PARLAK VER',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 15,
      contract_price: 23.82,
      customs_price: 18,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU SERTLEŞTİRİCİ',
      // packing: 12,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 16,
      contract_price: 35.41,
      customs_price: 21.6,
      quantity: 150,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU SERTLEŞTİRİCİ alternatif',
      // packing: 12,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 17,
      contract_price: 40,
      customs_price: 21.6,
      quantity: 50,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU EXTRA İMAT VERNİK',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 18,
      contract_price: 8.2,
      customs_price: 4.5,
      quantity: 20,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU SERTLEŞTİRİCİ',
      // packing: 0.75,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 19,
      contract_price: 2.67,
      customs_price: 0.81,
      quantity: 20,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'YAT VERN (PARLAK)',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 20,
      contract_price: 27.57,
      customs_price: 15.9,
      quantity: 100,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SENT PATİNA BOYASI SİYAH',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 21,
      contract_price: 8.65,
      customs_price: 5.4,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SENTETİK PATİNA BOYA OKSİT SARI',
      // packing: 3,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 22,
      contract_price: 8.65,
      customs_price: 5.4,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'SENT PATİNA BOYASI SİYAH',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 23,
      contract_price: 32.71,
      customs_price: 21.6,
      quantity: 30,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'İZOLENTE VERN',
      // packing: 5,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 24,
      contract_price: 20.93,
      customs_price: 7.5,
      quantity: 1,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'İZOLANTE SERT',
      // packing: 5,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 25,
      contract_price: 21.84,
      customs_price: 5.4,
      quantity: 1,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'POLCOLOR KOYU CEVİZ',
      // packing: 1,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 26,
      contract_price: 9.26,
      customs_price: 1,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'PU ÖZEL PARLAK VERNİK',
      // packing: 12,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 27,
      contract_price: 30.89,
      customs_price: 18,
      quantity: 100,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'POL SERTLEŞTİRİCİ',
      // packing: 12,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 28,
      contract_price: 42.71,
      customs_price: 12.96,
      quantity: 100,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'YAT VERN (PARLAK)',
      // packing: 2.5,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 29,
      contract_price: 6.04,
      customs_price: 3.3,
      quantity: 200,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'POLY DOLGU VERN',
      // packing: 10,
      excise: 0,
      tax: 10,
      vat: 20,
      cleaning: 0.20,

      productId: 30,
      contract_price: 40.25,
      customs_price: 13.2,
      quantity: 10,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'POLY HIZL',
      // packing: 0.25,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 31,
      contract_price: 1.71,
      customs_price: 0.7,
      quantity: 10,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
    {
      // name: 'POLY SERT',
      // packing: 0.25,
      excise: 0,
      tax: 0,
      vat: 20,
      cleaning: 0.20,

      productId: 32,
      contract_price: 1.71,
      customs_price: 0.7,
      quantity: 10,

      batchId: 1,
      cash_profitability: 5,
      non_cash_profitability: 5,
      income_tax: 12,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Items', null, {}),
};