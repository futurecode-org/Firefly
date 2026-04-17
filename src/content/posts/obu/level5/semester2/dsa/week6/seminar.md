---
title: "Exercises AVL Tree"
published: 2026-04-16
# updated: 
description: "Data Structures and Algorithms Seminar6: Exercises AVL Tree"
image: ./143011748.png
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

# Exercises AVL Tree

An AVL tree is a type of self-balancing binary search tree, The defining characteristic of an AVL tree is its strict balance condition. For every node in the tree, the heights of its left and right subtrees can differ by at most one. This height difference is known as the balance factor.

- Balance Factor = Height(Left Subtree) - Height(Right Subtree)

For a tree to be a valid AVL tree, the balance factor of every node must be -1, 0, or 1.

- Balance Factor = 0: The left and right subtrees have the same height.
- Balance Factor = 1: The left subtree is one level higher than the right.
- Balance Factor = -1: The right subtree is one level higher than the left.

If an insertion or deletion operation causes any node's balance factor to become 2 or -2, the tree is considered unbalanced and must be restructured through a process called rotation to restore the AVL property.

Download the code provided on the website, organise your folders, and get a project set up as usual. You should now see the following files in the project:

- `AVLTree.java` – a class representing AVL trees of integers
- `Main.java` – a class of the main program  

## Exercise 1 – Inserting

Following the logic of building a BST, implement the

- `insert(Node n, int val)`

function, which can build the tree as a regular binary search tree.

> [!SUCCESS] Reference Answer
> ```java
> private Node insert(Node n, int val) {
>     // Standard BST insertion (no balancing here) ---
>     // If we've reached a null spot, create and return a new node.
>     if (n == null) {
>         return new Node(val);
>     }
>     // Otherwise, recurse down the tree to find the insertion spot.
>     if (val < n.data) {
>         n.left = insert(n.left, val);
>     } else if (val > n.data) {
>         n.right = insert(n.right, val);
>     } else {
>     // Duplicate value: do nothing (ignore duplicates).
>     // Could also handle counts or allow duplicates on one side if desired.
>     }
>     return n;
> }
> ```

## Exercise 2 – Height

Implement the

- `height(Node n)`

function, that can calculate the height of the tree rooted at the node.

> [!SUCCESS] Reference Answer
> ```java
> private int height(Node n) {
>     // Return the height of the subtree rooted at n.
>     // Definition used here: empty tree has height 0, leaf has height 1.
>     if (n == null) {
>         return 0;
>     }
>     int lh = height(n.left);
>     int rh = height(n.right);
>     return Math.max(lh, rh) + 1;
> }
> ```

## Exercise 3 – Update the balance factor

Implement the

- `updateBF(Node n)`

function that can update the node's balance factor.

> [!SUCCESS] Reference Answer
> ```java
> private void updateBF(Node n) {
>     // Update balance factors for all nodes in the subtree rooted at n.
>     if (n == null) {
>         return;
>     }
>     
>     // Update children first (post-order) so their heights are available.
>     updateBF(n.left);
>     updateBF(n.right);
>     
>     int lh = height(n.left);
>     int rh = height(n.right);
>     n.bf = lh - rh; // balance factor = height(left) - height(right)
> }
> ```

## Exercise 4 – Basic rotation

Inserting a new node into an AVL tree may change the balance of the tree. There are four imbalanced scenarios: LL, RR, LR, and RL cases. To balance the imbalanced tree, there are two basic ways to rebalance the tree that suit different scenarios, which are called left rotation and right rotation.

Implement the

- `rightRotate (Node n)`
- `leftRotate(Node n)`

functions that can rotate the imbalanced tree rooted at the node.

> [!SUCCESS] Reference Answer
> ```java
> private Node rightRotate(Node original) { // Right Rotate for LL case
>     // original is the root of the unbalanced subtree (y)
>     // x = original.left will become the new root of this subtree
>     if (original == null || original.left == null) {
>         return original;
>     }
> 
>     Node x = original.left;
>     Node t2 = x.right;
> 
>     // Perform rotation
>     x.right = original;
>     original.left = t2;
> 
>     // Update balance factors for the affected subtree
>     updateBF(x);
> 
>     return x;
> }
> 
> private Node leftRotate(Node original) { // Left Rotate for RR case
>     // original is the root of the unbalanced subtree (x)
>     // y = original.right will become the new root of this subtree
>     if (original == null || original.right == null) {
>         return original;
>     }
> 
>     Node y = original.right;
>     Node t2 = y.left;
> 
>     // Perform rotation
>     y.left = original;
>     original.right = t2;
> 
>     // Update balance factors for the affected subtree
>     updateBF(y);
> 
>     return y;
> }
> ```

