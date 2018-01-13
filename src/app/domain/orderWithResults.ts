import {ObjectWithHateoasLinks} from './objectWithHateoasLinks';

export interface OrderWithResults extends ObjectWithHateoasLinks {
  vioNumber: string;
  patientFirstName: string;
  patientLastName: string;
  patientStreet: string;
  patientPostalCode: string;
  patientCity: string;
  patientCountry: string;
  patientBirthday: string;
  patientGender: string;
  sampleDate: string;
  hasUndisplayableResults: boolean;
  labCommentsAsHtml: string;
  report: ReportEntry[];
  orderingDoctor: OrderingDoctor;
}

export interface ReportEntry {
  level: Number;
  text: string;
  entryType: string;
}

export interface OrderingDoctor {
  doctorNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}
