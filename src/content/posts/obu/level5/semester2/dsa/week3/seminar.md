---
title: "Hash Table"
published: 2026-03-26
# updated: 
description: "Data Structures and Algorithms Seminar3: Hash Table"
image: ./121044426_p0.jpg
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

# Hash Table
## Exercise 1 - Calculate, Insert, find load factor and steps

This exercise helps you to find out all about how hash tables work and how to compare different hashing schemes. We’ll use the same keys in two hash tables that use different hashing schemes.

(a) Calculate hash values for the following keys using the hash function
**_h(k) = k mod 19_**.  
738, 570, 687, 111, 530, 966, 524, 382, 701, 842, 348, 22, 658, 220, 817  
\[To do a _mod_ calculation, you can use the Scientific View of the Calculator accessory program supplied by Windows, or you can use Google.\]

> [!SUCCESS] Reference Answer
> |k|738|570|687|111|530|966|524|382|701|842|348|22|658|220|817|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |h(k)|16|0|3|16|17|16|11|2|17|6|6|3|12|11|0|

(b) Insert these values (in this order) into an empty hash table of size 19, using the _linear probing_ scheme, with hash function **h(k) = k mod 19**.  
738, 570, 687, 111, 530, 966, 524, 382, 701, 842, 348, 22, 658, 220, 817

> [!SUCCESS] Reference Answer
> |index|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |value|570|817|382|687|22||842|348||||524|220|658|||738|530|111|
> 
> 简要插入过程（关键冲突）
> - 570 → 0（空，放入）
> - 738 → 16（空，放入）
> - 687 → 3（空，放入）
> - 111 → 16（被占）→17（被占）→**18**
> - 530 →17（空，放入）
> - 966 →16（被占）→17（被占）→18（被占）→0（被占）→1（空，放入）
> - 524 →11（空，放入）
> - 382 →2（空，放入）
> - 701 →17（被占）→18（被占）→0（被占）→1（被占）→2（被占）→3（被占）→4（被占）→5（空）→**6（被占）**→7（空，放入）
> - 842 →6（空，放入）
> - 348 →6（被占）→**7**
> - 22 →3（被占）→**4**
> - 658 →12（空，放入）
> - 220 →11（被占）→**12**
> - 817 →0（被占）→**1**

(c) What is the _load factor_ of the table constructed in part (b) above?

> [!SUCCESS] Reference Answer
> The load factor $\alpha$ is defined as:
> $\alpha = \frac{\text{number of keys}}{\text{table size}}$
> - Number of keys inserted: **15**
> - Hash table size: **19**
> 
> $\alpha = \frac{15}{19} \approx 0.7895$
> 
> **Load factor = $15/19 \approx 0.7895$**

(d) What is the average number of steps for a successful search in the hash table from part (b) above? (count 1 inspection of a hash table slot as 1 step)

> [!SUCCESS] Reference Answer
> |Key|h(k)=k mod19|Final index|Steps|
> |---|---|---|---|
> |738|16|16|1|
> |570|0|0|1|
> |687|3|3|1|
> |111|16|18|3|
> |530|17|17|1|
> |966|16|1|5|
> |524|11|11|1|
> |382|2|2|1|
> |701|17|7|10|
> |842|6|6|1|
> |348|6|7|2|
> |22|3|4|2|
> |658|12|13|2|
> |220|11|12|2|
> |817|0|1|2|
> 
> 总步数：35  
> 元素个数：15  
> 平均成功查找步数：$\frac{15}{35}=\frac{3}{7}\approx2.333$

(e) Insert these values (in this order) into an empty hash table of size 19, using the _double hashing_ scheme, with hash function **h(k) = k mod 19** and probe function **p(k) = (7k mod 18) + 1**  
738, 570, 687, 111, 530, 966, 524, 382, 701, 842, 348, 22, 658, 220, 817

