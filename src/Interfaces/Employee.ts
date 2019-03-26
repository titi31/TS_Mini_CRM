import {Company} from "./../Company";
export interface EmployeeI{
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	company: Company;
	description: string;
}