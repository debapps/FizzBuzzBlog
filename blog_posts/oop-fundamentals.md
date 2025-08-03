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
# Object-Oriented Programming Fundamental.

# A simple class Book.
class Book:
    pass

# Creating the instances/objects of the class Book.
b1 = Book()
b2 = Book()

# Displaying book objects.
print(f'\nBook1 - {b1}')
print(f'\nBook2 - {b2}')

# Check if they are the same object.
print(f'\nAre b1 and b2 the same object? {b1 is b2}')

```

**Output:**

```
Book1 - <__main__.Book object at 0x103436c30>

Book2 - <__main__.Book object at 0x103436bd0>

Are b1 and b2 the same object? False
```

The output shows that `book1` and `book2` are two separate `Book` objects located at different memory addresses.

---

## The `__init__` method (Constructors)

The `__init__` method, often called the **constructor**, is a special method that is automatically called when a new object is created. Its primary purpose is to initialize the object's attributes.

The `__init__` method takes at least one parameter, `self`, which is a reference to the object itself. Through `self`, you can access and set the object's attributes.

**Example Code:**

```python
# Class constractor: __init__() method in the class is used to initialize the object.

class Book:
    # `self.title`, `self.author` and `self.price` are the attributes of object instances.
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

# Creating Book objects with mandatory attributes: title, author and price.
b1 = Book('The Alchemist', 'Paulo Coelho', 254.00)
b2 = Book('The Kite Runner', 'Hosseini Khaled', 340.00)
b3 = Book('The Book Thief', 'Zusak Markus', 236.00)

# We can now access the attributes of each object
print(f"Book 1: '{b1.title}' by {b1.author}, priced at Rs. {b1.price}")
print(f"Book 2: '{b2.title}' by {b2.author}, priced at Rs. {b2.price}")
print(f"Book 3: '{b3.title}' by {b3.author}, priced at Rs. {b3.price}")
```

**Output:**

```
Book 1: 'The Alchemist' by Paulo Coelho, priced at Rs. 254.0
Book 2: 'The Kite Runner' by Hosseini Khaled, priced at Rs. 340.0
Book 3: 'The Book Thief' by Zusak Markus, priced at Rs. 236.0
```

This demonstrates that each object has its own unique set of attributes.

---

## Instance Methods and Attributes

**Instance attributes** are pieces of data that are unique to each object, as shown with `title`, `author`, and `price` above. **Instance methods** are functions that are called on a specific object and can access its unique attributes.

All instance methods must have `self` as their first parameter.

**Example Code:**

```python
# Instance Methods and attributes.

class Book:
    # `self.title`, `self.author` and `self.price` are the attributes of object instances.
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    # Instance methods.
    def get_details(self):
        return f'{self.title} by {self.author}'

    def apply_discount(self, discount_percentage):
        discount = self.price * discount_percentage / 100
        self.discounted_price = self.price - discount
        return self.discounted_price

# Creating Book objects with mandatory attributes: title, author and price.
b1 = Book('The Alchemist', 'Paulo Coelho', 254.00)
b2 = Book('The Kite Runner', 'Hosseini Khaled', 340.00)
b3 = Book('The Book Thief', 'Zusak Markus', 236.00)

# Call the instance method to get details of each book object.
print(f'Book 1: {b1.get_details()}')
print(f'Book 2: {b2.get_details()}')
print(f'Book 3: {b3.get_details()}')

# Apply discount of 20% on book 2.
print(f'20% Discounted price of "{b2.get_details()}" is Rs. {b2.apply_discount(20):.2f}')

```

**Output:**

```
Book 1: The Alchemist by Paulo Coelho
Book 2: The Kite Runner by Hosseini Khaled
Book 3: The Book Thief by Zusak Markus
20% Discounted price of "The Kite Runner by Hosseini Khaled" is Rs. 272.00
```

The `apply_discount` method calculates the `discounted_price` attribute of the `b2` object, showing how instance methods operate on an object's unique state.

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
# Class Method: Method that operates on Class itself, not on a specific instance.
# Class method is defined using `@classmethod` decorator. It accepts `cls` as its first
# parameter to reference to class.

class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    # Instance Method.
    def show(self):
        return f'{self.day}/{self.month}/{self.year}'

    # Class Method.
    @classmethod
    def from_string(cls, date_str):
        day, month, year = map(int, date_str.split('-'))
        return cls(day, month, year)

# Creating a regular instance.
date1 = Date(14, 8, 1987)
print(f'Regular Date - {date1.show()}')

# Creating instance with class method.
date2 = Date.from_string('13-03-2020')
print(f'\nDate from string - {date2.show()}')

```

**Output:**

```
Regular Date - 14/8/1987

Date from string - 13/3/2020
```

This shows how `from_string` acts as a smart way to create a `Date` object without needing to call `__init__` directly, making the code cleaner and more flexible.

### When to use a Static Method

Use a static method when a function is logically related to the class but does not need to access any of the class's or an instance's state. It's a self-contained utility function that is simply grouped within the class for organizational purposes.

**Real-world Example:** Continuing with our `Date` class, a function to validate a date format or to check if a year is a leap year doesn't depend on a specific `Date` object (`self`) or the class itself (`cls`). It only needs input parameters. Therefore, it's an ideal candidate for a static method.

**Example Code:**

```python
# Static Method: Static method is utility function those are logically grouped into a class,
# but does not need to have access to instance's attributes or state.
# It doesn't take `self` or `cls` as an argument. `@staticmethod` decorator is used to define
# the static method.

class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    # Instance Method.
    def show(self):
        return f'{self.day}/{self.month}/{self.year}'

    # Class Method.
    @classmethod
    def from_string(cls, date_str):
        day, month, year = map(int, date_str.split('-'))
        return cls(day, month, year)

    # Static Method.
    @staticmethod
    def is_leap_year(year):
        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Creating a regular instance.
date1 = Date(14, 8, 1987)
print(f'Regular Date - {date1.show()}')

# Creating instance with class method.
date2 = Date.from_string('13-03-2020')
print(f'\nDate from string - {date2.show()}\n')

# We can call the static method directly from the class
# without creating an instance.
print(f"Is 2024 a leap year? {Date.is_leap_year(2024)}")
print(f"Is 2023 a leap year? {Date.is_leap_year(2023)}")
```

**Output:**

```
Regular Date - 14/8/1987

Date from string - 13/3/2020

Is 2024 a leap year? True
Is 2023 a leap year? False
```

The `is_leap_year` method is a utility function that logically belongs to the concept of "dates" but doesn't require an existing `Date` object to perform its calculation.

Mastering the use cases for instance, class, and static methods will allow you to create well-structured, professional-grade Python applications.