> [!SUCCESS] Reference Answer
> 哈希函数：$h(k)=k\bmod19$，探测步长：$p(k)=(7k\bmod18)+1$
> 
> | 项目          | 738 | 570 | 687 | 111 | 530 | 966 | 524 | 382 | 701 | 842 | 348 | 22  | 658 | 220 | 817 |
> | ----------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | $h(k)=k\bmod19$ | 16  | 0   | 3   | 16  | 17  | 16  | 11  | 2   | 17  | 6   | 6   | 3   | 12  | 11  | 0   |
> | $p(k)=(7k\bmod18)+1$ | 1   | 13  | 4   | 4   | 3   | 13  | 15  | 11  | 12  | 9   | 7   | 11  | 17  | 11  | 14  |
> | 双重哈希最终位置    | 16  | 0   | 3   | 1   | 17  | 10  | 11  | 2   | 7   | 6   | 13  | 14  | 12  | 3   | 4   |
> | 线性探测最终位置    | 16  | 0   | 3   | 18  | 17  | 1   | 11  | 2   | 7   | 6   | 7   | 4   | 13  | 12  | 1   |
> 
> 最终状态：
> 
> |索引|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |值|570|111|382|220|||842||||701|524|658|348|817||738|530|966|

(f) What is the average number of steps for a successful search in the hash table from part (e) above? (count one inspection of a hash-table slot as one step)

> [!SUCCESS] Reference Answer
> 公式：
> - $h(k) = k \bmod 19$
> - $p(k) = (7k \bmod 18) + 1$
> - 探测序列：$H_i = (h(k) + i \cdot p(k)) \bmod 19,\ i=0,1,2,...$
> - 步数 = 找到该键时的 $i+1$
> 每键步数（精确计算）
> 
> |项目|738|570|687|111|530|966|524|382|701|842|348|22|658|220|817|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |$h(k) = k \bmod 19$|16|0|3|16|17|16|11|2|17|6|6|3|12|11|0|
> |$p(k)$ 步长|1|13|4|4|3|13|15|11|12|9|7|11|17|11|14|
> |最终位置|16|0|3|1|17|10|11|2|3|6|13|6|12|3|14|
> |探测步数|1|1|1|2|1|2|1|1|3|1|2|3|1|2|2|
> 
> 总步数 & 平均值  
> 总步数 = $1+1+1+2+1+2+1+1+3+1+2+2+1+2+2=25$  
> 元素个数 = $15$  
> 平均步数 = $\frac{15}{25}=\frac{3}{5}\approx1.6667$

## Exercise 2 – Hash Functions and Table Sizes

What keys should we use for our data? What makes a good hash function? What size of hash table should be used? Discuss these issues in the following scenarios:
1. a hash table used to store details of all the students currently enrolled at CDUT  
2. a hash table used inside a browser to store all the URLs that you have visited within the past week

> [!SUCCESS] Reference Answer
> |Item|University Students|Browser Weekly URLs|
> |---|---|---|
> |Best Key|Unique Student ID|Full URL string|
> |Good Hash Function|Simple numeric mod / lightweight hash|String rolling hash (FNV, Murmur)|
> |Ideal Table Size|Fixed prime, ~1.2–1.5 × max students|Dynamic prime, resizable, $\alpha \approx 0.7$|
> |Load Factor|≤ 0.8|≤ 0.7|
> |Stability|Very stable|Highly dynamic|

## Exercise 3 – Quadratic Probing

Repeat Exercise 1 with the same data, but for the quadratic-probing hashing scheme. Compare the average number of steps for a successful search in your table to that taken by the linear probing and double hashing hash tables.

