/* ==========================================
   OM COMPUTERS & AINEX SERVICES
   Version 2
   data.js
========================================== */

const APP={

name:"OM COMPUTERS & AINEX SERVICES",

phone:"9236414171",

version:"2.0"

};

/* ==========================================
   CATEGORIES
========================================== */

const categories=[

{
id:1,
icon:"🖥️",
name:"CSC Services"
},

{
id:2,
icon:"🏛️",
name:"eDistrict Services"
},

{
id:3,
icon:"🏦",
name:"Banking Services"
},

{
id:4,
icon:"🆔",
name:"Aadhaar Services"
},

{
id:5,
icon:"🪪",
name:"PAN Card Services"
},

{
id:6,
icon:"🌾",
name:"PM Kisan Services"
},

{
id:7,
icon:"🚗",
name:"Parivahan & Sarathi"
},

{
id:8,
icon:"👴",
name:"Pension Services"
},

{
id:9,
icon:"🏦",
name:"EPFO / ESIC"
},

{
id:10,
icon:"🗳️",
name:"Voter ID Services"
},

{
id:11,
icon:"📋",
name:"Sarkari Result & Online Forms"
}

];

/* ==========================================
   SERVICES
========================================== */

const services=[];

/* आगे सभी Services
services.push() से जोड़ेंगे */
/* ==========================================
   CSC SERVICES
========================================== */

services.push(

{
id:1,
category:1,
icon:"🖥️",
name:"CSC Login",
portal:"csc_login"
},

{
id:2,
category:1,
icon:"📂",
name:"DigiLocker",
portal:"digilocker"
},

{
id:3,
category:1,
icon:"💳",
name:"DigiPay",
portal:"digipay"
},

{
id:4,
category:1,
icon:"👷",
name:"eShram Registration",
portal:"eshram"
},

{
id:5,
category:1,
icon:"🛠️",
name:"PM Vishwakarma",
portal:"pm_vishwakarma"
},

{
id:6,
category:1,
icon:"🏭",
name:"Udyam Registration",
portal:"udyam"
},

{
id:7,
category:1,
icon:"👴",
name:"NPS Registration",
portal:"nps"
},

{
id:8,
category:1,
icon:"📄",
name:"Jeevan Pramaan",
portal:"jeevan_pramaan"
},

{
id:9,
category:1,
icon:"❤️",
name:"Ayushman Bharat",
portal:"ayushman"
},

{
id:10,
category:1,
icon:"🛂",
name:"Passport Services",
portal:"passport"
},

{
id:11,
category:1,
icon:"🛡️",
name:"LIC Premium Payment",
portal:"lic_payment"
},

{
id:12,
category:1,
icon:"❤️",
name:"Life Insurance",
portal:"life_insurance"
},

{
id:13,
category:1,
icon:"🏥",
name:"Health Insurance",
portal:"health_insurance"
},

{
id:14,
category:1,
icon:"🛡️",
name:"PMJJBY",
portal:"pmjjby"
},

{
id:15,
category:1,
icon:"🚑",
name:"PMSBY",
portal:"pmsby"
}

);

/* Next Part:
eDistrict Services */
/* ==========================================
   eDISTRICT SERVICES
========================================== */

services.push(

{
id:16,
category:2,
icon:"💰",
name:"Income Certificate",
portal:"income_certificate"
},

{
id:17,
category:2,
icon:"🏷️",
name:"Caste Certificate",
portal:"caste_certificate"
},

{
id:18,
category:2,
icon:"🏠",
name:"Domicile Certificate",
portal:"domicile_certificate"
},

{
id:19,
category:2,
icon:"🍚",
name:"New Ration Card",
portal:"ration_apply"
},

{
id:20,
category:2,
icon:"✏️",
name:"Ration Card Correction",
portal:"ration_correction"
},

{
id:21,
category:2,
icon:"⬇️",
name:"Ration Card Download",
portal:"ration_download"
},

{
id:22,
category:2,
icon:"📋",
name:"Ration Card Status",
portal:"ration_status"
},

{
id:23,
category:2,
icon:"📄",
name:"Application Status",
portal:"application_status"
}

);

