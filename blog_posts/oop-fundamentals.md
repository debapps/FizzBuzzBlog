---
title: "Object-Oriented Programming (OOP) Fundamentals"
category: Python
date: "2025-08-02"
author: Debaditya Bhar
synopsis: This tutorial will walk you through the fundamental concepts of OOP in Python, from the basic building blocks to the different types of methods you can use within a class.
coverImg: /blog_images/oop-fundamentals/cover.png
---

# Object-Oriented Programming (OOP) Fundamentals

Object-Oriented Programming (OOP) is a powerful programming paradigm that structures code around **objects**, rather than functions and logic. It's a way of modeling real-world concepts in your code, making it more organized, scalable, and intuitive.

This tutorial will walk you through the fundamental concepts of OOP in Python, from the basic building blocks to the different types of methods you can use within a class.

---

## Introduction to OOP Concepts

To understand OOP, you must first grasp four key concepts:

1.  **Class:** A class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that all objects of that type will have. Think of a class named `Book`—it defines that all books have a `title`, `author`, and `price` (attributes), and can be `read()` or have a `discount_applied()` (methods).

2.  **Object:** An object is an instance of a class. It is a concrete entity created from the blueprint. So, while `Book` is the class, `book1` could be a specific object: "The Hitchhiker's Guide to the Galaxy" by Douglas Adams, with a price of `$10.99`. You can create many objects from a single class.

3.  **Attribute:** Attributes are the data or state associated with an object. They are like variables stored within the object. For our `Book` object, `title='The Hitchhiker's Guide...'` and `author='Douglas Adams'` would be attributes.

4.  **Method:** Methods are functions that belong to a class and define the behavior of its objects. They are actions the object can perform. For our `Book` object, `read()` and `apply_discount()` would be methods.

---

## Defining Classes and Creating Objects

Let's start by defining a simple class and then creating a few objects from it.

**Step 1: Define a Class**
A class is defined using the `class` keyword, followed by the class name (by convention, class names are in `CamelCase`). We will use the `pass` keyword as a placeholder to indicate an empty class for now.

**Example Code:**

```python
# A simple class named Book
class Book:
    pass

# Creating two objects (instances) of the Book class
book1 = Book()
book2 = Book()

# Printing the objects shows that they are distinct entities
print(book1)
print(book2)

# We can also check if they are the same object
print(f"\nAre book1 and book2 the same object? {book1 is book2}")
```

**Output:**

```
<__main__.Book object at 0x...>
<__main__.Book object at 0x...>

Are book1 and book2 the same object? False
```

The output shows that `book1` and `book2` are two separate `Book` objects located at different memory addresses.

---

## The `__init__` method (Constructors)

The `__init__` method, often called the **constructor**, is a special method that is automatically called when a new object is created. Its primary purpose is to initialize the object's attributes.

The `__init__` method takes at least one parameter, `self`, which is a reference to the object itself. Through `self`, you can access and set the object's attributes.

**Example Code:**

```python
class Book:
    # The __init__ method initializes the object's attributes
    def __init__(self, title, author, price):
        # 'self.title', 'self.author', and 'self.price' are instance attributes
        self.title = title
        self.author = author
        self.price = price

# Creating new Book objects now requires providing title, author, and price
book1 = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 10.99)
book2 = Book("Pride and Prejudice", "Jane Austen", 8.50)

# We can now access the attributes of each object
print(f"Book 1: '{book1.title}' by {book1.author}, priced at ${book1.price}")
print(f"Book 2: '{book2.title}' by {book2.author}, priced at ${book2.price}")
```

**Output:**

```
Book 1: 'The Hitchhiker's Guide to the Galaxy' by Douglas Adams, priced at $10.99
Book 2: 'Pride and Prejudice' by Jane Austen, priced at $8.5
```

This demonstrates that each object has its own unique set of attributes.

---

## Instance Methods and Attributes

**Instance attributes** are pieces of data that are unique to each object, as shown with `title`, `author`, and `price` above. **Instance methods** are functions that are called on a specific object and can access its unique attributes.

All instance methods must have `self` as their first parameter.

**Example Code:**

