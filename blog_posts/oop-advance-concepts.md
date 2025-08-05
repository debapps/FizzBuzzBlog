---
title: "Object-Oriented Programming (OOP) - Advanced Concepts in Python"
category: Python
date: "2025-08-05"
author: Debaditya Bhar
synopsis: This tutorial will walk you through the advance concepts of OOP in Python, from Inheritence, Polymorphism, Encapsulation to Abstruct classes.
coverImg: /blog_images/oop-advance-concepts/cover.png
---

# Object-Oriented Programming (OOP) - Advanced Concepts in Python

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" – data structures consisting of data fields and methods – to design applications and computer programs. Python is an inherently object-oriented language, and understanding its advanced OOP concepts is crucial for writing robust, scalable, and maintainable code.

## 1\. Inheritance

Inheritance is a fundamental OOP concept that allows a class (child or subclass) to inherit attributes and methods from another class (parent or superclass). This promotes code reusability and establishes a natural hierarchy between classes.

### 1.1 Single Inheritance

In single inheritance, a class inherits from only one parent class.

**Realistic Problem: A Company's Employee Hierarchy**

Imagine a company with a base `Employee` class. Different types of employees, like `Manager` and `Developer`, share some common traits (like name and salary) but also have unique responsibilities and methods.

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_info(self):
        return f"Name: {self.name}, Salary: ${self.salary}"

    def give_raise(self, amount):
        self.salary += amount
        return f"New salary for {self.name} is ${self.salary}"

class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)
        self.programming_language = programming_language

    def write_code(self):
        return f"{self.name} is writing code in {self.programming_language}."

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department
        self.team = []

    def add_team_member(self, employee):
        self.team.append(employee)
        return f"{employee.name} added to {self.name}'s team."

    def conduct_meeting(self):
        return f"{self.name} is conducting a meeting for the {self.department} department."

# Creating objects
dev1 = Developer("Alice", 80000, "Python")
mgr1 = Manager("Bob", 120000, "Engineering")

print(dev1.get_info())
print(dev1.write_code())

print("-" * 20)

print(mgr1.get_info())
print(mgr1.add_team_member(dev1))
print(mgr1.conduct_meeting())
```

**Output:**

```
Name: Alice, Salary: $80000
Alice is writing code in Python.
--------------------
Name: Bob, Salary: $120000
Alice added to Bob's team.
Bob is conducting a meeting for the Engineering department.
```

### 1.2 Multiple Inheritance

Multiple inheritance allows a class to inherit from more than one parent class.

**Realistic Problem: A Hybrid Device**

A `SmartPhone` can be seen as a device that has the capabilities of both a `Phone` (making calls) and a `Computer` (running applications).

```python
class Phone:
    def make_call(self, number):
        return f"Calling {number}..."

    def send_sms(self, number, message):
        return f"Sending SMS to {number}: '{message}'"

class Computer:
    def run_application(self, app_name):
        return f"Running application '{app_name}'..."

    def connect_wifi(self):
        return "Connected to Wi-Fi."

class SmartPhone(Phone, Computer):
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def get_info(self):
        return f"Brand: {self.brand}, Model: {self.model}"

# Creating an object
my_smartphone = SmartPhone("Samsung", "Galaxy S23 Ultra")

print(my_smartphone.get_info())
print(my_smartphone.make_call("123-456-7890"))
print(my_smartphone.run_application("Google Maps"))
print(my_smartphone.connect_wifi())
```

**Output:**

```
Brand: Samsung, Model: Galaxy S23 Ultra
Calling 123-456-7890...
Running application 'Google Maps'...
Connected to Wi-Fi.
```

## 2\. Polymorphism and Method Overriding

**Polymorphism** means "many forms." It allows different objects to respond to the same method call in their own specific way. This is often achieved through **Method Overriding**, where a subclass provides its own implementation of a method already defined in its superclass.

**Realistic Problem: Calculating Area of Different Geometric Shapes**

A program needs to calculate the area of various shapes. While the concept of "area" is the same, the calculation formula is different for a rectangle and a circle.

```python
import math

class Shape:
    def area(self):
        raise NotImplementedError("Subclass must implement abstract method.")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self): # Method overriding
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self): # Method overriding
        return math.pi * self.radius ** 2

def calculate_shape_area(shape_object):
    """Function that can take any shape object and call its area method."""
    print(f"The area of the shape is: {shape_object.area():.2f}")

