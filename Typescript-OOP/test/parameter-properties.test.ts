describe('Parameter Properties', () => {

    class Person {
        constructor(public name: string) {
        }
    }

    it('should support', () => {
        const person = new Person("Sahrul");
        console.info(person.name);

        person.name = "Rafi";
        console.info(person.name);
    });
});