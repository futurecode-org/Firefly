---
title: "Web Application Development Practical2: CSS"
published: 2026-03-18
# updated: 
description: CSS (Cascading Style Sheets) is used in tandem with HTML5 to create modern web pages. Where HTML5 specifies the structure of a page, CSS specifies the visual properties. Older web pages used HTML to specify visual properties as well, but separating the two has several benefits, including making it easier to establish a fixed style for an entire web site and making web sites more accessible to users with visual disabilities.
image: ./142491814_p0.png
tags: [Web, CSS]
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

# Practical Session 2: CSS

CSS (Cascading Style Sheets) is used in tandem with HTML5 to create modern web pages. Where HTML5 specifies the structure of a page, CSS specifies the visual properties. Older web pages used HTML to specify visual properties as well, but separating the two has several benefits, including making it easier to establish a fixed style for an entire web site and making web sites more accessible to users with visual disabilities.

1. Open a text editor, copy and paste the following into it, and open it in Chrome:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My CSS web page</title>
    </head>
    <body>
        <p>Hello <b>World!</b></p>
        <p>Here's another paragraph.</p>
        <table>
            <tr><th>System</th><th>Specifies</th></tr>
            <tr><td>HTML</td><td>Structure</td></tr>
            <tr><td>CSS</td><td>Aesthetics</td></tr>
        </table>
    </body>
</html>
```
2. There are three ways of adding CSS to an HTML file, but only two of them are commonly used. The first is inline CSS. Modify the first `<p>` of the `Hello World` paragraph to read: `<p style="color: blue;">` Reload the HTML file in Chrome and note that the colour has changed. (Note that in CSS you must use the US spelling: `color` not `colour`.)
Note how this works:
- You create an inline style specification by adding a `style` attribute to an existing HTML tag.
- The `style` attribute’s value must be the CSS specfication, in quotes.
- CSS also has an attribute-based structure based on key and value pairs, but with a different structure:

| HTML Attributes                                          | CSS properties                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Key is separated from value by an `=`                    | Key is separated from value by a `:`                                           |
| Multiple attributes are separated by <mark>spaces</mark> | Multiple attributes are separated by `;`                                       |
| Every value should be in <mark>quotes</mark> `" "`       | No value needs to be in quotes unless it contains spaces (very unusual in CSS) |

> [!TIP] TIP
> When setting a color in CSS, there are 3 ways:
> 1. Use a predefined name like blue, green, indigo, firebrick, purple, magenta, etc. eg: `color: blue`
> 2. Write a color specification in hex, eg: `color: #66ccff`
> 3. Write the color in numeric RB values between 0 and 255. eg: `color: rgb(255, 87, 51)`

3. When setting a color in CSS you can specify the color in several different ways. One way is to use a predefined name like `blue` above. Try changing the color name to some of the following other predefined CSS colours: `green`, `indigo`, `firebrick`, `purple`, `magenta`, `royalblue`, `tomato`.
4. The other way to specify a color is to write a color specification in hex, which has a syntax resembling `#0000ff` . The hash at the beginning is mandatory. The next digits are divided into three blocks of two (so here, `00 00 ff` ), which represent the red, green, and blue levels in the target color written in hexadecimal. So `00 00 ff` is no red, no green, and the highest possible blue (255), creating pure blue. Try using a hex color specification to color the text a) pure red; b) pure yellow; c) grey.
5. You can set the color of the text within any tag you like by using the `style` HTML attribute and the `color` CSS property. Change the color of the two table headers to pure red using CSS.
6. Change the `style` attribute of the first `p` element to read: `style="color:red; background-color:black;"` . See what effect this has.
7. Try using the `background-color` CSS property to change the background color of the table headers. Note how the result is different from changing the background of the `p` element.
8. Try adding a `background-color` CSS property to the `b` tag in `Hello World` to change the background of the bold text only. Note how the result is different again.

From last week you should remember the distinction between **block** elements and **span** elements in HTML. **Block** elements force the browser to create a new layout block on the page. **Span** elements do not; they just specify properties and attributes for a piece of text or other material that can be included in the ﬂow of an existing block.
 
