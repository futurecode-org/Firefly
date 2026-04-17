---
title: "Sorting"
published: 2026-03-19
# updated: 
description: "Data Structures and Algorithms Practical: Sorting"
image: ./137329922_p0.jpg
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

# Practical: Sorting 排序实践

## Exercise 1 - Setup 练习 1：环境准备

Extract the code provided, organise your folders, and get a project set up as usual. You should now see the following files in the project:  
提取给定代码，整理好文件夹，并像平常一样完成项目初始化。此时你应在项目中看到以下文件：
- The class _Sequence_ manages a sequence of integers of capacity _max_. It also contains methods _insertionSort_ and _quickSort_.<br>类 _Sequence_ 管理一个容量为 _max_ 的整数序列，并包含 _insertionSort_ 和 _quickSort_ 方法。
- The class _SortExplore_ is the main program: it initialises a sequence to random values and then sorts the sequence.<br>类 _SortExplore_ 是主程序：它先将序列初始化为随机值，再对序列进行排序。  
Within _SortExplore_, try changing the value of _numElements_ to different values (less than about 200,000 is best), watching how long it takes for each sort.  
在 _SortExplore_ 中，尝试把 _numElements_ 改成不同数值（建议小于约 200,000），观察每种排序所花费的时间。

## Exercise 2 练习 2

Count the number of steps that _insertionSort_ takes, in the following way:  
按如下方式统计 _insertionSort_ 执行的步数：

Add code to the _insertionSort_ method to increase the value of the variable _stepCount_ each time an element of the sequence is _accessed_.  
在 _insertionSort_ 方法中加代码：每次“访问”序列中的一个元素时，都让变量 _stepCount_ 增加。

(To be clear, accessing an element of the sequence could be when an element of the array is inspected or copied, or when a value is written into a position in the array.)  
（说明：所谓访问序列元素，可以是检查数组元素、复制数组元素，或将某个值写入数组中的某个位置。）

Also add a comment at each place you increase the value of the variable _stepCount_, to make it clear which access of the sequence it is that you are counting.  
另外，在每个增加 _stepCount_ 的位置加注释，明确说明你统计的是哪一次序列访问。

Run the main program and note how many accesses are done by the insertion sort.  
运行主程序，并记录插入排序进行了多少次访问。

## Exercise 3 练习 3

Similarly, also add statement(s) to the _qSort_ method to count the number of steps that it takes:  
同样地，在 _qSort_ 方法中加入语句来统计其步数：

Add code to the _qSort_ method to increase the value of the variable _stepCount_ each time an element of the sequence is accessed.  
在 _qSort_ 方法中加代码：每次访问序列元素时，让变量 _stepCount_ 增加。

Also add a comment at each place you increase the value of the variable _stepCount_, to make it clear which access of the sequence it is that you are counting.  
同样在每个增加 _stepCount_ 的位置添加注释，说明该计数对应的是哪一次访问。

Run the main program and note how many accesses are done by _qSort_.  
运行主程序，并记录 _qSort_ 的访问次数。

## Exercise 4 练习 4

Add statements to the main program so that your sequence is sorted _twice_ by each method – that is, for each sorting algorithm, the already-sorted sequence is sorted again, and the number of accesses is counted afresh.  
在主程序中添加语句，使每种排序方法都对同一序列执行 _两次_ 排序。也就是对每种算法，把已经排好序的序列再排一次，并重新统计访问次数。

Append the content of the output window to your source text for _SortExplore_ in a comment `/* … */` and include some brief comments on the differences/similarities between the two sorting algorithms: Which is quicker (in terms of the number of accesses)? What difference does it make the second time round? Why?  
将输出窗口内容以 `/* … */` 注释形式附加到 _SortExplore_ 的源码中，并简要分析两种排序算法的异同：哪个更快（以访问次数衡量）？第二次排序有什么变化？为什么？

> [!CHECK] Reference Answer 参考答案

