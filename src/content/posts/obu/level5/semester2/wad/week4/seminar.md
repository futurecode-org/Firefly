---
title: "Web Application Development Practical4: DOM"
published: 2026-04-01
# updated: 
description: The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory.
image: ./136338974_p0.png
tags: [Web, DOM]
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

# Practical Session 4: DOM

Copy and paste the following code into an `.html` file:

```html
<html>
    <head>
        <title>JavaScript Example</title>
        <script src="script.js"></script>
    </head>
    <body>
        <div id="block1">
            <p>I wanted to be <i>a tree</i></p>
            <p>Until that is, <b>I learned..</b></p>
        </div>
        <div id="block2">
            <p><u>I already am one.</u></p>
        </div>
        <button onClick="change()">Change</button>
    </body>
</html> 
```

Copy and paste the following code into the file `script.js` in the same directory.

```js
"use strict";
function change() {
    let block = document.getElementById("block1");
    for (let x of block-elementsByName("p")) {
        for (let y of x.childNodes) {
            if(y.nodeType == 3) {
                console.log(y.nodeValue);
            }
        }
    }
}
```

Note the following:

- The `src` attribute in the `script` tag in the above file, to store the script in a separate file from the web page. This is a standard technique when producing web applications.
- The `for...of` syntax used for the *for* loop in the `change()` function. This is an abbreviated method to loop through an array. A traditional number-based *for* loop, ie `for (let x = 0 ; x < block.childNodes.length; x++)` would also work. Note that `for...in` does exist in JavaScript but has a different effect; be careful not to confuse the two.
- `console.log` is a preferable way of printing debug information than `document.write` or `window.alert`, but the output only appears if the *Web Developer* console is open in the browser. However, it does have the benefit that objects that are printed to the console can be inspected properly instead of only appearing as placeholder strings.
- Every element or node object has a `nodeType` property. If this is 3, the node holds text, and the text is gotten from the `nodeValue` property. Remember that in the DOM, text is a separate node from the element that contains the text.

> [!INFO] INFO
> 关于 `nodeType` 的更多信息可参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType

1. Load the HTML file above into Chrome, open the Web Developer console, and then click on the "change" button and look at the output.

2. Modify the loop above so that the outer loop only loops through `b` elements (while still looping through only those that are inside the `div` with `id` `block1`). The output should be "I learned..."
```js
function change2(){
    let block = document.getElementById("block1");
    for(let x of block.getElementsByTagName("b")){
        for(let y of x.childNodes){
            if(y.nodeType == 3){
                console.log(y.nodeValue);
            }
        }
    }
}
```
3. Modify the loop again, in a similar way to question 2 so that the output becomes "a tree".
```js
function change3(){
    let block = document.getElementById("block1");
    for(let x of block.getElementsByTagName("i")){
        for(let y of x.childNodes){
            if(y.nodeType == 3){
                console.log(y.nodeValue);
            }
        }
    }
}
```
4. Without adding any IDs to the HTML file, modify the script so that the text `a tree` on the page turns green when the change button is clicked. (You can modify the CSS color of the element by changing its `style.color` property. This can be set to any string that would be valid in a CSS file - just the string `green` will work here. Note that the color is stored on the surrounding element, ie the `i`, not the text.)
```js
function change4(){
    let block = document.getElementById("block1");
    let italic = block.getElementsByTagName("i");
    for (let item of italic){
        item.style.color = "green";
    }
}
```
5. Modify the program so that clicking "Change" turns **all** of the text green **except** "I already am one." and the button. If you remember how CSS works, you should be able to eliminate the loop from the function!
```js
function change5(){
    let text_to_green = document.getElementsByTagName("p");
    for (let item of text_to_green){
        if (item.textContent != "I already am one."){
            item.style.color = "green";
        }
    }
}
```
Cut and paste the following code into an `.html` file:

```html
<html>
    <head>
        <title>JavaScript Example</title>
        <script src="script.js"></script>
    </head>
    <body>
        <table id="order">
            <tr>
                <th>Type</th><th>Price</th>
            </tr>
        </table>
        <button onClick="add('Burger',10)">Burger</button>
        <button onClick="add('Chips',5)">Chips</button>
        <button onClick="add('Salad',7)">Salad</button>
    </body>
</html>
```

And this into the file `script.js`:

