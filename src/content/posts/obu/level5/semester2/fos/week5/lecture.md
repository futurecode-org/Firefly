---
title: "Foundations of Security Week5 Lecture"
published: 2026-04-07
# updated: 
description: "Public key and Private key generation in RSA, RSA encryption and decryption process, Introduction to Chosen Ciphertext Attack (CCA) on RSA"
image: ./142986734.png
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

1. Review of RSA cryptographic algorithm
2. Public key and Private key generation in RSA
3. RSA encryption and decryption process
4. Introduction to Chosen Ciphertext Attack (CCA) on RSA
5. Understanding how attackers exploit decryption systems

## Learning Outcomes

<span style="color: red">By the end of this lecture, students should be able to:</span>
1. Explain the RSA key generation process
2. Identify the steps for generating public and private keys
3. Apply the Extended Euclidean Algorithm to compute the private key
4. Perform RSA encryption and decryption
5. Explain the concept of chosen ciphertext attacks on RSA

## Key Generation

| 1. Select Primes                                                           | 2. Compute $n$                                                                   | 3. Calculate $\phi(n)$                                                       | 4. Choose $e$                                                                      | 5. Compute $d$                                                                   |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Choose two **large prime numbers** $p$ and $q$. These must be kept secret. | Calculate the **modulus $n$** by multiplying p and q. This is part of both keys. | Compute **Euler's totient function** using the formula $(p-1) \times (q-1)$. | Select **public exponent $e$** where $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$. | Calculate **private exponent $d$** as the modular multiplicative inverse of $e$. |
| $p, q = primes$                                                            | $n = p \times q$                                                                 | $\phi(n) = (p-1)(q-1)$                                                       | $1 < e < \phi(n)$<br>$\gcd(e, \phi(n)) = 1$                                        | $(d × e) \equiv 1 \bmod \phi(n)$                                                 |

| Public Key                            | Private Key                           |
| ------------------------------------- | ------------------------------------- |
| $(n,~ e)$<br>Share freely with anyone | $(n,~ d)$<br>Keep secret at all times |

## Public Key Generation

### Public Keys of Alice

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- Alice 卡片 -->
    <div style="background: #d4e6e9; border-radius: 12px; padding: 24px; width: 320px; flex-shrink: 0;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 50px; height: 50px; background: #fff; border-radius: 50%; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 24px;">🤵🏼‍♀️</div>
        <div>
          <div style="font-size: 20px; font-weight: bold; color: #2980b9;">Alice</div>
          <div style="color: #7f8c8d;">Sender</div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">💬 Wants to send a message</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">Alice needs to encrypt her message <br>so only Bob can read it.</div>
        </div>
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">🔑 Needs a key pair</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">She must generate public and <br>private keys for encryption.</div>
        </div>
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">📤 Shares public key</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">Her public key can be shared with <br>anyone, including Bob.</div>
        </div>
      </div>
    </div>
    <!-- 中间安全通道 -->
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; width: 120px; flex-shrink: 0;">
      <div style="width: 70px; height: 70px; background: #fef9e7; border-radius: 50%; border: 2px solid #f1c40f; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #f39c12;">↔️</div>
      <div style="text-align: center;">
        <div style="font-weight: bold;">Secure Channel</div>
        <div style="color: #3498db; font-size: 14px;">End-to-end encryption</div>
      </div>
    </div>
    <!-- Bob 卡片 -->
    <div style="background: #d4e6e9; border-radius: 12px; padding: 24px; width: 320px; flex-shrink: 0;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 50px; height: 50px; background: #fff; border-radius: 50%; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 24px;">🤵🏻</div>
        <div>
          <div style="font-size: 20px; font-weight: bold; color: #f39c12;">Bob</div>
          <div style="color: #7f8c8d;">Receiver</div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">📩 Wants to receive message</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">Bob needs to decrypt Alice's message <br>securely.</div>
        </div>
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">🔑 Needs a key pair</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">He must also generate public and <br>private keys.</div>
        </div>
        <div style="background: #2c3e50; color: #fff; padding: 14px; border-radius: 8px;">
          <div style="font-weight: bold;">🔒 Keeps private key secret</div>
          <div style="font-size: 13px; color: #bdc3c7; margin-top: 4px;">His private key must never be shared <br>with anyone.</div>
        </div>
      </div>
    </div>
  </div>
</div>

### Public Keys of Alice & Bob

<span style="color: red">Both parties generate their public keys simultaneously</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <!-- Alice 卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 20px; width: 520px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 44px; height: 44px; background: #7CC8CF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <span style="color: white; font-size: 20px;">👩</span>
        </div>
        <div style="font-size: 28px; font-weight: 600; color: #333;">Alice</div>
      </div>
      <!-- 步骤内容 -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <!-- 步骤 1 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #1ABC9C; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">1</span>
            <span>Select Prime Numbers</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.6;">
            P<sub>A</sub> = 61,<br>
            Q<sub>A</sub> = 53
          </div>
        </div>
        <!-- 步骤 2 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #1ABC9C; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">2</span>
            <span>Calculate modulus n</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.6;">
            n<sub>A</sub> = P<sub>A</sub> × Q<sub>A</sub><br>
            = 61 × 53 = 3233
          </div>
        </div>
        <!-- 步骤 3 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #1ABC9C; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">3</span>
            <span>Choose Public Exponent e</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.8; display: flex; gap: 20px;">
            <div style="flex: 1;">
              e<sub>A</sub> must satisfy:<br>
              ✓ 1 &lt; e<sub>A</sub> &lt; φ(n<sub>A</sub>)<br>
              ✓ gcd(e<sub>A</sub>, φ(n<sub>A</sub>)) = 1<br>
              e<sub>A</sub> = 17
            </div>
            <div style="flex: 1; background: #1A252F; padding: 10px 15px; border-radius: 8px; font-size: 15px;">
              <div style="color: #95A5A6; margin-bottom: 5px;">Calculate Euler's Totient Function</div>
              φ(n<sub>A</sub>) = (P<sub>A</sub> - 1) × (Q<sub>A</sub> - 1)<br>
              = (61 - 1) × (53 - 1) = 60 × 52 = <span style="color: #F1C40F; font-weight: bold;">3120</span>
            </div>
          </div>
        </div>
        <!-- 公钥 -->
        <div style="background: #DDF3F5; border: 1px solid #7CC8CF; padding: 12px 20px; border-radius: 12px; font-size: 16px; margin-top: 10px;">
          <div style="display: flex; align-items: center; color: #2C3E50;">
            <span style="font-size: 18px; margin-right: 8px;">🔑</span>
            <span style="font-weight: 600;">Alice's Public Key</span>
          </div>
          <div style="padding-left: 30px; margin-top: 6px; font-family: 'Courier New', monospace; font-size: 15px; color: #34495E;">
            (n<sub>A</sub> = 3233, e<sub>A</sub> = 17)
          </div>
        </div>
      </div>
    </div>
    <!-- 中间连接图标 -->
    <div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <div style="width: 40px; height: 40px; background: #F1C40F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px; font-weight: bold;">⇄</div>
    </div>
    <!-- Bob 卡片 -->
    <div style="background: #FDFEED; border-radius: 16px; padding: 20px; width: 520px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 44px; height: 44px; background: #F1C40F; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <span style="color: white; font-size: 20px;">👨</span>
        </div>
        <div style="font-size: 28px; font-weight: 600; color: #333;">Bob</div>
      </div>
      <!-- 步骤内容 -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <!-- 步骤 1 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #F39C12; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">1</span>
            <span>Select Prime Numbers</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.6;">
            P<sub>B</sub> = 3,<br>
            Q<sub>B</sub> = 11
          </div>
        </div>
        <!-- 步骤 2 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #F39C12; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">2</span>
            <span>Calculate modulus n</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.6;">
            n<sub>B</sub> = P<sub>B</sub> × Q<sub>B</sub><br>
            = 3 × 11 = 33
          </div>
        </div>
        <!-- 步骤 3 -->
        <div style="background: #2C3E50; color: white; padding: 16px 20px; border-radius: 12px; font-size: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: #F39C12; border-radius: 50%; text-align: center; line-height: 28px; margin-right: 10px; font-weight: bold;">3</span>
            <span>Choose Public Exponent e</span>
          </div>
          <div style="padding-left: 38px; color: #ECF0F1; line-height: 1.8; display: flex; gap: 20px;">
            <div style="flex: 1;">
              e<sub>B</sub> must satisfy:<br>
              ✓ 1 &lt; e<sub>B</sub> &lt; φ(n<sub>B</sub>)<br>
              ✓ gcd(e<sub>B</sub>, φ(n<sub>B</sub>)) = 1<br>
              e<sub>B</sub> = 7
            </div>
            <div style="flex: 1; background: #1A252F; padding: 10px 15px; border-radius: 8px; font-size: 15px;">
              <div style="color: #95A5A6; margin-bottom: 5px;">Calculate Euler's Totient Function</div>
              φ(n<sub>B</sub>) = (P<sub>B</sub> - 1) × (Q<sub>B</sub> - 1)<br>
              = (3 - 1) × (11 - 1) = 2 × 10 = <span style="color: #F1C40F; font-weight: bold;">20</span>
            </div>
          </div>
        </div>
        <!-- 公钥 -->
        <div style="background: #FDFEED; border: 1px solid #F1C40F; padding: 12px 20px; border-radius: 12px; font-size: 16px; margin-top: 10px;">
          <div style="display: flex; align-items: center; color: #2C3E50;">
            <span style="font-size: 18px; margin-right: 8px;">🔑</span>
            <span style="font-weight: 600;">Bob's Public Key</span>
          </div>
          <div style="padding-left: 30px; margin-top: 6px; font-family: 'Courier New', monospace; font-size: 15px; color: #34495E;">
            (n<sub>B</sub> = 33, e<sub>B</sub> = 7)
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Public Keys of Alice