> [!SUCCESS] Reference Answer
> - Hash function: $h(k) = k \bmod 19$
> - Quadratic probing: $H_i(k) = (h(k) + i^2) \bmod 19,\; i=0,1,2,...$
> - Table size $m=19$ (prime, $m\equiv 3\pmod{4}$, so quadratic probing covers all slots)
> - Insert order:
>   738, 570, 687, 111, 530, 966, 524, 382, 701, 842, 348, 22, 658, 220, 817
> 
> > Full insertion & probe steps (steps = $i+1$)
> 
> |Key|738|570|687|111|530|966|524|382|701|842|348|22|658|220|817|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |h(k)|16|0|3|16|17|16|11|2|17|6|6|3|12|11|0|
> |Probe sequence|16|0|3|16→17|17→18|16→17→18→0→5|11|2|17→18→0→1→4|6|6→7|3→4→8|12|11→12→15|0→1|
> |Final index|16|0|3|17|18|5|11|2|4|6|7|8|12|15|1|
> |Steps|1|1|1|2|2|5|1|1|5|1|2|3|1|3|2|
> 
> **Total steps for quadratic probing**  
> Total steps = 31  
> Average steps = $31/15 \approx 2.0667$
> 
> > Final hash table (quadratic probing, size 19)
> 
> | Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  |
> |-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
> | Value | 570 | 817 | 382 | 687 | 701 | 966 | 842 | 348 | 22  |     |     | 524 | 658 |     |     | 220 | 738 | 111 | 530 |
> 
> > Comparison of average successful search steps
> 
> | Method             | Average steps | Value       |
> |--------------------|---------------|-------------|
> | Linear probing     | 35/15         | $\approx 2.333$ |
> | Quadratic probing  | 31/15         | $\approx 2.067$ |
> | Double hashing     | 25/15         | $\approx 1.667$ |
> 
> > Conclusion
> - **Double hashing** is best (fewest collisions, least clustering)
> - **Quadratic probing** is better than linear probing (avoids primary clustering)
> - **Linear probing** worst (strong clustering, longest probes)

## Exercise 4 – Double Hashing

In Exercise 1, the probe function used for the double hashing scheme was
$$p(k) = (7k\bmod18) + 1$$
Explain why the +1 is included in the probe function, i.e. what would be the consequence of using for example $p(k) = 7k\bmod18$.

> [!SUCCESS] Reference Answer
> The $+1$ prevents the probe step from being **zero**. Without it, some keys would produce $p(k)=0$, causing the probe sequence to **stall at the initial hash position** and making insertion impossible even when empty slots exist.

## Exercise 5 – Unsuccessful Searching

Also calculate the average number of steps taken for an _unsuccessful search_ in the linear probing hash table from Exercise 1.

This time you can’t take the average over the elements inserted, you’ll have to take the average over all possible slots that an element not stored in the hash table could hash to.

> [!SUCCESS] Reference Answer
> > Linear Probing (original table, size $m=19$)
> > > Rules for unsuccessful search steps:
> 
> For a **given starting slot $i$**:
> - Steps = number of consecutive **occupied slots** starting at $i$, **until the first empty slot** (including the occupied ones, stop at empty).
> - We average over **all 19 table slots** (0 to 18).
> 
> > First, recall the final linear probing table (index: value / empty)
> 
> | Index | 0   | 1   | 2   | 3   | 4   | 5    | 6   | 7   | 8    | 9    | 10   | 11  | 12  | 13  | 14   | 15   | 16  | 17  | 18  |
> |-------|-----|-----|-----|-----|-----|------|-----|-----|------|------|------|-----|-----|-----|------|------|-----|-----|-----|
> | Value | 570 | 817 | 382 | 687 | 22  | empty| 842 | 348 | empty| empty| empty| 524 | 220 | 658 | empty| empty| 738 | 530 | 111 |
> | State | OCC | OCC | OCC | OCC | OCC | EMP  | OCC | OCC | EMP  | EMP  | EMP  | OCC | OCC | OCC | EMP  | EMP  | OCC | OCC | OCC |
> 
> Legend:
> - **OCC**: occupied
> - **EMP**: empty
> 
> > Unsuccessful steps per starting index
> Count how many probes until first empty slot:
> 1. Index 0: 0,1,2,3,4 → **5 steps** (hit empty at 5)
> 2. Index 1: 1,2,3,4 → **4 steps**
> 3. Index 2: 2,3,4 → **3 steps**
> 4. Index 3: 3,4 → **2 steps**
> 5. Index 4: 4 → **1 step**
> 6. Index 5: empty → **1 step**
> 7. Index 6: 6,7 → **2 steps**
> 8. Index 7: 7 → **1 step**
> 9. Index 8: empty → **1 step**
> 10. Index 9: empty → **1 step**
> 11. Index 10: empty → **1 step**
> 12. Index 11: 11,12,13 → **3 steps**
> 13. Index 12: 12,13 → **2 steps**
> 14. Index 13: 13 → **1 step**
> 15. Index 14: empty → **1 step**
> 16. Index 15: empty → **1 step**
> 17. Index 16: 16,17,18 → **3 steps**
> 18. Index 17: 17,18 → **2 steps**
> 19. Index 18: 18 → **1 step**
> 
> > Total steps
> 
> $$5+4+3+2+1+1+2+1+1+1+1+3+2+1+1+1+3+2+1 = 37$$
> 
> > Average unsuccessful steps  
> 
> $$\text{Average} = \frac{\text{Total steps}}{\text{Number of slots}} = \frac{37}{19} \approx 1.947$$