```js
"use strict";  
function add(item, price) {
    let table = document.getElementByld("order");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    letcellText = document.createElement(item);
    newCell.appendChild(cellText);
    newRow.appendChild(newCell);
    table.appendChild(newRow);  
}
```

6. Load this page in Chrome. Click on each of the three buttons to see the effect they have on the page. It may also be a good idea to open the Web Developer sidebar and use the Inspector to see how the model of the page changes each time a button is clicked.

7. Add another button to the HTML page which adds a Milkshake which costs 2 pounds.
```html
<button onclick="add('Milkshake',2)">Milkshake</button>
```
8. Modify the add function so that the price is properly added to the table as well as the HTML file and notice the structure that you use to do so: adding an item and price to the `.html` file and notice the structure that you use to do so.
```js {10-15}
function add(item, price){
	let table = document.getElementById("order");
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");
	let cellText = document.createTextNode(item);
	newCell.appendChild(cellText);
	newRow.appendChild(newCell);
	table.appendChild(newRow);
    
	// Create a new cell for the price and append it to the new row
	let priceCell = document.createElement("td");
	let priceText = document.createTextNode(price);
	priceCell.appendChild(priceText);
	newRow.appendChild(priceCell);
	table.appendChild(newRow);
}
```
9. Add the text: `<input type="text" id="total" readonly></input>` to the HTML to create a box in which to store the total.

10. Modify the `add` function so that it updates the total in the total input box whenever an item is added.
```js {17-19}
function add(item, price){
	let table = document.getElementById("order");
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");
	let cellText = document.createTextNode(item);
	newCell.appendChild(cellText);
	newRow.appendChild(newCell);
	table.appendChild(newRow);
    
	// Create a new cell for the price and append it to the new row
	let priceCell = document.createElement("td");
	let priceText = document.createTextNode(price);
	priceCell.appendChild(priceText);
	newRow.appendChild(priceCell);
	table.appendChild(newRow);
    
	// Update the total price, formatting it to 2 decimal places
	let total = document.getElementById("total");
	total.value = (parseFloat(total.value || 0) + price).toFixed(2);
}
```

> [!TIP] Tips
> - You can read and write the contents of an input box by using its `value` property - eg, in this case, `document.getElementByld("total").value`.
> 
> - You can calculate the total in three ways: keep a running total in a JavaScript global variable, read the prices out of the table and recalculate the total every time, or read the previous total from the input box. All of these are viable.
> 
> - But if you decide to read the prices from the table or the total from the input box, note that they will be strings, and you will need to use `parseInt()` to turn them back into integers to add them properly.
> 
> - Note that trying to convert an empty string to a number with `parseInt` will yield `NaN`, not 0. You will need to either allow for this possibility or make sure that the total field is initialized to 0.

11. Modify the `add` function so that if the item has already been ordered, an alert box (`window.alert`) appears and the item is not added again.
```js {1,3-6,27}
let orderdItems = [];
function add(item, price){
	if (orderdItems.includes(item)){
		alert("You have already ordered this item.");
		return;
	}
	
	let table = document.getElementById("order");
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");
	let cellText = document.createTextNode(item);
	newCell.appendChild(cellText);
	newRow.appendChild(newCell);
	table.appendChild(newRow);
    
	// Create a new cell for the price and append it to the new row
	let priceCell = document.createElement("td");
	let priceText = document.createTextNode(price);
	priceCell.appendChild(priceText);
	newRow.appendChild(priceCell);
	table.appendChild(newRow);
    
	// Update the total price, formatting it to 2 decimal places
	let total = document.getElementById("total");
	total.value = (parseFloat(total.value || 0) + price).toFixed(2);
    
	orderdItems.push(item);
}
```

> [!TIP] Tip
> You can either loop through the contents of the HTML table to check for an existing item, or you can create a global variable holding an array of items on the order and update it as well as the table when items are added. Either way is OK. Looping through the table makes the structure more awkward, but creating a separate array runs the risk of the web page and the array going out of sync.

12. Modify the table to add an additional column. The additional column should have a **Delete** button for each item on the order. Your JavaScript code that adds an item to the table will need to add the **Delete** button to each row as well. Do not attempt to make the button do anything, yet.

13. Add the following line to your code that creates the **Delete** button:

```js
deleteButton.onc11ck = function() {
    del(newRow);
}
```

