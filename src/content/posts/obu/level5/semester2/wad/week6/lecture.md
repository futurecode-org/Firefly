---
title: Web Application Development - Further Flask
published: 2026-04-13
# updated: 
description: Further Flask Development
image: ./132061027.png
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

# Further Flask Development

## Serving HTML with Flask

- So far you have used Flask only to serve basic text which is rendered as HTML
- In a real application you would need to serve a complete web page
- Fortunately, you do not need to attempt to write the whole web page inside a Python program!

## Serving CSS and JS

- Usually the CSS file, and any JavaScript scripts on the web page you want to return, would be in separate files (linked with script `src=` or link)
- Images will also usually be served from static files (although it is possible to generate them dynamically if need be)
- Static files used by your web application should be placed in a directory called static which must be a subdirectory of the directory holding your `.py` and/or `.wsgi` file

## Calculating URLs

- When you need to include a URL in your Flask output, avoid using standard URLs as these will change based on where your app is deployed (eg, on the development server or sots)
- Instead, Flask provides a Python function `url_for` which will calculate the URL for another part of the site
- It must be imported with from flask import `url_for`

## Getting the URL for another route

```python
@app.route("/respond/<name>")
def reply(name):
    return "Hello " + name
@app.route("/demo")
def demo():
    return 'Click <a href="' + url_for("reply",name="Bob")+'">here</a> if your name is Bob.'
```

## Points to note

- Using single quotes ' to quote the Python string allows us to use double quotes " inside it, as required by HTML
- `url_for` is called with the name of the target **Python function**, not any part of the route
- `url_for` can create URLs for functions that accept parameters via GET or within the URL. It cannot create POST requests because these are not purely URLs.

## Getting the URL for a static file

```python
Out = '<link rel="stylesheet" type="text/css" href="' +
url_for("static",filename="style.css") + '">'
```

Note that the “filename” parameter name is compulsory. It may be a path, but will always be treated as a subpath of the static subdirectory of the web app.

Here the style sheet should be saved as `static/style.css`.

## Templates

- As you can see, generating HTML directly from Python is a pain
- Flask provides a templating system called <span style="color: red">Jinja2</span> to avoid needing to do this
- This allows you to build HTML files initially and then mark them up with instructions as to how they should be modified when called from the web app

## Using templates

- Create a templates subdirectory off your app directory (a sibling to `static`, if that exists)
- Place `.html` templates in this directory (note: templates have the `.html` file extension but usually cannot render directly in web browsers)
- Import and call the function `render_template` passing it the name of your template file and any parameters to it
    - You do not need to specify the templates subdirectory
    - Unless you pass them as parameters, the template cannot read your Python variables, but it can read the web request

## Contents of a template

- A template is essentially an HTML file
- Any regular content included in the template file is included verbatim in the returned HTML
- Variable content can be added to the template by using special symbols recognized by the template engine

## Sample variable template

```html
<!doctype html>
<html>
<head>
        <title>Template Example</title>
</head>
<body>
        <p>Hello {{name}}, this is a template.</p>
</body>
</html>
```

## A template variable

- To display this, `render_template` must be called with a `name` parameter in Python
- Having a URL parameter or Python variable called name will not pass this on to the template
- Contents of variables are automatically escaped to prevent HTML being injected. If you want to pass HTML from your Python code, you can mark the variable as safe using a template, but be extremely careful with this

## Jinja Filters

```html
<body>
	<p>I AM SHOUTING AT {{name|upper}}!</p>
</body>
```

- Similar to calling a function on the variable in Python before displaying it
- Only a set list of built-in filters is available
    - But this shouldn’t be a problem since you can manipulate the value in Python however you want, before you pass it to the template
    - You can read fields/properties of an object from a template with the standard Python syntax

## Jinja Conditions

```html
<p>I AM SHOUTING AT 
    {% if name is defined %}
    {{name|upper}}!
    {% else %}
    EVERYONE!
    {% endif %} </p>
```

