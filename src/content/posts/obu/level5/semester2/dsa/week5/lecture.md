---
title: "Data Structures and Algorithms Week5: Tree"
published: 2026-04-07
# updated: 
description: "Tree and Binary Tree"
image: ./125505414.png
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

# Tree

## Content

- Binary Trees
- Recursive techniques with trees
- Traversals

## What is a Tree (Graph Theory)?

- In graph theory, a tree is an undirected graph that contains no cycles (i.e. no paths that take you back to the node on which you started.

![](img/Pasted_image_20260407125131.png)

## What is a Tree (Computer Science)?

- In computer science we generally think of trees as being <span style="color: red"><i>rooted trees</i></span>.
    - One node is designated as the <span style="color: red">root</span>.
    - The nodes adjacent to it are the roots of its <span style="color: red"><i>subtrees</i></span>

![](img/Pasted_image_20260407125731.png)

## Example

![](img/Pasted_image_20260407125750.png)

### Example: XML/HTML documents

![](img/Pasted_image_20260407125817.png)

## Binary trees

- Binary trees have <span style="color: red"><i>two</i> sub-trees</span>:


| ![](img/Pasted_image_20260407125914.png) | ![](img/Pasted_image_20260407125919.png) | ![](img/Pasted_image_20260407125924.png) | ![](img/Pasted_image_20260407125928.png) |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |

<span style="color: red">Which is Binary tree?</span>

## Basic Terminology for Binary Trees

> Terminology 术语

![](img/Pasted_image_20260407130123.png)

---

![](img/Pasted_image_20260407130204.png)

<span style="color: red">Root:<br><br>Left-subtree:<br><br>Right-subtree:<br><br>leaves:</span>

## How do we represent binary trees?

- A (binary) tree is
    - either empty, 
    - or consists of a node, containing some data, along with references to two sub-trees, known as the _left_ and _right_ sub <span style="color: red">trees</span>. 

⬆️  
<span style="background-color: rgb(66, 157, 218)">Note the <span style="color: red"><i>recursive</i></span> definition.</span>

## Represent Binary Trees of Integers

```java {12,13}
public class BinaryTree {
    public Member data;
    public BinaryTree left; //null if there is no left subtree
    public BinaryTree right; //null if there is no right subtree
    public BinaryTree(Member val) {
        data = val;
        left = null;
        right = null;
    }
}
BinaryTree t;
// A tree can be represented by a reference to its root.
// This reference is null if the tree is empty.
```

## Recursive Tree Algorithms

Since trees are defined recursively, it is often simplest to process them using recursive algorithms. Here is an example:

```java
/** Count the number of nodes in a binary tree **/
public static int count(BinaryTree t) {
    if (t == null) {
        return 0;
    } else {
        return 1 + count(t.left) + count(t.right);
    }
}
```

## Traversals

> Traverse 遍历

- A <span style="color: red"><i>traversal</i></span> is a systematic way of going through all the data in a data structure.
- So, for example, for a list of type `ArrayList<String>`, this is a traversal:

```java
for (String s : list) {
    // makes s successively each value in list
    ............
}
```

---

- For trees there are several traversals, including:
    - <span style="color: orchid">pre-order</span> traversal
    - <span style="color: midnightblue">in-order</span> traversal
    - <span style="color: royalblue">post-order</span> traversal

### Pre-order traversal

- The pre-order traversal algorithm is recursive:<br><span style="color: royalblue">If tree is not empty:</span>
    - <span style="color: royalblue">visit root</span>
    - <span style="color: royalblue">then traverse the left subtree</span>
    - <span style="color: royalblue">then traverse the right subtree</span>

> <span style="color: red">traversals are done recursively, in <i>pre-order</i> fashion</span>

<span style="background-color: rgb(66, 157, 218)">It is called a pre-order traversal because "pre" means "before", and <span style="color: red">the root is visited before the subtrees</span>.</span>

#### Pre-order Example

<span style="color: royalblue">If tree is not empty:</span>
- <span style="color: royalblue">visit root</span>
- <span style="color: royalblue">then traverse the left subtree</span>
- <span style="color: royalblue">then traverse the right subtree</span>

![](img/Pasted_image_20260407133026.png)

Pre-order traversal of graph:  
<span style="color: red">A,B,D,H,E,C,F,I,J,G</span>

#### An implementation of pre-order traversal

```java
public static void preOrderTraversal(BinaryTree t) {
    if (t != null) {
        System.out.println(t.data);
        preOrderTraversal(t.left);
        preOrderTraversal(t.right);
    }
}
```

### In-order traversal

- The in-order traversal algorithm is recursive:
    - <span style="color: royalblue">If tree is not empty:</span>
        - <span style="color: royalblue">traverse the left subtree</span>
        - <span style="color: royalblue">then visit root</span>
        - <span style="color: royalblue">then traverse the right subtree</span>

> <span style="color: red">traversals are done recursively, in <i>in-order</i> fashion</span>

<span style="background-color: rgb(66, 157, 218)">For an in-order traversal, the root is visited <span style="color: red">“in between”</span> the subtrees.</span>

#### In-order Example

<span style="color: royalblue">If tree is not empty:</span>
- <span style="color: royalblue">traverse the left subtree</span>
- <span style="color: royalblue">then visit root</span>
- <span style="color: royalblue">then traverse the right subtree</span>

![](img/Pasted_image_20260407133936.png)

In-order traversal of graph:  
<span style="color: red">H,D,B,E,A,I,F,J,C,G</span>

#### An implementation of in-order traversal

```java
public static void inOrderTraversal(BinaryTree t) {
    if (t != null) {
        inOrderTraversal(t.left);
        System.out.println(t.data);
        inOrderTraversal(t.right);
    }
}
```

### Post-order traversal

- The post-order traversal algorithm is recursive:
    - <span style="color: royalblue">If tree is not empty:</span>
        - <span style="color: royalblue">traverse the left subtree</span>
        - <span style="color: royalblue">then traverse the right subtree</span>
        - <span style="color: royalblue">visit root</span>

> <span style="color: red">traversals are done recursively, in <i>post-order</i> fashion</span>

<span style="background-color: rgb(66, 157, 218)">It is called a post-order traversal because <span style="color: red">“post” means “after”,</span> and the root is visited after the subtrees.</span>

#### Post-order Example

<span style="color: royalblue">If tree is not empty:</span>
- <span style="color: royalblue">traverse the left subtree</span>
- <span style="color: royalblue">then traverse the right subtree</span>
- <span style="color: royalblue">then visit root</span>

![](img/Pasted_image_20260407135205.png)

Post-order traversal of graph:  
<span style="color: red">H,D,E,B,I,J,F,G,C,A</span>

#### An implementation of post-order traversal

```java
public static void postOrderTraversal(BinaryTree t) {
    if (t != null) {
        postOrderTraversal(t.left);
        postOrderTraversal(t.right);
        System.out.println(t.data);
    }
}
```

## Requirements for this week

You should achieve by the end of this week’s work:
- understand binary trees
- able to store data in binary trees
- understand pre-order, post-order and in-order traversals on binary trees
- able to write recursive functions on trees.

# Binary search tree

## A Binary Search Tree

- This is an example of Binary Search Tree
- What property does it have that makes it a binary tree?
- What additional property does it have?
- Why might that property be useful?

![](img/Pasted_image_20260407135652.png)

## Binary Search Trees

- These are a special kind of <span style="color: red"><i>binary tree</i></span>
    - the data they contain must be <span style="color: red">a <i>comparable</i> type</span> (where you can do `<`, `>`, `==`, .equals comparisons), e.g. int, char, String<br>(.compareTo)
    - The data at the <span style="color: red">root</span> node is <span style="color: red">greater than</span> all the data in the <span style="color: red">left subtree</span>
    - The data at the <span style="color: red">root</span> node is <span style="color: red">less than</span> all data in the <span style="color: red">right subtree</span>
    - … and so on, all the way down the tree (<span style="color: orange">recursive definition</span>)

---

- Usually binary search trees represent <span style="color: red">a <i>set</i> of values</span>
    - there are <span style="color: red">no <i>duplicate</i> values in the tree</span>
    - Of course, any <span style="color: red"><i>binary search tree</i> is also a <i>binary tree</i></span>

> Invented by P.F. Windley, A.D. Booth, A.J.T. Colin, and T.N. Hibbard in 1960 (Wikipedia)

## Is this a Binary Search Tree?

| ![](img/Pasted_image_20260407140457.png) | ![](img/Pasted_image_20260407140501.png) | ![](img/Pasted_image_20260407140505.png) |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |

## Datatype Invariants

- A <span style="color: red"><i>datatype invariant</i></span> is a property of an <span style="color: red"><i>abstract data type</i></span> which holds for all objects of that type.
- The datatype invariant <span style="color: orange">for binary search trees</span> is:
    - The data at the root node is <span style="color: orange"><i>greater</i></span> than all the data in the left sub-tree
    - The data at the root node is <span style="color: orange"><i>less</i></span> than all the data in the right sub-tree
    - ... and so on, all the way down the tree
    - <span style="color: orange"><i>no duplicate</i></span> values in the tree - so any implementation of such a tree is also an implementation of the concept of a set with operations union-with-singleton and membership.

## A Search Tree class (for integers)

```java {5,6}
public class SearchTree {
    public int data; // or whatever
    public SearchTree left;
    public SearchTree right;
    // Reminder:
    // reference-type fields are initialized to null by default.
    public SearchTree(int data) {
        this.data = data;
    }
}
```

## Insertion into a Search Tree

```java
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    } // do nothing -- val is already in tree
	return tree;
}
```

<span style="color: red">Does it use recursive method?</span>

<span style="color: red">What is the base case?</span>

### Insertion into a Search Tree: Example

```java {2}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407141648.png)

> <span style="background-color: rgb(66, 157, 218)">We have some variable SearchTree t The initial call is <span style="color: red">t = insert(t,9)</span> where t points to the root of the tree.</span>

---

```java {4}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407144517.png)

