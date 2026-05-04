---
title: "Foundations of Security Week8 Seminar: Digital Signature"
published: 2026-04-30
# updated: 
description: "A digital signature is a cryptographic result attached to data that helps a receiver verify three things: Who sent it, It was not changed, Sender cannot easily deny it"
image: ./143329934.png
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

# Digital Signature

## What is a digital signature

A digital signature is a cryptographic result attached to data that helps a receiver verify three things:

|                            1                            |                      2                      |                         3                         |
| :-----------------------------------------------------: | :-----------------------------------------: | :-----------------------------------------------: |
|                       Who sent it                       |             It was not changed              |           Sender cannot easily deny it            |
| <span style="color: brown">Origin authentication</span> | <span style="color: brown">Integrity</span> | <span style="color: brown">Non-repudiation</span> |

Important: a digital signature does not hide the message. Confidentiality comes from encryption, not from the signature itself.

![](img/Pasted_image_20260504133314.png)

Simple idea: sign with the private key, verify with the public key.

## Why we need it

Without protection, a digital file can be copied, edited, or impersonated in transit. The receiver needs proof of source and integrity.

<div style="overflow-x: auto; width: 100%; padding: 10px 0; box-sizing: border-box;">
  <div style="display: flex; gap: 32px; flex-wrap: nowrap; min-width: min-content; box-sizing: border-box;">
    <!-- 左侧无数字签名卡片 -->
    <div style="border-radius: 8px; box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); padding: 40px; min-width: 580px; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
      <h2 style="color: #e63946; font-size: 32px; font-weight: 600; margin: 0 0 28px 0; line-height: 1.3;">If there is no digital signature</h2>
      <ul style="list-style-type: disc; padding-left: 28px; margin: 0 0 40px 0;">
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 18px;">Anyone can claim “I sent this.”</li>
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 18px;">A message can be modified silently.</li>
        <li style="font-size: 22px; line-height: 1.6;">The receiver has no easy proof for a third party.</li>
      </ul>
      <div style="background: #fde2e4; color: #e63946; padding: 14px 40px; font-size: 24px; font-weight: 600; text-align: center; width: fit-content; clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); line-height: 1.2;">trust is weak</div>
    </div>
    <!-- 右侧有效数字签名卡片 -->
    <div style="border-radius: 8px; box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); padding: 40px; min-width: 580px; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
      <h2 style="color: #219653; font-size: 32px; font-weight: 600; margin: 0 0 28px 0; line-height: 1.3;">With a valid digital signature</h2>
      <ul style="list-style-type: disc; padding-left: 28px; margin: 0 0 40px 0;">
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 18px;">The public key checks the sender’s signature.</li>
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 18px;">Any change to the signed data breaks verification.</li>
        <li style="font-size: 22px; line-height: 1.6;">It supports accountability in software, email, and documents.</li>
      </ul>
      <div style="background: #dcfce7; color: #16a34a; padding: 14px 40px; font-size: 24px; font-weight: 600; text-align: center; width: fit-content; clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); line-height: 1.2;">trust can be checked</div>
    </div>
  </div>
</div>

## Building blocks

|                                                    #                                                     |                               K                                |                           V                           |                                       ID                                        |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------: | :---------------------------------------------------: | :-----------------------------------------------------------------------------: |
|                                            **Hash function**                                             |                        **Private key**                         |                    **Public key**                     |                              **Certificate / PKI**                              |
| Turns any message into a fixed-size digest. Small changes in the message create a very different digest. | Kept secret by the signer. It is used to create the signature. | Shared with others. It is used to verify a signature. | Binds a public key to an identity so that people know whose key they are using. |

<center>Together these components answer two questions: “Did this come from the claimed sender?” and “Has anything changed?”</center>

## How digital signatures work

![](img/Pasted_image_20260504134152.png)

