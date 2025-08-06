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
# Single Inheritance: A class inherits attributes and methods from single base/parent class.

# A company has base class: Employee. Different job roles like Developer, Manager classes
# inherits attributes and methods from single base class Employee.

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def show_info(self):
        print(f'\nName: {self.name}, Salary: ${self.salary}')

    def give_raise(self, percent):
        self.salary += self.salary * percent / 100
        print(f'New Salary for {self.name}: {self.salary}')

class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)
        self.programming_language = programming_language

    def write_code(self):
        print(f'{self.name} is writing code in {self.programming_language}')

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department
        self.reportees = []

    def add_reportee(self, employee):
        self.reportees.append(employee)
        print(f'{employee.name} is added to {self.name}\'s team.')

    def conduct_meeting(self):
        print(f'{self.name} is conducting meetings for {self.department} department.')


if __name__ == '__main__':
    d1 = Developer('Anuradha', 5000, 'Kotlin')
    d2 = Developer('Tania', 3000, 'Cobol')
    m1 = Manager('Bittu', 8000, 'IT')

    d1.show_info()
    d1.write_code()

    d2.show_info()
    d2.write_code()

    m1.show_info()
    m1.add_reportee(d1)
    m1.add_reportee(d2)
    m1.conduct_meeting()

    d2.give_raise(10)
```

**Output:**

```

 Name: Anuradha, Salary: $5000
 Anuradha is writing code in Kotlin

 Name: Tania, Salary: $3000
 Tania is writing code in Cobol

 Name: Bittu, Salary: $8000
 Anuradha is added to Bittu's team.
 Tania is added to Bittu's team.
 Bittu is conducting meetings for IT department.
 New Salary for Tania: 3300.0

```

### 1.2 Multiple Inheritance

Multiple inheritance allows a class to inherit from more than one parent class.

**Realistic Problem: A Hybrid Device**

A `SmartPhone` can be seen as a device that has the capabilities of both a `Phone` (making calls) and a `Computer` (running applications).

```python
# Multiple Inheritance: A class inherits attributes and methods
 # from multiple base/parent classes.

 # A Smartphone is a device that has the capabilities of both a traditional phone for calling
 # and a computer for running applications.

 class Phone:
     def make_calls(self, number):
         print(f'Calling to {number} ...')

     def send_message(self, number, message):
         print(f'Message send to {number}: \n{message}')

 class Computer:
     def run_application(self, app):
         print(f'Running Application - {app}')

     def connect_wifi(self):
         print(f'Connected to Wi-Fi.')

 class SmartPhone(Phone, Computer):
     def __init__(self, brand, model):
        self.brand = brand
        self.model = model

     def show(self):
         print(f'\nSmartphone Brand: {self.brand} Model: {self.model}')


 if __name__ == '__main__':
     my_smartphone = SmartPhone('Iphone', '13 Pro')

     my_smartphone.show()
     my_smartphone.connect_wifi()
     my_smartphone.run_application('YouTube')
     my_smartphone.make_calls('913-003-8722')
     my_smartphone.send_message('612-987-2345', 'I love you!')

```

**Output:**

```
Smartphone Brand: Iphone Model: 13 Pro
Connected to Wi-Fi.
Running Application - YouTube
Calling to 913-003-8722 ...
Message send to 612-987-2345:
I love you!
```

## 2\. Polymorphism and Method Overriding

**Polymorphism** means "many forms." It allows different objects to respond to the same method call in their own specific way. It means a single function or method name can have different implementations depending on the object it's called on.

Python achieve the polymorphism through **Method Overriding**. It's when a subclass provides a specific implementation of a method that is already defined in its parent class. When you call the method on an object of the subclass, Python executes the subclass's version instead of the parent class's version.

**Realistic Problem: Calculating Area of Different Geometric Shapes**

A program needs to calculate the area of various shapes. While the concept of "area" is the same, the calculation formula is different for a rectangle and a circle.

```python
# Polymorphism: It means "many forms". It allows objects of different classes to be
# treated as objects of a common superclass. It means a single function or method name can
# have different implementations depending on the object it's called on.

# Method overriding is the primary mechanism for achieving polymorphism in Python.
# It's when a subclass provides a specific implementation of a method
# that is already defined in its parent class.
# When you call the method on an object of the subclass,
# Python executes the subclass's version instead of the parent class's version.

from math import pi

