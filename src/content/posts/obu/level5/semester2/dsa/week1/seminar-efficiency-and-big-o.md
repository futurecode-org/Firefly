---
title: "Efficiency and Big O"
published: 2026-03-12
# updated: 
description: "CHC5223 Exercise on efficiency and Big O"
image: 138954138_p0.png
tags: [Big O]
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

# CHC5223 Exercise on efficiency and Big O

In the C programming language, and some others, (*variable-length*) a character string is held in the lowest-indexed elements of a (*fixed-capacity*) array, with a terminator immediately following the string. There must be (at least one) terminator; what follows the terminator in the array is not part of the string and is not of interest.

In C the terminator is the *null* character *0x0*, but this *invisible*, so in the following exercise we use '@'.

In this exercise you will consider various possible implementation of the operation *trim*, which works on a Java simulation of the C-type character string.

The static method `makeArray` takes a Java string passed as a parameter and updates a character array passed as parameter.

The method `displayAll` shows all the characters in the array with the C-type representation of the string.

The method `displayAsString` displays the string held in the array (and puts it inside quotes).

There are four implementations of the method *trim* (*trim0, trim1, trim2, trim3*). They each take a character array holding a (well formed) “string”, as described above, and they each purport to remove the occurrences of a character *del* (*del ≠ terminator*) from it, *in situ*.

## Class-room tasks

1. Study each of the implementations. The source text is at the end of this document.
2. Determine which of them is/are correct. If you need to, you can do this by “desk-checking” small examples. State in what way any are incorrect.
3. Try to determine by reasoning what the *big-O* complexity of each method is.
4. Explain your reasoning for each choice.
5. *trim3* is very similar to *trim2*. Can you see where they differ? Does their big-O complexity differ?
6. Which implementation is best?

## Practical tasks

1. You should write a very simple program to use `makeArray` to convert a Java string to a C-type string; then try each version of *trim* on a sample string and use `displayAll` and `displayAsString` to show the outcome.<br>**Example:**

```java
public static void main(String[] args) {
    char[] s= new char[15]; // make sure this is big enough
	String test = "/this//is//it/";
	makeArray(test, s);
	displayAll(s); 
	System.out.println("trim0");
	trim0 (s, '/'); displayAll(s); 
	displayAsString(s); System.out.println();
}
```

2. “Instrument” each version of trim to count and display its number of comparisons and its number of copy operations.<br>**Example:**

```java
public static void trim0Instrumented(char[] s, char del) {
	// pre: exists i: 0 <= i < s.length: s[i] == terminator &&
	// del != terminator
	assert del != terminator;
	int comps = 0, copies = 0;
	int i = 0, j = 0;
	comps++; // head of while 
	while(s[i] != terminator) {
		comps++; // ahead of if 
        if (s[i] == del) {
			j = i;
			comps++; // head of while
			while(s[j + 1] != terminator) {
			    s[j] = s[j + 1]; j++;
			    copies++;
			    comps++; // next of while
			}
			s[j] = terminator;
			copies++;
		}
		i++;
		comps++; // next of while
	}
    System.out.println("trim 0: comparisons = " + comps + " copies = " + copies);
} // trim0Instrumented
```

3. Repeat your tests using the instrumented versions.
4. Do the results accord with the results of you reasoned in the class-room part of this exercise?

## The Java sources

```java
// Trim.java
public class Trim {
    static final char terminator = '@';
    
    public static void makeArray(String str, char[] s) {
        int i;
        for(i = 0; i != str.length(); i++) s[i] = str.charAt(i);
        s[i] = terminator;
    }
    
    public static void displayAll(char [] s) {
        for (int i = 0; i != s.length; i++) System.out.print(s[i]);
    }
    
    public static void displayAsString(char [] s) {
        int i = 0;
        System.out.print("\"");
        while(s[i] != terminator){
            System.out.print(s[i]); i++;
        }
        System.out.print("\"");
    }
    public static void trim0(char[] s, char del) {
        // pre: exists i: 0 <= i < s.length: s[i] == terminator &&
        // del != terminator
        assert del != terminator;
        int i = 0, j;
        while(s[i] != terminator) {
            if (s[i] == del) {
                j = i;
                while(s[j + 1] != terminator) {
                    s[j] = s[j + 1]; j++;
                }
                s[j] = terminator;
            }
            i++;
        } 
    } // trim0
    
    public static void trim1(char[] s, char del) {
        // pre: exists i: 0 <= i < s.length: s[i] == terminator &&
        // del != terminator
        assert del != terminator;
        int i = 0, j;
        while(s[i] != terminator) {
            if (s[i] == del) {
                j = i;
                while(s[j + 1] != terminator) {
                    s[j] = s[j + 1]; j++;
                }
                s[j] = terminator;
            }
            else i++;
            } 
    } // trim1
    
    public static void trim2(char[] s, char del) {
        // pre: exists i: 0 <= i < s.length: s[i] == terminator &&
        // del != terminator
        assert del != terminator;
        int i = 0, j = 0;
        while(s[i] != terminator) {
            if (s[i] != del) {
                s[j] = s[i]; j++;
            }
            i++; 
        }
        s[j] = terminator; 
    } // trim2
    
    public static void trim3(char[] s, char del) {
        // pre: exists i: 0 <= i < s.length: s[i] == terminator &&
        // del != terminator
        assert del != terminator;
        int i, j;
        i = 0; j = 0;
        while(s[i] != terminator) {
            while (s[i] == del) 
                i++;
            // s[i] != del) 
            if (s[i] != terminator){
                s[j] = s[i];  j++; i++;
            }
        }
        s[j] = terminator;          
    } // trim3
}
```

> [!TIP]
> Time complexity: 
> - trim0: $O(n^2)$
> - trim1: $O(n^2)$
> - trim2: $O(n)$
> - trim3: $O(n)$

> [!CAUTION]
> 嵌套 `while` 循环不一定导致时间复杂度指数级增加
