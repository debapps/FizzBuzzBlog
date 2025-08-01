---
title: "Functions: Advance Features"
category: Python
date: "2025-08-01"
author: Debaditya Bhar
synopsis: This module will introduce you to several powerful tools, including anonymous functions, higher-order functions, decorators, and generators.
coverImg: /blog_images/advance-features-functions/cover.png
---

# Advanced Features in Functions in Python

As you progress in your Python journey, you'll encounter advanced functional programming concepts that allow you to write more concise, elegant, and efficient code. This module will introduce you to several powerful tools, including anonymous functions, higher-order functions, decorators, and generators.

---

## 1\. Lambda Functions (Anonymous Functions)

A **lambda function** is a small, anonymous function that can have any number of arguments but can only have one expression. The expression is evaluated and returned. You would use a lambda function when you need a simple function for a short period, and you don't want to formally define a full function using `def`.

The syntax is `lambda arguments: expression`.

**Example Code:**

```python
# A simple lambda function to add two numbers
add = lambda x, y: x + y
print(f"The sum of 5 and 3 is: {add(5, 3)}")

# Lambda functions are often used as an argument to other functions,
# such as a key for sorting a list of tuples
students = [('Alice', 88), ('Bob', 95), ('Charlie', 78)]
sorted_students = sorted(students, key=lambda student: student[1])
print(f"\nStudents sorted by score: {sorted_students}")
```

**Output:**

```
The sum of 5 and 3 is: 8
Students sorted by score: [('Charlie', 78), ('Alice', 88), ('Bob', 95)]
```

---

## 2\. `map()`, `filter()`, `reduce()`

These are three essential higher-order functions that take a function and an iterable (like a list) as arguments. They are a concise and efficient way to process data without using explicit loops.

-   **`map(function, iterable)`:** Applies a given function to every item of an iterable and returns an iterator of the results.
-   **`filter(function, iterable)`:** Constructs an iterator from elements of an iterable for which a function returns `True`.
-   **`reduce(function, iterable)`:** (from the `functools` module) applies a function of two arguments cumulatively to the items of an iterable, from left to right, to reduce the iterable to a single value.

**Example Code:**

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# --- map() example ---
# Use map to square every number in the list
squared_numbers = list(map(lambda x: x * x, numbers))
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squared_numbers}")

# --- filter() example ---
# Use filter to get only the even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Even numbers: {even_numbers}")

# --- reduce() example ---
# Use reduce to calculate the sum of all numbers
sum_of_numbers = reduce(lambda x, y: x + y, numbers)
print(f"Sum of all numbers: {sum_of_numbers}")
```

**Output:**

```
Original numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Squared numbers: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Even numbers: [2, 4, 6, 8, 10]
Sum of all numbers: 55
```

---

## 3\. Decorators (Introduction and Simple Use Cases)

A **decorator** is a function that takes another function as an argument, adds some functionality, and returns another function. Decorators are used to wrap functions with additional behavior, such as logging, timing, or authentication, without modifying the original function's code.

The syntax for using a decorator is the `@decorator_name` placed directly above the function definition.

**Example Code:**

```python
def my_decorator(func):
    """A decorator that adds a simple greeting before and after a function call."""
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Calling the decorated function
print("Calling the decorated function:")
say_hello()

# A more practical example: a timer decorator
import time

def timer_decorator(func):
    """A decorator that prints the time a function takes to run."""
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"\n'{func.__name__}' took {end_time - start_time:.4f} seconds to run.")
        return result
    return wrapper

@timer_decorator
def waste_some_time(num_times):
    for _ in range(num_times):
        sum([i*i for i in range(1000)])

print("\nCalling the function decorated with the timer:")
waste_some_time(1000)
```

**Output:**

```
Calling the decorated function:
Something is happening before the function is called.
Hello!
Something is happening after the function is called.

Calling the function decorated with the timer:

'waste_some_time' took 0.0540 seconds to run.
```

---

## 4\. Generators and the `yield` Keyword

A **generator** is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time. Unlike a regular function that uses `return` and terminates, a generator function uses the **`yield`** keyword.

When `yield` is encountered, the generator function's state is saved, the value is returned, and the function is paused. When the next value is requested, the function resumes from where it left off. This makes generators memory-efficient, as they produce values one by one without storing the entire sequence in memory.

### The `next()` Function

While `for` loops are the most common way to iterate through a generator, you can also manually step through it using the `next()` built-in function. Calling `next()` on a generator object will execute the generator until the next `yield` statement and return the yielded value.

When the generator has no more values to yield, a `StopIteration` exception is raised. A `for` loop implicitly handles this exception, which is why it's the preferred method for iteration. You can, however, handle it yourself with a `try...except` block.

**Example Code:**

```python
def simple_generator():
    """A simple generator that yields a few numbers."""
    print("Generator started...")
    yield 1
    print("Resumed and yielding 2...")
    yield 2
    print("Resumed and yielding 3...")
    yield 3
    print("Generator finished.")

# We create a generator object
gen = simple_generator()
print(f"Created a generator object: {gen}\n")

# Manually iterating with next()
print("Manually iterating with next():")
print(f"First value: {next(gen)}")
print(f"Second value: {next(gen)}")
print(f"Third value: {next(gen)}")

# Attempting to get another value will raise a StopIteration exception
try:
    print(f"Fourth value: {next(gen)}")
except StopIteration as e:
    print(f"\nCaught an exception: {e}. The generator is exhausted.")

# A more practical example: generating Fibonacci numbers
def fibonacci_generator(n):
    """Generates the first n numbers in the Fibonacci sequence."""
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

print("\nGenerating the first 8 Fibonacci numbers using a for loop:")
# The for loop handles the next() calls and StopIteration automatically
for number in fibonacci_generator(8):
    print(number, end=' ')
print()
```

**Output:**

```
Created a generator object: <generator object simple_generator at 0x...>

Manually iterating with next():
Generator started...
First value: 1
Resumed and yielding 2...
Second value: 2
Resumed and yielding 3...
Third value: 3
Generator finished.

Caught an exception: . The generator is exhausted.

Generating the first 8 Fibonacci numbers using a for loop:
0 1 1 2 3 5 8 13
```

Mastering these advanced function concepts will allow you to write more expressive, powerful, and scalable Python applications. They are frequently used in modern Python libraries and frameworks, so a solid understanding is crucial for any professional developer.