1. <span style="color: blue">Hash the message</span><br>A hash function converts the message into a short fingerprint.
2. <span style="color: orange">Sign the hash</span><br>The sender uses a private key to sign that fingerprint.
3. <span style="color: green">Verify</span><br>The receiver recomputes the hash and uses the public key of the sender to check the signature.

### Key insight

The signature is created over a hash, <span style="color: red">not by encrypting the whole document</span>. That makes signing efficient even for large files.

### Verification fails if

- the content changes
- the wrong public key is used
- the signature was forged

---

<div style="overflow-x: auto; width: 100%; padding: 16px 0; box-sizing: border-box;">
  <div style="display: flex; align-items: center; gap: 28px; flex-wrap: nowrap; min-width: min-content; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
    <!-- 步骤1 卡片 -->
    <div style="background: #f8fafc; border: 3px solid #2563eb; border-radius: 8px; box-shadow: 0 0 12px rgba(37, 99, 235, 0.35), 0 3px 10px rgba(0, 0, 0, 0.1); padding: 48px 36px; min-width: 300px; box-sizing: border-box;">
      <p style="margin: 0; font-size: 32px; font-weight: 600; color: #1e293b; text-align: center; line-height: 1.4;">1. Hash<br>message</p>
    </div>
    <!-- 箭头 -->
    <div style="width: 64px; height: 88px; background: #64748b; clip-path: polygon(0 0, 32% 0, 100% 50%, 32% 100%, 0 100%, 68% 50%); filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));"></div>
    <!-- 步骤2 卡片 -->
    <div style="background: #f8fafc; border: 3px solid #7c3aed; border-radius: 8px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.35), 0 3px 10px rgba(0, 0, 0, 0.1); padding: 48px 36px; min-width: 300px; box-sizing: border-box;">
      <p style="margin: 0; font-size: 32px; font-weight: 600; color: #1e293b; text-align: center; line-height: 1.4;">2. Encrypt hash<br>with private<br>key</p>
    </div>
    <!-- 箭头 -->
    <div style="width: 64px; height: 88px; background: #64748b; clip-path: polygon(0 0, 32% 0, 100% 50%, 32% 100%, 0 100%, 68% 50%); filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));"></div>
    <!-- 步骤3 卡片 -->
    <div style="background: #f8fafc; border: 3px solid #ea580c; border-radius: 8px; box-shadow: 0 0 12px rgba(234, 88, 12, 0.35), 0 3px 10px rgba(0, 0, 0, 0.1); padding: 48px 36px; min-width: 300px; box-sizing: border-box;">
      <p style="margin: 0; font-size: 32px; font-weight: 600; color: #1e293b; text-align: center; line-height: 1.4;">3. Send<br>message<br>+ signature</p>
    </div>
    <!-- 箭头 -->
    <div style="width: 64px; height: 88px; background: #64748b; clip-path: polygon(0 0, 32% 0, 100% 50%, 32% 100%, 0 100%, 68% 50%); filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));"></div>
    <!-- 步骤4 卡片 -->
    <div style="background: #f8fafc; border: 3px solid #2563eb; border-radius: 8px; box-shadow: 0 0 12px rgba(37, 99, 235, 0.35), 0 3px 10px rgba(0, 0, 0, 0.1); padding: 48px 36px; min-width: 300px; box-sizing: border-box;">
      <p style="margin: 0; font-size: 32px; font-weight: 600; color: #1e293b; text-align: center; line-height: 1.4;">4. Decrypt with<br>public key</p>
    </div>
    <!-- 箭头 -->
    <div style="width: 64px; height: 88px; background: #64748b; clip-path: polygon(0 0, 32% 0, 100% 50%, 32% 100%, 0 100%, 68% 50%); filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));"></div>
    <!-- 步骤5 卡片 -->
    <div style="background: #f8fafc; border: 3px solid #16a34a; border-radius: 8px; box-shadow: 0 0 12px rgba(22, 163, 74, 0.35), 0 3px 10px rgba(0, 0, 0, 0.1); padding: 48px 36px; min-width: 300px; box-sizing: border-box;">
      <p style="margin: 0; font-size: 32px; font-weight: 600; color: #1e293b; text-align: center; line-height: 1.4;">5. Compute<br>message hash<br>& compare<br>hashes</p>
    </div>
  </div>
