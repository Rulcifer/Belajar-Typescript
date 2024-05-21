describe('Instance Of', () => {

        class Employee {}
        class Manager {}

        const sahrul = new Employee();
        const rafi = new Manager();

    it('should have problem using typeof', () => {

        console.info(typeof sahrul);
        console.info(typeof rafi);
    });

    it('should support instanceof', () => {
        expect(sahrul instanceof Employee).toBe(true);
        expect(sahrul instanceof Manager).toBe(false);

        expect(rafi instanceof Employee).toBe(false);
        expect(rafi instanceof Manager).toBe(true);
    });
});