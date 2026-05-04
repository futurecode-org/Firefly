---
title: Web Application Development - AJAX
published: 2026-04-27
# updated: 
description: "AJAX: Asynchronous JavaScript And XML"
image: ./143784960.png
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

# Ajax

- <span style="color: red">A</span>synchronous <span style="color: red">J</span>avaScript <span style="color: red">A</span>nd <span style="color: red">X</span>ML
- Technology pioneered by Microsoft for creating more sophisticated interactive pages and saving bandwidth
- Based on extensions to JavaScript, and the XML general purpose markup language
- Modern versions of AJAX often do not actually use XML, but the name has stuck

## Basis of AJAX

- When the user first visits a page, the whole page is loaded
- When the user interacts with the page, a JavaScript script runs to process the interaction
- The JavaScript connects to the server, sending a request (possibly including data from the user) and receives back a response
- The JavaScript then uses this response to update the content of the existing loaded page
- Thus, a full web request/response cycle can occur without the need to reload the entire web page

## Disadvantages of AJAX

- Requires a sophisticated browser: some older or non mainstream browsers may not support it at all
- Can damage accessibility if the JavaScript script cannot create accessible content, which is often quite difficult
- Secure HTTP is accepted only for a full page, not part of a page, so a new page must be loaded when entering a secure part of the site
- Can increase security risk as a hacker can send fake requests that appear to come from the JavaScript scripts
- May not be obvious to the user which interactions with the site will require a connection to the server

## Benefits of AJAX

- Creates more modern and interactive user interfaces on the web
- Makes the web interface appear more continuous than a series of separate pages
- Minimizes server load by performing layout and presentation operations on the client
- Minimizes bandwidth and traffic usage by not requiring a full page to be reloaded for every interaction

## AJAX Technologies

- <span style="color: red">JavaScript</span> for managing the AJAX interaction process
- The <span style="color: red">DOM</span> for allowing the JavaScript to manipulate the displayed page
- <span style="color: red">XMLHttpRequest</span>, a JavaScript add-on which allows a JavaScript script to make its own web requests and retrieve the data as JavaScript data rather than HTML
- <span style="color: red">XML</span>, the extensible markup language; a language for arbitrary data based on extending the syntax of HTML (or actually HTML’s predecessor, SGML)

## XML

- XML is based on representing general structured data using the syntax rules of HTML
- Elements and attributes have a similar syntax but any tags and attributes can be used

```xml
<student id="12345678">
    <first>John</first>
    <last>Smith</last>
    <module-enrolls>
        <module href="cct#U08785" year="3"/>
        <module href="cct#U08008" year="1"/>
    </module-enrolls>
</student>
```

### … XML?

- XML can be downloaded and processed by JavaScript but it is more complex than needed for most AJAX applications
- Thus most modern AJAX systems do not actually use XML
- In spite of this the name AJAX has been retained for the technology, and the JavaScript add-on is still called XMLHttpRequest even though it can actually retrieve any HTTP data, not just XML
- A more commonly used format is JSON

## JSON

- JavaScript Object Notation
- Based on the syntax used in JavaScript to set the value of an 
- object type variable

```json
{
    "id" : "12345678",
    "first": "John",
    "last": "Smith",
    "module_enrols": [
        {"href": "cct#U08785", "year": 3},
        {"href": "cct#U08008", "year": 1}
    ]
}
```

---

- Top-level sent data is an object
- An object holds data in fields
- Syntax of an object is:<br>`{"field1":"value1", "field2":"value2", "numberfield":5}`
- If a field contains a sub-object, this syntax is nested
- If a field contains an array, array syntax is:<br>`["member1", "member2", "member3"]`
- Array and object syntaxes can be nested inside each other
- Unlike XML (but like JavaScript), JSON has no concept of an object’s "type"
- Because JSON is identical to JavaScript’s syntax, you can test JSON by typing it in at a JavaScript console (with a semicolon at the end)