- `p` is a block tag, so when you changed the `background-color` you changed the background of the entire block. Since there is no limit on the horizontal size of a paragraph block, the entire line changed color.
- `th` is also a block tag, but it does limit the horizontal size of the block, to create a table cell. When you changed the background of the block, only the small part within the block changed color.
- `b` is a span tag. It does not create a block. When you changed the background of this span tag, only the background of the affected text changed.

9. You can change the background color of the entire page by setting a CSS `background-color` property on the `body` tag. Try doing this now by setting the background color of the whole page to `black`. This will make some of your text become invisible. We will fix this in a moment.

A more standard way of specifying the styling of a web page is to store the CSS in a separate file. The CSS file creates a standard appearance for given HTML tags and can be re-used on every page of a site to create a strong visual brand.

10. Create a new file in the same directory as your `html` file. Name it `style.css` and copy and paste the following into it:
```css
p {
    color: white;
}
```

11. Add the following to the `head` section of your `html` file (note: **not** the `body` section. Ideally this should be added just above the `title` element). This tells the browser to fetch the CSS style for the page from the other file. If you called your file something other than `style.css` , change the name in the attribute below appropriately. (Note: the `link` element here **doesn’t actually create a link** in the sense of “something the user can click on”! Rather, it tells the web browser that the two files are intrinsically linked.)
```html
<link rel="stylesheet" type="text/css" href="style.css">
```

12. Reload the page in Chrome. While the background is still black, notice that the text<br>`Here's another paragraph` is now in white, and visible.

When you create a separate CSS file, you write properties (like `color: white;` ) in the same way you do when using `style` tags. In order to specify which elements you want the property to apply to, you write a **CSS selector** followed by a block of properties inside `{` and `}` brackets. `p` here is a very simple CSS selector; it selects **all** `p` elements in the document.

Note however that the `Hello World` text, which you changed to `red` earlier, is still red - even though it is inside a `p` and by the new rule ought to be white. The term **Cascading** in _Cascading Style Sheets_ is used to represent the system by which these are resolved, which will probably be more familiar to you by the name _Inheritance_ as in Java and Python. Because `Hello World` has its own `color` property specified, it **overrides** the `color` property given for all `p` s by the CSS file.

> [!INFO] INFO
> CSS样式存在优先级。
> 
> 内联样式 > 外部 css 文件
> 
> 而 css 文件中，样式越靠下优先级越高

13. Try adding a new CSS selector and rule to make the text in all the table cells (not the headers) light blue. You can use the property `color: cyan;` and it will need to be in a new selector block which begins `td { …`

This is an important and useful reason why separate CSS files are used: you can restyle a substantial part of a page without having to add separate `style` attributes to every one of your elements.

14. With your CSS page open in Chrome, press Ctrl+Shift+I to open the Web Developer tools, then click on the `Elements` tab.

15. In the Chrome display of your source code, click on the `p` element that contains “Hello World”. Then, in the pane at the bottom of the Web Developer view, click on **Styles** if it is not already selected.

On the left side of the **Styles** pane, you will see all of the CSS that is affecting the appearance of the selected `p` element. Scroll down through the blocks:
- The first block, labelled _element.style_, shows the settings applied by the `style` attribute in the HTML file.
- The second block, labelled `style.css`, shows the settings applied by your CSS file. Note that they probably appear crossed out because they are being overridden by the `style` attribute.
- The third block, labelled _User Agent Stylesheet_ shows some properties you have not seen before. These are the default rules for laying out `p` tags in HTML and the Chrome browser.
- The final block, labelled _Inherited from HTML_ shows the default properties for all text in HTML files (ie, not just paragraphs). The _color_ property here is crossed out because it is overridden by the setting in the `style` attribute.

16. In the Chrome display of your source code, click the small triangle next to the “Hello World” `p` element to open it, and then click on the internal `b` element.
 
Notice that there is now an additional User Agent Stylesheet block, which reads `b { font- weight: bold; }`. This is the built-in rule in HTML and Chrome which defines the style effect of the `b` tag. The `b` tag has no other effect; you can make any other tag behave the same as `b` by giving it the `font-weight: bold;` property in CSS.

