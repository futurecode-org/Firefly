---
title: "Foundations of Security Week7 Lecture"
published: 2026-04-21
# updated: 
description: "Diffie–Hellman key exchange, ElGamal encryption, Digital signature, RSA signature, Feistel cipher"
image: ./143966682.jpg
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

1. Limitations of symmetric key encryption
2. Introduction to Diffie–Hellman key exchange
3. Introduction to ElGamal encryption
4. Key generation, encryption and decryption process of ElGamal
5. Introduction to Digital signature and RSA signature
6. Structure of the Feistel cipher

## Learning Outcomes

<span style="color: red">By the end of this lecture, students should be able to:</span>

1. Explain the key distribution problem in symmetric encryption
2. Describe the purpose of the Diffie–Hellman key exchange
3. Explain how two parties establish a shared secret using Diffie–Hellman
4. Apply ElGamal encryption through practical examples
5. Understand Digital Signature and How the RSA signature works
6. Describe the structure and working principle of the Feistel cipher

## Symmetric Key Encryption

Symmetric Key Encryption is a cryptographic method where the <span style="color: blue">same key</span> is used for <span style="color: blue">both encryption and decryption</span>.

In this system, both the <span style="color: red">sender</span> and the <span style="color: red">receiver</span> <span style="color: blue">share a secret key</span>, and they use it to transform plaintext (original message) into ciphertext (encrypted message) and vice versa.

![](img/Pasted_image_20260421102016.png)

## Problem with the Symmetric Key Encryption

### Symmetric Key Encryption

### <span style="color: red">Problem with the Symmetric Key Encryption</span>

1. Transmission of secret key over a public channel is vulnerable to attacks.
2. Attacker can intercept both the shared secret key (K) and ciphertext during transmission.
3. If the secret key is compromised, all communication using that key is at risk.

![](img/Pasted_image_20260421102404.png)

## Diffie-Hellman Key Exchange

- The Diffie–Hellman key exchange is a method for securely exchanging cryptographic keys over a public channel. It allows two parties to each generate a shared secret key without directly transmitting it over the network. 
- Introduced in 1976 by Whitfield Diffie and Martin Hellman. 
- It was the first practical method for establishing a shared secret over an unprotected communications channel. 
- It allows two parties who have never met before to securely establish a shared key, which can then be used to secure their communication.
- It enables secure key exchange without transmitting the actual secret key

### <span style="color: red">How it works</span>

![](img/Pasted_image_20260421102625.png)

### Reading Assignment

#### <span style="color: red">How to find a generator/primitive root</span>

### <span style="color: red">Example</span>

![](img/Pasted_image_20260421103149.png)

### Quiz

| ![](img/Pasted_image_20260421103437.png)                 | ![](img/Pasted_image_20260421103441.png)               |
| -------------------------------------------------------- | ------------------------------------------------------ |
| Alice’s secret key: $\textcolor{blue}{S_A} \mathbf{= 3}$ | Bob’s secret key: $\textcolor{blue}{S_B} \mathbf{= 4}$ |

<span style="color: red">Task:</span>

Users <span style="color: red">A</span> and <span style="color: red">B</span> are using the Diffie-Hellman key exchange method with a common prime $\textcolor{blue}{P=11}$ and a generator $\textcolor{blue}{g=2}$. User A chooses her secret key $\textcolor{blue}{S_A} \mathbf{= 3}$ and computes her public value $\textcolor{blue}{C_A}\mathbf{=8}$, which she sends to User B through the public channel. User B selects his secret key $\textcolor{blue}{S_B}\mathbf{=4}$ and computes his public value $\textcolor{blue}{C_B}\mathbf{=5}$, which he sends to User A through the public channel. What is the <span style="color: blue">common secret key shared</span> between User A and User B?

## ElGamal Encryption

The ElGamal Encryption Algorithm is a <span style="color: red">public-key cryptosystem</span> based on the difficulty of the <span style="color: red">discrete logarithm</span> problem. It was developed by Taher ElGamal in 1985 and is used for secure data transmission.

### <span style="color: red">Key Generation</span>

