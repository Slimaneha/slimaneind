
DepensesSepS1 = [
  MotantSepS11 = 5.26,
  MotantSepS12 = 5.70,
  MotantSepS13 = 1.50,
  MotantSepS14 = 11,
  MotantSepS15 = 1.32,
  MotantSepS16 = 11.80,
  MotantSepS17 = 22,
  MotantSepS18 = 29.95,
  MotantSepS19 = 30,
  MotantSepS19 = 7.39,
  MotantSepS19 = 7.89,
  MotantSepS19 = 29.95-16.90,




  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0,
  MotantSepS19 = 0, 





];

OrganismeDEPSepS1 = [
  NomSepS11 = "LIDL Somain",
  NomSepS12 = "Bk Sommain",
  NomSepS13 = "Total",
  NomSepS14 = "Tabac",
  NomSepS15 = "Intermaché",
  NomSepS16 = "Tabac",
  NomSepS17 = "NAN SAMOSSA",
  NomSepS18 = "AVIA",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",
  NomSepS19 = "",


]

DateDEPSepS1 = [
  DATES11 = "30/08/21",
  DATES12 = "30/08/21",
  DATES13 = "30/08/21" ,
  DATES14 = "30/08/21",
  DATES15 = "30/08/21",
  DATES16 = "30/08/21",
  DATES17 = "30/08/21",
  DATES18 = "31/08/21",
  DATES19 = "Retrait",
  DATES110 = "LIDL Mouscron",
  DATES111 = "ALDI",
  DATES112 = "",

  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "",
  DATES112 = "", 
]
// Calcule Valeur Dép 
SommeDepSepS1 = 0;
for (let de = 0; de < DepensesSepS1.length; de++) {
  SommeDepSepS1 += DepensesSepS1[de];
}
// Information Rentrée Semaine 1
RentreeSepS1 = [
  MotanRtSepS11 = 54.11,
  MotantRSepS12 = 0,
  MotantRSepS13 = 0,
  MotantRSepS14 = 0,
  MotantRSepS15 = 0,
  MotantRSepS16 = 0,
  MotantRSepS17 = 0,
  MotantRSepS18 = 0,
  MotantRSepS19 = 0,
];
OrganismeRentSepS1 = [
  NomSepS11 = "UBER",
  NomSepS12 = "",
  NomSepS13 = "",
  NomSepS14 = "",
  NomSepS15 = "",
  NomSepS16 = "",
  NomSepS17 = "",
  NomSepS18 = "",
  NomSepS19 = "",
  NomSepS110 = "",
  NomSepS111 = "",
  NomSepS112 = "",
]
DateRentSepS1 = [
  DATES11 = "28/08/21",
  DATES12 = "",
  DATES13 = "",
  DATES14 = "",
  DATES15 = "",
  DATES16 = "",
  DATES17 = "",
  DATES18 = "",
  DATES19 = "",
  DATES110 = "",
  DATES111 = "",
  DATES112 = "",
]

//Calcule Valeur Rentrée 
SommeRenteSepS1 = 0;
for (let re = 0; re < RentreeSepS1.length; re++) {
  SommeRenteSepS1 += Math.round(RentreeSepS1[re] * 1) / 1;
}
UrsafSepS1 = 0;
UrsafSepS1 = Math.round(SommeRenteSepS1 * 1) / 1 * poursantages / 100;