/* ==========================================
   Next Part:
   Banking Services
   (Spice Money + Airtel Payments Bank
   + NSDL Payments Bank)
========================================== */
/* ==========================================
   BANKING SERVICES
========================================== */

services.push(

/* ==========================
   Spice Money
========================== */

{
id:24,
category:3,
icon:"💸",
name:"AEPS Cash Withdrawal",
portal:"spice_aeps"
},

{
id:25,
category:3,
icon:"💰",
name:"Money Transfer",
portal:"spice_money_transfer"
},

{
id:26,
category:3,
icon:"🏦",
name:"Cash Deposit",
portal:"spice_cash_deposit"
},

{
id:27,
category:3,
icon:"📄",
name:"Mini Statement",
portal:"spice_mini_statement"
},

{
id:28,
category:3,
icon:"💳",
name:"Balance Enquiry",
portal:"spice_balance"
},

{
id:29,
category:3,
icon:"⚡",
name:"Electricity Bill Payment",
portal:"electricity_bill"
},

{
id:30,
category:3,
icon:"💧",
name:"Water Bill Payment",
portal:"water_bill"
},

{
id:31,
category:3,
icon:"🔥",
name:"Gas Bill Payment",
portal:"gas_bill"
},

{
id:32,
category:3,
icon:"📱",
name:"Mobile Recharge",
portal:"mobile_recharge"
},

{
id:33,
category:3,
icon:"📺",
name:"DTH Recharge",
portal:"dth_recharge"
},

{
id:34,
category:3,
icon:"💳",
name:"BBPS Services",
portal:"bbps"
},

{
id:35,
category:3,
icon:"🚆",
name:"Railway Ticket Booking",
portal:"railway_ticket"
},

{
id:36,
category:3,
icon:"🚌",
name:"Bus Ticket Booking",
portal:"bus_ticket"
},

{
id:37,
category:3,
icon:"✈️",
name:"Flight Ticket Booking",
portal:"flight_ticket"
},

/* ==========================
   Airtel Payments Bank
========================== */

{
id:38,
category:3,
icon:"📱",
name:"Airtel Account Opening",
portal:"airtel_account"
},

{
id:39,
category:3,
icon:"💵",
name:"Airtel AEPS",
portal:"airtel_aeps"
},

{
id:40,
category:3,
icon:"💸",
name:"Airtel Money Transfer",
portal:"airtel_money_transfer"
},

{
id:41,
category:3,
icon:"🏦",
name:"Airtel Cash Deposit",
portal:"airtel_cash_deposit"
},

{
id:42,
category:3,
icon:"💳",
name:"Airtel Balance Enquiry",
portal:"airtel_balance"
},

/* ==========================
   NSDL Payments Bank
========================== */

{
id:43,
category:3,
icon:"🏦",
name:"NSDL Account Opening",
portal:"nsdl_account"
},

{
id:44,
category:3,
icon:"💵",
name:"NSDL AEPS",
portal:"nsdl_aeps"
},

{
id:45,
category:3,
icon:"💸",
name:"NSDL Money Transfer",
portal:"nsdl_money_transfer"
},

{
id:46,
category:3,
icon:"🏦",
name:"NSDL Cash Deposit",
portal:"nsdl_cash_deposit"
},

{
id:47,
category:3,
icon:"💳",
name:"NSDL Balance Enquiry",
portal:"nsdl_balance"
}

);

/* ==========================================
   Next Part:
   Aadhaar Services
   + PAN Card Services
========================================== */
/* ==========================================
   AADHAAR SERVICES
========================================== */