1. Choose a large prime number, $\textcolor{blue}p$.
2. Select a generator ($g$): Pick a number $\textcolor{blue}g$ (where $1 < g < p−1$) that is a <span style="color: red">generator</span>/<span style="color: red">primitive root</span> modulo $p$. This ensures $g$ can generate all numbers from $1$ to $p−1$ when raised to different powers.
3. Pick a private key, $\textcolor{blue}x$: Choose a random integer 𝑥 (where $1 \leqslant x \leqslant p−2$) as the private key.
4. Compute the public key $\textcolor{blue}y$: Calculate $\textcolor{blue}{y = g^x \bmod p}$. The public key is the triplet ($\textcolor{red}{p,g,y}$), while $\textcolor{red}x$ remains secret. 

### <span style="color: red">Encryption</span>

To encrypt a message $\textcolor{blue}m$ (where $0 \leqslant m < p$):

1. Obtain the recipient’s public key: Use their ($\textcolor{blue}{p,g,y}$)
2. Choose a random number $\textcolor{blue}k$: Select a random integer $k$ (where $1 \leqslant k \leqslant p−2$). This is the session key and should be unique for each encryption.
3. Compute the ciphertext pair: 
4. $\textcolor{blue}{c_1 = g^k \bmod p}$ (this hides 𝑘 and is sent as part of the ciphertext).
5. $\textcolor{blue}{c_2 = m \cdot y^k \bmod p}$ (this encrypts the message using the recipient’s public key).
6. Send the ciphertext: The encrypted message is the pair ($\textcolor{blue}{c_1,c_2}$).

### <span style="color: red">Decryption</span>

To decrypt the ciphertext ($\textcolor{blue}{c_1,c_2}$) using the private key $x$:

1. **Compute the shared secret**: Calculate $\textcolor{blue}{s= c_1^x} \bmod p$. Since $\textcolor{blue}{c_1=g^k}$, this becomes $\textcolor{blue}{s=(g^k)^x=g^{kx} \bmod p}$.
2. **Find the modular inverse of** $s$: Compute $\textcolor{blue}{s^{−1} \bmod p}$ (the number such that $\textcolor{red}{s \cdot s^{−1} \equiv 1 \bmod p}$).
3. Recover the message: Calculate $\textcolor{blue}{m = c_2 \cdot s^{−1} \bmod p}$.

Why it works:  
$\textcolor{blue}{c_2} = m \cdot y^k = m \cdot \textcolor{blue}{(g^x)^k} = m \cdot \textcolor{blue}{g^{kx}}$, so  
$\textcolor{blue}{c_2} \cdot \textcolor{blue}{s^{−1}} = (m \cdot \textcolor{blue}{g^{kx}}) \cdot (\textcolor{blue}{g^{kx}})^{−1} = m$.  

## ElGamal Example

### ElGamal Encryption

![](img/Pasted_image_20260421114037.png)

### Quiz

#### ElGamal Encryption Quiz -1

![](img/Pasted_image_20260421114118.png)

#### ElGamal Encryption Quiz - 2

<span style="color: red">Task:</span>

Consider an ElGamal encryption scheme with a common prime $\textcolor{red}{p=23}$ and a primitive root (generator) $\textcolor{red}{g=5}$. Given that the public key $\textcolor{red}{Y=4}$ and User C chooses the random integer $\textcolor{red}{k=3}$, what is the ciphertext for the message $\textcolor{red}{M=15}$?

## Digital Signature

- A digital signature is a cryptographic technique used to prove the authenticity and integrity of a digital message or document.
- It is created using the <span style="color: blue">sender's private key</span> and verified using the <span style="color: brown">sender's public key</span>.
- It provides assurance that the message has <span style="color: blue">not been modified</span> in transit.

![](img/Pasted_image_20260421191439.png)

<div style="
    border: 2px solid #c5d2e0;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 600px;
    font-family: Arial, sans-serif;
