---
title: "Web Application Development Practical8: AJAX"
published: 2026-04-29
# updated: 
description: "Practical Session 8: AJAX"
image: ./141271769.jpg
tags: [Web, AJAX]
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

## Getting used to value closures

**The first section of this sheet is on getting used to value closures. Please make sure that you do the second section, on actual AJAX, as well.**

1. Copy and paste the following code which uses dynamically assigned event handlers.

```html
<html>
    <head>
        <script>
        "use strict";
        function one(event) {
            window.alert("One() is running");
            event.currentTarget.onclick = two;
        }

        function two(event) {
            window.alert("Two() is running");
        }

        function setup() {
            document.getElementById("button1").onclick = one;
            document.getElementById("button2").onclick = one;
        }

        </script>
    </head>

    <body onload="setup()">
        <button id="button1">The first button</button>
        <button id="button2">The second button</button>
    </body>
</html>
```

2. Load this file into a browser, and see how it works when the buttons are clicked. Note the use of `event.currentTarget` in `one` to identify the button that the user clicked on. This is only possible if the `event` value is passed through to the event handler function.

3. Add the following code to the function `two()` which makes use of a reference closure.

```javascript
let count = 0;
event.currentTarget.onclick = (event) => {
    count++;
    window.alert(count + " extra clicks.");
}
```

4. Load this file into a browser and see how it works when the buttons are clicked. Notice the following in particular:
    - Even though `count` is declared as a local variable in `two`, it continues to be accessible when the buttons are clicked even after `two` has finished running. This is because it is held in the closure created by the fat arrow declaration in `two`.
    - If you click on the two buttons repeatedly, the counters rise for each button independently without getting mixed up. This is because the `count` variable is still local to the particular run of `two` that created it. The closures are forcing the variable to continue existing, so effectively there are now two variables called `count` , which are isolated in different closures.

5. Replace `setup` with the following function which initializes the event handlers from an array:

```javascript
function setup() {
    let buttons = [
        {"id": "button1", "message": "Hello!"},
        {"id": "button2", "message": "Goodbye!"}
    ];
    let buttonId = 1029;
    for (let x=0; x<2; x++) {
        let button=document.getElementById(buttons[x].id);
        let message = buttons[x].message;
        button.onclick = (event) => {
            window.alert(buttonId + ":" + message);
        }
        buttonId++;
    }
}
```

6. Run this version in your browser and click on the buttons, and notice the following:
    - Both buttons display the **same** `buttonId` - 1031. This is because a reference to the same variable `buttonId` is stored inside the closure for each button.
    - Both buttons do **not** display the same `message`. This is because `message` is declared with `let` **inside the loop**. It is therefore local to the loop; on the second loop, a new variable called `message` is created and it is this new variable that is stored in the second closure.
 
7. Create a new function `makeEventHandler` as follows. Note that this returns the same value as was placed in `button.onclick` by the code above.

```javascript
function makeEventHandler(buttonId, message) {
    return (event) =>{
        window.alert(buttonId + " : " + message);
    }
}
```

8. Change `setup` so that the code that reads `button.onclick` now reads:

```javascript
button.onclick = makeEventHandler(buttonId, message);
```

9. Load the file in a browser again. Notice that the `buttonId` is now correctly different for the two buttons. This is because the value `buttonId` becomes a parameter local to each of the two `makeEventHandler` calls, rather than to the whole loop.

10. Modify the `button.onclick` line with the following code, which represents the same thing, but writes `makeEventHandler` using `=>` notation too. Note that this line corresponds to the same call on `makeEventHandler` that was previously there, and has the same effect; it just embeds the code of `makeEventHandler` inside the function as well.

```javascript
button.onclick = (
    (newButtonId) => (event) => {
        window.alert(newButtonId + " : " + message);
    }) (buttonId);
```

## AJAX

**The next section actually introduces AJAX.**

Before you proceed, **move the file you have been working on onto a local server**. You can do one of the following:

- Move the file to the `static` directory of one of your existing local Flask apps (or create a new one).

This is necessary because most modern browsers **will not allow AJAX to run from locally loaded files**; requests must be made through a server. This is intended to prevent malicious scripts stealing data from local storage.

1. Create a new file in the same server directory named `demo.json` with the following contents:

```json
// demo.json
{
  "buttons": [
    {
      "id": "button1",
      "message": "I was loaded by AJAX!"
    },
    {
      "id": "button2",
      "message": "Albeit statically!"
    }
  ]
}
```

2. Modify the `setup()` function as shown below. This includes all the changes described in the previous section. Note that a parameter is added to the first line.

```javascript
function setup(buttonList) {
    let buttonId = 1029;
    for (let x = 0; x < 2; x++) {
        let record = buttonList.buttons[x];
        let button = document.getElementById(record.id);
        let message = record.message;
        button.onclick = ((newButtonId) =>
            (event) => { window.alert(newButtonId + " : " + message); })(buttonId);
        buttonId++;
    }
}
```

