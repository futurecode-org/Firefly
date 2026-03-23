---
title: "Data Structures and Algorithms Week2: Binary search, Sorting and Linked list"
published: 2026-03-16
# updated: 
description: "Binary search, Sorting and Linked list"
image: ./136884931_p0.jpg
tags: []
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

# Binary search

## Simple in principle <span style="color: orange">but</span> Hard in practice

<center>Programming Pearls: Jon Bentley</center>
<center>Binary Search</center>
<center><a href="https://www.solipsys.co.uk/new/BinarySearchReconsidered.html#toc_name000" target="_blank">https://www.solipsys.co.uk/new/BinarySearchReconsidered.html#toc_name000</a></center>

- “Professional programmers had a couple of hours to convert the above description (binary search) into a program in the language of their choice ...
- At the end of the specified time, almost all the programmers reported that they had correct code for the task ...
- ninety percent of the programmers found bugs in their programs.”

## Principle

Efficient search in a sequence.  
Requirement (pre-condition): <span style="color: red">The sequence must be <i>ordered</i>.</span>
![](img/Pasted_image_20260317201430.png)
This version is by Prof. Niklaus Wirth  
It is surprisingly efficient and easy to show to be correct

## Pre-condition

![](img/Pasted_image_20260317201634.png)
The sequence in the array must be _ordered_.

```java
T a[N]; (* a[0] to a[N-1] *)
/* T is any type for which < == ... defined, such as int */
/* precondition:
    0 <=size <= N &
    (∀i: 0 < i < size: a[i-1] <=a[i]) */
```

## Invariant

![](img/Pasted_image_20260317202305.png)

```java
/* precondition: 0 <=size <= N &
(∀i: 0 < i < size: a[i-1] <= a[i]) */
int left, right; /* 0 ... size */
/* invariant: precondition &
    a[0 ... left–1] < x &  // all before left are less than x
    a[right ... size-1] >= x*/
```
<span style="color: red">all from <i>right</i> up to <i>size-1</i> are at least as big as x</span>

## Initially

![](img/Pasted_image_20260317202826.png)

```java
left = 0; right = size;
/* makes empty segments */
```

## Finally

![](img/Pasted_image_20260317203013.png)
![](img/Pasted_image_20260317203239.png)

## Outline of loop

![](img/Pasted_image_20260317203332.png)

```java
left = 0; right = size;
/* invariant*/
while (left != right) {
    /* invariant & left != right */
    body
    /* invariant */
}
/* (invariant & left == right) => postcondition*/
```

## Body: Inspect mid element

![](img/Pasted_image_20260317203653.png)

```java
int mid;
…
mid = (left + right) / 2;
a[mid] < x ?     left = mid +1;
a[mid] >= x ?    right = mid;
```

## Body: Inspect *mid* element

![](img/Pasted_image_20260317204134.png)

```java
left = 0; right = size;
while (left != right) { /* invariant and left != right */
    mid = (left + right) / 2;
    if (a[mid] < x) left = mid + 1;
    else right = mid;
    /* invariant */
}
```

## At the end

![](img/Pasted_image_20260317204219.png)

<span style="color: red"><i>left</i> == <i>right</i> and so found if <i>a[left]</i> == x,</span>
<span style="color: red">(or <i>a[right]</i> == x, since <i>left</i> == <i>right</i>)</span>

---

![](img/Pasted_image_20260317204458.png)

<span style="color: red"><i>left</i> == <i>right</i> and so <span style="color: orange">found</span> if <i>a[left]</i> == <i>x</i></span>
<span style="color: red">(or <i>a[right]</i> == <i>x</i>)</span>
what if *right* never moved. <span style="color: red">All elements &lt; x</span>, as in picture?
Correct? <span style="color: red">No</span>: we need to be sure that:
```
0 <= left < size
```

## The algorithm

![](img/Pasted_image_20260317205153.png)

```java
left = 0; right = size;
while (left != right) { /* invariant and left != right */
    mid = (left + right) / 2;
    if (a[mid] < x) left = mid + 1;
    else right = mid;
    /* invariant */
}
found = (left != size) && (a[left] == x);
```

## Proving that it terminates: Bound

![](img/Pasted_image_20260317205502.png)

Length of <span style="color: grey">grey area</span> is reduced each time, so *bound* is *right* - *left*

Each time the body is carried out:  
either *left* gets bigger, or  
*right* gets smaller  
So eventually left == right and it terminates.

## O(?)