">
    <!-- Authentication -->
    <div style="margin-bottom: 30px;">
        <div style="
            background-color: #e8f2ff;
            border: 2px solid #4a87c8;
            border-radius: 6px;
            padding: 15px 20px;
            display: inline-block;
        ">
            <span style="
                font-size: 28px;
                font-weight: bold;
                color: #1a3c80;
            ">Authentication</span>
        </div>
        <div style="
            margin-top: 12px;
            font-size: 26px;
            color: #222222;
        ">Confirms the identity of the sender</div>
    </div>
    <!-- Integrity -->
    <div style="margin-bottom: 30px;">
        <div style="
            background-color: #e8f2ff;
            border: 2px solid #4a87c8;
            border-radius: 6px;
            padding: 15px 20px;
            display: inline-block;
        ">
            <span style="
                font-size: 28px;
                font-weight: bold;
                color: #1a3c80;
            ">Integrity</span>
        </div>
        <div style="
            margin-top: 12px;
            font-size: 26px;
            color: #222222;
        ">Detects any change in the message</div>
    </div>
    <!-- Non-repudiation -->
    <div>
        <div style="
            background-color: #e8f2ff;
            border: 2px solid #4a87c8;
            border-radius: 6px;
            padding: 15px 20px;
            display: inline-block;
        ">
            <span style="
                font-size: 28px;
                font-weight: bold;
                color: #1a3c80;
            ">Non-repudiation</span>
        </div>
    </div>
</div>

---

<span style="color: red">RSA Signature: Choosing Public and Private Keys</span>

- Choose two prime numbers: $p = 3$ and $q = 17$
- Compute $n = p \times q = 3 \times 17 = 51$
- Compute $\phi(n) = (3 − 1)(17 − 1) = 2 \times 16 = 32$
- Choose e such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$. Let $\textcolor{blue}{e = 5}$
- Find d such that $e \cdot d \equiv 1 (\bmod \phi(n))$
- Here, $5 \times 13 = 65 \equiv 1 (\bmod 32)$, so $\textcolor{blue}{d = 13}$

<div style="
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    text-align: center;
">
    <!-- Public Key Box -->
    <div style="
        background-color: #eaf4ff;
        border: 3px solid #3484d2;
        border-radius: 8px;
        padding: 30px 20px;
        margin-bottom: 40px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    ">
        <div style="
            font-size: 3.2em;
            font-weight: bold;
            color: #3484d2;
            line-height: 1.3;
        ">
            Public key<br>
            (e, n) = (5, 51)
        </div>
    </div>
    <!-- Private Key Box -->
    <div style="
        background-color: #edf9ed;
        border: 3px solid #34a853;
        border-radius: 8px;
        padding: 30px 20px;
        margin-bottom: 50px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    ">
        <div style="
            font-size: 3.2em;
            font-weight: bold;
            color: #34a853;
            line-height: 1.3;
        ">
            Private key<br>
            (d, n) = (13, 51)
        </div>
    </div>
    <!-- Bottom Text -->
    <div style="
        font-size: 3em;
        font-weight: bold;
        color: #1a3c80;
        line-height: 1.3;
    ">
        These keys are used<br>
        for signing and verifying
    </div>
</div>

---

<span style="color: red">RSA Signature: Signing and Verifying the Signature</span>

<div style="
    display: flex;
    gap: 40px;
    justify-content: flex-start; /* 改为从左开始排列，配合滚动 */
    flex-wrap: nowrap; /* 禁止换行 */
    overflow-x: auto; /* 宽度不足时显示横向滚动条 */
    font-family: Arial, sans-serif;
    margin: 0 auto;
    max-width: 1400px;
    padding: 15px 10px; /* 加一点内边距避免内容贴边 */
