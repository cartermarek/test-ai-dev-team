import test from "node:test";
import assert from "node:assert/strict";
import { greet, add } from "../src/index.js";

test("greet returns the correct message", () => {
  assert.equal(greet("Marek"), "Hello, Marek!");
});

test("add returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
});