# Creating objects
my_rectangle = Rectangle(5, 10)
my_circle = Circle(7)

# Demonstrating polymorphism
calculate_shape_area(my_rectangle)
calculate_shape_area(my_circle)
```

**Output:**

```
The area of the shape is: 50.00
The area of the shape is: 153.94
```

## 3\. Encapsulation and Access Modifiers (Convention)

**Encapsulation** is a core OOP principle that bundles data (attributes) and methods that operate on that data into a single unit (a class). Its primary goal is to hide an object's internal state from the outside world, exposing only a controlled public interface. This protects the data from accidental or unauthorized modification.

Python doesn't have strict keywords like `public`, `private`, or `protected` as found in languages like Java or C++. Instead, it uses a naming convention based on underscores to signify the intended visibility of a class member.

-   **Public Members (Default):** Any attribute or method without a leading underscore is considered public. They can be accessed and modified freely from anywhere, inside or outside the class. This is the default and is used for parts of the class that are intended for direct external use.

-   **Protected Members (Convention):** Members with a single leading underscore (e.g., `_protected_member`) are considered "protected." This is a strong convention for developers, indicating that the member is intended for internal use within the class and its subclasses. While it can still be accessed from outside the class, it serves as a warning that you are accessing a part of the class's internal workings and should proceed with caution.

-   **Private Members (Name Mangling):** Members with a double leading underscore (e.g., `__private_member`) are treated as "private." Python's interpreter automatically performs a process called **name mangling**, where it changes the name of the member to `_ClassName__private_member`. This makes it much harder to access from outside the class and is primarily used to prevent name clashes in subclasses. It is not truly private, as you can still access it if you know the mangled name, but it is a strong mechanism for discouraging direct access and upholding encapsulation.

**Realistic Problem: A User Profile in a Social Media App**

A user profile has certain data (like `username`) that can be public. Other data, like a password, should be protected to indicate it's for internal use. Crucially, sensitive information like a credit card number must be strongly discouraged from direct external access.

```python
class UserProfile:
    def __init__(self, username, password, token, credit_card_number):
        # Public member: accessible from anywhere
        self.username = username

        # Protected member (by convention): intended for internal use
        self._password = password

        # Private member (name-mangled): strongly discourages external access
        self.__credit_card = credit_card_number
        self.__access_token = token

    def get_public_info(self):
        """A public method to access some public information."""
        return f"Username: {self.username}"

    def _get_protected_info(self):
        """A protected method for internal use, e.g., for subclasses."""
        return f"Password (hashed): {hash(self._password)}"

    def login(self, entered_password):
        """A public method that interacts with protected and private data."""
        if entered_password == self._password:
            # Within the class, we can freely access protected and private members
            return f"Login successful. Your access token is {self.__access_token}."
        return "Login failed."

# Creating a user profile object
user1 = UserProfile("john_doe", "my_secret_pass", "abc-123", "1234-5678-9012-3456")

# --- Accessing Public Members (Recommended) ---
print(user1.get_public_info())

# --- Accessing Protected Members (Discouraged, but possible) ---
print(f"Direct access to protected password: {user1._password}")

# --- Accessing Private Members (Blocked) ---
try:
    print(user1.__credit_card)
except AttributeError as e:
    print(f"\nAttempted to access private member: {e}")

# --- A Public Method accessing Private Members (Recommended) ---
print(f"\n{user1.login('wrong_password')}")
print(f"{user1.login('my_secret_pass')}")

# --- Accessing Private Members via Name Mangling (Avoid this!) ---
print("\n--- WARNING: Bypassing Encapsulation (Bad Practice) ---")
print(f"Accessing private member via mangled name: {user1._UserProfile__access_token}")
```

**Output:**

```
Username: john_doe
Direct access to protected password: my_secret_pass

Attempted to access private member: 'UserProfile' object has no attribute '__credit_card'

Login failed.
Login successful. Your access token is abc-123.

--- WARNING: Bypassing Encapsulation (Bad Practice) ---
Accessing private member via mangled name: abc-123
```

## 4\. Abstract Classes and Interfaces (using `abc` module)

**Abstract Classes** cannot be instantiated directly and are meant to be a blueprint for other classes. They contain **abstract methods** that are declared but not implemented in the base class. Subclasses must implement these methods. This enforces a common "contract" or interface.

**Realistic Problem: Defining a Database Connector Interface**

A software application needs to connect to different types of databases (MySQL, PostgreSQL). We can create an abstract base class `DatabaseConnector` to ensure that all specific connectors have the same essential methods, such as `connect()`, `disconnect()`, and `execute_query()`.

```python
from abc import ABC, abstractmethod

