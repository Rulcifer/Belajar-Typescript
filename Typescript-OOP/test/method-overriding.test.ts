describe('Method Overriding', () => {

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {

        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name} I am your manager`);
        }
    }

    it('should support', () => {
        const employee = new Employee("Sahrul");
        employee.sayHello("Rafi");

        const manager = new Manager("Sahrul");
        manager.sayHello("Rafi");
    });
});