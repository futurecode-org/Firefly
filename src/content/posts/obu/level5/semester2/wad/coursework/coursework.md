---
title: "Web Application Development: Coursework"
published: 2026-03-09
# updated: 
description: Your task is to develop and test a full-stack web-based Plant and Garden Care Tracker to help gardeners manage their plant collections.
image: ./110445136_p0.png
tags: [Frontend, Web, Coursework]
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

# Web Application Development: Coursework

## Allocation

This coursework is worth 100% of the marks for module CHC5054.

You will also need skills from the following modules:

- **CHC4008** (Python Programming)
- **CHC4007** (Design reporting)
- **CHC5049** (Database design)
- **CHC5226** (Secure implementation)

## Specification

Your task is to develop and test a full-stack web-based Plant and Garden Care Tracker to help gardeners manage their plant collections. The application allows:

- **Gardeners** to log, track, and schedule care for their plants.
- **Visitors** to browse public plants for inspiration and learning.
- **Administrators** to oversee community content and system operations.

The primary goal is to simplify plant care management and foster a gardening community while ensuring an intuitive experience for all users. The following is the basic functionality to implement:

### *Commun pages:*

- **404/Error Pages:** Contains "Page not found" message and a navigation back to homepage.

### *Guest (Unauthenticated Visitors):*

- **Home Page:** offers an overview of statistics, such as the number of volunteer registrations, and charity events.
- **Public Plant Gallery:** Grid view of plants marked as public by gardeners, with filtering by plant type, sunlight, and difficulty, contains a search box, click on any plant to view details.
- **Plant Detail View:** Read-only view of a single public plant showing basic info, photos, and general care requirements.
- **Login/Registration Pages:** Forms for user authentication and account creation.
    - **Login:** Username, Password, submit button, Register here button, form validation messages.
    - **Registration:** Username, Email, password fields, password confirmation, Submit button

### *Admin:*

- **Login:** A form contains Username, Password, submit button.
- **Dashboard:** for system overview and quick controls it contains: total users, total plants, Quick links to all admin sections.
- **User Management Page:** a list of all users with controls to enable/disable and delete accounts, containing the table of all users (username, email, join date, status) and Enable/Disable buttons for each user

### *Gardener:*

- **Dashboard:** Contain Welcome with username, Quick-add plant button and recent activities for own plants.
- **My Plants Page:** Displays Complete list of the gardener's plants in a table with name, photo, health status, next watering, action buttons: Water, Edit, View Details. An "Add New Plant" button
- **Add/Edit Plant Page:** provides a form for creating new plant entries or editing existing ones with all care specifications.
    - Name, Species, Type (indoor/outdoor)
    - Care settings: Water frequency, Sunlight (Full Sun, Partial Sun, Full Shade, Indirect Light, Low Light), Difficulty (Easy, Moderate, Challenging)
    - Photo upload
    - Privacy toggle (Public/Private)
    - Save/Cancel buttons
- **Plant Detail Page:** Detailed view of a gardener's own plant showing full history, and activity log, the details are:
    - Full plant info (editable if the owner is the gardener himself)
    - "Mark as Watered" quick button
    - Care history timeline with date type and date
    - "Add Care Activity" form containing: type, notes, date
    - Photo gallery for this plant
    - Health status selector

The marks available for each of these areas of functionality are divided based on the sections of the coursework, as described below. Simply writing code to meet the specification by any means will not earn full marks.

## Restrictions

Your web site must run in a Python virtual environment built by running the following commands from a Command Prompt in a suitable working directory:

```console
pip install virtualenv
virtualenv webtest
cd webtest
scripts\activate
pip install flask mysql-connector-python //If you are using MySQL
```

It is recommended that you also use this virtual environment for development. Regardless, you must test your site within the virtual environment before submitting it. This is the virtual environment in which your code will be tested by the assessor. If it does not work, marks will not be awarded.

In addition to the libraries in the above virtual environment, you may use the `jQuery` library for JavaScript, but **may not use any other frameworks or libraries**. This means that you may not use libraries that are “Flask extensions” if they are not installed *with* Flask.

(Please do not send e-mails asking if you can use other extension libraries; the answer is no. The purpose of the coursework is to understand how JavaScript and server interaction work at the lowest level possible, not in terms of abstractions created by higher level code.)

Your website must be built using HTML 5 and ECMAscript 6 on the client, and Flask, SQLite(recommended) or MySQL and Python 3 on the server.

## Plagiarism

This is individual work. You must not copy or share code with other students. Do not copy code from online sources, answers, tutorials or existing open-source software. Copied code will result in the plagiarism process being invoked and you may be asked to attend an online meeting to verify that your understanding of your code is consistent with you having written it.

