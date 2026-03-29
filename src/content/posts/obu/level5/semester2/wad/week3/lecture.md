---
title: Web Application Development - JS
published: 2026-03-23
# updated: 
description: A scripting language for including interactive and dynamic content on web pages
image: ./142527946_p0.png
tags: [Web, JS]
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

# Introduction to JavaScript

## What is JavaScript?

- A scripting language for including interactive and dynamic content on web pages.
- JavaScript is executed on <span style="color: red">the client</span> and can manipulate the content of web pages that use it.
- JavaScript was originally created by Netscape, but had no standard, so implementations varied widely.
- Standardised as <span style="color: red">ECMAScript</span> in 1997. Most modern browsers now follow the standard and support <span style="color: red">ECMAScript 6</span> as specified in 2015.
    - Chrome supports ECMAScript 7
    - Internet Explorer supports only ES5 (but Edge has ES6)
    - Older non-mainstream browsers tend to support ES3

## Applications of JavaScript

- Can create levels of interaction from simple to  complex:
    - Pop-up or rotating advertisements
    - Client-side form validation
    - Recalculated data (eg, e-commerce totals)
    - Animated navigation menus
- Several modern browsers, especially Chrome, have focussed on speeding up and enhancing the features of JavaScript, enabling complete web applications (such as the Google Apps) to be written.

## AJAX and Service Clients

- <span style="color: red">A</span>synchronous <span style="color: red">J</span>avascript <span style="color: red">A</span>nd <span style="color: red">X</span>ML
- A set of functionality allowing a JavaScript program to request data from the web server in a non-HTML format, then use it to customize or even generate the web page on the client
- The format was originally XML, but almost all  modern systems use JSON instead (but the name has stuck)
- Extremely valuable in creating sophisticated interactions and web pages.
- Will be covered later on the module.

## Limits of JavaScript

- Source code of programs is visible to the end user, although it can be <span style="color: red">obfuscated</span> to protect it. This can be a security issue for both the code and the server.
- Execution speed and APIs vary greatly between browsers and HTML versions, and it is not always easy to write code which allows for the differences.
- A <span style="color: red">very</span> common vector for malware attacks. Browsers may impose arbitrary security restrictions.

## Writing a script

```html
<!DOCTYPE html> <html>
    <head><title>Example</title></head>
    <body>
        <script>
            document.write(“Hello World!”);
        </script>
    </body>
</html>
```
Since HTML5, `lang="JavaScript"` is not needed.

## Running a script

- JavaScript programs do not have to be compiled. They are executed simply by loading the page into a  web browser.
- It is suggested that you test using Firefox or  Chrome, as these are very popular browsers with strong JavaScript support.
- Errors in JavaScript usually cause the page to fail <span style="color: red">silently</span>. To view the error, you must open the browser’s JavaScript console where it will be printed.
- Chrome: More Tools > Developer Tools, Console
- Firefox: Web Developer > Web Console

## Running JavaScript

- Scripts such as the previous one, with commands written directly inside the <span style="color: red">script</span> tag, will run as soon as they are encountered by the browser.
- This is not generally considered acceptable in modern JavaScript but is OK to use while you are learning.
- More commonly, scripts are set up to be triggered by <span style="color: red">events</span>, which we will look at later.

## Javascript Links

```html
<!DOCTYPE html><html>
    <head><title>Example</title></head>
        <body>
            <script>
                function hello() {
                    window.alert("Hello");
                }
            </script>
            <a href="javascript:hello()">
                Say hello
            </a>
        </body>
</html>
```

---

- A link to a URL beginning with `javascript:` will cause the Javascript code in the URL to be executed.
- This is often the easiest way of creating buttons that  the user can click on to interact with a page.
- For usability, it may be a good idea to distinguish this type of link from those which send the user to another web page.
- Difficulties may arise if the user attempts a “open link in new window” command on a javascript: URL.

## Events and JavaScript

```html
<!DOCTYPE html><html>
    <head><title>Example</title></head>
    <body>
        <img src="image.jpg"
            onMouseOver="document.write('Ouch!');">
    </body>
</html>
```

---

- <span style="color: red">Event handlers</span> are created by adding attributes to  tags within the document.
- When the appropriate event (such as the mouse  passing over) happens to the element represented  by the tag, the code of the handler is executed.
- Note that not every tag supports every event.
- Also some tags (like <span style="color: red">A</span>) have default behaviour associated with some events.	A script running will  override this default behaviour.
- If you <span style="color: red">want</span> the browser to continue with the default behaviour, we will see later how to tell it to.