![](img/Pasted_image_20260317205659.png)

Length of <span style="color: grey">grey area</span> is <i><span style="color: red">halved</span></i> each time, so the time complexity of the binary search algorithm is?
$$O(log~n)$$

## Efficiency

“Not found” takes more iterations\* than versions of binary search that terminate as soon as an *x* is found.

However, each iteration requires *only* one access of the array; so more efficient.

Useful consequence:
finds first (lowest-indexed) x

<i><span style="color: red">Thinking question: How many more iterations?</span></i>
## Just one more thing …

![](img/Pasted_image_20260317210138.png)
There is still a problem!
left + right might lead to <span style="color: red">numeric overflow</span>;
This can be avoided by using a bit of algebra:
$$middle = \frac{left + right}{2} = left + \frac{right-left}{2}$$
<span style="color: red">The expression on the right side will not overflow, since its value never exceeds that of right.</span>

## So finally …

```java
left = 0; right = size;
while (left != right) { /* invariant and left != right */
    mid = left + (right - left) / 2;
    if (a[mid] < x) left = mid + 1;
    else right = mid;
    /* invariant */
}
found = (left != size) && (a[left] == x);
```

## Summary

**After studying the material of this lecture and the associated parts of the textbook and attempting the exercises, you should be able to:**

**Explain what is meant by a binary search**

**Understand the** **_precondition_** **of a binary search.**

**Correctly** **_implement_** **a binary search given a suitable loop invariant.**

## Practical exercise

- Problem:<br>Input $n(𝑛 ≤ 10^6)$ non-negative integers $𝑎_1, 𝑎_2, 𝑎_3, ……, 𝑎_𝑛, (𝑎_𝑖 ≤ 10^9)$, which are monotonically non-decreasing. Then perform $m(m ≤ 10^5)$ queries. For each query, an integer $q(q ≤ 10^9)$ is given. You are required to output the index of the first occurrence of this number q in the sequence. If it is not found, output -1.

---

- Input:
    - The first line contains two integers n and m, representing the number of integers and the number of queries.
    - The second line contains n integers, representing the numbers to be queried.
    - The third line contains m integers, representing the indices of the numbers to be queried.
    - Example:
```console
11 2
1 3 3 5 7 9 11 13 15 15
3 12
find q[j] 3 at 1
find q[j] 12 at -1
```

# Sorting

## Content

- 'Straight' sorting
    - Why straight sorting is not very good
- Quicksort
    - Who discovered it
    - Why is it so quick
    - When it is ‘Slowsort’

## Typical scenario

- **I sort coursework submissions manually into alphabetical order of author.**
    - I took 30 minutes to sort 25 students.
    - How long do you estimate the sorting for 50 students will take him?
<center><span style="color: red">2 hours!</span></center>
- Most sorting algorithms are $O(n^2)$, that is, time is proportional to number of records _squared_, so if _n_ doubles the sorting takes <span style="color: red">4</span> times as long

## Insertion Sort

**This 'straight' sorting method works by inserting the next item of the unsorted stretch of a sequence into the already-sorted first stretch of the sequence.**

![](img/Pasted_image_20260316164442.png)
<center>Insert x to the appropriated position</center>

```java
// post a[0..size-1] is ascending
void insertionSort(int [ ] a) {
    int i= 1; int x; int j;
    while (i < a.length) {
        // a[0..i-1] is ascending
        // insert value at a[i] into correct position in a[0..i-1]
        j= i; x= a[i]; // x is the value originally at a[i]
        while (j != 0 && a[j-1] > x) {
            // 'budge up' values that are bigger than the one at a[i]
            a[j]= a[j-1]; j--;
        } // j == 0 OR a[j-1] <= x
        // 'drop in' x, the value that was at a[j]
        a[j]= x;
        i++; // advance to insert next value
    } // i >= a.length
}
```

### Performance of Insertion Sort

- The insertion sort has a <i><span style="color: red">while loop</span></i> iterating through all <i><span style="color: red">n</span></i> elements of the sequence.
- Within that it has another <i><span style="color: red">while loop</span></i> iterating though all the elements <i><span style="color: red">before</span></i> the one to be inserted
- So the performance is proportional to <i><span style="color: red">n<sup>2</sup></span></i>.

## Simple sorting methods

- Simple (naïve) sorting methods such as <i><span style="color: red">selection sort</span></i>, <i><span style="color: red">insertion sort and ‘bubble sort’</span></i> are O(n<sup>2</sup>) – that means they take time proportional to the size of the sequence squared.
- They only move values <span style="color: blue">a short distance on each pass</span>.