```java
// Sequence.java
package sorting;
/** Stores a sequence of integers, and provides operations on them.
  *
  * @author David Lightfoot 2010-11-15, updated by Sharon Curtis 2011-06-09,
  *         further updated by (your student name and number here)
  */
public class Sequence {

    private static long stepCount = 0;

    public static void clearNumSteps() {
        stepCount = 0;
    }

    public static long getNumSteps() {
        return stepCount;
    }
    public final int max;
    public int[] a;

    public Sequence(int max) {
        a = new int[max];
        this.max = max;
    }

    // pre 0 <= i && i < max
    // a[i] == x
    public void insertAt(int i, int x) {
        a[i] = x;
    }

    public String toString() {
        String out = "";
        for (int elem : a) {
            out += elem + "\n";
        }
        return out;
    }

    public boolean isAscending() {
        int i = 1;
        while (i < max && a[i - 1] <= a[i]) {
            i++;
        }
        return i >= max;
    }

    // pre true
    // post a[0..size-1] is ascending
    void insertionSort() {
        int i = 1;
        int x;
        int j;
        while (i < a.length) {
            // a[0..i-1] is ascending
            // insert value at a[i] into correct position in a[0..i-1]
            j = i;
            x = a[i]; // x is the value originally at a[i]
            stepCount++; // counted: read a[i] into x
            // restructure the loop so we can count each element access
            while (j != 0) {
                // inspect a[j-1] to compare with x
                stepCount++; // counted: read a[j-1] for comparison
                if (a[j - 1] > x) {
                    // 'budge up' values that are bigger than x
                    // copying a[j-1] into a[j] performs a read of a[j-1] and a write to a[j]
                    a[j] = a[j - 1];
                    stepCount++; // counted: write to a[j]
                    stepCount++; // counted: read a[j-1] for the copy
                    j--;
                } else {
                    break;
                }
            }  // j == 0 OR a[j-1] <= x
            // 'drop in' x, the value that was at a[j]
            a[j] = x;
            stepCount++; // counted: write a[j] when inserting x
            i++; // advance to insert next value
        } // i >= a.length
    } // end of insertionSort

    void qSort(int low, int high) {
        int i = low, j = high, temp;
        int pivot = a[(low + high) / 2];
        stepCount++; // counted: read a[(low+high)/2] to initialise pivot

        while (i < j) {
            // move i forward while a[i] < pivot
            while (true) {
                stepCount++; // counted: read a[i] for comparison with pivot
                if (a[i] < pivot) {
                    i++;
                } else {
                    break;
                }
            }
            // move j backward while a[j] > pivot
            while (true) {
                stepCount++; // counted: read a[j] for comparison with pivot
                if (a[j] > pivot) {
                    j--;
                } else {
                    break;
                }
            }
            if (i <= j) {
                temp = a[i];
                stepCount++; // counted: read a[i] into temp for swap
                a[i] = a[j];
                stepCount++; // counted: read a[j] for the swap into a[i]
                stepCount++; // counted: write to a[i] during swap
                a[j] = temp;
                stepCount++; // counted: write to a[j] during swap
                i++;
                j--;
            }
        }
        if (low < j) {
            qSort(low, j); // recursive call
        }
        if (i < high) {
            qSort(i, high); // recursive call
        }
    } // end of insertionSort

    // pre true
    // post a[0..size-1] is ascending
    void quickSort() {
        qSort(0, max - 1);
    } // end of QSort
}
```

