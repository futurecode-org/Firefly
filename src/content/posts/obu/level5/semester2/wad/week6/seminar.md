---
title: "Web Application Development Practical6: Further Flask"
published: 2026-04-15
# updated: 
description: "Practical Session 6: Templates and further Flask"
image: ./143565293.png
tags: [Web, Flask]
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

> [!TIP] Tip
> 关于开发环境配置的方法，请参阅[第5周研讨会笔记](/posts/obu/level5/semester2/wad/week5/seminar/)

# Practical Session 6: Templates and further Flask

1. Download the example “todo list” web application from student website and run it on the Flask development server.

2. Use the app to see what it does, and read through the `.py` ﬁles and the template contents to learn how it works.

3. Modify the HTML template ﬁles to change the name of the application from “My very unreliable to-do list” to something else.

4. Modify the HTML and CSS ﬁles to place the “add a new task” control and button into a box with a light green background.

5. Modify the Python script and the HTML template so that when a task is added, a message appears between the header and the list of tasks giving the name of the task that was added (eg, “Buy the Milk was added.”)
    - Tip: create a new template parameter for the added task name. Modify the template with an if condition to display this parameter if it is present. Then, pass the added task name as a parameter to `render_template` when called from the add route.

6. Modify the Python script and the HTML template to do the same for deleted/completed tasks.

7. Add JavaScript to the HTML page so that when the checkbox to mark a task complete is ticked, the text of the task appears crossed out (with CSS style property `text-decoration: line-through` )

8. Create a list of completed tasks, which should start empty and should be displayed below the “Add task” box on the page. When a task is marked completed and the update button is pressed, the completed tasks should be moved to the top of the completed tasks list instead of being deleted.
 
9. Add a button allowing the user to clear the completed task list.

10. Modify the code so that when a task is moved to the completed tasks list, the date and time is also appended to it. (You can get the date and time in Python using `date.today()`. In a real web app you would need to also consider the time zone that the user is in, and that they may be in a different time zone to the server, but you do not need to worry about that here.)

11. Modify the code so that if the user clicks to update deleted/completed tasks with more than one task selected, they are first asked if they are sure they want to complete all of those tasks. This request should come from the server, not from a JavaScript script. (You will need a new template.)

## Reference Answer