">
    <!-- 左侧 Sender 签名卡片 -->
    <div style="
        border: 3px solid #7963d2;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        flex: 0 0 auto; /* 防止卡片被压缩 */
        width: 600px; /* 固定卡片宽度 */
    ">
        <!-- 顶部标题 -->
        <div style="
            background-color: #edf9ed;
            border: 2px solid #34a853;
            border-radius: 6px;
            padding: 10px 15px;
            margin-bottom: 25px;
            text-align: center;
        ">
            <span style="
                font-size: 1.8em;
                font-weight: bold;
                color: #2da44e;
            ">Sender uses private key to sign</span>
        </div>
        <!-- 步骤列表 -->
        <ul style="
            font-size: 1.4em;
            line-height: 1.6;
            margin: 0 0 20px 25px;
            padding: 0;
        ">
            <li style="margin-bottom: 10px;">
                Let the message <span style="color: #0066cc; font-weight: bold;">hash</span> be <span style="font-weight: bold;">h = 2</span>
            </li>
            <li style="margin-bottom: 10px;">
                Use the private <span style="font-weight: bold;">key (d, n) = (13, 51)</span>
            </li>
            <li>
                Compute signature: <span style="color: #0066cc; font-weight: bold;">s = h<sup>d</sup> mod n</span>
            </li>
        </ul>
        <!-- 计算框 -->
        <div style="
            background-color: #f8faff;
            border: 2px solid #5a67d8;
            border-radius: 6px;
            padding: 20px 25px;
            margin: 20px 0 30px;
            font-size: 1.8em;
            line-height: 1.6;
            color: black;
        ">
            s = 2<sup>13</sup> mod 51<br>
            &nbsp;= 8192 mod 51<br>
            &nbsp;= 32
        </div>
        <!-- 底部结论 -->
        <div style="
            font-size: 1.7em;
            font-weight: bold;
            color: #2da44e;
        ">
            The <span style="color: #0066cc;">digital signature</span> is <span style="color: #0066cc;">s = 32</span>
        </div>
    </div>
    <!-- 右侧 Receiver 验证卡片 -->
    <div style="
        border: 3px solid #fceade;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        flex: 0 0 auto; /* 防止卡片被压缩 */
        width: 600px; /* 固定卡片宽度 */
    ">
        <!-- 顶部标题 -->
        <div style="
            background-color: #fef6ed;
            border: 2px solid #ed7d31;
            border-radius: 6px;
            padding: 10px 15px;
            margin-bottom: 25px;
            text-align: center;
        ">
            <span style="
                font-size: 1.8em;
                font-weight: bold;
                color: #ed7d31;
            ">Receiver uses public key to verify</span>
        </div>
        <!-- 步骤列表 -->
        <ul style="
            font-size: 1.4em;
            line-height: 1.6;
            margin: 0 0 20px 25px;
            padding: 0;
        ">
            <li style="margin-bottom: 10px;">
                Receiver uses the <span style="font-weight: bold;">public key (e, n) = (5, 51)</span>
            </li>
            <li style="margin-bottom: 10px;">
                Verify signature <span style="font-weight: bold;">s = 32</span> by computing<br>
                <span style="font-weight: bold;">h' = s<sup>e</sup> mod n</span>
            </li>
            <li>
                If <span style="color: #0066cc; font-weight: bold;">h'</span> equals the original <span style="color: #0066cc; font-weight: bold;">hash</span> <span style="font-weight: bold;">h = 2</span>, the signature is valid
            </li>
        </ul>
        <!-- 计算框 -->
        <div style="
            background-color: #f8faff;
            border: 2px solid #5a67d8;
            border-radius: 6px;
            padding: 20px 25px;
            margin: 20px 0 30px;
            font-size: 1.8em;
            line-height: 1.6;
            color: black;
        ">
            h' = 32<sup>5</sup> mod 51<br>
            &nbsp;&nbsp;= 33554432 mod 51<br>
            &nbsp;&nbsp;= 2
        </div>
        <!-- 底部结论 -->
        <div style="
            font-size: 1.7em;
            font-weight: bold;
            color: #2da44e;
        ">
            Since <span style="color: #0066cc;">h' = 2 = h</span>, the signature is valid
        </div>
    </div>
</div>

## Feistel Cipher

- The Feistel Cipher is a symmetric encryption algorithm that uses a structure that <span style="color: red">divides</span> the data into <span style="color: red">two halves</span> and processes them through <span style="color: red">multiple rounds of permutation</span> and <span style="color: red">substitution</span> and then recombines them to produce the ciphertext.
- Its decryption process is essentially the same as encryption, just with the key schedule reversed. 

### <span style="color: red">How it works</span>

- <span style="color: blue">Splitting the Input</span>: The plaintext block (say, 64 bits) is divided into two equal halves: a left half (L) and a right half (R). Eg. if the block is 64 bits, L₀ and R₀ = 32 bits each.
- <span style="color: blue">Round Function</span>: 
    - The right half (<span style="color: red">R</span>) is fed into a round function **F**, which takes **R** and a <span style="color: red">round-specific subkey</span> $\textcolor{red}{K_i}$(derived from the main encryption key) as inputs. This function involve substitution boxes, or S-boxes, and permutations that scrambles the data.
    - The output of F is <span style="color: red">XOR</span>ed (**exclusive OR**) with the left half (<span style="color: red">L</span>).
    - The halves **swap places**: the old **R** becomes the new **L**, and the **XOR result** becomes the new **R**.
