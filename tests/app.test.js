import test from "node:test";
import assert from "node:assert/strict";
import { greet, add, daysAlive } from "../src/index.js";

test("greet returns the correct message", () => {
  assert.equal(greet("Marek"), "Hello, Marek!");
});

test("add returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("daysAlive returns the number of full days since birth date", () => {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  assert.equal(daysAlive(twoDaysAgo), 2);
});

test("daysAlive throws for an invalid birth date", () => {
  assert.throws(() => daysAlive("not-a-date"), /Invalid birth date/);
});
