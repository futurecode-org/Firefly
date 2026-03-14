---
title: "Testing a Binary Search"
published: 2026-03-12
# updated: 
description: "Practical: Testing a Binary Search"
image: 138954138_p1.png
tags: [Binary Search]
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

# Practical: Testing a Binary Search

> [!TIP]
> 使用二分查找的前提是提供的数列是有序的  
> 时间复杂度：$O(log(n))$

## Exercise 1 - Setup

Extract the supplied code files from the *.zip* file, and get them up and running as a project as usual. The files are as follows:

- `Tester.java` contains a small amount of testing, to get you started.
- `AscendingSequence.java`

Take a look at the `AscendingSequence` class in particular. Note that the way it represents a sequence is to use an array *a* , of length *max*. The sequence is stored at positions 0 to *size*-1 of the array *a*.

Various public methods are available for managing the sequence, which make it handy to set up sequences for testing purposes. The methods include:

- `AscendingSequence(int max)` – constructor
- `insert` – inserts a new element (can be a duplicate of one already there)
- `clear` – makes the sequence empty
- `insertLots` – a shorthand way of adding several values
- `remove` – removes an element identified by its index – must be in range!

There are also two methods for displaying the sequence, including:

- `toString` – produces a string representation of the sequence
- `containerArrayAsString` – returns a string representation of the entire array, not just the sequence.

There is also a method to search for values in the sequence:

- `search` – uses the binary search technique to search for a value.

It is the search method that you will be testing (not any of the other methods). It attempts to find a value val in the sequence by using a binary search. It is wrong!

```java
public boolean search(int val) {
    int low = 0;
    int high = size-1;
    int middle = -1;
    boolean found = false;
    while (!found && low < high) {
        middle = low + (high-low)/2;
        if (a[middle] == val)
            found = true;
        else if (a[middle] < val)
            low = middle + 1;
        else // (a[middle] > val)
            high = middle - 1;
        }
    return found;
    }
```

You are provided with a main method (in `Tester.java`) to get you started. It has a small amount of testing in it.

Try running the provided main program as written. Does the search seem to work ok?

## Exercise 2

For this part, you should edit the provided file `Tester.java`. Don’t forget to edit the `author`. You should provide six test cases for testing the search method, using white-box testing. For each of the six test cases:

- Indicate the test case clearly (e.g. using a `System.out.println` statement)
- Describe the nature of the test (for example: test that the middle element of the sequence can be found)
- Provide a suitable sequence and an element to test for.
- Annotate your main method with the expected outcome of your test and write messages (using `System.out.println`) to explain what you are doing.
- Include white-box testing and consideration of what should be true at various points in the method (assertions).
- Copy the contents of the output window into your `Tester.java` file as a `/*...*/` -type comment.

**Hints**: Try a wide variety of sequences and test cases.

## Exercise 3

Explain what error(s) you have found in the method `search`. Include a detailed explanation of why it is wrong.

## Exercise 4

By editing the method `search` in the file `AscendingSequence.java`, try to correct the error(s) in that method.

Annotate your method search with comments indicating the corrections you have made.

## Exercise 5

Rerun your test cases on the corrected method and write a comment indicating the degree of success you have achieved.

Copy the contents of the output window into your Tester.java file as a `/* … */` type comment, below the `/* … */` comment you have provided above.

> [!SUCCESS] Reference Answer
> 参考答案

