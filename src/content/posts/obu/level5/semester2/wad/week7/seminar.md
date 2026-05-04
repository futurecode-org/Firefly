---
title: "Web Application Development Practical7: MySQL"
published: 2026-04-22
# updated: 
description: "Practical session 7: MySQL"
image: ./140525169.png
tags: [Web, SQL]
category: Web Application Development
draft: false
pinned: false
# slug: 
lang: en
author: 🐦‍🔥不死鸟Anka
comment: true
# licenseName: 
# licenseUrl: 
# sourceLink: 
---

# Practical session 7: MySQL

To do this practical you will need to have **MySQL** installed on your computer.

**Warning: MySQL is a server and is not very tolerant of errors. Please make sure read and follow all parts of every instruction carefully and do not skip over any.**

If you are using Windows, download the MySQL Installer from [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/) . If you are using MacOS, download MySQL Community Server from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/) . If you are using Linux, you can install MySQL through your Linux distribution’s package manager.

Install MySQL for “all users”, but not “as a service”. Do not install MySQL to run automatically when the computer is started, as you do not need it to do so and it will take up system resources. Make sure to note the directory in which MySQL is installed. You may also be asked to choose a password; make sure to remember it.

You will now need to set up MySQL. **Note: if you are using Linux you may need to refer to your Linux distribution’s documentation on how to set it up and run it in order to integrate correctly.**

## Setup Process

1. Open a Command Prompt or Terminal.

2. Add MySQL to your PATH by entering:
    - Windows: `set PATH=%PATH%;"C:\Program Files\MySQL\MySQL Server 8.0\bin"`
    - MacOS: `export PATH=$PATH:/usr/local/mysql/bin`

> If you installed MySQL in a diﬀerent directory, change the directory in the command as appropriate.

3. CD to a suitable work directory (your `Documents` directory will do) and create an empty folder for MySQL data: `md mysqldata` under Windows or `mkdir mysqldata` under MacOS.

4. CD into the folder you just created.

5. Run `mysqld --datadir=. --initialize --console` to set up a MySQL data store in that directory. You will be given a “Temporary password” - remember or copy it from the command line.

6. Start the server: `mysqld --datadir=. --standalone --console`. This will appear to freeze, but that’s OK; the server is running.

7. Start another command prompt, and repeat step 2 to ensure the MySQL utilities directory is on your path.

8. Since the default password was probably a random sequence of characters, Run `mysqladmin -u root -p password xyz`, replacing `xyz` with what you would like the password to be. When prompted, enter the default password you were given when you initialized the data store in step 5.

9. Create a database: `mysqladmin -u root -p create practical7`. Give the password you set in step 8. `practical7` is the name of the database which you can change if you want to.

10. It is ensure to do all work on a database using an admin user. Enter the MySQL interface as an admin by entering `mysql -u root -p` and typing the password from step 8.

11. Enter the following commands to create a user speciﬁc to the database you just created:

```sql
create user 'practical7'@'localhost' identified by 'rubbish';
use practical7;
grant all privileges on *.* to 'practical7'@'localhost';
flush privileges;
```

You can change the name of the user by changing `practical7` where it appears as part of `practical7@localhost` (the name after `use` must match the name of the database you created in step 9). You can change the new user’s password by changing `rubbish`.

12. Type `quit` to leave the MySQL console as admin.

From now on, to get to the MySQL console you will only need to perform steps 2, 4 and 6. If you decide to create a new database (for example, for your coursework) you will need to repeat steps 6 and 9-11. Do **not** repeat step 5 as this will wipe out everything in the database
 
(although MySQL will not normally allow you to do this if there is already data in the data directory)

**Important:** When you are ﬁnished using MySQL you must shut it down by running
`mysqladmin -u root -p shutdown` and entering your admin password (from step 8).

## Working with the database

1. Start the MySQL interface as your new user by entering `mysql -u practical7 -p` and entering the user password you set up in step 11 above (which will be `rubbish` if you used the command as written).

2. Select the database that you created during setup: `use practical7;`

3. Type the following command to create a table `wd_person`. You may type the command on multiple lines if it is more comfortable. Pressing **return** will not end the current command if you have not typed a semicolon.

```sql
create table wd_person (personID int auto_increment 
    primary key, name varchar(30) not null, dogID int);
```

5. Type the following command to add an example entry to the `wd_person` table:

```sql
insert into wd_person (personID, name, dogID) values 
    (null, "Robin Goodfellow", 1);
```

6. To view the added entry, type `select * from wd_person;`. Note that the number 1 was automatically inserted into `personID`, even though you specified `null` in the `insert` command, because the column was set `auto_increment` when you created the table.

Note: using `select * from...` is OK for debugging and interaction, but is a bad idea when writing Python code, because it means your code does not know what order and how many ﬁelds are returned.

7. Add another person to the `wd_person` table with the name “Matilda Whirligig” and `dogID` of 2. Leave `personID` as null so that `auto_increment` updates it for you. Aher adding them, run `select * from wd_person;` again to conﬁrm that the addition worked.
 
8. The MySQL command to change a value in an existing row is `update`. Enter `update wd_person set dogID=3 where personID=2;`. Then view the table again and check that the `dogID` of Matilda Whirligig is now 3.