## Quicksort: discoverer

- He called it ‘Quicksort’ because it is dramatically quick.
- Machine translation: ‘To assist in efficient look-up of words in a dictionary, he discovered the well-known sorting algorithm Quicksort’.

![](img/Pasted_image_20260316165504.png)
Professor Sir Tony Hoare FRS

> <span style="color: blue">C.A.R. Hoare, “Quicksort”, The Computer J.,Vol. 5, No. 1, Apr. 1962, pp. 10-15.</span>

### Quicksort

- **Works in place –**
    - no extra storage space needed.
- **Not stable –**
    - does not preserve the order of records with same keys is dramatically fast!

### Inspiration comes from

- <b>If we had values that we knew to be in <i><span style="color: red">completely the wrong order</span></i>, we could <span style="color: blue">reverse the order in n/2 steps</span>:</b>
- start at the ends and swap elements until we reach the middle.
- **We don’t usually have completely mis-ordered lists, but it gives the idea for Quicksort.**

### Partitioning

- **To sort array *a*:**
    - Pick any item at random, call it <span style="color: red">x</span> (the <span style="color: blue">pivot</span>)
    - Scan array from left until an item <span style="color: red">a<sub>i</sub> &gt; x</span> is found
    - Scan array from right until an item <span style="color: red">a<sub>j</sub> &lt; x</span> is found
    - Now exchange the two items and continue this ‘scan and swap’ process until the two scans meet somewhere in the middle of the array.
- actually we use <span style="color: red">a<sub>i</sub> &gt;= x</span> and <span style="color: red">a<sub>i</sub> &lt;= x</span> to simplify <span style="color: blue">loop guards（循环约束）</span>

---

- The result is that the array is now ‘partitioned’ into a
    - left part with keys all less than or equal to x
    - and a right part with keys all greater than or equal to x.
- These two parts can now be separately sorted – by Quicksort!

```java
void quicksort(int [ ] a, int low, int high) {
    int i= low, j= high, temp;
    int pivot= a[(low + high) / 2];
    while (i <= j) {
        while (a[i] < pivot) i++;
        while (a[j] > pivot) j--;
        // forall k :low ..i -1: a[k] < pivot && forall k: j+1 .. high: a[k] > pivot &&
        // a[i] >= pivot && a[j] <= pivot
        if (i <= j) {
            temp= a[i]; a[i]= a[j]; a[j]= temp;
            i++; j--;
        }
    }
…
}
```

### Now <i><span style="color: orange">partition</span></i> the <i><span style="color: orange">partitions</span></i>

- We have only <i><span style="color: orange">partitioned</span></i>, but we wish to <i><span style="color: orange">sort</span></i>.
- Repeat the partitioning process on each of the partitions until left with a partition of only one element
- method <i><span style="color: red">quicksort</span></i> activates itself <i><span style="color: red">recursively</span></i>.

### Quicksort

```java
void quicksort(int [ ] a, int low, int high) {
    int i= low, j= high, temp;
    int pivot= a[(low + high) / 2];
    while (i < j) {
        while (a[i] < pivot) i++;
        while (a[j] > pivot) j--;
        if (i <= j) {
            temp= a[i]; a[i]= a[j]; a[j]= temp;
            i++; j--;
        }
    }
    if (low < j) quicksort(a,low, j); // recursive call
    if (i < high) quicksort(a, i, high); // recursive call
}
```

> [!INFO] Info
> recursive 递归的
> 
> recursion 递归

> [!TIP] Tip
> Time complexity: 
> 
> average: $O(n~log~n)$
> 
> worst: $O(n^2)$

> [!CHECK] Principal
> 1. i, j = position
> 2. pivot is data, compare with others
> 3. right place: move on / wrong place: i, j stop, swap
> 4. left right

#### Getting it started

```java
void sort(int [ ] a) {
    quicksort(a, 0, a.length-1);
}
```

### Analysis of Quicksort

- Average performance is $O(n\times log~n)$
- Worst case:
    - when data is already ordered, performance becomes $O(n^2)$ unless middle element chosen as pivot.
    - Worst-case performance is improved by choosing middle element as pivot
$$a[\frac{left + right}{2}]$$

## Comparison of sorting

