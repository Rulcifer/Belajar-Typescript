describe('Function', function () {
    it('should support in typescript', function() {

        function sayHello(name: string):string {
            return `Hello ${name}`;
        }

        expect(sayHello("Sahrul")).toBe("Hello Sahrul");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Sahrul");

    });
});