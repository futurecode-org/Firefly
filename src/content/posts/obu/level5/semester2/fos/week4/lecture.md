---
title: "Foundations of Security Week4 Lecture"
published: 2026-03-31
# updated: 
description: "Modular multiplicative inverse, Chinese Remainder Theorem (CRT) and RSA cryptographic algorithm"
image: ./127443474_p0.jpg
tags: []
category: Foundations of Security
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

## Lecture Outline

1. Review of the Extended Euclidean Algorithm
2. Expressing the GCD as a linear combination
3. Modular multiplicative inverse
4. Introduction to the Chinese Remainder Theorem (CRT)
5. Introduction to the RSA cryptographic algorithm

## Learning Outcomes

<span style="color: red">By the end of this lecture, students should be able to:</span>
1. Understand the purpose of the Extended Euclidean Algorithm
2. Express the GCD as a linear combination
3. Compute modular multiplicative inverses
4. Identify when a multiplicative inverse exists
5. Solve simultaneous congruence equations using CRT
6. Perform the basic RSA Key Generation

## Extended Euclidean Algorithm (Review)

The Extended Euclidean Algorithm is an algorithm to compute integers <span style="color: red">𝑥</span> and <span style="color: red">𝑦</span> such that.
$$a\textcolor{red}{x} + b\textcolor{red}{𝑦} = \gcd(a, b)$$
By reversing the steps in the Euclidean algorithm, it is possible to find these integers <span style="color: red">𝑥</span> and <span style="color: red">𝑦</span>.

<span style="color: red">Example</span>:

Find $\gcd(12, 34)$ and Express it as a Linear Combination

Solution:
$$
\begin{array}{l}
\begin{aligned}
34 &= 12(2) + 10 \\
12 &= 10(1) + 2 \\
10 &= 2(5) + 0
\end{aligned}
\end{array}
\qquad\qquad
\begin{array}{l}
\begin{aligned}
2 &= 12 + 10(-1) \\
&= 12 + [34+12(-2)](-1) \\
&= 12 + 34(-1) + 12(2) \\
&= 12(3) + 34(-1)
\end{aligned}
\end{array}
$$

Hence, the coefficients are $\textcolor{red}{x=3}$ and $\textcolor{red}{𝑦=−1}$. 
This process allows you to find 𝑥 and 𝑦 such that $\textcolor{red}{12x + 34𝑦 = \gcd(12,34)}$

---
<span style="color: red">Example</span>:

Find $\gcd(93, 219)$ and Express it as a Linear Combination

Solution:
$$
\begin{array}{l}
\begin{aligned}
219 &= 93(2) + 33 \\
93 &= 33(2) + 27 \\
33 &= 27(1) + 6 \\
27 &= 6(4) + 3 \\
6 &= 3(2) + 0
\end{aligned}
\end{array}
\qquad\qquad
\begin{array}{l}
\begin{aligned}
3 &= 27 \textcolor{blue}{+} 6(-4) \\
&= 27 \textcolor{blue}{+} \textcolor{red}{[}33+27(-1)\textcolor{red}{]}(-4) \\
&= 27 \textcolor{blue}{+} 33(-4) + 27(4) \\
&= 33(-4) \textcolor{blue}{+} 27(5) \\
&= 33(-4) \textcolor{blue}{+} \textcolor{red}{[}93+33(-2)\textcolor{red}{]}(5) \\
&= 33(-4) \textcolor{blue}{+} 93(5) + 33(-10) \\
&= 33(-14) \textcolor{blue}{+} 93(5) \\
&= \textcolor{red}{[}219 + 93(-2)\textcolor{red}{]}(-14) \textcolor{blue}{+} 93(5) \\
&= 219(-14) + 93(28) \textcolor{blue}{+} 93(5) \\
&= 93(33) \textcolor{blue}{+} 219(-14)
\end{aligned}
\end{array}
$$
Hence, the coefficients are $\textcolor{red}{x=33}$ and $\textcolor{red}{𝑦=−14}$.  
This process allows you to find 𝑥 and 𝑦 such that $\textcolor{red}{93x + 219𝑦 = \gcd(93, 219) = 3}$

---

<span style="color: red">Assignment: Complete these exercises and submit during seminar class</span>

- Find the gcd and Express them as Linear Combinations:
1. $\gcd(120, 35)$
2. $\gcd(145, 252)$
3. $\gcd(100, 240)$

> <span style="color: red">Show how you computed your answers.<br>Only handwritten solutions.<br>No copy-paste will be accepted.</span>

## Modular Multiplicative Inverse

The modular multiplicative inverse of an integer $\textcolor{blue}{a}$ modulo $\textcolor{blue}{m}$ is an integer $\textcolor{blue}{x}$ such that the product ax is congruent to 1 modulo m.

