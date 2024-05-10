describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko buku',
            nib: "12312312",
            npwp: "321321321"
        };
        seller.name = "Toko baju";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Sahrul", "Rafi", "Zulfitra"];
        console.info(names);
    });
    it('should support indexable interface for non numebr index', function () {
        const dictionary = {
            "name": "Sahrul",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Sahrul");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Sahrul",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Rafi",
            division: "IT",
            numberOfEmployees: 7
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Sahrul",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Rafi"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Sahrul"
        };
        console.info(domain);
    });
});
export {};
