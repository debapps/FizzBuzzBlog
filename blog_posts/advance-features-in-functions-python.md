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
# Lambda Function: Anonymous Functions with one return expression.

# Lambda function to add two numbers.
add = lambda x, y: x + y

print(f'The sum of 10 and 23 is: {add(10, 23)}')

# Lambda functions are often used as an argument to other functions.
students = [('Anuradha', 55), ('Susmita', 34), ('Tania', 23)]

# Sort the students based on id.
sorted_students = sorted(students, key=lambda students: students[1])

print(f'Student List: {students}')
print(f'Sorted Student List: {sorted_students}')
```

**Output:**

```
The sum of 10 and 23 is: 33
Student List: [('Anuradha', 55), ('Susmita', 34), ('Tania', 23)]
Sorted Student List: [('Tania', 23), ('Susmita', 34), ('Anuradha', 55)]
```

---

## 2\. Higher-Order Function

In Python, a **higher-order function** is a function that meets one or both of the following criteria:

1.  It takes one or more functions as arguments.
2.  It returns another function as its result.

This capability is a fundamental concept of functional programming and is a powerful tool for writing flexible, reusable, and concise code.

Let's break down each of these criteria with simple examples.

---

### A Function That Takes Another Function as an Argument

This is the most common use of higher-order functions. By accepting another function as an argument, a function can be customized to perform different actions without changing its core logic.

**Example: A Generic List Processor**
Imagine you want a function that applies a transformation to every item in a list. Instead of writing a separate function for each transformation (e.g., `add_one`, `make_upper`), you can write a single, higher-order function (e.g., `apply_ops`) that takes the transformation logic as an argument.

**Example Code:**

```python

# A function that takes another function as an argument.
def apply_ops(items, op_func):
    '''A higher order function that apply op_func to each element of items.'''
    results = [op_func(item) for item in items]
    return results

def add_one(x):
    '''Adds one to its parameter x.'''
    return x + 1

numbers = [2, 5, 6, 4, 1]
added_numbers = apply_ops(numbers, add_one)
print(f'\nNumbers applying add one: {added_numbers}')

def make_upper(name):
    '''Returns the upper-case.'''
    return name.upper()

names = ['bittu', 'anurag', 'anuradha', 'montu', 'rumpa']
print(f'\nNames in upper-case: {apply_ops(names, make_upper)}')

```

**Output:**

```
Numbers applying add one: [3, 6, 7, 5, 2]

Names in upper-case: ['BITTU', 'ANURAG', 'ANURADHA', 'MONTU', 'RUMPA']
```

In this example, `apply_ops` is a higher-order function because it accepts `add_one` and `make_upper` as arguments. This makes `apply_ops` highly reusable for any single-argument function.

---

### A Function That Returns Another Function

This is a more advanced pattern, often used to create specialized functions on the fly. The outer function is sometimes called a "factory" because it's responsible for creating and returning a new function.

**Example: A Multiplier Factory**
Let's create a function that takes a number and returns a new function that multiplies its input by that number.

**Example Code:**

```python
# A function that returns another function.
def multiplier(n):
    '''This function returns a functions that multiply n with its parameter.'''

    def times(x):
        return x * n

    return times

five_times = multiplier(5)
print(f'\nThe 5 times of 15 is: {five_times(15)}')

three_times = multiplier(3)
print(f'\nThe 3 times of 20 is: {three_times(20)}')

```

**Output:**

```
The 5 times of 15 is: 75

The 3 times of 20 is: 60
```

Here, `multiplier` is a higher-order function because its return value is another function, `times`. This pattern is the foundation for a powerful feature called **decorators** in Python.

---

## 3\. Common Built-in Higher-Order Functions - `map()`, `filter()`, `reduce()`, `sorted()`

These are three essential higher-order functions that take a function and an iterable (like a list) as arguments. They are a concise and efficient way to process data without using explicit loops.

-   **`map(function, iterable)`:** Applies a given function to every item of an iterable and returns an iterator of the results.
-   **`filter(function, iterable)`:** Constructs an iterator from elements of an iterable for which a function returns `True`.
-   **`reduce(function, iterable)`:** (from the `functools` module) applies a function of two arguments cumulatively to the items of an iterable, from left to right, to reduce the iterable to a single value.
-   **`sorted(iterable, key=function)`:** Sorts an iterable. The `key` argument is a function used to extract a comparison key from each element.

**Example Code:**

```python
# map(), filter(), reduce() functions: Higher order function examples.

import random
from functools import reduce

# Get the initial list of 10 numbers.
numbers = [random.randint(1, 50) for _ in range(10)]
print(f'Initial list of numbers: {numbers}')

# The map() function: maps each elements in the list to a function.
square_numbers = list(map(lambda x: pow(x, 2), numbers))
print(f'Squared numbers list: {square_numbers}')

# The filter() function: filters elements based on some condition.
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f'List of even numbers: {even_numbers}')

# The reduce() function: reduces elements of a list into a single value
# based on the function argument.
numbers_total = reduce(lambda x, y: x + y, numbers)
print(f'The sum of the numbers: {numbers_total}')

min_number = reduce(lambda x, y: x if (x < y) else y, numbers)
print(f'The smallest number: {min_number}')

