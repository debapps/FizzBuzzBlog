---
title: "Iterators, Generators & Coroutines"
category: Python
date: "2025-08-07"
author: Debaditya Bhar
synopsis: This tutorial provides a comprehensive guide to Python's iteration protocol and its powerful extensions - generators and coroutines. These features are essential for writing memory-efficient and highly concurrent Python applications.
coverImg: /blog_images/iterators-generators-coroutines/cover.png
---

# Iterators, Generators, and Coroutines

This tutorial provides a comprehensive guide to Python's iteration protocol and its powerful extensions: generators and coroutines. These features are essential for writing memory-efficient and highly concurrent Python applications.

---

## Lesson 15.1: Understanding Iterables and Iterators

**Concept**

-   An **iterable** is any object that can be looped over, such as a list, tuple, or string. An iterable object has an `__iter__()` method, which returns an **iterator**.
-   An **iterator** is an object that manages the state of the iteration. It has a `__next__()` method that returns the next item in the sequence. When there are no more items, it raises a `StopIteration` exception.

Python's `for` loop automates this process: it calls `iter()` on the iterable to get an iterator, then repeatedly calls `next()` until a `StopIteration` error is caught.

**Realistic Problem: Processing a Large Text File**

When reading a large file, you don't want to load all its contents into memory at once. A file object is an iterable that provides lines one by one, which is an efficient way to handle this.

```python
import os

# Create a sample text file for demonstration
with open("data.txt", "w") as f:
    f.write("Line 1: Hello world\n")
    f.write("Line 2: Python is great\n")
    f.write("Line 3: Iteration is cool\n")

print("--- Using a for loop (implicit iteration) ---")
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

print("\n--- Manual iteration using iter() and next() ---")
with open("data.txt", "r") as file:
    file_iterator = iter(file)  # Get the iterator

    # Manually call next() to get each line
    try:
        print(next(file_iterator).strip())
        print(next(file_iterator).strip())
        print(next(file_iterator).strip())
        print(next(file_iterator).strip()) # This will fail
    except StopIteration:
        print("End of file reached.")

# Clean up the file
os.remove("data.txt")
```

**Output:**

```
--- Using a for loop (implicit iteration) ---
Line 1: Hello world
Line 2: Python is great
Line 3: Iteration is cool

--- Manual iteration using iter() and next() ---
Line 1: Hello world
Line 2: Python is great
Line 3: Iteration is cool
End of file reached.
```

---

## Lesson 15.2: Creating Custom Iterators

**Concept**

You can create your own custom iterable objects by defining a class that implements the `__iter__()` and `__next__()` methods. This is useful for building custom data structures or sequences that need specific iteration logic.

**Realistic Problem: A Custom `EvenNumberList`**

Suppose you have a list of numbers and want to create a class that iterates through it but only returns the even numbers.

```python
class EvenNumberList:
    def __init__(self, numbers):
        self._numbers = numbers
        self._index = 0

    def __iter__(self):
        # This method must return the iterator object itself
        return self

    def __next__(self):
        # Find the next even number
        while self._index < len(self._numbers):
            current_number = self._numbers[self._index]
            self._index += 1
            if current_number % 2 == 0:
                return current_number

        # If no more even numbers are found, stop the iteration
        raise StopIteration

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers_iter = EvenNumberList(my_list)

print("Iterating through the custom EvenNumberList:")
for num in even_numbers_iter:
    print(num)

print("\nRestarting the iteration with a new object:")
for num in EvenNumberList(my_list):
    print(num)
```

**Output:**

```
Iterating through the custom EvenNumberList:
2
4
6
8
10

Restarting the iteration with a new object:
2
4
6
8
10
```

---

## Lesson 15.3: `itertools` module

**Concept**

The `itertools` module is a standard library that provides a collection of fast, memory-efficient functions for creating iterators. These functions are highly optimized and are ideal for building complex iteration patterns.

**Realistic Problem: Generating Combinations and Unique IDs**

We can use `itertools` to generate all possible teams from a list of candidates and to create a stream of unique IDs for data.

```python
import itertools

# --- Problem 1: Generating unique IDs from a counter ---
id_generator = itertools.count(start=1001, step=1)
print("Generating 3 unique IDs:")
for _ in range(3):
    unique_id = next(id_generator)
    print(f"New entry with ID: {unique_id}")

print("\n--- Problem 2: Generating teams from a list of candidates ---")
candidates = ['Alice', 'Bob', 'Charlie', 'David']
# Find all possible 2-person teams
teams = itertools.combinations(candidates, 2)
print("All possible 2-person teams:")
for team in teams:
    print(team)

print("\n--- Problem 3: Chaining sales data from different regions ---")
americas_sales = [100, 120, 150]
europe_sales = [95, 110]
all_sales = itertools.chain(americas_sales, europe_sales)
print("Processing combined sales data:")
for sale in all_sales:
    print(f"Processing sale: ${sale}")
```

**Output:**

```
Generating 3 unique IDs:
New entry with ID: 1001
New entry with ID: 1002
New entry with ID: 1003

--- Problem 2: Generating teams from a list of candidates ---
All possible 2-person teams:
('Alice', 'Bob')
('Alice', 'Charlie')
('Alice', 'David')
('Bob', 'Charlie')
('Bob', 'David')
('Charlie', 'David')

--- Problem 3: Chaining sales data from different regions ---
Processing combined sales data:
Processing sale: $100
Processing sale: $120
Processing sale: $150
Processing sale: $95
Processing sale: $110
```

---

## Lesson 15.4: Generator Functions and Generator Expressions

