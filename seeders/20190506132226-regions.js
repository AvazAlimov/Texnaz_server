function getRegions(provinceId, names) {
  return names.map(name => ({ provinceId, name }));
}

const regions = [{ provinceId: 1, name: 'Надо изменить' }].concat(
  // Андижанская область
  getRegions(1, [
    'Андижанская область',
    'Buloqboshi tuman',
    'Asaka tuman',
    'Baliqchi tuman',
    'Izbosgan tuman',
    'Andijon shahar',
    'Paxtaobod tuman',
    'Andijon tuman',
    'Jalaquduq tuman',
    'Marhamat tuman',
    'Qo`rg`ontepa tuman',
    'Shaxrixon tuman',
    'Viloyat tassarrufidagi muassasalar',
    'Xo`jaobod tumani',
    'Bo`z tumani',
    'Xonabod shahar',
    'Oltinko`l tuman',
    'Ulug`nor tuman',
    'Qorasuv shahar',
  ])
  // Бухарская область
    .concat(
      getRegions(2, [
        'Бухарская область',
        'Kogon tumani',
        'Buxoro tumani',
        'Olot tumani',
        'Peshku tumani',
        'Shofirkon tuman',
        'Romitan tumani',
        'G`ijduvon tuman',
        'Qorovulbozor tuman',
        'Kogon shahar',
        'Buxoro shahar',
        'Vobkent tumani',
        'Jondor tumani',
        'Qorako`l tumani',
      ]),
    )
  // Ферганская область
    .concat(
      getRegions(3, [
        'Ферганская область',
        'Yozyovon tuman',
        'Rishton tuman',
        'Quva tuman',
        'Furqat tuman',
        'Toshloq tuman',
        'Farg`ona shahar',
        'Farg`ona tumani',
        'Uchko`prik tuman',
        'O`zbekiston tuman',
        'Marg`ilon shahar',
        'Buvayda tuman',
        'Dang`ara tuman',
        'Oltiariq tuman',
        'Quvasoy shahar',
        'So`x tuman',
        'Qo`shtepa tuman',
        'Bag`dod tuman',
        'Qo`qon shahar',
        'Beshariq tuman',
        'Viloyat tassarrufidagi muassasalar',
      ]),
    )
  // Джиззахская область
    .concat(
      getRegions(4, [
        'Джиззахская область',
        'Baxmal tuman',
        'Zafarobod tuman',
        'Sh.Rashidov tuman',
        'Forish tuman',
        'Do`stlik tuman',
        'Paxtakor tumani',
        'Jizzax shahar',
        'Arnasoy tuman',
        'Zomin tuman',
        'Zarbdor tumani',
        'G`allaorol tuman',
        'Mirzacho`l tuman',
        'Yangiobod tuman',
      ]),
    )
  // Наманганская область
    .concat(
      getRegions(5, [
        'Наманганская область',
        'Norin tuman',
        'Uychi tuman',
        'Namangan tuman',
        'Chust tuman',
        'Mingbuloq tuman',
        'Namangan shahar',
        'Uchqo`rg`on tuman',
        'Chortoq tuman',
        'To`raqo`rg`on tuman',
        'Pop tuman',
        'Yangiqo`rg`on tuman',
        'Kosonsoy tuman',
        'Viloyat tassarrufidagi muassasalar',
      ]),
    )
  // Навоийская область
    .concat(
      getRegions(6, [
        'Навоийская область',
        'Karmana tuman',
        'Navoiy shahar',
        'Tomdi tuman',
        'Zarafshon shahar',
        'Qiziltepa tuman',
        'Uchquduq tuman',
        'Navbahor tuman',
        'Xatirchi tuman',
        'Konimex tuman',
        'Nurota tuman',
      ]),
    )
  // Кашкадарьинская область
    .concat(
      getRegions(7, [
        'Кашкадарьинская область',
        'Dehqonobod tuman',
        'Mirishkor tuman',
        'G`uzor tuman',
        'Qarshi tuman',
        'Nishon tuman',
        'Yakkabog` tuman',
        'Shahrisabz tuman',
        'Kitob tuman',
        'Qamashi tuman',
        'Kasbi tuman',
        'Chiroqchi tuman',
        'Koson tuman',
        'Muborak tuman',
        'Qarshi shahri',
        'Shahrisabz shahri',
      ]),
    )
  // Каракалпакстан
    .concat(
      getRegions(8, [
        'Каракалпакстан',
        'Chimboy tumani',
        'Xo`jayli tumani',
        'Qanliko`l tumani',
        'Amudaryo tumani',
        'Nukus shahri',
        'Qorao`zak tumani',
        'Nukus tumani',
        'To`rtko`l tumani',
        'Kegeyli tumani',
        'Qo`ng`irod tumani',
        'Beruniy tumani',
        'Mo`ynok tumani',
        'Ellikqal’a tumani',
        'Shumanoy tumani',
        'Taxtakupir tumani',
        'Taxiatosh shahri',
      ]),
    )
  // Самаркандская область
    .concat(
      getRegions(9, [
        'Самаркандская область',
        'Paxtachi tuman',
        'Pastdarg`om tuman',
        'Ishtixon tuman',
        'Qo`shrabot tuman',
        'Payariq tuman',
        'Narpay tuman',
        'Urgut tuman',
        'Samarqand shahar',
        'Oqdaryo tuman',
        'Tayloq tuman',
        'Kottaqo`rg`on shahar',
        'Bulung`ur tuman',
        'Kattaqo`rg`on tuman',
        'Jomboy tuman',
        'Samarqand tuman',
        'Nurobod tuman',
      ]),
    )
  // Сырдарьинская область
    .concat(
      getRegions(10, [
        'Сырдарьинская область',
        'Boyovut tuman',
        'Xovos tuman',
        'Sayxunobod tumani',
        'Oqoltin tuman',
        'Yangier shahar',
        'Sirdaryo tumani',
        'Guliston shahar',
        'Mirzaobod tuman',
        'Guliston tumani',
        'Sardoba tuman',
      ]),
    )
  // Сурхандарьинская область
    .concat(
      getRegions(11, [
        'Сурхандарьинская область',
        'Angor tuman',
        'Uzun tuman',
        'Termiz tuman',
        'Denov tuman',
        'Sherobod tuman',
        'Oltinsoy tuman',
        'Sariosiyo tuman',
        'Sho`rchi tuman',
        'Jarqo`rg`on tuman',
        'Qumqo`rg`on tuman',
        'Termiz shahar',
        'Boysun tuman',
        'Qiziriq tuman',
        'Muzrabot tuman',
      ]),
    )
  // г. Ташкент
    .concat(
      getRegions(12, [
        'г.Ташкент',
        'Uchtepa tuman',
        'Yashnobod tuman',
        'Olmazor tuman',
        'Chilonzor tuman',
        'Shayxontoxur tuman',
        'Yunusobod tuman',
        'Mirobod tuman',
        'Yakkasaroy tuman',
        'Bektemir tumani',
        'Mirzo-Ulug`bek tumani',
        'Sergeli tuman',
      ]),
    )
  // Ташкентская область
    .concat(
      getRegions(13, [
        'Ташкентская область',
        'Parkent tuman',
        'Yuqorichirchiq tuman',
        'Oqqo`rg`on tuman',
        'Chinoz tuman',
        'Olmaliq shahar',
        'Piskent tuman',
        'Angren shahar',
        'Qibray tuman',
        'O`rtachirchiq tuman',
        'Yangiyo`l tuman',
        'Bekobod shahar',
        'Ohangaron tuman',
        'Toshkent tumani',
        'Quyichirchiq tuman',
        'Yangiyo`l shahar',
        'Bekobod tuman',
        'Zangiota tuman',
        'Nurafshon shahar',
        'Bo`ka tuman',
        'Chirchiq shahar',
        'Ohangaron shahar',
        'Bo`stonliq tuman',
      ]),
    )
  // Хорезмская область
    .concat(
      getRegions(14, [
        'Хорезмская область',
        'Xiva tuman',
        'Shovot tuman',
        'Urganch shaxar',
        'Xonqa tuman',
        'Yangibozor tuman',
        'Urganch tumani',
        'Qo`shko`pir tuman',
        'Bog`ot tuman',
        'Yangiariq tuman',
        'Xiva shahri',
        'Gurlan tuman',
        'Hozarasp tuman',
      ]),
    )
    .concat(getRegions(15, [
      'г.Денау',
    ]))
    .concat(getRegions(16, [
      'г.Коканд',
    ])),
);

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Regions', regions, {}),

  down: queryInterface => queryInterface.bulkDelete('Regions', null, {}),

  getRegions: () => regions.map(region => region.name),

  getProvinceId: regionId => regions[regionId].provinceId,
};
