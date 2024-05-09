import { sayHello } from "../src/say-hello";

describe('sayHello', function () {
    it('should say hello', function () {
        expect(sayHello('Sahrul')).toBe('Hello Sahrul');
    });
});