services.push(

{
id:48,
category:4,
icon:"✏️",
name:"Aadhaar Update",
portal:"aadhaar_update"
},

{
id:49,
category:4,
icon:"📱",
name:"Mobile Number Update",
portal:"aadhaar_mobile"
},

{
id:50,
category:4,
icon:"🏠",
name:"Address Update",
portal:"aadhaar_address"
},

{
id:51,
category:4,
icon:"⬇️",
name:"Download e-Aadhaar",
portal:"aadhaar_download"
},

{
id:52,
category:4,
icon:"💳",
name:"PVC Aadhaar Card",
portal:"aadhaar_pvc"
},

{
id:53,
category:4,
icon:"✅",
name:"Aadhaar Verification",
portal:"aadhaar_verify"
},

/* ==========================================
   PAN CARD SERVICES
========================================== */

{
id:54,
category:5,
icon:"🆕",
name:"New PAN Card",
portal:"pan_apply"
},

{
id:55,
category:5,
icon:"✏️",
name:"PAN Correction",
portal:"pan_correction"
},

{
id:56,
category:5,
icon:"⬇️",
name:"e-PAN Download",
portal:"epan_download"
},

{
id:57,
category:5,
icon:"💳",
name:"PAN Reprint",
portal:"pan_reprint"
},

{
id:58,
category:5,
icon:"🔗",
name:"PAN Aadhaar Link",
portal:"pan_link"
},

{
id:59,
category:5,
icon:"📋",
name:"PAN Status",
portal:"pan_status"
}

);

/* ==========================================
   Next Part:
   PM Kisan Services
========================================== */
/* ==========================================
   PM KISAN SERVICES
========================================== */

services.push(

{
id:60,
category:6,
icon:"🌾",
name:"PM Kisan Registration",
portal:"pmkisan_registration"
},

{
id:61,
category:6,
icon:"✅",
name:"PM Kisan e-KYC",
portal:"pmkisan_ekyc"
},

{
id:62,
category:6,
icon:"📋",
name:"Beneficiary Status",
portal:"pmkisan_status"
},

{
id:63,
category:6,
icon:"💰",
name:"Installment Status",
portal:"pmkisan_installment"
},

{
id:64,
category:6,
icon:"👨‍🌾",
name:"Farmer Registry",
portal:"farmer_registry"
},

{
id:65,
category:6,
icon:"🌱",
name:"Crop Registration",
portal:"crop_registration"
},

{
id:66,
category:6,
icon:"📄",
name:"Farmer Certificate",
portal:"farmer_certificate"
},

{
id:67,
category:6,
icon:"💳",
name:"Kisan Credit Card (KCC)",
portal:"kcc"
},

{
id:68,
category:6,
icon:"🗺️",
name:"UP Bhulekh",
portal:"up_bhulekh"
},

{
id:69,
category:6,
icon:"📑",
name:"Khatauni",
portal:"khatauni"
},

{
id:70,
category:6,
icon:"📍",
name:"Bhu Naksha",
portal:"bhu_naksha"
}

);

/* ==========================================
   Next Part:
   Parivahan & Sarathi
========================================== */
/* ==========================================
   PARIVAHAN & SARATHI SERVICES
========================================== */

services.push(

{
id:71,
category:7,
icon:"🚗",
name:"Vehicle Information",
portal:"vehicle_information"
},

{
id:72,
category:7,
icon:"📄",
name:"RC Services",
portal:"rc_services"
},

{
id:73,
category:7,
icon:"⬇️",
name:"RC Download",
portal:"rc_download"
},

{
id:74,
category:7,
icon:"📋",
name:"RC Status",
portal:"rc_status"
},

{
id:75,
category:7,
icon:"🚘",
name:"Driving Licence Apply",
portal:"dl_apply"
},

{
id:76,
category:7,
icon:"🎓",
name:"Learner Licence",
portal:"ll_apply"
},

{
id:77,
category:7,
icon:"♻️",
name:"Driving Licence Renewal",
portal:"dl_renewal"
},

{
id:78,
category:7,
icon:"⬇️",
name:"Driving Licence Download",
portal:"dl_download"
},

{
id:79,
category:7,
icon:"📍",
name:"Driving Licence Status",
portal:"dl_status"
},

{
id:80,
category:7,
icon:"🚨",
name:"e-Challan Payment",
portal:"echallan"
},

{
id:81,
category:7,
icon:"💰",
name:"Vehicle Tax Payment",
portal:"vehicle_tax"
},

{
id:82,
category:7,
icon:"🌫️",
name:"PUC Certificate",
portal:"puc_certificate"
},

{
id:83,
category:7,
icon:"🔖",
name:"HSRP Number Plate",
portal:"hsrp"
},

{
id:84,
category:7,
icon:"🏷️",
name:"FASTag Apply",
portal:"fastag_apply"
},

{
id:85,
category:7,
icon:"💳",
name:"FASTag Recharge",
portal:"fastag_recharge"
}

);

