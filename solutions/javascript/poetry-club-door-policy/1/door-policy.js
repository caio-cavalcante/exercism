export function frontDoorResponse(line) {
  var newLine = line.trim();

  return newLine.charAt(0);
}

export function frontDoorPassword(word) {
  var sliced = word.slice(1).toLowerCase();
  var firstLetter = word.charAt(0).toUpperCase();
  var newWord = firstLetter + sliced;
  
  return newWord;
}

export function backDoorResponse(line) {
  var newLine = line.trim();
  
  return newLine.charAt(newLine.length-1);
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}
