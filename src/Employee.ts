import {EmployeeI} from "./Interfaces/Employee";
import {Company} from "./Company";
export class Employee implements EmployeeI{

    private _first_name: string;
    private _last_name: string;
    private _email:  string;
    private _phone: string;
    private _company: Company;
    private _description: string;
  
    constructor(firstname: string,lastname: string,email: string , phone: string,company: Company,description: string) {
		this._first_name = firstname;
		this._last_name = lastname;
		this._email=email;
		this._phone = phone;
		this._company=company;
		this._description=description;
	}
	toString(): string{
	 	return this._first_name+" "+this._last_name+" "+this._email+" "+this._phone+" "+this._description;
	 }
	get first_name() : string {
		return this._first_name; 
	}
	set first_name(firstname : string) {
		this._first_name = firstname;
	}
	get last_name() : string {
		return this._last_name; 
	}
	set last_name(lastname : string) {
		this._last_name = lastname;
	}
	get email() : string {
		return this._email; 
	}
	set email(email : string) {
		this._email = email;
	}
	get phone() : string {
		return this._phone; 
	}
	set phone(phone : string) {
		this._phone = phone;
	}
	get company() : Company {
		return this._company;
	}
	set company(company : Company) {
		this._company = company;
	}
	get description() : string {
		return this._description;
	}
	set description(description : string) {
		this._description = description;
	}

}