---
title: "Binary Trees and Cross-referencing (Binary search tree)"
published: 2026-04-09
# updated: 
description: "Data Structures and Algorithms Seminar5: Binary Trees and Cross-referencing (Binary search tree)"
image: ./142646119.png
tags: [Tree]
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

# Exercises Binary Trees

## Exercise 1 - Getting set up

Download the code provided on the website, organise your folders, and get a project set up as usual. You should now see the following files in the project:

- **TreePlay.java** - the main program
- **BinaryTree.java** - a class representing binary trees of integers  
- **TreeUtilities.java** - various utilities, including for generating random trees and for pop-up windows displaying binary trees
- **TreeNavigator.java** **-**  a class with some empty method stubs, which you will complete in the practical

Have a look at the `main()` method in the main class `TreePlay` and its comments. Now run the program to see what it does.

Please note that you _don’t_ need to know how the creation of a random tree or the display of a tree works (inside `TreeUtilities.java`) for this practical. These facilities are just provided to make it easier for you to create multiple sample trees to try things out on, and see the contents of the trees.

## Exercise 2 - Traversals

Implement the method `preOrderTraversal()` in the `TreeNavigator` class. After that, add a line of code to the `main` method in the main class, `TreePlay`, to look at the results of your traversals, so that you now have

```java
BinaryTree t = TreeUtilities.createRandomTree(); 
System.out.println("PREORDER TRAVERSAL");
TreeNavigator.preOrderTraversal(t);

TreeUtilities.showTree(t);
```

Run the code - but _STOP_ before clicking on the continue button. Before the program gets to printing out the pre-order traversal of the tree, predict the results: write down on a piece of paper what the tree looks like, and write down what you THINK is the pre-order traversal of the tree. Then click on the continue button. Were you right? If not, try again.

Now implement the `postOrderTraversal()` and `inOrderTraversal()` methods, and test them by adding code to the `TreePlay` class, as you did for the `preOrderTraversal()` method. Note that it will be easier to check your results if you call your TreeNavigator methods _before_ calling `TreeUtilities.showTree()`.

## Exercise 3 - Counting the Leaves

Now implement the `leafCount()` method in the TreeNavigator class so that you count how many _leaves_ there are in a binary tree:

```java
public int leafCount(BinaryTree t)…
```

For example, in this binary tree →

there are precisely three leaves (containing 30, 33 and 55):

![](Pasted_image_20260408183305.png)

Add a line in the main method of the `TreePlay` class, before the tree gets displayed, like this

```java
System.out.println("LEAF COUNT = " + TreeNavigator.leafCount(t));
TreeUtilities.showTree(t);
```

so you can check the result of the `leafCount` method while the tree is displayed on the screen.

## Exercise 4 - The Depth of a Binary Tree

The _depth_ of a binary tree is the number of <u>edges</u> that you have to traverse to get from the root of the tree to its furthest leaf.

> Usually, height is the same as depth.

Note: a tree with only one node has depth 0, an empty tree is taken to have -1, and for example, the height of this tree is 5, because you have to traverse 5 edges to get from the root to the furthest leaf:

![](Pasted_image_20260408183926.png)

> Hint: the method `Math.max` may be useful (look it up in the API documentation).

In the `TreeNavigator` class, implement the method `depth()` and test it by adding lines to the `TreePlay` class. The best way to do this is to add a line before the tree gets displayed, like this

```java
System.out.println("DEPTH = " + TreeNavigator.depth(t));
TreeUtilities.showTree(t);
```

so you can check the result of the `depth()` method while the tree is displayed on the screen. As before, try it on a few more trees, to test that it seems to work ok.

## Further Exercises (optional)

These exercises are provided so that if at some point you would like to practise further with binary tree concepts, you have some exercises to try. They would be very good for revision purposes!

## Exercise 5 - More Practice on Recursive Methods

Write a recursive method `strictlyBinary()` (to go in the `TreeNavigator` class)

```java
public static boolean strictlyBinary(BinaryTree t)
```

