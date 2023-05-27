function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      combinations.push(combination);
    } else {
      const letters = mapping[nextDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigits.slice(1));
      }
    }
  }

  const combinations = [];
  backtrack('', digits);
  return combinations;
}

// Test the function with the given example
const digits = "23";
const result = letterCombinations(digits);
console.log(result);
