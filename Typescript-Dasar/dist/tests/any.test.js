"use strict";
describe('Any', function () {
    it('should support in typescropt', function () {
        const person = {
            id: 1,
            name: "Sahrul Rafi Zulfitra",
            age: 23
        };
        person.age = 24;
        person.address = "Indonesia";
        console.info(person);
    });
});
