import { Observable } from 'rxjs';

export interface Customer {
  name: string;
  lastname: string;
  phonenumber: string;
  additionalInfo: string[];
}

export abstract class Customer {

  abstract getAllCustomer(): Observable<Customer[]>;
  abstract getCustomerById(id: number): Observable<Customer>;
  abstract getCustomerByPhoneNumber(id: number): Observable<Customer>;

}