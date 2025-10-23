// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let i = 0;
  
    while (totalWedges < wedgesNeeded && i < limes.length) {
      if (limes[i] == 'small') {
        totalWedges = totalWedges + 6;
      } else if (limes[i] == 'medium') {
        totalWedges = totalWedges + 8;
      } else if (limes[i] == 'large') {
        totalWedges = totalWedges + 10;
      }
    
      i++;
    }

  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeSpent = 0;
  let order = 0;
  
  do {
    timeSpent += timeToMixJuice(orders[order])

    order++;
  } while (timeSpent < timeLeft);

  let leftoverOrders = orders.slice(order, orders.length)
  return leftoverOrders;
}
