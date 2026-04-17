---
title: "Data Structures and Algorithms Week6: AVL Tree"
published: 2026-04-13
# updated: 
description: "AVL tree and Huffman coding"
image: ./131751097.jpg
tags: [AVL Tree]
category: Data Structures and Algorithms
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

# AVL Tree

## Content

- Purpose of AVL Tree
- Node Rotation
- Build an AVL Tree

## Searching on BST

> BST: Binary Search Tree

![](img/Pasted_image_20260413153455.png)

2 Binary Search Tree with the same Nodes, the steps for searching node 1 are quite <span style="color: red">different</span>.

Which is better?

How to evaluate the “better”?

---

The height (depth) of a BST is a key factor in determining the number of search steps.

Less height, fewer steps, much better!

Make a BST shorter and Wider rather than letting it grow taller and skinny: <span style="color: red">Balancing</span>.

## Balancing BST

- Balanced Tree:
    - Resembles a pyramid or a bush.
    - The height is minimized.
    - Time complexity: O(log n).
    - The Balance Factor of every node must be -1, 0, or +1.
        - <span style="color: red">balance factor = Height(left subtree) – Height(right subtree)</span>
        - <span style="color: red">Each node has one balance factor</span>
        - <span style="color: red">0: The left and right subtrees have equal height.</span>
        - <span style="color: red">+1: The left subtree is one level higher.</span>
        - <span style="color: red">-1: The right subtree is one level higher.</span>
        - <span style="color: red">&gt; 1 or &lt; -1: The node is unbalanced, and the tree must perform an adjustment.</span>

## What is an AVL Tree?

- An AVL tree is a type of <span style="color: red"><b>self-balancing</b></span> binary search tree, named after its inventors, Adelson-Velsky and Landis, who introduced it in 1962.
- The defining characteristic of an AVL tree is its strict balance condition. For every node in the tree, the Balance Factor of every node must be -1, 0, or +1.
- If an insertion or deletion operation causes any node's balance factor to become 2 or -2, the tree is considered unbalanced. It must be restructured through a process called <span style="color: red"><b>rotation</b></span> to restore the AVL property.

## Four scenarios of imbalance

| ![](img/Pasted_image_20260413154151.png)                                                                                                                                        | ![](img/Pasted_image_20260413154206.png)                                                                                                                                          | ![](img/Pasted_image_20260413154222.png)                                                                                                                                     | ![](img/Pasted_image_20260413154233.png)                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Left of Left is too high<br>- <span style="color: red">LL case</span><br>- <span style="color: red">.BF &gt; 1</span><br>- <span style="color: red">.left.BF&gt;=0</span> | - Right of Right is too high<br>- <span style="color: red">RR case</span><br>- <span style="color: red">.BF&lt;-1</span><br>- <span style="color: red">.right.BF&lt;=0</span> | - Left’s Right is too high<br>- <span style="color: red">LR case</span><br>- <span style="color: red">.BF&gt;1</span><br>- <span style="color: red">.left.BF&lt;0</span> | - Right’s Left is too high<br>- <span style="color: red">RL case</span><br>- <span style="color: red">.BF&lt;-1</span><br>- <span style="color: red">.right.BF&gt;0</span> |

## Rotation of AVL Tree

> Tip: using AI

- Task 1 (compulsory)
    - State the steps one by one for rotating the nodes of each scenario
- Task 2 (compulsory)
    - Please implement the rotation function for each scenario.
- Task 3 (compulsory)
    - Please implement the insertion operation of the AVL Tree using the rotation functions devised in task 2
- Task 4(optional)
    - Please implement the deletion operation of the AVL Tree using the rotation functions devised in task 2 (optional)

## Build an AVL Tree

- Rebalance the Tree when inserting a new node into the AVL Tree
    - insert as a BST at the beginning
    - rebalance the Tree before returning the new subtree
        - rotate the subtree depending on different scenarios

<center style="color: red">Complete the exercise!</center>