which returns true if and only if the tree is `strictly binary`. A tree is strictly binary if it is not empty, and every node that is not a leaf has precisely two subtrees.

## Reference Answer

> [!DONE] Reference Answer
> ```java
> // src/binary_tree/TreeNavigator.java
> package binary_tree;
> /**
>  * @author Anka
>  */
> public class TreeNavigator {
> 
>     /**
>      * Print out a preorder traversal of a binary tree
>      *
>      * @param t root of the tree to be traversed
>      */
>     public static void preOrderTraversal(BinaryTree t) {
>         if (t != null) {
>             System.out.println(t.data);
>             preOrderTraversal(t.left);
>             preOrderTraversal(t.right);
>         }
>     }
> 
>     /**
>      * Print out a postorder traversal of a binary tree
>      *
>      * @param t root of the tree to be traversed
>      */
>     public static void postOrderTraversal(BinaryTree t) {
>         if (t != null) {
>             postOrderTraversal(t.left);
>             postOrderTraversal(t.right);
>             System.out.println(t.data);
>         }
>     }
> 
>     /**
>      * Print out a inorder traversal of a binary tree
>      *
>      * @param t root of the tree to be traversed
>      */
>     public static void inOrderTraversal(BinaryTree t) {
>         if (t != null) {
>             inOrderTraversal(t.left);
>             System.out.println(t.data);
>             inOrderTraversal(t.right);
>         }
>     }
> 
>     /**
>      * Count the leaves on a binary tree
>      * @param t root of the tree to be examined
>      * @return the number of leaves in the tree
>      */
>     public static int leafCount(BinaryTree t) {
>         int count = 0;
>         if (t != null) {
>             if (t.left == null && t.right == null) {
>                 count = 1;
>             } else {
>                 count += leafCount(t.left);
>                 count += leafCount(t.right);
>             }
>             return count;
>         } else {
>             return 0;
>         }
>     }
> 
>     /**
>      * Find the depth of a binary tree
>      * @param t the root of the tree to be examined
>      * @return depth of the tree
>      */
>     public static int depth(BinaryTree t) {
>         if (t != null) {
>             int leftDepth = depth(t.left);
>             int rightDepth = depth(t.right);
>             return 1 + Math.max(leftDepth, rightDepth);
>         } else {
>             return 0;
>         }
>     }
>     public static int depth2(BinaryTree t) {
>         if (t == null) {
>             return -1;
>         } else {
>             return 1 + Math.max(depth2(t.left), depth2(t.right));
>         }
>     }
> 
>     /**
>      * Determine whether a tree is strictly binary
>      * @param t the tree to be examined
>      * @return true if the tree is strictly binary, false if it is not
>      */
>     public static boolean strictlyBinary(BinaryTree t) {
>         if (t != null) {
>             if ((t.left == null && t.right != null) || (t.left != null && t.right == null)) {
>                 return false;
>             } else {
>                 return strictlyBinary(t.left) && strictlyBinary(t.right);
>             }
>         } else {
>             return true;
>         }
>     }
>     public static boolean strictlyBinary2(BinaryTree t) {
>         if (t == null) {
>             return false;
>         } else if (t.left == null && t.right == null) {
>             return true;
>         } else {
>             return strictlyBinary2(t.left) && strictlyBinary2(t.right);
>         }
>     }
> }
> ```

# Practical: Cross-referencing (Binary search tree)

You are going to complete the implementation (in Java) of a program that will generate a **cross-reference** listing of a text provided in a file.

For example, look at this file  
→

> Macavity's a Mystery Cat: he's called the Hidden Paw
> 
> For he's the master criminal who can defy the Law.
> 
> He's the bafflement of Scotland Yard, the Flying Squad's despair
> 
> For when they reach the scene of crime Macavity's not there!
> 
> \[T S Eliot]

The cross-reference you will produce will display a list, in alphabetic order, of each word in the text and the line numbers of the lines on which it appears.

The line numbers should appear in ascending order, and, if a word appears on a line of the text more than once, then the line number should appear only **once** for that word in the cross-reference list.  