Note: the `where` clause of the `update` command can specify several records if you wish, but this will cause the same update to be made to all of them. Thus, `update wd_person set dogID=3 where name="Matilda Whirligig";` is perfectly legal, but risks setting invalid data if more than one person in the database has that name. Usually, it should refer to a table’s primary key to ensure that only the correct record is updated.

9. Using `update`, change Robin Goodfellow’s `dogID` to 4.

10. Create a new table `wd_dog` with the following data dictionary:

| **Column Name** | **Type**                                                        |
| --------------- | --------------------------------------------------------------- |
| dogID           | Auto incremented 32-bit int, primary key                        |
| name            | Variable character length string, up to 40 characters, not null |
| age             | Unsigned 8 bit int                                              |

10. Insert an entry into the `wd_dog` table by entering `insert into wd_dog (dogID, name, age) values (3, "Toto", 2);`

11. We can now use the `dogID` ﬁeld to relate `wd_person` rows to `wd_dog` rules. Enter the following to see how this works:

```sql
select wd_person.name, wd_dog.name from wd_person 
    inner join wd_dog on wd_person.dogID = wd_dog.dogID;
```

12. Create another `select` query using `inner join` that displays the name of a person and the **age** of their dog.

13. Note that **Robin Goodfellow** does not appear in the list, because he has no related `wd_dog` row; his `dogID` entry is 4, but there is no corresponding row in `wd_dog` with `dogID` 4. The `inner join` command speciﬁes that only rows where records exist on both sides should be included in the result. Try retyping the command from question 11, but replace the words `inner join` with `left join`, which specifies that all records on the left hand side of the command should be included. See how the results differ. (Note that in real databases, `left join` is slow, and so should not be used if you can help it.)

14. Type `insert into wd_dog (dogID, name, age) values (4, "Prince", 1);`. Rerun the same command from step 11 (with `inner join` included) and notice that Robin now does appear, because we just created a matching `wd_dog` row for him.

15. You can delete a record from a table with the `delete` command. It works the same as the `update` command; you specify which record to delete with the `where` keyword. You can specify multiple records if you wish, but they will all be deleted. Enter `delete from wd_dog where name="Toto";`. Then try steps 11 and 13 again and notice how the results change.

16. Type `quit` to leave the `mysql` tool.

17. Copy and paste the following Python code into a `.py` file, changing the `connect` line appropriately:

```python
import mysql.connector
cnx = mysql.connector.connect(user='practical7', password='rubbish', host='127.0.0.1', database='practical7')
cursor = cnx.cursor()
query = "select name from wd_dog where dogID=%s;"
cursor.execute(query, (4,))
for name in cursor:
    print(name)
cnx.close()
```

18. Run this Python program (this is not a web-based program, so you can run it from your IDE). It should output the name of the `wd_dog` with `dogID` 4, ie, `Prince` .

(If you get an error that `mysql` is not found as a module, run `pip3 install mysql- connector-python` at a command prompt, after placing Python on your path.)

19. Modify the program so that it instead inputs the name of a person, and looks up their ID in the database.

In order to reduce load on the server, the MySQL cursor does not actually search for all the records matching your query at once. Instead, it searches one by one as they are needed by the `for` loop. That means that you cannot simply ask the cursor how many records were found (or even if any were found) because it does not know until the loop is finished. In order to give the user an error message if no record is found, you must use a flag to detect if the loop body executed or not.

20. At your command prompt, go to a working directory (**not** the MySQL data directory) and run: `mysqldump -u practical7 -p practical7 > p7dump.sql`. Enter the password you have used for the `practical7` user. This will not produce any output but will write a file `p7dump.sql` containing the database speciﬁcation and all data. This is how you will submit the database for your coursework.

21. Starting from the basic to-do list application from last week (you can re-download the `zip` file if you wish), modify the to-do list application so that it stores the todoes in a database rather than a cookie. You may assume that all to-dos are shared by all users of the application, so there is no need to associate to-dos with users or implemented logging in. You will need to do the following:

    - Use `mysql` again to create a table of todos. It only needs two columns: an ID and the text of the todo. The ID should be the primary key and auto-incrementing.
    - Write a function in the Python program that connects to the database and runs a `select` query that fetches the todo IDs and the todo texts. The function should use a `for` loop through the cursor to fetch all of the values and build them into a list, as pairs.
    - Modify the `todos.html` template so that instead of looping through a list of text todos, it loops through a list of pairs, displaying the text inside the `td` element and using the ID number (rather than the loop index) in the name of the checkbox.
    - Modify the Python program so that where ever the `todos.html` template is used, instead of using `session["todoes"]` as the parameter, your program calls the function you previously wrote to fetch the results from the database. At this point you should be able to test this by adding some sample todos to the database with the `mysql` interface first.
    - Modify the `/add` route so that it forms and runs an `INSERT INTO...` query using the `newTask` text from the form. Leave the ID column of the inserted values as `null` so that auto-increment ﬁlls it in for you.
    - Modify the `/complete` route so that it runs a series of `DELETE FROM...` queries based on the `complete_` boxes that were checked on the form. You do not need to worry about searching for the tasks, or deleting them in reverse order, as the SQL server will manage those for you.

> [!INFO] Notice
> Remember to shut down your MySQL server (`mysqladmin -u root -p shutdown`) when you’re finished!
