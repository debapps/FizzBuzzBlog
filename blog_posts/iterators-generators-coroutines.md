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
# An iterable is a object that can be looped over, i.e., list, tuple etc.
# An iterator is a object that manage the state of iteration.
# An iterable object has __iter__() method, that returns the iterator object.
# An iterator object has __next__() method, that returns the next item in the sequence.
# When there is no more item, __next__() method raises StopIteration exception.
# Python loop automates the iteration process. It calls iter() method to get the iterator and
# repeatedly calls next() method until StopIteration exception occurs.

# This program create a file and iterates it content line by line
# using manual way and then by python loop.

content = [
    'Line 1: The purpose of our lives is to be happy - Dalai Lama',
    'Line 2: Life is what happens when you\'re busy making other plans - John Lennon',
    'Line 3: The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart - Helen Keller',
    'Line 4: Happiness is not something ready-made. It comes from your own actions - Dalai Lama',
    'Line 5: The greatest happiness you can have is knowing that you do not need any - William Saroyan',
    'Line 6: Relationships are like a dance, with a little give and take, and a lot of trust - Unknown',
    'Line 7: A great relationship is about two things: First, appreciating the similarities, and second, respecting the differences - Unknown',
    'Line 8: ove is a two-way street constantly under construction - Carroll Bryant',
    'Line 9: Don\'t walk in front of me… I may not follow. Don\'t walk behind me… I may not lead. Walk beside me… and just be my friend - Albert Camus',
    'Line 10: The real test of a relationship is how you handle disagreements - Unknown',
]

# Create and write the text file.
with open('quotes.txt', 'w') as file:
    for line in content:
        file.write(f'{line}\n')

# Reading the file in manual way.
print('\n--- Manual iteration using iter() and next() ---\n')
with open('quotes.txt', 'r') as file:
    file_iterator = iter(file) # Generate the Iterator.

    while True:
        try:
            print(next(file_iterator).strip())
        except StopIteration as e:
            print('\nEnd of file reached.')
            break

# Reading file using for loop.
print('\n--- Automatic iteration using python for loop ---\n')
with open('quotes.txt', 'r') as file:
    for line in file:
        print(line.strip())

```

**Output:**

```
--- Manual iteration using iter() and next() ---

Line 1: The purpose of our lives is to be happy - Dalai Lama
Line 2: Life is what happens when you're busy making other plans - John Lennon
Line 3: The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart - Helen Keller
Line 4: Happiness is not something ready-made. It comes from your own actions - Dalai Lama
Line 5: The greatest happiness you can have is knowing that you do not need any - William Saroyan
Line 6: Relationships are like a dance, with a little give and take, and a lot of trust - Unknown
Line 7: A great relationship is about two things: First, appreciating the similarities, and second, respecting the differences - Unknown
Line 8: ove is a two-way street constantly under construction - Carroll Bryant
Line 9: Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… and just be my friend - Albert Camus
Line 10: The real test of a relationship is how you handle disagreements - Unknown

End of file reached.

--- Automatic iteration using python for loop ---

Line 1: The purpose of our lives is to be happy - Dalai Lama
Line 2: Life is what happens when you're busy making other plans - John Lennon
Line 3: The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart - Helen Keller
Line 4: Happiness is not something ready-made. It comes from your own actions - Dalai Lama
Line 5: The greatest happiness you can have is knowing that you do not need any - William Saroyan
Line 6: Relationships are like a dance, with a little give and take, and a lot of trust - Unknown
Line 7: A great relationship is about two things: First, appreciating the similarities, and second, respecting the differences - Unknown
Line 8: ove is a two-way street constantly under construction - Carroll Bryant
Line 9: Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… and just be my friend - Albert Camus
Line 10: The real test of a relationship is how you handle disagreements - Unknown

```

---

## Lesson 15.2: Creating Custom Iterators

**Concept**

You can create your own custom iterable objects by defining a class that implements the `__iter__()` and `__next__()` methods. This is useful for building custom data structures or sequences that need specific iteration logic.

**Realistic Problem: A Custom `EvenNumberList`**

Suppose you have a list of numbers and want to create a class that iterates through it but only returns the even numbers.

```python
# Custom Iterators can be created by implementing the __iter__() and __next__() methods in a class.