/* ==========================================
   Next Part:
   Pension
   EPFO / ESIC
   Voter ID
   Sarkari Result
========================================== */
/* ==========================================
   PENSION SERVICES
========================================== */

services.push(

{
id:86,
category:8,
icon:"👴",
name:"Old Age Pension",
portal:"old_age_pension"
},

{
id:87,
category:8,
icon:"👩",
name:"Widow Pension",
portal:"widow_pension"
},

{
id:88,
category:8,
icon:"♿",
name:"Disability Pension",
portal:"disability_pension"
},

{
id:89,
category:8,
icon:"📋",
name:"Pension Status",
portal:"pension_status"
},

{
id:90,
category:8,
icon:"🪪",
name:"Jeevan Pramaan",
portal:"jeevan_pramaan"
},

/* ==========================================
   EPFO / ESIC
========================================== */

{
id:91,
category:9,
icon:"🏦",
name:"UAN Activation",
portal:"uan_activation"
},

{
id:92,
category:9,
icon:"📖",
name:"EPF Passbook",
portal:"epf_passbook"
},

{
id:93,
category:9,
icon:"💰",
name:"PF Balance",
portal:"pf_balance"
},

{
id:94,
category:9,
icon:"📄",
name:"PF Claim Status",
portal:"pf_claim_status"
},

{
id:95,
category:9,
icon:"💸",
name:"PF Withdrawal",
portal:"pf_withdrawal"
},

{
id:96,
category:9,
icon:"🏥",
name:"ESIC Services",
portal:"esic_services"
},

/* ==========================================
   VOTER ID
========================================== */

{
id:97,
category:10,
icon:"🆕",
name:"New Voter Registration",
portal:"voter_apply"
},

{
id:98,
category:10,
icon:"✏️",
name:"Voter ID Correction",
portal:"voter_correction"
},

{
id:99,
category:10,
icon:"⬇️",
name:"Download e-EPIC",
portal:"voter_download"
},

{
id:100,
category:10,
icon:"📋",
name:"Voter ID Status",
portal:"voter_status"
},

/* ==========================================
   SARKARI RESULT & ONLINE FORMS
========================================== */

{
id:101,
category:11,
icon:"📢",
name:"Sarkari Result",
portal:"sarkari_result"
},

{
id:102,
category:11,
icon:"💼",
name:"Latest Jobs",
portal:"latest_jobs"
},

{
id:103,
category:11,
icon:"🎫",
name:"Admit Card",
portal:"admit_card"
},

{
id:104,
category:11,
icon:"🏆",
name:"Exam Result",
portal:"exam_result"
},

{
id:105,
category:11,
icon:"📝",
name:"Answer Key",
portal:"answer_key"
},

{
id:106,
category:11,
icon:"📄",
name:"Online Forms",
portal:"online_forms"
},

{
id:107,
category:11,
icon:"🎓",
name:"Scholarship",
portal:"scholarship"
},

{
id:108,
category:11,
icon:"🏫",
name:"University Results",
portal:"university_results"
}

);

/* ==========================================
   END OF data.js
========================================== */
