import { sum } from "../sum";

test("Sumnfunction should calculate the sum of two numbers", () =>{
const result = sum(3,4);

// Assertion
expect(result).toBe(7);
})