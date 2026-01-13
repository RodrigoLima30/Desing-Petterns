import { describe, expect, test } from 'bun:test'

interface Freight {
	calculate(value: number): number;
}

class FreightCommon implements Freight {
    calculate(value: number): number {
        return value * 0.05;
    }
}

class FreightExpress implements Freight {
    calculate(value: number): number {
        return value * 0.1;
    }
}

class Order {
    constructor (public freight: Freight) {}

    calculateFreight(value: number) {
        return this.freight.calculate(value);
    }
}

describe("Freight Calculate Strategy", () => {
    test("common freight", () => {
        const order = new Order(new FreightCommon());
        const freight = order.calculateFreight(100);
        expect(freight).toBe(5);
    });

    test("express freight", () => {
        const order = new Order(new FreightExpress());
        const freight = order.calculateFreight(100);
        expect(freight).toBe(10);
    });
});