```java
// SortExplore.java
package sorting;

import java.util.*; // this package provides random number generating facilities

/** This class contains some code
  *
  * @author David Lightfoot 2010-11-15, updated by Sharon Curtis 2011-06-09,
  *         further updated by (your student name and number here)
  */
public class SortExplore {

    public static void main(String[] args) {

        int numElements = 20000; // edit this to change number of elements in array

        // first to set up a sequence with random numbers
        Random generator = new Random();
        Sequence s = new Sequence(numElements);
        for (int i = 0; i < numElements; i++) {
            s.insertAt(i, generator.nextInt());
        }

        Sequence oldS = new Sequence(numElements); // will hold original sequence
        // now to make oldS a copy of s
        for (int i = 0; i < numElements; i++) {
            oldS.a[i] = s.a[i];
        }



        System.out.println("Before sorting by Insertion Sort");
        System.out.println("sequence is ascending?:  " + s.isAscending());
        // System.out.println(s);
        Sequence.clearNumSteps();
        System.out.println("STARTING Insertion Sort");
        s.insertionSort();
        System.out.println("Insertion Sort done");

        System.out.println("After sorting by Insertion Sort ");
        System.out.println("sequence is ascending?:  " + s.isAscending());
        System.out.println("Number of steps is: " + Sequence.getNumSteps());
        // Now sort the already-sorted sequence again and count afresh
        Sequence.clearNumSteps();
        System.out.println("STARTING Insertion Sort on already-sorted sequence");
        s.insertionSort();
        System.out.println("Insertion Sort (2nd run) done");
        System.out.println("After 2nd run by Insertion Sort ");
        System.out.println("sequence is ascending?:  " + s.isAscending());
        System.out.println("Number of steps (2nd run) is: " + Sequence.getNumSteps());
        //  System.out.println(s);


        Sequence.clearNumSteps();
        System.out.println("Restoring unsorted sequence ");
        for (int i = 0; i < numElements; i++) { // restoring original s
            s.a[i] = oldS.a[i];
        }
        System.out.println("STARTING QuickSort");
        s.quickSort();
        System.out.println("QuickSort done");

        System.out.println("After sorting by QuickSort ");
        System.out.println("sequence is ascending?:  " + s.isAscending());
        System.out.println("Number of steps is: " + Sequence.getNumSteps());
        // Now sort the already-sorted sequence again and count afresh
        Sequence.clearNumSteps();
        System.out.println("STARTING QuickSort on already-sorted sequence");
        s.quickSort();
        System.out.println("QuickSort (2nd run) done");
        System.out.println("After 2nd run by QuickSort ");
        System.out.println("sequence is ascending?:  " + s.isAscending());
        System.out.println("Number of steps (2nd run) is: " + Sequence.getNumSteps());
    }
}

/*
Actual output from a run with numElements = 20 (captured when running the program):

Before sorting by Insertion Sort
sequence is ascending?:  false
STARTING Insertion Sort
Insertion Sort done
After sorting by Insertion Sort 
sequence is ascending?:  true
Number of steps is: 419
STARTING Insertion Sort on already-sorted sequence
Insertion Sort (2nd run) done
After 2nd run by Insertion Sort 
sequence is ascending?:  true
Number of steps (2nd run) is: 57
Restoring unsorted sequence 
STARTING QuickSort
QuickSort done
After sorting by QuickSort 
sequence is ascending?:  true
Number of steps is: 256
STARTING QuickSort on already-sorted sequence
QuickSort (2nd run) done
After 2nd run by QuickSort 
sequence is ascending?:  true
Number of steps (2nd run) is: 138

Brief comments / analysis:
- Which is quicker (in terms of the number of accesses)? For this random 20-element run,
  QuickSort required 256 accesses on the first run vs Insertion Sort's 419, so QuickSort
  performed fewer array accesses on the unsorted data and is therefore quicker in this metric.
- What difference does it make the second time round? Insertion Sort on an already-sorted
  array performed much less work (57 accesses) because its inner loop rarely shifts elements;
  it inspects each element once and does few or no writes. QuickSort still performed partitioning
  and recursive work on the sorted input (138 accesses), so it did more work on the second run
  than Insertion Sort did.
- Why? Insertion Sort runs in O(n) for already-sorted input: each element requires a single
  comparison and no shifting, so accesses are minimal. QuickSort's cost depends on pivot selection
  and partitioning: even with a middle pivot it still performs comparisons across partitions and
  recursive calls, so it does not reduce to O(n) merely because the input is sorted.

Note: These numbers vary between runs because the sequence is randomly generated; different random
inputs (and different sizes) will change absolute counts. The relative behavior, however, is typical:
QuickSort tends to be more efficient on large, random data (roughly O(n log n) average) while
Insertion Sort can be extremely fast on nearly-sorted inputs (O(n)).
*/
```

```java
// TestSequence.java
package sorting;

/** Small test harness for Sequence.insertionSort to verify step counting. */
public class TestSequence {
    public static void main(String[] args) {
        Sequence s = new Sequence(5);
        s.insertAt(0, 5);
        s.insertAt(1, 3);
        s.insertAt(2, 4);
        s.insertAt(3, 1);
        s.insertAt(4, 2);

        Sequence.clearNumSteps();
        s.insertionSort();

        System.out.println("Sorted? " + s.isAscending());
        System.out.println("Steps: " + Sequence.getNumSteps());
        System.out.println("Array:\n" + s.toString());
    }
}
```