For example, the cross reference of the above file is as follows  
→

<table>
    <tr>
        <td>a: 1<br>bafflement: 3<br>called: 1<br>can: 2<br>Cat: 1<br>crime: 4<br>criminal: 2<br>defy: 2<br>despair: 3<br>Eliot: 5<br>Flying: 3<br>For: 2, 4<br>he's: 1, 2, 3<br>Hidden: 1<br>Law: 2<br>Macavity's: 1, 4<br>master: 2</td>
        <td>Mystery: 1<br>not: 4<br>of: 3, 4<br>Paw: 1<br>reach: 4<br>S: 5<br>scene: 4<br>Scotland: 3<br>Squad's: 3<br>T: 5<br>the: 1, 2, 3, 4<br>there: 4<br>they: 4<br>when: 4<br>who: 2<br>Yard: 3</td>
    </tr>
</table>

To produce the cross-reference listing, you will use a _binary search tree_ to store the words in the file, and each word in the tree should be stored along with a list of the numbers of the lines on which it appears. Note that you will not need to do any _explicit sorting_ in this program to get values in the desired order.

For a longer example, see the _Appendix_ of this document.

## Exercise 1

Set up a project from the sources supplied on the student website, in the usual way.

Take a look at the two files you are provided with:

- `Xrefs.java` _-_ the main program (**DO NOT ALTER**)
- `WordTree.java` - where the binary search tree is **(DO NOT ALTER)**
- `TreeUtils.Java` - this contains various routines for processing trees, and it is the only file that you should alter

The data structure for the _binary search tree_ to store the words is provided for you, in the file `WordTree.java`. In the exercises below, you will modify the file `TreeUtils.java` so as to implement the following methods:

- `recordWord()` - adding a word to a tree
- `display()` - for the displaying a tree
- `numberOfEntries()` - counting how many different words there are in a tree

Study the Java classes, and, in particular, in `TreeUtils.java` the specifications as pre- and post-conditions of the methods.

Start editing the file `TreeUtils.java` by putting your name as the author.

Note that when you add a word to the tree, if the word is new, then a new node should be added to the tree, but if the word has been seen before, then the line-number of the new occurrence of the word should be added to the list of line numbers accompanying the word in the tree.

## Exercise 2

Implement the method

```java
recordWord(WordTree tree, String word, int lineNo)
```

This method should insert the word `word` into the tree `tree`, and should return a reference to the tree that results from this insertion. If `tree` is null then the method should create a tree containing just the word `word`

**Note:** you do not need to copy existing nodes into a new tree. Just insert the word supplied and return a reference to the modified tree.

**Note**: you can compare strings by using suitable methods from the `String` class, in particular look up the methods `equalsIgnoreCase()` and `compareToIgnoreCase()`. For example if `word1` and `word2` are the two strings to be compared, then the expression `word1.compareToIgnoreCase(word2)` will return 0 if the two words are the same (ignoring upper/lower case), will return a number less than 0 if `word1` occurs before `word2` in the dictionary, and will return a number greater than 0 if `word1` occurs after `word2` in the dictionary.

_Suggestion_: don’t worry about the line numbers at first, but produce a first version of your program that just produces an alphabetically ordered list of all the (different) words that appeared in the input file.

Also, don’t forget that, if a word appears on a line of the text more than once, then the line number should appear only **once.**

## Exercise 3

Implement the method `display()`. If you traverse the binary search tree in the right order then the words will come out in alphabetical order. You will **not** need to sort the list of words if you have built it in the right way.

You may assume that the list of line numbers for any one word will fit on one line of the display.

## Exercise 4

Implement the method `numberOfEntries()`.

## Reference Answer

