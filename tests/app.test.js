import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/index.js";

test("greet returns the correct message", () => {
  assert.equal(greet("Marek"), "Hello, Marek!");
});
