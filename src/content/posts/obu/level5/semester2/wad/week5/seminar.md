---
title: "Web Application Development Practical5: Flask"
published: 2026-04-08
# updated: 
description: For this practical you will be learning to use the development server that is built into Flask.
image: ./141853037.png
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

# Before Starting the Practical...

## Prepare virtual environment

```console
python3 -m venv week5flask
source week5flask/bin/activate
pip install flask mysql-connector-python
cd week5flask
mkdir static
set FLASK_ENV=development
set FLASK_DEBUG=1
```

## Create `app.py`

```python
from flask import Flask  
app = Flask(__name__)
```

## Start develop server

```console
python -m flask run
```

> [!FAQ] FAQ
> - 在 Mac/Linux 上，`set FLASK_ENV=development` 和 `set FLASK_DEBUG=1` 无效，请将 `set` 换成 `export`
> 
> > 注：`FLASK_ENV` 有两个可选项：`production` 和 `development`
> 
> - `flask` 默认端口为5000，某些情况下可能被占用，可以在命令行输入 `lsof -i :5000` 查看占用端口的进程，用 `kill -9 <PID>` 结束对应的进程，或者使用其它不常用端口启动，如 `python -m flask run --port=4999`
> - 另，还可以通过 `--host=0.0.0.0` 使服务在局域网内可见。

# Practical Session 5: Flask

## Part 1: Static site

For this practical you will be learning to use the development server that is built into Flask. This is the server you will be using to produce your coursework, so please ensure you can get it to work.

1. Ensure that you have Python installed on your computer. If you are working in a Brookes lab, run Python from Apps Anywhere to install it.
2. Ensure that you can access Python from the command line. Open a Command Line (_Command Prompt_ under Windows, _Terminal_ under MacOS) and enter `pip3`. This should produce a lengthy help message.

- If you get an error message, you may need to find the directory where Python is installed and add it to your system PATH.
- Under Linux or MacOS, make sure to refer to `pip3` or `python3` when running from the command line, as older versions of Python may be installed as well.
- Under Windows 10, running `python` or `python3` from the command line may cause Windows Store to appear, even if Python is installed. This should be resolved by the steps below.

The first step is to create a Python virtual environment. This will ensure that other Python libraries and unrelated parts of the system do not interfere with the development web server.

3. Create a directory to work in and change to it by entering `cd` followed by that directory name.
4. If you haven’t done so before, install Python virtual environment support by typing `pip3 install virtualenv`.
5. Create a virtual environment in your working directory by typing `virtualenv flasktest` (_flasktest_ here is the name of the virtual environment, which you can change if you want to)
6. cd into the virtual environment directory (`cd flasktest`), then enable the virtual environment for Python by entering `scripts\activate` (under Windows) or `scripts/activate` (under MacOS or Linux).
7. Confirm that running `python` produces a Python startup message and a `>>` prompt. (It will not be in a window because you are using the command line version of Python, not the IDLE editor.) Exit Python by typing `quit()`.

The next step is to install Flask and the related tools in the virtual environment.

8. While the virtual environment is enabled (see 6 above), type `pip3 install flask mysql-connector-python`. This will install Flask. This may take a short time as Flask will also be downloaded.
9. Open `IDLE` or your preferred Python editor (you can also use Notepad++, Visual Studio Code, PyCharm, etc.) and create a file called `app.py` inside the virtual environment directory which contains the following:

```python
from flask import Flask
app = Flask(__name__)
```

**Note:** Do not attempt to run the program from your Python editor in the way you may have done before on COMP4004. It will not work properly because it must be run from the Flask server. We will see how to do this below.

10. Create a directory called `static` inside the virtual environment directory and place an `.html` file in it. You can use any of the HTML files you created in previous practicals. If you used a CSS file together with the HTML file, place the CSS file in the `static` directory too.
11. At the command prompt, with the virtual environment active and in the virtual environment directory, type `set FLASK_ENV=development` to enable debug mode in Flask, and then `python -m flask run` to start the Flask development server. It should produce a message ending with “Running on…” followed by a URL.
12. Go to your web browser and enter the URL from the “running on” message, followed by `static/` and the name of the HTML file you copied into the directory in step 11. For example, if your HTML file was called `hello.html`, and the “running on” message referred to http://127.0.0.1:5000/ , you would enter the URL http://127.0.0.1:5000/static/hello.html . You should see your HTML file.

