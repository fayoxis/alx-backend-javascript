🧮 ES6 Basic🧮

This project contains tasks for learning the basics of ECMAScript 2015.

## Tasks To Complete

+ [x] 0. **Const or let?**<br/>[0-constants.js](0-constants.js) contains a script that meets the following requirements.
  + For the code below, make the following modifications:
    + function `taskFirst` to instantiate variables using `const`.
    + function `taskNext` to instantiate variables using `let`.

This task is designed to introduce the difference between `const` and `let` in ES6. The `const` keyword is used to declare variables that are meant to be constant, meaning their values cannot be reassigned. The `let` keyword is used to declare variables that can be reassigned.

```js
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

In the provided code, the `taskFirst` function now uses `const` to declare the `task` variable, while the `taskNext` function uses `let` to declare the `combination` variable. This demonstrates the appropriate use of `const` and `let` in ES6.


do this project by : fayoxis @dtchayearthur@gmail.com 
