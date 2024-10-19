interface InvoiceItem {
  id: number,
  avatar?: string,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  status?: string
}

export const invoices: Array<InvoiceItem> = [
  {
    "id":1,
    "name":"Terrence Ibeson",
    "date":"2024-07-23",
    "due_date":"2023-07-16",
    "total":"$11.18",
    "balance":"$42.42"
  },
  {
    "id":2,
    "name":"Stearn Richen",
    "date":"2023-07-05",
    "due_date":"2024-03-19",
    "total":"$47.31",
    "balance":"$85.97"
  },
  {
    "id":3,
    "name":"Amye La Croce",
    "date":"2023-08-10",
    "due_date":"2024-05-09",
    "total":"$53.28",
    "balance":"$26.86"
  },
  {
    "id":4,
    "name":"Renard Dwire",
    "date":"2024-10-09",
    "due_date":"2023-09-04",
    "total":"$98.87",
    "balance":"$4.44"
  },
  {
    "id":5,
    "name":"Gregg Awdry",
    "date":"2024-03-21",
    "due_date":"2023-10-19",
    "total":"$39.85",
    "balance":"$86.02"
  },
  {
    "id":6,
    "name":"Shay Muttock",
    "date":"2024-07-24",
    "due_date":"2024-03-17",
    "total":"$60.91",
    "balance":"$44.43"
  },
  {
    "id":7,
    "name":"Ofella Quipp",
    "date":"2024-07-26",
    "due_date":"2024-03-10",
    "total":"$68.55",
    "balance":"$54.31"
  },
  {
    "id":8,
    "name":"Dieter Rowswell",
    "date":"2023-11-05",
    "due_date":"2023-05-12",
    "total":"$7.15",
    "balance":"$9.63"
  },
  {
    "id":9,
    "name":"Gregg Greenleaf",
    "date":"2023-06-07",
    "due_date":"2023-12-13",
    "total":"$6.65",
    "balance":"$12.62"
  },
  {
    "id":10,
    "name":"Cayla Row",
    "date":"2023-12-23",
    "due_date":"2024-08-22",
    "total":"$7.79",
    "balance":"$27.45"
  },
  {
    "id":11,
    "name":"Ricard Campbell",
    "date":"2022-11-14",
    "due_date":"2024-08-10",
    "total":"$63.17",
    "balance":"$67.48"
  },
  {
    "id":12,
    "name":"Kennedy Ferrone",
    "date":"2022-11-20",
    "due_date":"2023-03-09",
    "total":"$8.55",
    "balance":"$69.10"
  },
  {
    "id":13,
    "name":"Noah Benedicte",
    "date":"2023-07-28",
    "due_date":"2024-05-28",
    "total":"$88.06",
    "balance":"$21.69"
  },
  {
    "id":14,
    "name":"Dori Rodgers",
    "date":"2023-07-16",
    "due_date":"2024-06-01",
    "total":"$69.98",
    "balance":"$84.68"
  },
  {
    "id":15,
    "name":"Camilla Cassell",
    "date":"2023-07-13",
    "due_date":"2023-06-08",
    "total":"$79.07",
    "balance":"$42.09"
  },
  {
    "id":16,
    "name":"Edward MacCall",
    "date":"2023-02-11",
    "due_date":"2024-05-20",
    "total":"$9.63",
    "balance":"$74.01"
  },
  {
    "id":17,
    "name":"Jessee Chisnell",
    "date":"2024-06-12",
    "due_date":"2024-08-06",
    "total":"$42.13",
    "balance":"$27.80"
  },
  {
    "id":18,
    "name":"Carlin Denekamp",
    "date":"2023-04-12",
    "due_date":"2023-03-14",
    "total":"$62.98",
    "balance":"$87.80"
  },
  {
    "id":19,
    "name":"Rosita Rigardeau",
    "date":"2024-07-15",
    "due_date":"2023-11-15",
    "total":"$64.76",
    "balance":"$37.89"
  },
  {
    "id":20,
    "name":"Modestia O'Logan",
    "date":"2023-08-05",
    "due_date":"2024-01-10",
    "total":"$99.06",
    "balance":"$57.32"
  },
  {
    "id":21,
    "name":"Sergei Cameron",
    "date":"2023-04-06",
    "due_date":"2023-05-30",
    "total":"$25.18",
    "balance":"$75.79"
  },
  {
    "id":22,
    "name":"Augustine McPeake",
    "date":"2024-03-16",
    "due_date":"2023-04-11",
    "total":"$84.06",
    "balance":"$2.67"
  },
  {
    "id":23,
    "name":"Allard End",
    "date":"2024-04-18",
    "due_date":"2024-01-10",
    "total":"$14.79",
    "balance":"$16.03"
  },
  {
    "id":24,
    "name":"Tedda Ingleson",
    "date":"2024-01-15",
    "due_date":"2024-02-10",
    "total":"$38.58",
    "balance":"$53.14"
  },
  {
    "id":25,
    "name":"Kellia Caustic",
    "date":"2023-04-15",
    "due_date":"2023-07-26",
    "total":"$41.79",
    "balance":"$42.13"
  },
  {
    "id":26,
    "name":"Maxim Deverson",
    "date":"2024-04-05",
    "due_date":"2023-10-25",
    "total":"$10.70",
    "balance":"$96.61"
  },
  {
    "id":27,
    "name":"Gabbie Geeraert",
    "date":"2024-08-24",
    "due_date":"2024-09-05",
    "total":"$82.64",
    "balance":"$0.19"
  },
  {
    "id":28,
    "name":"Valma McComiskie",
    "date":"2023-02-09",
    "due_date":"2024-02-13",
    "total":"$31.40",
    "balance":"$47.47"
  },
  {
    "id":29,
    "name":"Angelo Branford",
    "date":"2023-10-07",
    "due_date":"2023-06-05",
    "total":"$14.93",
    "balance":"$12.23"
  },
  {
    "id":30,
    "name":"Robenia Filipic",
    "date":"2023-01-05",
    "due_date":"2023-06-11",
    "total":"$83.80",
    "balance":"$50.46"
  },
  {
    "id":31,
    "name":"Barbe Jeaves",
    "date":"2024-07-31",
    "due_date":"2023-07-31",
    "total":"$94.82",
    "balance":"$88.11"
  },
  {
    "id":32,
    "name":"Tessie McAleese",
    "date":"2024-05-22",
    "due_date":"2023-06-16",
    "total":"$18.31",
    "balance":"$17.16"
  },
  {
    "id":33,
    "name":"Wye Pittendreigh",
    "date":"2024-06-27",
    "due_date":"2023-05-26",
    "total":"$11.58",
    "balance":"$52.19"
  },
  {
    "id":34,
    "name":"Stephana Rochell",
    "date":"2023-05-21",
    "due_date":"2024-10-07",
    "total":"$68.39",
    "balance":"$42.82"
  },
  {
    "id":35,
    "name":"Simeon Ferraresi",
    "date":"2024-01-18",
    "due_date":"2023-12-12",
    "total":"$10.34",
    "balance":"$38.49"
  },
  {
    "id":36,
    "name":"Roderic Puddin",
    "date":"2022-12-19",
    "due_date":"2024-02-23",
    "total":"$73.82",
    "balance":"$64.57"
  },
  {
    "id":37,
    "name":"Ferguson Twitching",
    "date":"2023-03-12",
    "due_date":"2024-07-30",
    "total":"$14.99",
    "balance":"$63.50"
  },
  {
    "id":38,
    "name":"Jenna Shemmin",
    "date":"2024-03-07",
    "due_date":"2023-11-04",
    "total":"$76.08",
    "balance":"$77.85"
  },
  {
    "id":39,
    "name":"Nadia Porter",
    "date":"2024-08-18",
    "due_date":"2024-07-21",
    "total":"$10.75",
    "balance":"$28.71"
  },
  {
    "id":40,
    "name":"Karlen Demer",
    "date":"2024-08-05",
    "due_date":"2024-04-22",
    "total":"$20.13",
    "balance":"$86.47"
  },
  {
    "id":41,
    "name":"Aimee Oakly",
    "date":"2022-12-18",
    "due_date":"2024-08-21",
    "total":"$65.44",
    "balance":"$1.61"
  },
  {
    "id":42,
    "name":"Bessie Recke",
    "date":"2023-07-20",
    "due_date":"2024-09-27",
    "total":"$66.26",
    "balance":"$66.61"
  },
  {
    "id":43,
    "name":"Edeline Blazic",
    "date":"2023-07-16",
    "due_date":"2024-04-26",
    "total":"$97.89",
    "balance":"$81.37"
  },
  {
    "id":44,
    "name":"Johny Stronghill",
    "date":"2022-12-27",
    "due_date":"2024-08-08",
    "total":"$59.25",
    "balance":"$87.54"
  },
  {
    "id":45,
    "name":"Inna Eversley",
    "date":"2024-06-03",
    "due_date":"2024-08-13",
    "total":"$7.44",
    "balance":"$26.01"
  },
  {
    "id":46,
    "name":"Pen MacVean",
    "date":"2024-09-18",
    "due_date":"2023-12-04",
    "total":"$57.31",
    "balance":"$58.75"
  },
  {
    "id":47,
    "name":"Fania Pawlaczyk",
    "date":"2024-05-09",
    "due_date":"2023-06-03",
    "total":"$47.58",
    "balance":"$63.27"
  },
  {
    "id":48,
    "name":"Garrott Dawtry",
    "date":"2024-02-24",
    "due_date":"2024-03-26",
    "total":"$74.50",
    "balance":"$22.44"
  },
  {
    "id":49,
    "name":"Harald Sybe",
    "date":"2024-06-06",
    "due_date":"2023-04-14",
    "total":"$88.21",
    "balance":"$65.41"
  },
  {
    "id":50,
    "name":"Mervin Terbeek",
    "date":"2023-04-24",
    "due_date":"2024-01-25",
    "total":"$61.10",
    "balance":"$17.54"
  },
  {
    "id":51,
    "name":"Shellysheldon Woltering",
    "date":"2024-04-27",
    "due_date":"2023-11-10",
    "total":"$0.62",
    "balance":"$62.63"
  },
  {
    "id":52,
    "name":"Conan Bea",
    "date":"2023-09-08",
    "due_date":"2023-06-10",
    "total":"$84.41",
    "balance":"$75.17"
  },
  {
    "id":53,
    "name":"Orson Gladwell",
    "date":"2024-09-03",
    "due_date":"2023-09-30",
    "total":"$71.76",
    "balance":"$78.27"
  },
  {
    "id":54,
    "name":"Joceline Lehrahan",
    "date":"2024-05-20",
    "due_date":"2023-12-05",
    "total":"$59.90",
    "balance":"$78.00"
  },
  {
    "id":55,
    "name":"Dianne Patey",
    "date":"2024-05-16",
    "due_date":"2023-09-07",
    "total":"$62.23",
    "balance":"$57.40"
  },
  {
    "id":56,
    "name":"Esdras Braidon",
    "date":"2023-08-13",
    "due_date":"2023-05-18",
    "total":"$91.24",
    "balance":"$22.86"
  },
  {
    "id":57,
    "name":"Vanya Dorrington",
    "date":"2024-04-05",
    "due_date":"2024-04-30",
    "total":"$23.95",
    "balance":"$58.45"
  },
  {
    "id":58,
    "name":"Alyosha Bleier",
    "date":"2023-07-08",
    "due_date":"2023-02-25",
    "total":"$85.19",
    "balance":"$25.63"
  },
  {
    "id":59,
    "name":"Ruby Grierson",
    "date":"2024-09-24",
    "due_date":"2024-07-26",
    "total":"$51.39",
    "balance":"$38.12"
  },
  {
    "id":60,
    "name":"Nobe Couvert",
    "date":"2024-07-14",
    "due_date":"2023-04-04",
    "total":"$25.42",
    "balance":"$55.81"
  },
  {
    "id":61,
    "name":"Win Moff",
    "date":"2023-11-01",
    "due_date":"2023-04-18",
    "total":"$47.83",
    "balance":"$82.52"
  },
  {
    "id":62,
    "name":"Tom Lob",
    "date":"2022-12-16",
    "due_date":"2024-04-27",
    "total":"$90.64",
    "balance":"$0.12"
  },
  {
    "id":63,
    "name":"Hermie Weben",
    "date":"2023-10-30",
    "due_date":"2023-10-13",
    "total":"$29.59",
    "balance":"$17.36"
  },
  {
    "id":64,
    "name":"Adriane Nutter",
    "date":"2023-05-30",
    "due_date":"2023-02-23",
    "total":"$20.42",
    "balance":"$36.17"
  },
  {
    "id":65,
    "name":"Huberto Kiehne",
    "date":"2023-03-09",
    "due_date":"2024-06-15",
    "total":"$9.89",
    "balance":"$42.58"
  },
  {
    "id":66,
    "name":"Revkah Godehard.sf",
    "date":"2023-01-11",
    "due_date":"2024-07-13",
    "total":"$21.50",
    "balance":"$28.57"
  },
  {
    "id":67,
    "name":"Liana Gaylard",
    "date":"2024-08-14",
    "due_date":"2023-05-17",
    "total":"$37.86",
    "balance":"$17.26"
  },
  {
    "id":68,
    "name":"Philly Strelitzki",
    "date":"2023-03-27",
    "due_date":"2023-12-22",
    "total":"$91.10",
    "balance":"$88.31"
  },
  {
    "id":69,
    "name":"Jordan Espie",
    "date":"2024-03-28",
    "due_date":"2024-09-01",
    "total":"$71.49",
    "balance":"$65.48"
  },
  {
    "id":70,
    "name":"Zia Casine",
    "date":"2023-08-27",
    "due_date":"2023-02-19",
    "total":"$35.19",
    "balance":"$57.60"
  },
  {
    "id":71,
    "name":"Kerry Rooney",
    "date":"2023-09-23",
    "due_date":"2024-05-13",
    "total":"$80.11",
    "balance":"$38.39"
  },
  {
    "id":72,
    "name":"Elisa Tuckerman",
    "date":"2024-02-08",
    "due_date":"2023-05-01",
    "total":"$51.11",
    "balance":"$59.82"
  },
  {
    "id":73,
    "name":"Jereme Jiroutek",
    "date":"2023-02-02",
    "due_date":"2024-03-31",
    "total":"$84.44",
    "balance":"$7.72"
  },
  {
    "id":74,
    "name":"Ariela Cuniam",
    "date":"2023-06-05",
    "due_date":"2024-04-16",
    "total":"$57.14",
    "balance":"$71.52"
  },
  {
    "id":75,
    "name":"Britni Worviell",
    "date":"2023-11-18",
    "due_date":"2024-08-07",
    "total":"$14.88",
    "balance":"$53.16"
  },
  {
    "id":76,
    "name":"Morton Alenin",
    "date":"2024-02-02",
    "due_date":"2024-04-03",
    "total":"$98.52",
    "balance":"$85.39"
  },
  {
    "id":77,
    "name":"Claretta Lecointe",
    "date":"2023-03-15",
    "due_date":"2023-12-03",
    "total":"$59.34",
    "balance":"$16.20"
  },
  {
    "id":78,
    "name":"Orville Scopyn",
    "date":"2023-11-27",
    "due_date":"2023-10-01",
    "total":"$50.58",
    "balance":"$90.20"
  },
  {
    "id":79,
    "name":"Samson Messham",
    "date":"2024-04-25",
    "due_date":"2024-04-02",
    "total":"$68.55",
    "balance":"$71.81"
  },
  {
    "id":80,
    "name":"Randal Drinkwater",
    "date":"2023-06-20",
    "due_date":"2023-12-12",
    "total":"$95.19",
    "balance":"$78.79"
  },
  {
    "id":81,
    "name":"Helena Crandon",
    "date":"2024-01-07",
    "due_date":"2024-06-07",
    "total":"$12.80",
    "balance":"$85.03"
  },
  {
    "id":82,
    "name":"Jehu Coe",
    "date":"2024-06-21",
    "due_date":"2024-08-21",
    "total":"$18.38",
    "balance":"$74.10"
  },
  {
    "id":83,
    "name":"Katti Lindhe",
    "date":"2023-06-27",
    "due_date":"2023-03-06",
    "total":"$29.47",
    "balance":"$59.77"
  },
  {
    "id":84,
    "name":"Edmon Glavin",
    "date":"2023-01-13",
    "due_date":"2024-04-12",
    "total":"$38.55",
    "balance":"$96.79"
  },
  {
    "id":85,
    "name":"Sascha Dumbar",
    "date":"2024-09-21",
    "due_date":"2024-06-25",
    "total":"$83.60",
    "balance":"$95.03"
  },
  {
    "id":86,
    "name":"Suzi Kubera",
    "date":"2023-02-27",
    "due_date":"2024-09-12",
    "total":"$65.33",
    "balance":"$86.63"
  },
  {
    "id":87,
    "name":"Korey Kops",
    "date":"2022-12-09",
    "due_date":"2024-08-08",
    "total":"$39.75",
    "balance":"$56.61"
  },
  {
    "id":88,
    "name":"Haley Ivatts",
    "date":"2024-09-10",
    "due_date":"2023-11-07",
    "total":"$55.42",
    "balance":"$49.55"
  },
  {
    "id":89,
    "name":"Viviene Hodgin",
    "date":"2024-03-01",
    "due_date":"2023-04-23",
    "total":"$89.38",
    "balance":"$72.53"
  },
  {
    "id":90,
    "name":"Barby Higgoe",
    "date":"2024-04-19",
    "due_date":"2024-04-05",
    "total":"$7.18",
    "balance":"$36.92"
  },
  {
    "id":91,
    "name":"Weider Dudman",
    "date":"2024-04-05",
    "due_date":"2023-07-28",
    "total":"$11.74",
    "balance":"$30.66"
  },
  {
    "id":92,
    "name":"Mikol Gasson",
    "date":"2023-09-03",
    "due_date":"2023-11-26",
    "total":"$90.96",
    "balance":"$72.12"
  },
  {
    "id":93,
    "name":"Janelle Olsen",
    "date":"2023-08-29",
    "due_date":"2023-04-06",
    "total":"$93.62",
    "balance":"$58.36"
  },
  {
    "id":94,
    "name":"Tiertza Knock",
    "date":"2024-08-30",
    "due_date":"2023-06-01",
    "total":"$48.63",
    "balance":"$78.05"
  },
  {
    "id":95,
    "name":"Bobbette Cruddas",
    "date":"2023-08-30",
    "due_date":"2023-12-01",
    "total":"$57.19",
    "balance":"$52.51"
  },
  {
    "id":96,
    "name":"Ardelle de Leon",
    "date":"2023-10-26",
    "due_date":"2024-02-19",
    "total":"$85.14",
    "balance":"$37.48"
  },
  {
    "id":97,
    "name":"Rodney McCallam",
    "date":"2023-12-27",
    "due_date":"2024-04-02",
    "total":"$34.72",
    "balance":"$10.88"
  },
  {
    "id":98,
    "name":"Zorina Sturdey",
    "date":"2022-11-29",
    "due_date":"2024-05-20",
    "total":"$66.84",
    "balance":"$91.23"
  },
  {
    "id":99,
    "name":"Natale Soro",
    "date":"2024-09-18",
    "due_date":"2023-04-12",
    "total":"$38.66",
    "balance":"$44.07"
  },
  {
    "id":100,
    "name":"Sargent Crump",
    "date":"2024-04-13",
    "due_date":"2024-03-03",
    "total":"$81.87",
    "balance":"$68.09"
  }
]