# This program will create a custom iterators that takes a list of numbers and
# returns even number iteration.

class EvenNumberList:
    def __init__(self, numbers):
        self._numbers = numbers
        self._idx = 0

    def __iter__(self):
        return self

    def __next__(self):
        while self._idx < len(self._numbers):
            current_num = self._numbers[self._idx]
            self._idx += 1

            if current_num % 2 == 0:
                return current_num

        raise StopIteration

def main():
    num_list = [num for num in range(1, 11)]
    even_numbers = EvenNumberList(num_list)

    print('\nEven Number List:')
    for num in even_numbers:
        print(num)

if __name__ == '__main__':
    main()
```

**Output:**

```
Even Number List:
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

The `itertools` module contain two types of iterator functions:

-   _The infinite iterators:_ Those iterators never stops by default.
-   _The finite iterators:_ Those iterators stops after finite sequence of results.

**The Infiinite Iterators Examples**

```python

# itertools modules can have a number of useful, memory efficient iterators.

# The infinite iterators never stops.

import itertools

# count iterators.

print('\ncount iterator.')

# counter = itertools.count()

counter = itertools.count(start=5, step=2.5)

print(next(counter))
print(next(counter))
print(next(counter))
print(next(counter))
print(next(counter))
print(next(counter))

print('\nCreating sequence data.')
data = ['Alice', 'Bob', 'Charlie', 'David']
sequence_data = zip(itertools.count(start=1), data)

for item in sequence_data:
print(item)

# cycle iterator.

print('\ncycle iterator')
result = itertools.cycle('ABCD')

print(next(result))
print(next(result))
print(next(result))
print(next(result))
print(next(result))
print(next(result))
print(next(result))

# repeat iterator.

print('\nrepeat iterator.')
result = itertools.repeat(2)

print(next(result))
print(next(result))
print(next(result))

print('\nGenerating Cube of numbers from 1 to 10.')
cubes = map(pow, range(1, 11), itertools.repeat(3))
print(list(cubes))

```

**Output**

```
count iterator.
5
7.5
10.0
12.5
15.0
17.5

Creating sequence data.
(1, 'Alice')
(2, 'Bob')
(3, 'Charlie')
(4, 'David')

cycle iterator
A
B
C
D
A
B
C

repeat iterator.
2
2
2

Generating Cube of numbers from 1 to 10.
[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

```

**The Fiinite Iterators Examples**

```python

# Finite iterators using itertools.

import itertools
# Chaining Iterables: This function takes several iterables and treats them as a
# single, continuous sequence.

print(f'\nChaining Iterables.')

# Product sales data.
wb_sales = [200, 432, 543, 656]
bihar_sales = [987, 234, 432]
up_sales = [34, 231]

all_sales = itertools.chain(wb_sales, bihar_sales, up_sales)
total = 0

for sales in all_sales:
    total += sales
    print(f'Processing Sales Rs. {sales}')

print(f'\nTotal Sales: Rs. {total}')

# Generating Combinations: This function generates all possible unordered combinations of
# a specific length from an iterable.

print('\nCreating all possible two-person teams from a list of candidates for a project.')
candidates = ['Alice', 'Bob', 'Charlie', 'David']

# Generate all possible teams of 2
all_teams = itertools.combinations(candidates, 2)

print("All possible 2-person teams:")
for team in all_teams:
    print(team)

# Generating Permutations.
digit_list = list(range(1, 5))
all_permutations = itertools.permutations(digit_list, 3)

print(f'\n\nGenerating all possible permutations of {digit_list} to fill 4 places.')
for item in all_permutations:
    print(item, end=' ')

print()

# Slicing a iterator.
print('\nSlicing a iterator using islice() starting from 5 to 20 by step 2.')
print(list(itertools.islice(itertools.count(start=1), 5, 20, 2)))

```

**Output**

