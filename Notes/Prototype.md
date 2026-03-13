# JavaScript Prototype & `new` Keyword – Explained with Examples

This document explains some core JavaScript concepts that every developer should understand:

* Object behavior of functions
* Prototype
* Constructor functions
* Instances
* What happens behind the scenes when using the `new` keyword

Examples are based on the code used in this project.

---

# 1. Functions in JavaScript are also Objects

In JavaScript, a function is not just executable code.
It is also an **object**, which means we can attach properties to it.

Example:

```javascript
function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(10));     // 50
console.log(multiplyBy5.power);   // 5
console.log(multiplyBy5.prototype);
```

Explanation:

* `multiplyBy5()` works like a normal function.
* `multiplyBy5.power` shows that functions can store properties like objects.
* `multiplyBy5.prototype` is automatically created by JavaScript.

Important note:

The `prototype` property becomes useful **when the function is used as a constructor with the `new` keyword**.

---

# 2. Constructor Function

A constructor function acts as a **blueprint for creating objects**.

Example:

```javascript
function createUser(username, score){
    this.username = username;
    this.score = score;
}
```

Here:

* `username` and `score` are properties of the object being created.
* `this` refers to the object that will be created.

---

# 3. Adding Methods Using Prototype

Instead of defining methods inside the constructor (which duplicates them for every object), we attach them to the **prototype**.

Example:

```javascript
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}
```

Why use prototype?

Because all objects created from this constructor **share these methods**, saving memory.

Example usage:

```javascript
const chai = new createUser("chai", 20)
const latte = new createUser("latte", 500)

chai.increment()
chai.printMe()

latte.printMe()
```

Output:

```
Score is 21
Score is 500
```

---

# 4. What Happens Behind the Scenes When We Use `new`

When we write:

```javascript
const chai = new createUser("chai", 20)
```

JavaScript performs four important steps.

---

## A) A New Object is Created

The `new` keyword creates an empty JavaScript object.

Internally this is similar to:

```
const chai = {}
```

---

## B) Prototype is Linked

The new object is linked to the constructor's prototype.

Internally:

```
chai.__proto__ = createUser.prototype
```

This allows the object to access methods defined on the prototype.

For example:

```
chai.increment()
chai.printMe()
```

Even though these methods are not directly inside the `chai` object.

---

## C) `this` is Bound to the New Object

Inside the constructor:

```javascript
function createUser(username, score){
    this.username = username;
    this.score = score;
}
```

`this` refers to the newly created object.

So JavaScript internally assigns:

```
chai.username = "chai"
chai.score = 20
```

---

## D) The Object is Returned

Finally, JavaScript automatically returns the object.

So the result becomes:

```
chai = {
    username: "chai",
    score: 20
}
```

---

# 5. Object Structure After Creation

After executing:

```javascript
const chai = new createUser("chai", 20)
```

The object structure looks like this:

```
chai
│
├── username : "chai"
├── score : 20
│
└── __proto__
      │
      ├── increment()
      └── printMe()
```

If JavaScript cannot find a property inside the object, it searches in the **prototype chain**.

---

# 6. Prototype Chain

JavaScript looks for properties in this order:

```
chai object
   │
   ▼
createUser.prototype
   │
   ▼
Object.prototype
   │
   ▼
null
```

This is called the **prototype chain**.

---

# 7. Why Prototype is Important

Without prototype:

Every object would copy the same functions, wasting memory.

With prototype:

All objects share the same methods.

Example:

```
createUser.prototype.increment
createUser.prototype.printMe
```

These functions exist **once in memory but are used by all instances**.

---

# 8. Instances

Objects created using a constructor are called **instances**.

Example:

```
createUser → Constructor / Blueprint

chai  → Instance
latte → Instance
```

---

# 9. Important Rule

If we call the constructor without `new`:

```javascript
const chai = createUser("chai",20)
```

`this` will refer to the **global object**, which causes incorrect behavior.

Therefore always use:

```
new createUser()
```

when working with constructor functions.

---

# Final Summary

Key concepts:

```
Function → Can behave like an object
Constructor → Blueprint for objects
Prototype → Shared methods
new → Creates a new object
this → Refers to the current object
Instance → Object created from constructor
```

Example flow:

```
createUser (constructor)
        │
        ▼
   new createUser()
        │
        ▼
   chai / latte (instances)
```

Understanding these concepts is essential for mastering **JavaScript object-oriented programming and prototypes**.
