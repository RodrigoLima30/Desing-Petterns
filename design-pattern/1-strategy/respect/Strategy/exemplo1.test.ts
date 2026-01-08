import { describe, expect, test } from "bun:test";

interface Tax {
    calculate(salary: number): number;
}

class TaxCLT implements Tax {
    calculate(salary: number): number {
        return salary * 0.2;
    }
}

class TaxPJ implements Tax {
    calculate(salary: number): number {
        return salary * 0.1;
    }
}

class TaxInternship implements Tax {
    calculate(salary: number): number {
        return salary * 0.05;
    }
}

class Payment {
    constructor (public tax: Tax) {}

    calculateTax(salary: number) {
        return this.tax.calculate(salary);
    }
}

describe("Tax Calculate Strategy", () => {
    test("CLT tax", () => {
        const payment = new Payment(new TaxCLT());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(200);
    });

    test("PJ tax", () => {
        const payment = new Payment(new TaxPJ());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(100);
    });

    test("Internship tax", () => {
        const payment = new Payment(new TaxInternship());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(50);
    });
});