> [!DONE] Reference Answer
> ```java
> // src/binary_search_tree/TreeUtils.java
> package binary_search_tree;
> /**
>  * @author GitHub Copilot
>  */
> public class TreeUtils {
>     /**
>      * Records a new occurrence of a given word into a WordTree.
>      *
>      * @param tree The WordTree into which the word should be recorded (N.B.
>      * this can be null, in which case a new tree should be created and returned)
>      * @param word the word to be recorded
>      * @param lineNo the line number on which the word occurred
>      * @return a reference to the modified tree, with the new word inserted.
>      * N.B if tree is null, the method should create a WordTree
>      * containing the word to be inserted, and should return it.
>      * PRECONDITION: tree is a well formed binary search tree
>      * POSTCONDITION: if word was not in tree, then the word and its line number
>      * (lineNo) have been inserted into ordered word tree, else line has been 
>      * appended to line-number list for word (if we haven't already recorded 
>      * that line number for this word)
>      */
>     public static WordTree recordWord(WordTree tree, String word, int lineNo) {
>         // If tree is empty, create a new node and return it
>         if (tree == null) {
>             return new WordTree(word, lineNo);
>         }
> 
>         // Compare words ignoring case to maintain dictionary order
>         int cmp = word.compareToIgnoreCase(tree.word);
>         if (cmp == 0) {
>             // Word already in this node: add the line number if not already present
>             if (!tree.lineNumbers.contains(lineNo)) {
>                 tree.lineNumbers.add(lineNo);
>             }
>         } else if (cmp < 0) {
>             // Insert into left subtree
>             tree.left = recordWord(tree.left, word, lineNo);
>         } else {
>             // Insert into right subtree
>             tree.right = recordWord(tree.right, word, lineNo);
>         }
> 
>         return tree;
>     }
> 
>     /**
>      * Displays all the words in a WordTree.
>      *
>      * @param tree the WordTree whose contents are to be displayed
>      * PRECONDITION: tree is a well formed binary search tree
>      * POSTCONDITION words have been written out in alphabetical order, each 
>      * followed by ascending list of line numbers on which the word occurs
>      */
>     public static void display(WordTree tree) {
>         if (tree == null) return;
> 
>         // In-order traversal to display words in alphabetical order
>         display(tree.left);
> 
>         // Print word followed by its line numbers (ascending order)
>         System.out.print(tree.word + ": ");
>         for (int i = 0; i < tree.lineNumbers.size(); i++) {
>             System.out.print(tree.lineNumbers.get(i));
>             if (i < tree.lineNumbers.size() - 1) System.out.print(", ");
>         }
>         System.out.println();
> 
>         display(tree.right);
>     }
> 
>     /**
>      * Counts how many different words there are in a WordTree
>      *
>      * @param tree the WordTree whose words are to be counted
>      * @return the number of different words in tree
>      * PRECONDITION: tree is a well formed binary search tree
>      */
>     public static int numberOfEntries(WordTree tree) {
>         if (tree == null) return 0;
>         return 1 + numberOfEntries(tree.left) + numberOfEntries(tree.right);
>     }
> }
> ```

## Appendix

If you want to entertain yourself look at:

https://www.youtube.com/watch?v=TKlub5vB9z8

<div class="iframe-container">
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=725150363&bvid=BV12S4y127eg&cid=559964089&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
<style>
  .iframe-container {
    width: 100%;
    aspect-ratio: 4 / 3;
  }
  .iframe-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

Here is an example output for `Moses.txt`, which contains a nonsense poem from the film *Singing in the Rain*:

