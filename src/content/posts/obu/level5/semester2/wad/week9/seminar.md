---
title: "Web Application Development Practical9: jQuery"
published: 2026-05-06
# updated: 
description: "Practical Session 9: jQuery"
image: ./141859016.jpg
tags: [Web, jQuery]
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

Copy and paste the following code into an HTML ﬁle. This is an alternative version of the exercise from practical 4, but written in the jQuery style rather than using the plain DOM. It uses the downloaded version of jQuery.

```html
<html>
    <head>
        <script src="jquery-3.7.1.js"></script>
        <script>
            "use strict";

            function add(item, price) {
                let new_block=$("<tr><td>"+item+"</td><td>"+price+"</td></tr>"); new_block.css("color","red");

                $("#order tr").css("color","black");
                $("#order").append(new_block);

                let old_total = $("#total").val();
                let new_total;
                if (old_total == "") {
                    new_total = price;
                } else {
                    new_total = parseInt(old_total) + price;
                }
                $("#total").val(new_total);
            }

            function setup() {
                $("button.item").click(e => { add($(e.target).attr("data-item"),
                parseInt($(e.target).attr("data-price"))); });
            }

            $(setup);
        </script>
    </head>

    <body>
        <table id="order">
            <tr>
                <th>Item</th><th>Price</th>
            </tr>
        </table>

        <p>
            Total: <input id="total" type="text" id="total" readonly></input>
        </p>

        <button class="item" data-item="Burger" data-price="10">Burger</button>
        <button class="item" data-item="Chips" data-price="5">Chips</button>
        <button class="item" data-item="Salad" data-price="7">Salad</button>
    </body>
</html>
```

1. Run this script in your browser, and read through it to understand how it works. (The  abbreviated code style of jQuery may be difficult to understand at first.)

2. Add a fourth button to add a Milkshake to the order which costs 2 pounds. Note how the `setup()` method now makes this easier than it previously was.

```javascript
<button class="item" data-item="Milkshake" data-price="2">Milkshake</button>
```

3. Modify the script so that newly added items fade in instead of just appearing.
    - You will need to make `new_block` be initially hidden. (jQuery will do nothing if asked to fade in an item that is already visible.) You can do this by calling the jQuery `hide()` method on it before adding it to the document. Do **not** do it by setting `visibility: hidden` in CSS, as jQuery does not update this.
    - Remember to use `fadeIn` only **after** the new line is added to the table. It must already be added to the DOM before it can be animated.

```javascript {2, 8}
// Hide the new block before adding it to the page, then fade it in after it's added.
new_block.hide();

$("#order tr").css("color","black");
$("#order").append(new_block);

// Fade in the new block after it's been added to the page.
new_block.fadeIn();
```

4. Modify the script to add a `delete` button to each row, as you did in the previous practical, but using the jQuery methods to add the button and event handler. You can still use a value closure in the same way you did without jQuery. Remember to reduce the total and to use the jQuery method to remove the row from the table.
    - If you specify the `delete` button in HTML, as in the code above, then you may need to use the `find` method on `new_block` to get a jQuery reference to it.
    - To read the price back from the table when deleting an item, you could mark the cells holding prices with a `class`, or use the CSS selector `:nth-of-type(2)` which selects the 2nd (or 3rd, 1st, 4th, etc…) item of a given type in a container. As before, remember that `delete` is a reserved word in JavaScript. Do not try to write a function called `delete`.