## Events

- Mouse events: <span style="color: red">onMouseDown, onMouseUp,  onMouseOver, onMouseOut, onClick, onDblClick,  onMouseMove, onMouseWheel.</span>
- Keyboard events: <span style="color: red">onKeyDown, onKeyUp, onKeyPress.</span>
- Events for forms: <span style="color: red">onFocus</span> (form component  selected for input), <span style="color: red">onBlur</span> (deselected for input),  <span style="color: red">onChange</span> (value changed), <span style="color: red">onSelect</span> (text selected  in a text box), <span style="color: red">onSubmit</span> (form submitted), <span style="color: red">onReset</span>  (form reset to defaults).

---

- Page loading: <span style="color: red">onLoad</span> (page/image loaded),  <span style="color: red">onUnload</span> (page unloaded), <span style="color: red">onAbort</span> (image load halted)
- Media loading: <span style="color: red">onLoadStart, onCanPlay,  onCanPlayThrough, onProgress, onPlaying,  onWaiting, onAbort, onError, onStalled.</span>
- Media playback: <span style="color: red">onPlay, onPause, onTimeUpdate,  onVolumeChange.</span>

## Defining functions

```html
<html>
    <head>
        <title>Example</title>
    </head>
    <script>
        function checkForm() {
            if (document.getElementById("name").value == "mark") {  return true;
        } else {
                window.alert("Wrong!");
                return false;
            }
        }
    </script>
    <body>
        <form name="nform" onSubmit="return checkForm();">
        <input ID="name" type=text>
        <button type="submit">Submit</button>
        </form>
    </body>
</html>
```

---

- All subroutines in JavaScript are <span style="color: red">functions</span> or <span style="color: red">methods</span>.
- Functions <span style="color: red">can</span> return values, but are not required to do so.
- If an <span style="color: red">event handler</span> returns <span style="color: red">true</span>, the default behaviour continues (if there is one). If it returns <span style="color: red">false</span>, it is halted.

## Variables

- JavaScript programs can make use of variables in the usual way.
- Variables should be declared and initialized the first time they are used; for example, `let x = 2`. You do <span style="color: red">not</span> need to specify a type.
- For backward compatibility JavaScript normally allows global variables to be assigned arbitrarily without being declared. However, this is a bad idea as it can create very difficult bugs if a variable name is accidentally misspelled or reused.
- Adding `"use strict";` to the top of your script will disable this.

## Types

- JavaScript has only three basic types: <span style="color: red">numbers</span> (integer or decimal), <span style="color: red">strings</span>, and <span style="color: red">booleans</span> (true /  false).
    - There are a total of seven primitive types, but the remaining 4 are special cases.
- Variables do not need to be typed, and can be  freely switched between types: <br>`let x = 24;	x = "Moose";` is legal.
- When you write expressions with values of multiple types, JavaScript tries to “intelligently” convert between types. <span style="color: red">Usually</span> it gets it right, but this can cause difficulties (as we’ll see later on)

## Functions with arguments

```html
<body>
    <script>
        function greet(name) {
            window.alert("Hello, " + name + "!");  return false;
        }
    </script>
    <input ID="myname" type=text>
    <button onClick="greet(document.getElementById('myname’)
.value)">Hello!</button>
</body>
```

---

- Function arguments are listed in a manner similar to Python, and behave in exactly the same way.
- As with variables, types do not need to be specified.

## Standard Operators

- Arithmetic: `+  -  *  /  %`
- Comparison: `==  !=  >  >=  <  <=`
- Logic: `&& (and)  || (or)  !(not)`

- Arithmetic shortcuts: `x = x + 5;` can be  abbreviated to `x += 5;` any other arithmetic
- operator can be abbreviated in the same way.
- `x = x + 1;` can be further abbreviated to `x++;` subtraction of 1 can also be abbreviated this way,  but no other operator can.

## Choice

- <span style="color: red">If.. Then.. Else..</span> in JavaScript is identical to Java.
```js
if (x == 1) {
    document.write("X is one");
    return true;
} else {
    document.write("X is not one");
    return false;
}
```

## Loops

- <span style="color: red">While</span> loops are also identical.
```js
while (x < 5) {
    x = x + 1;
    document.write(x + "...");
}
```

---

- <span style="color: red">For</span> loops are also the same.
- As in Java, you specify the value to start from, the <span style="color: red">condition</span> for <span style="color: red">continuing</span>, and <span style="color: red">how to update the value</span>.
- `for (let t=1; t<5; t++) { . . . .`
- The command `break;` causes the current loop to end immediately, regardless of the condition involved.
- The command `continue;` causes the loop to immediately move on to the next value.

