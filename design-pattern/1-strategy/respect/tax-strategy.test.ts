import { describe, expect, test } from "bun:test";

interface Tax {
    discount?: number;
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
    value: number = 0;
    discount: number;

    constructor (private readonly tax: Tax) {
        this.discount = (this.tax.discount && this.tax.discount >= 0) ? this.tax.discount : 0;
    }


    calculateTax(salary: number) {
        return this.tax.calculate(salary);
    }

    get taxPayment() {
        return this.tax;
    }

    getTaxPayment() {
        return this.taxPayment;
    }
}

describe("Tax Calculate Strategy", () => {
    test("CLT", () => {
        const payment = new Payment(new TaxCLT());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(200);
    });

    test("PJ", () => {
        const payment = new Payment(new TaxPJ());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(100);
    });

    test("Internship", () => {
        const payment = new Payment(new TaxInternship());
        const tax = payment.calculateTax(1000);
        expect(tax).toBe(50);
    });
});