## Creating and decoding JSON

- In JavaScript, you can parse a JSON string into a JavaScript object with the built-in command <span style="color: red">JSON.parse()</span>.
- If using Jquery, you can instead use <span style="color: red">$.parseJSON()</span> which has the same functionality but will automatically work around if the browser does not have built-in JSON support.
- You can turn a JavaScript object into a JSON string (although this is not usually needed except for debugging) by using <span style="color: red">JSON.stringify()</span>.

---

- Python has a built in <span style="color: red">json</span> library which can output data and structures as JSON. 
- The top level of a JSON structure should be based on a Python dictionary:

```python
person = {"name": "Bob", "role": "Project Manager"}
print(json.dumps(person))
```

- The default <span style="color: red">json</span> library cannot output objects (members of classes), but you can add a method to your object to pack the important data members into a dictionary.
- You can also write complete custom encoder methods if you need to.

## Steps to creating AJAX

- Decide what interactions a page will support
- Design the page to support those interactions
- Identify the data that needs to be sent to and from the server
- Write a Python script that performs the interaction and returns valid JSON
- Write a JavaScript that calls the Python script and retrieves the JSON data
- Extend the JavaScript to modify the page based on the returned JSON

## Interactions for AJAX

- Should apply to <span style="color: red">part</span> of a page – although this may be as simple as the page being divided into content and header
- Should involve server interaction – a pure client-side shopping cart does not necessarily need AJAX
- Can be especially useful if the data being retrieved is simple but the HTML presentation is complicated
- Remember to allow for accessibility and for mobile browsers

## Identify the data

- Identify the data that needs to be sent and decide on a JSON structure
- Aim to send as little data as possible
- Remember that the top level of the JSON structure must be an object
- For example, if you wished to send a list of products, you might want to send an array:
- might want to send an array:

```json
[{"name": "product 1", "price": 200},
{"name": "product 2", "price": 300}]
```

- But because the top level of JSON must be an object, you must wrap this inside a dictionary:

```json
{"products":
    [{"name": "product 1", "price": 200},
    {"name": "product 2", "price": 300}]
}
```

## Write the server

- Write a Python script which retrieves input from the user in the normal way, and retrieves data from (or even updates) the database 
- Instead of outputting HTML, the script should output JSON
- You can output JSON manually or use the `json` library
- Always follow the same rules regarding security and stability that you would for a regular web accessed script
- Test your script by accessing it from a web browser via Flask
- To check the JSON is valid, copy and paste it into your browser’s JavaScript console and place a variable assignment command before it (eg, `x={the JSON};`). If the JSON is valid, JavaScript should give no syntax error

## Example Python

```python
# Run an SQL query (code to set up the query 
# is not included in this example)
cursor.execute(query,(param1,param2..))
# Build a list of dicts from the results
productarray = []
for (id, name, price) in cursor:
    productarray.append({"id": id, "name": name,"price": price})
# Wrap inside a single dict and encode JSON
Return json.dumps({"products": productarray})
```

### JSON output

```json
{
    "products": [
    {"id":1234, "name":"product 1"},
    {"id":2345, "name":"product 2"},
    . . . Rest of products . . .
    ]
}
```

## Writing JavaScript to load JSON

- To load the JSON file into JavaScript, you will use the XMLHttpRequest extension.
- Note that this is a misnomer: XMLHttpRequest can read multiple different types of content, not just XML.

```javascript
var theRequest = new XMLHttpRequest();
theRequest.open("get","/json? Param=one&paramtwo=more");
theRequest.onload = () => {
    window.alert(
    JSON.parse(theRequest.response));
}
theRequest.send();
```

### Loading JSON into JavaScript

```json
{
    "products": [
        {"id":1234, "name":"product 1"},
        {"id":2345, "name":"product 2"},
        . . . Rest of products . . .
    ]
}
```

- If this data is loaded by a request, and `reply = JSON.parse(request.response)` then the product ID’s will be accessed as:

