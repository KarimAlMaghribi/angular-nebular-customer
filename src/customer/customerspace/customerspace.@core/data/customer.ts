import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  lastname: string;
  phonenumber: string;
  additionalInfo: string[];
  lastVisit: Date
}

export abstract class Customer {

//getter
  abstract getAllCustomer(): Observable<Customer[]>;
  abstract getCustomerById(id: number): Observable<Customer>;
  abstract getCustomerByPhoneNumber(id: number): Observable<Customer>;

//setter  
  abstract setLocalCustomer(customer: Customer);
  abstract setSystemCustomer(customer: Customer);

//edit customer instance
  abstract setCustomerName(id: number, name:string);
  abstract setCustomerLastName(id: number, lastname:string);
  abstract setCustomerPhoneNumber(id: number, phoneNumber:string);


  


}