## Exercise 5 – Rebalance

Implement the

- `rebalance (Node n)`

function that can apply two basic rotation functions to rebuild the balance of the tree, depending on 4 different imbalanced scenarios.

> [!SUCCESS] Reference Answer
> ```java
> private Node rebalance(Node n) {
>     if (n == null) {
>         return null;
>     }
> 
>     int lh = height(n.left);
>     int rh = height(n.right);
>     int bf = lh - rh;
> 
>     // LL Case
>     if (bf > 1) {
>     // Determine whether it's LL or LR by comparing heights of left's children
>         int llh = height(n.left.left);
>         int lrh = height(n.left.right);
>         if (llh >= lrh) {
>             // LL
>             n = rightRotate(n);
>         } else {
>             // LR: left then right
>             n.left = leftRotate(n.left);
>             n = rightRotate(n);
>         }
>     }
>     // RR Case
>     else if (bf < -1) {
>     // Determine whether it's RR or RL by comparing heights of right's children
>         int rrh = height(n.right.right);
>         int rlh = height(n.right.left);
>         if (rrh >= rlh) {
>             // RR
>             n = leftRotate(n);
>         } else {
>             // RL: right then left
>             n.right = rightRotate(n.right);
>             n = leftRotate(n);
>         }
>     }
> 
>     // Ensure balance factors updated for this subtree
>     updateBF(n);
>     return n;
> }
> ```

## Exercise 6 – Rebalance

Modify the `insert` function to make the tree rebalance when inserting a new node into the tree.
- Update the balance factor of the node when the subtree is changed after inserting a new node.
- Rebalance the subtree.

> [!SUCCESS] Reference Answer
> ```java
> private Node insert(Node n, int val) {
>     // Standard BST insertion (no balancing here) ---
>     // If we've reached a null spot, create and return a new node.
>     if (n == null) {
>         return new Node(val);
>     }
> 
>     // Otherwise, recurse down the tree to find the insertion spot.
>     if (val < n.data) {
>         n.left = insert(n.left, val);
>     } else if (val > n.data) {
>         n.right = insert(n.right, val);
>     } else {
>         // Duplicate value: do nothing (ignore duplicates).
>         return n;
>     }
> 
>     // Update this node's balance factor after insertion into a subtree
>     n.bf = height(n.left) - height(n.right);
> 
>     // Rebalance this subtree if needed and return the (possibly new) root
>     return rebalance(n);
> }
> ```

## Exercise 7 – Execution

Completing the AVLTree class, we can then build an AVL tree in the main program.

- Build an integer AVL tree using the data set {10, 20, 30, 40, 50, 25} in sequence.
- Using the preorder and inOrder functions provided to traverse the tree built, to observe the sequence of nodes and the corresponding balance factor of each node.
- Build an integer AVL tree using the data set {10, 20, 30, 40, 50, 25, 35} in sequence.
- Using the preorder and inOrder functions provided to traverse the tree built, to observe the sequence of nodes and the corresponding balance factor of each node.
- To sketch the two trees out respectively, to compare and check whether the results are good or not.

## Reference Answer (Full Version)