```
Chaining Iterables.
Processing Sales Rs. 200
Processing Sales Rs. 432
Processing Sales Rs. 543
Processing Sales Rs. 656
Processing Sales Rs. 987
Processing Sales Rs. 234
Processing Sales Rs. 432
Processing Sales Rs. 34
Processing Sales Rs. 231

Total Sales: Rs. 3749

Creating all possible two-person teams from a list of candidates for a project.
All possible 2-person teams:
('Alice', 'Bob')
('Alice', 'Charlie')
('Alice', 'David')
('Bob', 'Charlie')
('Bob', 'David')
('Charlie', 'David')


Generating all possible permutations of [1, 2, 3, 4] to fill 4 places.
(1, 2, 3) (1, 2, 4) (1, 3, 2) (1, 3, 4) (1, 4, 2) (1, 4, 3) (2, 1, 3) (2, 1, 4) (2, 3, 1) (2, 3, 4) (2, 4, 1) (2, 4, 3) (3, 1, 2) (3, 1, 4) (3, 2, 1) (3, 2, 4) (3, 4, 1) (3, 4, 2) (4, 1, 2) (4, 1, 3) (4, 2, 1) (4, 2, 3) (4, 3, 1) (4, 3, 2)

Slicing a iterator using islice() starting from 5 to 20 by step 2.
[6, 8, 10, 12, 14, 16, 18, 20]

```

**Realistic Problem: Generating Slice of a large file**