> In-class exercise document: [practice-class.docx](https://vle.zycdut.net/sites/student.zy.cdut.edu.cn/files/attachments/practice-class.docx)

# Huffman coding

Huffman coding is a neat example of using binary trees. It’s also the foundation for text compression algorithms. We won’t describe the algorithm but will spend time focusing on how it works and how it makes clever use of trees.

First, a little background. To know how compression works, we need to know how much space a text file takes. Suppose we have a text file with just one word: *tilt*. How much space does that use? You can use the `stat` command (available on Unix). First, save the word in a file called `test.txt`. Then, using `stat`,

```shell
$ cat test.txt
tilt

$ stat -f%z test.txt
4
```

so that file takes up 4 bytes: 1 byte per character.

This makes sense. Assuming we are using ISO-8859-1 (see the following sidebar for what this means), each letter takes up exactly 1 byte. For example, the letter $a$ is ISO-8859-1 code 97, which I can write in binary as 01100001. That is 8 bits. A bit is a digit that can be either 0 or 1. And there are eight of them. Eight bits is 1 byte. So the letter $a$ is represented using 1 byte. ISO-8859-1 code goes from 00000000, which represents the null character, all the way to 11111111, which represents $\ddot { y }$ (Latin lowercase letter $y$ with diaeresis). There are 256 possible combinations of 0s and 1s with 8 bits, so the ISO-8859-1 code allows for 256 possible letters.

## Character encoding

As this example will show you, there are many different ways to encode characters. That is, the letter a could be written in binary in many different ways.

It started with ASCII. In the 1960s, ASCII was created. ASCII is a 7-bit encoding. Unfortunately, ASCII did not include a lot of characters. ASCII does not include any characters with umlauts ($\ddot {u}$ or $\ddot { o }$ , for example) or common currencies like the British pound or Japanese yen.

So ISO-8859-1 was created. ISO-8859-1 is an 8-bit encoding, so it doubles the number of characters that ASCII provided. We went from 128 characters to 256 characters. But this was still not enough, and countries began making their own encodings. For example, Japan has several encodings for Japanese since ISO-8859-1 and ASCII were focused on European languages. The whole situation was a mess until Unicode was introduced.

Unicode is an encoding standard. It aims to provide characters for any language. Unicode has 149,186 characters as of version 15—quite a jump from 256! More than 1,000 of these are emojis.

Unicode is the standard, but you need to use an encoding that follows the standard. The most popular encoding today is UTF-8. UTF-8 is variable-length character encoding, which means characters can be anywhere from 1 to 4 bytes (8–32 bits).

You don’t need to worry too much about this. I’ve kept the example simple intentionally by using ISO-8859-1, which is 8 bits—a nice consistent quantity of bits to work with.

Just remember these takeaways:
- Compression algorithms try to reduce the number of bits needed to store each character.
- If you need to pick an encoding for a project, UTF-8 is a good default choice.

Let’s decode some binary to ISO-8859-1 together:

`011100100110000101100100`. You can Google an ISO-8859-1 table or a binary-to-ISO-8859-1 converter to make this easier. 

First, we know that each letter is 8 bits, so I am going to divide this into chunks of 8 bits to make it easier to read:

> 01110010 01100001 01100100

Great, now we see that there are three letters. Looking them up in an ISO-8859-1 table, I see they spell out rad: 01110010 is r, and so on. This is how your text editor takes the binary data in a text file and displays it as ISO-8859-1. You can view the binary information by using xxd. This utility is available on Unix. Here is how tilt looks in binary:

```shell
$ xxd -b test.txt 
00000000: 01110100 01101001 01101100 01110100
tilt
```

Here is where the compression comes in. For the word tilt, we don’t need 256 possible letters; we just need three. So we don’t need 8 bits; we only need 2. We could come up with our own 2-bit code just for these three letters:

```
t = 00
i = 01
l = 10
```

Here is how we could write *tilt* using our new code: 00011000. I can make this easier to read by adding spaces again: 00 01 10 00. If you compare it to the mapping, you’ll see this spells out *tilt*.

This is what Huffman coding does: it looks at the characters being used and tries to use less than 8 bits. That is how it compresses the data. Huffman coding generates a tree.

![](img/Pasted_image_20260414195351.png)

You can use this tree to find the code for each letter. Starting at the root node, find a path down to the letter $L$. Whenever you choose a left branch, append a 0 to your code. When you choose a right branch, append 1. When you get to a letter, stop progressing down the tree. So the code for the letter $L$ is 01. Here are the three codes given by the tree:

```
i = 00
l = 01
t = 1
```

Notice that the letter T has a code of just one digit. Unlike ISO-8859-1, *in Huffman coding, the codes don’t all have to be the same length*. This is important. Let’s see another example to understand why.

Now we want to compress the phrase "paranoid android." Here is the tree generated by the Huffman coding algorithm.

![](img/Pasted_image_20260414195605.png)

Check yourself: What is the code for the letter $P$? Try it yourself before reading on. It is 0001. What about the letter $D$? It is 10.

![](img/Pasted_image_20260414200008.png)

In this case, there are actually three different possible lengths! Suppose we try to decode some binary data: 01101010. We see the problem right away: we can’t chunk this up the way we did with ISO-8859-1! While all ISO-8859-1 codes were eight digits, here the code could be two, three, or four digits. *Since the code length varies, we can’t use chunking anymore.*

Instead, we need to look at one digit at a time, as if we are looking at a tape.

Here’s how to do it: first number is 0, so go left (I’m only showing part of the tree here).

![](img/Pasted_image_20260414200127.png)

Then we get a 1, so we go right.

![](img/Pasted_image_20260414200145.png)

Then we get another 1, so we go right again.

![](img/Pasted_image_20260414200202.png)

Aha! We found a letter. This is the binary data we have left: 01010. We can start over at the root node and find the other letters. Try decoding the rest yourself and then read on. Did you get the word? It was *rad*. This is a big difference between Huffman coding and ISO-8859-1. The codes can vary, so the decoding needs to be done differently.

It is more work to do it this way instead of chunking. But there is one big benefit. Notice that the letters that show up more often have shorter codes. $D$ appears three times, so its code is just two digits versus $I$, which appears twice, and $P$, which appears only once. Instead of assigning 4 bits to everything, we can compress frequently used letters even more. You can see how, in a longer piece of text, this would be a big savings!

Now that we understand at a high level how Huffman coding works, let’s see what properties of trees Huffman is taking advantage of here.

First, could there be overlap between codes? Take this code for example:

```
a = 0
b = 1
c = 00
```

Now if you see the binary 001, is that $AAB$ or $CB$? $c$ and $a$ share part of their code, so it’s unclear. Here is what the tree for this code would look like.

![](img/Pasted_image_20260414200517.png)

We pass A on the way to C, which causes the problem.

That’s not a problem with Huffman coding because letters only show up at leaf nodes. And there’s a unique path from the root to each leaf node—that’s one of the properties of trees. So we can guarantee overlap is not a problem.

When we read the code one digit at a time, we are assuming we will eventually end up at a letter. If this was a graph with a cycle, we couldn’t make that assumption. We could get stuck in the cycle and end up in an infinite loop.

![](img/Pasted_image_20260414200624.png)

But since this is a tree, we know there are no cycles, so we are guaranteed to end up at some letter.

We are using a rooted tree. Rooted trees have a root node, which is important because we need to know where to start! Graphs do not necessarily have a root node.

Finally, the type of tree used here is called a *binary tree*. Binary trees can have at most two children—the left child and the right child. This makes sense because binary only has two digits. If there was a third child, it would be unclear what digit it is supposed to represent.

This chapter introduced you to trees. In the next chapter, we will see some different types of trees and what they are used for.
