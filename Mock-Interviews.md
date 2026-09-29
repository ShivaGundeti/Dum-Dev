# Interview - 05

Questions:


### JavaScript Interview Questions Covered

1. **What is the difference between `undefined` and undeclared?**

   * `undefined` vs undeclared variables
   * `ReferenceError`
   * `typeof` with undeclared variables

2. **What are the different ways to create/construct an object in JavaScript?**

   * Object literal
   * `new Object()`
   * Constructor functions
   * Classes
   * `Object.create()`

3. **What is the difference between shallow copy and deep copy?**

   * Objects
   * Nested objects
   * Arrays
   * Spread operator
   * `structuredClone()`
   * Reference sharing

4. **Does shallow/deep copying apply to arrays?**

   * Shallow copying arrays
   * Nested objects/arrays
   * Spread, `slice()`, `Array.from()`
   * `structuredClone()`

5. **What is the output of:**

   ```js
   console.log(100 + "8" + 20);
   ```

   * String concatenation
   * `+` operator behavior
   * Left-to-right evaluation
   * Type coercion

6. **What looping mechanisms are available in JavaScript?**

   * `for`
   * `while`
   * `do...while`
   * `for...of`
   * `for...in`
   * `map()`
   * `filter()`
   * `reduce()`
   * `forEach()`

7. **What is the output and why?**

   ```js
   let abc = 100;

   if (function xyz() {}) {
       abc = abc - typeof(xyz);
   }

   console.log(abc);
   ```

   * Named function expression
   * Function truthiness
   * Function-name scope
   * `typeof`
   * `NaN`

8. **What is the difference between `slice()` and `splice()`?**

   * `slice()` doesn't modify original array
   * `splice()` modifies original array
   * Removing elements
   * Adding elements
   * Replacing elements
   * Return values

9. **What are `find()` and `findIndex()`?**

   * `find()` → first matching element
   * `findIndex()` → index of first matching element
   * `undefined` vs `-1`
   * Difference from `filter()`

10. **Why do we use `includes()`?**

    * Checking whether a value exists
    * Boolean result
    * String and array usage

11. **What does the second argument of `includes()` mean?**

    ```js
    let arr = ["shiva", "kumar"];

    arr.includes("shiva", -2);
    ```

    * Starting search position
    * Negative indexes
    * `-2` → index `0`
    * `-1` → index `1`

### One concept we started but haven't completed

12. **JavaScript Event Loop**

* We only introduced it before you changed the study approach.
* We are **not considering this completed yet**.