## Functions as variables

```html
<script>
    function helloEnglish() {
        window.alert(“Hello!”);
    }
    function helloFrench() {
        window.alert(“Bonjour!”);
    }
    let hello = helloEnglish;  hello();
    hello = helloFrench;  hello();
</script>
```

---

- JavaScript functions can be stored in variables.
- A function call is normally written as `function()` or `function(a,b,c..)`.In most languages, this  is a specific syntax.
- But in JavaScript, the brackets that you use for calling a function are an <span style="color: red">operator</span> (like `+` or `&&`).  Thus, the value to which they are applied can come  from a variable, or even from an expression!
- The expression on the left hand side of the brackets  must evaluate to a function or an error will occur.

## Arrays

```html
<script>
    let friends = [“Adam”, “Ben”, “Chris”];
    for (t=0; t<3; t++) {
        document.write(friends[t]);
    }
</script>
```

Arrays work in a similar way to Python. As usual in JavaScript, they do not need to be declared.	Here  the entire array is loaded to start with, but it need  not be: it is legal in JavaScript to write `friends[3] = "John"` even if `friends` is empty (but in strict mode, it must exist).  
Just as functions can be stored in variables, they can also be stored in arrays!

## Objects

- Structured data in JavaScript is represented using <span style="color: red">objects</span> and <span style="color: red">classes</span>.
- JavaScript objects are a cross between <span style="color: red">objects</span> in Java and <span style="color: red">dicts</span> in Python:
    - Methods are represented by a function <span style="color: red">stored in a field within the object</span>;
    - As well as the `.` (dot) operator for extracting the value of a field, which is a specific syntax, JavaScript also provides `[ ]` – which is an operator, and (just like function call `()` ), can be used on an expression!

---

```html
<script>
    let myfriend = {
        Name: 'John',
        age: 24,
        job: 'Student'
    };
    document.writeln(myfriend.Name);
    document.writeln(myfriend['age']);
    query = 'job';
    document.writeln(myfriend[query]);
</script>
```

---

- Note the syntax used to initialize the object: the object in `{}`s, and each property name and value in the object in a comma separated list, with colons between.
- This syntax is also the data format JSON (<span style="color: red">J</span>ava<span style="color: red">S</span>cript <span style="color: red">O</span>bject <span style="color: red">N</span>otation) which is commonly used in other contexts, but especially for getting data from web services.

## Loose Objects

Because JavaScript objects are also dicts, they are very <span style="color: red">informal</span> compared to <span style="color: red">Java</span> or other class based languages.

```html
<script>
    let myfriend = {
        Name: 'John',
        age: 24,
        job: 'Student'
    };
// Legal, even in strict mode!  myfriend.iamafish = false;
</script>
```

## Loose Classes

- JavaScript’s loose objects mean that <span style="color: red">classes</span> are rather awkward in JavaScript.
- The good news: the syntax for classes is very close to Java.

```js
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    drive() {
        document.write("Vroom!");
    }
}
let mycar = new Car("Toyota");
document.write(mycar.carname);
mycar.drive();
```

---

- The bad news: because of loose typing and dict equivalence, objects <span style="color: red">lose their class</span> after creation.
```js
let mycar = new Car("Toyota");
document.write(mycar.carname);
mycar.iamafish = false;
document.write(mycar.iamafish);
mycar.drive = function() {
    document.write("Grrk!");
};
mycar.drive();
```
- Essentially, a <span style="color: red">class</span> in JavaScript is an abbreviated way to construct a <span style="color: red">dict</span> with a standard set of properties. Once constructed, it can be messed with without limit, and cannot be distinguished from an original member of that class.

---

- The good side:
    - You can very easily customize objects as you wish.
    - You can easily write functions that work on a wide range of objects.
- The bad side:
    - Misspelling an object property name creates or updates a new property.
    - A function that accepts an object may get a <span style="color: red">dict</span> that <span style="color: red">doesn’t match</span> anything it was expecting or even that is designed to break it.

## JavaScript Evolution

- <span style="color: red">TypeScript</span> is an alternate form of JavaScript which  adds strict typing to remove this difficulty with classes.
- It cannot be run by browsers; it is <span style="color: red">compiled into JavaScript</span> before being included in web pages.
- Numerous other languages exist which are compiled into JavaScript, allowing web  development to be done in a range of languages.
- This led to the development of <span style="color: red">WebAssembly</span>, a non-human readable language for web page scripts, which is purely used as a compilation target.
