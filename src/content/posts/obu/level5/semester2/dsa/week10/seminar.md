---
title: "FunnyQueue"
published: 2026-05-07
# updated: 
description: "Data Structures and Algorithms Seminar10: FunnyQueue"
image: ./133851144.png
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

# Practical FunnyQueue

Study this program that implements a queue of integers. It has been translated into Java from an example in a programming textbook.  
You can run it too if you like; source code provided.  
Then answer these questions.  
1) How many values can the queue hold?
2) How can you fix this? What then happens?
3) Where is the real problem? Fix that too.
4) What happens if a calling program tries to add too many values to the queue?
5) What do you think of that way of handling that issue?
6) When corrected, what is the big-O performance of addItem?
7) When corrected, what is the big-O performance of remove?
8) Does this have any advantages over the “circular” queue you saw in the lecture on implementing stacks and queues with arrays?

```java
import java.util.*;

class IntegerQueue {
    public IntegerQueue(int capacity) {
        this.capacity = capacity;
        theQueue = new int[capacity];
        firstFree = 0;
    }
    public int getCapacity() {return capacity;}
    public int getSize() {return firstFree;}

    private int capacity;
    private int[] theQueue;
    private int firstFree;

    int getItem(int index) {
        return theQueue[index];
    }

    void addItem(int item) {
        if (firstFree < capacity - 1) {
            theQueue[firstFree] = item;
            firstFree++;
        }
}
    int remove() {
        if (firstFree == 0) return 0;
        int item = theQueue[0];
        for (int i = 0; i < firstFree; i++)
            theQueue[i] = theQueue[i+1];
        firstFree--;
        return item;
    }
}

public class FunnyQueue {
    public static void main(String[] args) {
        Scanner kb;
        int item;
        IntegerQueue queue = new IntegerQueue(5);
        kb = new Scanner(System.in);

        System.out.println("add values");
        for (int i = 0; i != 5; i++) {
            System.out.println("Enter an integer");
            item = kb.nextInt();
            queue.addItem(item);
        }
        
        System.out.println("display the queue");
        for (int i = 0; i != queue.getSize(); i++) 
            System.out.print(queue.getItem(i) + " ");
        
        System.out.println();
        System.out.println("Remove an item");
        item = queue.remove();
        System.out.println("Removed " + item);
        
        System.out.println("show the changed queue");
        for (int i = 0; i != queue.getSize(); i++) 
            System.out.print(queue.getItem(i) + " ");
    }
}
```

## Reference Answer

### 1) How many values can the queue hold?  
The queue can hold **4 values** (not 5, despite the `capacity=5`).  

Why? The `addItem` method uses the condition `if (firstFree < capacity - 1)`. For `capacity=5`, this means `firstFree` can only go up to 3 (since 3 < 4). Thus, indices 0-3 are used (4 elements total).


### 2) How can you fix this? What then happens?  
**Fix**: Change the condition in `addItem` from `firstFree < capacity - 1` to `firstFree < capacity`.  

```java
void addItem(int item) {
    if (firstFree < capacity) {  // Fixed: removed "- 1"
        theQueue[firstFree] = item;
        firstFree++;
    }
}
```

**Result**: The queue now holds the full 5 values (indices 0-4), as intended.


### 3) Where is the real problem? Fix that too.  
The **real problem** is in the `remove` method: its loop causes an `ArrayIndexOutOfBoundsException` when shifting elements.  

Original loop:  
```java
for (int i = 0; i < firstFree; i++)
    theQueue[i] = theQueue[i+1];  // i+1 exceeds array bounds when i = firstFree-1
```

When `firstFree = n`, `i` runs from 0 to `n-1`, so `i+1` becomes `n` (which is out of bounds for an array of size `capacity`).  

**Fix**: Change the loop condition to `i < firstFree - 1`:  
```java
int remove() {
    if (firstFree == 0) return 0;
    int item = theQueue[0];
    for (int i = 0; i < firstFree - 1; i++)  // Fixed: stop at firstFree-2
        theQueue[i] = theQueue[i+1];
    firstFree--;
    return item;
}
```


### 4) What happens if a calling program tries to add too many values to the queue?  
The `addItem` method **silently ignores the extra values**—it does nothing (no error, no exception, no feedback to the caller).


### 5) What do you think of that way of handling that issue?  
This is **poor practice**. Silent failures make debugging difficult: the caller has no way of knowing their item was not added. A better approach would be to:  
- Throw an exception (e.g., `IllegalStateException`), or  
- Return a `boolean` (true = added, false = queue full).  


### 6) When corrected, what is the big-O performance of `addItem`?  
**O(1)** (constant time). Adding an item only involves checking the condition, writing to the array, and incrementing `firstFree`—no loops or data shifting.


### 7) When corrected, what is the big-O performance of `remove`?  
**O(n)** (linear time). Removing an item requires shifting all remaining elements left by one position (the loop runs `firstFree - 1` times, where `n` is the number of elements in the queue).


### 8) Does this have any advantages over a “circular” queue?  
The only advantage is **simplicity**:  
- This implementation uses fewer variables (no `front`/`rear` indices or modulo arithmetic).  
- The code is easier for beginners to read and understand.  

However, circular queues are far more efficient for `remove` operations (O(1) vs. O(n) here), so this simplicity comes at a performance cost.