class Shape:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def area(self):
        raise NotImplementedError('The child class has to implement the method.')

class Rectangle(Shape):
    def __init__(self, name, width, height):
        super().__init__(name)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, name, radius):
        super().__init__(name)
        self.radius = radius

    def area(self):
        return pi * pow(self.radius, 2)

def calculate_area(shape):
    print(f'\nArea of the {shape.get_name()}: {shape.area():.2f}')

if __name__ == '__main__':
    r = Rectangle('Rectangle', 20, 5)
    c = Circle('Circle', 7)

    calculate_area(r)
    calculate_area(c)
```

**Output:**

```
Area of the Rectangle: 100.00

Area of the Circle: 153.94
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
# Encapsulation: Core OOP priciple that bundles data attributes and methods into a single unit
# called class. Python does not use strict public, protected and private members, instead, it
# uses naming convension to denote those attribute.

# public - Does not start with underscore (_). This can be accessed ourside the class,
# using object.
# protected - starts with a underscore (_). This can be accessed in class and subclass only.
# private - starts with double underscore (__). Python's interpreter automatically performs
# a process called name mangling, where it changes the name of the member
# to _ClassName__private_member

class UserProfile:
    def __init__(self, username, password, token, credit_card_number):
        # Public member.
        self.username = username

        # Protected member.
        self._password = password

        # Private member.
        self.__access_token = token
        self.__credit_card_number = credit_card_number

    # This shows the public member.
    def show_user(self):
        print(f'\nUser Name: {self.username}')

    # This returns the protected member.
    def get_password_hash(self):
        return hash(self._password)

    def login(self, password_entered):
        if self._password == password_entered:
            print(f'\nLogin successful. You can use access token - {self.__access_token}')
        else:
            print(f'\nPlease login with correct creadentials.')

if __name__ == '__main__':

    user1 = UserProfile('bittu@email.com', 'my_secret_pass', 'abc-1234', '8876-2234-1123')

    user1.show_user()
    user1.get_password_hash()
    user1.login('Wrong_password')
    user1.login('my_secret_pass')

    try:
        print(f'Credit Card No.: {user1.__credit_card_number}')
    except AttributeError as e:
        print(f'\nPrivate member access error! {e}')

    # Bad convension.
    print(f'Credit Card No.: {user1._UserProfile__credit_card_number}')
```

**Output:**

```
User Name: bittu@email.com

Please login with correct creadentials.

Login successful. You can use access token - abc-1234

Private member access error! 'UserProfile' object has no attribute '__credit_card_number'
Credit Card No.: 8876-2234-1123
```

## 4\. Abstract Classes and Interfaces (using `abc` module)

**Abstruct Base Class**

-   Abstruct base class is the blue print of the other subclass.
-   Abstruct base class cannot be instantiated, i.e., the object of the abstruct class cannot be created.
-   Abstruct class can only be inherited to other subclasses.

**Abstruct Method**

-   Abstruct method must be overriden in the subclass.
-   It shares common blue print of the methods in the subclass.

**Implementation in Python**

-   In Python, abstruct base class and abstruct methods are implemented through `abc` module.
-   In `abc` module, the `ABC` class is used to define abstruct class.
-   In `abc` module, the `@abstructmethod` decorator is used to define abstruct method.

**Realistic Problem: Defining a Database Connector Interface**

A software application needs to connect to different types of databases (MySQL, PostgreSQL). We can create an abstract base class `DatabaseConnector` to ensure that all specific connectors have the same essential methods, such as `connect()`, `disconnect()`, and `execute_query()`.

```python
# Abstruct Base Class and Abstruct Method.

# -   Abstruct base class is the blue print of the other subclass.
# -   Abstruct base class cannot be instantiated, i.e., the object of the abstruct
#     class cannot be created.
# -   Abstruct class can only be inherited to other subclasses.
# -   Abstruct method must be overriden in the subclass.
# -   It shares common blue print of the methods in the subclass.

# Implementation in Python

# -   In Python, abstruct base class and abstruct methods are implemented through `abc` module.
# -   In `abc` module, the `ABC` class is used to define abstruct class.
# -   In `abc` module, the `@abstructmethod` decorator is used to define abstruct method.

from abc import ABC, abstractmethod

class DataBaseConnector(ABC):

    @abstractmethod
    def connect(self):
        pass

    @abstractmethod
    def disconnect(self):
        pass

    @abstractmethod
    def execute(self, query):
        pass