$$\textcolor{red}{a}x\textcolor{red}{\equiv1 \bmod m}$$

Here 𝑥 is the multiplicative inverse of $a$, and we can also write the above equation as

$$\textcolor{red}{a \bmod m} = \textcolor{red}{1 \bmod m} \Rightarrow \textcolor{red}{a}x \textcolor{red}{\bmod m} = \textcolor{red}{1}$$

The existence of such an $\textcolor{blue}{x}$ depends on $\textcolor{red}{a}$ and $\textcolor{red}{m}$ being **coprime**, i.e., $\gcd(a,m)=1$. **Otherwise** we can say that **there is no multiplicative inverse**.

<span style="color: red">Example</span>:

Find a number 𝑥 such that: $3x \equiv 1~(\bmod 12)$

### <span style="color: blue">Trail and Error Method</span>

$$
\begin{aligned}
3 \times 1 \bmod 17 &= 3 \\
3 \times 2 \bmod 17 &= 6 \\
3 \times 3 \bmod 17 &= 9 \\
3 \times 4 \bmod 17 &= 12 \\
3 \times 5 \bmod 17 &= 15 \\
3 \times 6 \bmod 17 &= \textcolor{red}{1}
\end{aligned}
$$

Here the value of $\textcolor{red}{x = 6}$. This method is very difficult when the number is very large.

### <span style="color: blue">Extended Euclidean Algorithm Method</span>

$$
\begin{array}{l}
\begin{aligned}
\gcd&(3, 17) \\
17 &= 3(5) + 2 \\
3 &= 2(1) + 1 \\
2 &= 1(2) + 0
\end{aligned}
\end{array}
\qquad\qquad
\begin{array}{l}
\begin{aligned}
1 &= 3 + 2(-1) \\
&= 3 + [17+3(-5)](-1) \\
&= 3 + 17(-1) + 3(5) \\
&= 3(\textcolor{red}{6}) + 17(\textcolor{red}{-1}) \\
\\
&a\textcolor{red}{x} + b\textcolor{red}{y} = \gcd(a, b) \\
&3\textcolor{red}{x} + 17\textcolor{red}{y} = 1 \\
&\Rightarrow \textcolor{red}{x = 6}
\end{aligned}
\end{array}
$$

Here $\textcolor{red}{x = 6}$ is the multiplicative inverse

---

<span style="color: red">Example</span>:

Find a number 𝑥 such that: $35x\equiv1~(\bmod 8)$

### <span style="color: blue">Another Approach</span>

We can write $35\textcolor{red}{x} \bmod 8 = \textcolor{purple}{1 \bmod 8}$

$$
\begin{aligned}
\textcolor{blue}{(a \times b) \bmod n} &\textcolor{blue}{=} \textcolor{blue}{[(a \bmod n) \times (b \bmod n)] \bmod n} \\
(35 \times \textcolor{red}{x}) \bmod 8 &\textcolor{red}{=} [(35 \bmod 8) \times (\textcolor{red}{x} \bmod 8)] \bmod 8 \\
35\textcolor{red}{x} \bmod 8 &\textcolor{red}{=} [(3 \times \textcolor{red}{x}) \bmod 8] \\
35\textcolor{red}{x} \bmod 8 &\textcolor{red}{=} \textcolor{blue}{3\textcolor{red}{x} \bmod 8} \textcolor{purple}{ =1 \bmod 8}
\end{aligned}
$$
$$
\begin{aligned}
3\textcolor{red}{x} \bmod 8 &= 1 \bmod 8 \\
3\textcolor{red}{x} \bmod 8 &= 1 \bmod 8 \\
3 \times 3 \bmod 8 &= 1 \\
\end{aligned}
$$

Therefore, $\textcolor{blue}{x = 3}$ is the multiplicative inverse.

> Check
> 
> $35 \times 3 \bmod 8 = 1$
> 
> $105 \bmod 8 = 1$

---

<span style="color: red">Example</span>:

Find a number 𝑥 such that:
1) $40x \equiv 1 \bmod 7$
2) $20x \equiv 1 \bmod 3$

> Waiting…

### Application

The modular multiplicative inverse is crucial in various fields, including cryptography, where it's used in algorithms like **RSA** for **public key encryption and decryption**.

## Chinese Remainder Theorem

The Chinese Remainder Theorem (CRT) is a powerful tool in number theory and discrete mathematics that allows you to solve a system of simultaneous linear congruences with different moduli, under the condition that the moduli are **pairwise coprime** (i.e., the gcd of <span style="color: blue">each pair of moduli is 1</span>).

Assume we have a system of equations:

$$
\begin{aligned}
x &\equiv a_1 ~(\bmod m_1) \\
x &\equiv a_2 ~(\bmod m_2) \\
..&............... \\
x &\equiv a_𝑘 ~(\bmod m_𝑘)
\end{aligned}
$$