</div>

<center style="color: green">If both hashes match, the signature is valid.</center>

## Algorithms and common uses

<div style="overflow-x: auto; width: 100%; padding: 10px 0; box-sizing: border-box;">
  <div style="display: flex; gap: 48px; flex-wrap: nowrap; min-width: min-content; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
    <!-- 左侧算法卡片 -->
    <div style="border-radius: 8px; box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); padding: 40px; min-width: 520px; box-sizing: border-box;">
      <h2 style="font-size: 36px; font-weight: 700; margin: 0 0 40px 0; line-height: 1.3;">Common signature algorithms</h2>
      <div style="display: flex; flex-direction: column; gap: 36px;">
        <!-- RSA 项 -->
        <div style="display: flex; align-items: flex-start; gap: 40px;">
          <span style="color: #1967d2; font-size: 32px; font-weight: 700; min-width: 100px;">RSA</span>
          <p style="margin: 0; font-size: 24px; line-height: 1.5;">Widely taught and widely<br>deployed</p>
        </div>
        <!-- ECDSA 项 -->
        <div style="display: flex; align-items: flex-start; gap: 40px;">
          <span style="color: #0d9466; font-size: 32px; font-weight: 700; min-width: 100px;">ECDSA</span>
          <p style="margin: 0; font-size: 24px; line-height: 1.5;">Strong security with smaller<br>key sizes</p>
        </div>
        <!-- EdDSA 项 -->
        <div style="display: flex; align-items: flex-start; gap: 40px;">
          <span style="color: #f59e0b; font-size: 32px; font-weight: 700; min-width: 100px;">EdDSA</span>
          <p style="margin: 0; font-size: 24px; line-height: 1.5;">Modern design; included in<br>FIPS 186-5 as Ed25519 /<br>Ed448 family</p>
        </div>
      </div>
    </div>
    <!-- 右侧用途区域 -->
    <div style="box-sizing: border-box;">
      <h2 style="font-size: 36px; font-weight: 700; margin: 0 0 32px 0; line-height: 1.3;">Common uses</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; box-sizing: border-box;">
        <!-- 软件签名卡片 -->
        <div style="background: #eff4fb; border: 2px solid #c9d8f0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 32px; min-width: 380px; box-sizing: border-box;">
          <h3 style="color: #0f2b55; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; line-height: 1.3;">Software signing</h3>
          <p style="margin: 0; color: #0f2b55; font-size: 22px; line-height: 1.5;">Proves a program or update<br>came from its publisher.</p>
        </div>
        <!-- 签名邮件卡片 -->
        <div style="background: #f0f9f4; border: 2px solid #c8e6d9; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 32px; min-width: 380px; box-sizing: border-box;">
          <h3 style="color: #0f2b55; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; line-height: 1.3;">Signed email</h3>
          <p style="margin: 0; color: #0f2b55; font-size: 22px; line-height: 1.5;">Lets recipients verify sender<br>identity and tamper detection.</p>
        </div>
        <!-- PDF/合同审批卡片 -->
        <div style="background: #fff8e6; border: 2px solid #ffe8b8; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 32px; min-width: 380px; box-sizing: border-box;">
          <h3 style="color: #0f2b55; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; line-height: 1.3;">PDF / contract approval</h3>
          <p style="margin: 0; color: #0f2b55; font-size: 22px; line-height: 1.5;">Supports trusted document<br>workflows and audit trails.</p>
        </div>
        <!-- 网站证书卡片 -->
        <div style="background: #f4f2fc; border: 2px solid #dcd6f2; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); padding: 32px; min-width: 380px; box-sizing: border-box;">
          <h3 style="color: #0f2b55; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; line-height: 1.3;">Certificates on the web</h3>
          <p style="margin: 0; color: #0f2b55; font-size: 22px; line-height: 1.5;">Certificates themselves are<br>digitally signed by a CA.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Limitations and best practices