16. By changing your HTML file and looking in Chrome’s Web Developer view, find out what the built-in CSS rules for the `i` , `u` and `a` tags are. (Note: the `a` tag will not be styled unless it contains an `href` attribute giving a link, although it is OK for it to be a broken link.)

17. Not every copy of a single tag has to be styled the same. Copy and paste the following into your HTML file, just before the table:
```html
<p class="red">Red</p>
<p class="bold">Bold</p>
<p class="italic">Italic</p>
```

19. Now add the following to your CSS file:
```css
p.red {
    color: red;
}
```

20. Reload your file in Chrome. The `class` attribute allows you to specify several different types (ie, “classes”) of a single HTML element for styling purposes. The selector `p.red` refers to "all p elements which are members of class `red` ", and the `class="red"` attribute makes that `p` element a member of that class.

21. Add two more class-based rules to your CSS file to make the words `Bold` and `Italic` appear in bold and italic as before. You learned the CSS properties to create these effects in steps 16 and 17. Do not add `b` and `i` tags to the HTML.

22. Once you have the above working, try changing the `class` attribute of the appropriate `p` element from `red` to `red bold`. Notice what happens.

A single element can be a member of several classes, and if it is, all of the attributes from all of those classes are cascaded to it.

23. In order to structure your page, HTML5 provides a number of tags that describe parts of your page but have no default style rules. Instead, you create the style rules using CSS. These tags can also be used by screen readers and other accessibility aids to help users find parts of your page. These tags are: `article`, `aside`,  `details`,  `figcaption`, `figure`, `footer`, `header`, `main`, `mark`, `nav`, `section`, `summary` and `time`. Create a `nav` element with two links in it, and then add a CSS rule to style it to have a blue background.

24. Sometimes you might want to style parts of your page freely without using any of the predefined tags. For this, HTML5 provides two tags, `div` and `span`. `div` is a **block** tag with no rules, and `span` is a **span** tag with no rules. You can use these together with the `class` attribute to style parts of a page however you like. Copy and paste the following into your HTML file before the table, and then create CSS rules (with selectors `div.buybox` and `span.price` ) to make the main text appear white on a purple background, and the price appear yellow.
```html
<div class="buybox">
	It's just <span class="price">20 pounds</span>!
</div>
```

25. Click on the `table` element in Chrome’s web developer view, and notice the built-in rules for it. There are several that you will not have seen before.

26. Look at the lower right hand pane of the Web Developer view and you will see several nested rectangles labelled _Margin_, _Border_, and _Padding_. The innermost rectangle doesn’t have a label, but is called the _Content_ box. This is called the **CSS Box Model**. Each **block** tag is assigned a rectangular area of the page which is divided into:
    - Margin: the separation of the box from the edges of the larger box it’s within (or the page itself if there is no larger box)
    - Border: as the name implies, the border of the box (most boxes in HTML do not have borders but you can specify one)
    - Padding: the distance between the border and the content;
    - Content: the actual text or other material inside the box (possibly including other boxes)

27. Mouse over the four boxes in the bottom right corner of the Web Developer view and observe that Chrome highlights the corresponding area of the actual page.

28. Add the following rule to your CSS file:
```css
td {
    border: 10px solid white;
}
```

29. Reload the file and see that the border has been added to the table cells.

The `border` property in CSS is a _shorthand property_. There are a whole range of properties in CSS related to borders. `border` lets you specify the value of three particular properties that you can also specify one by one: `border-width`, `border-style`, and `border-color`. You can also adjust the border differently on all four sides. `border-top`, `border-bottom`, `border-left` and `border-right` act as shorthand properties for doing so, or similar individual properties (`border-top-color` etc) can be used.

30. Add the property `padding: 20px` to the CSS rule for `td` and reload. Note that the space between the content of the cells and the border expands.

31. Add the property `margin: 20px` to the CSS rule for `td` and reload. You will notice that nothing is changed! Individual table cells, as specified by `td` , do not support having margins apart from the table.

