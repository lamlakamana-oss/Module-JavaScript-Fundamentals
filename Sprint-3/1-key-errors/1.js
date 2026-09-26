// Predict and explain first...

// Why will an error occur when this program runs?
// Predict and explain first...
// I predict this will cause a SyntaxError because decimalNumber is declared twice in the same scope (once as a parameter, once with const). Even after fixing that, the console.log on line 15 would still fail because decimalNumber only exists inside the function.

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

// decimalNumber is declared twice in the same scope, once as the function's parameter, and again with const inside the function body. JavaScript doesn't allow redeclaring the same name in the same scope. Even after fixing that, console.log(decimalNumber) would fail too, because decimalNumber only exists inside the function.