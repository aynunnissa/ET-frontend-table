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
    "avatar":"https://robohash.org/quoipsumvel.png?size=50x50&set=set1",
    "name":"Gianina Balloch",
    "date":"2024-01-21",
    "due_date":"2024-01-21",
    "total":"$9.63",
    "balance":"$2.40",
    "status":"paid"
  },
  {
    "id":2,
    "avatar":"https://robohash.org/nonautquod.png?size=50x50&set=set1",
    "name":"Modesta Gitting",
    "date":"2024-01-21",
    "due_date":"2024-01-21",
    "total":"$1.48",
    "balance":"$1.63",
    "status":"paid"
  },
  {
    "id":3,
    "avatar":"https://robohash.org/etblanditiisquo.png?size=50x50&set=set1",
    "name":"Ilario Lovat",
    "date":"2024-01-21",
    "due_date":"2024-01-21",
    "total":"$7.56",
    "balance":"$6.89",
    "status":"paid"
  },
  // {
  //   "id":4,
  //   "avatar":"https://robohash.org/advoluptatestempora.png?size=50x50&set=set1",
  //   "name":"Dilan Thormwell",
  //   "date":"12/15/2023",
  //   "due_date":"12/12/2023",
  //   "total":"$0.89",
  //   "balance":"$2.92",
  //   "status":"paid"
  // },
  // {
  //   "id":5,
  //   "avatar":"https://robohash.org/nihilducimusnecessitatibus.png?size=50x50&set=set1",
  //   "name":"Analiese Gothard",
  //   "date":"2/29/2024",
  //   "due_date":"3/23/2024",
  //   "total":"$5.69",
  //   "balance":"$1.67",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":6,
  //   "avatar":"https://robohash.org/minimaexpeditacommodi.png?size=50x50&set=set1",
  //   "name":"Currey Vasilov",
  //   "date":"2/11/2024",
  //   "due_date":"1/5/2024",
  //   "total":"$3.86",
  //   "balance":"$4.94",
  //   "status":"draft"
  // },
  // {
  //   "id":7,
  //   "avatar":"https://robohash.org/perspiciatisexcepturidolor.png?size=50x50&set=set1",
  //   "name":"Guillema Bente",
  //   "date":"2/19/2024",
  //   "due_date":"4/22/2024",
  //   "total":"$0.30",
  //   "balance":"$9.86",
  //   "status":"draft"
  // },
  // {
  //   "id":8,
  //   "avatar":"https://robohash.org/molestiaesintvoluptatibus.png?size=50x50&set=set1",
  //   "name":"Richardo Tirkin",
  //   "date":"4/7/2024",
  //   "due_date":"1/31/2024",
  //   "total":"$6.84",
  //   "balance":"$6.46",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":9,
  //   "avatar":"https://robohash.org/architectoiustoqui.png?size=50x50&set=set1",
  //   "name":"Reynard Rogerson",
  //   "date":"8/26/2024",
  //   "due_date":"3/20/2024",
  //   "total":"$2.86",
  //   "balance":"$4.17",
  //   "status":"paid"
  // },
  // {
  //   "id":10,
  //   "avatar":"https://robohash.org/inventoreearumeos.png?size=50x50&set=set1",
  //   "name":"Norina Tolcher",
  //   "date":"12/17/2023",
  //   "due_date":"7/12/2024",
  //   "total":"$3.27",
  //   "balance":"$0.72",
  //   "status":"paid"
  // },
  // {
  //   "id":11,
  //   "avatar":"https://robohash.org/praesentiumquostempora.png?size=50x50&set=set1",
  //   "name":"Kirby MacElroy",
  //   "date":"8/12/2024",
  //   "due_date":"7/22/2024",
  //   "total":"$3.15",
  //   "balance":"$4.97",
  //   "status":"draft"
  // },
  // {
  //   "id":12,
  //   "avatar":"https://robohash.org/cumquenesciuntquibusdam.png?size=50x50&set=set1",
  //   "name":"Janey Matthewman",
  //   "date":"4/15/2024",
  //   "due_date":"1/6/2024",
  //   "total":"$0.02",
  //   "balance":"$1.26",
  //   "status":"draft"
  // },
  // {
  //   "id":13,
  //   "avatar":"https://robohash.org/temporibusetid.png?size=50x50&set=set1",
  //   "name":"Brok Beevors",
  //   "date":"11/30/2023",
  //   "due_date":"5/9/2024",
  //   "total":"$4.60",
  //   "balance":"$6.92",
  //   "status":"draft"
  // },
  // {
  //   "id":14,
  //   "avatar":"https://robohash.org/illosolutasimilique.png?size=50x50&set=set1",
  //   "name":"Karie Lauder",
  //   "date":"9/15/2024",
  //   "due_date":"11/28/2023",
  //   "total":"$2.47",
  //   "balance":"$4.57",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":15,
  //   "avatar":"https://robohash.org/illononomnis.png?size=50x50&set=set1",
  //   "name":"Amil Todd",
  //   "date":"6/12/2024",
  //   "due_date":"8/26/2024",
  //   "total":"$4.86",
  //   "balance":"$8.84",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":16,
  //   "avatar":"https://robohash.org/dignissimostemporibuset.png?size=50x50&set=set1",
  //   "name":"Dom Heibl",
  //   "date":"10/8/2024",
  //   "due_date":"3/1/2024",
  //   "total":"$5.12",
  //   "balance":"$5.52",
  //   "status":"paid"
  // },
  // {
  //   "id":17,
  //   "avatar":"https://robohash.org/evenietofficiiset.png?size=50x50&set=set1",
  //   "name":"Lalo Attenbarrow",
  //   "date":"8/18/2024",
  //   "due_date":"5/17/2024",
  //   "total":"$3.55",
  //   "balance":"$8.25",
  //   "status":"draft"
  // },
  // {
  //   "id":18,
  //   "avatar":"https://robohash.org/etconsequaturest.png?size=50x50&set=set1",
  //   "name":"Biddy Ulster",
  //   "date":"1/20/2024",
  //   "due_date":"6/24/2024",
  //   "total":"$1.32",
  //   "balance":"$0.03",
  //   "status":"draft"
  // },
  // {
  //   "id":19,
  //   "avatar":"https://robohash.org/nemopossimusperferendis.png?size=50x50&set=set1",
  //   "name":"Dulsea Nelthorpe",
  //   "date":"7/7/2024",
  //   "due_date":"9/12/2024",
  //   "total":"$1.80",
  //   "balance":"$8.11",
  //   "status":"draft"
  // },
  // {
  //   "id":20,
  //   "avatar":"https://robohash.org/utodiocorrupti.png?size=50x50&set=set1",
  //   "name":"Danica Filippyev",
  //   "date":"2/27/2024",
  //   "due_date":"10/23/2023",
  //   "total":"$2.03",
  //   "balance":"$1.86",
  //   "status":"draft"
  // },
  // {
  //   "id":21,
  //   "avatar":"https://robohash.org/dignissimosetprovident.png?size=50x50&set=set1",
  //   "name":"Jenda Sharland",
  //   "date":"10/18/2023",
  //   "due_date":"3/24/2024",
  //   "total":"$6.83",
  //   "balance":"$1.59",
  //   "status":"paid"
  // },
  // {
  //   "id":22,
  //   "avatar":"https://robohash.org/molestiasinciduntdoloremque.png?size=50x50&set=set1",
  //   "name":"Mattie Menel",
  //   "date":"8/30/2024",
  //   "due_date":"1/26/2024",
  //   "total":"$3.05",
  //   "balance":"$9.15",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":23,
  //   "avatar":"https://robohash.org/quinisidolorem.png?size=50x50&set=set1",
  //   "name":"Rawley Crut",
  //   "date":"1/19/2024",
  //   "due_date":"12/18/2023",
  //   "total":"$6.38",
  //   "balance":"$0.12",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":24,
  //   "avatar":"https://robohash.org/aliquidnullafuga.png?size=50x50&set=set1",
  //   "name":"Linn Coucher",
  //   "date":"10/25/2023",
  //   "due_date":"12/16/2023",
  //   "total":"$1.77",
  //   "balance":"$2.28",
  //   "status":"draft"
  // },
  // {
  //   "id":25,
  //   "avatar":"https://robohash.org/omnisetin.png?size=50x50&set=set1",
  //   "name":"Jess Bruff",
  //   "date":"4/23/2024",
  //   "due_date":"4/11/2024",
  //   "total":"$5.48",
  //   "balance":"$7.55",
  //   "status":"draft"
  // },
  // {
  //   "id":26,
  //   "avatar":"https://robohash.org/inevenietporro.png?size=50x50&set=set1",
  //   "name":"Else Jakubowski",
  //   "date":"10/31/2023",
  //   "due_date":"9/14/2024",
  //   "total":"$1.29",
  //   "balance":"$2.98",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":27,
  //   "avatar":"https://robohash.org/laborequovel.png?size=50x50&set=set1",
  //   "name":"Tony Dadswell",
  //   "date":"8/3/2024",
  //   "due_date":"4/7/2024",
  //   "total":"$8.44",
  //   "balance":"$8.73",
  //   "status":"draft"
  // },
  // {
  //   "id":28,
  //   "avatar":"https://robohash.org/doloribusetcumque.png?size=50x50&set=set1",
  //   "name":"Laurel Cleave",
  //   "date":"8/9/2024",
  //   "due_date":"5/19/2024",
  //   "total":"$3.36",
  //   "balance":"$1.77",
  //   "status":"draft"
  // },
  // {
  //   "id":29,
  //   "avatar":"https://robohash.org/quidoloribusdeserunt.png?size=50x50&set=set1",
  //   "name":"Quinton Dimitriou",
  //   "date":"10/26/2023",
  //   "due_date":"7/21/2024",
  //   "total":"$2.92",
  //   "balance":"$5.91",
  //   "status":"draft"
  // },
  // {
  //   "id":30,
  //   "avatar":"https://robohash.org/quaeipsumvoluptatem.png?size=50x50&set=set1",
  //   "name":"Kristy Langran",
  //   "date":"8/18/2024",
  //   "due_date":"2/15/2024",
  //   "total":"$7.59",
  //   "balance":"$5.41",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":31,
  //   "avatar":"https://robohash.org/quibusdamnatusid.png?size=50x50&set=set1",
  //   "name":"Abbott Mills",
  //   "date":"12/13/2023",
  //   "due_date":"11/16/2023",
  //   "total":"$3.34",
  //   "balance":"$2.50",
  //   "status":"draft"
  // },
  // {
  //   "id":32,
  //   "avatar":"https://robohash.org/impeditlaborumat.png?size=50x50&set=set1",
  //   "name":"Yettie Garthshore",
  //   "date":"6/3/2024",
  //   "due_date":"7/14/2024",
  //   "total":"$8.91",
  //   "balance":"$7.06",
  //   "status":"paid"
  // },
  // {
  //   "id":33,
  //   "avatar":"https://robohash.org/delectusnullaperferendis.png?size=50x50&set=set1",
  //   "name":"Pernell Classen",
  //   "date":"4/26/2024",
  //   "due_date":"9/30/2024",
  //   "total":"$5.84",
  //   "balance":"$3.83",
  //   "status":"paid"
  // },
  // {
  //   "id":34,
  //   "avatar":"https://robohash.org/aperiamnonfugit.png?size=50x50&set=set1",
  //   "name":"Field Crocroft",
  //   "date":"1/9/2024",
  //   "due_date":"3/30/2024",
  //   "total":"$3.73",
  //   "balance":"$4.63",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":35,
  //   "avatar":"https://robohash.org/voluptatempariaturid.png?size=50x50&set=set1",
  //   "name":"Fulton Blackledge",
  //   "date":"7/22/2024",
  //   "due_date":"2/12/2024",
  //   "total":"$7.24",
  //   "balance":"$9.84",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":36,
  //   "avatar":"https://robohash.org/illumvelqui.png?size=50x50&set=set1",
  //   "name":"Wilek Tendahl",
  //   "date":"9/20/2024",
  //   "due_date":"3/28/2024",
  //   "total":"$7.02",
  //   "balance":"$2.49",
  //   "status":"draft"
  // },
  // {
  //   "id":37,
  //   "avatar":"https://robohash.org/rationequiet.png?size=50x50&set=set1",
  //   "name":"Sancho Stenett",
  //   "date":"12/4/2023",
  //   "due_date":"7/11/2024",
  //   "total":"$8.86",
  //   "balance":"$7.85",
  //   "status":"paid"
  // },
  // {
  //   "id":38,
  //   "avatar":"https://robohash.org/laboreutpossimus.png?size=50x50&set=set1",
  //   "name":"Kermy Eginton",
  //   "date":"10/14/2024",
  //   "due_date":"9/30/2024",
  //   "total":"$0.09",
  //   "balance":"$6.22",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":39,
  //   "avatar":"https://robohash.org/natusestest.png?size=50x50&set=set1",
  //   "name":"Nathanial Samworth",
  //   "date":"10/6/2024",
  //   "due_date":"4/8/2024",
  //   "total":"$0.79",
  //   "balance":"$3.62",
  //   "status":"draft"
  // },
  // {
  //   "id":40,
  //   "avatar":"https://robohash.org/nonquidemratione.png?size=50x50&set=set1",
  //   "name":"Daren Mosen",
  //   "date":"6/29/2024",
  //   "due_date":"12/4/2023",
  //   "total":"$8.78",
  //   "balance":"$5.22",
  //   "status":"draft"
  // },
  // {
  //   "id":41,
  //   "avatar":"https://robohash.org/eummolestiaeet.png?size=50x50&set=set1",
  //   "name":"Dode MacIlhargy",
  //   "date":"8/6/2024",
  //   "due_date":"4/12/2024",
  //   "total":"$4.81",
  //   "balance":"$3.78",
  //   "status":"draft"
  // },
  // {
  //   "id":42,
  //   "avatar":"https://robohash.org/cupiditatequidemaut.png?size=50x50&set=set1",
  //   "name":"Jolee Novakovic",
  //   "date":"11/3/2023",
  //   "due_date":"6/1/2024",
  //   "total":"$8.12",
  //   "balance":"$0.29",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":43,
  //   "avatar":"https://robohash.org/autsintea.png?size=50x50&set=set1",
  //   "name":"Heinrik Stolte",
  //   "date":"1/10/2024",
  //   "due_date":"9/2/2024",
  //   "total":"$8.34",
  //   "balance":"$7.11",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":44,
  //   "avatar":"https://robohash.org/velquibusdamut.png?size=50x50&set=set1",
  //   "name":"Bearnard Baldick",
  //   "date":"2/4/2024",
  //   "due_date":"1/27/2024",
  //   "total":"$1.07",
  //   "balance":"$1.31",
  //   "status":"paid"
  // },
  // {
  //   "id":45,
  //   "avatar":"https://robohash.org/velitsitsit.png?size=50x50&set=set1",
  //   "name":"Jorge Chopin",
  //   "date":"4/13/2024",
  //   "due_date":"5/9/2024",
  //   "total":"$7.35",
  //   "balance":"$7.28",
  //   "status":"paid"
  // },
  // {
  //   "id":46,
  //   "avatar":"https://robohash.org/eteosharum.png?size=50x50&set=set1",
  //   "name":"Robert Buxcy",
  //   "date":"2/19/2024",
  //   "due_date":"5/11/2024",
  //   "total":"$7.07",
  //   "balance":"$2.84",
  //   "status":"draft"
  // },
  // {
  //   "id":47,
  //   "avatar":"https://robohash.org/nisipariaturenim.png?size=50x50&set=set1",
  //   "name":"Raymond Creany",
  //   "date":"3/8/2024",
  //   "due_date":"11/30/2023",
  //   "total":"$7.53",
  //   "balance":"$2.41",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":48,
  //   "avatar":"https://robohash.org/delectusnonrepudiandae.png?size=50x50&set=set1",
  //   "name":"Jillian Vearncomb",
  //   "date":"9/29/2024",
  //   "due_date":"8/8/2024",
  //   "total":"$3.81",
  //   "balance":"$5.93",
  //   "status":"paid"
  // },
  // {
  //   "id":49,
  //   "avatar":"https://robohash.org/omnisnecessitatibuscumque.png?size=50x50&set=set1",
  //   "name":"Marten Megainey",
  //   "date":"4/25/2024",
  //   "due_date":"5/8/2024",
  //   "total":"$4.82",
  //   "balance":"$7.35",
  //   "status":"partial_payment"
  // },
  // {
  //   "id":50,
  //   "avatar":"https://robohash.org/pariaturillonesciunt.png?size=50x50&set=set1",
  //   "name":"Herb Wellwood",
  //   "date":"12/8/2023",
  //   "due_date":"1/1/2024",
  //   "total":"$6.10",
  //   "balance":"$8.93",
  //   "status":"paid"}
]