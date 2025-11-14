// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let extraPrice = 0;

  for (let extra of extras) {
    if (extra == "ExtraSauce") {
      extraPrice += 1;
    } else if (extra == "ExtraToppings") {
      extraPrice += 2;
    }
  }

  switch (pizza) {
    case "Margherita":
        return extraPrice + 7;
        break;
    case "Caprese":
        return extraPrice + 9;
        break;
    case "Formaggio":
        return extraPrice + 10;
        break;
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let orderTotal = 0;

  for (let order of pizzaOrders) {
    orderTotal += pizzaPrice(order.pizza, ...order.extras);
  }

  return orderTotal;
}