Where $\textcolor{blue}{m_1,m_2,...,m_𝑘}$ are **pairwise coprime**. The theorem states that there is a unique solution modulo 𝑀, where 𝑀 is the product of all the moduli ($𝑀 = m_1 \times m_2 \times ... \times m_𝑘$).

---

<span style="color: red">Step-by-Step Method to Find the Solution</span>

1. **Compute 𝑀**: $𝑀 = m_1 \times m_2 \times ... \times m_𝑘$.
2. **Compute the partial products**: For each 𝑖, calculate $M_i=\frac{M}{m_i}$ ​.
3. **Find the modular inverses**: For each 𝑖, find an integer $𝑦_𝑖$ ​such that $𝑀_𝑖𝑦_𝑖\equiv1~(\bmod m_𝑖)$. This $𝑦_𝑖$ is the modular inverse of $𝑀_𝑖$ modulo $m_𝑖$.
4. **Calculate the solution**: The solution 𝑥 can be found as follows:
$$
\textcolor{red}{x = (a_1𝑀_1𝑦_1} + \textcolor{red}{a_2𝑀_2𝑦_2} + \textcolor{red}{...} + \textcolor{red}{a_𝑘𝑀_𝑘𝑦_𝑘)\bmod𝑀}
$$

---

<span style="color: red">Example</span>

Let's solve the system:

$$
\begin{aligned}
x&\equiv2~(\bmod 3) \\
x&\equiv3~(\bmod 5) \\
x&\equiv2~(\bmod 7) \\
\end{aligned}
$$

Step 1: Compute 𝑀: $\textcolor{blue}{𝑀 = m_1 \times m_2 \times m_3}$.
$$\textcolor{blue}{𝑀 =} 3 \times 5 \times 7 \textcolor{blue}{=} 105$$

Step 2: Compute the partial product $M_i=\frac{M}{m_i}$

$$
\begin{aligned}
M_1 &= \frac{M}{m_1} = \frac{105}{3} = \textcolor{red}{35} \\
M_2 &= \frac{M}{m_2} = \frac{105}{5} = \textcolor{red}{21} \\
M_3 &= \frac{M}{m_3} = \frac{105}{7} = \textcolor{red}{15}
\end{aligned}
$$

Step 3: Find the modular inverses.

- Find $\textcolor{red}{𝑦_1}$ such that $\textcolor{blue}{35\textcolor{red}{𝑦_1}\equiv1~(\bmod3)}$<br>$\textcolor{red}{y_1}=\textcolor{red}{2}$ works because<br>$35 \times 2 = 70 \equiv 1~(\bmod 3)$
- Find $\textcolor{red}{𝑦_2}$ such that $\textcolor{blue}{21\textcolor{red}{𝑦_2}\equiv1~(\bmod5)}$<br>$\textcolor{red}{y_2}=\textcolor{red}{1}$ works because<br>$21 \times 1 = 21 \equiv 1~(\bmod 5)$
- Find $\textcolor{red}{𝑦_3}$ such that $\textcolor{blue}{15\textcolor{red}{𝑦_3}\equiv1~(\bmod7)}$<br>$\textcolor{red}{y_3}=\textcolor{red}{1}$ works because<br>$15 \times 1 = 15 \equiv 1~(\bmod 7)$

Step 4: Calculate the solution.

$$
\begin{aligned}
\textcolor{red}{x} &\textcolor{red}{=} \left( \textcolor{purple}{a_1}\textcolor{red}{M_1y_1} + \textcolor{purple}{a_2}\textcolor{red}{M_2y_2} + \textcolor{red}{\dots} + \textcolor{purple}{a_k}\textcolor{red}{M_ky_k} \right) \bmod \textcolor{red}{M} \\
\textcolor{red}{x} &\textcolor{red}{=} \left( \textcolor{purple}{2} \times \textcolor{red}{35} \times \textcolor{red}{2} + \textcolor{purple}{3} \times \textcolor{red}{21} \times \textcolor{red}{1} + \textcolor{purple}{2} \times \textcolor{red}{15} \times \textcolor{red}{1} \right) \bmod \textcolor{red}{105} \\
\textcolor{red}{x} &\textcolor{red}{=} \left( \textcolor{red}{140} + \textcolor{red}{63} + \textcolor{red}{30} \right) \bmod \textcolor{red}{105} \\
\textcolor{red}{x} &\textcolor{red}{=} \textcolor{red}{233} \bmod \textcolor{red}{105} \\
\textcolor{red}{x} &\textcolor{red}{=} \textcolor{red}{23}
\end{aligned}
$$

Thus, $x = \textcolor{red}{23}$ is the unique solution that satisfies all the original congruences.

