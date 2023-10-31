const {
    parImpar, celsiusParaFahrenheit, isNull, isQuadrado
} = require("./Calc")

test("parImpar", () => {
    expect(parImpar(4)).toBe("par");
    expect(parImpar(5)).not.toBe("par");
});

test("celsiusParaFahrenheit", () => {
    expect(celsiusParaFahrenheit(20)).toBe(68);
    expect(celsiusParaFahrenheit(0)).toBeLessThan(35);
});

test("isNull", () => {
    expect(isNull("olá")).toBe(false);
    expect(isNull()).toBeTruthy();
});

test("isQuadrado", () => {
    expect(isQuadrado(2, 2, 2, 2)).toBe(true);
    expect(isQuadrado(2, 3, 2, 2)).toBeFalsy();
});