- **‘Straight’, ‘naïve’ sorts —— $O(n^2)$** 
- **‘logarithmic sorts’ (_Quicksort_) —— $O(n\times log~n)$
- **_Bubble sort_** **is the slowest sorting method known! (but has a catchy name)**
- **_Quicksort_** **is one of the fastest.**

### Actual numbers

| $n$   | $n^2$ (Bubblesort) | $n\log_{2}(n)$ (Quicksort) |
| ----- | ------------------ | -------------------------- |
| 32    | 1,024              | 160                        |
| 64    | 4,096              | 384                        |
| 128   | 16,384             | 896                        |
| 256   | 65,536             | 2,048                      |
| 512   | 262,144            | 4,608                      |
| 1,024 | 1,048,576          | 10,240                     |

## References

> C.A.R. Hoare, “Quicksort”, The Computer J.,
> Vol. 5, No. 1, Apr. 1962, pp. 10-15.
> https://portal.acm.org/citation.cfm?id=366644

> The Art of Computer Programming, Vol. 3 – Sorting and Searching
> ISBN 0201896850
> Author Donald E Knuth
> Addison-Wesley

> Zonnon Report
> Zonnon Language Report
> Jürg Gutknecht
> Editors: Brian Kirk and David Lightfoot
> July 2009
> https://www.zonnon.ethz.ch/language/report.html

> From the Communications of the ACM

## Summary

- **After studying the material of this week and attempting the exercises, you should be able to:**
    - understand why straight sorting techniques are not very efficient
    - understand the principle of _Quicksort_ 
    - know the efficiency of _Quicksort_ (average case)
    - know worst-case performance of _Quicksort_

## Better Quicksort (Three-way QuickSort)

```java
public void quickSort3Way(int[] arr, int low, int high) {
    if (low >= high) return;
    int lt = low, i = low + 1, gt = high;
    int pivot = arr[low];
    while (i <= gt) {
        if (arr[i] < pivot) {
            swap(arr, lt++, i++);
        } else if (arr[i] > pivot) {
            swap(arr, i, gt--);
        } else {
            i++;
        }
    }
    quickSort3Way(arr, low, lt - 1);
    quickSort3Way(arr, gt + 1, high);
}
```

## Concurrent Quicksort

```pascal
activity PQuickSort(L, R: integer);
var i, j: integer; w, x: ElementOfArray;
begin i := L; j := R;
  x := MyArray[(L + R) div 2];
  repeat
    while MyArray[i] < x do i := i + 1 end;
    while x < MyArray[j] do j := j - 1 end;
    if i <= j then
      w := MyArray[i];
      MyArray[i] := MyArray[j]; MyArray[j] := w;
      i := i + 1; j := j - 1;
    end
  until i > j;
  if L < j then new PQuickSort(L, j) end; (*new activity – runs in parallel *)
  if i < R then new PQuickSort(i, R) end; (*new activity – runs in parallel *)
end QuickSort;

procedure ConcurrentQS;
begin
(* now instantiate the first activity with initial parameters *)
  new PQuickSort(integer(0), integer(MAX_SIZE - 1));
end ConcurrentQS;
```
* https://www.zonnon.ethz.ch/language/report.html
![](img/Pasted_image_20260317212812.png)
https://www.zonnon.ethz.ch

# Linked list

## Content

- Implementation and efficiency of _ArrayList_
- Linked lists
- Insertion into, and deletion from, linked lists.
- A linked list abstract data type (ADT)
- Recap of _inner classes_
- _Iterators_

## Arraylist under the bonnet