## Exercise 6 – _Chaining_

Show how to insert the following stream of records with key fields into an initially-empty hash table of size 13 (indexed by 0 .. 12), using the chaining collision-resolution scheme, using the hashing function h defined by $h(k) = k\bmod13$.
534, 702, 105, 523, 959, 699, 821, 883, 842, 686

> [!SUCCESS] Reference Answer
> > Step 1: Compute hash values
> 
> Hash function: $h(k) = k \bmod 13$
> - 534 → 1
> - 702 → 0
> - 105 → 1
> - 523 → 3
> - 959 → 10
> - 699 → 10
> - 821 → 2
> - 883 → 12
> - 842 → 10
> - 686 → 10
> 
> > Step 2: Insert with **chaining** (separate chaining, append to end of list)
> 
> Hash table size = 13 (indices 0–12)
> 
> |Index|0|1|2|3|4|5|6|7|8|9|10|11|12|
> |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
> |Chain|702|534 → 105|821|523|||||||959 → 699 → 842 → 686||883|
> 
> > Final hash table (chaining) visual
> 
> 0: \[702]  
> 1: \[534, 105]  
> 2: \[821]  
> 3: \[523]  
> 4: \[]  
> 5: \[]  
> 6: \[]  
> 7: \[]  
> 8: \[]  
> 9: \[]  
> 10: \[959, 699, 842, 686]  
> 11: \[]  
> 12: \[883]  
> 
> Worst situation time complexity: O(n)

## Exercise 7 – Chaining versus Linear Probing

Consider the average number of steps required for a successful search in a hash table using chaining. Is the chaining scheme better or worse for successful searches, on average, than the linear probing scheme?

> [!SUCCESS] Reference Answer
> > Average Successful Search: Chaining vs. Linear Probing
> > > For **separate chaining** (the method you just used):
> - Each index holds a **linked list** of collided keys.
> - For a successful search:
>   - We hash to the correct index (**1 step**).
>   - Then traverse the list **until we find the key**.
> - The average number of steps is:<br>$1 + \frac{\alpha}{2}$<br>where $\alpha = \frac{\text{number of keys}}{\text{table size}}$ (load factor).
> 
> > For **linear probing**:
> - It suffers from **primary clustering** (long consecutive occupied blocks).
> - The average successful search steps are **much more sensitive to clustering** and given by:<br>$\frac{1}{2}\left(1 + \frac{1}{1-\alpha}\right)$
> - This grows **very rapidly** as $\alpha$ approaches 1 (much faster than chaining).
> 
> > Conclusion:  
> **Chaining is significantly better for successful searches on average**  
> because:
> 1. It **avoids clustering** entirely.
> 2. Collisions are confined to their own linked list, not spreading across the table.
> 3. The average search length grows **linearly and slowly** with load factor,
>    whereas linear probing’s average steps **explode** due to clustering.
> 
> In short:  
> ✅ **Chaining: better average performance**  
> ❌ **Linear probing: worse due to primary clustering**  
