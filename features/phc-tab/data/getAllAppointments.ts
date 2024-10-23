export interface IAppointment {
  id: number;
  name: string;
  age: string;
  sex: string;
  phone: string;
  relations: Array<{ id: number; name: string; phone: string }>;
  clinic: { id: number; name: string };
  appointment: {
    time: string | Date;
    date: string | Date;
  };
  treatment: {
    ward?: string;
    bed?: number | string;
    staff: { name: string; role: string };
    updated_at: string | Date;
  };
}

export default [
  {
    id: 1234567,
    name: "Blessing Zaria",
    age: "12d",
    sex: "F",
    phone: "07034567890",
    relations: [{ id: 1, name: "Ken Agnes", phone: "07034567890" }],
    clinic: { id: 1, name: "General/Outpatient" },
    appointment: {
      time: "17:59:00",
      date: "2023-12-31",
    },
    treatment: {
      staff: { name: "Paulene Henshaw", role: "CHO" },
      updated_at: "2023-12-31 17:59:00",
    },
  },
  {
    id: 8901234,
    name: "Agnes Ebubechukwu",
    age: "34y",
    sex: "F",
    phone: "07034567890",
    relations: [{ id: 1, name: "Deji Oluwasola", phone: "07034567890" }],
    clinic: { id: 2, name: "Antenatal" },
    appointment: {
      time: "17:59:00",
      date: "2023-12-31",
    },
    treatment: {
      bed: 3,
      staff: { name: "Dr Abas Akin", role: "CHO" },
      updated_at: "2023-12-31 17:59:00",
    },
  },
  {
    id: 5678901,
    name: "Blessing Zaria",
    age: "12d",
    sex: "F",
    phone: "07034567890",
    relations: [{ id: 1, name: "Ken Agnes", phone: "07034567890" }],
    clinic: { id: 3, name: "Labor" },
    appointment: {
      time: "17:59:00",
      date: "2023-12-31",
    },
    treatment: {
      staff: { name: "Paulene Henshaw", role: "CHO" },
      updated_at: "2023-12-31 17:59:00",
    },
  },
];