3. Create a new function `load()` as follows:

```javascript
function load() {  
    let x = new XMLHttpRequest();
    x.open("get","demo.json");  
    x.onload = () => { setup(JSON.parse(x.response)); }  
    x.send();  
}
```

4. Change the `onload` attribute for the `body` element from `setup()` to `load()`.

5. Load the file into your browser (making sure that the request is passing through the server - the URL shown should be `http` not `file` ). Note that if you have placed the file in the `static` directory of a local Flask server, you do need to include the path `static/` in the URL. Clicking on the buttons should now produce the messages from the .JSON file.
    - If this does not work, check that `demo.json` is in the same directory as the `.html` file that includes the script, and both are on a server. (If you see the message “Cross-Origin Request Blocked”, or “Access to XMLHttpRequest has been blocked by CORS policy” in the developer console, you may be running from a local file instead of a server.)

6. Change the messages in the `.json` file at the server, and reload the `html` page to confirm that the messages that appear when you click on the buttons are different.
    - Note that you must **reload** the page to see changes because the `load()` function, which performs the AJAX request, only runs once when the page is loaded. If you still continue seeing old versions of the messages even though `demo.json` has been updated, add the following line to `load()` before the `x.send()`: `x.setRequestHeader("Cache-Control", "no-cache");`.

7. Move the `.html` file (but not the `json` file) into a Flask app - an existing or new one - in the `static` directory. Open or create the `py` file for the app, and add `import json` and `import random` at the top. Then, add the following route function to the `.py` file for the app:

```python
@app.route('/json')
def jsontest():
    buttons = []
    messages = ["Hello!","Goodbye!","Walrus!","Horse!","Ouch!"] 
    random.shuffle(messages)
    buttons.append({"id": "button1", "message": messages[0]}) 
    buttons.append({"id": "button2", "message": messages[1]})
    return json.dumps({"buttons": buttons})
```

Access this route on the server directly from your browser as `/json` and confirm that valid JSON appears in the browser.

8. Modify the `x.open()` line in the HTML file to refer to `../json` instead of `demo.json`. (The `../` is necessary because the HTML file is in the `static` subdirectory, but the route is not.)

9. Open the HTML file (again through the server). Clicking the buttons should produce random messages from the list in the Python program. Reloading the page should produce a different set of messages. (If it does not, try applying the caching fix described in question 6.)

10. Modify the program so that the messages are reloaded from the server each time one of the buttons is clicked. (You will need to call `load()` more often, possibly from inside the event handlers.)
 
11. Modify the `.HTML` file so that the buttons are **created** by the JavaScript, rather than present in the static HTML. (Start by creating a `div` in the HTML to hold them, and then manipulate it using the DOM tree methods.) In this way, modify the program so that the number of buttons that appear is determined by the JSON data received, and then alter the Python program to produce a variable number of buttons as well. (While you’re working on the JavaScript, you can change `load` to load a static file again with 3-4 buttons in it if this is useful for testing.)

12. Modify the program so that when the user clicks on a button, it displays not just the current button’s message, but the messages from all previous buttons the user has clicked. first, store this data in the JavaScript program; then once you have this working, modify the code to store this data in a server session variable.

## Reference Answer

```python
# app.py
from flask import Flask, request, session, jsonify
import random, json
from datetime import datetime
app = Flask(__name__)
app.secret_key = b'notAGoodSecretKey'
if __name__ == '__main__':
    app.config["ENV"] = "development" # 可选项：development、production、testing
    app.run(debug=True, host='0.0.0.0', port=4999)

@app.route('/')
def index():
    # return "Hello, World! The time is " + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return """
    <html>
        <h1>AJAX Test</h1>
        <p>Open the AJAX test page below:</p>
        <a href="/static/ajaxtest.html">AJAX Test Page</a>
        <footer>
            <p>Current time: """ + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + """</p>
        </footer>
    </html>
    """

@app.route('/json')
def jsontest():
    # allow caller to request a number of buttons via ?n=, default to 3
    try:
        n = int(request.args.get('n', 3))
    except Exception:
        n = 3
    buttons = []
    messages = ["Hello!","Goodbye!","Walrus!","Horse!","Ouch!","Ping!","Pong!"]
    random.shuffle(messages)
    for i in range(n):
        msg = messages[i % len(messages)]
        buttons.append({"id": f"button{i+1}", "message": msg})
    return json.dumps({"buttons": buttons})

@app.route('/click', methods=['POST'])
def click():
    # receive JSON {id: ..., message: ...} and append message to session stored list
    data = request.get_json() or {}
    msg = data.get('message')
    if 'clicked' not in session:
        session['clicked'] = []
    if msg:
        # append and save
        clicked = session['clicked']
        clicked.append(msg)
        session['clicked'] = clicked
    return jsonify({'clicked': session.get('clicked', [])})

@app.route('/session')
def session_data():
    return jsonify({'clicked': session.get('clicked', [])})
```