---

<span style="color: red">Assignment: Complete this exercise and submit during seminar class</span>

Determine the value of 𝑥 using the Chinese Remainder Theorem

$$
\begin{aligned}
x&\equiv3~(\bmod 5) \\
x&\equiv1~(\bmod 7) \\
x&\equiv6~(\bmod 8) \\
\end{aligned}
$$

> <span style="color: red">Show how you computed your answers.<br>Only handwritten solutions.<br>No copy-paste will be accepted.</span>

## RSA Algorithm

The RSA algorithm is a widely used public key cryptography system that enables secure data transmission.

Named after its inventors **Rivest**, **Shamir**, and **Adleman**, RSA is based on the practical difficulty of factoring the product of two large prime numbers, a problem known as integer factorization.

### <span style="color: red">How RSA Works</span>

**Key Generation:**
- Choose <span style="color: red">two large prime numbers</span>, $\textcolor{blue}{p}$ and $\textcolor{blue}{q}$.
- Calculate n: n = p × q. This n is used as the modulus for both the public and private keys.
- Calculate the **totient function**, $\textcolor{blue}{\phi(n)=(p−1)×(q−1)}$.
- Choose an integer $\textcolor{blue}{e}$ such that $1<e<\phi(n)$ and $\textcolor{red}{e}$ <span style="color: red">is coprime to</span> $\textcolor{red}{\phi(n)}$; $\textcolor{blue}{e}$ <span style="color: blue">is the public exponent</span>.
- Determine $\textcolor{green}{d}$ as the <mark>modular multiplicative inverse</mark> of $e$ modulo $\phi(n)$. This means $d$ is the number such that $(d×e)\bmod\phi(n)=1$. $\textcolor{green}{d}$ is the **private exponent**.

---

**Encryption:**  
Given a plaintext message $\textcolor{blue}{𝑀}$, the ciphertext $\textcolor{blue}{𝐶}$ is computed as:
$$
\textcolor{red}{𝐶=𝑀e \bmod n}
$$
**Decryption:**  
To retrieve the plaintext $\textcolor{blue}{𝑀}$ from the ciphertext $\textcolor{blue}{𝐶}$, use the private key $\textcolor{blue}{d}$:
$$
\textcolor{green}{𝑀=𝐶d \bmod n}
$$

---

<span style="color: red">Example</span>

Choose two prime numbers:
- Let $\textcolor{blue}{p=11}$ and $\textcolor{blue}{q=3}$.

Compute $n$ and $\phi(n)$:
- $n = p \times q = 11 \times 3 = 33$
- $\phi(n) = (p−1) \times (q−1) = 10 \times 2 = 20$.

Choose $e$:
- Let $\textcolor{blue}{e=7}$ (<span style="color: brown">which is coprime to</span> $\textcolor{brown}{\phi(n)=20}$).

Compute $d$:
- d is the modular multiplicative inverse of $e$ modulo $\phi(n)$.

$d$ needs to satisfy $\textcolor{green}{d}\times7\equiv1~(\bmod20)$ .

By **testing values** or using **extended Euclidean algorithm**, we find $\textcolor{green}{d=3}$ (since $3\times7=21\equiv1~(\bmod20)$). 

---
<span style="color: red">Example</span>
$$
\begin{array}{l}
\textbf{Encryption}: \\
\begin{aligned}
\text{Suppose} &\text{the plaintext } M=4 \\
\textcolor{red}{C} &\textcolor{red}{=} \textcolor{red}{M^e \bmod n} \\
C &= 4^7 \bmod 33 \\
C &= 16384 \bmod 33 \\
C &= \textbf{16}
\end{aligned}
\end{array}
\qquad\qquad
\begin{array}{l}
\textbf{Decryption}: \\
\begin{aligned}
C &= \textbf{16} \\
\textcolor{green}{M} &\textcolor{green}{=} \textcolor{green}{C^d \bmod n} \\
M &= 16^3 \bmod 33 \\
M &= 4096 \bmod 33 \\
M &= \textcolor{green}{\textbf{4}}
\end{aligned}
\end{array}
$$

### Try

<span style="color: red">Try: Complete the RSA Encryption Algorithm</span>

Choose two prime numbers:
- Let $\textcolor{blue}{p=61}$ and $\textcolor{blue}{q=53}$.

Compute $n$ and $\phi(n)$:
- $n = p \times q$ = …………………………………
- $\phi(n)$ = …………………………………

Choose $e$:
- Let $\textcolor{blue}{e=17}$

Compute $d$: …………………………………

---

**Encryption:**  
Suppose the plaintext $\textcolor{blue}{𝑀=3}$  
$𝐶$ = …………………………………  

**Decryption:**  
$𝑀$ = …………………………………
