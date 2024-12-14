import { TransactionType } from "./transaction.interface";

export class TransactionHelper {
  static constructId = (item: TransactionType) => {
    let name = item.account.name.toLowerCase().replaceAll(" ", "-");
    let date = item.date
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll(":", "");
    //
    return name + "-" + date;
  };
}

export default [
  {
    account: {
      name: "Olawale Williams Aluko",
      display_name: "Wale",
    },
    amount: 280000,
    narration: "Contract deposit - 🚀 MyIslandVisa",
    date: "2024-08-13 01:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-plateaumed.png",
      name: "Plateaumed Nigeria Limted",
      display_name: "Plateaumed Nig. Ltd.",
    },
    amount: 1300000,
    narration: "June salary",
    date: "2024-07-02 01:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-cardio.png",
      name: "Cardio Africa",
      display_name: "Cardio Autotech",
    },
    amount: 642500,
    narration: "May salary",
    date: "2024-05-29 01:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-eloope.png",
      name: "Eloope, Inc.",
      display_name: "Expense ERP",
    },
    amount: 150000,
    narration: "June salary",
    date: "2024-06-28 01:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-buzzbite.png",
      name: "Buzzbite Limted",
      display_name: "buzzbite.io",
    },
    amount: 472727,
    narration: "December salary",
    date: "2023-12-23 17:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-excitepl.png",
      name: "Excite Panacea Limited",
      display_name: "Excite Panacea Ltd.",
    },
    amount: 200000,
    narration: "December salary",
    date: "2023-12-19 17:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-semo23.png",
      name: "Sandra Weds Emmanuel",
      display_name: "SEMO23",
    },
    amount: 1497010,
    narration: "Wedding contributions",
    date: "2023-12-04 12:00:00",
    type: "CR",
  },
  {
    account: {
      avatar: "account-sehiaghe.png",
      name: "Sandra Ehiaghe Tugbeh",
      display_name: "The Wife",
    },
    amount: -45000,
    narration: "New Hair",
    date: "2023-11-15 01:00:00",
    type: "DR",
  },
  {
    account: {
      avatar: "account-skambia.png",
      name: "Stella Obiajuru Kambia",
      display_name: "🍐",
    },
    amount: -10000,
    narration: "Dentist appointment",
    date: "2023-07-24 01:00:00",
    type: "DR",
  },
  {
    account: {
      avatar: "account-rtk.png",
      name: "Retinken Nigeria Limited",
      display_name: "Retinken Nig. Ltd.",
    },
    amount: 45000,
    narration: "Software License",
    date: "2023-04-05 09:00:00",
    type: "CR",
  },
];