- Defined in the JDK already
```java
// ArrayList.java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
    @java.io.Serial
    private static final long serialVersionUID = 8683452581122892189L;

    /**
     * Default initial capacity.
     */
    private static final int DEFAULT_CAPACITY = 10;

    /**
     * Shared empty array instance used for empty instances.
     */
    private static final Object[] EMPTY_ELEMENTDATA = {};

    /**
     * Shared empty array instance used for default sized empty instances. We
     * distinguish this from EMPTY_ELEMENTDATA to know how much to inflate when
     * first element is added.
     */
    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

    /**
     * The array buffer into which the elements of the ArrayList are stored.
     * The capacity of the ArrayList is the length of this array buffer. Any
     * empty ArrayList with elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA
     * will be expanded to DEFAULT_CAPACITY when the first element is added.
     */
    transient Object[] elementData; // non-private to simplify nested class access

    /**
     * The size of the ArrayList (the number of elements it contains).
     *
     * @serial
     */
    private int size;

    /**
     * Constructs an empty list with the specified initial capacity.
     *
     * @param  initialCapacity  the initial capacity of the list
     * @throws IllegalArgumentException if the specified initial capacity
     *         is negative
     */
    public ArrayList(int initialCapacity) {
        if (initialCapacity > 0) {
            this.elementData = new Object[initialCapacity];
        } else if (initialCapacity == 0) {
            this.elementData = EMPTY_ELEMENTDATA;
        } else {
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        }
    }

    /**
     * Constructs an empty list with an initial capacity of ten.
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }

    /**
     * Constructs a list containing the elements of the specified
     * collection, in the order they are returned by the collection's
     * iterator.
     *
     * @param c the collection whose elements are to be placed into this list
     * @throws NullPointerException if the specified collection is null
     */
    public ArrayList(Collection<? extends E> c) {
        Object[] a = c.toArray();
        if ((size = a.length) != 0) {
            if (c.getClass() == ArrayList.class) {
                elementData = a;
            } else {
                elementData = Arrays.copyOf(a, size, Object[].class);
            }
        } else {
            // replace with empty array.
            elementData = EMPTY_ELEMENTDATA;
        }
    }
```
- An ArrayList “wraps” an array (whose default capacity is 10, but this can be changed)
- The <i><span style="color: red">size</span></i> field keeps track of how many elements in the array actually hold data

## Adding an element to an arraylist

- Case 1: Add to end of list without exceeding capacity
![](img/Pasted_image_20260317233119.png)

- Case 2: Add to end of list and exceed capacity
![](img/Pasted_image_20260317233234.png)

- Case 3: Insert into list
![](img/Pasted_image_20260317233336.png)

## Performance of arraylist

- Adding to an ArrayList can potentially mean that existing data has to be copied from one location in memory to another. This can <span style="color: red">be inefficient when the size of the list is large</span>.
- This problem arises <span style="color: red">because</span> an ArrayList keeps its data in a contiguous block.
![](img/Pasted_image_20260317233630.png)

## Linked lists

- A linked list keeps each of its elements <span style="color: red">in a separate block of memory</span>.
- Each element has a pointer to the next element.
![](img/Pasted_image_20260317233755.png)
<span style="color: blue">Tail of list:</span>
<span style="color: blue">Pointer to next element is <i><span style="color: red">null</span></i></span>

### A Class to represent nodes in linked lists (of Strings)

```java
public class Node {
    String data;
    Node next;
}
```

### Inserting data at the head of a linked list

```java
public static void insertAtHead(String data) {
    Node newNode = new Node();
    newNode.data = data;
    newNode.next = head;
    head = newNode;
}
```

### Inserting data after a particular node

```java
public static void insertAfter(String data, Node insertPoint) {
    Node newNode = new Node();
    newNode.data = data;
    newNode.next = insertPoint.next;
    insertPoint.next = newNode;
}
```

![](img/Pasted_image_20260317234146.png)

---

![](img/Pasted_image_20260317234320.png)

### Deleting the node at the head

```java
public static void deleteHead() {
    head = head.next;
}
```

![](img/Pasted_image_20260317234553.png)

### Deleting the node at a particular point

```java
public static void deleteAfter(Node deletePoint) {
    deletePoint.next = deletePoint.next.next;
}
```

![](img/Pasted_image_20260317234714.png)

### Printing the data in a list

```java
public static void printList() {
    Node current = head;
    while (current != null) {
        System.out.println(current.data);
        current = current.next;
    }
}
```

### Searching in a list

```java
// return first node in list with data value sought,
// or null if not found
public static Node find(String sought) {
    Node current = head;
    while (current != null && !current.data.equals(sought)) {
        current = current.next;
    } // current == null || current.data.equals(sought)
    return current;
}
```

### A simple linked List ADT (Abstract Data Type)

- There is already a LinkedList class in the Java API, but which hides the implementation details from the user.
<span style="background-color: rgb(66, 157, 218)">Now, we try to create our own Linked list</span>  
<span style="background-color: rgb(66, 157, 218)">It will help us comprehend linked list deeper</span>
1. <span style="color: red">Hide the details of the Node class by making it as a private</span> inner class <span style="color: red">of an enclosing LinkedList class</span>
```java
public class StringLinkedList {
    private static class Node {
        String data;
        Node next;
    }
    private Node head;
    …
```

## Brief introduction of Inner classes

- An inner class is defined within another class.
- The differences between inner classes and standard classes are that:
    - Each object of the inner class is associated with an object of the enclosing class and has access to fields and methods of the enclosing object (even private ones).
    - Similarly the enclosing class, has access to the fields and methods of the inner class (even private ones)
    - An inner class can be private.