<div style="overflow-x: auto; width: 100%; padding: 10px 0; box-sizing: border-box;">
  <div style="display: flex; gap: 48px; flex-wrap: nowrap; min-width: min-content; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
    <!-- 左侧 限制与风险 卡片 -->
    <div style="border-radius: 8px; box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); padding: 40px; min-width: 650px; box-sizing: border-box;">
      <h2 style="color: #e63946; font-size: 32px; font-weight: 600; margin: 0 0 28px 0; line-height: 1.3;">Limitations / risks</h2>
      <ul style="list-style-type: disc; padding-left: 28px; margin: 0;">
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 32px;">If the private key is stolen, an attacker can create valid signatures.</li>
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 32px;">Verification only works if the receiver trusts the correct public key or certificate.</li>
        <li style="font-size: 22px; line-height: 1.6;">A signature proves integrity and origin, but it does not prove the content is true or safe.</li>
      </ul>
    </div>
    <!-- 右侧 最佳实践 卡片 -->
    <div style="border-radius: 8px; box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2); padding: 40px; min-width: 650px; box-sizing: border-box;">
      <h2 style="color: #219653; font-size: 32px; font-weight: 600; margin: 0 0 28px 0; line-height: 1.3;">Best practices</h2>
      <ul style="list-style-type: disc; padding-left: 28px; margin: 0;">
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 32px;">Protect private keys with strong storage and access control.</li>
        <li style="font-size: 22px; line-height: 1.6; margin-bottom: 32px;">Use trusted certificates and check validity / revocation status when relevant.</li>
        <li style="font-size: 22px; line-height: 1.6;">Choose modern approved algorithms and key sizes.</li>
      </ul>
    </div>
  </div>
</div>

## RSA Signature: Choosing Public and Private Keys

- Choose two prime numbers: $p = 3$ and $q = 11$
- Compute $n = p \times q = 3 \times 11 = 33$
- Compute $\phi(n) = (p − 1)(q − 1) = 2 \times 10 = 20$
- Choose e such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$. Let $\textcolor{blue}{e = 3}$
- Find d such that $e \cdot d \equiv 1 (\bmod \phi(n))$
- Here, $3 \times 7 = 21 \equiv 1 (\bmod 20)$, so $\textcolor{blue}{d = 7}$

<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; display: flex; flex-direction: column; gap: 48px; width: fit-content; margin: 10px 0; box-sizing: border-box;">
  <!-- 公钥卡片 -->
  <div style="background: #eff6ff; border: 3px solid #2b78e4; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18); padding: 48px 80px; min-width: 400px; box-sizing: border-box; text-align: center;">
    <p style="margin: 0 0 16px 0; font-size: 40px; font-weight: 600; color: #2b78e4; line-height: 1.3;">Public key</p>
    <p style="margin: 0; font-size: 36px; font-weight: 600; color: #2b78e4; line-height: 1.3;">(e, n) = (3, 33)</p>
  </div>
  <!-- 私钥卡片 -->
  <div style="background: #f0f9f0; border: 3px solid #2da44e; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18); padding: 48px 80px; min-width: 400px; box-sizing: border-box; text-align: center;">
    <p style="margin: 0 0 16px 0; font-size: 40px; font-weight: 600; color: #2da44e; line-height: 1.3;">Private key</p>
    <p style="margin: 0; font-size: 36px; font-weight: 600; color: #2da44e; line-height: 1.3;">(d, n) = (7, 33)</p>
  </div>
</div>

These keys are used for signing and verifying

## RSA Signature: Signing the Message

