/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
   if (time == 0) {
    return 'Lasagna is done.';
  } else if (!time) {
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, timePerLayer) {
  if (!timePerLayer) {
    return layers.length*2;
  } else {
    return layers.length*timePerLayer;
  }
}

export function quantities(layers) {
  let totalSauce = 0;
  let totalNoodle = 0;

  for (let layer of layers) {
    if (layer === 'sauce') {
      totalSauce += 0.2;
    } else if (layer === 'noodles') {
      totalNoodle += 50;
    }
  }

  const amounts = {
    sauce: totalSauce,
    noodles: totalNoodle,
  };

  return amounts;
}

export function addSecretIngredient(friendsList, myList) {
  myList = myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, number) {
  const scaledRecipe = { ...recipe };

  for (let key in scaledRecipe) {
    if (typeof scaledRecipe[key] === 'number' && scaledRecipe.hasOwnProperty(key)) {
      scaledRecipe[key] *= number/2;
    }
  }
  
  return scaledRecipe;
}