```java
// AscendingSequence.java
/** Holds an ascending sequence, and provides various handy methods
  * to initialise and manipulate the sequence.
  *
  * The sequence can vary in length, up to a maximum capacity max.
  *
  * The datatype invariant for this ascending sequence is as follows:
  *     0 <= size <= max
  *     and for all j in the range 1 to size-1,  a[j-1] <= a[j]
  *
  */
public class AscendingSequence {
    private int[] a;  // note the datatype invariant above
    private int max;  // for storing the maximum length of the sequence
    private int size; // the current length of the sequence

    /** Constructs an empty ascending sequence.
      *
      * @param max   the max capacity of this sequence
      * @pre         max >= 0
      * @post        empty ascending sequence of capacity max has been created
      */
    public AscendingSequence(int max) {
        this.max = max;
        a = new int[max];
        size = 0;
    }

    /** Inserts an integer into the correct place in the sequence.
      *
      * @param x   the integer to be inserted
      * @pre       size != max
      * @post      x has been inserted into correct place in a
      */
    public void insert(int x) {
        assert size != max;
        int i = size;
        while (i != 0 && a[i - 1] > x) {
            a[i] = a[i - 1];
            i--;
        }
        assert i == 0 || a[i - 1] <= x;
        a[i] = x;
        size++;
    }

    /** Empties the sequence.
      *
      * @pre   true
      * @post  sequence is now empty
      */
    public void clear() {
        size = 0;
    }

    /** Inserts all integers from an array into the sequence.
      *
      * @param xs    the array containing the integers to insert
      * @pre         size + xs.length <= max
      * @post        all integers from xs have been inserted into the correct places in a
      */
    public void insertLots(int[] xs) {
        assert size + xs.length <= max;
        int i = 0;
        while (i != xs.length) {
            this.insert(xs[i]);
            i++;
        }
    }

    /** Removes the element at a given position.
      *
      * @param i     the index from which to remove the element
      * @pre         0 <= i && i < size
      * @post        element at position i has been removed from a
      */
    public void remove(int i) {
        assert 0 <= i && i < size;
        while (i < size - 1) {
            a[i] = a[i + 1];
            i++;
        }
        size--;
    }

    /** Returns a string representation of this sequence.
      *
      * @pre    true
      * @post   returned value is string representation of this
      * @return a string representation of this sequence
      */
    public String toString() {
        int i = 0;
        String out = "[";
        while (i < size - 1) {
            out += a[i] + ", ";
            i++;
        }
        if (i == size - 1) {
            out += a[i];
        }
        return out + "]";
    }

    /** Returns a string representation of the entire array, not just
      * the sequence within the array.
      *
      * @pre     true
      * @post    returned value is string representation of entire array
      * @return  a string representation of the entire array
      */
    public String containerArrayAsString() {
        int i;
        String out;
        i = 0;
        out = "Container array: max=" + max + " and size=" + size + "\n [";
        while (i < max - 1) {
            out += a[i] + ", ";
            i++;
        }
        if (i == max - 1) {
            out += a[i];
        }
        return out + "]";
    }

    /* Searches for a given value in the sequence.
     *
     * @param val   the value to search for in the sequence
     * @pre         true
     * @post        the return value indicates whether val is in the sequence
     * @return      true precisely when the sought value is in the sequence
     */
    /*
    public boolean search(int val) {
    // uses a binary search to look for the value

        int low = 0;
        int high = size-1;
        int middle = -1;
        boolean found = false;

        while (!found && low < high) {
            middle = low + (high-low)/2;
            if (a[middle]==val)
               found = true;
            else if (a[middle] < val)
               low = middle + 1;
            else // (a[middle] > val)
               high = middle - 1;
        }
        return found;
    }
    */
    public int search(int val) {
        // uses a binary search to look for the value

        int low = 0;
        int high = size-1;
        int num, middle;

        while (low <= high) { // Pay attention to <=
            middle = low + (high-low)/2;
            num = a[middle];
            if (num == val) {
                return middle;
            }
            else if (num < val)
                low = middle + 1;
            else // (a[middle] > val)
                high = middle - 1;
        }
        return -1;
    }
}
```
```java
// Tester.java
/** A class for testing a binary search method.
  *
  * 
  */
public class Tester {
    /** Carries out tests on a binary search method in the AscendingSequences class.
     *
     * @param args not used
     */
    public static void main(String[] args) {
        // First need to set up a sequence with some data:
        AscendingSequence as = new AscendingSequence(25);
        System.out.println("Adding some elements to the sequence:");
        int[] somexs = {7, 4, 6, 3, 20, -12, -5};
        as.insertLots(somexs);
        System.out.println(as);
        // Now to a test with this particular sequence:
        System.out.println("Can the binary search find the middle element?");
        System.out.println("Result of search for 4: " + as.search(4));
        // Now do some more tests of your own. Include at least six examples.
		// Remember that you can clear the sequence and insertLots to make a new sequence to test
		// You can search also for elements that have been deleted etc
        System.out.println("Can the binary search find the first element?");
        System.out.println("Result of search for -12: " + as.search(-12));
        System.out.println("Can the binary search find the last element?");
        System.out.println("Result of search for 20: " + as.search(20));
        System.out.println("Can the binary search find an element that is not in the sequence?");
        System.out.println("Result of search for 0: " + as.search(0));
    }
}
```
