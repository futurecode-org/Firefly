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

# Exercises AVL Tree AVL 树练习

An AVL tree is a type of self-balancing binary search tree. The defining characteristic of an AVL tree is its strict balance condition. For every node in the tree, the heights of its left and right subtrees can differ by at most one. This height difference is known as the balance factor.  
AVL 树是一种自平衡二叉搜索树。其核心特征是严格平衡条件：对于树中的每个节点，左右子树高度差最多为 1。这个高度差称为平衡因子（balance factor）。

- Balance Factor = Height(Left Subtree) - Height(Right Subtree)<br>平衡因子 = 左子树高度 - 右子树高度

For a tree to be a valid AVL tree, the balance factor of every node must be -1, 0, or 1.  
要成为合法 AVL 树，每个节点的平衡因子都必须是 -1、0 或 1。

- Balance Factor = 0: The left and right subtrees have the same height.<br>平衡因子 = 0：左右子树等高。
- Balance Factor = 1: The left subtree is one level higher than the right.<br>平衡因子 = 1：左子树比右子树高一层。
- Balance Factor = -1: The right subtree is one level higher than the left.<br>平衡因子 = -1：右子树比左子树高一层。

If an insertion or deletion operation causes any node's balance factor to become 2 or -2, the tree is considered unbalanced and must be restructured through a process called rotation to restore the AVL property.  
若插入或删除导致某节点平衡因子变为 2 或 -2，则该树视为失衡，必须通过“旋转（rotation）”重构以恢复 AVL 性质。

Download the code provided on the website, organise your folders, and get a project set up as usual. You should now see the following files in the project:  
下载网站提供的代码，整理好文件夹，并按常规方式完成项目搭建。此时项目中应包含以下文件：

- `AVLTree.java` – a class representing AVL trees of integers<br>`AVLTree.java`：表示整数 AVL 树的类
- `Main.java` – a class of the main program<br>`Main.java`：主程序类

## Exercise 1 – Inserting 练习 1：插入

Following the logic of building a BST, implement the  
按照构建 BST 的逻辑，实现：

- `insert(Node n, int val)`

function, which can build the tree as a regular binary search tree.  
该函数用于按普通二叉搜索树方式构建树。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 2 – Height 练习 2：高度

Implement the  
实现：

- `height(Node n)`

function, that can calculate the height of the tree rooted at the node.  
该函数用于计算以该节点为根的子树高度。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 3 – Update the balance factor 练习 3：更新平衡因子

Implement the  
实现：

- `updateBF(Node n)`

function that can update the node's balance factor.  
该函数用于更新节点的平衡因子。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 4 – Basic rotation 练习 4：基础旋转

Inserting a new node into an AVL tree may change the balance of the tree. There are four imbalanced scenarios: LL, RR, LR, and RL cases. To balance the imbalanced tree, there are two basic ways to rebalance the tree that suit different scenarios, which are called left rotation and right rotation.  
向 AVL 树插入新节点后，树的平衡可能被破坏。常见四种失衡场景：LL、RR、LR、RL。为恢复平衡，需要根据场景采用两种基本旋转方式：左旋与右旋。

Implement the  
实现：

- `rightRotate (Node n)`
- `leftRotate(Node n)`

functions that can rotate the imbalanced tree rooted at the node.  
这些函数用于对以该节点为根的失衡子树执行旋转。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 5 – Rebalance 练习 5：重平衡

Implement the  
实现：

- `rebalance (Node n)`

function that can apply two basic rotation functions to rebuild the balance of the tree, depending on 4 different imbalanced scenarios.  
该函数可根据 4 种失衡场景，组合使用两种基础旋转来恢复树平衡。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 6 – Rebalance 练习 6：插入后重平衡

Modify the `insert` function to make the tree rebalance when inserting a new node into the tree.  
修改 `insert` 函数，使得插入新节点后树能够自动重平衡。
- Update the balance factor of the node when the subtree is changed after inserting a new node.<br>在插入导致子树变化后，更新该节点平衡因子。
- Rebalance the subtree.<br>对子树执行重平衡。

> [!SUCCESS] Reference Answer 参考答案
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

## Exercise 7 – Execution 练习 7：运行与验证

Completing the AVLTree class, we can then build an AVL tree in the main program.  
完成 AVLTree 类后，就可以在主程序中构建 AVL 树。

- Build an integer AVL tree using the data set {10, 20, 30, 40, 50, 25} in sequence.<br>按顺序使用数据集 {10, 20, 30, 40, 50, 25} 构建整数 AVL 树。
- Using the preorder and inOrder functions provided to traverse the tree built, to observe the sequence of nodes and the corresponding balance factor of each node.<br>使用提供的 preorder 和 inOrder 函数遍历该树，观察节点序列及各节点平衡因子。
- Build an integer AVL tree using the data set {10, 20, 30, 40, 50, 25, 35} in sequence.<br>按顺序使用数据集 {10, 20, 30, 40, 50, 25, 35} 再构建一棵整数 AVL 树。
- Using the preorder and inOrder functions provided to traverse the tree built, to observe the sequence of nodes and the corresponding balance factor of each node.<br>同样使用 preorder 和 inOrder 遍历，观察节点序列及对应平衡因子。
- To sketch the two trees out respectively, to compare and check whether the results are good or not.<br>分别画出两棵树，进行对比并检查结果是否合理。

## Reference Answer (Full Version) 参考答案（完整版）

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
