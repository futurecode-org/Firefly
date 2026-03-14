---
title: Web Application Development Intro
published: 2026-03-09
# updated: 
description: The World Wide Web browser was invented by Tim Berners-Lee in 1989, based on applying the concepts of HyperText to web navigation.
image: ./128538775_p0.png
tags: [Web]
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

## Once upon a time..

- Originally, Internet services were built based on two basic Internet protocols: <mark>FTP</mark> and <mark>TELNET</mark>
- <mark>FTP</mark> (File Transfer Protocol) was used for static information sources. It offered file-and-folder style access to remote data. Indexes, images, and navigation had to be stored in separate files and downloaded and viewed manually. Search engines at the time searched <mark>FTP</mark> sites.
- <mark>TELNET</mark> was used for interactive services. It offered a text-based console interface which users could use to interact with a server in dialog style.

## Evolution of the web

- The <mark>GOPHER</mark> protocol replaced FTP’s file-and-folder interface with interactive hierarchical menus and obtained some popularity
- The <mark>World Wide Web</mark> browser was invented by Tim Berners-Lee in 1989, based on applying the concepts of HyperText (a much older idea) to web navigation
- Berners-Lee’s browser, <mark>WorldWideWeb</mark>, was relatively unpopular at the time even compared to <mark>GOPHER</mark>.
- The Web’s popularity explosion came in 1993 with the release of <mark>Mosaic</mark>, the first strongly supported web browser with support for inline graphics and the Windows OS.

## The key technologies of the web

| HTML                                                                                                                      | URL                                                                                                                                                                           | HTTP and HTTPs                                                                                                                                                           | Web Browser                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| - Hypertext Markup Language<br>- A format for enhancing text with layout, links and graphics<br>- Based on the older SGML | - Uniform Resource Locator<br>- A standard for describing how a resource is accessed, needed for writing links<br>- Based on file-folder structure for compatibility with FTP | - Hypertext Transfer Protocol<br>- A simple command-based protocol for downloading files and submitting interactive content, and a server that responds to this protocol | - A user facing program that can fetch files using HTTP and create impressions of HTML enhanced text |

## The “browser wars”

- Web Browsers were <mark>commercial products</mark> with <mark>registration fees</mark> for much of the initial period of the web
- In addition, there was no standards body to rule what was or was not a valid web page
- Companies quickly realized that the <mark>browsers that the popular sites work on get the money</mark>
- This led to aggressive competition between browsers to add extra features, in the hope of having sites adopt them and thus requiring users to use those browsers
- This led to significant confusion and incompatibility, but also to very rapid development of extensions to the Web

## Web Extension Technologies

- <mark>Java</mark>. The first system for interactive content on web pages. Was revolutionary at the time, but considered slow and unwieldy once new options became available. Found its role as a language for web servers and desktop apps.
- <mark>JavaScript</mark>. Originally added to the <mark>Netscape</mark> browser to provide interactive functionality without the system load of Java. Actually <mark>had nothing to do with Java</mark> other than the idea of creating interactive content on web pages. JavaScript also had no standard, and multiple scripting languages competed until JavaScript was standardized as <mark>ECMAScript</mark> and incorporated into the newly emerging web standards documents.
- <mark>ActiveX</mark>. Microsoft’s initial competitor to Java, which would allow native programs to be downloaded from the web and run by web pages. Considered insecure, but did create the concept of the native Web plugin, which resulted in..
- <mark>Shockwave</mark> and <mark>Flash</mark>. Plugins for interactive graphics, which <mark>JavaScript</mark> did not support, created based on existing animation software. <mark>Flash</mark> especially boomed in popularity and became a major issue for browser authors and web standards organizations due to its ownership by Adobe. HTML5 added <mark>Canvas</mark>, its own standard for interactive graphics, which Adobe eventually moved to support.

## How Web Browsers Work

