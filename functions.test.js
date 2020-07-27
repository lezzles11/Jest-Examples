const sum = require("./functions").sum;

const doubler = require("./functions").doubler;

const area = require("./functions").area;

describe("My first Jest Test specifications, sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 5 + 5 to equal 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});

describe("My second Jest Test specifications, doubler", () => {
  test("doubles 4 to equal 8", () => {
    expect(doubler(4)).toBe(8);
  });

  test("doubles 10 to equal 20", () => {
    expect(doubler(10)).toBe(20);
  });
});

describe("My third Jest Test specifications, area", () => {
  test("calculates area, height 2 and width 4 to equal to 8", () => {
    expect(area(2, 4)).toBe(8);
  });

  test("calculates area, height 10 and width 14 to equal to 140", () => {
    expect(area(10, 14)).toBe(140);
  });
});
