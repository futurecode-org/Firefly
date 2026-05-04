---
title: "Foundations of Security Week7 Seminar: Password Cracking & Secure Hashing"
published: 2026-04-23
# updated: 
description: "Generate & Compare Hashes, Rainbow Tables, Hashing vs Encryption, Dictionary Attack, Salting"
image: ./142981275.png
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

## Learning Outcomes

<html>
    <style>
    .hash-card-wrapper {
    overflow-x: auto;
    padding: 8px 0;
    }
    .hash-card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    min-width: 1200px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .hash-card {
    display: flex;
    align-items: center;
    padding: 20px 24px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0, 0, 0, 0.1);
    gap: 16px;
    }
    .hash-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-shrink: 0;
    }
    .hash-card-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    }
    .hash-card-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
    }
    .hash-card-desc {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: #475569;
    line-height: 1.4;
    }
    /* 卡片配色定义 */
    .card-blue { border-left: 6px solid #2563eb; }
    .card-blue .hash-card-icon { background: #3b82f6; }
    .card-green { border-left: 6px solid #16a34a; }
    .card-green .hash-card-icon { background: #22c55e; }
    .card-purple { border-left: 6px solid #9333ea; }
    .card-purple .hash-card-icon { background: #a855f7; }
    .card-red { border-left: 6px solid #dc2626; }
    .card-red .hash-card-icon { background: #ef4444; }
    .card-orange { border-left: 6px solid #ea580c; }
    .card-orange .hash-card-icon { background: #f97316; }
    .card-teal { border-left: 6px solid #0d9488; }
    .card-teal .hash-card-icon { background: #14b8a6; }
    </style>
    <div class="hash-card-wrapper">
    <div class="hash-card-grid">
        <!-- 卡片1：Understand Hashing -->
        <div class="hash-card card-blue">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Understand Hashing</h3>
            <p class="hash-card-desc">Learn what hashing is and why it matters in security</p>
        </div>
        </div>
        <!-- 卡片2：Hashing vs Encryption -->
        <div class="hash-card card-green">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Hashing vs Encryption</h3>
            <p class="hash-card-desc">Understand the key difference between these two concepts</p>
        </div>
        </div>
        <!-- 卡片3：Generate & Compare Hashes -->
        <div class="hash-card card-purple">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Generate & Compare Hashes</h3>
            <p class="hash-card-desc">Practice creating password hashes using Python scripts</p>
        </div>
        </div>
        <!-- 卡片4：Dictionary Attack -->
        <div class="hash-card card-red">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Dictionary Attack</h3>
            <p class="hash-card-desc">Simulate a basic attack to crack weak password hashes</p>
        </div>
        </div>
        <!-- 卡片5：Rainbow Tables -->
        <div class="hash-card card-orange">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Rainbow Tables</h3>
            <p class="hash-card-desc">Know what rainbow tables are and how attackers use them</p>
        </div>
        </div>
        <!-- 卡片6：Salting -->
        <div class="hash-card card-teal">
        <div class="hash-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline></svg>
        </div>
        <div class="hash-card-content">
            <h3 class="hash-card-title">Salting</h3>
            <p class="hash-card-desc">Learn why salting protects passwords from attacks</p>
        </div>
        </div>
    </div>
    </div>
</html>

## What is Hashing

<html>
  <style>
  .hash-content-wrapper {
    overflow-x: auto;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .hash-main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    min-width: 1100px;
  }
  /* 左侧列布局 */
  .hash-left-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* 特性卡片通用样式 */
  .feature-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 20px 24px;
    border-top: 4px solid #2196f3;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #e3f2fd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1976d2;
    flex-shrink: 0;
  }
  .feature-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .feature-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1976d2;
    line-height: 1.2;
  }
  .feature-desc {
    margin: 0;
    font-size: 20px;
    line-height: 1.5;
    color: #1e293b;
  }
  .highlight-bg {
    background: #e3f2fd;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .text-red-bold {
    color: #dc2626;
    font-weight: 700;
  }
  /* 右侧列布局 */
  .hash-right-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* 哈希流程卡片 */
  .hash-flow-card {
    background: linear-gradient(to right, #1e3a8a, #3b82f6);
    border-radius: 16px;
    padding: 32px 24px;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .flow-title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: 0 0 32px 0;
    line-height: 1.2;
    color: white;
  }
  .flow-steps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .flow-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1;
    text-align: center;
  }
  .step-icon {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .step-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  .step-desc {
    font-size: 18px;
    opacity: 0.9;
    margin: 0;
  }
  .flow-arrow {
    font-size: 32px;
    font-weight: 300;
    color: #ffffff;
    flex-shrink: 0;
  }
  /* 示例卡片 */
  .example-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 24px;
  }
  .example-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 24px 0;
    line-height: 1.2;
  }
  .code-icon {
    color: #3b82f6;
    flex-shrink: 0;
  }
  .example-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .example-item {
    border-left: 4px solid #3b82f6;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 8px;
  }
  .example-input {
    font-size: 22px;
    margin: 0 0 8px 0;
    color: #1e293b;
  }
  .example-input span {
    color: #1976d2;
    font-weight: 600;
  }
  .example-hash {
    font-size: 20px;
    font-weight: 600;
    color: #dc2626;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
  }
  </style>

  <div class="hash-content-wrapper">
    <div class="hash-main-grid">
      <!-- 左侧特性列 -->
      <div class="hash-left-column">
        <!-- 卡片1：One-Way Function -->
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="6" y1="3" x2="6" y2="15"></line>
              <circle cx="18" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <line x1="18" y1="9" x2="18" y2="21"></line>
            </svg>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">One-Way Function</h3>
            <p class="feature-desc">Hashing converts any input (like a password) into a fixed-length string of characters. It's a <span class="highlight-bg">mathematical one-way street</span>.</p>
          </div>
        </div>
        <!-- 卡片2：Irreversible -->
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Irreversible</h3>
            <p class="feature-desc">Once hashed, you <span class="text-red-bold">cannot retrieve</span> the original input from the hash. This is what makes hashing perfect for password storage.</p>
          </div>
        </div>
        <!-- 卡片3：Avalanche Effect -->
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Avalanche Effect</h3>
            <p class="feature-desc">Even a <span class="highlight-bg">tiny change</span> in input creates a completely different hash. This ensures uniqueness and security.</p>
          </div>
        </div>
      </div>
      <!-- 右侧内容列 -->
      <div class="hash-right-column">
        <!-- 哈希流程卡片 -->
        <div class="hash-flow-card">
          <h2 class="flow-title">How Hashing Works</h2>
          <div class="flow-steps">
            <div class="flow-step">
              <div class="step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <p class="step-title">Input</p>
              <p class="step-desc">Any Length</p>
            </div>
            <span class="flow-arrow">→</span>
            <div class="flow-step">
              <div class="step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <p class="step-title">Hash Function</p>
              <p class="step-desc">Processing</p>
            </div>
            <span class="flow-arrow">→</span>
            <div class="flow-step">
              <div class="step-icon">
                <!-- 修正后的指纹图标，和原图完全匹配 -->
                <svg fill="#FFFFFF" width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256.12 245.96c-13.25 0-24 10.74-24 24 1.14 72.25-8.14 141.9-27.7 211.55-2.73 9.72 2.15 30.49 23.12 30.49 10.48 0 20.11-6.92 23.09-17.52 13.53-47.91 31.04-125.41 29.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55-2.69 12.98 5.67 25.69 18.64 28.36 13.05 2.67 25.67-5.66 28.36-18.64 10.34-50.09 15.17-101.58 14.37-153.02-.41-25.95 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47.77 48.05-2.81 96.33-10.61 143.55-2.17 13.06 6.69 25.42 19.76 27.58 19.97 3.33 26.81-15.1 27.58-19.77 8.28-50.03 12.06-101.21 11.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48-25.62 31.5-39.39 71.28-38.75 112 .59 37.58-2.47 75.27-9.11 112.05-2.34 13.05 6.31 25.53 19.36 27.89 20.11 3.5 27.07-14.81 27.89-19.36 7.19-39.84 10.5-80.66 9.86-121.33-.47-29.88 9.2-57.88 28-80.97 8.35-10.28 6.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97-12.89 3.06-20.87 15.98-17.83 28.89 3.06 12.89 16 20.83 28.89 17.83 11.05-2.61 22.47-3.77 34-3.69 75.43 1.13 137.73 61.5 138.88 134.58.59 37.88-1.28 76.11-5.58 113.63-1.5 13.17 7.95 25.08 21.11 26.58 16.72 1.95 25.51-11.88 26.58-21.11a929.06 929.06 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94 2.86-21.12 15.66-18.26 28.61 4.71 21.41 4.91 37.41 4.7 61.6-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02 183.02-.82 118.47 24.91 70.46 72.94 24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69.23.02.48.02.72.02 12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139 38.76-38.8 91.34-59.67 147.68-58.86 69.45 1.03 134.73 35.56 174.62 92.39 7.61 10.86 22.56 13.45 33.42 5.86 10.84-7.62 13.46-22.59 5.84-33.43z"/>
                </svg>
              </div>
              <p class="step-title">Output</p>
              <p class="step-desc">Fixed Length</p>
            </div>
          </div>
        </div>
        <!-- 示例卡片 -->
        <div class="example-card">
          <h3 class="example-title">
            <span class="code-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </span>
            Real Example: Avalanche Effect
          </h3>
          <div class="example-items">
            <div class="example-item">
              <p class="example-input">Input: <span>password</span></p>
              <p class="example-hash">5f4dcc3b5aa765d61d8327deb882cf99</p>
            </div>
            <div class="example-item">
              <p class="example-input">Input: <span>Password</span> (capital P)</p>
              <p class="example-hash">dc647eb65e6711e155375218212b3964</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>

## How Hashing Works

<html>
  <style>
  .hash-flow-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .hash-flow-main {
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    gap: 20px;
    align-items: stretch;
    min-width: 1200px;
    margin-bottom: 24px;
  }
  /* 左侧输入列样式 */
  .hash-input-column {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    background: #ffffff;
  }
  .input-header {
    background: #3a7fbf;
    color: #ffffff;
    text-align: center;
    padding: 12px 8px;
  }
  .input-header h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  }
  .input-header p {
    margin: 4px 0 0 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
  }
  .input-item {
    position: relative;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 20px 16px;
    margin: 20px 24px;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    color: #1e293b;
  }
  /* 输入项连接线（和原图完全匹配） */
  .input-item.has-line::after {
    content: '';
    position: absolute;
    right: -44px;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 4px;
    background: #475569;
  }
  /* 中间哈希函数块 */
  .hash-function-block {
    position: relative;
    background: #163a6e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
  }
  .hash-function-block .fingerprint-icon {
    width: 80px;
    height: 80px;
    color: #93c5fd;
  }
  .hash-function-block h2 {
    margin: 0;
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1.3;
  }
  /* 中间块输出连接线 */
  .hash-function-block::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 4px;
    background: #475569;
  }
  /* 右侧输出列样式 */
  .hash-output-column {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    background: #ffffff;
  }
  .output-header {
    background: #2e7d32;
    color: #ffffff;
    text-align: center;
    padding: 12px 8px;
  }
  .output-header h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  }
  .output-header p {
    margin: 4px 0 0 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
  }
  .output-item {
    background: #e8f5e9;
    border: 1px solid #a5d6a7;
    border-radius: 4px;
    padding: 20px 16px;
    margin: 20px 24px;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    color: #1b5e20;
    font-family: 'Courier New', Courier, monospace;
  }
  /* 底部提示条 */
  .hash-note {
    background: #fffbeb;
    border: 2px solid #f59e0b;
    border-radius: 4px;
    padding: 16px 24px;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    color: #78350f;
    min-width: 1150px;
  }
  </style>

  <div class="hash-flow-wrapper">
    <div class="hash-flow-main">
      <!-- 左侧输入列 -->
      <div class="hash-input-column">
        <div class="input-header">
          <h2>INPUT</h2>
          <p>(Any Length)</p>
        </div>
        <div class="input-item has-line">"password123"</div>
        <div class="input-item has-line">"Hello World!"</div>
        <div class="input-item has-line">"abc"</div>
        <div class="input-item">"MySecretP@ss2024!"</div>
      </div>
      <!-- 中间哈希函数核心块 -->
      <div class="hash-function-block">
        <svg class="fingerprint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13.1427 20.9999C10.8077 19.5438 9.25254 16.9522 9.25254 13.9968C9.25254 12.4783 10.4833 11.2476 12.0008 11.2476C13.5184 11.2476 14.7491 12.4783 14.7491 13.9968C14.7491 15.5153 15.9798 16.746 17.4974 16.746C19.0149 16.746 20.2457 15.5153 20.2457 13.9968C20.2457 9.44139 16.5544 5.74922 12.0017 5.74922C7.44907 5.74922 3.75781 9.44139 3.75781 13.9968C3.75781 15.0122 3.87145 16.001 4.08038 16.954M8.49027 20.2989C7.23938 18.5138 6.50351 16.3419 6.50351 13.9968C6.50351 10.9599 8.96405 8.49844 11.9992 8.49844C15.0343 8.49844 17.4948 10.9599 17.4948 13.9968M17.7927 19.4806C17.6937 19.4861 17.5966 19.4953 17.4967 19.4953C14.4616 19.4953 12.0011 17.0338 12.0011 13.9969M19.6734 6.47682C17.7993 4.34802 15.0593 3 12.0004 3C8.94141 3 6.20138 4.34802 4.32734 6.47682" stroke="rgb(147, 198, 231)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h2>HASH<br>FUNCTION</h2>
      </div>
      <!-- 右侧输出列 -->
      <div class="hash-output-column">
        <div class="output-header">
          <h2>OUTPUT</h2>
          <p>(Fixed 64 chars)</p>
        </div>
        <div class="output-item">ef92b778...</div>
        <div class="output-item">315f5bdb...</div>
        <div class="output-item">ba7816bf...</div>
        <div class="output-item">9d4e6af0...</div>
      </div>
    </div>
    <!-- 底部不可逆提示条 -->
    <div class="hash-note">
      The hash cannot be reversed — you can never get the original password back from a hash!
    </div>
  </div>
</html>

## How Passwords Are Stored

<html>
  <style>
  .password-hash-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .step-flow-container {
    display: flex;
    align-items: center;
    gap: 0;
    min-width: 1300px;
    margin-bottom: 32px;
  }
  .step-card {
    flex: 1;
    min-width: 280px;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e2e8f0;
  }
  .step-header {
    padding: 12px 8px;
    text-align: center;
    color: #ffffff;
    font-size: 32px;
    font-weight: 700;
  }
  .step-content {
    padding: 24px 16px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .step-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-shrink: 0;
  }
  .step-text {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.4;
    margin: 0;
  }
  .step-connector {
    width: 24px;
    height: 4px;
    background: #475569;
    flex-shrink: 0;
  }
  /* 步骤卡片配色 */
  .step-blue .step-header, .step-blue .step-icon {
    background-color: #3b82f6;
  }
  .step-purple .step-header, .step-purple .step-icon {
    background-color: #7c3aed;
  }
  .step-green .step-header, .step-green .step-icon {
    background-color: #16a34a;
  }
  .step-red .step-header, .step-red .step-icon {
    background-color: #dc2626;
  }
  /* 数据库示例区域 */
  .db-example-container {
    background-color: #1e293b;
    border-radius: 4px;
    padding: 24px;
    min-width: 1250px;
  }
  .example-title {
    font-size: 32px;
    font-weight: 600;
    color: #bfdbfe !important;
    margin: 0 0 24px 0;
    line-height: 1.3;
  }
  .db-table {
    width: 100%;
    border-collapse: collapse;
  }
  .db-table td {
    border: 2px solid #000000;
    padding: 12px 20px;
    vertical-align: middle;
    background-color: #1e293b !important;
  }
  .label-text {
    font-size: 26px;
    font-weight: 600;
    color: #93c5fd;
    width: 240px;
  }
  .value-text {
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
  }
  .hash-text {
    font-size: 26px;
    font-weight: 600;
    color: #86efac;
    font-family: 'Courier New', Courier, monospace;
  }
  </style>

  <div class="password-hash-wrapper">
    <!-- 步骤流程区域 -->
    <div class="step-flow-container">
      <!-- Step 1 -->
      <div class="step-card step-blue">
        <div class="step-header">Step 1</div>
        <div class="step-content">
          <div class="step-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 11a4 4 0 0 0-4-4H7a4 4 0 0 0 0 8h8a4 4 0 0 0 4-4z"></path>
              <circle cx="16" cy="11" r="1"></circle>
            </svg>
          </div>
          <p class="step-text">User creates<br>password</p>
        </div>
      </div>
      <!-- 连接线1 -->
      <div class="step-connector"></div>
      <!-- Step 2 -->
      <div class="step-card step-purple">
        <div class="step-header">Step 2</div>
        <div class="step-content">
          <div class="step-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13.1427 20.9999C10.8077 19.5438 9.25254 16.9522 9.25254 13.9968C9.25254 12.4783 10.4833 11.2476 12.0008 11.2476C13.5184 11.2476 14.7491 12.4783 14.7491 13.9968C14.7491 15.5153 15.9798 16.746 17.4974 16.746C19.0149 16.746 20.2457 15.5153 20.2457 13.9968C20.2457 9.44139 16.5544 5.74922 12.0017 5.74922C7.44907 5.74922 3.75781 9.44139 3.75781 13.9968C3.75781 15.0122 3.87145 16.001 4.08038 16.954M8.49027 20.2989C7.23938 18.5138 6.50351 16.3419 6.50351 13.9968C6.50351 10.9599 8.96405 8.49844 11.9992 8.49844C15.0343 8.49844 17.4948 10.9599 17.4948 13.9968M17.7927 19.4806C17.6937 19.4861 17.5966 19.4953 17.4967 19.4953C14.4616 19.4953 12.0011 17.0338 12.0011 13.9969M19.6734 6.47682C17.7993 4.34802 15.0593 3 12.0004 3C8.94141 3 6.20138 4.34802 4.32734 6.47682" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="step-text">System hashes<br>the password</p>
        </div>
      </div>
      <!-- 连接线2 -->
      <div class="step-connector"></div>
      <!-- Step 3 -->
      <div class="step-card step-green">
        <div class="step-header">Step 3</div>
        <div class="step-content">
          <div class="step-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <p class="step-text">Hash is stored<br>in database</p>
        </div>
      </div>
      <!-- 连接线3 -->
      <div class="step-connector"></div>
      <!-- Step 4 -->
      <div class="step-card step-red">
        <div class="step-header">Step 4</div>
        <div class="step-content">
          <div class="step-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <p class="step-text">Original password<br>is NEVER saved</p>
        </div>
      </div>
    </div>
    <!-- 数据库存储示例区域 -->
    <div class="db-example-container">
      <h3 class="example-title">Example — What a database actually stores:</h3>
      <table class="db-table">
        <tr>
          <td class="label-text">Username:</td>
          <td class="value-text">alice</td>
        </tr>
        <tr>
          <td class="label-text">Password Hash:</td>
          <td class="hash-text">5e884898da28047151d0e56f8dc6292773603d0d6...</td>
        </tr>
      </table>
    </div>
  </div>
</html>

---

<html>
  <style>
  .password-compare-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .compare-main-container {
    min-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  /* 卡片网格布局 */
  .compare-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  /* 卡片通用样式 */
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 24px 28px;
    background: #ffffff;
    position: relative;
  }
  /* 危险卡片样式 */
  .dangerous-card {
    border-left: 5px solid #dc2626;
  }
  /* 安全卡片样式 */
  .secure-card {
    border-left: 5px solid #059669;
  }
  /* 卡片头部 */
  .card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .header-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .danger-icon {
    background: #fee2e2;
    color: #dc2626;
  }
  .secure-icon {
    background: #dcfce7;
    color: #059669;
  }
  .card-title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  }
  .danger-title {
    color: #dc2626;
  }
  .secure-title {
    color: #059669;
  }
  /* 卡片内容块 */
  .card-content-block {
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
  }
  .dangerous-card .card-content-block {
    background: #fef2f2;
  }
  .secure-card .card-content-block {
    background: #f0fdf4;
  }
  .block-label {
    margin: 0 0 12px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
  }
  .content-box {
    background: #ffffff;
    border-radius: 8px;
    border: 2px solid;
    padding: 12px 16px;
  }
  .dangerous-card .content-box {
    border-color: #fca5a5;
  }
  .secure-card .content-box {
    border-color: #bbf7d0;
  }
  .content-line {
    margin: 8px 0;
    font-size: 22px;
    font-weight: 600;
    color: #1e293b;
  }
  .label-blue {
    color: #0284c7;
  }
  /* 卡片列表 */
  .card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .card-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 22px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.4;
  }
  .list-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }
  .danger-list-icon {
    color: #dc2626;
  }
  .secure-list-icon {
    color: #059669;
  }
  /* 底部条网格布局 */
  .bottom-bars-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .bottom-bar {
    border-radius: 16px;
    padding: 24px 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #ffffff;
  }
  .danger-bar {
    background: #ef4444;
  }
  .secure-bar {
    background: #10b981;
  }
  .bar-icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
  }
  .bar-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .bar-title {
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
  }
  .bar-desc {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    opacity: 0.95;
  }
  </style>

  <div class="password-compare-wrapper">
    <div class="compare-main-container">
      <!-- 上半部分对比卡片 -->
      <div class="compare-cards-grid">
        <!-- 左侧：明文存储危险卡片 -->
        <div class="card dangerous-card">
          <div class="card-header">
            <div class="header-icon danger-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <h2 class="card-title danger-title">DANGEROUS: Plain Text</h2>
          </div>
          <div class="card-content-block">
            <p class="block-label">Database stores:</p>
            <div class="content-box">
              <p class="content-line"><span class="label-blue">Username:</span> john_doe</p>
              <p class="content-line"><span class="label-blue">Password:</span> mysecret123</p>
            </div>
          </div>
          <ul class="card-list">
            <li>
              <span class="list-icon danger-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              If database is breached, attacker sees all passwords immediately
            </li>
            <li>
              <span class="list-icon danger-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              Users often reuse passwords across sites
            </li>
            <li>
              <span class="list-icon danger-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
              Legal and compliance violations (GDPR, etc.)
            </li>
          </ul>
        </div>
        <!-- 右侧：哈希存储安全卡片 -->
        <div class="card secure-card">
          <div class="card-header">
            <div class="header-icon secure-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 class="card-title secure-title">SECURE: Hashed Storage</h2>
          </div>
          <div class="card-content-block">
            <p class="block-label">Database stores:</p>
            <div class="content-box">
              <p class="content-line"><span class="label-blue">Username:</span> john_doe</p>
              <p class="content-line"><span class="label-blue">Password Hash:</span> 5f4dcc3b5aa765d61d8327deb882cf99</p>
            </div>
          </div>
          <ul class="card-list">
            <li>
              <span class="list-icon secure-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Even if database is breached, passwords remain protected
            </li>
            <li>
              <span class="list-icon secure-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Attacker cannot reverse the hash to get original password
            </li>
            <li>
              <span class="list-icon secure-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Meets security compliance requirements
            </li>
          </ul>
        </div>
      </div>
      <!-- 下半部分底部提示条 -->
      <div class="bottom-bars-grid">
        <!-- 左侧红色警告条 -->
        <div class="bottom-bar danger-bar">
          <div class="bar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
          </div>
          <div class="bar-content">
            <h3 class="bar-title">Never store passwords in plain text!</h3>
            <p class="bar-desc">This is considered negligent and can result in severe penalties.</p>
          </div>
        </div>
        <!-- 右侧绿色提示条 -->
        <div class="bottom-bar secure-bar">
          <div class="bar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="bar-content">
            <h3 class="bar-title">Always hash passwords!</h3>
            <p class="bar-desc">This is the industry standard and minimum security requirement.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>

## Common Hash Algorithms

<html>
  <style>
  .hash-algo-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .hash-algo-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    min-width: 1100px;
  }
  .hash-algo-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    border-top-width: 6px;
    border-top-style: solid;
  }
  .card-icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .card-label {
    padding: 18px 56px;
    color: #ffffff;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
  }
  /* 卡片配色定义，和原图完全匹配 */
  .card-md5 {
    border-top-color: #3b82f6;
  }
  .card-md5 .card-icon {
    background: #3b82f6;
  }
  .card-md5 .card-label {
    background: #dc2626;
  }
  .card-sha1 {
    border-top-color: #ea580c;
  }
  .card-sha1 .card-icon {
    background: #ea580c;
  }
  .card-sha1 .card-label {
    background: #ea580c;
  }
  .card-sha256 {
    border-top-color: #2e7d32;
  }
  .card-sha256 .card-icon {
    background: #2e7d32;
  }
  .card-sha256 .card-label {
    background: #2e7d32;
  }
  </style>

  <div class="hash-algo-wrapper">
    <div class="hash-algo-container">
      <!-- MD5 卡片 -->
      <div class="hash-algo-card card-md5">
        <div class="card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7784 1C10.3231 1 9.92838 1.31506 9.82748 1.75902L8.63635 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H8.1818L6.81817 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H6.36362L5.27072 21.8088C5.13204 22.419 5.59584 23 6.22161 23C6.6769 23 7.07159 22.6849 7.17249 22.241L8.36362 17H13.3636L12.2707 21.8088C12.132 22.419 12.5958 23 13.2216 23C13.6769 23 14.0716 22.6849 14.1725 22.241L15.3636 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15.8182L17.1818 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17.6364L18.7292 2.19124C18.8679 1.58104 18.4041 1 17.7784 1C17.3231 1 16.9284 1.31506 16.8275 1.75902L15.6364 7H10.6363L11.7292 2.19124C11.8679 1.58104 11.4041 1 10.7784 1ZM13.8182 15L15.1818 9H10.1818L8.81817 15H13.8182Z" fill="#FFFFFF"/>
          </svg>
        </div>
        <div class="card-label">MD5</div>
      </div>
      <!-- SHA-1 卡片 -->
      <div class="hash-algo-card card-sha1">
        <div class="card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7784 1C10.3231 1 9.92838 1.31506 9.82748 1.75902L8.63635 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H8.1818L6.81817 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H6.36362L5.27072 21.8088C5.13204 22.419 5.59584 23 6.22161 23C6.6769 23 7.07159 22.6849 7.17249 22.241L8.36362 17H13.3636L12.2707 21.8088C12.132 22.419 12.5958 23 13.2216 23C13.6769 23 14.0716 22.6849 14.1725 22.241L15.3636 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15.8182L17.1818 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17.6364L18.7292 2.19124C18.8679 1.58104 18.4041 1 17.7784 1C17.3231 1 16.9284 1.31506 16.8275 1.75902L15.6364 7H10.6363L11.7292 2.19124C11.8679 1.58104 11.4041 1 10.7784 1ZM13.8182 15L15.1818 9H10.1818L8.81817 15H13.8182Z" fill="#FFFFFF"/>
          </svg>
        </div>
        <div class="card-label">SHA-1</div>
      </div>
      <!-- SHA-256 卡片 -->
      <div class="hash-algo-card card-sha256">
        <div class="card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7784 1C10.3231 1 9.92838 1.31506 9.82748 1.75902L8.63635 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H8.1818L6.81817 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H6.36362L5.27072 21.8088C5.13204 22.419 5.59584 23 6.22161 23C6.6769 23 7.07159 22.6849 7.17249 22.241L8.36362 17H13.3636L12.2707 21.8088C12.132 22.419 12.5958 23 13.2216 23C13.6769 23 14.0716 22.6849 14.1725 22.241L15.3636 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15.8182L17.1818 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17.6364L18.7292 2.19124C18.8679 1.58104 18.4041 1 17.7784 1C17.3231 1 16.9284 1.31506 16.8275 1.75902L15.6364 7H10.6363L11.7292 2.19124C11.8679 1.58104 11.4041 1 10.7784 1ZM13.8182 15L15.1818 9H10.1818L8.81817 15H13.8182Z" fill="#FFFFFF"/>
          </svg>
        </div>
        <div class="card-label">SHA-256</div>
      </div>
    </div>
  </div>