> <span style="background-color: rgb(66, 157, 218)">9 &gt; 7 so insert on right</span>

---

```java {2}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407144712.png)

> <span style="background-color: rgb(66, 157, 218)">Start of recursive call</span>

---

```java {7}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407150347.png)

> <span style="background-color: rgb(66, 157, 218)">9 &lt; 12 so insert to left</span>

---

```java {2}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407150755.png)

> <span style="background-color: rgb(66, 157, 218)">Start of recursive call</span>

---

```java {5}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407150931.png)

> <span style="background-color: rgb(66, 157, 218)">9 &gt; 8 so insert to right</span>

---

```java {2}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407151450.png)

> <span style="background-color: rgb(66, 157, 218)">Start of recursive call</span>

---

```java {3}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407151658.png)

> <span style="background-color: rgb(66, 157, 218)">Create a new tree and return it</span>

---

```java {5}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407151856.png)

> <span style="background-color: rgb(66, 157, 218)">Return to third invocation of insert() and update right subtree</span>

---

```java {7}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407152150.png)

> <span style="background-color: rgb(66, 157, 218)">Return to second invocation of insert(). <br>The assignment statement does not change location of left subtree</span>

---

```java {7}
public SearchTree insert( SearchTree tree, int val) {
    if (tree == null) {
        tree = new SearchTree(val);
    } else if (val > tree.data) {
        tree.right = insert(tree.right, val);
    } else if (val < tree.data) {
        tree.left = insert(tree.left, val);
    }
	return tree;
}
```

