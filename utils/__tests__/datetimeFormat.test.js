/**
 * 
 * 
// Test 1
test('formatAmPm returns correct time format', () => {
  expect(formatAmPm('2020-02-02T15:00:00')).toBe('3:00 pm');
});

// Test 2
test('formatAmPm returns correct time format for 12 am', () => {
  expect(formatAmPm('2020-02-02T00:00:00')).toBe('12:00 am');
});

// Test 3
test('formatAmPm returns correct time format for 12 pm', () => {
  expect(formatAmPm('2020-02-02T12:00:00')).toBe('12:00 pm');
});

// Test 4
test('formatAmPm does not return incorrect time format', () => {
  expect(formatAmPm('2020-02-02T15:00:00')).not.toBe('4:00 pm');
});

// Test 5
test('formatAmPm returns correct time format for minutes less than 10', () => {
  expect(formatAmPm('2020-02-02T15:05:00')).toBe('3:05 pm');
});

// Test 1 checks that the function returns the correct time format (hours:minutes am/pm) given a valid date string.
// Test 2 checks that the function returns the correct time format for 12 am.
// Test 3 checks that the function returns the correct time format for 12 pm.
// Test 4 checks that the function does not return an incorrect time format.
// Test 5 checks that the function returns the correct time format when the minutes are less than 10.


 */
