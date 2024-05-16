describe('Inheritance', () => {

    //parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it('should support', () => {
        const employee = new Employee("Sahrul");
        console.info(employee.name);

        const manager = new Manager("Avel");
        console.info(manager.name);

        const director = new Director("Rizal");
        console.info(director.name);
    });
});