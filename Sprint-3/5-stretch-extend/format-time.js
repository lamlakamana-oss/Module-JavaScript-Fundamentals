// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
// Test 3: Edge case for 12:00 (Noon)
// The current function logic thinks 12 > 12 is false, so it returns "12:00 am". 
// This is technically a bug in the provided function, but a good test case!
const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm"; // Correct expectation
console.assert(
  currentOutput3 === targetOutput3,
  `Noon Test Failed -> current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Test 4: Check for formatting bug (dropping minutes)
// The current function returns `${hours - 12}:00 pm` which ignores the minutes.
const currentOutput4 = formatAs12HourClock("13:45");
const targetOutput4 = "01:45 pm"; 
console.assert(
  currentOutput4 === targetOutput4,
  `Minute Formatting Failed -> current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// Test 5: Test single digit hour formatting
// Usually, 12-hour clocks are written as "01:00 pm", not "1:00 pm"
const currentOutput5 = formatAs12HourClock("13:00");
const targetOutput5 = "01:00 pm"; 
console.assert(
  currentOutput5 === targetOutput5,
  `Hour Padding Failed -> current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Test 6: Midnight check
const currentOutput6 = formatAs12HourClock("00:00");
const targetOutput6 = "12:00 am";
console.assert(
  currentOutput6 === targetOutput6,
  `Midnight Test Failed -> current output: ${currentOutput6}, target output: ${targetOutput6}`
);