</html>

---

<html>
  <style>
  .hash-compare-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .hash-compare-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    min-width: 1400px;
  }
  /* 卡片通用样式 */
  .hash-algo-card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    border-top: 6px solid;
  }
  /* 卡片顶部区域 */
  .card-top {
    padding: 20px 24px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .card-title {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
  }
  .card-tag {
    padding: 8px 20px;
    border-radius: 999px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .card-fullname {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.3;
  }
  /* 卡片主体区域 */
  .card-body {
    background: #ffffff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .card-info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .card-info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
  }
  .info-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
  /* 卡片底部说明块 */
  .card-note-block {
    border-radius: 12px;
    padding: 16px 20px;
  }
  .note-title {
    margin: 0 0 8px 0;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.3;
  }
  .note-text {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.5;
  }
  /* MD5 卡片配色 */
  .card-md5 {
    border-top-color: #dc2626;
  }
  .card-md5 .card-top {
    background-color: #fef2f2;
  }
  .card-md5 .card-title {
    color: #dc2626;
  }
  .card-md5 .card-tag {
    background-color: #dc2626;
  }
  .card-md5 .info-icon {
    color: #dc2626;
  }
  .card-md5 .card-note-block {
    background-color: #fef2f2;
  }
  .card-md5 .note-title {
    color: #dc2626;
  }
  /* SHA-1 卡片配色 */
  .card-sha1 {
    border-top-color: #f59e0b;
  }
  .card-sha1 .card-top {
    background-color: #fff7ed;
  }
  .card-sha1 .card-title {
    color: #f59e0b;
  }
  .card-sha1 .card-tag {
    background-color: #f59e0b;
  }
  .card-sha1 .info-icon {
    color: #f59e0b;
  }
  .card-sha1 .card-note-block {
    background-color: #fff7ed;
  }
  .card-sha1 .note-title {
    color: #f59e0b;
  }
  /* SHA-256 卡片配色 */
  .card-sha256 {
    border-top-color: #10b981;
  }
  .card-sha256 .card-top {
    background-color: #ecfdf5;
  }
  .card-sha256 .card-title {
    color: #10b981;
  }
  .card-sha256 .card-tag {
    background-color: #10b981;
  }
  .card-sha256 .info-icon {
    color: #10b981;
  }
  .card-sha256 .card-note-block {
    background-color: #ecfdf5;
  }
  .card-sha256 .note-title {
    color: #10b981;
  }
  </style>

  <div class="hash-compare-wrapper">
    <div class="hash-compare-container">
      <!-- MD5 卡片 -->
      <div class="hash-algo-card card-md5">
        <div class="card-top">
          <div class="card-header">
            <h2 class="card-title">MD5</h2>
            <span class="card-tag">AVOID</span>
          </div>
          <p class="card-fullname">Message Digest 5</p>
        </div>
        <div class="card-body">
          <div class="card-info-list">
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Created: 1991</span>
            </div>
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span>Output: 128 bits (32 chars)</span>
            </div>
          </div>
          <div class="card-note-block">
            <h3 class="note-title">Why Avoid:</h3>
            <p class="note-text">Vulnerable to collision attacks. Can generate same hash for different inputs.</p>
          </div>
        </div>
      </div>
      <!-- SHA-1 卡片 -->
      <div class="hash-algo-card card-sha1">
        <div class="card-top">
          <div class="card-header">
            <h2 class="card-title">SHA-1</h2>
            <span class="card-tag">DEPRECATED</span>
          </div>
          <p class="card-fullname">Secure Hash Algorithm 1</p>
        </div>
        <div class="card-body">
          <div class="card-info-list">
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Created: 1995</span>
            </div>
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span>Output: 160 bits (40 chars)</span>
            </div>
          </div>
          <div class="card-note-block">
            <h3 class="note-title">Why Deprecated:</h3>
            <p class="note-text">Theoretical attacks proven. Google demonstrated real collision in 2017.</p>
          </div>
        </div>
      </div>
      <!-- SHA-256 卡片 -->
      <div class="hash-algo-card card-sha256">
        <div class="card-top">
          <div class="card-header">
            <h2 class="card-title">SHA-256</h2>
            <span class="card-tag">RECOMMENDED</span>
          </div>
          <p class="card-fullname">Secure Hash Algorithm 256</p>
        </div>
        <div class="card-body">
          <div class="card-info-list">
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Created: 2001</span>
            </div>
            <div class="card-info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span>Output: 256 bits (64 chars)</span>
            </div>
          </div>
          <div class="card-note-block">
            <h3 class="note-title">Why Recommended:</h3>
            <p class="note-text">Part of SHA-2 family. Currently secure with no practical attacks.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>

## Hashing vs Encryption

<html>
  <style>
  .hash-encrypt-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .hash-encrypt-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    min-width: 1200px;
  }
  /* 卡片通用样式 */
  .compare-card {
    border: 2px solid #3b82f6;
    border-radius: 16px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
  }
  /* 卡片头部样式 */
  .card-header {
    background: linear-gradient(to right, #3b82f6, #0ea5e9);
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #ffffff;
  }
  .header-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .card-title {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  }
  /* 卡片主体样式 */
  .card-body {
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 600;
    color: #1e293b;
  }
  .check-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #ffffff;
  }
  /* 用途区块样式 */
  .used-for-block {
    border-radius: 12px;
    padding: 20px 24px;
    margin-top: 8px;
  }
  .used-for-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 12px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
  }
  .bulb-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: #3b82f6;
  }
  .used-for-text {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.5;
  }
  /* 卡片配色区分 */
  .hash-card .used-for-block {
    background-color: #eff6ff;
  }
  .encrypt-card .used-for-block {
    background-color: #e0f2fe;
  }
  </style>

  <div class="hash-encrypt-wrapper">
    <div class="hash-encrypt-container">
      <!-- 左侧 Hashing 卡片 -->
      <div class="compare-card hash-card">
        <div class="card-header">
          <div class="header-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7784 1C10.3231 1 9.92838 1.31506 9.82748 1.75902L8.63635 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H8.1818L6.81817 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H6.36362L5.27072 21.8088C5.13204 22.419 5.59584 23 6.22161 23C6.6769 23 7.07159 22.6849 7.17249 22.241L8.36362 17H13.3636L12.2707 21.8088C12.132 22.419 12.5958 23 13.2216 23C13.6769 23 14.0716 22.6849 14.1725 22.241L15.3636 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15.8182L17.1818 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17.6364L18.7292 2.19124C18.8679 1.58104 18.4041 1 17.7784 1C17.3231 1 16.9284 1.31506 16.8275 1.75902L15.6364 7H10.6363L11.7292 2.19124C11.8679 1.58104 11.4041 1 10.7784 1ZM13.8182 15L15.1818 9H10.1818L8.81817 15H13.8182Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <h2 class="card-title">Hashing</h2>
        </div>
        <div class="card-body">
          <ul class="feature-list">
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              One-Way Process
            </li>
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              No Key Required
            </li>
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Fixed Output Length
            </li>
          </ul>
          <div class="used-for-block">
            <h3 class="used-for-title">
              <span class="bulb-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12h1M22 12h-1M12 2v1M12 22v-1M18.36 5.64l-.7.7M5.64 5.64l.7.7M18.36 18.36l-.7-.7M5.64 18.36l.7-.7"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </span>
              Used For:
            </h3>
            <p class="used-for-text">Password storage, data integrity verification, digital signatures</p>
          </div>
        </div>
      </div>
      <!-- 右侧 Encryption 卡片 -->
      <div class="compare-card encrypt-card">
        <div class="card-header">
          <div class="header-icon">
            <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.5C16 8.53757 13.5376 11 10.5 11H7V13H5V15L4 16H0V12L5.16351 6.83649C5.0567 6.40863 5 5.96094 5 5.5C5 2.46243 7.46243 0 10.5 0C13.5376 0 16 2.46243 16 5.5ZM13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <h2 class="card-title">Encryption</h2>
        </div>
        <div class="card-body">
          <ul class="feature-list">
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Two-Way Process
            </li>
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Requires a Key
            </li>
            <li class="feature-item">
              <span class="check-icon">
                <svg viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              Variable Output Length
            </li>
          </ul>
          <div class="used-for-block">
            <h3 class="used-for-title">
              <span class="bulb-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12h1M22 12h-1M12 2v1M12 22v-1M18.36 5.64l-.7.7M5.64 5.64l.7.7M18.36 18.36l-.7-.7M5.64 18.36l.7-.7"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </span>
              Used For:
            </h3>
            <p class="used-for-text">Data transmission, file protection, secure messaging</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>