`reply.products[0].id`,

`reply.products[1].id` and so on.

The product names will be:

`reply.products[0].name` and so on.

## Asynchronous requests

- AJAX requests by default are asynchronous. 
- This means that the `send()` method returns immediately. This indicates that the request has been sent to the server.
- However, the server may not reply immediately (or at all). The specified `onload` function will be called when it does reply.
- Make sure to tell the user somehow that their click has registered and the server will be contacted.
- You may also wish to disable or hide the button or link that the user used to initiate the request – otherwise they may click it again, sending an extra request which will queue up with their original request and may cause confused operation.

## Steps for an AJAX request

In the initiating function:

- Check a request is not already in progress
- If it is, stop
- Build an XMLHTTPRequest object holding the request
- Load it with the request and the responding functions
- Mark that a request is now in progress
- Modify the UI so the user can see the request is in progress
- Send the request

Then, in the responding function:

- Mark that a request is no longer in progress
- Remove the "request in progress" parts of the UI
- Update the page based on the response

## "Safe" JSON loading

```javascript
// Mutex must be declared global
if (mutex) return;
mutex = true;

var theRequest = new XMLHttpRequest();
theRequest.open(“get”,”script.php?
    Param=one&paramtwo=more”);
theRequest.onload = () => {
    mutex=false; window.alert(theRequest.response);
}
theRequest.onerror = () => {
    mutex=false; window.alert(“AJAX error”);
}
theRequest.timeout=10000;
theRequest.ontimeout = function() {
    theRequest.abort(); mutex=false;
    window.alert(“AJAX timed out”);
}

theRequest.send();
```

## Testing JavaScript JSON loader

- The URL accessed can be a static JSON file or a script which generates JSON. You may wish to use a static JSON file for testing. If you are typing JSON in by hand, make sure to use a web console to check that it is valid.
- The URL <span style="color: red">must be on the same</span> site as the HTML file that contains the JavaScript.
- The JSON response will initially be a string that can be printed, but not accessed by field. After `JSON.parse`, it will be a JavaScript object, so when printed out directly, it will just read "`[Object object]`". This does however confirm that some valid JSON was received. To see the contents of the object you could print them individually.

### A complete example

- Suppose that we wish to create a simple menu-like browser, perhaps for products
- The web page will present a list of items, and clicking on each one will take the user to another list
- Each list will be loaded dynamically from the server
- The JSON structure returned from the server will be this:

```json
{
    items:
    [{name: "item name", link: "link ref"},
    {name: "item 2", link: "link 2"}]
}
```

---

- Create a loading message: note we use the "`display: none`" setting to make this not appear when the page is loaded

```html
<style>
div.loading {
    position: fixed;
    border: 5px #aaaaaa solid;
    left: 30%;
    right: 30%;
    top: 456;
    bottom: 456;
    text-align: center;
    cursor: wait;
    font: 12pt sans-serif;
    display: none;
}
</style>

<div id="loading" class="loading">
    Loading...
</div>
```

---

- Create an initially-empty div inside the HTML to receive the data

```html
<div id="browser">
</div>
```

- Add a JavaScript to the loading of the page

```html
<body onload="startUp();">
```

- On start up, get a reference to the div and store in a global variable, and make our first AJAX request

```javascript
function startUp() {
	var browserbox = document.getElementById("browser");
	var mutex = false;
	fetchList("start");
} 
```

---

Function to make an AJAX request

```javascript
function fetchList(menuid) {
    // Don’t allow multiple requests at once
    If (mutex) return;
    mutex = true; 
    // Show the loading message
    document.getElementById("loading").style.display = "block"; 
    // set up the request
    var theRequest = new XMLHttpRequest();
    theRequest.open("get","menuserver.php?pageid=" + menuid);
    theRequest.onload = () => { 
        menuLoaded(this.response);
    }
    theRequest.send();
}
```

---

- Function run once the AJAX data is received

