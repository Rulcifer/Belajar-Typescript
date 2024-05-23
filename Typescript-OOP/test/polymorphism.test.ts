describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('should support', () => {
        let employee : Employee = new Employee("Sahrul");
        console.info(employee);

        employee = new Employee("Sahrul");
        console.info(employee);

        employee = new Employee("Sahrul");
        console.info(employee);

    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Sahrul"));
        sayHello(new Manager("Rafi"));
        sayHello(new VicePresident("Zul"));
            
    });
});