32. Add the following CSS rule to the file, and reload.
```css
table {
    margin-left: 25%;
    margin-top: 10%;
}
```

Notice that the table is now closer to the middle of the page and pushed down. Percentage values for widths equate to the percentage of the size of the containing element. In this case, there is no containing element for the table, so the size of the browser screen is used (as it is the default horizontal size for a web page, and the only sensible measure of vertical size).

33. Try resizing the window displaying the web page and note how the position of the table changes.

34. CSS can also control the positioning of elements apart from the text ﬂow. Remove the two `margin` properties from `table`, and replace the block with:
```css
table {
    position: absolute; top: 50%;
    left: 100px;
}
```

35. View the page in Chrome again. Notice that the table is now positioned around halfway down the screen. Resizing the window will cause it to move vertically, but not horizontally. The `position: absolute` property overrides the web browser’s automatic placement of text.

Specifying sizes and distances in percentages in CSS can be useful but must be done with care. In particular, you must make sure that any content in a block which is sized by percentage is able to expand properly. Otherwise you will be left with a lot of ugly blank space on your page.

36. Try adding the following blocks to your CSS file:
```css
main {
    position: absolute; left: 10em;
    top: 10em;
}

nav {
    position: absolute; left: 0;
    top: 0; width: 10em;
    margin-right: 10px;
}

header {
    position: absolute; left: 10em;
    top: 0; height: 10em;
}
```

`1em` is equal to the size of one character in the current font. ( `em` doesn’t stand for anything; in typography the measurement was pronounced as “ems” because it is about the width of the letter `M` .)

37. Add `main`, `nav` and `header` elements to your HTML file, and place `p` or other elements (even `table`s) inside them to see these rules affect the layout. (Do not include duplicates of any of these elements.)

38. In your remaining practical time, visit [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp) and view some of the other CSS properties and selectors. Pay particular attention to those which allow you to change the font of text, or to position text **within** a block (rather than positioning the block).


> [!CHECK] Reference Answer

```html
// seminar2.html
<!DOCTYPE html>
<html>
    <head>
        <title>My CSS web page</title>
        <!-- <link href="style.css" rel="stylesheet" type="text/css"/> -->
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <header>
            <h1>Welcome to my CSS web page</h1>
        </header>
        <nav>
            <p>This is the navigation bar.</p>
        </nav>
        <br>
        <br>
        <p>Hello <b>World!</b></p>
        <p>Here's another paragraph.</p>
        <p class="red">Red</p>
        <p class="bold">Bold</p>
        <p class="italic">Italic</p>
        <div class="buybox">
            It's just <span class="price">20 pounds</span>!
        </div>
        <table>
            <tr><th>System</th><th>Specifies</th></tr>
            <tr><td>HTML</td><td>Structure</td></tr>
            <tr><td>CSS</td><td>Aesthetics</td></tr>
        </table>
        <main>
            <p>This is the main content of the page.</p>
        </main>
    </body>
</html>
```

```css
// style.css
body {
    background-color: lightblue;
}
/* p {
    color: red;
    font-size: 20px;
} */
p.red { 
    color: red;
}
p.bold { 
    font-weight: bold;
}
p.italic { 
    font-style: italic;
}
div.buybox {
    border: 2px solid black;
    background-color: #6cf;
    width: 200px;
    padding: 10px;
}
span.price {
    color: white;
    font-weight: bold;
}
table, th, td {
    /* border: 1px solid black; */
    border: 1px dashed black;
    border-collapse: collapse;
    /* padding: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px; */
    padding: 10px 10px 10px 10px;
}
td {
    color: greenyellow;
}
th, td {
    padding: 20px;
}
table {
    margin-left: 25%;
    margin-top: 10%;
    position: absolute; top: 50%;
    left: 100px;
}
main {
    position: absolute; left: 10em;
    top: 10em;
}
nav {
    position: absolute; left: 0;
    top: 0; width: 10em;
    margin-right: 10px;
}
header {
    position: absolute; left: 10em;
    top: 0; height: 10em;
}
```