**Concept**

A **generator function** is a simpler way to create an iterator. Instead of a class with `__iter__` and `__next__`, you write a function that uses the `yield` keyword. A generator function pauses its execution and saves its state each time it `yield`s a value, and it resumes from that point on the next call.

A **generator expression** is a concise, one-line way to create a generator, similar to a list comprehension but with parentheses `()` instead of square brackets `[]`.

#### **Realistic Problem: Reading and Filtering a Log File**

We can write a generator function to efficiently read a log file and filter for specific entries, like error messages, without loading the entire file into memory.

```python
import os

# Create a sample log file for demonstration
with open("app.log", "w") as f:
    f.write("INFO: Application started.\n")
    f.write("DEBUG: User 'Alice' logged in.\n")
    f.write("ERROR: Database connection failed.\n")
    f.write("INFO: Processing data.\n")
    f.write("ERROR: Disk write failed.\n")

# --- Generator Function ---
def filter_errors(filepath):
    """A generator function that yields error messages from a log file."""
    print("Generator function started...")
    with open(filepath, "r") as f:
        for line in f:
            if "ERROR" in line:
                yield line.strip()
    print("Generator function finished.")

print("--- Using a generator function ---")
error_generator = filter_errors("app.log")
for error in error_generator:
    print(f"Found error: {error}")

# --- Generator Expression ---
print("\n--- Using a generator expression ---")
error_gen_exp = (line.strip() for line in open("app.log", "r") if "ERROR" in line)
print(f"Type of object: {type(error_gen_exp)}")

for error in error_gen_exp:
    print(f"Found error: {error}")

# Clean up the file
os.remove("app.log")
```

**Output:**

```
--- Using a generator function ---
Generator function started...
Found error: ERROR: Database connection failed.
Found error: ERROR: Disk write failed.
Generator function finished.

--- Using a generator expression ---
Type of object: <class 'generator'>
Found error: ERROR: Database connection failed.
Found error: ERROR: Disk write failed.
```

---

## Lesson 15.5: Advantages of Generators for Memory Efficiency

**Concept**

The key benefit of generators is **lazy evaluation**. They produce values one at a time, "on the fly," instead of creating and storing an entire collection in memory. This is especially critical when dealing with large datasets.

**Realistic Problem: Comparing Memory Usage for a Large Dataset**

Let's compare the memory usage of a list (which stores all items) versus a generator (which only stores its state) for a large sequence of numbers.

```python
import sys

dataset_size = 1_000_000

# --- Approach 1: Using a List (Memory-intensive) ---
print("--- Using a List Comprehension ---")
large_list = [i for i in range(dataset_size)]
print(f"Size of large_list (bytes): {sys.getsizeof(large_list)}")
print(f"First 5 elements: {large_list[:5]}")
del large_list # Free up memory for comparison

# --- Approach 2: Using a Generator (Memory-efficient) ---
print("\n--- Using a Generator Expression ---")
large_generator = (i for i in range(dataset_size))
print(f"Size of large_generator (bytes): {sys.getsizeof(large_generator)}")

# The generator produces values one by one
print("First 5 elements (from generator):")
for _ in range(5):
    print(next(large_generator), end=" ")

# The rest of the values are discarded
print(f"\nSize of large_generator (bytes) is still: {sys.getsizeof(large_generator)}")
```

**Output:**

```
--- Using a List Comprehension ---
Size of large_list (bytes): 8448728
First 5 elements: [0, 1, 2, 3, 4]

--- Using a Generator Expression ---
Size of large_generator (bytes): 112
First 5 elements (from generator):
0 1 2 3 4
Size of large_generator (bytes) is still: 112
```

---

## Lesson 15.6: Coroutines

**Concept**

A **coroutine** is a special type of generator that can not only `yield` a value but also _receive_ a value. It is defined using a generator function, but its purpose is different: it's not for iterating over a sequence, but for performing an action and then pausing to wait for new data. Data is sent to a coroutine using its `send()` method.

The key behavior is:

1.  A coroutine must be "primed" by calling `next()` once to start its execution and advance it to the first `yield` expression.
2.  Data is sent to the coroutine using `coroutine.send(value)`. The `yield` expression then evaluates to `value`.
3.  The coroutine runs until the next `yield` or `return` statement.

**Realistic Problem: An Asynchronous Text Search (Grep-like)**

We can create a coroutine that acts as a real-time filter. It waits for lines of text and prints them if they contain a specific pattern.

```python
def find_pattern_in_text(pattern):
    """
    A coroutine that searches for a pattern in text sent to it.
    """
    print(f"Coroutine started, waiting for text with pattern '{pattern}'...")
    try:
        while True:
            # Yield and wait for new data (the text_line)
            text_line = yield
            if pattern in text_line:
                print(f"Found match: {text_line}")
    except GeneratorExit:
        print("Coroutine closed.")

# Instantiate the coroutine
searcher = find_pattern_in_text("error")

# Prime the coroutine to start its execution up to the first yield
next(searcher)

print("\n--- Sending text to the coroutine ---")
searcher.send("INFO: Application started.")
searcher.send("DEBUG: User logged in.")
searcher.send("ERROR: Database connection failed.")
searcher.send("INFO: Data processed successfully.")
searcher.send("ERROR: Disk full.")

# It's good practice to close a coroutine when finished
searcher.close()
```

**Output:**

```
Coroutine started, waiting for text with pattern 'error'...

--- Sending text to the coroutine ---
Found match: ERROR: Database connection failed.
Found match: ERROR: Disk full.
Coroutine closed.
```