class DatabaseConnector(ABC):
    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def disconnect(self):
        pass

    @abstractmethod
    def execute_query(self, query):
        pass

class MySQLConnector(DatabaseConnector):
    def connect(self):
        print("Connecting to MySQL database...")

    def disconnect(self):
        print("Disconnecting from MySQL database.")

    def execute_query(self, query):
        print(f"Executing MySQL query: {query}")
        return "Result from MySQL"

class PostgreSQLConnector(DatabaseConnector):
    def connect(self):
        print("Connecting to PostgreSQL database...")

    def disconnect(self):
        print("Disconnecting from PostgreSQL database.")

    def execute_query(self, query):
        print(f"Executing PostgreSQL query: {query}")
        return "Result from PostgreSQL"

def run_database_operations(connector):
    connector.connect()
    result = connector.execute_query("SELECT * FROM users")
    print(f"Received: {result}")
    connector.disconnect()

# We can't instantiate the abstract class directly
# db = DatabaseConnector() # This would raise a TypeError

mysql_conn = MySQLConnector()
postgres_conn = PostgreSQLConnector()

print("--- Running operations with MySQL connector ---")
run_database_operations(mysql_conn)

print("\n--- Running operations with PostgreSQL connector ---")
run_database_operations(postgres_conn)
```

**Output:**

```
--- Running operations with MySQL connector ---
Connecting to MySQL database...
Executing MySQL query: SELECT * FROM users
Received: Result from MySQL
Disconnecting from MySQL database.

--- Running operations with PostgreSQL connector ---
Connecting to PostgreSQL database...
Executing PostgreSQL query: SELECT * FROM users
Received: Result from PostgreSQL
Disconnecting from PostgreSQL database.
```

## 5\. Magic Methods (Dunder Methods)

Magic methods, also known as "dunder methods," are special methods in Python that are automatically invoked by Python for certain operations. They allow you to define how objects of your class behave with built-in functions and operators.

**Realistic Problem: A Custom Document Class**

We want a `Document` class that behaves naturally with built-in functions like `len()` and operators like `+` for concatenation, and `==` for comparison.

```python
class Document:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    def __str__(self):
        """Called by print() and str(). User-friendly representation."""
        return f"Document: '{self.title}'"

    def __repr__(self):
        """Called by repr(). Unambiguous representation for developers."""
        return f"Document(title='{self.title}', content='{self.content}')"

    def __len__(self):
        """Called by len(). Returns the number of words in the document."""
        return len(self.content.split())

    def __add__(self, other):
        """Called by the + operator. Concatenates two documents."""
        if isinstance(other, Document):
            new_title = f"{self.title} & {other.title}"
            new_content = f"{self.content} {other.content}"
            return Document(new_title, new_content)
        raise TypeError("Can only add another Document object.")

    def __eq__(self, other):
        """Called by the == operator. Compares documents by content."""
        if isinstance(other, Document):
            return self.content == other.content
        return False

# Creating document objects
doc1 = Document("Python OOP", "This is a tutorial on Python OOP.")
doc2 = Document("Python Basics", "This covers fundamental concepts.")
doc3 = Document("Python OOP", "This is a tutorial on Python OOP.")

# Using magic methods
print(doc1)
print(repr(doc1))
print(f"Number of words in doc1: {len(doc1)}")

print("-" * 20)

# Concatenating documents
doc_combined = doc1 + doc2
print(f"Combined document title: {doc_combined.title}")
print(f"Total words in combined doc: {len(doc_combined)}")

print("-" * 20)

# Comparing documents
print(f"doc1 == doc2: {doc1 == doc2}")
print(f"doc1 == doc3: {doc1 == doc3}")
```

**Output:**

```
Document: 'Python OOP'
Document(title='Python OOP', content='This is a tutorial on Python OOP.')
Number of words in doc1: 7
--------------------
Combined document title: Python OOP & Python Basics
Total words in combined doc: 12
--------------------
doc1 == doc2: False
doc1 == doc3: True
```