```java
public class A {
    …
    private class B {
        …
    }
}
```

### Static inner classes

- Normally an instance of an inner class will be associated with an instance of its enclosing class and will have access to non-static fields and methods of that class.
- If the inner class is declared to be static then it is not associated with any particular instance of the enclosing class and therefore only has access to static members of the enclosing class (because those members have the same value for all instances of the class).

```java
public class A {
    private static int i;
    private int j;
    private static class B{
        …
    }
}
```
<span style="background-color: rgb(66, 157, 218)"><span style="color: red">Methods</span> of class B can refer to the static variable i, but not the non-static variable j.</span>

### UML Notation for Inner classes

```java
public class Out {
    …
    private class In {
        …
    }
}
```

![](img/Pasted_image_20260318000809.png)

## Insertion into the linked list

- We previously described two methods:
    - <span style="color: blue">public static void insertAtHead(String data)</span>
    - <span style="color: blue">public static void insertAfter(String data, Node insertPoint)</span>
- The first of these can be made a public method of our linked list class.
- The second would have to be private, because it refers to the Node class, which is now private. What we can do is define a public method like this

```java
public void insert(int index, String data) {
    if (index == 0) {
        insertAtHead(data);
    } else {
        Node insertPoint = head;
        for (int i = 0; i < index - 1; i++) {
            insertPoint = insertPoint.next;
        }
        insertAfter(data, insertPoint);
    }
}
```

## Deletion from the list

- Deletion can be handled in a similar manner to insertion.
- Note that both the insert and delete methods may throw a null pointer exception if the index parameter is out of range.

```java
public void delete(int index) {
    if (index == 0) {
        deleteHead();
    } else {
        Node deletePoint = head;
        for (int i = 0; i < index - 1; i++) {
            deletePoint = deletePoint.next;
        }
        deleteAfter(deletePoint);
    }
}
```

## Iterating through the list

- There are circumstances in which we may need to iterate through all the elements in a list. For example, we might want to print them all or sum them (if they are numeric).
- We could write separate methods for all these cases, _printList_, _addList_, and so on. However, this would be cumbersome, and we can’t anticipate all cases where we might need to perform an iteration.
- <span style="color: red">A much more elegant solution is to allow our list to create an <i>Iterator</i>.</span>

## Iterators

- An iterator is <span style="color: red">an object</span> that is associated with a list, and which implements (at least) the following two methods:
- <span style="color: red"><i>next()</i></span>: After the iterator has been created, the first call to _next()_ returns the first element in the list, the second call returns the second element, and so on.
- <span style="color: red"><i>hasNext()</i></span>: _a_ boolean method that returns true if there is another element that can be retrieved by _next()_ and false if there is not (because we have already retrieved the last element.
- Iterators may, optionally, implement a method <span style="color: red"><i>remove</i></span>, which deletes the next element in the list.

---

- <span style="background-color: rgb(66, 157, 218)">The <span style="color: red">Java API</span> includes an interface <i>Iterator</i>, that defines the three methods mentioned above.</span>
- <span style="background-color: rgb(66, 157, 218)">It also includes an <span style="color: red">interface <i>Iterable</i></span> which defines just one method <i>iterator()</i> which returns an iterator.</span>
- <span style="background-color: rgb(66, 157, 218)">Lists should implement this interface.</span>

```java
public class StringLinkedList implements Iterable<String> {
    @Override
    public Iterator<String> iterator() {
        return new StrItr(head);
    }
    private class StrItr implements Iterator<String> {
```

### Iterator class

```java {8}
private class StrItr implements Iterator<String> {
    private Node current;
    private StrItr(Node start) {current=start;}
    @Override
    public boolean hasNext() {return (current != null);}
    @Override
    public String next() {
        // Thinking Question: Think more about these three statements
        String result = current.data;
        current = current.next;
        return result;
    }
    @Override
    public void remove() {
        throw new UnsupportedOperationException("Not supported");
    }
}
```

### Iterating through the list

- If <span style="color: red"><i>myList</i></span> implements *iterable* and we want to iterate through it, for example, to print out all the elements it contains, we can write:
```java
Iterator<String> iter = myList.iterator();
    while (iter.hasNext()) {
        System.out.println(iter.next());
    }
```
- or
```java
for (String s : myList) {
    System.out.println(s);
}
```