**Beware**: Under Windows, clicking on a Command Prompt window that is already active may cause a text selection cursor (white, non-blinking box) to appear. When this appears, it also suspends the process running in the command line, which will mean that the server will stop working! If you get no response from the server, check that there is no white box in the Command Prompt window. If there is one, click on the Command Prompt window and press ESC on the keyboard to get rid of the box.

## Part 2: Dynamic site

13. Halt the Flask server by pressing Ctrl+C with the command prompt window selected.
14. In your Python editor, add the following lines to the `app.py` file. Do not delete the lines already there.

```python
@app.route('/')
def hello_world():
    return '<html><body><p>Hello, World!</p></body></html>'
```

15. Restart the Flask server by entering `python -m flask run` in the Command Prompt window.
16. Type the URL http://127.0.0.1:5000/ into your web browser and you should see `Hello, World` appear in the browser window.
17. Modify the Flask program in `app.py` to serve your name instead of `Hello, World!`. You do not need to start and stop the Flask server every time; Flask should detect that you have changed the `.py` file and reload it automatically, If this does not work, halt Flask by pressing Ctrl+C with the Command Prompt selected, and then restart it with the command `python -m flask run`.
18. Modify your `app.py` file so that it includes a second route, `/module`, which returns “Web Application Development”. Test this using the local server.

## Part 3: Development

19. Modify the `app.py` file to add a third route, `/dadjoke`. This route should read two GET input values, `thing` and `question` and produce output such that the request:<br>http://127.0.0.1:5000/dadjoke?thing=horse&question=Why%20the%20long%20face <br>Should produce the output:

```
A horse walked into a bar.
The barman said, "Why the long face?"
The horse replied, "Because I'm a horse!"
```

The words `horse` and `Why the long face` should be drawn from the `thing` and `question` parameters and should change appropriately if they have different values.

Note the following:

- The joke should be laid out by using HTML `p` elements, so you will need to return those tags in the string returned by your function.
- Remember that `"` signs should be written using the entity `&quot;` in HTML.
- Note that the `?` at the end of the question does **not** appear in the parameter (why not?). <br>The function will need to add it.
- You will need to add `from flask import request` to the top of your Python program to have access to the `request` variable.

20. Test that the function also gives an appropriate response to<br>http://localhost:5000/dadjoke?thing=fish&question=Why%20are%20you%20gasping <br>This should give the result:

```
A fish walked into a bar.
The barman said, "Why are you gasping?"
The fish replied, "Because I'm a fish!"
```

21. Modify the function to respond appropriately to the `question` parameter being missing. The requests above should give the same results, but additionally the request<br>http://127.0.0.1:5000/dadjoke?thing=horse <br>Should produce the response

```
A horse walked into a bar.
Ouch.
It was an iron bar.
```

If `thing` is something other than `horse`, the thing that walks into the bar should be updated appropriately.

## Reference Answer

> [!DONE] Reference Answer
> ```python
> # app.py
> from flask import Flask, request
> 
> app = Flask(__name__)
> if __name__ == '__main__':
>     app.config["ENV"] = "development"
>     app.run(debug=True, host='0.0.0.0', port=4999)
> 
> @app.route('/')
> def hello_world():
>     return '<html><body><p>Hello, Anka!</p></body></html>'
> 
> @app.route('/module')
> def module():
>     return '<html><body><p>Web Application Development</p></body></html>'
> 
> @app.route('/dadjoke')
> def dadjoke():
>     try:
>         thing = request.args['thing']
>     except KeyError:
>         return '<html><body><p>Missing "thing" query parameter.</p></body></html>'
>     try:
>         question = request.args['question']
>     except KeyError:
>         return f"""
>     <html>
>         <body>
>             <p>A {thing} walked into a bar.</p>
>             <p>Ouch.</p>
>             <p>It was an iron bar.</p>
>         </body>
>     </html>
> """
>     return f"""
>     <html>
>         <body>
>             <p>A {thing} walked into a bar.</p>
>             <p>The barman said, "{question}"</p>
>             <p>The horse replied, "Because I'm a {thing}!"</p>
>         </body>
>     </html>
> """
> ```