## Dictionary Attack

<html>
  <style>
  .dictionary-attack-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .dictionary-attack-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    min-width: 1300px;
  }
  /* 卡片通用样式 */
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 24px 28px;
    background: #ffffff;
    border-top: 6px solid;
  }
  /* 左侧主卡片样式 */
  .main-card {
    border-top-color: #3b82f6;
  }
  .main-title {
    margin: 0 0 20px 0;
    font-size: 36px;
    font-weight: 700;
    color: #0284c7;
    line-height: 1.2;
  }
  .main-text {
    margin: 0 0 16px 0;
    font-size: 26px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.6;
  }
  /* 密码列表区块 */
  .password-list-block {
    background-color: #eff6ff;
    border-radius: 12px;
    padding: 24px;
    margin-top: 24px;
  }
  .list-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
  }
  .list-icon {
    width: 24px;
    height: 24px;
    color: #3b82f6;
    flex-shrink: 0;
  }
  .password-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 24px;
  }
  .password-item {
    font-size: 24px;
    font-weight: 500;
    color: #1e293b;
  }
  .password-item::before {
    content: '> ';
    color: #0284c7;
    font-weight: 600;
  }
  /* 右侧侧边卡片样式 */
  .side-card {
    border-top-color: #dc2626;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .side-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #dc2626;
    line-height: 1.2;
  }
  .warning-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
  /* 原因小卡片 */
  .reason-card {
    background-color: #fef2f2;
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  .reason-title {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e3a8a;
    line-height: 1.3;
  }
  .reason-text {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.5;
  }
  </style>

  <div class="dictionary-attack-wrapper">
    <div class="dictionary-attack-container">
      <!-- 左侧主卡片 -->
      <div class="card main-card">
        <h1 class="main-title">What is a Dictionary Attack?</h1>
        <p class="main-text">A dictionary attack uses a pre-compiled list of common passwords ("dictionary") and tries each one against a stolen hash.</p>
        <p class="main-text">Instead of trying every possible combination (brute force), attackers focus on passwords people actually use.</p>
        <div class="password-list-block">
          <h3 class="list-title">
            <svg class="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            Common Password Lists Include:
          </h3>
          <div class="password-grid">
            <div class="password-item">password123</div>
            <div class="password-item">qwerty</div>
            <div class="password-item">12345678</div>
            <div class="password-item">admin</div>
            <div class="password-item">letmein</div>
            <div class="password-item">welcome1</div>
            <div class="password-item">iloveyou</div>
            <div class="password-item">monkey</div>
          </div>
        </div>
      </div>
      <!-- 右侧侧边卡片 -->
      <div class="card side-card">
        <h2 class="side-title">
          <svg class="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          Why It Works
        </h2>
        <div class="reason-card">
          <h3 class="reason-title">People Use Weak Passwords</h3>
          <p class="reason-text">Studies show 23 million accounts use "123456"</p>
        </div>
        <div class="reason-card">
          <h3 class="reason-title">Fast Processing</h3>
          <p class="reason-text">Modern GPUs can test billions of passwords per second</p>
        </div>
        <div class="reason-card">
          <h3 class="reason-title">Password Reuse</h3>
          <p class="reason-text">59% of people reuse passwords across sites</p>
        </div>
      </div>
    </div>
  </div>
</html>

## Rainbow Tables

<html>
  <style>
  .rainbow-table-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .rainbow-table-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    min-width: 1300px;
  }
  /* 卡片通用样式 */
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 24px 28px;
    background: #ffffff;
    border-top: 6px solid;
  }
  /* 左侧主卡片样式 */
  .main-card {
    border-top-color: #3b82f6;
  }
  .main-title {
    margin: 0 0 20px 0;
    font-size: 36px;
    font-weight: 700;
    color: #0284c7;
    line-height: 1.2;
  }
  .main-text {
    margin: 0 0 16px 0;
    font-size: 26px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.6;
  }
  .highlight-bg {
    background-color: #dbeafe;
    padding: 2px 6px;
    border-radius: 4px;
  }
  /* 彩虹表示例区块 */
  .table-example-block {
    background-color: #eff6ff;
    border-radius: 12px;
    padding: 24px;
    margin-top: 24px;
  }
  .example-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 24px 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
  }
  .table-icon {
    width: 24px;
    height: 24px;
    color: #3b82f6;
    flex-shrink: 0;
  }
  .hash-table {
    width: 100%;
    border-collapse: separate;
    border: 2px solid #bfdbfe;
    border-radius: 12px;
    overflow: hidden;
  }
  .hash-table th, .hash-table td {
    padding: 12px 16px;
    text-align: left;
  }
  .hash-table th {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    border-bottom: 1px solid #bfdbfe;
  }
  .hash-table td {
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
  }
  .hash-text {
    color: #0284c7;
  }
  /* 右侧侧边卡片样式 */
  .side-card {
    border-top-color: #dc2626;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .side-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #dc2626;
    line-height: 1.2;
  }
  .warning-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
  /* 危险条目样式 */
  .danger-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .item-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: #fee2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #dc2626;
  }
  .item-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .item-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e3a8a;
    line-height: 1.3;
  }
  .item-text {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.5;
  }
  </style>

  <div class="rainbow-table-wrapper">
    <div class="rainbow-table-container">
      <!-- 左侧主卡片 -->
      <div class="card main-card">
        <h1 class="main-title">Understanding Rainbow Tables</h1>
        <p class="main-text">A rainbow table is a <span class="highlight-bg">pre-computed database</span> of password hashes.</p>
        <p class="main-text">Attackers create these tables in advance, then use them to crack passwords instantly without computing hashes during the attack.</p>
        <div class="table-example-block">
          <h3 class="example-title">
            <svg class="table-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
            </svg>
            What a Rainbow Table Looks Like:
          </h3>
          <table class="hash-table">
            <thead>
              <tr>
                <th>Plain Text</th>
                <th>MD5 Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>password</td>
                <td class="hash-text" style="color: #3B82F6;">5f4dcc3b5aa765d61d...</td>
              </tr>
              <tr>
                <td>123456</td>
                <td class="hash-text" style="color: #3B82F6;">e10adc3949ba59abbe...</td>
              </tr>
              <tr>
                <td>qwerty</td>
                <td class="hash-text" style="color: #3B82F6;">d8578edf8458ce06fbc...</td>
              </tr>
              <tr>
                <td>admin</td>
                <td class="hash-text" style="color: #3B82F6;">21232f297a57a5a7438...</td>
              </tr>
              <tr>
                <td>letmein</td>
                <td class="hash-text" style="color: #3B82F6;">0d107d09f5bbe40cade...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 右侧侧边卡片 -->
      <div class="card side-card">
        <h2 class="side-title">
          <svg class="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Why They're Dangerous
        </h2>
        <div class="danger-item">
          <div class="item-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          </div>
          <div class="item-content">
            <h3 class="item-title">Instant Cracking</h3>
            <p class="item-text">No computation needed during attack - just a table lookup</p>
          </div>
        </div>
        <div class="danger-item">
          <div class="item-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="item-content">
            <h3 class="item-title">Mass Cracking</h3>
            <p class="item-text">One table can crack millions of passwords</p>
          </div>
        </div>
        <div class="danger-item">
          <div class="item-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <div class="item-content">
            <h3 class="item-title">Freely Available</h3>
            <p class="item-text">Tables for common passwords can be downloaded online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>