```html
<!-- static/ajaxtest.html -->
<html>
    <head>
        <script>
        "use strict";
        function one(event) {
            window.alert("One() is running");
            event.currentTarget.onclick = two;
        }

        function two(event) {
            window.alert("Two() is running");
            let count = 0;
            event.currentTarget.onclick = (event) => {
                count++;
                window.alert(count + " extra clicks.");
            }
        }

        function setup() {
            document.getElementById("button1").onclick = one;
            document.getElementById("button2").onclick = one;
        }
        function setup1() {
            let buttons = [
                {"id": "button1", "message": "Hello!"},
                {"id": "button2", "message": "Goodbye!"}
            ];
            let buttonId = 1029;
            for (let x=0; x<2; x++) {
                let button=document.getElementById(buttons[x].id);
                let message = buttons[x].message;
                button.onclick = (event) => {
                    window.alert(buttonId + ":" + message);
                }
                buttonId++;
            }
        }
        function setup2() {
            let buttons = [
                {"id": "button1", "message": "Hello!"},
                {"id": "button2", "message": "Goodbye!"}
            ];
            let buttonId = 1029;
            for (let x=0; x<2; x++) {
                let button=document.getElementById(buttons[x].id);
                let message = buttons[x].message;
                button.onclick = makeEventHandler(buttonId, message);
                buttonId++;
            }
        }
        function setup3() {
            let buttons = [
                {"id": "button1", "message": "Hello!"},
                {"id": "button2", "message": "Goodbye!"}
            ];
            let buttonId = 1029;
            for (let x=0; x<2; x++) {
                let button=document.getElementById(buttons[x].id);
                let message = buttons[x].message;
                button.onclick = (
                    (newButtonId) => (event) => {
                        window.alert(newButtonId + " : " + message);
                    }) (buttonId);
                buttonId++;
            }
        }
        // client-side history of clicked messages
        let clientHistory = [];

        function displayClientHistory() {
            const h = document.getElementById('clientHistory');
            if (!h) return;
            h.textContent = clientHistory.length ? ('Client history: ' + clientHistory.join(' | ')) : 'Client history: (none)';
        }

        function displayServerHistory(list) {
            const h = document.getElementById('serverHistory');
            if (!h) return;
            h.textContent = list && list.length ? ('Server history: ' + list.join(' | ')) : 'Server history: (none)';
        }

        function setup4(buttonList) {
            // Build buttons dynamically into the #buttonContainer element
            const container = document.getElementById('buttonContainer');
            container.innerHTML = '';
            let buttonId = 1029;
            const buttons = (buttonList && buttonList.buttons) ? buttonList.buttons : [];
            for (let i = 0; i < buttons.length; i++) {
                const record = buttons[i];
                const button = document.createElement('button');
                // use provided id if present, otherwise generate one
                button.id = record.id || ('button' + (i + 1));
                // label the button with the message (or a default)
                button.textContent = record.label || record.message || ('Button ' + (i + 1));
                const message = record.message;
                // capture buttonId and message in a closure
                button.onclick = ((newButtonId, msg) => (event) => {
                    // update client-side history
                    clientHistory.push(msg);
                    displayClientHistory();
                    // also send to server to store in session
                    fetch('../click', {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: button.id, message: msg })
                    }).then(r => r.json()).then(data => {
                        if (data && data.clicked) displayServerHistory(data.clicked);
                    }).catch(err => {
                        console.warn('Could not save to server session:', err);
                    });
                    // show combined messages from client history (local behavior)
                    window.alert('Client clicks so far: ' + clientHistory.join(' | '));
                })(buttonId, message);
                container.appendChild(button);
                buttonId++;
            }
        }

        function makeEventHandler(buttonId, message) {
            return (event) =>{
                window.alert(buttonId + " : " + message);
            }
        }

        function load() {
            let x = new XMLHttpRequest();
            // x.open("get","demo.json");
            // request 4 buttons for testing; change or remove ?n=4 to vary count
            x.open("get","../json?n=4");
            x.onload = () => {
                setup4(JSON.parse(x.response));
                // after buttons are set up, fetch server session history if any
                fetch('../session', { credentials: 'same-origin' })
                    .then(r => r.json())
                    .then(data => {
                        if (data && data.clicked) displayServerHistory(data.clicked);
                    }).catch(err => console.warn('Could not fetch session history:', err));
            }
            x.send();
        }
        </script>
    </head>

    <body onload="load()">
        <!-- container where buttons will be created dynamically -->
        <div id="buttonContainer"></div>
        <div id="historyContainer" style="margin-top:1em;">
            <div id="clientHistory">Client history: (none)</div>
            <div id="serverHistory">Server history: (none)</div>
        </div>
    </body>
</html>
```