- You select a site to visit, either by entering a URL or clicking on a link in an existing page
- The content of a basic URL is broken down as follows:
[https://brookes.ac.uk/index.html](https://brookes.ac.uk/index.html)

| Protocol                                   | Domain                                                     | Path                                                                                                     |
| ------------------------------------------ | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| identifies the communication method to use | gives the name passed to DNS to find the IP server address | the string sent in the browser’s HTTP message to identify the requested resource. May contain further /s |

- A more complex URL can include additional parts:
[https://brookes.ac.uk/search.html](https://brookes.ac.uk/search.html?query=computer&limit=2#web)

| Query                                                                                                                                         | Hash                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| list of keys and values sent as part of the HTTP request. If a page is linked to, these can also be specified in the link but outside the URL | <u>not</u> sent to the server. Determines the part of the page that the browser will scroll to when it first loads the page |

- When the file is retrieved, the web browser displays it according to the type of the file.
- Originally, this was determined by the file extension, but this proved to be a security risk. Modern web servers are  expected to tell the browser the type of the file as part of the response protocol.
- Media files other than web pages (pictures, videos, etc) are displayed according to the browser’s capabilities.
- Other file types are either downloaded and saved or ignored, depending on security settings.

- <mark>HTML</mark> files (web pages) are displayed by the browser’s layout and rendering code.
- Usually, the HTML file will include inner references to other files which the browser must download to incorporate into  the web page. These include:
    - Media: images, videos, sound
    - JavaScript programs or parts of JavaScript programs
    - Further page layout and format information
- These files are obtained by separate requests which are made after the HTML is downloaded. Usually these would be to the same server, but they don’t have to be!

- The browser must run <mark>JavaScript</mark> and allow it to update the internal data structure the browser uses to represent the page (in JavaScript, called the <mark>Document Object</mark>), and change the drawn page to reflect the altered representation.
- The browser sends any data entered in forms back to the server when a link is followed, as part of the request for the file from that link.

- The “traditional” structure for a web server was:
- The <mark>path</mark> gives the file-and-folder location of the file to be downloaded.
    - This was for simplifying setting up servers, and for compatibility with FTP, which used only this method.
- The <mark>query</mark> gives the information which the user typed on a <mark>form</mark> and <mark>submit</mark>ted on a previous page.
- Because simply sending a file cannot change in response to query data, responding to queries requires more sophisticated behavior, usually a program running on the server.

## Dynamic Web Servers

- Originally, a web server was <mark>any program</mark> that could respond to HTTP requests, which were relatively simple
- Originally for anything more complex than serving basic files, such as searching databases or responding to forms, you would write your own server
- As HTTP become more complex, load on the web increased, and security became more of a concern, it became unviable to write arbitrary web servers except in the most complex cases
- Instead, the standard web servers (such as <mark>Apache</mark> and <mark>Microsoft IIS</mark>) offered mechanisms for integrating other programs

- <mark>CGI</mark> (Common Gateway Interface): when a request for a dynamic resource is received, the server runs a program, passing it the request, and passes the program’s output to the user
    - Simplest method but not very scalable. Program has to completely start up and shut down once for every request
- <mark>FastCGI / Inner Server</mark>: program for responding to requests runs as a simpler server process. Web server converts incoming web request to a simpler request and passes it through to the inner server
    - Much more scalable. Inner server can be moved to a different computer to increase scaling even more. But developer still has to write a server, which can be a complex task and involve further scaling and synchronization concerns

- <mark>Module</mark>: web server includes an interpreter for a programming language. When a dynamic page is called, the server runs the interpreted program. Because the server controls the interpreter, it can manage startup and shutdown of the program and allow web specific code to be added to the program
    - Very efficient and convenient; entrenched the standard of using scripting languages for dynamic web sites
    - But can be insecure to have a large body of code in the web server, and can result in version conflicts between server modules and other languages; also, interpreted languages may  be too slow for very sophisticated websites

## The Continuity Problem

- When using an web site we generally expect to interact in a <mark>continuous session</mark>: we log in, stay logged in, add items to our cart which accumulate, and so on
- However, HTTP is <mark>not</mark> a session based protocol! Every request you send to a website is a completely separate request, and the server must match it up with previous requests you made, allowing for the fact that:
    - An arbitrary time may have passed since your last request
    - Any number of requests from others may have come in in the meantime
    - Your request may not come from the same IP address (dynamic ISP reallocation, mobiles joining / leaving Wi-Fi, etc)
    - Your request may not go to the same server (load balancing)

- <mark>Cookies</mark> were an attempt at solving the continuity problem.
- Created by JavaScript code and then automatically sent by the browser in <mark>every request</mark> made to a website.
- This makes it possible for the site server to match requests to previous requests by checking for the same cookie.
- However:
    - A cookie alone may not be secure as a hacker may steal the contents of a cookie via malware, or just try to guess it
    - Using cookies together with media retrieved from remote sites can allow a user’s requests to multiple sites to be matched with each other, which the EU deemed a violation of privacy

## Is the Web a failure?
- <mark>What the web was supposed to be:</mark><br>A distributed network of multiple information sources, worldwide, all communicating and connecting with each other without overall control.
- <mark>What the web actually became:</mark><br>A significantly centralized network providing connections to mostly a small number of dominant content providers, and a large number of smaller content providers integrated into even more dominant hosting providers
- Several web consortium initiatives (like the <mark>Semantic Web</mark>) ultimately failed because of this centralization