```python
class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    # An instance method that uses the object's attributes
    def get_details(self):
        return f"'{self.title}' by {self.author}"

    def apply_discount(self, discount_percentage):
        discount_amount = self.price * (discount_percentage / 100)
        self.price -= discount_amount
        print(f"Price after discount: ${self.price:.2f}")

# Create two book objects
book1 = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 10.99)
book2 = Book("Pride and Prejudice", "Jane Austen", 8.50)

# Call the instance methods on each object
print(f"Details for book1: {book1.get_details()}")
print(f"Details for book2: {book2.get_details()}")

print("\nApplying a 20% discount to book1:")
book1.apply_discount(20)
print(f"New price of book1 is: ${book1.price:.2f}")
```

**Output:**

```
Details for book1: 'The Hitchhiker's Guide to the Galaxy' by Douglas Adams
Details for book2: 'Pride and Prejudice' by Jane Austen

Applying a 20% discount to book1:
Price after discount: $8.79
New price of book1 is: $8.79
```

The `apply_discount` method modifies the specific `price` attribute of the `book1` object, showing how instance methods operate on an object's unique state.

---

## Class Methods and Static Methods

In addition to instance methods, classes can have **class methods** and **static methods**. They serve different purposes and are called in different ways.

-   **Instance Method (`self`)**: The most common type. It operates on an instance of the class and has access to its attributes via the `self` parameter.
-   **Class Method (`@classmethod`, `cls`)**: A method that operates on the class itself, not a specific instance. It's defined with the `@classmethod` decorator and takes `cls` (a reference to the class) as its first parameter instead of `self`.
-   **Static Method (`@staticmethod`)**: A method that has no relationship with the class or its instances. It doesn't take `self` or `cls` as an argument. It's essentially a regular function that is logically grouped within a class.

### When to use a Class Method

Use a class method when you need a function that performs an action related to the class as a whole, rather than a specific object. A common use case is to provide an alternative way to create new instances of the class, often called a "factory method".

**Real-world Example:** Imagine you have a class to represent a `DateTime` object. The standard way to create it is by passing in year, month, day, etc. However, you might also want a way to create a `DateTime` object from a timestamp string. A class method is perfect for this.

**Example Code:**

```python
from datetime import date

class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    def display(self):
        return f"{self.day}/{self.month}/{self.year}"

    # A class method that serves as an alternative constructor
    @classmethod
    def from_string(cls, date_string):
        """Creates a Date object from a string in 'dd-mm-yyyy' format."""
        day, month, year = map(int, date_string.split('-'))
        # 'cls' refers to the Date class, so we can call the constructor on it
        return cls(day, month, year)

# Creating a regular instance
date1 = Date(25, 12, 2024)
print(f"Date 1 (regular instance): {date1.display()}")

# Using the class method to create an instance from a string
date_string = '31-01-2025'
date2 = Date.from_string(date_string)
print(f"Date 2 (from string): {date2.display()}")
```

**Output:**

```
Date 1 (regular instance): 25/12/2024
Date 2 (from string): 31/1/2025
```

This shows how `from_string` acts as a smart way to create a `Date` object without needing to call `__init__` directly, making the code cleaner and more flexible.

### When to use a Static Method

Use a static method when a function is logically related to the class but does not need to access any of the class's or an instance's state. It's a self-contained utility function that is simply grouped within the class for organizational purposes.

**Real-world Example:** Continuing with our `Date` class, a function to validate a date format or to check if a year is a leap year doesn't depend on a specific `Date` object (`self`) or the class itself (`cls`). It only needs input parameters. Therefore, it's an ideal candidate for a static method.

**Example Code:**

```python
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    def display(self):
        return f"{self.day}/{self.month}/{self.year}"

    # A static method to check for a leap year
    @staticmethod
    def is_leap_year(year):
        """Returns True if the given year is a leap year, False otherwise."""
        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# We can call the static method directly from the class
# without creating an instance.
print(f"Is 2024 a leap year? {Date.is_leap_year(2024)}")
print(f"Is 2023 a leap year? {Date.is_leap_year(2023)}")
```

**Output:**

```
Is 2024 a leap year? True
Is 2023 a leap year? False
```

The `is_leap_year` method is a utility function that logically belongs to the concept of "dates" but doesn't require an existing `Date` object to perform its calculation.

Mastering the use cases for instance, class, and static methods will allow you to create well-structured, professional-grade Python applications.