```
************************************
Producing a cross-reference for the file:
Moses.txt
************************************
1: Moses supposes his toeses are Roses,
2: But Moses supposes erroneously,
3: Moses he knowses his toeses aren't roses,
4: As Moses supposes his toeses to be!
5: Moses supposes his toeses are Roses,
6: But Moses supposes erroneously,
7: A mose is a mose!
8: A rose is a rose!
9: A toes a toes!
10: Hooptie doodie doodle
11: Moses supposes his toeses are Roses,
12: But Moses supposes erroneously,
13: For Moses he knowses his toeses aren't roses,
14: As Moses supposes his toeses to be!
15: Moses
16: (Moses supposes his toeses are roses)
17: Moses
18: (Moses supposes erroneously)
19: Moses
20: (Moses supposes his toeses are roses)
21: As Moses supposes his toeses to be! 
22: A Rose is a rose is a rose is a rose is
23: A rose is for Moses as potent as toeses
24: Couldn't be a lily or a daphi daphi dilli
25: It's gotta be a rose cuz it rhymes with mose!
26: Moses!
27: Moses!
28: Moses!
A: 7, 8, 9, 22, 23, 24, 25
are: 1, 5, 11, 16, 20
aren't: 3, 13
As: 4, 14, 21, 23
be: 4, 14, 21, 24, 25
But: 2, 6, 12
Couldn't: 24
cuz: 25
daphi: 24
dilli: 24
doodie: 10
doodle: 10
erroneously: 2, 6, 12, 18
For: 13, 23
gotta: 25
he: 3, 13
his: 1, 3, 4, 5, 11, 13, 14, 16, 20, 21
Hooptie: 10
is: 7, 8, 22, 23
it: 25
It's: 25
knowses: 3, 13
lily: 24
mose: 7, 25
Moses: 1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 26, 27, 28
or: 24
potent: 23
rhymes: 25
rose: 8, 22, 23, 25
Roses: 1, 3, 5, 11, 13, 16, 20
supposes: 1, 2, 4, 5, 6, 11, 12, 14, 16, 18, 20, 21
to: 4, 14, 21
toes: 9
toeses: 1, 3, 4, 5, 11, 13, 14, 16, 20, 21, 23
with: 25
number of words: 144
number of different words: 35
```


# Reference Answer to the Thinking Question in lecture

## 常见二叉树类型

### 完美二叉树

如下图所示，<u>完美二叉树（perfect binary tree）</u>所有层的节点都被完全填满。在完美二叉树中，叶节点的度为 $0$ ，其余所有节点的度都为 $2$ ；若树的高度为 $h$ ，则节点总数为 $2^{h+1} - 1$ ，呈现标准的指数级关系，反映了自然界中常见的细胞分裂现象。

> [!TIP] Tip
> 请注意，在中文社区中，完美二叉树常被称为<u>满二叉树</u>。

![完美二叉树](binary_tree.assets/perfect_binary_tree.png)

### 完全二叉树

如下图所示，<u>完全二叉树（complete binary tree）</u>仅允许最底层的节点不完全填满，且最底层的节点必须从左至右依次连续填充。请注意，完美二叉树也是一棵完全二叉树。

![完全二叉树](binary_tree.assets/complete_binary_tree.png)

### 完满二叉树

如下图所示，<u>完满二叉树（full binary tree）</u>除了叶节点之外，其余所有节点都有两个子节点。

![完满二叉树](binary_tree.assets/full_binary_tree.png)

### 平衡二叉树

如下图所示，<u>平衡二叉树（balanced binary tree）</u>中任意节点的左子树和右子树的高度之差的绝对值不超过 1 。

![平衡二叉树](binary_tree.assets/balanced_binary_tree.png)

## 二叉树的退化

下图展示了二叉树的理想结构与退化结构。当二叉树的每层节点都被填满时，达到“完美二叉树”；而当所有节点都偏向一侧时，二叉树退化为“链表”。

- 完美二叉树是理想情况，可以充分发挥二叉树“分治”的优势。
- 链表则是另一个极端，各项操作都变为线性操作，时间复杂度退化至 $O(n)$ 。

![二叉树的最佳结构与最差结构](binary_tree.assets/binary_tree_best_worst_cases.png)

如下表所示，在最佳结构和最差结构下，二叉树的叶节点数量、节点总数、高度等达到极大值或极小值。

|                             | 完美二叉树         | 链表    |
| --------------------------- | ------------------ | ------- |
| 第 $i$ 层的节点数量         | $2^{i-1}$          | $1$     |
| 高度为 $h$ 的树的叶节点数量 | $2^h$              | $1$     |
| 高度为 $h$ 的树的节点总数   | $2^{h+1} - 1$      | $h + 1$ |
| 节点总数为 $n$ 的树的高度   | $\log_2 (n+1) - 1$ | $n - 1$ |