![](img/Pasted_image_20260407152320.png)

> <span style="background-color: rgb(66, 157, 218)">Return to original statement t=insert(t,9)<br>The location of tree has not changed, but it has an extra node.</span>

## Searching a Search Tree

```java
public static boolean contains(SearchTree tree, int val) {
    if (tree == null) {
        return false;
    } else if (val > tree.data) {
        return contains(tree.right, val);
    } else if (val < tree.data) {
        return contains(tree.left, val);
    } else { // tree.data==val
        return true;
    }
}
```

<span style="color: red">Does it use recursive method?</span>

<span style="color: red">What is the base case?</span>

## Exercise

- Sketch out the tree that would be produced by inserting the values 4, 5, 10, 25, 39 _in that order_, using the insert method shown earlier.
- Using the search method shown earlier, how many method calls do you need to make in order to find out whether 39 is in the resulting tree?
- How many method calls do you need to make to find out whether 100 is in the tree?

## Special situation with binary search trees

If a tree  
is <span style="color: red">lopsided</span>,  
a search can still  
take up to _n_ steps,  
for a tree with n nodes.  
Said to have _degenerated_ into a linked list.  

![](img/Pasted_image_20260407152729.png)

## Best to make the class *contain* a tree, not *be* one

- Make a class *BinarySearchTree contain* a class *Node*.
- *BinarySearchTree* can then have as fields: 
    - *root* - a Node
    - *numEntries* - an integer