- Allows you to make decisions about which content should be displayed. 
- As with filters, you cannot use arbitrary Python conditions. But you can set Booleans in Python and pass them to the template and test them (`if variable is true`)

## Jinja Defined Condition

- The `is defined` condition in Jinja is useful for creating templates where Python parameters are optional
- Note however that you cannot pass a value from `request.args` or `request.form` that may be missing to a template, and count on an is defined condition to resolve this
- Trying to read a value that does not exist from the request will cause an error in Python before the template begins to run

## Jinja Loops

```html
{% for cname in names %}
	<p>I see {{ cname }}</p>
{% endfor %}
```

- You can loop through any structure has an iterator (ie, that can be looped through in Python)
- A number of loop flags are also provided to simplify the process of laying out HTML

## Flask Sessions

- Often you will want a user to have a <span style="color: red">continuous dialog</span> with a web page over multiple requests
- Since requests are addressed by separate function calls, and can come in any order (even from multiple people) this can be difficult
- Flask provides an automatic system to do this: the <span style="color: red">sessions</span> variable

### Using Flask sessions

```python
from flask import Flask, session, request, escape
app = Flask(__name__)
app.secret_key = b'09oageu[b23b a/='
@app.route("/respond/<name>")
def reply(name):
	session["name"] = escape(name)
	return "Hello " + escape(name) + "!"
@app.route("/respond")
def namelessReply():
	if "name" in session:
		return "Hello again " + escape(session["name"]) + "!"
	else:
		return "I don't know you, yet!" 
```

---

- To use sessions you must specify a <span style="color: red">secret key</span>:

```python
app = Flask(__name__)
app.secret_key = b'09oageu[b23b a/='
```

- Note the b before the quote is intentional and correct. It specifies a byte string instead of a standard string.
- As the name implies the secret key must be kept secret.<br>Anyone who learns it will be able to attack your site.
- Crashing your hands over the keyboard at random is not a particularly secure way to create a secret key 😊

---

```python
@app.route("/respond/<name>")
def reply(name):
    session["name"] = escape(name)
    return "Hello " + escape(name) + "!"
```

- The <span style="color: red">session</span> variable is a Python `dict`, which you can add whatever value you want to.
- Flask will create a <span style="color: red">cookie</span> holding the data in the session variable and add it to your page automatically.
- It will use the secret key to <span style="color: red">cryptographically sign</span> the cookie. 

#### Cryptographic Signing

- Cryptographic signing is a special form of encryption that emphases <span style="color: red">authentication</span> over <span style="color: red">secrecy</span>.
- <span style="color: red">Reading</span> a cryptographically signed cookie is not trivial but not impossible.
- However, it should be very difficult or impossible to <span style="color: red">change</span> it without creating a mismatch that can be detected.
- This prevents hackers from attacking your site by tampering  with the contents of cookies.
- Note that cryptographic signing does <span style="color: red">not</span> prevent a user <span style="color: red">copying</span> a cookie or having it stolen and used by someone else (because no <span style="color: red">change</span> occurs in this process!)

### Using Flask sessions

```python
@app.route("/respond")
def namelessReply():
	if "name" in session:
		return "Hello again " +
		escape(session["name"]) + "!“
	else:
		return "I don't know you, yet!"
```

- When a request comes in with a session cookie, Flask decrypts and checks the cookie and load the data into the session variable.
- Here we read back the session variable and display output based on it.
- If we are not using a template then it is always safest to escape any input sent to the web page, even though in this case the name should have been escaped already.

#### Scope of a session

- Once a session variable is set, the cookie will be passed on to the user’s browser and held there, and the same session variable will be available again in future requests until:
    - The user uses a different browser
    - The user deletes the cookie or renders it cryptographically invalid
    - Your program deletes the data in the session variable after a request
    - You change the secret key in the program, breaking all cookies issued so far
- The session variable is <span style="color: red">not</span> reset when
    - The server is changed or restarts
- Beware of broken session cookies issued by older versions of your app