## Comparison

<html>
  <style>
  .attack-table-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .attack-comparison-table {
    width: 100%;
    min-width: 1200px;
    border-collapse: collapse;
    border: 2px solid #e67e22;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.12);
  }
  .attack-comparison-table th,
  .attack-comparison-table td {
    border: 1px solid #e67e22;
    padding: 18px 20px;
    text-align: left;
    vertical-align: top;
    line-height: 1.5;
  }
  /* 表头样式（和原图浅橙背景+红色文字完全匹配） */
  .attack-comparison-table thead th {
    background-color: #fde6d8;
    color: #dc2626;
    font-size: 26px;
    font-weight: 700;
  }
  /* 表格主体样式 */
  .attack-comparison-table tbody td {
    font-size: 22px;
    font-weight: 500;
    /* color: #1e293b; */
    /* background-color: #ffffff; */
  }
  /* 第一列攻击类型蓝色文字样式 */
  .attack-type-label {
    color: #2563eb;
    font-weight: 600;
    font-size: 23px;
  }
  </style>
  <div class="attack-table-wrapper">
    <table class="attack-comparison-table">
      <thead>
        <tr>
          <th>Attack Type</th>
          <th>Main Idea</th>
          <th>How it Works</th>
          <th>Speed</th>
          <th>Main Weakness</th>
          <th>Best Defense</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="attack-type-label">Dictionary<br>Attack</span></td>
          <td>Tries likely<br>passwords</td>
          <td>Uses a list of common<br>words, names, and weak<br>password patterns</td>
          <td>Faster than brute<br>force</td>
          <td>Fails if password is<br>uncommon and strong</td>
          <td>Strong, unique<br>passwords and<br>account lockout</td>
        </tr>
        <tr>
          <td><span class="attack-type-label">Brute Force<br>Attack</span></td>
          <td>Tries every possible<br>combination</td>
          <td>Tests all possible<br>characters and lengths<br>until the correct password<br>is found</td>
          <td>Slowest</td>
          <td>Very time consuming<br>for long complex<br>passwords</td>
          <td>Long, complex<br>passwords and rate<br>limiting</td>
        </tr>
        <tr>
          <td><span class="attack-type-label">Rainbow<br>Table Attack</span></td>
          <td>Looks up<br>precomputed<br>hash values</td>
          <td>Compares stolen<br>password hashes against a<br>prebuilt table of<br>password-hash pairs</td>
          <td>Very fast once<br>table exists</td>
          <td>Fails against salted<br>hashes</td>
          <td>Salting and strong<br>hash algorithms</td>
        </tr>
      </tbody>
    </table>
  </div>
