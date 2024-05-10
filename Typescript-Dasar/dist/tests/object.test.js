"use strict";
describe('Object', function () {
    it('should support in type in typescript', function () {
        const person = {
            id: "1",
            name: "Sahrul"
        };
        console.info(person);
        person.id = "2";
        person.name = "Rafi";
        console.info(person);
    });
});