```java
// AVLTree.java
public class AVLTree {
    private Node root;

    private static class Node {
        int data;
        int bf;
        Node left;
        Node right;

        Node(int d) {
            data = d;
            left = null;
            right = null;
            bf = 0;
        }
    }

    public AVLTree() {
        root = null;
    }

    public Node getRoot() {
        return root;
    }

    private int height(Node n) {
        // Return the height of the subtree rooted at n.
        // Definition used here: empty tree has height 0, leaf has height 1.
        if (n == null) {
            return 0;
        }
        int lh = height(n.left);
        int rh = height(n.right);
        return Math.max(lh, rh) + 1;
    }

    private void updateBF(Node n) {
        // Update balance factors for all nodes in the subtree rooted at n.
        if (n == null) {
            return;
        }

        // Update children first (post-order) so their heights are available.
        updateBF(n.left);
        updateBF(n.right);

        int lh = height(n.left);
        int rh = height(n.right);
        n.bf = lh - rh; // balance factor = height(left) - height(right)
    }

    // Rotation implements
    // Right Rotate for LL case
    private Node rightRotate(Node original) {
        // original is the root of the unbalanced subtree (y)
        // x = original.left will become the new root of this subtree
        if (original == null || original.left == null) {
            return original;
        }

        Node x = original.left;
        Node t2 = x.right;

        // Perform rotation
        x.right = original;
        original.left = t2;

        // Update balance factors for the affected subtree
        updateBF(x);

        return x;
    }

    // Left Rotate for RR case
    private Node leftRotate(Node original) {
        // original is the root of the unbalanced subtree (x)
        // y = original.right will become the new root of this subtree
        if (original == null || original.right == null) {
            return original;
        }

        Node y = original.right;
        Node t2 = y.left;

        // Perform rotation
        y.left = original;
        original.right = t2;

        // Update balance factors for the affected subtree
        updateBF(y);

        return y;
    }

    private Node rebalance(Node n) {
        if (n == null) {
            return null;
        }

        int lh = height(n.left);
        int rh = height(n.right);
        int bf = lh - rh;

        // LL Case
        if (bf > 1) {
            // Determine whether it's LL or LR by comparing heights of left's children
            int llh = height(n.left.left);
            int lrh = height(n.left.right);
            if (llh >= lrh) {
                // LL
                n = rightRotate(n);
            } else {
                // LR: left then right
                n.left = leftRotate(n.left);
                n = rightRotate(n);
            }
        }
        // RR Case
        else if (bf < -1) {
            // Determine whether it's RR or RL by comparing heights of right's children
            int rrh = height(n.right.right);
            int rlh = height(n.right.left);
            if (rrh >= rlh) {
                // RR
                n = leftRotate(n);
            } else {
                // RL: right then left
                n.right = rightRotate(n.right);
                n = leftRotate(n);
            }
        }

        // Ensure balance factors updated for this subtree
        updateBF(n);
        return n;
    }

    private Node insert(Node n, int val) {

        // Standard BST insertion (no balancing here) ---
        // If we've reached a null spot, create and return a new node.
        if (n == null) {
            return new Node(val);
        }

        // Otherwise, recurse down the tree to find the insertion spot.
        if (val < n.data) {
            n.left = insert(n.left, val);
        } else if (val > n.data) {
            n.right = insert(n.right, val);
        } else {
            // Duplicate value: do nothing (ignore duplicates).
            return n;
        }

        // Update this node's balance factor after insertion into a subtree
        n.bf = height(n.left) - height(n.right);

        // Rebalance this subtree if needed and return the (possibly new) root
        return rebalance(n);
    }

    public void insert(int val) {
        root = insert(root, val);
    }

    //pre-order traversal
    public void preOrder(Node n) {
        if (n != null) {
            System.out.println("Node " + n.data + "(bf is " + n.bf + ")");
            preOrder(n.left);
            preOrder(n.right);
        }
    }

    //in-order traversal
    public void inOrder(Node n) {
        if (n != null) {
            inOrder(n.left);
            System.out.println("Node " + n.data + "(bf is " + n.bf + ")");
            inOrder(n.right);
        }
    }

    // Pretty-print the tree structure (rotated, root in the middle)
    public void printTree() {
        printTree(root, "", true);
    }

    private void printTree(Node node, String prefix, boolean isLeft) {
        if (node == null) return;

        if (node.right != null) {
            printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }

        System.out.println(prefix + (isLeft ? "└── " : "┌── ") + node.data + "(bf is " + node.bf + ")");

        if (node.left != null) {
            printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    // Top-down layout printing (nodes roughly positioned according to inorder index)
    public void printTopDown() {
        if (root == null) {
            System.out.println("<empty>");
            return;
        }

        java.util.Map<Node, Integer> pos = new java.util.HashMap<>();
        java.util.Map<Node, Integer> depth = new java.util.HashMap<>();
        int[] counter = new int[]{0};
        int[] maxDepth = new int[]{0};

        // inorder traversal to assign horizontal positions
        assignPos(root, 0, pos, depth, counter, maxDepth);

        int maxPos = counter[0] - 1;

        // determine max width of any node's string to handle multi-digit numbers
        int maxNumWidth = 0;
        java.util.Map<Node, String> strMap = new java.util.HashMap<>();
        for (Node n : pos.keySet()) {
            String s = String.valueOf(n.data);
            strMap.put(n, s);
            if (s.length() > maxNumWidth) maxNumWidth = s.length();
        }

        int colWidth = Math.max(3, maxNumWidth + 2); // space per column
        int cols = Math.max(1, maxPos + 1) * colWidth + 1;

        int h = maxDepth[0] + 1;
        // precompute horizontal start positions for each node (centered within its column)
        java.util.Map<Node, Integer> startPos = new java.util.HashMap<>();
        for (java.util.Map.Entry<Node, Integer> e : pos.entrySet()) {
            int p = e.getValue();
            int base = p * colWidth;
            String s = strMap.get(e.getKey());
            int start = base + (colWidth - s.length()) / 2;
            startPos.put(e.getKey(), start);
        }

        for (int d = 0; d < h; d++) {
            char[] line = new char[cols];
            java.util.Arrays.fill(line, ' ');
            // place node values centered in their columns
            for (java.util.Map.Entry<Node, Integer> e : pos.entrySet()) {
                Node n = e.getKey();
                if (depth.get(n) == d) {
                    int p = startPos.get(n);
                    String s = strMap.get(n);
                    for (int i = 0; i < s.length() && p + i < cols; i++) line[p + i] = s.charAt(i);
                }
            }
            // draw connectors on the same row as parent node using ┌── and ──┐ style
            for (java.util.Map.Entry<Node, Integer> e : pos.entrySet()) {
                Node n = e.getKey();
                if (depth.get(n) == d) {
                    int pStart = startPos.get(n);
                    String s = strMap.get(n);
                    int pCenter = pStart + s.length() / 2;

                    // place connectors just outside the parent's printed string to avoid overwriting digits
                    int pLeft = pStart;
                    int pRight = pStart + s.length() - 1;

                    if (n.left != null) {
                        int cStart = startPos.get(n.left);
                        String cs = strMap.get(n.left);
                        int cCenter = cStart + cs.length() / 2;
                        int end = pStart - 1; // stop before parent
                        int from = Math.min(cCenter, end);
                        int to = Math.max(cCenter, end);
                        for (int k = from; k <= to && k >= 0 && k < cols; k++) {
                            if (line[k] == ' ') line[k] = '─';
                        }
                        if (cCenter >= 0 && cCenter < cols) line[cCenter] = '┌';
                    }

                    if (n.right != null) {
                        int cStart = startPos.get(n.right);
                        String cs = strMap.get(n.right);
                        int cCenter = cStart + cs.length() / 2;
                        int start = pStart + s.length(); // start after parent
                        int from = Math.min(start, cCenter);
                        int to = Math.max(start, cCenter);
                        for (int k = from; k <= to && k >= 0 && k < cols; k++) {
                            if (line[k] == ' ') line[k] = '─';
                        }
                        if (cCenter >= 0 && cCenter < cols) line[cCenter] = '┐';
                    }
                }
            }
            System.out.println(new String(line).replaceAll("\s+$", ""));
        }
    }

    private void assignPos(Node n, int d, java.util.Map<Node, Integer> pos, java.util.Map<Node, Integer> depth, int[] counter, int[] maxDepth) {
        if (n == null) return;
        assignPos(n.left, d + 1, pos, depth, counter, maxDepth);
        pos.put(n, counter[0]++);
        depth.put(n, d);
        if (d > maxDepth[0]) maxDepth[0] = d;
        assignPos(n.right, d + 1, pos, depth, counter, maxDepth);
    }
}
```

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        AVLTree test = new AVLTree();
        test.insert(10);
        test.insert(20);
        test.insert(30);
        test.insert(40);
        test.insert(50);
        test.insert(25);

        System.out.println("following is pre-order traversal");
        test.preOrder(test.getRoot());
        System.out.println("following is in-order traversal");
        test.inOrder(test.getRoot());

    }
}
```

```java
// TestAVL.java
public class TestAVL {
    public static void main(String[] args) {
        // Dataset 1: {10, 20, 30, 40, 50, 25}
        AVLTree t1 = new AVLTree();
        int[] vals1 = {10, 20, 30, 40, 50, 25};
        for (int v : vals1) t1.insert(v);
        System.out.println("Dataset 1: {10,20,30,40,50,25}");
        System.out.println("In-order:");
        t1.inOrder(t1.getRoot());
        System.out.println("Pre-order:");
        t1.preOrder(t1.getRoot());
        System.out.println("Tree structure:");
        t1.printTree();
        System.out.println("Top-down layout:");
        t1.printTopDown();

        System.out.println();
        // Dataset 2: {10, 20, 30, 40, 50, 25, 35}
        AVLTree t2 = new AVLTree();
        int[] vals2 = {10, 20, 30, 40, 50, 25, 35};
        for (int v : vals2) t2.insert(v);
        System.out.println("Dataset 2: {10,20,30,40,50,25,35}");
        System.out.println("In-order:");
        t2.inOrder(t2.getRoot());
        System.out.println("Pre-order:");
        t2.preOrder(t2.getRoot());
        System.out.println("Tree structure:");
        t2.printTree();
        System.out.println("Top-down layout:");
        t2.printTopDown();
    }
}
```