## A Search Tree class (for integers)

```java
public class BinarySearchTree {
    
    private class Node {
        private int data;
        private Node left;
        private Node right;
        
        public Node(int data) {
            this.data = data;
        }
    }
    
    private Node root;
    private int numEntries;
    
    public BinarySearchTree() {
        root = null;
        numEntries = 0;
    }
…
```

### Recursive `addNode`

```java
public Node addNode(Node tree, int val) {
    if (tree == null) {
        tree = new Node(val);
    } else if (val > tree.data) {
        tree.right = addNode(tree.right, val);
    } else if (val < tree.data) {
        tree.left = addNode(tree.left, val);
    } // val is already in tree; take action
    return tree;
}
```

#### `BinarySearchTree.insert` using recursive `addNode`

```java
public void insert (int val) {
    root = addNode(root, val);
    numEntries++;
} // BinarySearchTree.insert
```

### Iterative `addNode`

```java
public void addNode(int key, String name) { // does not use recursive way
    Node p, parent;
    p = root;
    while (p != null && p.key != key) {
        parent = p;
        if (key < p.key) p = p.left; else p = p.right;
    }
    if (p == null) {
        Node newNode = new Node(key, name);
        if (p == root) root = newNode;
        else if (p == parent.left) parent.left = newNode;
        else parent.right = newNode;
        numEntries++;
    }
    else // p != null - duplicate node detected! Take appropriate action
}
```

#### `BinarySearchTree.insert` using iterative `addNode`

```java
public void insert (int val) {
    addNode(val);
} // BinarySearchTree.insert
```

## Perfectly balanced trees

A <span style="color: red"><i>perfectly balanced</i></span> tree with $2^{(k+1)} - 1$ nodes, will have $depth \times (height)~k$ so searches take at most $k$ steps

![](img/Pasted_image_20260407154327.png)

- The <span style="color: red"><i>depth</i> of a tree</span> defined to be
    - the length of the longest path from the root to a leaf,
    - so a tree consisting only of the root node has a depth of 0.
    - The depth of an empty tree can be taken to be -1.

---

A <span style="color: red"><i>perfectly balanced</i></span> tree

![](img/Pasted_image_20260407154519.png)

For <span style="color: red"><i>n</i> nodes</span>, searches take no more than $\underline{\textcolor{red}{(1 + log~n)}}$ steps.
- This is described as a $\textcolor{red}{O(log~n)}$ <span style="color: red">algorithm</span> and it is a lot faster than an algorithm with $n$ steps, which would be $O(n)$.

## Self-balancing trees

- A balanced tree offers better access time, but re-balancing a tree takes time, so it is a trade-off.
- This has led to a variety of engineering solutions for self-balancing trees.These include:
    - <span style="color: red">“AVL” trees:</span> G. M. Adelson-Velskii and E. M. Landis, 1962
    - <span style="color: red">“Red-black” trees:</span> Rudolf Bayer (1972).
    - <span style="color: red">"Symmetric binary B-Trees: Data structure and maintenance algorithms".</span> Acta Informatica. 1 (4): 290-306

## `TreeMap`

- The provided Java collection class `TreeMap` implements the interface `Map`.
- It uses a *Red-Black* tree and offers $\textcolor{red}{O(log~n)}$ access time.
    - <span style="color: orange">Note: <i>HashMap</i> can offer</span> $\textcolor{orange}{O(1)}$ <span style="color: orange">access time.</span>
- But it is possible to iterate through a `TreeMap` accessing the values in order; this is not possible with a `HashMap`.

## Access Time

- Searching is faster in a binary search tree, just as *binary search* in a sorted array is faster than linear search.
- There is a trade-off: cost of keeping tree balanced versus cost of searches.
- It is easy to sort numbers using a binary search tree - <span style="color: red">why and how?</span>

## Requirements

- What you want to achieve by the end of this week's work:
    - understand binary trees
    - understand binary search trees
    - know the difference!
    - be able to write recursive functions on trees.

> [!QUESTION] Thingking Question
> 以下二叉树的区别：
> 
> 完美二叉树（perfect binary tree）
> 
> 完全二叉树（complete binary tree）
> 
> 完满二叉树（full binary tree）
