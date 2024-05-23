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
        // console.info(`Hello ${employee.name}`);

        if(employee instanceof VicePresident){
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    //type cast yang salah
    function sayHelloWrong(employee: Employee): void {
        if(employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else if (employee instanceof VicePresident){
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
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

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("Sahrul"));
        sayHelloWrong(new Manager("Rafi"));
        sayHelloWrong(new VicePresident("Zul"));
            
    });
});