"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ["avel", "lutpi", "rizal"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ["Membaca", "Main Game"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] ="Berenang";
    });
    it('should support tupple', function () {
        const person = ["Sahrul", "Rafi", 30];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "Budi";
    });
});