- <span style="color: blue">Multiple Rounds</span>: This process repeats for a set number of rounds (usally 16). Each round uses a different subkey, generated from the main key via a key schedule algorithm.
- <span style="color: blue">Final Step</span>: After the last round, the halves are concatenated to form the ciphertext.

![](img/Pasted_image_20260421195423.png)

### <span style="color: red">Example</span>

<span style="color: blue">2 ROUNDS</span>

- <span style="color: blue">Plaintext</span>: 16-bit plaintext<br>`1010 1100 0110 0011`
- <span style="color: blue">Subkeys</span>: Two 8-bit
    - Round 1 subkey ($K_1$):<br>`1100 1010`
    - Round 2 subkey ($K_2$):<br>`0011 0101`
- <span style="color: blue">Round Function (F)</span>:<br>Define **F(R, K)** as **R** <span style="color: red; font-weight: bold;">XOR</span> **K** followed by a ***left circular shift of 2*** bits.

![](img/Pasted_image_20260421200813.png)

### <span style="color: red">How it works</span>

#### Round 1

1. **Apply $F$ to $R_0$:**
    - $R_0 \textcolor{red}= 0110 ~ 0011$
    - $K_1 \textcolor{red}= 1100 ~ 1010$
    - $R_0 ~ XOR ~ K_1 \textcolor{red}= 0110 ~ 0011 \textcolor{red}\oplus 1100 ~ 1010 \textcolor{red}= 1010 ~ 1001$ (decimal 169)
    - Left shift 2 bits: $1010 ~ 1001$ <span style="color: red">→</span> $1010 ~ 0110$ (decimal 166)
    - So, $F(R_0,~ K_1) \textcolor{red}= 1010 ~ 0110$
2. **XOR with $L_0$:**
    - $L_0 \textcolor{red}= 1010 ~ 1100$
    - $F(R_0,~ K_1) \textcolor{red}= 1010 ~ 0110$
    - $L_0 \oplus F(R_0,~ K_1) \textcolor{red}= 1010 ~ 1100 \textcolor{red}\oplus 1010 ~ 0110 \textcolor{red}= 0000 ~ 1010$ (decimal 10)
3. **Swap:**
    - New $L_1 = R_0 \textcolor{red}= 0110 ~ 0011$
    - New $R_1 = L_0 \oplus F(R_0,~ K_1) \textcolor{red}= 0000 ~ 1010$

<span style="color: red">After Round 1</span>: $L_1 \textcolor{red}= 0110 ~ 0011,~ R_1 \textcolor{red}= 0000 ~ 1010$

#### Round 2

1.  **Apply $F$ to $R_1$:**
    - $R_1 \textcolor{red}= 0000\ 1010$
    - $K_2 \textcolor{red}= 0011\ 0101$
    - $R_1\ XOR\ K_2 = 0000\ 1010 \textcolor{red}\oplus 0011\ 0101 = 0011\ 1111$ (decimal 63)
    - Left shift 2 bits: $0011\ 1111$ <span style="color: red">→</span> $1111\ 1100$ (decimal 252)
    - So, $F(R_1, K_2) = 1111\ 1100$

2.  **XOR with $L_1$:**
    - $L_1 \textcolor{red}= 0110\ 0011$
    - $F(R_1, K_2) \textcolor{red}= 1111\ 1100$
    - $L_1 \oplus F(R_1, K_2) \textcolor{red}= 0110\ 0011 \textcolor{red}\oplus 1111\ 1100 \textcolor{red}= 1001\ 1111$ (decimal 159)

3.  **Swap:**
    - New $L_2 = R_1 \textcolor{red}= 0000\ 1010$
    - New $R_2 = L_1 \oplus F(R_1, K_2) \textcolor{red}= 1001\ 1111$

<span style="color: red">After Round 2</span>: $L_2 \textcolor{red}= 0000\ 1010,\ R_2 \textcolor{red}= 1001\ 1111$

#### Output

- **Ciphertext**: Concatenate $L_2$ and $R_2$:
    - $L_2 \mathbin{\|} R_2 = 0000\ 1010\ 1001\ 1111$ (16 bits, decimal 175)

