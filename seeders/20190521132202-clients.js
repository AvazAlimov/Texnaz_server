const regions = require("./20190506132226-regions.js");

function gerRegionId(name) {
  const index = regions.getRegions().indexOf(name);
  const regionId = index > -1 ? index + 1 : 1;
  return regionId;
}

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "Clients",
      [
        {
          managerId: 2,
          icc: 8000,
          name: "Дониер Ака Мастер",
          itn: "",
          contactPerson: "Дониер Ака",
          phone: "(99894)6749500",
          regionId: gerRegionId("Ташкент"),
          sphere: "Отделочные работы"
          // 'Основные продукты': '',
        },
        {
          managerId: 2,
          icc: 8001,
          name: "Фарух Ака,БахтШот (IMPERIA OOO)",
          itn: "",
          contactPerson: "Фарух ака Бахшот",
          phone: "(99890)9269392 (97)703 58 18",
          regionId: gerRegionId("Ташкент, Зенит завод"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур Лакокраска,Растворитель,НЦ',
        },
        {
          managerId: 2,
          icc: 8002,
          name: "Александр Басеин",
          itn: "",
          contactPerson: "Александр",
          phone: "(99893)5861754",
          regionId: gerRegionId("Ташкент"),
          sphere: "Частник"
          // 'Основные продукты': 9,
        },
        {
          managerId: 2,
          icc: 8003,
          name: "Маруф Ака Zoko Stile ooo, Сагбон мебель",
          itn: "",
          contactPerson: "Маруф Ака,Абдукадыр ака",
          phone: "99 823 55 53,  983113533",
          regionId: gerRegionId("Ташкент, Алмазарский район"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Растворитель646, Нц, Полчем',
        },
        {
          managerId: 2,
          icc: 8004,
          name: "Рахим Хоз Маг",
          itn: "",
          contactPerson: "Рахим Ака",
          phone: "(998)90 3249490",
          regionId: gerRegionId("Той Тепа,г Центр"),
          sphere: "Магазин"
          // 'Основные продукты': 'Гарбид',
        },
        {
          managerId: 2,
          icc: 8005,
          name: "Сардор Ака Той Тепа Цех (Сардор Бизнес Инвест )несколько фирм",
          itn: "",
          contactPerson: "Сардор Ака",
          phone: "(998)90 300 56 21",
          regionId: gerRegionId("Той Тепа Корасу"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска',
        },
        {
          managerId: 2,
          icc: 8006,
          name: "Самат Той Тепа цех",
          itn: "",
          contactPerson: "Самат Ака",
          phone: "Сам359 0221 Хуршид 994 12 84",
          regionId: gerRegionId("Той Тепа, Корасу"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,расиворитель',
        },
        {
          managerId: 2,
          icc: 8007,
          name: "Сиродж Бассенин",
          itn: "",
          contactPerson: "Сиродж Ака",
          phone: "Сиродж 90 971 08 16",
          regionId: gerRegionId("Той Тепа"),
          sphere: "Частник"
          // 'Основные продукты': 9,
        },
        {
          managerId: 2,
          icc: 8008,
          name: "Саша Фурнитура",
          itn: "",
          contactPerson: "Саша",
          phone: "99 866 79 35",
          regionId: gerRegionId("Ташкент орентир джами"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
        },
        {
          managerId: 2,
          icc: 8009,
          name: "Мирсабид Ташми Мебельный цех",
          itn: "",
          contactPerson: "Мирсабид Ака",
          phone: "90 186 33 08",
          regionId: gerRegionId("Ташкент орентир джами"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,1',
        },
        {
          managerId: 2,
          icc: 8010,
          name: "Достон Ака,  Бахтиер ака Северный Алмазар",
          itn: "",
          contactPerson: "Достон Ака",
          phone: "Б 0593 548 1777 Д 918 44 58",
          regionId: gerRegionId("Ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска',
        },
        {
          managerId: 2,
          icc: 8011,
          name: "Хамдам Перепродажа",
          itn: "",
          contactPerson: "Хамдам Ака",
          phone: "97 131 01 01 97 131 01 04",
          regionId: gerRegionId("Ташкент"),
          sphere: "Перепродает"
          // 'Основные продукты': 'растворитель',
        },
        {
          managerId: 2,
          icc: 8012,
          name: "Гани Ака Мебельный цех",
          itn: "",
          contactPerson: "Гани",
          phone: "97 706 64 66",
          regionId: gerRegionId("Ташкент, чукурсай"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
        },
        {
          managerId: 2,
          icc: 8013,
          name: "BEELLEZZIO Джоволидин Ака",
          itn: "",
          contactPerson: "Джоволидин Ака",
          phone: "5,977,315,222",
          regionId: gerRegionId("Ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
        },
        {
          managerId: 2,
          icc: 8014,
          name: "Абдурахмон Ака Джами",
          itn: "",
          contactPerson: "Абдурахмон",
          phone: "97 707 88 48",
          regionId: gerRegionId("Ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,1',
        },
        {
          managerId: 2,
          icc: 8015,
          name: "Азиз (ШОШ мебель )",
          itn: "",
          contactPerson: "Азиз",
          phone: 946616006,
          regionId: gerRegionId("Ташкент, Эпадром орентир"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,2',
        },
        {
          managerId: 2,
          icc: 8016,
          name: "Бобур ака,Алишер ака фергана (Viss Brend)",
          itn: 306109324,
          contactPerson: "Бобур, Азиз, Алишер",
          phone: "90272 73 73 а 93 3737373 а 902747373",
          regionId: gerRegionId("фергана"),
          sphere: "Оптовик"
          // 'Основные продукты': '1,нитро краски, лаки,Полчем',
        },
        {
          managerId: 2,
          icc: 8017,
          name: "VAST CLEVER MCHJ",
          itn: 304668161,
          contactPerson: "Ахмеджаев АА",
          phone: "90 315 17 71 2790979",
          regionId: gerRegionId("Ташкент"),
          sphere: "Мебельное производство"
          // 'Основные продукты': 'Растворитель 646,нц, шкурка полчем',
        },
        {
          managerId: 2,
          icc: 8018,
          name: "Саид ака бектемир мебель",
          itn: "",
          contactPerson: "Саид Ака, Абдулазиз",
          phone: "90 315 93 39",
          regionId: gerRegionId("Ташкент,бектемир, орентир Девятка куйлюк"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,разбавитель',
        },
        {
          managerId: 2,
          icc: 8019,
          name: "Бекзод Ака Мебельный цех рай газ",
          itn: "",
          contactPerson: "Бекзод Ака",
          phone: "707 09 91",
          regionId: gerRegionId("Тапшкент,  рай газ улица, джами базар"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,разбавитель',
        },
        {
          managerId: 2,
          icc: 8020,
          name: "Albatros мебель Аскар ака",
          itn: "",
          contactPerson: "Аскар ака",
          phone: "90 915 07 57",
          regionId: gerRegionId("кушбеги улица ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,разбавитель,растворитель 646',
        },
        {
          managerId: 2,
          icc: 8021,
          name: "Classic Mebel (Ziyo Yulduz Mebel)",
          itn: 301459581,
          contactPerson: "Нодыр Ака, Боходыр ака,Рахим ака",
          phone: "99899 8156767 начальник 90 322 45 80",
          regionId: gerRegionId("назарбек,Ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,1,лак 218',
        },
        {
          managerId: 2,
          icc: 8022,
          name: "Камиль Ака Мебельный цех",
          itn: "",
          contactPerson: "Камиль",
          phone: "5,909,317,568",
          regionId: gerRegionId("ташкент"),
          sphere: "Мебельный цех"
          // 'Основные продукты': 'Тур,Лакокраска,1,лак 219',
        },
        {
          managerId: 2,
          icc: 8023,
          name: "Мурод Ака Сурхандарья",
          itn: "",
          contactPerson: "Мурод Ака",
          phone: "90 267 99 41",
          regionId: gerRegionId("Сурхандарья"),
          sphere: "Мебельный цех,Магазин"
          // 'Основные продукты': 'Порошковая краска',
        },
        {
          managerId: 2,
          icc: 8024,
          name: "холмурод джами клиент",
          itn: "",
          contactPerson: "Холмурод ака",
          phone: "90 187 47 66",
          regionId: gerRegionId("Ташкент,Джами бозор"),
          sphere: "перекупщик,магазин"
          // 'Основные продукты': 'краска',
        },
        {
          managerId: 2,
          icc: 1532,
          name: "Auto Respect Road",
          itn: 301330768,
          contactPerson: "Нурлан Асан",
          phone: 903312225,
          regionId: gerRegionId("Ташкент"),
          sphere: "разметка"
          // 'Основные продукты': 'раствори краска',
        },
        {
          managerId: 2,
          icc: 8025,
          name: "Антикорчи",
          itn: "",
          contactPerson: "",
          phone: "",
          regionId: gerRegionId(""),
          sphere: ""
          // 'Основные продукты': '',
        },
        {
          managerId: 2,
          icc: 8026,
          name: "JAMOAT ESHIKLARI",
          itn: "",
          contactPerson: "Тахир братан",
          phone: 939932087,
          regionId: gerRegionId("самарканд"),
          sphere: "мебельныцй цех"
          // 'Основные продукты': 'раствыор грунт 039 219',
        },
        {
          managerId: 2,
          icc: 8027,
          name: "Зокир бухара Мебельный",
          itn: "",
          contactPerson: "Зокир",
          phone: "91 409 04 01",
          regionId: gerRegionId("Бухара"),
          sphere: "мебельныцй цех"
          // 'Основные продукты': 'Полчем дали раствор',
        },
        {
          managerId: 2,
          icc: 8028,
          name: "Фарход Назарбек managerId: 2, icc 8028",
          itn: "",
          contactPerson: "Фарход ака",
          phone: "998,977,162,675",
          regionId: gerRegionId("Ташкент Назарбек с моста бальница,санаторий"),
          sphere: "мебельныцй цех"
          // 'Основные продукты': 'нц 218 раствуоритель',
        },
        {
          managerId: 2,
          icc: 8029,
          name: "Дониер Назарбек (Dream Style )",
          itn: 305958955,
          contactPerson: "Дониер",
          phone: 946475555,
          regionId: gerRegionId("Ташкент Назарбек с моста бальница"),
          sphere: "мебельныцй цех"
          // 'Основные продукты': 'растворитель лак, полчем',
        },
        {
          managerId: 2,
          icc: 8030,
          name: "Ровшан цех кокакнд",
          itn: "",
          contactPerson: "ровшан",
          phone: 936490585,
          regionId: gerRegionId("Коканд"),
          sphere: "мебельныцй цех"
          // 'Основные продукты': 'растворитель полчем нц',
        },
        {
          managerId: 2,
          icc: 8031,
          name: "Акмаль Ака Самарканд",
          itn: "",
          contactPerson: "Акмаль",
          phone: "933,435,006",
          regionId: gerRegionId("Самарканд"),
          sphere: "магазин"
          // 'Основные продукты': 'раствор полчем нц',
        },
        {
          managerId: 2,
          icc: 8032,
          name: "Дямшид Бек Изатило ака Андижан Оптаваик",
          itn: "",
          contactPerson: "Дямшид ака, Абдуллох, Изатула",
          phone: "9,14777666 972727050 97994 9437",
          regionId: gerRegionId("Андижон"),
          sphere: "Магазин"
          // 'Основные продукты': 'раствор нц',
        },
        {
          managerId: 2,
          icc: 8033,
          name: "Носир Мухамад МДФ корасу",
          itn: "",
          contactPerson: "Носир",
          phone: 903303834,
          regionId: gerRegionId("Корасу академия ташкент"),
          sphere: "Цех мебель"
          // 'Основные продукты': 'Полчем, раствор,нц',
        },
        {
          managerId: 2,
          icc: 8034,
          name: "Санджар Шохджохон Магазин Хорезм",
          itn: "",
          contactPerson: "Санджар",
          phone: "91 999 2728 94 2381314",
          regionId: gerRegionId("Хорезм"),
          sphere: "Магазин"
          // 'Основные продукты': 'полчем раствор нц',
        },
        {
          managerId: 2,
          icc: 8035,
          name: "Бахром сергили нц",
          itn: "",
          contactPerson: "бахром,доврон",
          phone: 974406551,
          regionId: gerRegionId("Сергили,базар"),
          sphere: "Магазин"
          // 'Основные продукты': 'нц раствопр полчем',
        },
        {
          managerId: 2,
          icc: 8036,
          name: "Фархад метал цех",
          itn: "",
          contactPerson: "фархад",
          phone: "935,157,930",
          regionId: gerRegionId("Ташкент"),
          sphere: "цех метал,частник"
          // 'Основные продукты': 'черная краска, 646',
        },
        {
          managerId: 2,
          icc: 8037,
          name: "Корасу Мебель файз (Иброхим Ака корасу )",
          itn: "",
          contactPerson: "Иброхим Ака",
          phone: "99 815 8415 94 415 8415",
          regionId: gerRegionId("Урта чирчик, Корасу"),
          sphere: "Цех Мебельный, Магазин"
          // 'Основные продукты': 'НЦ, Растворитель, Полчем',
        },
        {
          icc: 3001,
          managerId: 17,
          name: 'VOSTOK STROY DETAL" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1000,
          managerId: 16,
          name: 'ЯТТ "Хусанов М."(Урикзар Зафар)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1001,
          managerId: 16,
          name: "Урикзар Бекзод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1002,
          managerId: 16,
          name: "Самарканд Эркин",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1003,
          managerId: 16,
          name: "Фергана Бобур",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1004,
          managerId: 16,
          name: "Андижан Музафар",
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1005,
          managerId: 16,
          name: "Наманган Расул",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1006,
          managerId: 16,
          name: "Андижан Абдупатор",
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1007,
          managerId: 16,
          name: 'ЯТТ "Дадаханов А."(Андижан Абдусамад)',
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1008,
          managerId: 16,
          name: "Дильшод Килес",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1009,
          managerId: 16,
          name: 'ЯТТ "Мирмусаев Д."(Каканд Хуршид)',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1010,
          managerId: 16,
          name: "БМЖ Умид",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1011,
          managerId: 16,
          name: "Жиззак Дильшод",
          regionId: gerRegionId("Джизак"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1012,
          managerId: 16,
          name: "Жами Даврон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1013,
          managerId: 16,
          name: "Бек Топ Дильшод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1014,
          managerId: 16,
          name: "Фергана Обид",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1015,
          managerId: 16,
          name: "Сергели Ахат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1016,
          managerId: 16,
          name: 'ХК "Лидер Вика"(Наманган Захид)',
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1017,
          managerId: 16,
          name: 'ЯТТ "Холбеков Ш."(Андижан Абдужабор)',
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1018,
          managerId: 16,
          name: "ООО Стандарт Констракшен Материалс",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1019,
          managerId: 16,
          name: "Андижан Мумин",
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1020,
          managerId: 16,
          name: 'ЯТТ "Гиясов Д.Э."(Юнусабад Жамол)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1021,
          managerId: 16,
          name: 'ЯТТ "Сайпиев Ш."(Карши Шерали)',
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1501,
          managerId: 18,
          name:
            'ABZ INJINIRING" MCHJ,"TASHELEKTROSHIT" OAJ, "METALL ENGINEERING" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1502,
          managerId: 18,
          name: 'CHARTAK RENAISSANCE" MChJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1503,
          managerId: 18,
          name: "EL E`ZOZ MEBEL",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1504,
          managerId: 18,
          name: 'ELMASH" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1505,
          managerId: 18,
          name: "Fran Style",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2501,
          managerId: 19,
          name: 'АZIA- SPORT- S" ЧФ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2502,
          managerId: 19,
          name: "ENERGETIKLAR SIHATGOHI",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2503,
          managerId: 19,
          name: '"Luaga Servis Kommunal" ТСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2504,
          managerId: 19,
          name: 'Tong Shafagi-Servis" ТЧСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2505,
          managerId: 19,
          name: "Мирзо Улугбекский Саноат Касб хунар колледж",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2506,
          managerId: 19,
          name: 'Chirchiq Kommunal Servis" ООО',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2507,
          managerId: 19,
          name: "СНБ РУз",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2509,
          managerId: 19,
          name: 'ЧП "VERTEX DEVELOR GROUP',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2510,
          managerId: 19,
          name: 'GIDROGEOTEXNIKА" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2511,
          managerId: 19,
          name: 'TOSHELEKTROTEXMONTAJ" MChJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2512,
          managerId: 19,
          name: 'DENTA LAYN" MCHJ',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2513,
          managerId: 19,
          name: "Академик М.Мирзаев номли БУ ва ВИТИ Киб (ШАРОБ)",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2515,
          managerId: 19,
          name: "Узбекский НИИ Растеневодства",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2516,
          managerId: 19,
          name: 'INTEK" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2517,
          managerId: 19,
          name: 'Toshkent Issiqlik Markazi" АО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2518,
          managerId: 19,
          name: 'Toshkent Issiqlik Markazi" ГУП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2520,
          managerId: 19,
          name: "УВД Таш обл.",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2521,
          managerId: 19,
          name: 'Mehrinigor-Saidmir Kommunal" ТЧСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2522,
          managerId: 19,
          name: 'ЧП "BUSINESS ASIA SERVICE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2523,
          managerId: 19,
          name: 'RATIONAL BOILER" OOO',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2524,
          managerId: 19,
          name: 'OOO "YOGOCHSOZ SERVIS LYUKS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2525,
          managerId: 19,
          name: 'TASHVILYOLSANOAT" sanoat korxonasi',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2526,
          managerId: 19,
          name: "ЖИЭББ УЯ64/ТХ-1 Муассасаси",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2527,
          managerId: 19,
          name: 'TREST 12" MCHJ 50-QB',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2528,
          managerId: 19,
          name: "Учереждение УЯ 64/18 УИД МВД РУ(СБДО ГУИН МВД РУ)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2529,
          managerId: 19,
          name: 'ЧП"HIGH POWER TRADE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2530,
          managerId: 19,
          name: "Ташкентский Промышленный проф колледж",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2531,
          managerId: 19,
          name: 'ZAFAR KOMMUNAL SERVIS" ТЧСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2532,
          managerId: 19,
          name: 'AJ QK "DEUTSCHE KABEL AG TASCHKENT',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2533,
          managerId: 19,
          name: 'HOT TRADING GROUP" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2534,
          managerId: 19,
          name: "Учреждения УЯ 64/45",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2535,
          managerId: 19,
          name: 'SOVPLASTITAL" ОАО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2536,
          managerId: 19,
          name: '"OgneUpor" ООО ТПП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2537,
          managerId: 19,
          name: 'YAGONA INJENERLIK SERVISI" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2538,
          managerId: 19,
          name: 'GOLDEN STANDART BUSINESS" ХК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2539,
          managerId: 19,
          name: "NAVNIHOL KOMMUNAL МЧЖ ПБК",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2540,
          managerId: 19,
          name: "В/часть 41564",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2541,
          managerId: 19,
          name: 'PULAT MIRAKLE FURNITURE" ЧП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2542,
          managerId: 19,
          name: 'O`ZTRANSGAZ"АКУКШ "TOSHKENTGAZTA`MINOT" УК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2543,
          managerId: 19,
          name: 'APKOS" ЧП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2544,
          managerId: 19,
          name: "ДЮСШ №2",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2545,
          managerId: 19,
          name: 'ООО"ZAFAR MIX MEBEL',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2546,
          managerId: 19,
          name: 'OLTINSOY TA`MIR SERVIS" МЧЖ ПБК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2547,
          managerId: 19,
          name: 'TEGIRMON NOVVOYXONA JIHOZLARI" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2548,
          managerId: 19,
          name: 'MAHALLA" xayriya jamg`armasi',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2549,
          managerId: 19,
          name: 'STEEL TECHNOLOGY" ИП ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2550,
          managerId: 19,
          name: 'Art Furniture" СП ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2551,
          managerId: 19,
          name: 'Uzbekistan Airvays Technics" aviakorxonasi',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2552,
          managerId: 19,
          name: 'М. Ч. Ж. "PROF BUILDING PLUS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2553,
          managerId: 19,
          name: 'ZIYNAT DIZAYN" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2554,
          managerId: 19,
          name: 'GARANT MEBEL" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2555,
          managerId: 19,
          name: "Уз РФА Генетика ва УЭБ институти",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2556,
          managerId: 19,
          name: 'ART MEBEL GROUP" МCHJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2563,
          managerId: 19,
          name: "Центральная Многопрофильная Поликлиника",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2564,
          managerId: 19,
          name: "НГМК",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2565,
          managerId: 19,
          name: 'НГМК"-ПО НМЗ" НГМК',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2567,
          managerId: 19,
          name: 'Узметкомбинат" АЖ',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2570,
          managerId: 19,
          name: "ТЕРМЕЗ АЭРОПОРТ",
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2599,
          managerId: 19,
          name: "Войсковая часть №74459",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2602,
          managerId: 19,
          name: "4-SONLI MONTAJ BOSHQARMASI OAJ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2611,
          managerId: 19,
          name: 'КАРВОН" МЧЖ',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2612,
          managerId: 19,
          name: 'TOSHKENT TEXNIK TA`MINLASH VA BUTLASH" SHK',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2613,
          managerId: 19,
          name: 'Ахмад Югнакий 6-чи коммунал"ТЧСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2614,
          managerId: 19,
          name: 'ООО "REPAIRS BRIGADE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2615,
          managerId: 19,
          name: 'XUSNIDDIN KOMMUNALCHI" XUJMSH',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2616,
          managerId: 19,
          name: '"HUMOYUN SAYATHON"  ТЧСЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2618,
          managerId: 19,
          name: '"PERGUSHEV - TECHNOLOGIES" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2619,
          managerId: 19,
          name: 'PERFECT FORGING"OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2620,
          managerId: 19,
          name: 'ARDS-LUX" ООО',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2621,
          managerId: 19,
          name: 'O`zbektelekom" A.K. "Telekom Invest" filiali',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2622,
          managerId: 19,
          name: 'ООО"Фон',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2623,
          managerId: 19,
          name: 'GSKB METALL"OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2624,
          managerId: 19,
          name: "ЧФ NUR - NODIRBEK",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2625,
          managerId: 19,
          name: 'AHMAD YUGNAKIY" UJM 3-коммунал',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2626,
          managerId: 19,
          name: "Республика укув ишлаб чикариш биолаборатория",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2627,
          managerId: 19,
          name:
            "Министерство обороны Республики Узбекистан Управление закупок. поставок и реализации ВТИ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2628,
          managerId: 19,
          name: "Министерство обороны Республики Узбекистан в/ч 39290",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2629,
          managerId: 19,
          name: "ENERGY PROGRESS METALL  OOO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2630,
          managerId: 19,
          name: 'TEXNOPROGRES" МCHJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2631,
          managerId: 19,
          name: '"NOVO WOOD" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2632,
          managerId: 19,
          name: 'STAL MONTAJ MODUL" MCHJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2633,
          managerId: 19,
          name: 'Гидрокаскад-ремонт"ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2634,
          managerId: 19,
          name:
            'УП "Автотранспортэнергокурилиш" АО "Узбекгидроэнергокурилиш АО Узбекэнерго',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2635,
          managerId: 19,
          name: "Войсковая часть  № 78871",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2636,
          managerId: 19,
          name: 'BEGALI-SERVIC"XUJMSH',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2637,
          managerId: 19,
          name: "В/ч 99298",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2638,
          managerId: 19,
          name: 'AJ QK "DEUTSCHE KABEL AG TASCHKENT',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2639,
          managerId: 19,
          name: 'KRILAK  ASIASTROY" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2640,
          managerId: 19,
          name: "ГСКБ по ирригации СП ООО",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2641,
          managerId: 19,
          name: "ОП№6",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2642,
          managerId: 19,
          name: 'DON VITO SERVIS" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2643,
          managerId: 19,
          name: "В/ч 71298",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2644,
          managerId: 19,
          name: 'ZABAR TRADE" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2645,
          managerId: 19,
          name: "Тошкент АЭРО  мтс",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2646,
          managerId: 19,
          name: "Гидрометцентр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2647,
          managerId: 19,
          name: "Фергана аэропорт",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2648,
          managerId: 19,
          name: 'ГУП "Международный аэропорт Нукус',
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2649,
          managerId: 19,
          name: 'Международный Аэропот "Андижан',
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2650,
          managerId: 19,
          name: 'ООО"DAVR E`ZOZ BARAKA',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2651,
          managerId: 19,
          name: 'ЧП "ERKABOYEV SH. M.',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2652,
          managerId: 19,
          name: 'ОК "YORQIN AGRO INVEST',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2653,
          managerId: 19,
          name: "ENERGETIKLAR SIHATGOHI",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2654,
          managerId: 19,
          name: "Jahon Sanoat Metali МЧЖ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2655,
          managerId: 19,
          name: "Кибрай ТЙХПТФДК",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2656,
          managerId: 19,
          name: 'АЛ-ЖАМ-АЛ" ДП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2657,
          managerId: 19,
          name: 'AO "O`ZELEKTROAPPARAT-EKECTROSHIELD',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2658,
          managerId: 19,
          name: "Тош вил ИИБ ЖИЭБ 64/3 муассасаси",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2659,
          managerId: 19,
          name: "ЧП Вахобов И.(Эльёр Жомий)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3002,
          managerId: 17,
          name: "Asia packaging group",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3003,
          managerId: 17,
          name: 'Atitat business" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3004,
          managerId: 17,
          name: "Шухрат Мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3005,
          managerId: 17,
          name: "Пластик цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3006,
          managerId: 17,
          name: "jihoz ventilyatciya ООО",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3007,
          managerId: 17,
          name: "INTER IXLOS ООО",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3008,
          managerId: 17,
          name: 'ООО "FAYZ Wood group" mebel',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3009,
          managerId: 17,
          name: "VEN-KON ООО",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3010,
          managerId: 17,
          name: "Grant futures",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3011,
          managerId: 17,
          name: "Жахон & КО venciyacya",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3012,
          managerId: 17,
          name: "Фазлитдин Назарбек Мебель цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3013,
          managerId: 17,
          name: 'OOO "Classic Gold Door',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3014,
          managerId: 17,
          name: "Ахмаджон Наманган",
          regionId: gerRegionId("Ферганская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3015,
          managerId: 17,
          name: "Кумуш Нур",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3016,
          managerId: 17,
          name: "Упаковка комолиддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3017,
          managerId: 17,
          name: 'OOO"Qayum Hoji servis',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3018,
          managerId: 17,
          name: 'OOO "Asal plastik',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3019,
          managerId: 17,
          name: "Пекин-Чирчик ЛТД коп и/ч",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3020,
          managerId: 17,
          name: "Garant Keramik OOO",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3021,
          managerId: 17,
          name: "XITOY UPAKOVSHIK МЧЖ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3022,
          managerId: 17,
          name: "LL Plast OOO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3023,
          managerId: 17,
          name: "СП Tyanshan Fleks",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3024,
          managerId: 17,
          name: 'ООО "Elegant Gold Mebel',
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3025,
          managerId: 17,
          name: 'ООО"Anis gras mebel',
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3026,
          managerId: 17,
          name: 'ЧП "OKS DooR mebel" (NUKUS)',
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3027,
          managerId: 17,
          name: 'ООО "STEKLOPLASTIK',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3028,
          managerId: 17,
          name: "ARC décor furniture",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3029,
          managerId: 17,
          name: 'ООО"Мотрит мебел',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3030,
          managerId: 17,
          name: "Эко Мастер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3031,
          managerId: 17,
          name: 'QUYMAKOR" ЧПКФ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3032,
          managerId: 17,
          name: 'МЧЖ" SUN MAX TRADE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3033,
          managerId: 17,
          name: 'ООО "Гулобод мебел',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3034,
          managerId: 17,
          name: 'OOO "FWS & C UNION',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3035,
          managerId: 17,
          name: "Ziyo Nur Market OOO",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3036,
          managerId: 17,
          name: "ООО Водий тред",
          regionId: gerRegionId("Ферганская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3037,
          managerId: 17,
          name: "inter engenering OOO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3502,
          managerId: 20,
          name: "ЧП Косимов М.   Обид Куйлик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3503,
          managerId: 20,
          name: 'ООО "STROINT KFP',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3504,
          managerId: 20,
          name: "ХТ YUSUPOV TOXIRJON KADIROVICH",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3505,
          managerId: 20,
          name: 'NOBLES STEEL" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3506,
          managerId: 20,
          name: 'KRANTAS GROUP" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3507,
          managerId: 20,
          name: "КАРИМОВ АБДУРАХИМ АБДУРАХМАНОВИЧ ЧП",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3508,
          managerId: 20,
          name: 'MINGBULAK ROAD CONSTRUCT" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3509,
          managerId: 20,
          name: 'SATELLITE T.V." MCHJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3510,
          managerId: 20,
          name: "СУ-52 ТРЕСТ 12",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3511,
          managerId: 20,
          name: 'VALLEY COLOR" ХК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3512,
          managerId: 20,
          name: "Урганч Халкаро АЭРОПОРТИ ДУК",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3513,
          managerId: 20,
          name: 'MCHJ "POLYMER IMPEX',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3514,
          managerId: 20,
          name: 'OOO "KRYSTAL GROUP',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3515,
          managerId: 20,
          name: "Rushno Road Service",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3519,
          managerId: 20,
          name: 'ООО "DARXON QURILISH SERVIS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3521,
          managerId: 20,
          name: "Кенг макон мебел фабрикаси",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3530,
          managerId: 20,
          name: 'Автотракторрадиатор" Узбекистон Россия кушма корхонаси',
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3531,
          managerId: 20,
          name: 'ЧП "Аслиддинов Ф."(Мурод Самарканд)',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3532,
          managerId: 20,
          name: "ЯТТ Умарбеков Б.(Мухаммадали Фаргона)",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3533,
          managerId: 20,
          name: 'ЯТТ "Мухаммадсаид Н."(Домбробод Саидолим)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3534,
          managerId: 20,
          name: "ХТ ХАККУЛОВ УЧКУН ТИРКАШБАЕВИЧ(Учкун Жомий)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3536,
          managerId: 20,
          name: 'ЧП"Бахтиёров Иззатилла"(Чукурсой Рустам)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3537,
          managerId: 20,
          name: "ХТ Исаметдинов Элёр Даниярович (Гвардейский Боходир)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3538,
          managerId: 20,
          name: 'ЯТТ "Yuldashev Davron Azimdjanovich" (Паркент Салохиддин )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3539,
          managerId: 20,
          name: 'ЯТТ Нигматхужаев Н."(Урикзор Юнусхужа)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3540,
          managerId: 20,
          name: 'ЯТТ "Жумаев А."(Урикзор Акбар)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3541,
          managerId: 20,
          name: 'ЧП "Кучкаров А."(Циалковский Мухитдин )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3542,
          managerId: 20,
          name: 'ЯТТ "Эркинов С.У."(Уткир ака Юнусобод)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4003,
          managerId: 21,
          name: "Toshkent Yo`lovchi Vagonlarni Qurish va Ta`mirlash Zavodi AO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3543,
          managerId: 20,
          name: 'ЯТТ "Шайназаров У.Т."(Абдуборий Циалковский)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3544,
          managerId: 20,
          name: 'ООО "Рангли буёк мозайкаси"(Камрон гилам бозор)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3545,
          managerId: 20,
          name: 'ООО "Дил ва дур савдо" (Рустам Жомий круг )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3546,
          managerId: 20,
          name: 'ЯТТ "Усмонов Н.Н."(Нигмат ака Жомий)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3547,
          managerId: 20,
          name: 'Наманган порлок" МЧЖ',
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3548,
          managerId: 20,
          name: "ЧП Абдуллаев Ф  (Юсуфбек)",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3549,
          managerId: 20,
          name: 'ХК "Мансур лак буёк"(Наманган Мансурхон)',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3550,
          managerId: 20,
          name: 'ЯТТ "Тошбоев А."(Отабек/Абдували Сурхандарё )',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3551,
          managerId: 20,
          name: 'ЧП"Жалилов"Илхом Фаргона',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3552,
          managerId: 20,
          name: 'ООО "Alrut Build',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3553,
          managerId: 20,
          name: 'ООО "Artline Construct',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3554,
          managerId: 20,
          name: "Аскар цеховик Обид",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3555,
          managerId: 20,
          name: "ООО Kushmag-Nukus",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3556,
          managerId: 20,
          name: 'ABSOLUTE BUSINESS TRADE" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3557,
          managerId: 20,
          name: 'ООО"Термез Техно Традинг',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3558,
          managerId: 20,
          name: 'ООО "CRANES AND SPECIAL TRUCKS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3559,
          managerId: 20,
          name: 'МЧЖ "Колорит долина',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3560,
          managerId: 20,
          name: 'ЯТТ "Рахимов О."(Отабек магазин)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3561,
          managerId: 20,
          name: 'ЯТТ "Джалалов Халилилло Хабибуллаевич" (Бек топи Махмуд  )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3562,
          managerId: 20,
          name: 'OK "ALI-USMON PROFIL',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3563,
          managerId: 20,
          name: 'ООО "CELL TOWERS CONSTRUCTION',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3564,
          managerId: 20,
          name: "ЧП Садиров Хуршид Саибджанович",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3565,
          managerId: 20,
          name: "ИП Халматов Р. (Икром куйлик)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3566,
          managerId: 20,
          name: "Изза бозор Музаффар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3567,
          managerId: 20,
          name: 'ЯТТ "Содиков М."(Саид Гилам бозор)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3568,
          managerId: 20,
          name: "Обид дали",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3571,
          managerId: 20,
          name: "ЯТТ  Алимов Б.(Саид Куйлик)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3572,
          managerId: 20,
          name: 'ЧП "Спицен В.В." (Анвар Куйлик)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3574,
          managerId: 20,
          name: 'ЯТТ "Гоффоров М"(Музаффар Жомий)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3575,
          managerId: 20,
          name: 'ЧП "Садиров Х."(Хуршид куйлик)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3576,
          managerId: 20,
          name: "ЧП Валиев Турсинбой",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3577,
          managerId: 20,
          name: "Шерзодбек Шахзодбек савдо сервис МЧЖ(Шовкат Хоразм)",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3580,
          managerId: 20,
          name: 'ЧП "Косимов М."(Максуд кукон)',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3581,
          managerId: 20,
          name: 'ЯТТ" Дадахужаев Ж.А."(Кукон Музаффар)',
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3582,
          managerId: 20,
          name: 'ЯТТ "Бабажанов З."(Зафар ака Панелный )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3583,
          managerId: 20,
          name: "ЧП Акмалов М.А. Гилам бозор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3584,
          managerId: 20,
          name: 'ЯТТ "Эркабоев З."(Зоир ака гвардейский)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3585,
          managerId: 20,
          name: 'ЯТТ "Халимова Р.Н."(Навои Ботир ака)',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3586,
          managerId: 20,
          name: "ЯТТ Сотволдиев Гиёсиддин Сотволди угли",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3588,
          managerId: 20,
          name: "Домбробод Саидолим  (серта патина)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3590,
          managerId: 20,
          name: "Изза бозор  Муззаффар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3591,
          managerId: 20,
          name: "Искандар Цеховик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4004,
          managerId: 21,
          name: "MCHJ SHOH LUX STYLE",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4005,
          managerId: 21,
          name: 'ООО "XOJIBEK BIZNES',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4006,
          managerId: 21,
          name: 'FRESH STYLE"  ИП ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4007,
          managerId: 21,
          name:
            'ИП "MAXAMADJONOV AZIZJON AXMADJON O`G`LI" (Рустам,Азиз урикзор )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4008,
          managerId: 21,
          name: "ЧП Жуманиёзов С Сардор хорезм",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4009,
          managerId: 21,
          name: 'KASBINO" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4010,
          managerId: 21,
          name: "ЧП Халилов И Бек Ихтиёр Топ базар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4011,
          managerId: 21,
          name: 'Автотракторрадиатор" Узбекистон Россия кушма корхонаси',
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4012,
          managerId: 21,
          name: "ЧП Салихов А. Хаким гвардейский",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4013,
          managerId: 21,
          name: "Уткир кафолат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4014,
          managerId: 21,
          name: "Камолитдин",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4015,
          managerId: 21,
          name: "ЧП Раупов И.И. Ихтиёр Карши",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4016,
          managerId: 21,
          name: "Мурод хорезм",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4017,
          managerId: 21,
          name: "ООО East Kolor Region Азизи бмж",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4018,
          managerId: 21,
          name: "ЧП Тулаган Трик Фахретдин краска",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4019,
          managerId: 21,
          name: "Маргилон хожи",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4020,
          managerId: 21,
          name: "ЧП Мухабат Курилиш Уктам бухара",
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4021,
          managerId: 21,
          name: "ЧП Ашрапходжаев М.М.",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4022,
          managerId: 21,
          name: 'ЧП "Янгиер буёклари"(Обит Сирдарё)',
          regionId: gerRegionId("Сирдарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4023,
          managerId: 21,
          name: "Двер Цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4024,
          managerId: 21,
          name: "Алишер Фаргона",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4025,
          managerId: 21,
          name: 'ЧП "Абдусаломов А."(Абдуманоб Мебель Цех)',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4027,
          managerId: 21,
          name: 'ООО "Совер Пайнтс"(Ахмат краска)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4028,
          managerId: 21,
          name: "МЧЖ GRAND COLOR SERVICE",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4501,
          managerId: 22,
          name: 'СП ООО "TEZINTOM',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4502,
          managerId: 22,
          name: "СП ООО UZKLASSAGRO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9501,
          managerId: 23,
          name: "Махмуд  урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9502,
          managerId: 23,
          name: "Бахти Нефтеполимер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9503,
          managerId: 23,
          name: "СТМ Колор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9504,
          managerId: 23,
          name: 'BUSINESS ASIA SERVICE"OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9505,
          managerId: 23,
          name: "Растворитель 646",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9506,
          managerId: 23,
          name: "Азиз Полард нефтьполимер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9508,
          managerId: 23,
          name: "Теплица Мухиддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9509,
          managerId: 23,
          name: "Ёдгор темир бозор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9510,
          managerId: 23,
          name: "Бахти Алдаркосе",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4029,
          managerId: 21,
          name: 'ЧП "Таджибаев Б"(Бохо урикзор)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3592,
          managerId: 20,
          name: "Дилмурод Циалковский",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3593,
          managerId: 20,
          name: "Дилшод Ангрен",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3594,
          managerId: 20,
          name: "Жомий Абдулазиз",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2660,
          managerId: 19,
          name: "Искандер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2661,
          managerId: 19,
          name: "Хуснутдин Жомий (Камалетдин)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1023,
          managerId: 16,
          name: "Самарканд Шухрат",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2663,
          managerId: 19,
          name: "дет сад № 438",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2644,
          managerId: 22,
          name: "ООО Zabar Trade",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4504,
          managerId: 22,
          name: "Эльбрус",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1506,
          managerId: 18,
          name: 'Kedr-Investment" OOO, "Ko\'rkam Mebel Invest"  MChJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1507,
          managerId: 18,
          name: "Local Doors",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1508,
          managerId: 18,
          name: "NASOSSERVIS",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1509,
          managerId: 18,
          name: 'NEFTEGAZMONTAJ" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1510,
          managerId: 18,
          name: 'PENG SHENG CHARM" ХК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1511,
          managerId: 18,
          name: "Prime Ceramics",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1512,
          managerId: 18,
          name: "Qibray Transformator",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1513,
          managerId: 18,
          name: 'Real Ekspress Ak" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1514,
          managerId: 18,
          name: 'Sarbon- Zah" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1515,
          managerId: 18,
          name: "Texnolog Texplast",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3595,
          managerId: 20,
          name: "Ангрен Дильшод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3596,
          managerId: 20,
          name: "ЧП Холматов Шовкат Сергели",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3038,
          managerId: 17,
          name: "Anvarbek mebel",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3039,
          managerId: 17,
          name: "Ойбек грант мебел",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3040,
          managerId: 17,
          name: "Mehay Trade",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3041,
          managerId: 17,
          name: "Chinor mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3597,
          managerId: 20,
          name: "Жомий Аброр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3598,
          managerId: 20,
          name: "Мастер Руслан",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1516,
          managerId: 18,
          name: "Trance Energy",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1517,
          managerId: 18,
          name: 'Vostok Energiya" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1518,
          managerId: 24,
          name: "АММОФОС МАКСАМ",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1519,
          managerId: 18,
          name: "Кукон Механика Заводи",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1520,
          managerId: 18,
          name: 'АО"Максам Чирчик',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1521,
          managerId: 18,
          name: "Мехнат Пиво",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1522,
          managerId: 18,
          name: "ТЕХНИК ТАЪМИРЛАШ БУТЛАШ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1523,
          managerId: 18,
          name: "ШАХРИСАБЗ ВИНО-АРОКОЧИК",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1524,
          managerId: 18,
          name: 'ЭЛЕКТРОТАЪМИР" ПП ОО',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1525,
          managerId: 18,
          name: "BMG",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1526,
          managerId: 18,
          name: "Grand Allince Business",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1527,
          managerId: 18,
          name: "JAYXUN",
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1528,
          managerId: 18,
          name: 'MCHJ "TEXNO-TEMP',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1529,
          managerId: 18,
          name: "MChJ ``PANORAMA VISION`",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1530,
          managerId: 18,
          name: "Musaffo Obi Hayot МЧЖ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1531,
          managerId: 18,
          name: 'OOO "Air Vent System",ЧП "VITA BUILD',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1532,
          managerId: 18,
          name: 'OOO "AUTO RESPECT ROAD',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1533,
          managerId: 18,
          name: 'OOO "Clean Work',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1534,
          managerId: 18,
          name: 'OOO "Invest Assets Plus',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1547,
          managerId: 18,
          name: 'ООО "Шукрилло Ривож Барака"(Бахтиёр Хасанбой)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1548,
          managerId: 18,
          name: "БГПС",
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1561,
          managerId: 18,
          name: 'ANTIKOR-XIMZASHITA-CHIRCHIK" МЧЖ',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1563,
          managerId: 18,
          name: "РСУ Химзащита",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1567,
          managerId: 18,
          name: "Трубодеталь/Мубарекнефтьгаз",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1576,
          managerId: 18,
          name: "Bukhara Laminant Luxe МЧЖ К.К (Азиз Бухара)",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1577,
          managerId: 18,
          name: "Даврон Гвардейский базар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1594,
          managerId: 18,
          name: 'ЯТТ "Рахметов Бехруз Бахтиёрович"(Бехруз Бухара)',
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1597,
          managerId: 18,
          name: 'ООО "Зульфинур Бизнес"(Дилмурод)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1598,
          managerId: 18,
          name: 'ЧП "Хамраев Феруз"(Рахмат Бухара)',
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1599,
          managerId: 18,
          name: 'ЯТТ "Ерашев Анвар Салимович"(Анвар Бухара)',
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1600,
          managerId: 16,
          name: "Шавкат Циалковский",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1601,
          managerId: 18,
          managerId: 5,
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1535,
          managerId: 18,
          name: 'OOO "Metall Engineering',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1536,
          managerId: 18,
          name: 'OOO "OLMOZ ELECTRONICS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1537,
          managerId: 18,
          name: 'OOO "SPARTAK WEST',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1538,
          managerId: 18,
          name: 'OOO "Vika',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1539,
          managerId: 18,
          name: 'OOO "Viva Delux',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1541,
          managerId: 18,
          name: "OOO CROSSFIT",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1542,
          managerId: 18,
          name: "OOO SV GYM SPORT",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1543,
          managerId: 18,
          name: "XT RAXIMOV BAXTIYAR NAIMOVICH",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1544,
          managerId: 18,
          name: "Алимар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1545,
          managerId: 18,
          name: "Алмалыкшахаргаз (\"O'ZTRANSGAZ\"  АКУШ TOSHKENTGAZTA'MINOT)",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1546,
          managerId: 18,
          name: "АО ТойтепаМеталКурилмалари",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1549,
          managerId: 18,
          name: "Выставочный Центр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1550,
          managerId: 18,
          name: "ИП ООО CAMPALIA",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1551,
          managerId: 18,
          name: 'МП "Таъмирлаш Сталь Сервис',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1552,
          managerId: 24,
          name: 'МЧЖ "ALPHA-SPORT TECHNOLOGY',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1553,
          managerId: 18,
          name: 'МЧЖ "Fargana Ximzashita Story',
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1555,
          managerId: 18,
          name: 'ОАО "Ахангаранцемент',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1556,
          managerId: 18,
          name: 'ООО "CHARTAK RESORT',
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1559,
          managerId: 18,
          name: 'ООО "Чирчик Стемп',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1560,
          managerId: 18,
          name: 'ООО "Чирчик Экспо Клен',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1564,
          managerId: 18,
          name: "Сергей (Чарвак)",
          regionId: gerRegionId("Таш.область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1565,
          managerId: 18,
          name: "СПООО Asia Trans Gaz",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1566,
          managerId: 18,
          name: "Технолог - Метализ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1568,
          managerId: 18,
          name: 'TOSHKENT QISHLOQ XO`JALIGI TEXNIKASI ZAVODI" АКЦ (ТТЗ Завод)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1569,
          managerId: 18,
          name: 'УП "Energoqurilishbutlash',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1570,
          managerId: 18,
          name: "Управление Автомобильных Дорог",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1571,
          managerId: 18,
          name: 'ЧП "Чиланзар Улгуржи Савдо',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1572,
          managerId: 18,
          name: 'ООО "ALAN WHITE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1573,
          managerId: 18,
          name: "ОДИЛ - ХОЛ",
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1574,
          managerId: 18,
          name: 'СП ООО "MIR SOLAR ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1575,
          managerId: 18,
          name: "ХИМСТРОЙМОНТАЖ",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1576,
          managerId: 18,
          name: "Bukhara Laminant Luxe МЧЖ К.К",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1577,
          managerId: 18,
          name: "Даврон Гвардейский базар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1578,
          managerId: 18,
          name: 'ПУ "ENTER ENGINEERING',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1583,
          managerId: 18,
          name: "SERVIS BURATINO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1585,
          managerId: 18,
          name: "Сарвар Коканд",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1588,
          managerId: 18,
          name: 'ООО "REMASH',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1589,
          managerId: 18,
          name: 'OOO "ASIA ENERGOTEXNOLOGY NEFTEGAZ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1590,
          managerId: 18,
          name: "Авторемзавод 14 МОРУз",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2000,
          managerId: 25,
          name: 'НПП "Истал',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2001,
          managerId: 25,
          name: 'MCHJ "Техно-Ресурс',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2002,
          managerId: 25,
          name: 'НПП "Элстан',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2003,
          managerId: 25,
          name: "ЧП ''Рыжкова П.A",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2004,
          managerId: 25,
          name: 'OOO "Антикорчи',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2005,
          managerId: 25,
          name: 'ООО "Сув темир саноат',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2006,
          managerId: 25,
          name: 'ООО "Звезда',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2007,
          managerId: 25,
          name: 'АО "FOTON',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2008,
          managerId: 25,
          name: "OOO ''Хот Трейдинг Групп''",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2009,
          managerId: 25,
          name: "OOO ''Фабуло Строй Сервис''",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2010,
          managerId: 25,
          name: 'ООО "Капот Сервис',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2011,
          managerId: 25,
          name: 'ООО "ПауверЭлектрикГрупп',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2012,
          managerId: 25,
          name: 'ООО "Макс Билд Бизнесс',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2013,
          managerId: 25,
          name: "СП ООО ''Промэлектро''",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2014,
          managerId: 25,
          name: 'LLP "Petromaruz  Overseas',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2015,
          managerId: 25,
          name: "СП ООО ''Тошафус''",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2016,
          managerId: 25,
          name: 'УП "Ротор',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2017,
          managerId: 25,
          name: "Чартак Ресорт",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2018,
          managerId: 25,
          name: "Центр Билдинг Технолоджис",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2019,
          managerId: 25,
          name: "Ages Communication",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2020,
          managerId: 25,
          name: "Курилиш Монтаж Бошкармаси",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2021,
          managerId: 25,
          name: 'OOO"Тошкент металло конструкция',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2022,
          managerId: 25,
          name: 'OOO"VAST CLEVER',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2023,
          managerId: 25,
          name: 'ООО "Тима',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3599,
          managerId: 20,
          name: "Абдужаббор произв.люстра",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4021,
          managerId: 20,
          name: "ЧП Ашрапходжаев М.М. (Мансур куйлик)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3516,
          managerId: 20,
          name: "GREEN LINE PRОFIL",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3517,
          managerId: 20,
          name: "EVEREST TRADING GROUP",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3518,
          managerId: 20,
          name: "ANGREN TECHNO SERVICE",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3520,
          managerId: 20,
          name: "ALTAIR-MET.KON OOO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3522,
          managerId: 20,
          name: "ЯТТ Эрматов Дониёр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3523,
          managerId: 20,
          name: 'ELEMENT-QURILISH" Ш.К.',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3524,
          managerId: 20,
          name: 'Трест "KO`PRIKQURILISH',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3525,
          managerId: 20,
          name: "Komfort mebel servis",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3526,
          managerId: 20,
          name: "EVROOSIYO TAPO-DISK",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3527,
          managerId: 20,
          name: "YATT Jurayev Shuxratjon Sobirjonovich",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3528,
          managerId: 20,
          name: 'ООО  "AL-CHPU',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2667,
          managerId: 19,
          name: "Дет.сад № 137",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2669,
          managerId: 19,
          name: "Дет.сад № 148",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2672,
          managerId: 19,
          name: "Дет.сад № 2",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2678,
          managerId: 19,
          name: "390-ММТМ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2680,
          managerId: 19,
          name: "Дет.сад № 408",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2688,
          managerId: 19,
          name: "Дет. сад № 525",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2689,
          managerId: 19,
          name: "Дет.сад № 546",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2692,
          managerId: 19,
          name: "Дет.сад № 80",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2695,
          managerId: 19,
          name: "Детский сад № 378",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2696,
          managerId: 19,
          name: "Школа № 113",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2702,
          managerId: 19,
          name: "Дет сад № 382",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2705,
          managerId: 19,
          name: "Дет. сад № 541",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2706,
          managerId: 19,
          name: "МТМ 547",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2707,
          managerId: 19,
          name: "Дет.сад № 471",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2708,
          managerId: 19,
          name: "Дет.сад № 270",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2709,
          managerId: 19,
          name: "Дет.сад № 437",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2710,
          managerId: 19,
          name: "24-Мактаб",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2711,
          managerId: 19,
          name: "ДОУ № 113",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2712,
          managerId: 19,
          name: "Дет.сад № 14",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2713,
          managerId: 19,
          name: "Школа №8",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2714,
          managerId: 19,
          name: "дог 750/а",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2715,
          managerId: 19,
          name: "УЧРЕЖДЕНИЯ УЯ 64/72",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2716,
          managerId: 19,
          name: "Дет.сад№ 446",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2717,
          managerId: 19,
          name: "Дет.сад№ 556",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2718,
          managerId: 19,
          name: "Дет.сад №451",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2719,
          managerId: 19,
          name: "Дет сад № 145",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2720,
          managerId: 19,
          name: "Дет.сад № 504",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2721,
          managerId: 19,
          name: "ДОУ №410",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2722,
          managerId: 19,
          name: "ДОУ № 219",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2723,
          managerId: 19,
          name: "Школа № 187",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2724,
          managerId: 19,
          name: 'INTER-ROHAT" СП АО',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2725,
          managerId: 19,
          name: 'Алмалыкский АГМК" АО',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2726,
          managerId: 19,
          name: 'VERHOLAZ" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2727,
          managerId: 19,
          name: 'ИП "Абдалов И.М. ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2728,
          managerId: 19,
          name: 'ZVEZDA" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2729,
          managerId: 19,
          name: "Yo`l harakatini boshqarishning texnik departamenti",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2730,
          managerId: 19,
          name: 'Toshkent IES" UK',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2731,
          managerId: 19,
          name: 'ELEKTROIZOLIT" СП ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2732,
          managerId: 19,
          name: "ТЧСЖ Кибрай Хамкор Комунал",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2734,
          managerId: 19,
          name: 'TOSHKENT XALQARO AEROPORTI" ГУП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2735,
          managerId: 19,
          name: 'СП "SHARQ-RIETUMI',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2736,
          managerId: 19,
          name: 'MARJON ELEKTRO ENERGIYA" МЧЖ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2737,
          managerId: 19,
          name: 'ООО "Чилонзор Савдо Уйи',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2738,
          managerId: 19,
          name: 'HUMOYUN-TINCHLIK" HUJMSH',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2739,
          managerId: 19,
          name: 'MEGA TRANS ENERGY" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2740,
          managerId: 19,
          name: "ЯТТ Абдуазимов А",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2741,
          managerId: 19,
          name: 'ЯТТ "Абдалимов Улугбек Равшанович"(Атхам Чирчик)',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2742,
          managerId: 19,
          name: 'ООО"БРИЗ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2743,
          managerId: 19,
          name: 'ООО "Beautiful  Door"(Двер Цех Кибрай)',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2745,
          managerId: 19,
          name: "Дима мебел цех",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2746,
          managerId: 19,
          name: "ильер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2747,
          managerId: 19,
          name: 'ЧП "Файзуллаев Хуснутдин Комолетдинович',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1591,
          managerId: 18,
          name: 'ЧП "TEHNO MEBEL',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1592,
          managerId: 18,
          name: 'ИИ OOO "DE FONTE ELECTRIC CAR',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3042,
          managerId: 17,
          name: "OOO Asl korkam mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3043,
          managerId: 17,
          name: "OOO Ziyo Zamir",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3044,
          managerId: 17,
          name: 'ООО"Крономакс',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3045,
          managerId: 17,
          name: 'ШУРЧИ МЕБЕЛЬ" ИЧТФ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3046,
          managerId: 17,
          name: "Mondiale Mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3047,
          managerId: 17,
          name: "Дилшод урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3048,
          managerId: 17,
          name: "Урикзор Саид Магазин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3049,
          managerId: 17,
          name: 'Mas`uliyati cheklangan jamiyat "GREEN PRINT SYSTEM',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3050,
          managerId: 17,
          name: "Гвардйский Анвар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3052,
          managerId: 17,
          name: "ООО Teng Rash",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3055,
          managerId: 17,
          name: "OOO Mohirbek",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3056,
          managerId: 17,
          name: "Аброр коп ишлаб чикариш",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3058,
          managerId: 17,
          name: 'ЧП "Сайитнуриддинов С.С."(Жомий)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3059,
          managerId: 17,
          name: 'ООО"GRAND POLIMER',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3060,
          managerId: 17,
          name: 'OOO "Qualitative Transformer Winding',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3061,
          managerId: 17,
          name: 'SAMPLASTSERVIS" МЧЖ',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3062,
          managerId: 17,
          name: 'ООО "RAVNAQ MEBEL',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3063,
          managerId: 17,
          name: "MCHJ FAYZ QK",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3064,
          managerId: 17,
          name: 'TEMIRCHI QO`SHUV" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3065,
          managerId: 17,
          name: 'PRIMA MEBEL" ООО',
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3066,
          managerId: 17,
          name: 'OOO "Kazbino',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3067,
          managerId: 17,
          name: "Домбробод Аслиддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3068,
          managerId: 17,
          name: "Hamkor Elit Mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3069,
          managerId: 17,
          name: "Ботир ака (Фарход бозор)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3070,
          managerId: 17,
          name: "OOO Ahl chin",
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3071,
          managerId: 17,
          name: "Тахтапул Мансур ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3072,
          managerId: 17,
          name: "Ексим Мебель Трейд",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3073,
          managerId: 17,
          name: "Бухоро мебел",
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3074,
          managerId: 17,
          name: "Аэропорт",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3075,
          managerId: 17,
          name: "Аэропорт",
          regionId: gerRegionId("Бухоро"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3076,
          managerId: 17,
          name: "Аэропорт",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3077,
          managerId: 17,
          name: "Упаковшик",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3078,
          managerId: 17,
          name: "Metal gaz butlash",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3079,
          managerId: 17,
          name: "рахматилла Теплица",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3080,
          managerId: 17,
          name: "Янги Ангрен ИЭС",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3081,
          managerId: 17,
          name: "ИЭС Курилиш",
          regionId: gerRegionId("Сырдарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3082,
          managerId: 17,
          name: 'ЧП "Диёр Мебель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3083,
          managerId: 17,
          name: 'Comfort Furniture" ООО',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3084,
          managerId: 17,
          name: "",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3085,
          managerId: 17,
          name: "E`ZOZ SANOAT INVEST MCHJ",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3086,
          managerId: 17,
          name: 'ИП ООО "Max Wood Group',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3088,
          managerId: 17,
          name: 'MCHJ "MEGA ZOOM CLEAN',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3089,
          managerId: 17,
          name: "Рахим сергели",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3090,
          managerId: 17,
          name: "Дилшод Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3091,
          managerId: 17,
          name: "Кодир ака (Ойначи)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3092,
          managerId: 17,
          name: "Абдусалом Мебель цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3093,
          managerId: 17,
          name: 'LEGEND STROY BIZNES" MCHJ',
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3094,
          managerId: 17,
          name: "Техно Парк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3095,
          managerId: 17,
          name: "Гарант Парк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3096,
          managerId: 17,
          name: "Андижон Хожи",
          regionId: gerRegionId("Андижан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3097,
          managerId: 17,
          name: "Рахматилла",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3098,
          managerId: 17,
          name: 'ЧП "Ven Kon Air Engineering',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3099,
          managerId: 17,
          name: "OOO MAGNA MEBEL",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3100,
          managerId: 17,
          name: 'ЯТТ "Imamov Elyor Yadgorovich',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3101,
          managerId: 17,
          name: 'MCHJ XK "RIETER UZBEKISTAN',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3102,
          managerId: 17,
          name: "Батаника теплица Рахматилла",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3103,
          managerId: 17,
          name: "Дониёр уйига",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3104,
          managerId: 17,
          name: 'ЧП "Зариф"(Сергели)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3105,
          managerId: 17,
          name: 'ЧП"Окс мебель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3106,
          managerId: 17,
          name: "Аббосхон Хожи",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2024,
          managerId: 19,
          name: 'ЯТТ "Рахимов О.Р."(Отабек магазин)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2748,
          managerId: 19,
          name: "Санжар Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4030,
          managerId: 21,
          name: "Музаффар дустлик парк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9511,
          managerId: 23,
          name: 'ООО "Трансйулкурилиш Сурхон магистрал',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2749,
          managerId: 19,
          name: "ЧП Абдувахидов У.",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1593,
          managerId: 18,
          name: 'Джизакский аккумуляторный завод" ОАО',
          regionId: gerRegionId("Джизак"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2750,
          managerId: 19,
          name: 'ООО "YOL KOMMUNAL INVEST',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1595,
          managerId: 18,
          name: 'ООО "STAR GAYER BUSINESS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2751,
          managerId: 19,
          name: "Саша Рафик бонд",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1596,
          managerId: 18,
          name: 'SUVSANOATMASH MEXANIKA" OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1602,
          managerId: 18,
          name: 'АЖ "Реле ва автоматика',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2580,
          managerId: 19,
          name: 'АЖ "Курилиш бирлашмаси',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3529,
          managerId: 20,
          name: 'ELEMENT QURILISH"OOO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4031,
          managerId: 21,
          name: "Дони",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1573,
          managerId: 18,
          name: "ОДИЛ - ХОЛ",
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2753,
          managerId: 19,
          name: 'ООО "Шуртаннефтьгаз',
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2754,
          managerId: 19,
          name: 'Центральное рудоуправление" ГП НГМК',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3057,
          managerId: 17,
          name: 'ООО "PAINT SPRING"(Одил ака Нукус)',
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3600,
          managerId: 20,
          name: "Клиент Араб мастер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2755,
          managerId: 19,
          name: 'ЧП "Акбар',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1603,
          managerId: 18,
          name: 'ЧП " THE REAL BUSINESS ALLIANCE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1604,
          managerId: 18,
          name: 'ООО "TASH PROMXOLOD',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2756,
          managerId: 19,
          name: 'ТЧСЖ "Ал Фаробий Сервис Коммунал',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3601,
          managerId: 20,
          name: "Абдулла клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4505,
          managerId: 22,
          name: "Шавкат ака евро забор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2757,
          managerId: 19,
          name: "УДП Шуртанский газохим.комплекс",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4506,
          managerId: 22,
          name: "Урикзор мебель цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2758,
          managerId: 19,
          name: "Дильёр разовый клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4507,
          managerId: 22,
          name: "Азиз Сергели",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2025,
          managerId: 25,
          name: 'ООО "Limex Avto',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3602,
          managerId: 20,
          name: "Максим разовый клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2631,
          managerId: 19,
          name: 'ООО "Novo  Wood',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9512,
          managerId: 23,
          name: "Отабек Гункем",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1583,
          managerId: 18,
          name: "SERVIS BURATINO",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3603,
          managerId: 20,
          name: 'ООО "Grand Lux Group',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4032,
          managerId: 21,
          name: "Икром Маргилон",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1024,
          managerId: 16,
          name: 'ООО "Араш',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2760,
          managerId: 19,
          name: "Жамшид клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2761,
          managerId: 19,
          name: 'ООО "Ангрен электро-Изолит',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4033,
          managerId: 21,
          name: 'ООО "Универсал Колор Пайнт Отабек',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2762,
          managerId: 19,
          name: 'ООО "Staldom Modul',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4508,
          managerId: 22,
          name: 'ООО "Артель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4509,
          managerId: 22,
          name: "Андижон Ботир",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3108,
          managerId: 17,
          name: "Сергели Биг Бег коп ишлаб чикариш",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3107,
          managerId: 17,
          name: "Катя клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4510,
          managerId: 22,
          name: "Мухаммад Чорсу",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1606,
          managerId: 18,
          name: 'ООО "Standart Energy Saver',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4511,
          managerId: 22,
          name: "Отабек клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9513,
          managerId: 23,
          name: "Магазин Дилшод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1557,
          managerId: 18,
          name: 'ООО "POLIFLEKS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4034,
          managerId: 21,
          name: "Хайрулла ака Дорожник",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3604,
          managerId: 20,
          name: 'ЯТТ "Абдукодиров У.Г."(Урикзор Мухаммадий)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4512,
          managerId: 22,
          name: "Улугбек клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4513,
          managerId: 22,
          name: "Жура ака Навои",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9514,
          managerId: 23,
          name: "Трест 12 Аваз",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3109,
          managerId: 17,
          name: 'ООО "Муборак мебель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1025,
          managerId: 16,
          name: "Жами Бетек",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2026,
          managerId: 25,
          name: 'Узбекэнерго" АК Кодирия ГЭСларкаскади УК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3112,
          managerId: 17,
          name: 'ОК "Кук Йулбарс',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2763,
          managerId: 19,
          name: "Чилонзор педагогика коллежи",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2764,
          managerId: 19,
          name: 'OOO "Telmax Elektroniks',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1579,
          managerId: 18,
          name: 'ООО"Сифат Мебель Ривож',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2027,
          managerId: 25,
          name: 'ЧП "Grand Alliance Business',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4514,
          managerId: 22,
          name: "Наманган Давронбек",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1605,
          managerId: 18,
          name: "Бахтиёр ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2028,
          managerId: 25,
          name: 'OOO "SHARQ TEMIR',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3113,
          managerId: 17,
          name: 'ООО "Wide Renge Mebel',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2765,
          managerId: 19,
          name: 'ОАО "Кизилкумцемент',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4515,
          managerId: 22,
          name: "Жамшид текстиль",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3054,
          managerId: 17,
          name: 'ООО "Чигатой Эшиклари',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3114,
          managerId: 17,
          name: "Клиент Теплица Кибрай",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2766,
          managerId: 19,
          name: "Субхон клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1584,
          managerId: 18,
          name: 'MChJ QK "JARKURGONNEFTQAYTAISHLASH',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1607,
          managerId: 18,
          name: "Дворец Культура Фархад",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2029,
          managerId: 25,
          name: 'AJ "Ozbekenergotamir',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3115,
          managerId: 17,
          name: "Самарканд Мебель",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2767,
          managerId: 19,
          name: "Хокимият",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2768,
          managerId: 19,
          name: "Ёкуб клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9515,
          managerId: 23,
          name: "Эркин Палимбетов",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2769,
          managerId: 19,
          name: "Ильхам клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1608,
          managerId: 18,
          name: 'ПУ "NSGD-EE "SERVICES TRADING DMCC',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2770,
          managerId: 19,
          name: 'AJ "Biokimyo',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2771,
          managerId: 19,
          name: "Сухроб пробник",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2772,
          managerId: 19,
          name: 'ООО "Нишон-н',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3116,
          managerId: 17,
          name: "Упаковка Дилмурод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3605,
          managerId: 20,
          name: 'ООО "Grand Rate',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9516,
          managerId: 23,
          name: "Узбум Рашид Драймикс",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1558,
          managerId: 18,
          name: 'АО "Узбекхиммаш',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4037,
          managerId: 21,
          name: "Абдусамат Наманган",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4038,
          managerId: 21,
          name: "Клиент Сурат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1587,
          managerId: 18,
          name: "PERSONA MEBEL",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2030,
          managerId: 25,
          name: "Флюковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3117,
          managerId: 17,
          name: 'ООО "Меркурий Арт',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1026,
          managerId: 16,
          name: 'ХК "Акрил Пласт',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2773,
          managerId: 19,
          name: "Улугбек разовый клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1609,
          managerId: 18,
          name: "Бек ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3118,
          managerId: 17,
          name: "Хувайдо мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1027,
          managerId: 16,
          name: "МДФ Фармейшн",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2541,
          managerId: 22,
          name: 'PULAT MIRAKLE FURNITURE" ЧП',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3119,
          managerId: 17,
          name: "Akbar Rich",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9517,
          managerId: 23,
          name: "Зокир ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1610,
          managerId: 18,
          name: 'ООО "Perfekt Road',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4516,
          managerId: 22,
          name: "Sandart IT Sector",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2031,
          managerId: 25,
          name: "Vivat Mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4517,
          managerId: 22,
          name: "Бек тупи Хабибулла",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3606,
          managerId: 20,
          name: "Шахзод Раз.клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2774,
          managerId: 19,
          name: 'ГП НГМК "Южное рудоуправление',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4518,
          managerId: 22,
          name: "Сухроб Самарканд",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1554,
          managerId: 18,
          name: "Навоийский горно-металлургический комбинат",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3607,
          managerId: 20,
          name: "Аббос",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2775,
          managerId: 19,
          name: "Фуат клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4519,
          managerId: 22,
          name: "Назиф Дунё",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4520,
          managerId: 22,
          name: "Абдувохид Кукон",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2776,
          managerId: 19,
          name: 'ГУП "Universal Keramik',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4039,
          managerId: 21,
          name: 'ООО "Трест 93',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9518,
          managerId: 23,
          name: "Абдурахим ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2032,
          managerId: 25,
          name: "Искандар Мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1028,
          managerId: 16,
          name: "Сергели Фарид",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4521,
          managerId: 22,
          name: "Вали Жаргурган",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4522,
          managerId: 22,
          name: "Зухриддин Касбино",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2033,
          managerId: 25,
          name: 'ООО " Territory Tree',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3608,
          managerId: 20,
          name: "Обид ака масжидга",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3609,
          managerId: 20,
          name: "Обид ака шоурумга",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1029,
          managerId: 16,
          name: "Каканд Расулжон",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2777,
          managerId: 19,
          name: "Respublika ixtisoslashtirilgan akusherlik va genik",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1581,
          managerId: 18,
          name: "MAXSUSENERGOGAZ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2778,
          managerId: 19,
          name: "Идоравий метрологик назорат хизмати",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3610,
          managerId: 20,
          name: 'ООО "Bronus',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4040,
          managerId: 21,
          name: 'ЧП "High Power Trade',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1611,
          managerId: 18,
          name: 'ООО "Matonat-IBS',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4523,
          managerId: 22,
          name: "Ислом Мото",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4524,
          managerId: 22,
          name: "Анвар ака мехнат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1580,
          managerId: 18,
          name: "ГУП Международный Аэропорт Самарканд",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4041,
          managerId: 21,
          name: "Шухрат ака Кукон",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4042,
          managerId: 21,
          name: "Фарход Китоб",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9519,
          managerId: 23,
          name: "Для собственных нужд",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4043,
          managerId: 21,
          name: "Ахмат Байр краска",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4044,
          managerId: 21,
          name: "Абдурахим ака клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2779,
          managerId: 19,
          name: "Для Рафика",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2782,
          managerId: 19,
          name: "Рудоуправление 5 Навоиского горн.",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4045,
          managerId: 21,
          name: "Фаргона Мухитдин ХВ 785краска",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2780,
          managerId: 19,
          name: 'ООО "Stroy Torg Marketing',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1030,
          managerId: 16,
          name: "Карши СМУ Гаи Хасан",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3611,
          managerId: 20,
          name: "Обид  для себя",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1586,
          managerId: 18,
          name: "МЧЖ TRANSYOLQURILISH",
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3120,
          managerId: 17,
          name: "Максуд ака Турткул",
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1612,
          managerId: 18,
          name: 'ООО "Rotor-Garant',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4046,
          managerId: 21,
          name: "Хусниддин Навои  мебель",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3121,
          managerId: 17,
          name: "Polimax",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4525,
          managerId: 22,
          name: "Илхом Кукон",
          regionId: gerRegionId("Фаргона"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2569,
          managerId: 19,
          name: 'АО "SREDAZENERGOSETPROEKT',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2781,
          managerId: 19,
          name: "Шахар 5-сон клиник шифохонаси",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1613,
          managerId: 18,
          name: "Эркин Бухара",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1614,
          managerId: 18,
          name: "Батыр ака(Осиё кабель)",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4526,
          managerId: 22,
          name: "Лутфулло Урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3612,
          managerId: 20,
          name: "Улугбек Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4527,
          managerId: 22,
          name: "Бек Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4047,
          managerId: 21,
          name: "Отабек Навои",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4528,
          managerId: 22,
          name: 'АО "Чирчик кишлок хужалиги техникаси заводи',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1031,
          managerId: 16,
          name: "Куйлюк Азиз",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4529,
          managerId: 22,
          name: "Кукча Бахтиёр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2034,
          managerId: 25,
          name: "Бахтиёр Ака краска",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1615,
          managerId: 18,
          name: "Мансур ака Куйлюк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2783,
          managerId: 19,
          name: "Зохид Куйлюк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1616,
          managerId: 18,
          name: 'АО "Бухоро Таъмирлаш Механика Заводи',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2784,
          managerId: 19,
          name: 'ТЧСЖ "Шимолий Шарк Коммуналчи',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4048,
          managerId: 21,
          name: "Мастер по дикор Мухаммадшариф",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1617,
          managerId: 18,
          name: "Баходыр Ака INSA",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3122,
          managerId: 17,
          name: 'ООО "Prom-Diagonal',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3613,
          managerId: 20,
          name: "Захриддин Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3614,
          managerId: 20,
          name: "Фуркат Жомий круг",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3123,
          managerId: 17,
          name: 'ООО "Каш мебель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8000,
          managerId: 16,
          name: "Дониёр мастер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8001,
          managerId: 16,
          name: 'ООО "Imperiya"(Фаррух)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4049,
          managerId: 21,
          name: "Фарход Андижон",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1618,
          managerId: 18,
          name: 'ООО "Шухрат',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4530,
          managerId: 22,
          name: 'ООО "Magna Mebel',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2785,
          managerId: 19,
          name: "Светлана",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8002,
          managerId: 16,
          name: "Александр бассейн",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1033,
          managerId: 16,
          name: "Теплица Мурод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2035,
          managerId: 25,
          name: 'ЧП "Mega -plit- stroy',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5001,
          managerId: 26,
          name: "Мебельшик Кудрат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2786,
          managerId: 19,
          name: 'ХК"Vilina',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3615,
          managerId: 20,
          name: "Дильшод Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2787,
          managerId: 19,
          name: 'ХК "Maksilen servis"(Гера клиент )',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2788,
          managerId: 19,
          name: "Тамара клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8003,
          managerId: 16,
          name: "Маруф Зоко Стайл",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8004,
          managerId: 16,
          name: "Рахим ака Той Тепа",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8005,
          managerId: 16,
          name: "Сардор ака цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4531,
          managerId: 22,
          name: "Хамид ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4532,
          managerId: 22,
          name: "Истирохат мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8006,
          managerId: 16,
          name: "Самад Туйтепа",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3124,
          managerId: 17,
          name: "Упаковка Заркент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8007,
          managerId: 16,
          name: "Сиродж Бассейн",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3616,
          managerId: 20,
          name: "Абдукарим ака цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5500,
          managerId: 23,
          name: "Ункургон клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3617,
          managerId: 20,
          name: "Зиёвуддин ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8008,
          managerId: 16,
          name: "Саша Фурнитур",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5002,
          managerId: 26,
          name: "Миксинфо мебель (Шавкат)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5003,
          managerId: 26,
          name: "Гулом мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9521,
          managerId: 23,
          name: "Разовый клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2789,
          managerId: 19,
          name: 'ИП ООО "Pro Plast Group',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4050,
          managerId: 21,
          name: "Кенг Макон Шухрат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5004,
          managerId: 26,
          name: 'ООО "Trans -Snab',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3618,
          managerId: 20,
          name: "Мирзо Андижон",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8009,
          managerId: 16,
          name: "Мирсабит Ташми",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8010,
          managerId: 16,
          name: "Достон ака Северный Алмазар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3619,
          managerId: 20,
          name: "Турсунбой ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8011,
          managerId: 16,
          name: "Хамдам перепродажа",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2790,
          managerId: 19,
          name: 'ООО "Boston Tekstil',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1034,
          managerId: 16,
          name: "Шерали Карши",
          regionId: gerRegionId("Карши"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2791,
          managerId: 19,
          name: "Жамбулат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1594/дали",
          managerId: 18,
          name: 'ЯТТ "Рахметов Бехруз Бахтиёрович"(Бехруз Бухара)дали',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1582,
          managerId: 18,
          name: "Зафар Премиум Голд",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8012,
          managerId: 16,
          name: "Гани ака Мебель цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1540,
          managerId: 18,
          name: 'OOO "YOUR BEST CHOISE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4533,
          managerId: 22,
          name: 'ООО "IST BATTERFLAY',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1619,
          managerId: 18,
          name: "Мега Мебико",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2036,
          managerId: 25,
          name: "Бахтиёр шпон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5005,
          managerId: 26,
          name: "Келажак Мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2037,
          managerId: 25,
          name: "Эршод Ташпромхолод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8013,
          managerId: 16,
          name: "Beellezzio Джоволиддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9522,
          managerId: 23,
          name: "Козим ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5006,
          managerId: 26,
          name: "Сарой мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3620,
          managerId: 20,
          name: 'ХК "Golden Standart Business',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3621,
          managerId: 20,
          name: "Альбина бухгалтер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1620,
          managerId: 18,
          name: 'ООО "Saniplast',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4534,
          managerId: 22,
          name: "Баходир ака INSA",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3125,
          managerId: 17,
          name: "Икбол мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1621,
          managerId: 18,
          name: "Флюр Ковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8014,
          managerId: 16,
          name: "Абдурахмон Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8015,
          managerId: 16,
          name: "Азиз Шош мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5007,
          managerId: 26,
          name: 'ООО "Windoors Production',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8016,
          managerId: 16,
          name: "Бобур Фергана",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1035,
          managerId: 16,
          name: "Уткир цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5008,
          managerId: 26,
          name: "Дельфин магазин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8017,
          managerId: 16,
          name: 'ООО "VAST CLEVER',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2792,
          managerId: 19,
          name: "Жахонгир",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8018,
          managerId: 16,
          name: "Саид ака Бектемир мебель",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3126,
          managerId: 17,
          name: "Упаковка Китай Саид ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2793,
          managerId: 19,
          name: "Руслан клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9523,
          managerId: 23,
          name: 'ООО "Diamond Cotton',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2038,
          managerId: 25,
          name: "Маршал Жами магазин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4535,
          managerId: 22,
          name: "Мурод ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8019,
          managerId: 16,
          name: "Бекзод 707",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5009,
          managerId: 26,
          name: "Достонов эшиклари",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2794,
          managerId: 19,
          name: "Шухрат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2795,
          managerId: 19,
          name: "Каскад Нижнебозуйской ГЭС",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2796,
          managerId: 19,
          name: 'ООО "SBD EXPORT',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4051,
          managerId: 21,
          name: "Фарход Гиждувон",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2797,
          managerId: 19,
          name: 'ООО "Original Orient Group',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2798,
          managerId: 19,
          name: 'ДУК "Bardanko Fayz Baraka',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8020,
          managerId: 16,
          name: "Альбатрос Аскар",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3622,
          managerId: 20,
          name: 'ООО "Хива Нихоли',
          regionId: gerRegionId("Хорезм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5010,
          managerId: 26,
          name: "Элегант двери",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8021,
          managerId: 16,
          name: "Нодир классик мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2799,
          managerId: 19,
          name: 'ЧП "Freelance Asia',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2800,
          managerId: 19,
          name: "В/Ч 65921",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1036,
          managerId: 16,
          name: "Кобил Домробод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4536,
          managerId: 22,
          name: "Камолхон Кукон",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2801,
          managerId: 19,
          name: "Хайрулло Жоми",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5011,
          managerId: 26,
          name: "Корлеоне",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8022,
          managerId: 16,
          name: "Камиль Хундай",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3623,
          managerId: 20,
          name: "Мурод Домбробод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3624,
          managerId: 20,
          name: "Lider Plast",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2802,
          managerId: 19,
          name: "Махсус Тиббий база",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3127,
          managerId: 17,
          name: "Упаковка Нуриддин Андижон",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1037,
          managerId: 16,
          name: "Урикзор Дониёр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9524,
          managerId: 23,
          name: "Бохо магазин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9525,
          managerId: 23,
          name: "Лола клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4537,
          managerId: 22,
          name: "Зиёвуддин Самарканд",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3128,
          managerId: 17,
          name: "Упаковка Кувондик ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3129,
          managerId: 17,
          name: "Упаковка Андрей Китай",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5012,
          managerId: 26,
          name: "Сирожиддин клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4538,
          managerId: 22,
          name: "Артур клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2803,
          managerId: 19,
          name: 'ООО "ISSIQ -QURILISH -USTO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3130,
          managerId: 17,
          name: "Фуркат Жомий клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4539,
          managerId: 22,
          name: "Хуршид клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5013,
          managerId: 26,
          name: "Василий клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1622,
          managerId: 18,
          name: 'ООО "NUR',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1623,
          managerId: 18,
          name: 'ООО "ASL OYNA',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1624,
          managerId: 18,
          name: "Юмшок мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8023,
          managerId: 16,
          name: "Мурод ака Сурхондарья",
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2804,
          managerId: 19,
          name: "TOVOQSOY YANGI DAVR",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2805,
          managerId: 19,
          name: "Tesla Electrical Group",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4540,
          managerId: 19,
          name: 'УК "Мирзо Улугбек укув СТК',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3625,
          managerId: 20,
          name: "Санжар Бек Топ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1625,
          managerId: 18,
          name: "Шухрат Бухара",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2806,
          managerId: 19,
          name: "Алишер аль Жамаль",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3626,
          managerId: 20,
          name: 'ООО "Туямуюн Махсус Курилиш',
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8024,
          managerId: 16,
          name: "Холмурод Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4053,
          managerId: 21,
          name: "Курбон уйига",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4541,
          managerId: 22,
          name: "Акбар Наманган",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5014,
          managerId: 26,
          name: "Рустам Жомий клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1038,
          managerId: 16,
          name: 'ООО "COOL WATER INVEST',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2807,
          managerId: 19,
          name: "Эркин шпатлёвка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2808,
          managerId: 19,
          name: 'АО "Fargonaazot',
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8025,
          managerId: 16,
          name: 'ООО "Antikorchi',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4054,
          managerId: 21,
          name: 'ЖШЖ "Муратбек мебель',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2809,
          managerId: 19,
          name: "Муслим ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4052,
          managerId: 21,
          name: "Уктам Бухоро новый",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5015,
          managerId: 26,
          name: "Абдуллазиз Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4542,
          managerId: 22,
          name: "Виктор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5016,
          managerId: 26,
          name: "KOZTEX",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4543,
          managerId: 22,
          name: "Гайрат Хоразм",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2810,
          managerId: 19,
          name: "М.Улугбек ТХТБ(шк.№148)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4055,
          managerId: 21,
          name: "Сенатор краска",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1627,
          managerId: 18,
          name: "Дмитрий Ковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2811,
          managerId: 19,
          name: "УП АТЭК",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2812,
          managerId: 19,
          name:
            "УзР ИИВ ЖИЭББ Махкумларга мулжалланган ихтисослашган касалхона",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1039,
          managerId: 16,
          name: "Урикзар Мировой",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4544,
          managerId: 22,
          name: "Мансур Бакир",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5017,
          managerId: 26,
          name: "Акбар Рич",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4545,
          managerId: 22,
          name: "Бахтиёр Пласт",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1626,
          managerId: 18,
          name: 'ООО "Kompressor Stroy Tex',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2813,
          managerId: 19,
          name: 'ООО "UZ CLAAS AGRO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1628,
          managerId: 18,
          name: 'ООО "OBOD SAMARA TRADE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5018,
          managerId: 26,
          name: "Абдукарим кристал",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3131,
          managerId: 17,
          name: "Мебель Рахатилла ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2814,
          managerId: 19,
          name: 'UK"Avtotransport Energoqurilish',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4546,
          managerId: 22,
          name: "Янгиобод Сирожиддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4547,
          managerId: 22,
          name: "Шавкат Наманган",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1040,
          managerId: 16,
          name: "Самарканд Ихтиёр,Учкун",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4548,
          managerId: 22,
          name: 'ООО "Mohiza Nur',
          regionId: gerRegionId('"Ташкент обл.'),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4056,
          managerId: 21,
          name: "Хоразм вил.автомобил йуллари ХББ",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2815,
          managerId: 19,
          name: "БРИЗ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4549,
          managerId: 22,
          name: "Алишер Урганч",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3132,
          managerId: 17,
          name: "Абдуллох Металл цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5019,
          managerId: 26,
          name: "Шавкат Циалковский (Шухрат)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4550,
          managerId: 22,
          name: "Мансур ака Куйлик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5020,
          managerId: 26,
          name: "Абдураим клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2816,
          managerId: 19,
          name: 'DUK "SUVSOZ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4551,
          managerId: 22,
          name: "Рахимжон Кукон",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3133,
          managerId: 17,
          name: "Умид упаковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2817,
          managerId: 19,
          name: "Авто шин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2818,
          managerId: 19,
          name: "Трансформаторный завод",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4552,
          managerId: 22,
          name: "Икром Кукон",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2819,
          managerId: 19,
          name: 'ООО "AN RAD-AERO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4553,
          managerId: 22,
          name: "Дилмурод Урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5021,
          managerId: 26,
          name: "Жавохир Бухоро",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2820,
          managerId: 19,
          name: 'СП "Уз Тонг Хонг Ко',
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4057,
          managerId: 21,
          name: 'ООО "Magma Group',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3134,
          managerId: 17,
          name: "Жомий Дониёр",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4554,
          managerId: 22,
          name: "Фергана Химзащита",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2821,
          managerId: 19,
          name: "Гамма Колор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2822,
          managerId: 19,
          name: 'ООО "Rational Boiler',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2823,
          managerId: 19,
          name: 'DK"Chirchiq Aviatsiya Tamirlash Zavodi',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4555,
          managerId: 22,
          name: "Кахрамон Самарканд",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3627,
          managerId: 20,
          name: 'ООО "RAW MATERIALS EXCLUSIVE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9526,
          managerId: 23,
          name: "Новый клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2824,
          managerId: 19,
          name: "Фаттох Рафик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4556,
          managerId: 22,
          name: "Толиб ака",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2825,
          managerId: 19,
          name: 'ООО "Ziyo-Zamir Mebel',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3135,
          managerId: 17,
          name: "Элёр мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3136,
          managerId: 17,
          name: "Фазлиддин мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4557,
          managerId: 22,
          name: "Хуршид ака Келес",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2826,
          managerId: 19,
          name: 'ИП "Медуница Валентина Семёновна',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4558,
          managerId: 22,
          name: "Давр мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5022,
          managerId: 26,
          name: "Элегант голд мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5023,
          managerId: 26,
          name: 'ООО "DJORIYA',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5024,
          managerId: 26,
          name: "Узкабель Миржалил ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3137,
          managerId: 17,
          name: "Упаковка Одил",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3044/Д",
          managerId: 22,
          name: 'ООО "КРОНОМАКС',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2827,
          managerId: 19,
          name: 'ООО"Perfect Profiles',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1614/Н",
          managerId: 24,
          name: "Осиё кабель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1509/Н",
          managerId: 24,
          name: 'ООО"NEFTEGAZMONTAJ',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1552/Н",
          managerId: 24,
          name: 'ООО"ALPHA-SPORT TECHNOLOGY',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1629,
          managerId: 24,
          name: "Искра Изатоп",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4559,
          managerId: 22,
          name: "Икром ака Турон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3138,
          managerId: 17,
          name: 'ООО "Alif Group',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4560,
          managerId: 22,
          name: "Шавкат Бухоро",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5025,
          managerId: 26,
          name: "Фуркат ака Жомий клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3139,
          managerId: 17,
          name: "Упаковка Олим ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3140,
          managerId: 17,
          name: "Шавкат Курувчи",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2828,
          managerId: 19,
          name: 'ДУК" УзРесп.През.Девониишлар бошкармаси,Курилиш бирлашмаси',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1520/Н",
          managerId: 24,
          name: 'АО "Максам Чирчик',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5026,
          managerId: 26,
          name: "Дилшод Жомий 24Д",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4561,
          managerId: 22,
          name: "Зухриддин Ориент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1532/Р",
          managerId: 16,
          name: "Авто Респект Роад",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1630,
          managerId: 24,
          name: "Яна Китай Упаковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2829,
          managerId: 19,
          name: "Чирчикское ВТКИУ МОРУ",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2830,
          managerId: 19,
          name: 'ООО "ARM COMPOSITE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2831,
          managerId: 19,
          name: 'ООО "Raw Materials Exclusive',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3141,
          managerId: 17,
          name: "DIM REAL PRINT",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5027,
          managerId: 26,
          name: "Юсуф пластик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3142,
          managerId: 17,
          name: "Упаковка Азамат",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8026,
          managerId: 16,
          name: 'ООО "Жамоат Эшиклари',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2832,
          managerId: 19,
          name: "Кирпичный Рафик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1533/Н",
          managerId: 24,
          name: 'ООО "Clean Work',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1596/Н",
          managerId: 24,
          name: 'АО "Suvsanoatmash',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4562,
          managerId: 22,
          name: 'СП ООО "Bektemir Metall Kons.',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "2021/А",
          managerId: 19,
          name: 'ООО "Тошкент Металлоконструкция',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2833,
          managerId: 19,
          name: "М.Улугбекский РМО ЦМПП",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8027,
          managerId: 16,
          name: "Зокир ака Бухара",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2834,
          managerId: 19,
          name: "Давр Эзоз Барака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1573/Д",
          managerId: 22,
          name: "Одил Хол",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1528/H",
          managerId: 24,
          name: "Texno-Temp",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3506/H",
          managerId: 24,
          name: 'ООО "Крантас Груп',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2835,
          managerId: 19,
          name: "М.Улугбек ТТБ МКТП",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1022,
          managerId: 16,
          name: "Эльдор Бухоро",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2836,
          managerId: 19,
          name: 'ГУП "Узбекистон МТРК Медиамаркази',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8028,
          managerId: 16,
          name: "Фарход Назарбек",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8029,
          managerId: 16,
          name: "Дониёр Назарбек",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2837,
          managerId: 19,
          name: "Эргашев Тимур",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3536/О",
          managerId: 26,
          name: 'ЧП "Бахтиёров Иззатилла"(Чукурсой Рустам)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2838,
          managerId: 19,
          name: "Дядя Толик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3614/О",
          managerId: 26,
          name: "Фуркат Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2839,
          managerId: 19,
          name: 'ХК "CHUST TEXTILE',
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1631,
          managerId: 24,
          name: 'СП ООО "Kimyo Himoya Taminot',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1573/Н",
          managerId: 24,
          name: "Одил Хол",
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2840,
          managerId: 19,
          name: "Улугбек Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3541/О",
          managerId: 26,
          name: "Циалковский Мухитдин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3543/О",
          managerId: 26,
          name: "Абдуборий Циалковский",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5028,
          managerId: 26,
          name: 'ООО "BELLA PORTE',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3143,
          managerId: 17,
          name: "Саид Урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "4010/С",
          managerId: 20,
          name: "Ихтиёр ака Бек Топи",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1548/Н",
          managerId: 24,
          name: 'БГПС" А.Ж.',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1510/Р",
          managerId: 16,
          name: 'ХК"PENG SHENG CHARM',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2841,
          managerId: 19,
          name: 'ИП ООО "Ceramic Power',
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3546/О",
          managerId: 26,
          name: "Нигмат круг Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3628,
          managerId: 20,
          name: "Зафар Эшик Цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1583/Н",
          managerId: 24,
          name: "Сервис Буратино",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4058,
          managerId: 21,
          name: 'ООО "СТМ КОЛОР',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2842,
          managerId: 19,
          name: "Нургали",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2843,
          managerId: 19,
          name: 'ООО "Grifon',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3144,
          managerId: 17,
          name: "Primа Mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1632,
          managerId: 24,
          name: 'ООО "Antikorchi" клиент',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3145,
          managerId: 17,
          name: "Rayyona Exclusive",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3629,
          managerId: 20,
          name: "Улугбек клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4563,
          managerId: 22,
          name: "Карши Жахонгир Радиатор",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5029,
          managerId: 26,
          name: 'ООО  "Shaharnursistema',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3146,
          managerId: 17,
          name: 'ХФ"Анварбек',
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1593/Н",
          managerId: 24,
          name: 'АО "Jizzax Akkumulyator Zavodi',
          regionId: gerRegionId("Жиззах"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3123/О",
          managerId: 26,
          name: "Каш мебель клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "2014/Н",
          managerId: 24,
          name: 'Petromaruz Overseas"LLP',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1633,
          managerId: 24,
          name: 'ООО "Innovation Sifat',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3545/О",
          managerId: 26,
          name: "Рустам Жомий круг клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3630,
          managerId: 20,
          name: "Даврон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3147,
          managerId: 17,
          name: "Содик клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1634,
          managerId: 24,
          name: "Борис Нукус",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "2026/А",
          managerId: 19,
          name: "Кодирия ГЭСлар каскади",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1584/Н",
          managerId: 24,
          name: 'ООО"Jarqurgonneftqaytaishlash',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "4012/О",
          managerId: 26,
          name: "Хаким ака Гвардейский",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3521/О",
          managerId: 26,
          name: "Кенг макон мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2844,
          managerId: 19,
          name: "Наманган вил.Махсус эксплуатация-монтаж булими",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4564,
          managerId: 22,
          name: "Зуфар ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2845,
          managerId: 19,
          name: "Коракалпогистон Респ.махсус урнатиш ва фойдаланиш булими",
          regionId: gerRegionId("Нукус"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1635,
          managerId: 24,
          name: 'НГМК"-ПО НМЗ" НГМК клиент',
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2846,
          managerId: 19,
          name: "Нурулло",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2847,
          managerId: 19,
          name: 'ООО "FIBECO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "9501/Н",
          managerId: 24,
          name: "Махмуд Урикзор клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "9514/Н",
          managerId: 24,
          name: 'ООО "Трест -12',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3631,
          managerId: 20,
          name: "Бурон клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8030,
          managerId: 16,
          name: "Ровшан Коканд",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4565,
          managerId: 22,
          name: "Хуршид тожик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1636,
          managerId: 24,
          name: 'ООО "Elektro-Qurilish-Montaj-Tarmoq',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4059,
          managerId: 21,
          name: "Жахонгир краскачи",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3148,
          managerId: 17,
          name: 'ООО "Grand Avto Hamkor',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4566,
          managerId: 22,
          name: "Бахтиёр Турон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2848,
          managerId: 19,
          name: 'ООО "Ecoplast Systems',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4567,
          managerId: 22,
          name: "Нематилло металл",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5030,
          managerId: 26,
          name: "Гвар-Давид",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1637,
          managerId: 24,
          name: 'СП "Tong Da Gang Tie',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3632,
          managerId: 20,
          name: 'ООО "Абдуазизхон Люкс Курилиш"(Трест -12)',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3149,
          managerId: 17,
          name: 'ООО "Master Print',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8031,
          managerId: 16,
          name: "Акмал ака Самарканд",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2849,
          managerId: 19,
          name: "Дильмурод",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4568,
          managerId: 22,
          name: "Маруф Бухоро",
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2850,
          managerId: 19,
          name: "В/Ч 02616",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8032,
          managerId: 16,
          name: "Джамшид Андижан",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1041,
          managerId: 16,
          name: "Куйлюк Мансур ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4060,
          managerId: 21,
          name: "Разовый клиент (хамер)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2851,
          managerId: 19,
          name: "Palang HPD Water Construction",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4569,
          managerId: 22,
          name: "Ахмат ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9527,
          managerId: 23,
          name: "Маргилон бинокор таъмир курилиш",
          regionId: gerRegionId("Маргилон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1042,
          managerId: 16,
          name: 'QK "Qobiljon Pоlimer',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8033,
          managerId: 16,
          name: "Носир Мухаммад",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8034,
          managerId: 16,
          name: "Санжар Хорезм",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5031,
          managerId: 26,
          name: "Нурилла клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1638,
          managerId: 24,
          name: 'ШК "Сариосиё-Двигатель',
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1639,
          managerId: 24,
          name: "Улугбек ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8035,
          managerId: 16,
          name: "Бахром нц",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1640,
          managerId: 24,
          name: "Алишер",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2852,
          managerId: 19,
          name: 'Узсувкурилиштаъминот"Республика бирлашмаси',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4570,
          managerId: 22,
          name: "Каримака Куйлик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3633,
          managerId: 20,
          name: 'ООО"Stroy Dvor',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5032,
          managerId: 26,
          name: "Зангиота Имкон Мебель ЗИМ",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5033,
          managerId: 26,
          name: "Азим Урикзор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5034,
          managerId: 26,
          name: "Илхом ака Кукон",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9528,
          managerId: 23,
          name: 'ООО "Engineering Construction Company',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9529,
          managerId: 23,
          name: 'ООО "Grand Metall Stroy',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8036,
          managerId: 16,
          name: "Фарход металл цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8037,
          managerId: 16,
          name: "Иброхим ака Корасу цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2853,
          managerId: 19,
          name: "Арлан",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2854,
          managerId: 19,
          name: 'ШК "Element Qurilish',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2855,
          managerId: 19,
          name: "Учебный центр специальн.Под.СГБ Руз.",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2856,
          managerId: 19,
          name: "Кирилл",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4571,
          managerId: 22,
          name: "Руслан KREMOFF",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4572,
          managerId: 22,
          name: "Азизбек",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4061,
          managerId: 21,
          name: "Шерзод ака СМУ ГАИ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3150,
          managerId: 17,
          name: "Ахрор ака упаковка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3634,
          managerId: 20,
          name: "Шовкат цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3151,
          managerId: 17,
          name: "Elit Mebel",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1641,
          managerId: 24,
          name: "Артур",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8038,
          managerId: 16,
          name: "Улугбек ака Куйлик",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5035,
          managerId: 26,
          name: "Миржамол ака строй магазин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8039,
          managerId: 16,
          name: "Музафар Жомий",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8040,
          managerId: 16,
          name: "Джахонгир ака Карши",
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2857,
          managerId: 19,
          name: 'ООО "Triumvirat Biznes Qurilish',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2858,
          managerId: 19,
          name: "Валера",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3635,
          managerId: 20,
          name: "Тилла клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1642,
          managerId: 24,
          name: "Ёдгор ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1643,
          managerId: 24,
          name: "Камин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1644,
          managerId: 24,
          name: "Power Construction Corporation Of China LTD",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8041,
          managerId: 16,
          name: "Достонхужа Той тепа цех",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5036,
          managerId: 26,
          name: "Greentree system",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2859,
          managerId: 19,
          name: "Туямуйин гидроузелини ишлатиш бошкармаси",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1645,
          managerId: 24,
          name: "General Motors Uzbekistan АЖ Хоразм фил.",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8042,
          managerId: 16,
          name: "Нурмухамад",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8043,
          managerId: 16,
          name: "Тахир Каканд",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5037,
          managerId: 26,
          name: "Ойбек Жомий 21Д.",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3636,
          managerId: 20,
          name: 'ДУК "Бухоро Аэропорти',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8044,
          managerId: 16,
          name: "Электрор Куйлюк",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2860,
          managerId: 19,
          name: "Навоий куприклардан фойдаланиш УК",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2861,
          managerId: 19,
          name: "Жомбой ТЙФУК",
          regionId: gerRegionId("Самарканд"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2862,
          managerId: 19,
          name: "Аму-Бухоро машина канали Кизилтепа туман бошкармаси",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2863,
          managerId: 19,
          name: 'Maratbek va Shoxruxmirzo"ХК',
          regionId: gerRegionId("Кашкадарё"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1043,
          managerId: 16,
          name: "Каракалпаки Артур",
          regionId: gerRegionId("Каракалпакстан"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1646,
          managerId: 24,
          name: "Reliance Int.Logistics &Trade",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2864,
          managerId: 19,
          name: "Таможенный комитет Ташкентской области",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8045,
          managerId: 16,
          name: "Олим ака ТАШМИ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1647,
          managerId: 24,
          name: "Музаффар Elektro Group",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1603/А",
          managerId: 19,
          name: 'ЧП "The Real Business Аlliance',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2865,
          managerId: 19,
          name: 'ООО "Rovuston Qurilish Servis',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2866,
          managerId: 19,
          name: "Хоразм вил.махсус фойдаланиш-монтаж Давлат корхонаси",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2867,
          managerId: 19,
          name: 'ООО"Tash Promxolod',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4062,
          managerId: 21,
          name: "Хусниддин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2868,
          managerId: 19,
          name: "Косонсой тум.хужалиги пудрат таъмирлаш фойдаланиш корхонаси",
          regionId: gerRegionId("Наманган"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2869,
          managerId: 19,
          name: "Optimus-Engineering",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9530,
          managerId: 23,
          name: 'ПУ "Enter Engineering Pte/Ltd"-Газли',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3152,
          managerId: 17,
          name: "Мирворис",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "1626/Н",
          managerId: 24,
          name: 'ООО  "Kompressor Stroy Tex',
          regionId: gerRegionId("Бухара"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3153,
          managerId: 17,
          name: 'СП ООО "Jiashili-Guliston Kimyo Sanoati',
          regionId: gerRegionId("Джиззак"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4573,
          managerId: 22,
          name: "Абдурашид",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9531,
          managerId: 23,
          name: 'ХК "Server-Servis -Plus',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "4011/Д",
          managerId: 22,
          name: 'Автотракторрадиатор" Узбекистон Россия Кушма Корхонаси',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2870,
          managerId: 19,
          name: "В/Ч 82801",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2871,
          managerId: 19,
          name: 'AJ "Тошкент Механика заводи',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8046,
          managerId: 16,
          name: "Медуза Стар Дильшод ака",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2872,
          managerId: 19,
          name: "Мадамин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1648,
          managerId: 24,
          name: "Сергей",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2873,
          managerId: 19,
          name: "Toshkent Yog Moy Kombinati",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2874,
          managerId: 19,
          name: 'ХК "Original Sifat Savdo',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2875,
          managerId: 19,
          name: 'ИП АО "Texno Continental',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3154,
          managerId: 17,
          name: "Элит мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9532,
          managerId: 23,
          name: "Икром ака шпатлёвка",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4063,
          managerId: 21,
          name: "Жахон Бек Топ",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1649,
          managerId: 24,
          name: "Шермат",
          regionId: gerRegionId("Хоразм"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3155,
          managerId: 17,
          name: "Мусо мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8047,
          managerId: 16,
          name: "Шохжахон",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2876,
          managerId: 19,
          name: 'Toshkent Yo`lovchi Vagonlarni Qurish va Ta`mirlash Zavodi "AO',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2877,
          managerId: 19,
          name: "Фаргона вилоят прокуратураси",
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8048,
          managerId: 16,
          name: "Шерзод Карасув 6",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9533,
          managerId: 23,
          name: 'ООО "Ride Systems',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3637,
          managerId: 20,
          name: "Шовкат Навои",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8049,
          managerId: 16,
          name: 'ЧП "Худайбердиев О.Т.',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1044,
          managerId: 16,
          name: 'ООО ИП "Surhancementinvest',
          regionId: gerRegionId("Сурхандарья"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 4574,
          managerId: 22,
          name: 'Vodiy Trade"корхонаси',
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2878,
          managerId: 19,
          name: "Давр Энергия комплект (Нурлан)",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8050,
          managerId: 16,
          name: "Махмуджон бизнес",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2880,
          managerId: 19,
          name: "Абдулборий текстиль",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1650,
          managerId: 24,
          name: "Дмитрий Ковка клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1651,
          managerId: 24,
          name: "Асрор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 1652,
          managerId: 24,
          name: "Резолют Колор",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: "3511/Д",
          managerId: 17,
          name: 'ХК"Valley Color',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8051,
          managerId: 16,
          name: "Акурган Теплица",
          regionId: gerRegionId("Ташкентская область"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 3156,
          managerId: 17,
          name: "Абдумалик ТТЗ мебель",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8052,
          managerId: 16,
          name: "Фарид Сергели",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 9534,
          managerId: 23,
          name: 'ЧП "AL-VASIL',
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 5038,
          managerId: 26,
          name: "Шохрух ака Андижон",
          regionId: gerRegionId("Андижон"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2881,
          managerId: 19,
          name: "Мухритдин",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2882,
          managerId: 19,
          name: "Фарход",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 8053,
          managerId: 16,
          name: 'ООО "Модем Орион',
          regionId: gerRegionId("Фергана"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2883,
          managerId: 19,
          name: "Зарафшанское Управление Строительства ГП НГМК",
          regionId: gerRegionId("Навои"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2884,
          managerId: 19,
          name: "Михаил клиент",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2885,
          managerId: 19,
          name: "Мусо",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2886,
          managerId: 19,
          name: "Ридван",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        },
        {
          icc: 2887,
          managerId: 19,
          name: "Саша",
          regionId: gerRegionId("Ташкент"),
          itn: "",
          contactPerson: "",
          phone: "",
          sphere: ""
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("Clients", null, {})
};