```python
# app.py
from flask import Flask, session, request, render_template, redirect, url_for
from datetime import datetime

app = Flask(__name__)
app.secret_key = b'notAGoodSecretKey'
if __name__ == '__main__':
    app.config["ENV"] = "development"
    app.run(debug=True, host='0.0.0.0', port=4999)

# Root of the app. We should do at least something here.
@app.route('/')
def view():
    # If the user already has a to-do list, draw it.
    if "todoes" in session:
        # Ensure completed list exists in session (starts empty)
        completed = session.get("completed", [])
        return render_template("todos.html", todos=session["todoes"], completedTasks=completed)
    else:
        # Else, display the new user blank page.
        completed = session.get("completed", [])
        return render_template("new.html", completedTasks=completed)


# Add task
# Remember, imput from the web is RADIOACTIVE. Validate it like crazy. Then
# validate it some more.
@app.route('/add', methods=["POST"])
def add():
    # Just in case a mangled form submission was made
    addedTask = None
    if "newTask" in request.form:
        addedTask = request.form["newTask"].strip()
        # If the user already has todoes, add it..
        if "todoes" in session:
            # We have to do this this way because Flask doesn't properly
            # detect in place updates to members of the session dict
            todoes = session["todoes"]
            todoes.append(request.form["newTask"])
            session["todoes"] = todoes
        else:
            # Make the added task their first todo
            session["todoes"] = [request.form["newTask"]]

    # If the form was mangled and the user had no todoes before,
    # todoes might still be missing
    # If the form was mangled and the user had no todoes before,
    # todoes might still be missing
    completed = session.get("completed", [])
    if "todoes" not in session:
        return render_template("new.html", completedTasks=completed)
    else:
        return render_template("todos.html", todos=session["todoes"], addedTask=addedTask, completedTasks=completed)

# Route for completing a task
@app.route('/complete', methods=["POST"])
def complete():
    # If somehow this got accessed when todoes is blank, bail out.
    if "todoes" not in session:
        return render_template("new.html")

    # Collect the task numbers to delete by looping through form keys.
    delTaskNums = []
    completedTasks = []
    for key in request.form:
       if key.startswith("complete_"):
           # C O M P L E T E _ is 9 characters, so the rest of the key after
           # that should be the task index
           taskNumString = key[9:]
           # As usual, since web input is radioactive we have to allow for
           # it not being a number or being an invalid number before we
           # try to use it
           try:
               realTaskNum = int(taskNumString)
               if realTaskNum >= 0:
                   if realTaskNum < len(session["todoes"]):
                       delTaskNums.append(realTaskNum)
           except ValueError:
               pass
    # If more than one task is selected and the user has not confirmed yet,
    # render a server-side confirmation page listing the tasks and asking
    # whether to proceed. The confirmation form will POST back to this
    # same route with the same complete_... fields plus a 'confirm' flag.
    if len(delTaskNums) > 1 and 'confirm' not in request.form:
        # Store the pending selection server-side and redirect to a GET
        # confirmation page. This avoids accidental completion on cancel
        # and prevents relying on hidden fields in the browser.
        session['pending_complete'] = delTaskNums
        return redirect(url_for('confirm_complete_view'))

    # If the user has confirmed via the confirmation page, we may have a
    # pending list stored in the session. Use that instead of relying on
    # request.form values (which may be absent on the confirm POST).
    if 'confirm' in request.form and 'pending_complete' in session:
        delTaskNums = session.pop('pending_complete')
    # Delete the todoes in reverse order so that the indices of later entries
    # aren't changed by the deletion of earlier entries
    delTaskNums.sort()
    todoes = session["todoes"]
    # Collect the completed tasks before deleting them so that we can move them
    # into the completed list instead of deleting them
    for taskIndex in delTaskNums:
        try:
            # Append the task text together with the current date/time
            task_text = todoes[taskIndex]
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            completedTasks.append(f"{task_text} (completed at {timestamp})")
        except IndexError:
            pass

    # Remove tasks from todoes by deleting in reverse order
    for delTask in sorted(delTaskNums, reverse=True):
        try:
            del todoes[delTask]
        except IndexError:
            pass

    session["todoes"] = todoes

    # Prepend the newly completed tasks to the top of the completed list
    existing_completed = session.get("completed", [])
    # Place the newly completed tasks (in the same relative order) at the front
    session["completed"] = completedTasks + existing_completed

    return render_template("todos.html", todos=session["todoes"], completedTasks=session["completed"], completedTasksRecent=completedTasks)


# Route for clearing the completed tasks list
@app.route('/clear_completed', methods=["POST"])
def clear_completed():
    # Reset the completed tasks list in session to an empty list
    session['completed'] = []
    # Use PRG pattern: redirect back to the main view so the browser shows the updated state
    return redirect(url_for('view'))


# GET confirmation page for completing multiple tasks
@app.route('/confirm_complete', methods=['GET'])
def confirm_complete_view():
    pending = session.get('pending_complete')
    if not pending:
        # Nothing to confirm; go back to main view
        return redirect(url_for('view'))
    todoes = session.get('todoes', [])
    tasks_to_confirm = []
    for idx in pending:
        try:
            tasks_to_confirm.append((idx, todoes[idx]))
        except IndexError:
            pass
    return render_template('confirm_complete.html', tasks=tasks_to_confirm)


# Cancel the confirmation (clear pending selection and go back)
@app.route('/cancel_confirm', methods=['POST'])
def cancel_confirm():
    session.pop('pending_complete', None)
    return redirect(url_for('view'))
```

