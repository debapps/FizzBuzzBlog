---
title: "Notes on SQL Joins"
category: Database SQL
date: "2024-04-15"
author: Debaditya Bhar
synopsis: In this blog, we will discussed on several SQL joins those are applied several relational database management systems.
coverImg: /blog_images/sql-joins/cover.png
---

# Introduction

**SQL** is the most popular language of the relational database management systems (RDBMS) across the world. Several RDBMS packages like Oracle, DB2, MySQL, Microsoft SQL Servers, PostgreSQL etc. uses SQL as the primary language to interact with database. Relational database stores data in tabuler format where data is stored in rows and columns. Each row in the table represents the single entity (example: employee, customer or sales). Each column of the table represents the attribute of the entity (example: employee name of employee, customer address of customer etc.). There is **primary key** that is unique attribute of the table. The other attributes of the table are dependent of the primary key.

Sometime, one table is associated with other table(s) with common attribute(s)/column(s). Those common attibute(s)/column(s) value references the other table. It is called **foreign key**. Using foreign keys more than one tables are joined to get combined results.

In this article we will consider MySQL database. But the same knowledge can be applicable in any RDBMS packages.

# SQL Join

A **JOIN** clause is used to combine rows from two or more tables, based on a related column between them.

Let us consider a MySQL database called as **OFFICE_DB**. It has following three tables:

1. **employee**

-   **emp_id** is the primary key.
-   **dept_id** is the foreign key that references the department table.
-   **project_id** is the foreign key that references the project table.

![Employee table](/blog_images/sql-joins/emp_table.png)
_Employee Table_

2. **department**

-   **dept_id** is the primary key.

![Department table](/blog_images/sql-joins/dept_table.png)
_Department Table_

3. **project**

-   **project_id** is the primary key.

![Project table](/blog_images/sql-joins/project_table.png)
_Project Table_

Now, we can join the employee and department tables using join clause as follows:

```
-- Get all the employee name, salary and their corresponding department names.
select e.emp_name,
       e.emp_salary,
	   d.dept_name
  from employee e
inner join department d
on e.dept_id = d.dept_id;
```

The result should looks like:

![Join Query 1](/blog_images/sql-joins/Join-Query-1.png)
_Join Query 1_

SQL Joins can be several types as follows:

-   Inner Join
-   Outer Joins
    -   Left Outer Join / Left Join
    -   Right Outer Join / Right Join
    -   Full Outer Join / Full Join
-   Self Join

Now, we will see each one one by one.

## Inner Join

Inner join returns records those are matching in both tables.

Please share your feedback, suggestion and correction to me at – bhar.debaditya@gmail.com