There is large file from famous Sherlock Holmes novel _A Study in Scarlet_ taken from internet archive [A Study in Scarlet](https://www.gutenberg.org/cache/epub/244/pg244.txt). We want to extract only the Title and author name from that file.

```python
# Generate first 3 lines from a large file.

import itertools

with open('large_file.txt', 'r') as file:
    large_file_iterable = iter(file)

    file_details = itertools.islice(large_file_iterable, 10, 13)

    for line in file_details:
        print(line.strip())
```

**Output:**

```
Title: A Study in Scarlet

Author: Arthur Conan Doyle
```

**Realistic Problem: Read the person.json file and group data based on state.**

There is following JSON file called `person.json` file. We want to group the persons based on state.

```
###
[
    {
        "name": "Arijit Singh",
        "city": "Kolkata",
        "state": "WB"
    },
    {
        "name": "Iman chakrabarty",
        "city": "Howrah",
        "state": "WB"
    },
    {
        "name": "Anupam Roy",
        "city": "New Town",
        "state": "WB"
    },
    {
        "name": "Sheya Ghosal",
        "city": "Jaipur",
        "state": "RJ"
    },
    {
        "name": "Sonu Nigam",
        "city": "Mumbai",
        "state": "MH"
    },
    {
        "name": "Kishor Kumar",
        "city": "Pune",
        "state": "MH"
    },
    {
        "name": "A. R. Rahman",
        "city": "Chennai",
        "state": "TN"
    },
    {
        "name": "Hariharan",
        "city": "Chennai",
        "state": "TN"
    },
    {
        "name": "Kumar Sanu",
        "city": "Kolkata",
        "state": "WB"
    }
]
```

```python
# The groupby function returns an iterator that contains consecutive keys and groups.
# The key must be sorted.

# This program reads a JSON file and groups the data based on state.
import json
import itertools

with open('person.json', 'r') as person_file:
    data = json.load(person_file)

# Sort the data using State.
state_key = lambda person: person['state']
person_data = sorted(data, key=state_key)

# Get the person group.
person_group = itertools.groupby(person_data, state_key)

for state, group in person_group:
    person_list = list(group)
    print(f'State - {state}\tNumber of person - {len(person_list)}')

    for person in person_list:
        print(person)

    print()

```

**Output**

```
State - MH	Number of person - 2
{'name': 'Sonu Nigam', 'city': 'Mumbai', 'state': 'MH'}
{'name': 'Kishor Kumar', 'city': 'Pune', 'state': 'MH'}

State - RJ	Number of person - 1
{'name': 'Sheya Ghosal', 'city': 'Jaipur', 'state': 'RJ'}

State - TN	Number of person - 2
{'name': 'A. R. Rahman', 'city': 'Chennai', 'state': 'TN'}
{'name': 'Hariharan', 'city': 'Chennai', 'state': 'TN'}

State - WB	Number of person - 4
{'name': 'Arijit Singh', 'city': 'Kolkata', 'state': 'WB'}
{'name': 'Iman chakrabarty', 'city': 'Howrah', 'state': 'WB'}
{'name': 'Anupam Roy', 'city': 'New Town', 'state': 'WB'}
{'name': 'Kumar Sanu', 'city': 'Kolkata', 'state': 'WB'}
```

---

## Lesson 15.4: Generator Functions and Generator Expressions

**Concept**

A **generator function** is a simpler way to create an iterator. Instead of a class with `__iter__` and `__next__`, you write a function that uses the `yield` keyword. A generator function pauses its execution and saves its state each time it `yield`s a value, and it resumes from that point on the next call.

A **generator expression** is a concise, one-line way to create a generator, similar to a list comprehension but with parentheses `()` instead of square brackets `[]`.

**Realistic Problem: Reading and Filtering a Log File**

We can write a generator function to efficiently read a log file and filter for specific entries, like error messages, without loading the entire file into memory.

```python
# Reading and Filtering a Log File using Generator.
import datetime
import time

# Create a sample application log file.
print('\n----------- Generating Log file ------------------')
with open('app.log', 'w') as log_file:
    log_file.write(f'{datetime.datetime.now()} -- INFO: Application Started.\n')
    log_file.write(f'{datetime.datetime.now()} -- DEBUG: User "Alice" logged in.\n')
    time.sleep(1)
    log_file.write(f'{datetime.datetime.now()} -- DEBUG: User "Charles" logged in.\n')
    log_file.write(f'{datetime.datetime.now()} -- ERROR: Database connection failed.\n')
    time.sleep(1)
    log_file.write(f'{datetime.datetime.now()} -- INFO: Remote API Called.\n')
    log_file.write(f'{datetime.datetime.now()} -- INFO: Processing Data.\n')
    time.sleep(2)
    log_file.write(f'{datetime.datetime.now()} -- INFO: Remote API Returned.\n')
    log_file.write(f'{datetime.datetime.now()} -- ERROR: API Auth failure.\n')
print('\n----------- Log file generated ------------------')

# Generator Function.
def filter_error(path):
    '''A generator function that filter the errors in the log file.'''

    with open(path, 'r') as log_file:
        for line in log_file:
            if 'ERROR' in line:
                yield line.strip()

print('\n----------- ERRORS from log file ------------------')
# error_generator = filter_error('app.log')

# Generator Expression.
error_generator = (line.strip() for line in open('app.log', 'r') if 'ERROR' in line)

for error in error_generator:
    print(f'Error Found: {error}')
```

**Output:**

```
----------- Generating Log file ------------------

----------- Log file generated ------------------

----------- ERRORS from log file ------------------
Error Found: 2025-08-11 21:25:32.582014 -- ERROR: Database connection failed.
Error Found: 2025-08-11 21:25:35.588050 -- ERROR: API Auth failure.
```

---

## Lesson 15.5: Advantages of Generators for Memory Efficiency

**Concept**

The key benefit of generators is **lazy evaluation**. They produce values one at a time, "on the fly," instead of creating and storing an entire collection in memory. This is especially critical when dealing with large datasets.

**Realistic Problem: Comparing Memory Usage for a Large Dataset**

Let's compare the memory usage of a list (which stores all items) versus a generator (which only stores its state) for a large sequence of numbers.

```python
# The key benefit of Generators is "lazy evaluation".
# The values are produced on the fly, instead of storing the entire collection into the memory.

from sys import getsizeof

data_size = 1_000_000

# Conventional memory intensive approach using list.
print('\n-------- Using List Comprehension --------')
large_data = [item for item in range(data_size)]
print(f'Size of data in memory (bytes): {getsizeof(large_data)}')
print(f'The first five elements: {large_data[:5]}')
del large_data

# Using memory efficient generator approach.
print('\n-------- Using Generator Expression --------')
large_generator = (item for item in range(data_size))
print(f'Size of data in memory (bytes): {getsizeof(large_generator)}')
print(f'The first five elements:')
for _ in range(5):
    print(next(large_generator), end=', ')
```

**Output:**

```
-------- Using List Comprehension --------
Size of data in memory (bytes): 8448728
The first five elements: [0, 1, 2, 3, 4]

-------- Using Generator Expression --------
Size of data in memory (bytes): 192
The first five elements:
0, 1, 2, 3, 4, %
```

---

## Lesson 15.6: Coroutines

**Concept**

A **coroutine** is a special type of generator that can not only `yield` a value but also _receive_ a value. It is defined using a generator function, but its purpose is different: it's not for iterating over a sequence, but for performing an action and then pausing to wait for new data. Data is sent to a coroutine using its `send()` method.

The key behavior is:

1.  A coroutine must be "primed" by calling `next()` once to start its execution and advance it to the first `yield` expression.
2.  Data is sent to the coroutine using `coroutine.send(value)`. The `yield` expression then evaluates to `value`.
3.  The coroutine runs until the next `yield` or `return` statement.

**Coroutine Example: The coroutine generates token numbers for input data.**

```python
# Coroutines: Special types of generator that receives value on the fly and process it and wait
# for new data.

# 1. We can trigger coroutine processing by next(). The 'yeild' inside the
# coroutine receives the value.
# 2. We can send new data by coroutine.send(value).
# 3. we can close corouting processing by calling close() method.

# The coroutine generates token numbers for input data.

def token_issuer(token_id = 0):
    try:
        while True:
            name = yield
            token_id += 1
            print(f'Token number for {name}: {token_id}')
    except GeneratorExit:
        print('Token issuer exit.')

if __name__ == '__main__':
    token = token_issuer()

    # Starts the coroutine.
    next(token)

    token.send('Debaditya')
    token.send('Anuradha')
    token.send('Anurag')
    token.send('Tania')

    # close the coroutine.
    token.close()
```

**Output**

```
Token number for Debaditya: 1
Token number for Anuradha: 2
Token number for Anurag: 3
Token number for Tania: 4
Token issuer exit.
```

**Coroutine Example: Coroutine using decorator.**

```Python
# We can write coroutine decorator to create coroutines.

# Coroutine Decorator.
def couroutines(func):
    def wrapper(*args, **kwargs):
        c = func(*args, **kwargs)
        next(c)
        return c

    return wrapper

# The coroutine generates token numbers for input data.

@couroutines
def token_issuer(token_id = 0):
    try:
        while True:
            name = yield
            token_id += 1
            print(f'Token number for {name}: {token_id}')
    except GeneratorExit:
        print('Token issuer exit.')

if __name__ == '__main__':
    token = token_issuer(100)

    token.send('Debaditya')
    token.send('Anuradha')
    token.send('Anurag')
    token.send('Tania')

    # close the coroutine.
    token.close()

```

**Output**

```
Token number for Debaditya: 101
Token number for Anuradha: 102
Token number for Anurag: 103
Token number for Tania: 104
Token issuer exit.
```

**Realistic Problem: An Asynchronous Text Search (Grep-like)**

We can create a coroutine that acts as a real-time filter. It waits for lines of text and prints them if they contain a specific pattern.

We use following `app.log` file in the following program.

```
2025-08-11 21:26:20.837748 -- INFO: Application Started.
2025-08-11 21:26:20.837761 -- DEBUG: User "Alice" logged in.
2025-08-11 21:26:21.842807 -- DEBUG: User "Charles" logged in.
2025-08-11 21:26:21.842879 -- ERROR: Database connection failed.
2025-08-11 21:26:22.844038 -- INFO: Remote API Called.
2025-08-11 21:26:22.844105 -- INFO: Processing Data.
2025-08-11 21:26:24.849174 -- INFO: Remote API Returned.
2025-08-11 21:26:24.849251 -- ERROR: API Auth failure.

```

```python
# This program uses a Coroutine to find error in application log file using pattern matching.

# Coroutine Decorator.
def couroutines(func):
    def wrapper(*args, **kwargs):
        c = func(*args, **kwargs)
        next(c)
        return c

    return wrapper

@couroutines
def text_pattern(pattern):
    try:
        while True:
            text = yield
            if pattern in text:
                print(f'{pattern} Match Found - {text}')
    except GeneratorExit:
        print('Coroutine Closed.')

if __name__ == '__main__':
    print('\n-------- Find ERROR using Coroutine --------')

    searcher = text_pattern('ERROR')

    with open('app.log', 'r') as log_file:
        for line in log_file:
            searcher.send(line.strip())

    searcher.close()
```

**Output:**

```
-------- Find ERROR using Coroutine --------
ERROR Match Found - 2025-08-11 21:26:21.842879 -- ERROR: Database connection failed.
ERROR Match Found - 2025-08-11 21:26:24.849251 -- ERROR: API Auth failure.
Coroutine Closed.
```
