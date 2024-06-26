import { Seller } from "../src/seller"
import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person";

describe('Interface', function () {
    it('should support in typescript', function () {

        const seller: Seller = {
            id: 1,
            name: 'Toko buku',
            nib: "12312312",
            npwp: "321321321"
        };

        seller.name = "Toko baju";

        console.info(seller);
        
    });

    it('should support function interface', function (){

        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);

    });

    it('should support indexable interface', function () {

        interface StringArray {
            [index: number]: string
        }

        const names : StringArray = ["Sahrul", "Rafi", "Zulfitra"];
        console.info(names);

    });

    it('should support indexable interface for non numebr index', function (){

        interface StringDictionary {
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            "name" : "Sahrul",
            "address" : "Indonesia"
        };

        expect(dictionary["name"]).toBe("Sahrul")
        expect(dictionary["address"]).toBe("Indonesia")
    });

    it('should support extends interface', function () {

        const employee: Employee = {
            id: "1",
            name: "Sahrul",
            division: "IT"
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Rafi",
            division: "IT",
            numberOfEmployees: 7
        };

        console.info(manager);

    });

    it('should support function in interface', function () {
        const person: Person = {
            name: "Sahrul",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Rafi"));
    });

    it('should support intersection types', function () {

        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Sahrul"
        };

        console.info(domain);
    });

    it('should support type assertions', function () {

        const person: any = {
            name: "Sahrul",
            age: 23
        };

        const person2 : Person = person as Person;
        // person2.sayHello("Rafi");

        console.info(person2);
    });
});