**You must be very careful with the use of online tutorials on this module.** Your primary learning source should be the module notes and the lecturer and tutorial staff. There are a very large number of online tutorials on the topic of web development, but many are incorrect, out of-date, or badly written.

**Sites which present code and then explain it are often cheating sites, not tutorials.**  
Retroactively explaining large amounts of code is not an effective learning method, but is often used as a trick to “justify” presenting code actually intended to be cut and pasted. Often the explanations are extremely poor or even incorrect and will confuse your understanding further.

**Use of Pre-Written Comments for Explanation is Not Allowed.**   
Students are not permitted to rely on reading large pre-written comments (in English or Chinese) to explain their code. Explanations must be given in the student's **own words**, demonstrating a **genuine understanding** of the code’s functionality. Using comments in this way will not be accepted and **will negatively affect the evaluation**.

**AI-Generated Text in Reports:**  
AI-generated content in the report will result in **a penalty** to the student's marks and may be considered **academic misconduct**. Students are expected to produce original, self-written work.

## Submission

Submission is in three stages:
- A preliminary report
- The actual website
- A final report

Due Date: 
- Preliminary report: (Week 4 - Friday – Date to be announced)
- Website: (Week 10 beginning – Date to be announced)
- Final report: (Week 12 – Friday – Date to be announced)

The preliminary report is worth 20% of each component of the marks from the Specification section. The implementation is worth 60% , and the final report is also worth 20% .

Code implemented in the final submission but not reported on in the actual report can still score full marks on the other two components, but you will lose out on potential feedback on your report.

The final report may refer to sections of code that were not implemented, but it will likely not be possible to write the report well without having implemented those sections.

## Preliminary Report