```

**Output:**

```
Initial list of numbers: [31, 6, 18, 4, 33, 7, 38, 42, 39, 6]
Squared numbers list: [961, 36, 324, 16, 1089, 49, 1444, 1764, 1521, 36]
List of even numbers: [6, 18, 4, 38, 42, 6]
The sum of the numbers: 224
The smallest number: 4
```

**Example: Calculate sum of the prime number 1 to 100 using Higher Order functions.**

```python
# This program calculates the sum of the prime numbers from 1 to 100.

from functools import reduce

numbers = [num for num in range(1, 101)]

def prime(n):
    '''Returns True if the number is prime.'''
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True

prime_numbers = list(filter(prime, numbers))
sum_of_prime_numbers = reduce(lambda x, y: x + y, prime_numbers)
print(f'The sum of prime numbers from 1 to 100: {sum_of_prime_numbers}')
```

**Output:**

```
The sum of prime numbers from 1 to 100: 1060
```

Higher-order functions are a core part of Python's design philosophy, enabling you to write more abstract, flexible, and powerful code. By understanding when and how to pass functions as arguments or return them as results, you unlock a new level of programming elegance and efficiency.

---

## 4\. Decorators (Introduction and Simple Use Cases)

A **decorator** is a function that takes another function as an argument, adds some functionality, and returns another function. Decorators are used to wrap functions with additional behavior, such as logging, timing, or authentication, without modifying the original function's code.

The syntax for using a decorator is the `@decorator_name` placed directly above the function definition.

**Example Code:**

```python
# Decorator Function: takes another function as an argument, adds some functionality,
# and returns another function.

import time

def timer_decoratior(func):
    def timer_wrapper(*args, **kwargs):
        start_time = time.time()
        print(f'\nProcessing start at: {start_time}')
        func(*args, **kwargs)
        end_time = time.time()
        print(f'\nProcessing start at: {end_time}')
        print(f'Time taken: {round(end_time - start_time, 4)}\n')

    return timer_wrapper

@timer_decoratior
def delay_processing(n):
    '''This Function introduce some delay.'''
    for _ in range(n):
        sum([idx*idx for idx in range(100000)])



delay_processing(10)
```

**Output:**

```
Processing start at: 1754194727.978647

Processing start at: 1754194728.037494
Time taken: 0.0588
```

---

## 5\. Generators in Python

-   Generators in Python are special type of functions that allow you to create an iterable sequence of values.
-   A generator function returns a generator object, which can be used to generate the values one-by-one as you iterate over it.
-   Generators are a powerful tool for working with large or complex data sets, as they allow you to generate the values **on-the-fly**, rather than having to create and store the entire sequence in memory.

### Creating a Generator

In Python, you can create a generator by using the `yield` statement in a function. The `yield` statement returns a value from the generator and suspends the execution of the function until the next value is requested.

The `next()` function is used to request the next value from the generator, and the generator resumes its execution until it encounters another `yield` statement or until it reaches the end of the function.

The `next()` function throws `StopIteration` exception when the generator is exhusted the element generation.

A `for` loop implicitly handles this exception, which is why it's the preferred method for iteration. You can, however, handle it yourself with a `try...except` block.

**Example Code:**

```python
# Generators: Generators in Python are special type of functions that allow you to
# create an iterable sequence of values.

from random import randint

# Generators are created using `yeild` keywords.
def random_number_generator(n):
    for num in range(n):
        yield randint(1, 50)

rand_gen = random_number_generator(5)
print(f'Generator Object Created - {rand_gen}\nType - {type(rand_gen)}')
print('\nRandom numbers')
print(next(rand_gen))
print(next(rand_gen))
print(next(rand_gen))
print(next(rand_gen))
print(next(rand_gen))

try:
    print(next(rand_gen))
except StopIteration as e:
    print(f'{rand_gen} is exhausted. Raised exception {e}')

#  Generator defined with comprehension.
even_num = (num for num in range(11) if num % 2 == 0)
print('\nEven Number:')
for num in even_num:
    print(num)

```

**Output:**

```
Generator Object Created - <generator object random_number_generator at 0x100f858c0>
Type - <class 'generator'>

Random numbers
7
5
1
14
16
<generator object random_number_generator at 0x100f858c0> is exhausted. Raised exception

Even Number:
0
2
4
6
8
10

```

**Example: Generate Fibbonacci Series using Generator.**

```python
# This program generates Fibbonacci Series using Generators.

def fibbonacci_generator(n):
    x1, x2 = 0, 1
    count = 0

    while count < n:
        yield x1
        x1, x2 = x2, x1 + x2
        count += 1


def main():
    print('\nFibbonacci Series.')
    n = int(input('Enter the series length - '))

    for fib in fibbonacci_generator(n):
        print(fib, end=' ')

if __name__ == '__main__':
    main()
```

**Output**

```
Fibbonacci Series.
Enter the series length - 10
0 1 1 2 3 5 8 13 21 34
```

### Benefits of Generators

-   It generates values **on the fly**, rather than creating and storing the entire sequence in memory.
-   It optimizes the memory consumptions and reduces the valuable computational time.
-   It improves performace of the program execution when working with large dataset and involving the complex computations.

---

Mastering these advanced function concepts will allow you to write more expressive, powerful, and scalable Python applications. They are frequently used in modern Python libraries and frameworks, so a solid understanding is crucial for any professional developer.
