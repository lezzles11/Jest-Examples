const pizzas = require("../data.json");

test("the pizza data is correct", () => {
  expect(pizzas).toMatchSnapshot();
  expect(pizzas).toHaveLength(4);
  expect(pizzas.map((pizza) => pizza.name)).toEqual([
    "Chicago Pizza",
    "Neapolitan Pizza",
    "New York Pizza",
    "Sicilian Pizza",
  ]);
});
