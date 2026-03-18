import { describe, expect, test } from "bun:test";
import { Order } from "./order";
import { ORDER_STATE } from "./data";


describe("Order", () => {
	test("waiting", () => {
		const order = new Order();
		expect(order.state).toBe(ORDER_STATE.WAITING);
	});

	test("success", () => {
		const order = new Order();
		order.dispatch();
		order.success();
		expect(order.state).toBe(ORDER_STATE.PAID);
	});

	test("dispatch", () => {
		const order = new Order();
		order.success();
		order.dispatch();
		expect(order.state).toBe(ORDER_STATE.SENT);
	});

	test("cancel", () => {
		const order = new Order();
		order.cancel();
		expect(order.state).toBe(ORDER_STATE.CANCELED);
	});
});
