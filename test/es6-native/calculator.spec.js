import { Calculator } from "./calculator.js";

describe("Calculator", () => {

    it("should add", () => {
        const calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
    });

    it("should subtract", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(3, 2)).toBe(1);
    });

});