```javascript
function menuLoaded(liststring) {
    // Request is over now
    mutex = false;
    // Hide the loading message
    document.getElementById("loading").style.display = "none";
    let listobject = JSON.parse(liststring);
    let theList = listobject.items;
    // Remove all the old list items
    while (browserbox.firstChild) {
        browserbox.removeChild(browsebox.firstChild);
    }
    // Loop through the list we loaded
    for(let t=0; t<theList.length; t++) {
    // Create an LI element for each one
    let newLi = document.createElement("LI");
    // Put the name of the item as text inside 
    // the LI
    let newText = document.createTextNode(items[t].name);
    newLi.appendChild(newText);
    // Use a value closure to set up a function 
    // to run when the item is clicked
    newLi.onclick = ((object) => ((event) => {
        browserClicked(object);
    })) (items[t]);
    // Add the new list item to the “browse” DIV
    browserbox.appendChild(newLi);
    }
}
```

### Aside: closures and value closures

- When we create a new LI to represent an item with a given name, we want to give that LI an on-click event handler
- We would like that event handler to know the name and other details of the item that has been clicked on
- Unfortunately an event handler is only allowed to have one input, which represents the event which just happened
- We can write the event handler as a built in function like this:

```javascript
newLi.onclick = (event) => { 
	browserClicked(items[t]); 
};
```

- Since "items" and "t" are both local variables in the menuLoaded function: this creates a closure. These variables are placed into the scope of the event handler even though they would not normally be accessible from there.

---

```javascript
newLi.onclick = (event) => { 
		browserClicked(items[t]); 
};
```

- Unfortunately this doesn’t work because the event handler is given references to the variables – including the variable t
- In other words, if the values of `items[]` or t change after this event handler is created, they will change in the event handler too
- Unfortunately, here we are creating multiple event handlers in a loop and T is the loop counter, and is used in all event handlers
- Thus all event handlers will get the same reference to `items[t]`, and t will have the value it has at the end of the loop, which is the length of the items array

---

```javascript
newLi.onclick = ((object) => ((event) => { 
		browserClicked(object);})) (items[t]);
```

- The purpose of this rather awkward syntax is to create a <span style="color: red">value closure</span> of `items[t]`
- This means that the value of `items[t]` that exists <span style="color: red">at the moment the event handler is added</span> is placed inside the event handler and remains there forever

#### Closures

```javascript
newLi.onclick = (event) => { 
		browserClicked(items[t]); 
};
(event)=>{browserClicked(object);}
```

is the actual event handler function.

```javascript
(object)=>((event)=>{
				browserClicked(object);})
```

- is technically a <span style="color: red">function that returns event handler functions</span>. It inputs a parameter `object` and returns an event handler which uses that value as the parameter of `browserClicked`. Because this is a separate function, it has its own scope, so there is no danger of `object` being shared with other event handlers.
 - The overall syntax creates a function to return event handler functions and then <span style="color: red">immediately calls</span> it with `items[t]`. 

### A complete example

- Function run when an item is clicked

```javascript
Function browserClicked(item) {
	// Make the next AJAX request
	fetchList(item.link);
}
```

- FetchList will run, make the next AJAX request, and once the result is received it will call menuLoaded which will load the new items into the `div`
- In a real system `browserClicked()` would probably be more complicated as items clicked on may have several effects – for example, clicking on a category might go to that category, but clicking on a product might add it to the cart

## Steps to creating AJAX

- Decide what interactions a page will support
- Design the page to support those interactions
    - Probably within the template for the page
- Identify the data that needs to be sent to and from the server
    - Decide on a JSON structure
- Write a Python script that performs the interaction and returns valid JSON
    - Build a dictionary and use `json.dumps`
- Write a JavaScript that calls the Python script and retrieves the JSON data
    - Use XMLHttpRequest and `JSON.parse`
- Extend the JavaScript to modify the page based on the returned JSON
- Use closures if necessary to pack the necessary information into the response handler