The preliminary report should cover the design and structure of implementation you intend to use to produce the selected functionality. This should include:
- ER diagram for database used in the website
- the division of functionality between client and server (in this context the “client” means the web browser and JavaScript code, not the human user);
- wireframes representing the user interface;
- an overview of the intended implementations at client and server.
- For Wireframes you can use: Wireframesketcher ([wireframesketcher.com](https://wireframesketcher.com)) or Diagrams.net ([www.drawio.com](http://www.drawio.com/))

## Website

Students are expected to start developing the website from the first week of the semester, the website should be uploaded as a `.zip` file to the student website by (Date to be announced).

To prepare your .ZIP file, do the following steps:
1. Prepare a fresh virtual environment via the commands described in the “restrictions” section.
2. Copy your website files into the virtual environment, activate it, and ensure that your website works inside it.
3. When using MySQL use the mysqldump utility to output your database specification into a file in the virtual environment. (The mysqldump.exe file is in the bin directory of the MySQL Server install path.)
4. Delete the directories Include, Lib, Scripts, and tcl.
5. ZIP the virtual environment directory.

The 60% of the section mark for the website is divided as follows:
- The basic functionalities: 30% .
- Quality of user interface design: 10% .
- Quality of back-end architecture: 20%

Remember to break down processes in detail to allow these to be described. “The user can click to login” is not sufficient detail - the process of logging in is a multi-stage one that will likely involve several communications between the client and server, and use of the database.

It is not necessary to include source code in the report. The report will be your main opportunity to gather feedback before the submission (although you may also ask for help in practical sessions) so make sure to provide detail on any decisions you are not sure about, so that the assessor can provide useful feedback.

The preliminary report should be submitted on the student website by (**Date to be announced**). You may have already started developing your implementation before this submission.

You need to use only Flask default Libraries that are: **Werkzeug, Jinja2, MarkupSafe, ItsDangerous, Click**. You cannot use any external library such as: flask-sqlalchemy, flaskmongoengine, flask-login, flask-jwt-extended, flask-wtf, flask-restful, flask-marshmallow, flask-admin, flask-mail, flask-migrate, flask-security, flask-cors, flask-babel, flask-caching, flask-socketio…

You can use regular JavaScript or jQuery if you want but cannot use any other JavaScript Frameworks such as: **React, Vue, Angular...**

For Database make sure you are using SQLite or MySQL (with their respective python libraries sqlite3 or sql.connector only, pysql or flask-sqlalchemy are not allowed)

## Final Report

The final report should be at standard font size, and should address the following issues:

**Describe the accessibility measures added to your site** and who they are intended for. The measures must be documented in WCAG as correct ways to increase accessibility. You could also describe any additional accessibility features that might be added with more development time. Note that the absence of inaccessible features that could never be relevant to the site (such as video) cannot be listed here and is not worth any marks. (2.5%)

**Describe how you would adapt your site for mobile phone users.** You do not have to write actual changes to the CSS, HTML, or JavaScript, but you should describe the changes you would make and the means by which they would adapt the site. It is not acceptable to write that you would replace your site with an app, (5%)

**Describe how you have tested your site.** This should include a formal test plan and results as covered on previous programming and software engineering, and any fixes you made. This should include testing both the functionality and accessibility of your site. You should also test that your site works when multiple sessions interact with it at once, by using multiple browsers at once on your computer. (10%) Note: if you present your test plan and results in a table, lines and extra space taken by that table do not count against the limit of 6 sides of A4.

**Choose one of the major JavaScript frameworks** such as ReactJS, Bootstrap or Angular, and research it only. Describe how you would modify your site to work within this framework and what difference it would make to implementation of your site. Note that your description must be specific to your site - a general description of the framework will score no marks. (2.5%)

The final report should be uploaded to Student Website by (**Date to be announced**).

## Overall Mark Scheme

<table>
	<tr>
		<td>Initial Report</td>
		<td>20%</td>
	</tr>
	<tr>
		<td>General Implementation</td>
		<td>30%</td>
	</tr>	<tr>
		<td>User Interface</td>
		<td>10%</td>
	</tr>	<tr>
		<td>Back-End Implementation</td>
		<td>20%</td>
	</tr>	<tr>
		<td>Final Report</td>
		<td>20%</td>
	</tr>	<tr>
		<td>Component total</td>
		<td>100%</td>
	</tr>
</table>

## Tips

### Using the lecture material

The lecture material and practical’s do not directly walk you through the coursework, but it can be completed by applying the skills they teach.

- **Session 7** will help you think about designing your database. Think about what needs to be stored about each one, how they relate to each other, and what data needs to be stored about the relationships.
- Think about database **transactions** - what is the list of actions that the user can take that alter the database? How can you write each one as a query? Think back to **CHC4007** and consideration of use cases.
- What input does each transaction need, and how can you get that from the user over the web? **Sessions 1-4** will help here.
- How will you send the input to the server? First, in what form? How can you make it easy for your program to work with but also secure? Again, see **sessions 1-4**. Second, how will you actually send it over the web? See **sessions 5 and 8** for your options.
- Can you now write the Python program for the transaction and assign it to be a Flask route? See **sessions 5 and 6** as well as general Python programming from **CHC4007**.
- How will you return the response to the user? Will you use a web template (**session 6**) or maybe a JavaScript program that reads from the server using AJAX (session 9)?
- Is the transaction “stateful” - meaning that it changes the treatment of other transactions after it, such as logging in? If so, what do you need to store in the Flask session variable (**session 6**) to allow this?

### Previous Common Errors

Here are some previous mistakes frequently made by students on Web Development coursework. Please be careful not to repeat them!

#### Preliminary report

- Repeating what is stated in the specification as if it was your decision rather than what you have been told to do.
- Telling the story of how a function will be implemented rather than how the implementation will work.
- Failing to break down tasks into client and server components or attributing all of a multi-stage task to one of these; for example, “the student logs into the site” which actually requires multiple steps and cannot be purely done on the client.
- Describing what is **stored** on the client or server, but not what functionality they have.
- Over-emphasising the choice of technologies, rather than how they are used.
- Writing many-to-one relationships with the foreign key on the wrong side.
- Trying to store foreign keys to two different tables in the same field without distinguishing them.
- Not showing data table descriptions, only sample data that does not formally indicate structure.
- Omitting field types from specifications.
- Stating that the “user will be logged in” without indicating what method is used to signal this.
- Large amount of dead space on UI designs.
- Showing UI prototypes instead of wireframes.
- Where search is implemented, not providing a wireframe for the search results page.
- Where AJAX is used, **not providing** a structure for the **JSON messages** that will be used.

#### Web site

- Using unauthorized libraries.
- Failing to implement all basic functionality.
- Functions on the server that require the user to be logged in don’t actually check that the user is logged in.
- Storing passwords in cleartext in the database.
- Making the database or on-screen fields for a comment text too short for messages to be entered.
- Duplicated data in the database, violating normal form.
- Missing or redundant foreign keys in tables.
- Search loads entire table and searches it in Python rather than using SQL database search.
- Can only search exact, not partial, matches.
- Students must be able to explain the provided code clearly during the demonstration session. Failure to do so will result in no marks being awarded for the functionality, as it raises doubts about the student's ownership and understanding of the code.

## Final Report

- Listing the general principles of mobile-friendliness, framework features, etc. but not how they would be used on this particular site.
- Testing complete functionality paths instead of individual interactions. While testing paths is a good idea, remember that users may not follow them; web requests can be sent in any order as a result of shared links, the back button, etc.
- Not testing edge, exceptional or error cases.
