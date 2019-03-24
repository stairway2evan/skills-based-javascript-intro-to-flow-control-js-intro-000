if(conditionToTest) { // executed if 'conditionToTest' is truthy
} else { // executed if 'conditionToTest' is falsey
}

function basicTeenager(age) {
    if(age >= 13 && age <= 19) {
       return 'You are a teenager!'
     }
  }

function teenager(age) {
    if(age >= 13 && age <= 19) {
       return "You are a teenager!"
    } else {  
          return "You are not a teenager"
    }
    
  }
  
function teenager(age) { 

}

function ageChecker(age) { 
  if (age >= 13 && age <= 19) {
       return "You are a teenager!"
} else if (age <= 12) {
  // execute this code if `(age >= 13 && age <= 19)` statement is falsey AND `(age <= 12)` is truthy
  return "You are a kid"
} else { 
  return "You are a grownup"
  // execute this code if none of the other conditions are met
}

}

## Switch Statements

Switch statements acts like a big if/else if/else chain. The switch expression is evaluated once and the value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.

Syntax:

```javascript
switch (expression) {
  case n:
      // code to be executed if case n is true
      break; // break out of switch statement once code executed
  case m:
      // code to be executed if case m is true
      break; // break out of switch statement once code executed
  default:  // all other cases
      // code to be executed if case n and case m false
}
```

Example:

```javascript
var mood = "hungry"
switch(mood) {
  case "happy":
    console.log("Dance to Pharrell's 'Happy'");
    break;
  case "sad":
    console.log("You should eat a pint of ice cream");
    break;
  case "anxious":
    console.log("Take some deep breaths");
    break;
  case "hungry":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
}
```

In the example above, we'll see `"You should eat a big chocolate cake"` printed to the console. If we change the value of the `mood` variable to `sad` you'll see `"You should eat a pint of ice cream"`. If the value of `mood` changed to `"grumpy"`, the default statement would trigger and print out `"That's not a mood we support"`.

+ Define a function `switchAge` that accepts an age as a parameter. The case statement should switch on `age` and return `"You are a teenager"` if the age is 13, 14, 15, 16, 17, 18, or 19, and return `"You have an age"` as the default.

As with any function, `return` will halt execution at any point. Thus if we
wrote,

```javascript
function feelings(mood) {
  switch(mood) {
    case "happy":
      return "Dance to Pharrell's 'Happy'"
    default:
      return "I don't recognize that mood."
  }

  console.log("Let us know how you're feeling tomorrow!")
}
```

the `console.log()` statement at the bottom of the function will
_never run_. This is a major difference between `return` and `break`:
`return` _exits_ the function and _returns_ a value; `break` exits a
_block_ and does not (generally speaking) have a value associated with it.

## Resources

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19)
return (age ? "You are a teenager" : "You are not a teenager");
}

function switchAge(age) {
  
  switch(age) {
  case n:
      // code to be executed if case n is true
      break; // break out of switch statement once code executed
  case m:
      // code to be executed if case m is true
      break; // break out of switch statement once code executed
  default:  // all other cases
      // code to be executed if case n and case m false
}

}