</html>

## Salting

<html>
  <style>
  .salting-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .salting-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 32px;
    min-width: 1300px;
  }
  /* 卡片通用样式 */
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 24px 28px;
    background: #ffffff;
    border-top: 6px solid;
  }
  /* 左侧主卡片样式 */
  .main-card {
    border-top-color: #10b981;
  }
  .main-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px 0;
    font-size: 36px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
  }
  .title-icon {
    width: 32px;
    height: 32px;
    color: #10b981;
    flex-shrink: 0;
  }
  .main-text {
    margin: 0 0 16px 0;
    font-size: 26px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.6;
  }
  .highlight-green {
    background-color: #dcfce7;
    padding: 2px 6px;
    border-radius: 4px;
  }
  /* 加盐步骤区块 */
  .salting-steps-block {
    background-color: #ecfdf5;
    border-radius: 12px;
    padding: 24px;
    margin-top: 24px;
  }
  .steps-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px 0;
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
  }
  .key-icon {
    width: 28px;
    height: 28px;
    color: #10b981;
    flex-shrink: 0;
  }
  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .step-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .step-number {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #10b981;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .step-content {
    flex: 1;
    background-color: #ffffff;
    border: 1px solid #10b981;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 24px;
    font-weight: 500;
    color: #1e293b;
  }
  .step-highlight {
    color: #059669;
    background-color: #dcfce7;
    padding: 2px 4px;
    border-radius: 3px;
  }
  /* 右侧侧边卡片样式 */
  .side-card {
    border-top-color: #3b82f6;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .side-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
  }
  .code-icon {
    width: 28px;
    height: 28px;
    color: #3b82f6;
    flex-shrink: 0;
  }
  /* 存储格式区块 */
  .storage-block {
    background-color: #f8fafc;
    border: 2px solid #bfdbfe;
    border-radius: 12px;
    padding: 24px;
  }
  .storage-label {
    margin: 0 0 16px 0;
    font-size: 26px;
    font-weight: 700;
    color: #1e293b;
  }
  .storage-row {
    padding: 8px 0;
    border-bottom: 1px solid #cbd5e1;
    font-size: 24px;
    font-weight: 500;
  }
  .storage-row:last-child {
    border-bottom: none;
  }
  .label-blue {
    color: #0284c7;
    font-weight: 600;
  }
  .label-green {
    color: #059669;
    font-weight: 600;
  }
  /* 底部提示区块 */
  .note-block {
    background-color: #eff6ff;
    border: 2px solid #bfdbfe;
    border-radius: 12px;
    padding: 20px 24px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .info-icon {
    width: 24px;
    height: 24px;
    color: #3b82f6;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .note-text {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    color: #1e293b;
    line-height: 1.5;
  }
  </style>

  <div class="salting-wrapper">
    <div class="salting-container">
      <!-- 左侧主卡片 -->
      <div class="card main-card">
        <h1 class="main-title">
          <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          Understanding Salting
        </h1>
        <p class="main-text">Salting is the process of adding a <span class="highlight-green">unique, random string</span> to each password before hashing. This ensures that even identical passwords produce completely different hashes.</p>
        <div class="salting-steps-block">
          <h3 class="steps-title">
            <svg class="key-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778Z"></path>
              <path d="m15.5 7.5 4 4"></path>
            </svg>
            How Salting Works:
          </h3>
          <div class="steps-list">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">User enters password: <span class="step-highlight">password123</span></div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">System generates random salt: <span class="step-highlight">x7#K9mP$</span></div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">Combines: <span class="step-highlight">password123x7#K9mP$</span></div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div class="step-content">Hashes combined string → stores salt + hash</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧侧边卡片 -->
      <div class="card side-card">
        <h2 class="side-title">
          <svg class="code-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Storage Format
        </h2>
        <div class="storage-block">
          <p class="storage-label">Database stores:</p>
          <div class="storage-row">
            <span class="label-blue">Username:</span> john_doe
          </div>
          <div class="storage-row">
            <span class="label-green">Salt:</span> x7#K9mP$
          </div>
          <div class="storage-row">
            <span class="label-blue">Hash:</span> a3f7c2d8...
          </div>
        </div>
        <div class="note-block">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p class="note-text">Salt is stored in plain text! Its purpose is to make pre-computed attacks impossible, not to be secret.</p>
        </div>
      </div>
    </div>
  </div>
</html>

---

<center>Same password, but different hashes — because of unique salts:</center>

![](img/Pasted_image_20260503192754.png)

## Simple Database illustration

| <span style="color: blue">user_id</span> | <span style="color: blue">username</span> | <span style="color: blue">salt</span> | <span style="color: blue">hashed_password</span> |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------- | ------------------------------------------------ |
| 1001                                     | john                                      | X7p@9Lm#2Qa                           | 9f3c7d8e2a4b1c6d7e8f9012ab34cd56ef78ab90cd12ef34 |
| 1002                                     | mary                                      | T4n$8Vb!1Zo                           | 4b2d8f1a7c9e3d5f6a1b2c3d4e5f6789ab12cd34ef56ab78 |
| 1003                                     | david                                     | M2q&7Hy*5Lp                           | c7e1a9d4b3f8c2e6d5a7b9c0ef12ab34cd56ef78ab90de12 |
| 1004                                     | sarah                                     | R9k!3Wd@8Xs                           | 1d8f7c6b5a4e3d2c9b0aef12cd34ab56ef78ab90cd12ef45 |
| 1005                                     | michael                                   | P6m#1Qr$7Jn                           | 8a3d1f7c9e2b4d6f5a8c0e12ab34cd56ef78ab90cd12aa67 |

![](img/Pasted_image_20260503193113.png)

## Password Security Best Practices

<html>
  <style>
  .best-practices-wrapper {
    overflow-x: auto;
    width: 100%;
    padding: 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .best-practices-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    min-width: 1400px;
  }
  /* 卡片通用样式 */
  .practice-card {
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 24px 28px;
    background: #ffffff;
    border-left: 6px solid;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  /* 卡片颜色变体 */
  .card-green {
    border-left-color: #10b981;
  }
  .card-blue {
    border-left-color: #3b82f6;
  }
  .card-blue-dark {
    border-left-color: #2563eb;
  }
  .card-purple {
    border-left-color: #9333ea;
  }
  /* 卡片图标 */
  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-shrink: 0;
  }
  .card-green .card-icon {
    background-color: #10b981;
  }
  .card-blue .card-icon {
    background-color: #3b82f6;
  }
  .card-blue-dark .card-icon {
    background-color: #2563eb;
  }
  .card-purple .card-icon {
    background-color: #9333ea;
  }
  /* 卡片内容 */
  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
  }
  .card-desc {
    margin: 0 0 8px 0;
    font-size: 22px;
    font-weight: 500;
    color: #334155;
    line-height: 1.4;
  }
  /* 算法标签列表 */
  .algo-tag-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .tag-item {
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 600;
    color: #1e293b;
  }
  .tag-recommended {
    background-color: #ecfdf5;
  }
  .tag-warning {
    background-color: #fff7ed;
  }
  .tag-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  }
  .tag-recommended .tag-icon {
    color: #10b981;
  }
  .tag-warning .tag-icon {
    color: #f59e0b;
  }
  /* 特性列表 */
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 500;
    color: #1e293b;
  }
  .check-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  }
  .card-blue .check-icon, .card-blue-dark .check-icon {
    color: #2563eb;
  }
  .card-purple .check-icon {
    color: #9333ea;
  }
  </style>

  <div class="best-practices-wrapper">
    <div class="best-practices-grid">
      <!-- 左上卡片：1. Use Strong Hash Algorithms -->
      <div class="practice-card card-green">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
            <polyline points="15 5 8 12 6 10"></polyline>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">1. Use Strong Hash Algorithms</h3>
          <p class="card-desc">Choose algorithms specifically designed for password hashing:</p>
          <div class="algo-tag-list">
            <div class="tag-item tag-recommended">
              <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              bcrypt (Recommended)
            </div>
            <div class="tag-item tag-recommended">
              <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Argon2 (Winner of Password Hashing Competition)
            </div>
            <div class="tag-item tag-warning">
              <svg class="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              SHA-256 (OK with proper salting)
            </div>
          </div>
        </div>
      </div>
      <!-- 右上卡片：3. Enforce Strong Password Policies -->
      <div class="practice-card card-blue">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none"/>
              </g>
              <g id="Layer_7" data-name="Layer 7">
                <g>
                  <path d="M3,30.5l-1,.6V39a2,2,0,0,0,2,2H24V28.3A24.4,24.4,0,0,0,16,27,25.6,25.6,0,0,0,3,30.5Z" fill="#FFFFFF"/>
                  <path d="M16,5a9,9,0,1,0,9,9A9,9,0,0,0,16,5Z" fill="#FFFFFF"/>
                  <path d="M44,28H43V25a6,6,0,0,0-12,0v3H30a2,2,0,0,0-2,2V41a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V30A2,2,0,0,0,44,28Zm-9-3a2,2,0,0,1,4,0v3H35Z" fill="#FFFFFF"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">3. Enforce Strong Password Policies</h3>
          <p class="card-desc">Help users create secure passwords:</p>
          <ul class="feature-list">
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Minimum 12 characters
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Require mixed case, numbers, symbols
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Check against known breached passwords
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Encourage password managers
            </li>
          </ul>
        </div>
      </div>
      <!-- 左下卡片：2. Always Add Unique Salts -->
      <div class="practice-card card-blue-dark">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">2. Always Add Unique Salts</h3>
          <p class="card-desc">Every password must have its own random salt:</p>
          <ul class="feature-list">
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Generate 16+ byte random salt per user
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Use cryptographically secure random generator
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Store salt alongside hash (not a secret)
            </li>
          </ul>
        </div>
      </div>
      <!-- 右下卡片：4. Implement Additional Layers -->
      <div class="practice-card card-purple">
        <div class="card-icon">
          <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2H2v10h10V2z"></path>
            <path d="M22 2H12v10h10V2z"></path>
            <path d="M22 12H12v10h10V12z"></path>
            <path d="M12 12H2v10h10V12z"></path>
          </svg> -->
          <svg fill="#FFFFFF" width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"/></svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">4. Implement Additional Layers</h3>
          <p class="card-desc">Defense in depth approach:</p>
          <ul class="feature-list">
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Rate limiting (prevent brute force)
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Account lockout after failed attempts
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Two-factor authentication (2FA)
            </li>
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Pepper (optional secret salt)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</html>

## Password Hashing & Cracking Activity

Create a <span style="color: blue">directory</span> to work in, copy the extracted files and change to it by entering <span style="color: blue">cd</span> followed by that <span style="color: blue"><i>directory name</i></span>.

<span style="color: red">Option 1: Use an old project’s already installed flask and virtual environment</span>

![](img/Pasted_image_20260503194921.png)

<span style="color: purple">Option 2: Create new virtual environment and install flask mysql-connector-python</span>

![](img/Pasted_image_20260503195021.png)