```javascript
function add(item, price) {
    let new_block = $("<tr></tr>");
    let item_cell = $("<td></td>").text(item);
    let price_cell = $("<td></td>").text(price);
    let delete_cell = $("<td></td>");
    let delete_button = $("<button class='delete'>Delete</button>");
    delete_button.click(e => {
        let old_total = parseInt($("#total").val());
        let new_total = old_total - price;
        $("#total").val(new_total);

        // Prevent the user from clicking Delete rapidly while the fade-out animation is still running.
        delete_button.prop("disabled", true);

        // Fade out the row (use the new_block variable) before removing it from the page.
        new_block.fadeOut(400, () => {
          new_block.remove();
        });
    });
    // Append the <td> cells into the <tr>
    new_block.append(item_cell);
    new_block.append(price_cell);
    new_block.append(delete_cell);
    delete_cell.append(delete_button);
    new_block.css("color", "red");
    // Hide the new block before adding it to the page, then fade it in after it's added.
    new_block.hide();

    $("#order tr").css("color","black");
    $("#order").append(new_block);

    // Fade in the new block after it's been added to the page.
    new_block.fadeIn();

    let old_total = $("#total").val();
    let new_total;
    if (old_total == "") {
      new_total = price;
    } else {
      new_total = parseInt(old_total) + price;
    }
    $("#total").val(new_total);
}
```

5. Modify the script so that rows fade out when they are deleted. Note that you must allow the fade to complete before calling `remove()` or `detach()` on the row. To do this, you will need to use the completion function parameter to `fadeOut()`.

6. Copy and paste the following code which implements the same functionality but uses the `vue.js` reactive framework. (`Vue.js` is used only because it does not require a compiler to be installed separately.)

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="jquery-3.7.1.js"></script>
        <script>
        "use strict";
        
        function setup() {
            var app = new Vue({
                el: '#app', data: {
                    order: [],
                    total: 0,
                    menu: [{name: "Burger", price: 10},
                    {name: "Chips", price: 5},
                    {name: "Salad", price: 7}]
                },
                methods: {
                    add: function(event) {
                        let name = $(event.target).attr("data-name");
                        let price = $(event.target).attr("data-price");
                        this.total += parseInt(price);
                        this.order.push({name: name, price: price});
                    }
                }
            });
        }
        
        $(setup);
        </script>
    </head>

    <body>
        <div id="app">
            <table id="order">
                <tr><th>Item</th><th>Price</th>
                <tr v-for="item in order">
                <td>{{ item.name }}</td><td>{{ item.price }}</td>
                </tr>
            </table>
            <div>
            Total: <input type="text" v-model="total" readonly></input>
            </div>
            <span v-for="item in menu">
                <button v-bind:data-name="item.name"
                        v-bind:data-price="item.price"
                        v-on:click="add">{{ item.name }}</button>
            </span>
        </div>
    </body>
</html>
```

7. Run this code and read and understand it. It will probably be helpful to refer to the `vue.js` documentation at https://vuejs.org/v2/guide/index.html .

8. Modify this page to add the *Milkshake* item and to support the `delete` functionality, as in the previous exercise. You do not need to make the items animate as they are added or deleted.

```javascript {9, 18-24}
function setup() {
    var app = new Vue({
        el: '#app', data: {
            order: [],
            total: 0,
            menu: [{name: "Burger", price: 10},
            {name: "Chips", price: 5},
            {name: "Salad", price: 7},
            {name: "Milkshake", price: 2}]
        },
        methods: {
            add: function(event) {
                let name = $(event.target).attr("data-name");
                let price = parseInt($(event.target).attr("data-price"), 10);
                this.total += price;
                this.order.push({name: name, price: price});
            },
            remove: function(index) {
                let item = this.order[index];
                if (!item) return;
                this.total -= item.price;
                this.order.splice(index, 1);
            }
        }
    });
}
```

```html {7, 12, 19-21}
<body>
    <div id="app">
        <table id="order">
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            <tr v-for="(item, index) in order" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><button @click="remove(index)">Delete</button></td>
            </tr>
        </table>
        <div>
        Total: <input type="text" v-model="total" readonly></input>
        </div>
        <span v-for="item in menu">
            <button v-bind:data-name="item.name"
                    v-bind:data-price="item.price"
                    v-on:click="add">{{ item.name }}</button>
        </span>
    </div>
</body>
```
