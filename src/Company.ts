import {CompanyI} from "./Interfaces/index";
import {Employee} from "./Employee";
export class Company implements CompanyI{
	private _name: string;
	private _website: string;
	private _employee: Employee;
	private _region: string;
	private _zipCode: number;
	constructor(name: string,website: string,employee: Employee,region: string, zipCode: number) {
		this._name = name;
		this._website = website;
		this._employee= employee;
		this._region= region;
		this._zipCode = zipCode;
	}
	 toString(): string{
	 	return this._name+" "+this._website+" "+this._region+" "+this._zipCode;
	 }
	get name() : string {
		return this._name;
	}
	set name(name : string) {
		this._name = name;
	}
	get website() : string {
		return this._website;
	}
	set website(website : string) {
		this._website = website;
	}
	get employee() : Employee {
		return this._employee;
	}
	set employee(employee: Employee) {
		this._employee = employee;
	}
	get region() : string {
		return this._region; 
	}
	set region(region: string) {
		this._region = region;
	}
	get zipCode() : number {
		return this._zipCode;
	}
	set zipCode(zipCode : number) {
		this._zipCode = zipCode;
	}

}