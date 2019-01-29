describe("Calculator", () => {

    it("should add", () => {
        const calculator = new window.Calculator();
        expect(calculator.add(1, 2)).toBe(3);
    });

    it("should subtract", () => {
        const calculator = new window.Calculator();
        expect(calculator.subtract(3, 2)).toBe(1);
    });
});