When you add an event handler to an element in JavaScript, although it **is** legal to use a string as you do in `.html`, it is a better idea to write an explicit function in this way. This also gives you an additional capability which is used here: newRow is a local variable in add , but if you use it in an event handler created within add , its value at the time you create the event handler is saved and remains stored within the event handler. This allows you to store the element object for the row to be deleted in the event handler to avoid searching for it when the actual deletion takes place. This is called a **closure**.

14. Write the `del` function in JavaScript to delete the row when the button is clicked. (Since the closure gives you a reference to the row to be deleted as a parameter to your `del` function, all you need to do is call `remove()` on it. Note that delete is a reserved word in JavaScript. Do not attempt to write a function called `delete`.)

15. Modify the `del` function to also subtract the price of the deleted item from the total. (You can obtain this from the row, or you can store it in the closure as well.)

16. Modify the program again to store a `quantity` for each item. It should increase by 1 if a duplicate order is made. Clicking the delete button should reduce the quantity by 1 if more than 1 is ordered, and remove the row only if the quantity is lowered to 0.

> [!HINT] Hints
> - Remember that you are also in control of the HTML for the rows. If it's becoming difficult to find data inside them, generate them with `data-` attributes or `class` attributes to help you find the data you need.
> 
> - You can make the `quantity` field a regular text field if you want, but you could also place a *randomly input* element in it to make it easier to update.
> 
> - You can't update the values stored in closures.

```js
let orderdItems = {};
function add(item, price){
	if (orderdItems[item]){
		orderdItems[item]++;
		let quantityCell = document.getElementById(item + "-quantity");
		quantityCell.textContent = orderdItems[item];
		let priceCell = document.getElementById(item + "-price");
		priceCell.textContent = (orderdItems[item] * price).toFixed(2);
	} else {
		let table = document.getElementById("order");
		let newRow = document.createElement("tr");
		let newCell = document.createElement("td");
		let cellText = document.createTextNode(item);
		newCell.id = item;
		newCell.appendChild(cellText);
		newRow.appendChild(newCell);
		table.appendChild(newRow);
		
		orderdItems[item] = 1;
		
		let quantityCell = document.createElement("td");
		quantityCell.id = item + "-quantity";
		quantityCell.textContent = "1";
		newRow.appendChild(quantityCell);
		table.appendChild(newRow);
		let priceCell = document.createElement("td");
		priceCell.id = item + "-price";
		priceCell.textContent = price.toFixed(2);
		newRow.appendChild(priceCell);
		table.appendChild(newRow);
		
		// Add a delete button to the new row
		let deleteCell = document.createElement("td");
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete one";
		deleteButton.onclick = function() {
			deleteOneItem(item, price);
		};
		let deleteAllButton = document.createElement("button");
		deleteAllButton.textContent = "Delete all";
		deleteAllButton.onclick = function() {
			deleteAllItems(item, price);
		};
		deleteCell.appendChild(deleteButton);
		deleteCell.appendChild(deleteAllButton);
		newRow.appendChild(deleteCell);
		table.appendChild(newRow);
	}
	// Update the total price, formatting it to 2 decimal places
	let total = document.getElementById("total");
	total.value = (parseFloat(total.value || 0) + price).toFixed(2);
}
function deleteOneItem(item, price) {
	let quantityCell = document.getElementById(item + "-quantity");
	if (!quantityCell) return;
	
	let qty = parseInt(quantityCell.textContent, 10);
	if (isNaN(qty) || qty <= 0) return;
	
	qty -= 1;
	
	if (qty > 0) {
		orderdItems[item] = qty;
		quantityCell.textContent = qty;
		let priceCell = document.getElementById(item + "-price");
		if (priceCell) {
			priceCell.textContent = (qty * price).toFixed(2);
		}
	} else {
		let row = quantityCell.parentNode;
		if (row && row.parentNode) {
			row.parentNode.removeChild(row);
		}
		delete orderdItems[item];
	}
	
	let total = document.getElementById("total");
	total.value = (parseFloat(total.value || 0) - price).toFixed(2);
}
function deleteAllItems(item, price){
	let table = document.getElementById("order");
	let targetItem = document.getElementById(item);
	if (targetItem && targetItem.parentNode && table) {
		table.removeChild(targetItem.parentNode);
	}
	let total = document.getElementById("total");
	let curQty = orderdItems[item] || 0;
	total.value = (parseFloat(total.value || 0) - curQty * price).toFixed(2);
	delete orderdItems[item];
}
```