<span style="color: red">Mathematical constraints for selecting the public exponent <span style="color: blue">e</span></span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 卡片1：Range Constraint -->
    <div style="background: #D0EBEB; border-radius: 16px; padding: 24px; width: 480px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 标题栏 -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
        <div style="width: 40px; height: 40px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">1</div>
        <div style="font-size: 22px; font-weight: 600; color: #264653;">Range Constraint</div>
      </div>
      <!-- 核心公式块 -->
      <div style="background: #1E293B; color: white; padding: 24px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
        <div style="font-size: 16px; margin-bottom: 12px; opacity: 0.8;">e must be:</div>
        <div style="font-size: 28px; font-weight: bold;">1 &lt; e &lt; φ(n)</div>
      </div>
      <!-- 列表项 -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #26A69A; font-weight: bold;">✓</span>
          Greater than <span style="color: #26A69A; font-weight: bold;">1</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #26A69A; font-weight: bold;">✓</span>
          Less than <span style="color: blue; font-weight: bold;">φ(n)</span> (Euler's totient)
        </div>
      </div>
      <!-- 底部说明 -->
      <div style="background: #80CBC4; padding: 12px 16px; border-radius: 8px; font-size: 15px;">
        <span style="color: #7B2CBF; font-weight: bold;">Why:</span>
        <span style="color: #0F4C5C; margin-left: 4px;">Ensures <span style="color: blue; font-weight: bold;">e</span> is in the valid multiplicative group</span>
      </div>
    </div>
    <!-- 卡片2：Co-prime Condition -->
    <div style="background: #D0EBEB; border-radius: 16px; padding: 24px; width: 480px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 标题栏 -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
        <div style="width: 40px; height: 40px; background: #F9C74F; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">2</div>
        <div style="font-size: 22px; font-weight: 600; color: #264653;">Co-prime Condition</div>
      </div>
      <!-- 核心公式块 -->
      <div style="background: #1E293B; color: white; padding: 24px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
        <div style="font-size: 16px; margin-bottom: 12px; opacity: 0.8;">e must be co-prime with φ(n):</div>
        <div style="font-size: 28px; font-weight: bold;">gcd(e, φ(n)) = 1</div>
      </div>
      <!-- 列表项 -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #1976D2; font-weight: bold;">✓</span>
          No common factors with φ(n)
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #1976D2; font-weight: bold;">✓</span>
          Ensures multiplicative inverse exists
        </div>
      </div>
      <!-- 底部说明 -->
      <div style="background: #FDD835; padding: 12px 16px; border-radius: 8px; font-size: 15px;">
        <span style="color: #7B2CBF; font-weight: bold;">Why:</span>
        <span style="color: #0F4C5C; margin-left: 4px;">Required for the decryption key to exist</span>
      </div>
    </div>
    <!-- 卡片3：Modular Inverse -->
    <div style="background: #D0EBEB; border-radius: 16px; padding: 24px; width: 480px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 标题栏 -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; gap: 12px;">
        <div style="width: 40px; height: 40px; background: #7B8794; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">3</div>
        <div style="font-size: 22px; font-weight: 600; color: #264653;">Modular Inverse</div>
      </div>
      <!-- 核心公式块 -->
      <div style="background: #1E293B; color: white; padding: 24px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
        <div style="font-size: 28px; font-weight: bold; margin-bottom: 8px;">e × d ≡ 1 (mod φ(n))</div>
        <div style="font-size: 16px; opacity: 0.8;">Must have a multiplicative inverse d</div>
      </div>
      <!-- 列表项 -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #616161; font-weight: bold;">✓</span>
          d is the private key
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 16px; color: #264653;">
          <span style="color: #616161; font-weight: bold;">✓</span>
          <b>Found using Extended Euclidean Algorithm</b>
        </div>
      </div>
      <!-- 底部说明 -->
      <div style="background: #90A4AE; padding: 12px 16px; border-radius: 8px; font-size: 15px;">
        <span style="color: #7B2CBF; font-weight: bold;">Why:</span>
        <span style="color: #0F4C5C; margin-left: 4px;">Enables encryption/decryption symmetry</span>
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; align-items: center; min-width: max-content; padding: 16px 24px; background: linear-gradient(to right, #E0F7FA, #F5F5F5); border-radius: 12px; gap: 32px;">
    <!-- Alice's φ(n) 模块 -->
    <div style="text-align: center; flex-shrink: 0;">
      <div style="font-size: 16px; color: #264653; font-weight: 600; margin-bottom: 8px;">Alice's φ(n)</div>
      <div style="font-size: 28px; font-weight: bold; color: #26A69A;">φ(3233) = 3120</div>
    </div>
    <!-- 分隔线 -->
    <div style="width: 2px; height: 60px; background: #BDBDBD; flex-shrink: 0;"></div>
    <!-- Bob's φ(n) 模块 -->
    <div style="text-align: center; flex-shrink: 0;">
      <div style="font-size: 16px; color: #264653; font-weight: 600; margin-bottom: 8px;">Bob's φ(n)</div>
      <div style="font-size: 28px; font-weight: bold; color: #264653;">φ(33) = 20</div>
    </div>
    <!-- 分隔线 -->
    <div style="width: 2px; height: 60px; background: #BDBDBD; flex-shrink: 0;"></div>
    <!-- 公式提示模块 -->
    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0;">
      <span style="font-size: 24px; color: #F9C74F;">💡</span>
      <div style="font-size: 18px; color: #757575; font-style: italic;">Formula: φ(n) = (p-1) × (q-1)</div>
    </div>
  </div>
</div>

## Private Key of Alice

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- Alice 左侧卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 24px; width: 420px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div style="width: 50px; height: 50px; background: #7CC8CF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">👩</div>
        <div>
          <div style="font-size: 24px; font-weight: 600; color: #2C3E50;">Alice</div>
          <div style="font-size: 14px; color: #7f8c8d;">Private Key Calculation</div>
        </div>
      </div>
      <!-- 公钥信息块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Public Values</div>
        <div style="font-size: 16px; line-height: 1.6;">
          n<sub>A</sub> = 3233<br>
          e<sub>A</sub> = 17
        </div>
      </div>
      <!-- 素数因子块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Prime Factors</div>
        <div style="font-size: 16px; line-height: 1.6;">
          P<sub>A</sub> = 61<br>
          Q<sub>A</sub> = 53
        </div>
      </div>
      <!-- 欧拉函数计算块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Calculate Euler's Totient Function</div>
        <div style="font-size: 16px; line-height: 1.8;">
          φ(n<sub>A</sub>) = (P<sub>A</sub> - 1) × (Q<sub>A</sub> - 1)<br>
          = (61 - 1) × (53 - 1) = 60 × 52 = <span style="color: #F1C40F; font-weight: bold;">3120</span>
        </div>
      </div>
      <!-- 私钥展示块 -->
      <div style="background: #DDF3F5; border: 2px solid #7CC8CF; border-radius: 12px; padding: 16px;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px;">Private Key</div>
        <div style="font-size: 24px; font-weight: bold; color: #2C3E50;">d<sub>A</sub> = 2753</div>
      </div>
    </div>
    <!-- 右侧分步计算卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 24px; width: 900px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 标题 -->
      <div style="font-size: 22px; font-weight: 600; color: #2C3E50; margin-bottom: 24px;">Step-by-Step Calculation</div>
      <!-- 步骤1：同余方程 -->
      <div style="display: flex; gap: 16px; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
        <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 12px;">
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">Set Up the Congruence Equation</div>
          <div style="font-size: 15px; line-height: 1.6;">
            Find d<sub>A</sub> such that:<br>
            <span style="color: #F1C40F; font-size: 18px; font-weight: bold;">e<sub>A</sub> × d<sub>A</sub> ≡ 1 (mod φ(n<sub>A</sub>))</span><br>
            17 × d<sub>A</sub> ≡ 1 (mod 3120)
          </div>
        </div>
      </div>
      <!-- 步骤2：扩展欧几里得算法（已修正） -->
      <div style="display: flex; gap: 16px; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
        <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 12px;">
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">Apply Extended Euclidean Algorithm</div>
          <div style="display: flex; gap: 20px; font-size: 14px; line-height: 1.8;">
            <div style="flex: 1;">
              3120 = 17(183) + 9<br>
              17 = 9(1) + 8<br>
              9 = 8(1) + 1<br>
              8 = 1(8) + 0<br>
              <div style="color: #bdc3c7; margin-top: 8px; font-size: 13px;">Working backwards to find the inverse...</div>
            </div>
            <div style="flex: 1; border-left: 1px solid #7f8c8d; padding-left: 20px;">
              1 = 9 + 8(-1)<br>
              1 = 9 + [17 + 9(-1) ] (-1)<br>
              1 = 9 + 17 (-1) + 9(1)<br>
              1 = 17 (-1) + 9(2)<br>
              1 = 17 (-1) + [3120 + 17(-183)](2)
            </div>
            <div style="flex: 1; border-left: 1px solid #7f8c8d; padding-left: 20px;">
              1 = 17 (-1) + [3120(2) + 17(-366)]<br>
              1 = 17 (-1) + 3120(2) + 17(-366)<br>
              1 = 17 (<span style="color: #66CCFF">-367</span>) + 3120(2)<br>
              <div style="background: #Fef9e7; color: #2C3E50; padding: 8px; border-radius: 6px; margin-top: 16px; font-weight: 60px;">
                3120 + (<span style="color: #66CCFF">-367</span>) = 2753
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 步骤3：私钥解 -->
      <div style="display: flex; gap: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
        <div style="flex: 1; background: #DDF3F5; border: 2px solid #26A69A; border-radius: 12px; padding: 16px;">
          <div style="font-size: 16px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Solution: Private Key</div>
          <div style="font-size: 28px; font-weight: bold; color: #26A69A; margin-bottom: 8px;">d<sub>A</sub> = 2753</div>
          <div style="font-size: 15px; color: #7f8c8d; line-height: 1.4;">
            Verification: 17 (2753) = 46801 mod 3120 = 3120(15) + 1  mod 3120 <span style="color: #26A69A; font-weight: bold;">✓</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; align-items: center; min-width: max-content; padding: 12px 24px; background: #1E293B; border-radius: 8px; gap: 32px;">
    <!-- Alice 私钥模块 -->
    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0;">
      <span style="font-size: 20px; color: #26A69A;">🔒</span>
      <div>
        <span style="font-size: 16px; color: #E2E8F0;">Alice's Private Key: </span>
        <span style="font-size: 18px; font-weight: bold; color: #26A69A;">dₐ = 2753</span>
        <span style="font-size: 14px; color: #94A3B8; margin-left: 8px;">(Keep Secret!)</span>
      </div>
    </div>
    <!-- 分隔线 -->
    <div style="width: 2px; height: 36px; background: #475569; flex-shrink: 0;"></div>
    <!-- 用途说明模块 -->
    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0;">
      <span style="font-size: 20px; color: #F9C74F;">🔑</span>
      <span style="font-size: 16px; color: #E2E8F0;">Used for decrypting messages</span>
    </div>
  </div>
</div>

## Private Key of Bob

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- Bob 左侧卡片 -->
    <div style="background: #FDFEED; border-radius: 16px; padding: 24px; width: 420px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div style="width: 50px; height: 50px; background: #F1C40F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">👨</div>
        <div>
          <div style="font-size: 24px; font-weight: 600; color: #2C3E50;">Bob</div>
          <div style="font-size: 14px; color: #7f8c8d;">Private Key Calculation</div>
        </div>
      </div>
      <!-- 公钥信息块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Public Values</div>
        <div style="font-size: 16px; line-height: 1.6;">
          n<sub>B</sub> = 33<br>
          e<sub>B</sub> = 7
        </div>
      </div>
      <!-- 素数因子块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Prime Factors</div>
        <div style="font-size: 16px; line-height: 1.6;">
          <span style="color: #66CCFF">P<sub>B</sub></span> = 3<br>
          <span style="color: #66CCFF">Q<sub>B</sub></span> = 11
        </div>
      </div>
      <!-- 欧拉函数计算块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <div style="font-size: 14px; color: #bdc3c7; margin-bottom: 8px;">Calculate Euler's Totient Function</div>
        <div style="font-size: 16px; line-height: 1.8;">
          φ(n<sub>B</sub>) = (<span style="color: #66CCFF">P<sub>B</sub></span> - 1) × (<span style="color: #66CCFF">Q<sub>B</sub></span> - 1)<br>
          <span style="color: #F1C40F; font-weight: bold;">= (3 - 1) × (11 - 1) = 2 × 10 = </span><span style="color: #26A69A; font-weight: bold;">20</span>
        </div>
      </div>
      <!-- 私钥展示块 -->
      <div style="background: #FDFEED; border: 2px solid #F1C40F; border-radius: 12px; padding: 16px;">
        <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px;">Private Key</div>
        <div style="font-size: 24px; font-weight: bold; color: #2C3E50;">d<sub>B</sub> = 3</div>
      </div>
    </div>
    <!-- 右侧分步计算卡片 -->
    <div style="background: #FDFEED; border-radius: 16px; padding: 24px; width: 660px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 标题 -->
      <div style="font-size: 22px; font-weight: 600; color: #2C3E50; margin-bottom: 24px;">Step-by-Step Calculation</div>
      <!-- 步骤1：同余方程 -->
      <div style="display: flex; gap: 16px; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
        <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 12px;">
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">Set Up the Congruence Equation</div>
          <div style="font-size: 15px; line-height: 1.6;">
            Find d<sub>B</sub> such that:<br>
            <span style="color: #F1C40F; font-size: 18px; font-weight: bold;">e<sub>B</sub> × d<sub>B</sub> ≡ 1 (mod φ(n<sub>B</sub>))</span><br>
            7 × d<sub>B</sub> ≡ 1 (mod 20)
          </div>
        </div>
      </div>
      <!-- 步骤2：扩展欧几里得算法 -->
      <div style="display: flex; gap: 16px; margin-bottom: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
        <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 12px;">
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">Apply Extended Euclidean Algorithm</div>
          <div style="display: flex; gap: 20px; font-size: 14px; line-height: 1.8;">
            <div style="flex: 1;">
              20 = 7(2) + 6<br>
              7 = 6(1) + 1<br>
              6 = 1(6) + 0<br>
              <div style="color: #bdc3c7; margin-top: 8px; font-size: 13px;">Working backwards to find the inverse...</div>
            </div>
            <div style="flex: 2; border-left: 1px dashed #7f8c8d; padding-left: 20px;">
              1 = 7 + 6(-1)<br>
              1 = 7 + [20 + 7(-2) ] (-1)<br>
              1 = 7 + [20(-1) + 7(2)]<br>
              1 = 7(<span style="color: #66CCFF; font-weight: bold;">3</span>) + 20(-1)
            </div>
          </div>
        </div>
      </div>
      <!-- 步骤3：私钥解 -->
      <div style="display: flex; gap: 16px;">
        <div style="width: 36px; height: 36px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
        <div style="flex: 1; background: #FDFEED; border: 2px solid #26A69A; border-radius: 12px; padding: 16px;">
          <div style="font-size: 16px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Solution: Private Key</div>
          <div style="font-size: 28px; font-weight: bold; color: #26A69A; margin-bottom: 8px;">d<sub>B</sub> = 3</div>
          <div style="font-size: 15px; color: #7f8c8d; line-height: 1.4;">
            Verification: 7 (3) = 21 mod 20 = 1 mod 20 <span style="color: #26A69A; font-weight: bold;">✓</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; align-items: center; min-width: max-content; padding: 12px 24px; background: #1E293B; border-radius: 8px; gap: 32px;">
    <!-- Bob 私钥模块 -->
    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0;">
      <span style="font-size: 20px; color: #F9C74F;">🔒</span>
      <div>
        <span style="font-size: 16px; color: #E2E8F0;">Bob's Private Key: </span>
        <span style="font-size: 18px; font-weight: bold; color: #26A69A;">d<sub>B</sub> = 3</span>
        <span style="font-size: 14px; color: #94A3B8; margin-left: 8px;">(Keep Secret!)</span>
      </div>
    </div>
    <!-- 分隔线 -->
    <div style="width: 2px; height: 36px; background: #475569; flex-shrink: 0;"></div>
    <!-- 用途说明模块 -->
    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0;">
      <span style="font-size: 20px; color: #F9C74F;">🔑</span>
      <span style="font-size: 16px; color: #E2E8F0;">Used for decrypting messages</span>
    </div>
  </div>
</div>

## Key Pairs Summary

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- Alice 卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 20px; width: 480px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 44px; height: 44px; background: #26A69A; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">👩</div>
        <div style="font-size: 28px; font-weight: 600; color: #2C3E50;">Alice</div>
      </div>
      <!-- 公钥区域 -->
      <div style="display: flex; align-items: center; background: #26A69A; color: white; padding: 8px 16px; border-radius: 10px 10px 0 0; gap: 12px;">
        <span>🔓</span>
        <span style="font-weight: 600;">Public Key</span>
        <span style="background: #50C878; color: white; padding: 2px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">SHARE</span>
      </div>
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 0 0 10px 10px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
          <span>Modulus n</span>
          <span style="font-weight: bold; font-size: 18px;">3233</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-top: 1px solid #34495e;">
          <span>Exponent e</span>
          <span style="font-weight: bold; font-size: 18px;">17</span>
        </div>
      </div>
      <!-- 私钥区域 -->
      <div style="display: flex; align-items: center; background: #F9C74F; color: #2C3E50; padding: 8px 16px; border-radius: 10px 10px 0 0; gap: 12px;">
        <span>🔒</span>
        <span style="font-weight: 600;">Private Key</span>
        <span style="background: #F39C12; color: white; padding: 2px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">SECRET</span>
      </div>
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 0 0 10px 10px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
          <span>Exponent d</span>
          <span style="font-weight: bold; font-size: 18px; color: #F1C40F;">2753</span>
        </div>
      </div>
      <!-- 素数因子区域 -->
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 10px;">
        <div style="font-size: 15px; color: #95A5A6; margin-bottom: 8px;">Prime Factors (Secret)</div>
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1; background: #34495e; padding: 10px; border-radius: 8px; text-align: center;">
            <div style="font-size: 14px; color: #95A5A6;">p</div>
            <div style="font-weight: bold; font-size: 18px; margin-top: 4px;">61</div>
          </div>
          <div style="flex: 1; background: #34495e; padding: 10px; border-radius: 8px; text-align: center;">
            <div style="font-size: 14px; color: #95A5A6;">q</div>
            <div style="font-weight: bold; font-size: 18px; margin-top: 4px;">53</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bob 卡片 -->
    <div style="background: #FDFEED; border-radius: 16px; padding: 20px; width: 480px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 44px; height: 44px; background: #F9C74F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">👨</div>
        <div style="font-size: 28px; font-weight: 600; color: #2C3E50;">Bob</div>
      </div>
      <!-- 公钥区域 -->
      <div style="display: flex; align-items: center; background: #F9C74F; color: #2C3E50; padding: 8px 16px; border-radius: 10px 10px 0 0; gap: 12px;">
        <span>🔓</span>
        <span style="font-weight: 600;">Public Key</span>
        <span style="background: #F39C12; color: white; padding: 2px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">SHARE</span>
      </div>
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 0 0 10px 10px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
          <span>Modulus n</span>
          <span style="font-weight: bold; font-size: 18px;">33</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-top: 1px solid #34495e;">
          <span>Exponent e</span>
          <span style="font-weight: bold; font-size: 18px;">7</span>
        </div>
      </div>
      <!-- 私钥区域 -->
      <div style="display: flex; align-items: center; background: #26A69A; color: white; padding: 8px 16px; border-radius: 10px 10px 0 0; gap: 12px;">
        <span>🔒</span>
        <span style="font-weight: 600;">Private Key</span>
        <span style="background: #50C878; color: white; padding: 2px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">SECRET</span>
      </div>
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 0 0 10px 10px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
          <span>Exponent d</span>
          <span style="font-weight: bold; font-size: 18px; color: #26A69A;">3</span>
        </div>
      </div>
      <!-- 素数因子区域 -->
      <div style="background: #1E293B; color: white; padding: 12px 16px; border-radius: 10px;">
        <div style="font-size: 15px; color: #95A5A6; margin-bottom: 8px;">Prime Factors (Secret)</div>
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1; background: #34495e; padding: 10px; border-radius: 8px; text-align: center;">
            <div style="font-size: 14px; color: #95A5A6;">p</div>
            <div style="font-weight: bold; font-size: 18px; margin-top: 4px;">3</div>
          </div>
          <div style="flex: 1; background: #34495e; padding: 10px; border-radius: 8px; text-align: center;">
            <div style="font-size: 14px; color: #95A5A6;">q</div>
            <div style="font-weight: bold; font-size: 18px; margin-top: 4px;">11</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## RSA Encryption & Decryption

With their key pairs generated, Alice and Bob can now securely exchange encrypted messages. <span style="color: #4DB6AC">The foundation of RSA encryption is established.</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; min-width: max-content; align-items: center;">
    <!-- 头像容器：固定定位，完美对齐左右卡片正上方 -->
    <div style="display: flex; justify-content: space-between; width: 660px; margin-bottom: 10px;">
      <div style="width: 70px; height: 70px; background: #26A69A; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👩</div>
      <div style="width: 70px; height: 70px; background: #F9C74F; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👨</div>
    </div>
    <!-- 三张卡片：总宽度 880px，与头像宽度完全一致 -->
    <div style="display: flex; gap: 20px; width: 880px;">
      <div style="background: #DDF3F5; border-radius: 12px; padding: 24px 32px; flex: 1; text-align: center; box-sizing: border-box;">
        <div style="font-size: 40px; color: #26A69A; margin-bottom: 12px;">✈️</div>
        <div style="font-size: 20px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Alice Encrypts</div>
        <div style="font-size: 14px; color: #7f8c8d;">Using Bob's public key</div>
      </div>
      <div style="background: #DDF3F5; border-radius: 12px; padding: 24px 32px; flex: 1; text-align: center; box-sizing: border-box;">
        <div style="font-size: 40px; color: #F9C74F; margin-bottom: 12px;">↔️</div>
        <div style="font-size: 20px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Secure Transfer</div>
        <div style="font-size: 14px; color: #7f8c8d;">Encrypted message sent</div>
      </div>
      <div style="background: #DDF3F5; border-radius: 12px; padding: 24px 32px; flex: 1; text-align: center; box-sizing: border-box;">
        <div style="font-size: 40px; color: #26A69A; margin-bottom: 12px;">🔒</div>
        <div style="font-size: 20px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Bob Decrypts</div>
        <div style="font-size: 14px; color: #7f8c8d;">Using his private key</div>
      </div>
    </div>
  </div>
</div>

## Encryption & Decryption

### Encryption and Decryption Process

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- 加密模块卡片 -->
    <div style="background: #F8C4B4; border: 2px solid #E76F51; border-radius: 12px; padding: 24px; width: 500px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; background: #E76F51; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">🔒</div>
        <div style="font-size: 28px; font-weight: 700; color: #2C3E50;">Encryption</div>
      </div>
      <!-- 说明文本 -->
      <div style="font-size: 16px; line-height: 1.6; color: #2C3E50; margin-bottom: 20px;">
        The sender uses the recipient's <span style="color: #2196F3; font-weight: 600;">public key (n, e)</span> to encrypt <br>the plaintext message M into ciphertext C.
      </div>
      <!-- 公式块 -->
      <div style="background: #8D6E63; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <div style="font-size: 14px; color: #E0E0E0; margin-bottom: 8px;">Formula:</div>
        <div style="font-size: 32px; font-weight: bold; color: #FFAB91; text-align: center;">C = M<sup>e</sup> mod n</div>
      </div>
      <!-- 变量说明列表 -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #FFAB91; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">C</div>
          <div style="font-size: 16px; color: #2C3E50;">Ciphertext (encrypted message)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #FFAB91; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">M</div>
          <div style="font-size: 16px; color: #2C3E50;">Plaintext message (as number)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #FFAB91; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">e</div>
          <div style="font-size: 16px; color: #2C3E50;">Public exponent</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #FFAB91; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">n</div>
          <div style="font-size: 16px; color: #2C3E50;">Modulus (part of public key)</div>
        </div>
      </div>
    </div>
    <!-- 解密模块卡片 -->
    <div style="background: #C8E6C9; border: 2px solid #66BB6A; border-radius: 12px; padding: 24px; width: 500px; flex-shrink: 0; box-sizing: border-box;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">🔓</div>
        <div style="font-size: 28px; font-weight: 700; color: #2C3E50;">Decryption</div>
      </div>
      <!-- 说明文本 -->
      <div style="font-size: 16px; line-height: 1.6; color: #2C3E50; margin-bottom: 20px;">
        The recipient uses their <span style="color: #2196F3; font-weight: 600;">private key (n, d)</span> to decrypt the <br>ciphertext C back into the original plaintext message M.
      </div>
      <!-- 公式块 -->
      <div style="background: #546E7A; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <div style="font-size: 14px; color: #E0E0E0; margin-bottom: 8px;">Formula:</div>
        <div style="font-size: 32px; font-weight: bold; color: #E0F2F1; text-align: center;">M = C<sup>d</sup> mod n</div>
      </div>
      <!-- 变量说明列表 -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #80CBC4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">M</div>
          <div style="font-size: 16px; color: #2C3E50;">Recovered plaintext message</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #80CBC4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">C</div>
          <div style="font-size: 16px; color: #2C3E50;">Ciphertext (encrypted message)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #80CBC4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">d</div>
          <div style="font-size: 16px; color: #2C3E50;">Private exponent (secret)</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #80CBC4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2C3E50; font-size: 12px; font-weight: bold;">n</div>
          <div style="font-size: 16px; color: #2C3E50;">Modulus (same as public key)</div>
        </div>
      </div>
    </div>
  </div>
</div>

> [!DANGER] Security Guarantee
> Only the holder of the private key d can decrypt the message. Even if an attacker knows the public key (n, e) and intercepts the ciphertext C, they cannot compute d without factoring n into <span style="color: blue">p</span> and <span style="color: blue">q</span> — a <span style="color: blue">computationally infeasible</span> task for large keys.

### Encryption and Decryption Process

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：密钥信息总览 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 520px; flex-shrink: 0;">
      <!-- Alice 密钥卡片 -->
      <div style="background: #DDF3F5; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #2C3E50;">
          <span>👤</span>Alice's Keys
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Public Key:</div>
          <div style="color: #E07A5F; font-size: 16px; font-weight: bold;">n<sub>A</sub> = 3233, e<sub>A</sub> = 17</div>
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Private Key:</div>
          <div style="color: #9DC3E6; font-size: 16px; font-weight: bold;">d<sub>A</sub> = 2753</div>
        </div>
      </div>
      <!-- Bob 密钥卡片 -->
      <div style="background: #FFF5CC; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #2C3E50;">
          <span>👤</span>Bob's Keys
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Public Key:</div>
          <div style="color: #E07A5F; font-size: 16px; font-weight: bold;">n<sub>B</sub> = 33, e<sub>B</sub> = 7</div>
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Private Key:</div>
          <div style="color: #9DC3E6; font-size: 16px; font-weight: bold;">d<sub>B</sub> = 3</div>
        </div>
      </div>
      <!-- 消息卡片 -->
      <div style="background: #F8C4B4; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; font-size: 16px; color: #7f8c8d;">
          <span>✉️</span>Message to Send
        </div>
        <div style="font-size: 20px; font-weight: bold; color: #E74C3C;">M = 2</div>
      </div>
    </div>
    <!-- 右侧：加密解密步骤 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 500px; flex-shrink: 0;">
      <!-- 加密步骤 -->
      <div style="background: #F8C4B4; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #E76F51;">
          <span>🔒</span>Step 1: Encryption (Alice)
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Alice uses <span style="color: #2196F3; font-weight: 600;">Bob's public key</span> to encrypt the message:
        </div>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 8px; font-size: 18px; line-height: 1.8;">
            <span style="color: #E07A5F">C = M<sup>e<sub>B</sub></sup> mod n<sub>B</sub><br>
            C = 2<sup>7</sup> mod 33</span><br>
            = 128 mod 33<br>
            = <span style="color: #E07A5F">29 mod 33</span>
          </div>
          <div style="width: 180px; background: #8D6E63; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 20px; font-weight: bold;"><span><span style="font-size: 15px;">Ciphertext</span><br><span style="color: #E07A5F;"><center>C = 29</center></span></span>
          </div>
        </div>
      </div>
      <!-- 解密步骤 -->
      <div style="background: rgb(219, 222, 225); border: 2px solid #4A5C6A; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: black;">
          <span>🔓</span>Step 2: Decryption (Bob)
        </div>
        <div style="font-size: 16px; color: grey; margin-bottom: 12px;">
          Bob uses his <span style="color: #4CAF50; font-weight: 600;">private key</span> to decrypt:
        </div>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 8px; font-size: 18px; line-height: 1.8;">
            M = C<sup>d<sub>B</sub></sup> mod n<sub>B</sub><br>
            M = 29<sup>3</sup> mod 33<br>
            = 24389 mod 33<br>
            = 2 mod 33
          </div>
          <div style="width: 180px; background: #2E7D32; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 20px; font-weight: bold;">
            <span><span style="font-size: 15px;">Recovered Message</span><br><center>M = 2</center></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Quiz

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：密钥信息总览 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 520px; flex-shrink: 0;">
      <!-- Alice 密钥卡片 -->
      <div style="background: #DDF3F5; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #2C3E50;">
          <span>👤</span>Alice's Keys
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Public Key:</div>
          <div style="font-size: 16px; font-weight: bold;">n<sub>A</sub> = 3233, e<sub>A</sub> = 17</div>
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Private Key:</div>
          <div style="font-size: 16px; font-weight: bold;">d<sub>A</sub> = 2753</div>
        </div>
      </div>
      <!-- Bob 密钥卡片 -->
      <div style="background: #FFF5CC; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #2C3E50;">
          <span>👤</span>Bob's Keys
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Public Key:</div>
          <div style="font-size: 16px; font-weight: bold;">n<sub>B</sub> = 33, e<sub>B</sub> = 7</div>
        </div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 8px;">
          <div style="color: #95A5A6; margin-bottom: 4px;">Private Key:</div>
          <div style="font-size: 16px; font-weight: bold;">d<sub>B</sub> = 3</div>
        </div>
      </div>
      <!-- 消息卡片 -->
      <div style="background: #F8C4B4; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; font-size: 16px; color: #7f8c8d;">
          <span>✉️</span>Message to Send
        </div>
        <div style="font-size: 20px; font-weight: bold; color: #E74C3C;">M = 5</div>
      </div>
    </div>
    <!-- 右侧：加解密步骤 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 500px; flex-shrink: 0;">
      <!-- 加密步骤 -->
      <div style="background: #F8C4B4; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #E76F51;">
          <span>🔒</span>Step 1: Encryption (Alice)
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Alice uses <span style="color: #E76F51; font-weight: 600;">Bob's public key</span> to encrypt the message:
        </div>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 8px; font-size: 18px; line-height: 1.8;">
            C = M<sup>e<sub>B</sub></sup> mod n<sub>B</sub><br>
            C = 5<sup>7</sup> mod 33<br>
            = 78125 mod 33<br>
            = <span style="color: #F1C40F; font-weight: bold;">14</span> mod 33
          </div>
          <div style="width: 180px; background: #8D6E63; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 20px; font-weight: bold;">
            <span><span style="font-size: 15px;">Ciphertext</span><br><span style="color: #E07A5F;"><center>C = 14</center></span></span>
          </div>
        </div>
      </div>
      <!-- 解密步骤 -->
      <div style="background: #C8E6C9; border-radius: 12px; padding: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 18px; font-weight: 600; color: #4CAF50;">
          <span>🔓</span>Step 2: Decryption (Bob)
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Bob uses his <span style="color: #4CAF50; font-weight: 600;">private key</span> to decrypt:
        </div>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1; background: #2C3E50; color: white; padding: 16px; border-radius: 8px; font-size: 18px; line-height: 1.8;">
            M = C<sup>d<sub>B</sub></sup> mod n<sub>B</sub><br>
            M = 14<sup>3</sup> mod 33<br>
            = 2744 mod 33<br>
            = <span style="color: #26A69A; font-weight: bold;">5</span> mod 33
          </div>
          <div style="width: 180px; background: #2E7D32; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 20px; font-weight: bold;">
            <span><span style="font-size: 15px;">Recovered Message</span><br><center>M = 5</center></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Chosen Ciphertext Attacks (CCA) on RSA Algorithm

The Chosen Ciphertext Attack (CCA) on the RSA algorithm is a type of <span style="color: blue">cryptographic attack</span> where the attacker <span style="color: red">uses the decryption capabilities</span> of a system/users to <span style="color: red">decrypt messages</span> by choosing a <span style="color: red">series of ciphertexts</span> and **using the results to deduce the plaintext** or the <span style="color: red">encryption key</span>.

### Chosen Ciphertext Attack on RSA

<span style="color: red">Normal RSA Communication Flow</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 16px; min-width: max-content; padding: 16px;">
    <!-- 顶部：Alice + 中间大模块 + Bob -->
    <div style="display: flex; align-items: center; gap: 20px; flex-shrink: 0;">
      <!-- Alice 卡片 -->
      <div style="background: #121212; border-radius: 12px; padding: 24px; width: 260px; text-align: center; color: white; flex-shrink: 0;">
        <div style="width: 80px; height: 80px; background: #26A69A; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 32px;">👩</div>
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Alice</div>
        <div style="font-size: 14px; color: #95A5A6; margin-bottom: 20px;">Sender</div>
        <div style="background: #0F4C5C; padding: 12px; border-radius: 8px; text-align: left;">
          <div style="font-size: 14px; color: #E0E0E0; margin-bottom: 4px;">Has Bob's Public Key:</div>
          <div style="font-size: 16px; font-weight: bold; color: #26A69A;">(e<sub>B</sub>, n<sub>B</sub>)</div>
        </div>
      </div>
      <!-- 中间大容器（加长加宽，完美对齐） -->
      <div style="display: flex; flex-direction: column; gap: 12px; width: 620px; flex-shrink: 0;">
        <!-- 消息加密整体包裹圆角矩形 -->
        <div style="background: #DDF3F5; border-radius: 12px; padding: 24px 40px; display: flex; align-items: center; justify-content: space-between; gap: 20px;">
          <div style="text-align: center;">
            <div style="font-size: 16px; color: #2C3E50; margin-bottom: 8px;">Message M</div>
            <div style="font-size: 28px; font-weight: bold; color: #E74C3C;">2</div>
          </div>
          <span style="font-size: 24px; color: #2C3E50;">→</span>
          <div style="background: #121212; color: white; border-radius: 8px; padding: 14px 20px; font-size: 14px; font-weight: 600; text-align: center; white-space: nowrap;">
            Encryption<br><span style="color: #26A69A">C = M<sup>e<sub>B</sub></sup> mod n<sub>B</sub></span>
          </div>
          <span style="font-size: 24px; color: #2C3E50;">→</span>
          <div style="text-align: center;">
            <div style="font-size: 16px; color: #2C3E50; margin-bottom: 8px;">Ciphertext C</div>
            <div style="font-size: 28px; font-weight: bold; color: #E74C3C;">29</div>
          </div>
        </div>
        <!-- Public Channel -->
        <div style="background: #E0E0E0; border: 2px dashed #BDBDBD; border-radius: 8px; padding: 14px; font-size: 16px; color: #2C3E50; text-align: center;">
          ☁️ Public Channel (Encrypted)
        </div>
      </div>
      <!-- Bob 卡片（左边缘与 Decryption 卡片严格对齐） -->
      <div style="background: #121212; border-radius: 12px; padding: 24px; width: 260px; text-align: center; color: white; flex-shrink: 0;">
        <div style="width: 80px; height: 80px; background: #E74C3C; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 32px;">👨</div>
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Bob</div>
        <div style="font-size: 14px; color: #95A5A6; margin-bottom: 20px;">Receiver</div>
        <div style="background: #4A235A; padding: 12px; border-radius: 8px; text-align: left;">
          <div style="font-size: 14px; color: #E0E0E0; margin-bottom: 4px;">Has Private Key:</div>
          <div style="font-size: 16px; font-weight: bold; color: #E74C3C;">(d<sub>B</sub>, n<sub>B</sub>)</div>
        </div>
      </div>
    </div>
    <!-- 底部步骤卡片 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <div style="background: #DDF3F5; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #26A69A; border-radius: 50%; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">1</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Encryption</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">Alice uses Bob's public key to encrypt <br>message M:</div>
        <div style="background: #121212; color: white; padding: 12px; border-radius: 8px; font-size: 18px; font-weight: bold;">C = 2<sup>7</sup> mod 33 = 29</div>
      </div>
      <div style="background: #E0E0E0; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #BDBDBD; border-radius: 50%; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">2</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Transmission</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; line-height: 1.6;">Ciphertext C travels through the public channel. <br>Even if intercepted, it's unreadable without the <br>private key.</div>
      </div>
      <div style="background: #F8C4B4; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #E74C3C; border-radius: 50%; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">3</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Decryption</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">Bob uses his private key to decrypt:</div>
        <div style="background: #121212; color: white; padding: 12px; border-radius: 8px; font-size: 18px; font-weight: bold;">M = 29<sup>3</sup> mod 33 = 2</div>
      </div>
    </div>
  </div>
</div>

## Public Keys of Alice

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 0; min-width: max-content;">
    <!-- Alice 卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 24px; width: 420px; flex-shrink: 0; box-sizing: border-box; border: 1px solid #26A69A;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; background: #26A69A; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👩</div>
        <div>
          <div style="font-size: 24px; font-weight: 600; color: #2C3E50;">Alice</div>
          <div style="font-size: 14px; color: #7f8c8d;">Sender</div>
        </div>
      </div>
      <!-- 密钥生成块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Key Generation</div>
        <div style="font-size: 16px; line-height: 1.8; color: #26A69A; font-weight: bold;">
          <span style="color: white">P<sub>A</sub> = 61, Q<sub>A</sub> = 53</span><br>
          n<sub>A</sub> = 3233<br>
          φ(n<sub>A</sub>) = 3120<br>
          <span style="color: #E74C3C;">e<sub>A</sub> = 17<br>
          d<sub>A</sub> = 2753</span>
        </div>
      </div>
      <!-- 拥有的权限块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Has Access To</div>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #F9C74F;">🔑</span>
            <span>Own keys</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #26A69A; font-weight: bold;">🌍</span>
            <span>Bob's public key</span>
          </div>
        </div>
      </div>
      <!-- 消息块 -->
      <div style="background: #BDF5D9; border-radius: 12px; padding: 16px; text-align: center;">
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 8px;">Message to Send</div>
        <div style="font-size: 28px; font-weight: bold; color: #0070C0;">M = 2</div>
      </div>
    </div>
    <!-- Attacker 卡片 -->
    <div style="background: #F8C4B4; border-radius: 16px; padding: 24px; width: 420px; flex-shrink: 0; box-sizing: border-box; border: 1px solid #E74C3C;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; background: #E74C3C; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👤</div>
        <div>
          <div style="font-size: 24px; font-weight: 600; color: #E74C3C;">Attacker</div>
          <div style="font-size: 14px; color: #7f8c8d;">Adversary</div>
        </div>
      </div>
      <!-- 攻击能力块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Capabilities</div>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 16px;">
          <div style="display: flex; align-items: center; gap: 8px; color: #BDBDBD;">
            <span style="color: #E74C3C;">👁️</span>
            <span>Intercepts all traffic</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: #BDBDBD;">
            <span style="color: #E74C3C;">📝</span>
            <span>Modifies messages</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; color: #BDBDBD;">
            <span style="color: #E74C3C;">🔑</span>
            <span>Knows public keys</span>
          </div>
        </div>
      </div>
      <!-- 攻击参数块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Attack Parameters</div>
        <div style="font-size: 16px; line-height: 1.8;">
          <span style="color: #95A5A6;">Chooses:</span>
          <span style="color: #F9C74F; font-weight: bold;">r = 2</span>
          <div style="font-size: 14px; color: #95A5A6; margin-top: 4px;">(coprime to n<sub>B</sub> = 33)</div>
        </div>
      </div>
      <!-- 目标块 -->
      <div style="background: #6D4C41; color: white; padding: 16px; border-radius: 12px; text-align: center;">
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Goal</div>
        <div style="font-size: 18px; font-weight: bold;">
          Recover <span style="color: #0070C0;">M</span> without <span style="color: #E74C3C;">d<sub>B</sub></span>
        </div>
      </div>
    </div>
    <!-- Bob 卡片 -->
    <div style="background: #DDF3F5; border-radius: 16px; padding: 24px; width: 420px; flex-shrink: 0; box-sizing: border-box; border: 1px solid #26A69A;">
      <!-- 头部 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; background: #26A69A; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">👨</div>
        <div>
          <div style="font-size: 24px; font-weight: 600; color: #2C3E50;">Bob</div>
          <div style="font-size: 14px; color: #7f8c8d;">Receiver</div>
        </div>
      </div>
      <!-- 密钥生成块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Key Generation</div>
        <div style="font-size: 16px; line-height: 1.8; color: #26A69A; font-weight: bold;">
          <span style="color: white">P<sub>B</sub> = 3, Q<sub>B</sub> = 11</span><br>
          n<sub>B</sub> = 33<br>
          φ(n<sub>B</sub>) = 20<br>
          <span style="color: #E74C3C;">e<sub>B</sub> = 7<br>
          d<sub>B</sub> = 3</span>
        </div>
      </div>
      <!-- 拥有的权限块 -->
      <div style="background: #2C3E50; color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <div style="font-size: 16px; font-weight: 600; color: #E0E0E0; margin-bottom: 12px;">Has Access To</div>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #F9C74F;">🔑</span>
            <span>Own private key</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: #26A69A; font-weight: bold;">🔓</span>
            <span>Alice's public key</span>
          </div>
        </div>
      </div>
      <!-- 接收消息块 -->
      <div style="background: #BDF5D9; border-radius: 12px; padding: 16px; text-align: center;">
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 8px;">Receives</div>
        <div style="font-size: 28px; font-weight: bold; color: #7030A0;">C' = 16</div>
        <div style="font-size: 14px; color: #7f8c8d; margin-top: 4px;">(not the original C)</div>
      </div>
    </div>
  </div>
</div>

> [!DANGER] Attack Setup
> Alice wants to send message <span style="color: #0070C0">M=2</span> to Bob. The attacker intercepts the communication and substitutes ciphertext C with manipulated <span style="color: #7030A0">C'</span>

## Chosen Ciphertext Attack on RSA

![](img/Pasted_image_20260407210247.png)

---

![](img/Pasted_image_20260412142958.png)

---

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 12px; align-items: flex-start; flex-shrink: 0; min-width: max-content; padding: 16px;">
    <!-- Attacker 信息卡片 -->
    <div style="background: #F8C4B4; border-radius: 8px; padding: 16px; width: 180px; flex-shrink: 0;">
      <div style="font-size: 18px; font-weight: 600; color: #2C3E50; margin-bottom: 12px;">Attacker</div>
      <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.6;">
        Intercepts C<br>
        <span style="color: #E76F51;">Alice's Public</span><br>
        (n<sub>A</sub>, e<sub>A</sub>)<br>
        <span style="color: #E76F51;">Bob's Public</span><br>
        (n<sub>B</sub>, e<sub>B</sub>)
      </div>
    </div>
    <!-- Attacker 完整计算步骤 -->
    <div style="background: #F8C4B4; border: 2px solid #E76F51; border-radius: 8px; padding: 12px; flex-shrink: 0; width: 680px;">
      <!-- Step 2: Compute fake C' -->
      <div style="margin-bottom: 12px;">
        <div style="font-size: 14px; font-weight: 600; color: #E76F51; margin-bottom: 8px;">🔒 Step 2: Attacker computes fake message C'</div>
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.8; display: flex; justify-content: space-between; align-items: center;">
          <div style="flex: 1;">
            Chooses random: <span style="color: #F9C74F; font-weight: bold;">r = 2</span> (coprime with n<sub>B</sub>(33) so it has an inverse)<br>
            Compute: C' = (C × r<sup>e<sub>B</sub></sup> mod n<sub>B</sub>)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 29 × 2<sup>7</sup> mod 33<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 16 mod 33<br>
            Sends C' to Bob to decrypt:
          </div>
          <div style="background: #E76F51; padding: 4px 12px; border-radius: 4px; font-weight: bold; white-space: nowrap; border: 1px solid #F9C74F;">C' = 16</div>
        </div>
      </div>
      <!-- Step 4: 完整逆元计算+消息还原 -->
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #E76F51; margin-bottom: 8px;">🔒 Step 4: Attacker computes inverse to retrieve original message</div>
        <!-- 推导部分 -->
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.8; margin-bottom: 8px;">
          Attacker knows: ResM' = 4 = C'<sup>d<sub>B</sub></sup>mod n<sub>B</sub><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (C×r<sup>e<sub>B</sub></sup>)<sup>d<sub>B</sub></sup>mod n<sub>B</sub><br>
          Deduce: M' = (M<sup>e<sub>B</sub></sup>×r<sup>e<sub>B</sub></sup>)<sup>d<sub>B</sub></sup>mod n<sub>B</sub><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (M<sup>e<sub>B</sub>×d<sub>B</sub></sup>mod n<sub>B</sub>)×(r<sup>e<sub>B</sub>×d<sub>B</sub></sup>mod n<sub>B</sub>) = M<sup>1</sup>×r<sup>1</sup>
        </div>
        <!-- 逆元计算部分（红框内容） -->
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.8; margin-bottom: 8px;">
          Compute inverse of r to get M: <span style="color: #E76F51; font-weight: bold;">M<sup>1</sup> × r<sup>1</sup> (r<sup>-1</sup>)</span><br><br>
          Inverse: 2 (r<sup>-1</sup>) ≡ 1 mod n<sub>B</sub><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= r<sup>-1</sup> = <span style="color: #F9C74F; font-weight: bold;">17</span>
        </div>
        <!-- 最终还原消息部分 -->
        <div style="background: #2C3E50; color: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.8;">
          Retrieve M: <span style="color: #9C27B0; font-weight: bold;">Res</span> × 17 mod n<sub>B</sub><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 4 × 17 mod 33<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 68 mod 33<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span style="color: #4CAF50; font-weight: bold;">2</span>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 24px; min-width: max-content; padding: 16px;">
    <!-- 左侧列：步骤1-3 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 680px; flex-shrink: 0;">
      <!-- 步骤1：Alice Encrypts -->
      <div style="background: #DDF3F5; border-left: 4px solid #26A69A; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">1</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Alice Encrypts</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Alice encrypts M=2 using Bob's public key (eB=7, nB=33):
        </div>
        <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 18px; line-height: 1.6;">
          C = M<sup>e<sub>B</sub></sup> mod n<sub>B</sub><br>
          C = 2<sup>7</sup> mod 33 = <span style="color: #26A69A; font-weight: bold;">29</span>
        </div>
      </div>
      <!-- 步骤2：Attacker Intercepts -->
      <div style="background: #F8C4B4; border-left: 4px solid #E76F51; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #E76F51; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">2</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Attacker Intercepts</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Attacker captures C=29 and chooses r=2 (coprime to 33):
        </div>
        <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 18px; line-height: 1.6;">
          C' = (C × r<sup>e<sub>B</sub></sup>) mod n<sub>B</sub><br>
          C' = (29 × 2<sup>7</sup>) mod 33<br>
          C' = (29 × 128) mod 33 = <span style="color: #E76F51; font-weight: bold;">16</span>
        </div>
      </div>
      <!-- 步骤3：Attacker Sends C' -->
      <div style="background: #F8C4B4; border-left: 4px solid #E76F51; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #E76F51; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">3</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Attacker Sends C'</div>
        </div>
        <div style="font-size: 18px; color: #2C3E50;">
          Attacker forwards <span style="color: #2196F3; font-weight: bold;">C' = 16</span> to Bob instead of the original <span style="color: #2196F3; font-weight: bold;">C = 29</span>
        </div>
      </div>
    </div>
    <!-- 右侧列：步骤4-6 -->
    <div style="display: flex; flex-direction: column; gap: 16px; width: 680px; flex-shrink: 0;">
      <!-- 步骤4：Bob Decrypts C' -->
      <div style="background: #DDF3F5; border-left: 4px solid #26A69A; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">4</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Bob Decrypts C'</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Bob decrypts using his private key (dB=3, nB=33):
        </div>
        <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 18px; line-height: 1.6;">
          Res = C'<sup>d<sub>B</sub></sup> mod n<sub>B</sub><br>
          Res = 16<sup>3</sup> mod 33 = <span style="color: #26A69A; font-weight: bold;">4</span>
        </div>
      </div>
      <!-- 步骤5：Bob Sends Result -->
      <div style="background: #F5FAFA; border-left: 4px solid #26A69A; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #26A69A; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">5</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Bob Sends Result</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Bob sends Res=4 back (thinking it's related to the original message):
        </div>
        <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 18px; font-weight: bold;">
          Res = 4
        </div>
      </div>
      <!-- 步骤6：Attacker Recovers M -->
      <div style="background: #FDF5F3; border-left: 4px solid #E76F51; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 40px; height: 40px; background: #E76F51; border-radius: 50%; color: white; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center;">6</div>
          <div style="font-size: 20px; font-weight: 600; color: #2C3E50;">Attacker Recovers M</div>
        </div>
        <div style="font-size: 16px; color: #2C3E50; margin-bottom: 12px;">
          Attacker computes r<sup>-1</sup> mod 33 = 17 using Extended Euclidean Algorithm:
        </div>
        <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 18px; line-height: 1.6;">
          M = Res × r<sup>-1</sup> mod n<sub>B</sub><br>
          M = 4 × 17 mod 33<br>
          <span style="color: #E76F51; font-size: 22px; font-weight: bold;">M = 2 ✓</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="background: #F8C4B4; border-radius: 8px; padding: 24px 10px; display: flex; align-items: center; justify-content: center; gap: 40px; width: 100%; box-sizing: border-box;">
    <!-- 原始消息 -->
    <div style="text-align: center;">
      <div style="font-size: 12px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Original Message</div>
      <div style="font-size: 24px; font-weight: bold; color: #26A69A;">M = 2</div>
    </div>
    <!-- 箭头 -->
    <div style="font-size: 28px; color: #2C3E50;">→</div>
    <!-- 攻击者还原结果 -->
    <div style="text-align: center;">
      <div style="font-size: 12px; font-weight: 600; color: #2C3E50; margin-bottom: 8px;">Attacker Recovered</div>
      <div style="font-size: 24px; font-weight: bold; color: #E76F51;">M = 2</div>
    </div>
    <!-- 攻击成功标签 -->
    <div style="background: #FDF2F8; border: 2px solid #E76F51; border-radius: 20px; padding: 12px 24px; display: flex; align-items: center; gap: 8px;">
      <div style="width: 20px; height: 20px; background: #E76F51; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">✓</div>
      <div style="font-size: 12px; font-weight: 600; color: #E76F51;">Attack Successful!</div>
    </div>
  </div>
</div>

## Assignment

<span style="color: red">Assignment: Complete this exercise and submit during seminar class</span>

| Alice’s Public key: $\textcolor{red}{𝑛_𝐴 = 3233}$ and $\textcolor{red}{𝑒_𝐴=17}$<br>Alice’s Private key: $\textcolor{blue}{𝑑_𝐴} = 2753$ | Bob’s Public key: $\textcolor{red}{𝑛_B = 33}$ and $\textcolor{red}{𝑒_B = 7}$<br>Bob’s Private key: $\textcolor{blue}{𝑑_B} = 3$ |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |

<span style="color: red">Task:</span>  
If Alice wants to send the message $\textcolor{blue}{𝑀 = 5}$ to Bob, <span style="color: red">perform the chosen ciphertext attack and retrieve the original message if the attacker chooses random number</span> $\textcolor{blue}{r = 2}$. Show the following:  
Modified Ciphertext (C′): \_\_\_\_\_\_\_\_\_\_\_\_\_  
Bob’s Response: \_\_\_\_\_\_\_\_\_\_\_\_\_  
Attacker’s Recover Process: \_\_\_\_\_\_\_\_\_\_\_\_\_  

> <span style="color: red">Show how you computed your answers. <br>Only handwritten solutions. <br>No copy-paste will be accepted.</span>

## Security Strength & Key Sizes

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 第一行：NIST推荐 + 安全基础 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- 左上：NIST密钥长度推荐 -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 600px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 20px; font-weight: 600; color: white;">
          <span>📏</span> NIST Recommendations for RSA Key Sizes
        </div>
        <!-- 2048-bit RSA -->
        <div style="display: flex; align-items: stretch; margin-bottom: 12px;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 6px;">2048-bit RSA</div>
              <div style="font-size: 14px; color: #94A3B8;">
                Security: ~112 bits | Status: Acceptable until <span style="background: #5C3327; color: #E76F51; padding: 2px 6px; border-radius: 4px;">2030</span>
              </div>
            </div>
            <div style="background: #5C3327; color: #FED7AA; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
              Current Standard
            </div>
          </div>
        </div>
        <!-- 3072-bit RSA -->
        <div style="display: flex; align-items: stretch; margin-bottom: 12px;">
          <div style="width: 4px; background: #3B82F6; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 6px;">3072-bit RSA</div>
              <div style="font-size: 14px; color: #94A3B8;">
                Security: ~128 bits | Status: For beyond 2030
              </div>
            </div>
            <div style="background: #334155; color: #CBD5E1; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
              Recommended
            </div>
          </div>
        </div>
        <!-- 4096-bit RSA -->
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #60A5FA; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 6px;">4096-bit RSA</div>
              <div style="font-size: 14px; color: #94A3B8;">
                Security: Higher | Use: Long-term protection, root CAs
              </div>
            </div>
            <div style="background: #334155; color: #CBD5E1; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
              Maximum Security
            </div>
          </div>
        </div>
      </div>
      <!-- 右上：安全基础 -->
      <div style="background: #E07A5F; border-radius: 12px; padding: 20px; width: 520px; flex-shrink: 0;">
        <div style="font-size: 20px; font-weight: 600; color: white; margin-bottom: 20px;">
          🛡️ Security Foundation
        </div>
        <div style="font-size: 16px; color: black; margin-bottom: 16px;">
          RSA's security relies on the <span style="color: white; font-weight: 600;">computational difficulty of factoring <br>large numbers</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 16px;">
            <span style="font-weight: 600;">Easy:</span> Multiply two 1024-bit primes
          </div>
          <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 16px;">
            <span style="font-weight: 600;">Hard:</span> Factor the 2048-bit product
          </div>
          <div style="background: #1A1A1A; color: white; padding: 12px 16px; border-radius: 8px; font-size: 16px;">
            <span style="font-weight: 600;">Time:</span> Billions of years with classical computers
          </div>
        </div>
      </div>
    </div>
    <!-- 第二行：量子威胁 + 安全原则 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- 左下：量子计算威胁 -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 600px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; font-size: 20px; font-weight: 600; color: white;">
          <span>⚛</span> Quantum Computing Threat
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6;">
          RSA is vulnerable to <span style="color: #3B82F6; font-weight: 600;">Shor's algorithm</span>, which can factor large numbers <br>efficiently on a quantum computer. Current estimates:
        </div>
      </div>
      <!-- 右下：关键安全原则 -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 520px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 20px; font-weight: 600; color: white;">
          <span>⚠️</span> Key Security Principles
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: white;">
            <div style="width: 24px; height: 24px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Keep private keys absolutely secret</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: white;">
            <div style="width: 24px; height: 24px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Use minimum 2048-bit keys</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: white;">
            <div style="width: 24px; height: 24px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Rotate keys periodically</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 16px; color: white;">
            <div style="width: 24px; height: 24px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Use secure padding schemes (OAEP)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Applications

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 第一行：HTTPS + 数字签名 + 邮件加密 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- HTTPS/SSL/TLS -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #3C2A21; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">🌐</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">HTTPS/SSL/TLS</div>
          </div>
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
          RSA is used in <span style="color: white; font-weight: 600;">X.509 certificates</span> to secure web <br>browsing. When you see the padlock icon, RSA <br>is likely protecting your connection.
        </div>
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; font-size: 16px; color: white;">
            <span style="font-weight: 600;">Usage:</span> <span style="background: #5C3327; color: #FED7AA; padding: 2px 6px; border-radius: 4px;">90%+ of websites</span>
          </div>
        </div>
      </div>
      <!-- Digital Signatures -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #3C2A21; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">ᝰ.</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">Digital Signatures</div>
          </div>
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
          RSA provides <span style="color: white; font-weight: 600;">authentication</span> and <br><span style="color: white; font-weight: 600;">non-repudiation</span>. Signers cannot deny their <br>signatures, and recipients can verify authenticity.
        </div>
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; font-size: 16px; color: white;">
            <span style="font-weight: 600;">Usage:</span> Code signing, document signing
          </div>
        </div>
      </div>
      <!-- Email Encryption -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #3C2A21; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">✉️</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">Email Encryption</div>
          </div>
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
          Protocols like <span style="color: white; font-weight: 600;">S/MIME</span> and <span style="color: white; font-weight: 600;">PGP</span> use RSA to <br>encrypt emails, ensuring only intended <br>recipients can read them.
        </div>
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; font-size: 16px; color: white;">
            <span style="font-weight: 600;">Usage:</span> Secure corporate email
          </div>
        </div>
      </div>
    </div>
    <!-- 第二行：文件传输 + 软件签名 + 混合方案 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Secure File Transfer -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #3C2A21; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">🔄</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">Secure File Transfer</div>
          </div>
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
          <span style="color: white; font-weight: 600;">SFTP, FTPS,</span> and <span style="color: white; font-weight: 600;">VPNs</span> use RSA for key <br>exchange and authentication, protecting data <br>in transit.
        </div>
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; font-size: 16px; color: white;">
            <span style="font-weight: 600;">Usage:</span> Enterprise file sharing
          </div>
        </div>
      </div>
      <!-- Software Signing -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #3C2A21; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">&lt;/&gt;</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">Software Signing</div>
          </div>
        </div>
        <div style="font-size: 16px; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
          Developers <span style="color: white; font-weight: 600;">digitally sign software</span> to prove <br>authenticity and integrity. Users can verify <br>software hasn't been tampered with.
        </div>
        <div style="display: flex; align-items: stretch;">
          <div style="width: 4px; background: #E76F51; border-top-left-radius: 4px; border-bottom-left-radius: 4px;"></div>
          <div style="flex: 1; background: #1A1A1A; padding: 12px 16px; border-top-right-radius: 8px; border-bottom-right-radius: 8px; font-size: 16px; color: white;">
            <span style="font-weight: 600;">Usage:</span> OS updates, app stores
          </div>
        </div>
      </div>
      <!-- Hybrid Approach -->
      <div style="background: #E07A5F; border-radius: 12px; padding: 20px; width: 380px; flex-shrink: 0;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; background: #1A1A1A; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">💡</div>
          <div>
            <div style="font-size: 20px; font-weight: 600; color: white;">Hybrid Approach</div>
          </div>
        </div>
        <div style="font-size: 16px; color: white; line-height: 1.6; margin-bottom: 16px;">
          RSA is <span style="font-weight: 600;">computationally intensive</span>. <br>In practice, RSA encrypts <span style="font-weight: 600;">symmetric keys <br>(like AES)</span>, which then encrypt large data <br>efficiently.
        </div>
        <div style="background: #5C3327; padding: 12px 16px; border-radius: 8px; font-size: 16px; color: #FED7AA;">
          <span style="font-weight: 600;">Benefit:</span> Best of both worlds
        </div>
      </div>
    </div>
  </div>
</div>

> [!INFO] INFO
> This week dose have seminar class, which theme is phishing, but teacher didn't provide seminar material, so no separate seminar article this week.