- Let the message <span style="color: blue">hash</span> be $h = 2$
- Use the private $key (d, n) = (7, 33)$
- Compute signature: $\textcolor{blue}{s = h^d \bmod n}$

$$\begin{aligned}s &= 2^7 \bmod 33 \\ &= 128 \bmod 33 \\ &= 29\end{aligned}$$

<span style="color: green">Therefore, the <span style="color: blue">digital signature</span> is</span> $\textcolor{blue}{s = 29}$

<div style="background: #f0f9f0; border: 3px solid #2da44e; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18); padding: 48px 80px; min-width: 200px; box-sizing: border-box; text-align: center;">
<p style="font-size: 24px; font-weight: 600; color: #2da44e; line-height: 1.3;">Sender uses private key to sign</p>
</div>

## RSA Signature: Verifying the Signature

- Receiver uses the public $key (e, n) = (3, 33)$
- Verify signature $s = 29$ by computing $h' = s^e \bmod n$
- If $\textcolor{blue}{h'}$ equals the original <span style="color: blue">hash</span> $h = 2$, the signature is valid

$$\begin{aligned}h' &= 29^3 \bmod 33 \\ &= 24389 \bmod 33 \\ &= 2 \end{aligned}$$

<span style="color: green">Since</span> $\textcolor{blue}{h' = 2 = h}$<span style="color: green">, the signature is valid</span>

<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; width: fit-content; margin: 10px 0; box-sizing: border-box;">
  <div style="background: #fff8eb; border: 4px solid #f2994a; border-radius: 12px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); padding: 60px 40px; min-width: 420px; box-sizing: border-box; text-align: center;">
    <p style="margin: 0 0 12px 0; font-size: 36px; font-weight: 600; color: #f2994a; line-height: 1.2;">Signature is</p>
    <p style="margin: 0 0 32px 0; font-size: 48px; font-weight: 700; color: #f2994a; line-height: 1.2;">VALID</p>
    <p style="margin: 0 0 24px 0; font-size: 36px; font-weight: 500; color: #1e1e1e; line-height: 1.3;">because</p>
    <p style="margin: 0 0 24px 0; font-size: 36px; font-weight: 600; color: #0066cc; line-height: 1.3;">h' = h</p>
    <p style="margin: 0; font-size: 36px; font-weight: 600; color: #1e1e1e; line-height: 1.3;">2 = 2</p>
  </div>
</div>

## Digital Signature (Activity)

### Digital Signature Activity

Connect to <span style="color: blue">CDUT_WIFI</span>, open your browser and Enter the URL <span style="color: blue"><u>http://</u></span><span style="color: brown"><u>172.20.X.X</u></span> Click on the login button and register with your <span style="color: blue">Student ID</span> and appropriate <span style="color: blue">Password</span>. Login after successful registration

| ![](img/Pasted_image_20260504141839.png) | ![](img/Pasted_image_20260504141854.png) |
| ---------------------------------------- | ---------------------------------------- |

---

Click on “Digital Signature” on the navigation tabs. Generate your key pairs (<span style="color: blue">public key and private key</span>) 

Enter any message and click on “<span style="color: blue">Sign and Store Message</span>”

![](img/Pasted_image_20260504141946.png)

---

Click on “Class Messages” on the navigation tabs. 

Verify the messages submitted by your friends on the page using their <span style="color: blue">public key</span>

![](img/Pasted_image_20260504142127.png)

# Presentation Slot Booking

Connect to <span style="color: blue">CDUT_WIFI</span>, open your browser and Enter the URL <span style="color: blue"><u>http://</u></span><span style="color: brown"><u>172.20.X.X</u></span> Click on the “<span style="color: blue">Presentation Booking</span>” tab to book an available slot for your class.

| ![](img/Pasted_image_20260504141839.png) | ![](img/Pasted_image_20260504142348.png) |
| ---------------------------------------- | ---------------------------------------- |
