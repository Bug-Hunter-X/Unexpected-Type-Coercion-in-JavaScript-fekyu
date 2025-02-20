# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript error caused by loose typing and implicit type coercion. The `foo` function is intended to add two numbers, but due to JavaScript's flexibility, it performs string concatenation when one of the arguments is a string.  This can lead to unexpected behavior and bugs that are difficult to track down.

The `bug.js` file contains the buggy code, while `bugSolution.js` shows how to avoid this issue using type checking or explicit type conversion.