```html
<!--templates/new.html-->
<!doctype html>
<html>
    <head>
        <title>Welcome!</title>
        <link rel="stylesheet" type="text/css" href="static/style.css">
    </head>

    <body>
        <h1>My to-do list-Empty</h1>
    </body>

    <p>This is a bad to-do list app because it stores the list in a cookie, which gets destroyed easily. Still, here we go.</p>

    <div class="addBox">
        <form action="/add" method="POST">
            Add your first task: <input name="newTask" type="text" autofocus></input> <button type="submit">Add!</button>
        </form>
    </div>

    <div class="completedBox">
        <h2>Completed tasks</h2>
        {% if completedTasks %}
            <ul>
            {% for task in completedTasks %}
                <li>{{ task }}</li>
            {% endfor %}
            </ul>
            <form action="/clear_completed" method="POST" style="margin-top:8px;">
                <button type="submit">Clear completed</button>
            </form>
        {% else %}
            <p>No completed tasks yet.</p>
        {% endif %}
    </div>
</html>
```

```html
<!--templates/todos.html-->
<!doctype html>
<html>
    <head>
        <title>Welcome!</title>
        <link rel="stylesheet" type="text/css" href="static/style.css">
    </head>

    <body>
        <h1>My to-do list</h1>
    </body>

    {% if addedTask %}
        <p>{{ addedTask }} was added.</p>
    {% endif %}
    {# Completed tasks are now shown below the Add box instead of here #}
    <form action="/complete" method="POST">
        <table>
        {% for todo in todos %}
            <tr>
                <td id="task_{{ loop.index0 }}">{{ todo }}</td>
                <td class="checkbox">
                    <input name="complete_{{loop.index0}}" type="checkbox" onchange="toggleTask({{ loop.index0 }})"></input>
                </td>
            </tr>
        {% endfor %}
        </table>
        <button type="submit">Mark as completed</button>
    </form>

    <div class="addBox">
        <form action="/add" method="POST">
            Add another task: <input name="newTask" type="text" autofocus></input>
            <button type="submit">Add!</button>
        </form>
    </div>

    <div class="completedBox">
        <h2>Completed tasks</h2>
        {% if completedTasks %}
            <ul>
            {% for task in completedTasks %}
                <li>{{ task }}</li>
            {% endfor %}
            </ul>
            <!-- Button to clear all completed tasks -->
            <form action="/clear_completed" method="POST" style="margin-top:8px;">
                <button type="submit">Clear completed</button>
            </form>
        {% else %}
            <p>No completed tasks yet.</p>
        {% endif %}
    </div>

    <script>
        function toggleTask(taskId) {
            let taskElement = document.getElementById("task_" + taskId);
            taskElement.classList.toggle('crossed-out');
        }
        // Try "loop.index" and "loop.index0" here, observe the diffrences
        {% for todo in todos %}
            console.log("Task {{ loop.index0 }}: {{ todo }}");
        {% endfor %}
    </script>
</html>
```

```html
<!--templates/confirm_complete.html-->
<!doctype html>
<html>
    <head>
        <title>Confirm completing tasks</title>
        <link rel="stylesheet" type="text/css" href="static/style.css">
    </head>
    <body>
        <h1>Confirm completing tasks</h1>
        <p>You have selected multiple tasks to complete. Are you sure you want to mark the following tasks as completed?</p>
        <ul>
        {% for idx, text in tasks %}
            <li>{{ text }}</li>
        {% endfor %}
        </ul>

        <form action="/complete" method="POST" style="display:inline-block; margin-right:8px;">
            {# Only send a confirm flag; server will use the pending list stored in session #}
            <input type="hidden" name="confirm" value="1"></input>
            <button type="submit">Confirm</button>
        </form>
        <form action="/cancel_confirm" method="POST" style="display:inline-block;">
            <button type="submit">Cancel</button>
        </form>
    </body>
</html>
```

```css
/*static/style.css*/
h1 {  
  font-family: sans-serif;  
  text-align: center;  
  border: 2px solid black;  
}  
  
table {  
  font-family: sans-serif;  
  border: 2px solid black;  
  border-collapse: collapse;  
  width: 70%;  
    
}  
  
table td {  
  border: 2px solid black;  
}  
  
table td.checkbox {  
  width:40px;   
}  
  
  
table tr:nth-child(odd) {  
  background: LightSkyBlue;  
}  
  
table tr:nth-child(even) {  
  background: white;  
}  
  
.addBox {  
  border: 1px black solid;  
  background: greenyellow;  
  padding: 10px;  
}  
    
.crossed-out {  
  text-decoration: line-through;  
}
```
