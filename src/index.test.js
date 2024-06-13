
import {division} from "./index.js";
describe(
  'test division', 
  ()=> {
  it ('division 5 / 5 to equal 1', () => {
  const result = (division(5, 5));
  expect(result).toBe(1);
})
it ('division 4 / 2 to equal 2', () => {
  const result = (division(4, 2));
  expect(result).toBe(2);
})
it ('division 6 / 0 to equal 6', () => {
  const result = (division(6, 0));
  expect(result).toBe(6); // corner case
})
}
);


import {factorial} from "./index.js";
describe(
  'test factorial', 
  ()=> {
  it ('factorial from 3 to 6 ' , () => {
  const result = (factorial(3));
  expect(result).toBe(6);
  
})
});


import { compare } from "./index.js";
describe(
  "test compare", 
  ()=> {
    it ("сравниваем положительные 1, 2 и 3", () => {
      const result = compare(1,2,3);
      expect(result).toBe(3);
    }),
    it ("сравниваем положительные 1, 2 и 3 - меняем порядок аргументов", () => {
        const result = compare(2,3,1);
        expect(result).toBe(3);
      }),
    it ("сравниваем положительные и отрицательные -8, 13 и 42", () => {
        const result = compare(-8,13,42);
        expect(result).toBe(42);
    }),
    it ("сравниваем положительные и отрицательные -8, 13 и 42 - меням порядок аргументов", () => {
        const result = compare(13,-8,42);
        expect(result).toBe(42);
    }),
    it ("сравниваем дробные положительные и отрицательные -3.148, 1.3 и 1.31", () => {
        const result = compare(-3.148,1.3,1.31);
        expect(result).toBe(1.31);
    }),
    it ("сравниваем дробные положительные и отрицательные -3.148, 1.3 и 1.31 - меням порядок аргументов", () => {
        const result = compare(1.31,-3.148,1.3);
        expect(result).toBe(1.31);
    }),
    it ("сравниваем три одинаковых числа 8, 8 и 8", () => {
        const result = compare(8,8,8); // corner case
        expect(Boolean(result)).toBe(false);
    })
});