class MySQLConnector(DataBaseConnector):

    def connect(self):
        print(f'\nConnected to MySQL Database...')

    def disconnect(self):
        print(f'Disconnected from MySQL Database.')

    def execute(self, query):
        print(f'Executing MySQL query - {query}')
        return 'Result from MySQL'

class ProsgreSQLConnector(DataBaseConnector):

    def connect(self):
        print(f'\nConnected to ProsgreSQL Database...')

    def disconnect(self):
        print(f'Disconnected from ProsgreSQL Database.')

    def execute(self, query):
        print(f'Executing ProsgreSQL query - {query}')
        return 'Result from ProsgreSQL'

def run_db_operation(connector):
    connector.connect()
    result = connector.execute('SELECT * FROM user;')
    print(f'Received: {result}')
    connector.disconnect()

if __name__ == '__main__':
    mysql = MySQLConnector()
    postgresql = ProsgreSQLConnector()

    run_db_operation(mysql)
    run_db_operation(postgresql)
```

**Output:**

```
Connected to MySQL Database...
Executing MySQL query - SELECT * FROM user;
Received: Result from MySQL
Disconnected from MySQL Database.

Connected to ProsgreSQL Database...
Executing ProsgreSQL query - SELECT * FROM user;
Received: Result from ProsgreSQL
Disconnected from ProsgreSQL Database.
```

## 5\. Magic Methods (Dunder Methods)

Magic methods, also known as "dunder methods," are special methods in Python that are automatically invoked by Python for certain operations. They allow you to define how objects of your class behave with built-in functions and operators.

**Realistic Problem: A Custom BlogPost Class**

We want a `BlogPost` class that behaves naturally with built-in functions like `len()` and operators like `+` for concatenation, and `==` for comparison.

```python
# Magic Methods (Dunder Methods) - automatically invokes by Python interpreter for certain operations.

# __str__() - invoked by print() or str() method.
# __repr__() - invoked by repr() method.
# __len__() - invoked by len() method.
# __add__() - invoked by + operator.
# __eq__() - invoked by == operator.

class BlogPost:
    def __init__(self, title, content):
        self._title = title
        self._content = content

    def __str__(self):
        return f'\nBlog: {self._title}'

    def __repr__(self):
        return f'BlogPost(title = {self._title}, content = {self._content})'

    def __len__(self):
        '''Returns the number of words in the content.'''
        return len(self._content.split())

    def __add__(self, blog):
        '''Returns the new blog post concatenating title and content of two blogposts.'''
        if isinstance(blog, BlogPost):
            new_title = self._title + blog._title
            new_content = self._content + blog._content
            return BlogPost(new_title, new_content)
        else:
            raise('ERROR: Not able to add object other than BlogPost type.')

    def __eq__(self, blog):
        '''Check title and content of two blogposts are same.'''
        if isinstance(blog, BlogPost):
            return self._title == blog._title and self._content == blog._content
        else:
            raise('ERROR: Not able to compare object other than BlogPost type.')


def main():
    blog1 = BlogPost('Functions in Python', 'Functions are used for code reusibility.')
    blog2 = BlogPost('Generators in Python', 'Generators in Python uses for memory efficiency.')
    blog3 = BlogPost('Generators in Python', 'Generators in Python uses for memory efficiency.')

    print(blog1)
    print(repr(blog1))
    print(f'Number of words in content - {len(blog1)}')
    print(blog2)
    print(repr(blog2))
    print(f'Number of words in content - {len(blog2)}')

    print('-' * 20)

    print(f'blog1 == blog2: {blog1 == blog2}')
    print(f'blog2 == blog3: {blog2 == blog3}')

    new_blog = blog1 + blog2
    print(new_blog)
    print(repr(new_blog))


if __name__ == '__main__':
    main()

```

**Output:**

```
Blog: Functions in Python
BlogPost(title = Functions in Python, content = Functions are used for code reusibility.)
Number of words in content - 6

Blog: Generators in Python
BlogPost(title = Generators in Python, content = Generators in Python uses for memory efficiency.)
Number of words in content - 7
--------------------
blog1 == blog2: False
blog2 == blog3: True

Blog: Functions in PythonGenerators in Python
BlogPost(title = Functions in PythonGenerators in Python, content = Functions are used for code reusibility.Generators in Python uses for memory efficiency.)
```
