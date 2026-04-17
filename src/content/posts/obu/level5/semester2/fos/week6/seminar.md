---
title: "Foundations of Security Week6 Seminar: Phishing"
published: 2026-04-20
# updated: 
description: "Understanding and Defending Against Social Engineering Attacks."
image: ./132244174.jpg
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

# Phishing

## Objective

Understanding and Defending Against Social Engineering Attacks.

## <span style="color: red">What is Phishing?</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 顶部：定义栏 -->
    <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 12px; padding: 20px 24px; width: 1220px; flex-shrink: 0; color: white; font-size: 18px; line-height: 1.8;">
      Phishing is a <span style="font-weight: 600;">cyberattack</span> that uses <span style="color: #3B82F6; font-weight: 600;">deceptive</span> emails, messages, or websites to trick victims into revealing sensitive information such as <br>passwords, credit card numbers, or personal data.
    </div>
    <!-- 底部：特征 + 统计 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- 左侧：Key Characteristics -->
      <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 680px; flex-shrink: 0;">
        <div style="font-size: 20px; font-weight: 600; color: white; margin-bottom: 16px;">Key Characteristics</div>
        <div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px; color: #94A3B8;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 20px; height: 20px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Exploits human psychology rather than technical vulnerabilities</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 20px; height: 20px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Impersonates trusted entities (banks, companies, colleagues)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 20px; height: 20px; background: #92400E; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold;">✓</div>
            <span>Creates false urgency to bypass critical thinking</span>
          </div>
        </div>
      </div>
      <!-- 右侧：The Human Factor -->
      <div style="background: #4A5568; border-radius: 12px; padding: 20px; width: 520px; flex-shrink: 0; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px; font-size: 20px; font-weight: 600; color: white;">
          <span>⚠️</span> The Human Factor
        </div>
        <div style="font-size: 80px; font-weight: bold; color: #F87171; margin-bottom: 16px;">95%</div>
        <div style="font-size: 16px; color: #E2E8F0; line-height: 1.6;">
          of successful cyberattacks involve<br>
          <span style="color: white; font-weight: 600;">human error</span>, not technical failures
        </div>
      </div>
    </div>
  </div>
</div>

## <span style="color: red">The Psychology Behind Phishing</span>

How attackers exploit human cognitive biases and emotions

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 第一行：Authority + Urgency + Reciprocal -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Authority -->
      <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">👤</div>
          <div style="font-size: 20px; font-weight: 600;">Authority</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          People follow perceived leaders. Attackers <br>impersonate banks, government officials, or <br>executives to bypass skepticism.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "This is your bank's security <br>department..."
        </div>
      </div>
      <!-- Urgency -->
      <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⏰</div>
          <div style="font-size: 20px; font-weight: 600;">Urgency</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          Time pressure forces quick decisions without <br>critical thinking. Creates fear of missing out or <br>negative consequences.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "Your account will be suspended in <br>24 hours!"
        </div>
      </div>
      <!-- Reciprocal -->
      <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🎁</div>
          <div style="font-size: 20px; font-weight: 600;">Reciprocal</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          People feel obligated to return favors. Attackers <br>offer something valuable to create a sense of <br>indebtedness.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "You've won a prize! Click here to <br>claim..."
        </div>
      </div>
    </div>
    <!-- 第二行：Consistency + Social Proof + Liking -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Consistency -->
      <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">✓</div>
          <div style="font-size: 20px; font-weight: 600;">Consistency</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          People want to remain consistent with previous <br>actions. Small initial commitments lead to larger <br>ones.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "Confirm your email to continue..."
        </div>
      </div>
      <!-- Social Proof -->
      <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">👥</div>
          <div style="font-size: 20px; font-weight: 600;">Social Proof</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          People follow what others do. Attackers claim <br>peers have already complied to normalize the <br>action.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "90% of employees have already <br>verified..."
        </div>
      </div>
      <!-- Liking -->
      <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 380px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">❤️</div>
          <div style="font-size: 20px; font-weight: 600;">Liking</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #E2E8F0;">
          People say yes to those they like. Attackers <br>build rapport through friendly language and <br>compliments.
        </div>
        <div style="font-size: 16px; font-style: italic; color: #EAB308; border-top: 1px solid #333; padding-top: 12px;">
          Example: "Hi friend! I thought you'd love this <br>offer..."
        </div>
      </div>
    </div>
  </div>
</div>

## <span style="color: red">Red Flags: How to Identify Phishing Emails</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 12px; min-width: max-content; padding: 16px;">
    <!-- 第一行：Generic Greetings + Requests for Personal Info -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Generic Greetings -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">👤</div>
          <div style="font-size: 20px; font-weight: 600;">Generic Greetings</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Legitimate organizations use your name. Be suspicious of <span style="color: #EF4444; font-weight: 600;">"Dear Customer"</span> or <span style="color: #EF4444; font-weight: 600;">"Hello <br>User"</span> instead of personalized addresses.
        </div>
      </div>
      <!-- Requests for Personal Info -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🔒</div>
          <div style="font-size: 20px; font-weight: 600;">Requests for Personal Info</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Legitimate organizations <span style="color: #3B82F6; font-weight: 600;">NEVER</span> ask for passwords, SSNs, or credit cards via email.
        </div>
      </div>
    </div>
    <!-- 第二行：Suspicious Sender Address + Suspicious Links & Attachments -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Suspicious Sender Address -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">✉️</div>
          <div style="font-size: 20px; font-weight: 600;">Suspicious Sender Address</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Check for misspelled domains (microsoⱳt.com), public email services, or subtle <br>character substitutions.
        </div>
      </div>
      <!-- Suspicious Links & Attachments -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🔗</div>
          <div style="font-size: 20px; font-weight: 600;">Suspicious Links & Attachments</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Hover over links to check URLs. Unexpected attachments may contain <span style="color: #EF4444; font-weight: 600;">malware</span> or <br><span style="color: #EF4444; font-weight: 600;">ransomware</span>.
        </div>
      </div>
    </div>
    <!-- 第三行：Urgency & Threats + Spelling & Grammar Errors -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Urgency & Threats -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⚠️</div>
          <div style="font-size: 20px; font-weight: 600;">Urgency & Threats</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Phishing creates <span style="color: #EF4444; font-weight: 600;">false time pressure</span>: "Account will be suspended!" or "Immediate <br>action required!"
        </div>
      </div>
      <!-- Spelling & Grammar Errors -->
      <div style="background: #0F0F0F; border-radius: 8px; padding: 20px; width: 680px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📝</div>
          <div style="font-size: 20px; font-weight: 600;">Spelling & Grammar Errors</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
          Professional organizations maintain high editorial standards. Multiple errors suggest <br><span style="color: #3B82F6; font-weight: 600;">unprofessional</span> or <span style="color: #3B82F6; font-weight: 600;">foreign attackers</span>.
        </div>
      </div>
    </div>
    <!-- 底部提示栏 -->
    <div style="background: #F87171; border-radius: 8px; padding: 20px; width: 1380px; flex-shrink: 0; margin-top: 8px;">
      <div style="font-size: 20px; font-weight: 600; color: white; line-height: 1.6;">
        <span style="color: #F0F9FF; font-weight: 700;">Remember:</span> <span style="color: black">When in doubt, don't click! Contact the organization directly to verify</span>.
      </div>
    </div>
  </div>
</div>

## <span style="color: red">Types of Phishing Attacks</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 12px; min-width: max-content; padding: 16px;">
    <!-- 第一行：Email Phishing + Spear Phishing + Whaling + Smishing -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Email Phishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #3B82F6; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">✉️</div>
          <div style="font-size: 20px; font-weight: 600;">Email Phishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          Mass-distributed deceptive emails <br>impersonating legitimate organizations <br>to steal credentials.
        </div>
        <div style="background: #3B82F6; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: white;">
          Most Common
        </div>
      </div>
      <!-- Spear Phishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #E76F51; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">👤</div>
          <div style="font-size: 20px; font-weight: 600;">Spear Phishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          Highly targeted attacks on specific <br>individuals using personalized <br>information from social media.
        </div>
        <div style="background: #7F1D1D; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: #FECACA;">
          High Risk
        </div>
      </div>
      <!-- Whaling -->
      <div style="background: #0F0F0F; border-top: 3px solid #3B82F6; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">👑</div>
          <div style="font-size: 20px; font-weight: 600;">Whaling</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          Targets C-suite executives and <br>high-level management for maximum <br>financial gain.
        </div>
        <div style="background: #3B82F6; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: white;">
          Executive Target
        </div>
      </div>
      <!-- Smishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #E76F51; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📱</div>
          <div style="font-size: 20px; font-weight: 600;">Smishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          SMS-based phishing attacks that deliver <br>malicious links via text messages.
        </div>
        <div style="background: #7F1D1D; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: #FECACA;">
          Mobile Threat
        </div>
      </div>
    </div>
    <!-- 第二行：Vishing + Quishing + BEC + Deepfake Phishing -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- Vishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #3B82F6; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📞</div>
          <div style="font-size: 20px; font-weight: 600;">Vishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          Voice call phishing where attackers <br>impersonate banks, tech support, or <br>government agencies.
        </div>
        <div style="background: #3B82F6; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: white;">
          Voice Scam
        </div>
      </div>
      <!-- Quishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #E76F51; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">📱</div>
          <div style="font-size: 20px; font-weight: 600;">Quishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          QR code phishing where malicious <br>codes redirect to fake login pages <br>or malware.
        </div>
        <div style="background: #7F1D1D; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: #FECACA;">
          Emerging Threat
        </div>
      </div>
      <!-- BEC -->
      <div style="background: #0F0F0F; border-top: 3px solid #3B82F6; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #273B5F; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">💼</div>
          <div style="font-size: 20px; font-weight: 600;">BEC</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          Business Email Compromise: <br>impersonating executives to trigger <br>fraudulent wire transfers.
        </div>
        <div style="background: #3B82F6; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: white;">
          Financial Focus
        </div>
      </div>
      <!-- Deepfake Phishing -->
      <div style="background: #0F0F0F; border-top: 3px solid #E76F51; border-radius: 8px; padding: 20px; width: 320px; flex-shrink: 0; color: white;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="width: 32px; height: 32px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🎭</div>
          <div style="font-size: 20px; font-weight: 600;">Deepfake Phishing</div>
        </div>
        <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0; margin-bottom: 20px;">
          AI-generated audio/video impersonating <br>trusted figures to manipulate victims.
        </div>
        <div style="background: #7F1D1D; padding: 8px 12px; border-radius: 6px; font-size: 14px; font-weight: 600; color: #FECACA;">
          AI-Powered
        </div>
      </div>
    </div>
  </div>
</div>

## <span style="color: red">Prevention & Defense Strategies</span>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：Individual Actions -->
    <div style="background: #0F0F0F; border-top: 3px solid #3B82F6; border-radius: 12px; padding: 24px; width: 600px; flex-shrink: 0; color: white;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 40px; height: 40px; background: #273B5F; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">👥</div>
        <div style="font-size: 24px; font-weight: 600; color: white;">Individual Actions</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px; font-size: 18px; line-height: 1.6;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Don't Click Suspicious Links</div>
            <div style="font-size: 14px; color: #94A3B8;">Hover to verify URLs before clicking</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Verify Sender Identity</div>
            <div style="font-size: 14px; color: #94A3B8;">Contact organizations through official channels</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Use Strong, Unique Passwords</div>
            <div style="font-size: 14px; color: #94A3B8;">Implement password managers for security</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Enable Multi-Factor Authentication (MFA)</div>
            <div style="font-size: 14px; color: #94A3B8;">Adds critical second layer of protection</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Keep Software Updated</div>
            <div style="font-size: 14px; color: #94A3B8;">Patch vulnerabilities promptly</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Report Suspicious Emails</div>
            <div style="font-size: 14px; color: #94A3B8;">Inform organization’s management team</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧：Organizational Measures -->
    <div style="background: #0F0F0F; border-top: 3px solid #E76F51; border-radius: 12px; padding: 24px; width: 600px; flex-shrink: 0; color: white;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 40px; height: 40px; background: #4B2E27; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🏢</div>
        <div style="font-size: 24px; font-weight: 600; color: white;">Organizational Measures</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px; font-size: 18px; line-height: 1.6;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Security Awareness Training</div>
            <div style="font-size: 14px; color: #94A3B8;">Regular education on evolving threats</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Email Authentication Protocols</div>
            <div style="font-size: 14px; color: #94A3B8;">Implement secure protocols</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Phishing Simulations</div>
            <div style="font-size: 14px; color: #94A3B8;">Test and improve employee readiness</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Incident Response Plans</div>
            <div style="font-size: 14px; color: #94A3B8;">Prepare for rapid threat containment</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">Zero-Trust Architecture</div>
            <div style="font-size: 14px; color: #94A3B8;">Verify every access request</div>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="width: 24px; height: 24px; background: #7F1D1D; border-radius: 50%; color: white; font-size: 14px; font-weight: bold; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</div>
          <div>
            <div style="font-weight: 600; color: white; margin-bottom: 4px;">AI-Powered Email Security</div>
            <div style="font-size: 14px; color: #94A3B8;">Advanced threat detection systems</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## <span style="color: red">Spot the Phish!</span>

Analyze these scenarios and identify why each scenario is phishing or legitimate

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：Bank Security Alert 钓鱼邮件 -->
    <div style="background: #0F0F0F; border: 1px solid #333; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #7F1D1D; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">1</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">Bank Security Alert</div>
      </div>
      <!-- 邮件内容 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
        <div>From: <span style="color: #EF4444; font-weight: 600;">security@bankofchina-secure.com</span></div>
        <div style="margin-top: 12px;">Subject: <span style="color: #EF4444; font-weight: 600;">URGENT:</span> Your Account Will Be Suspended</div>
        <div style="margin-top: 12px;">Dear Valued Customer,</div>
        <div style="margin-top: 12px;">We detected unusual activity on your account. <span style="color: #EF4444; font-weight: 600;">Your account will be suspended within <br>24 hours</span> if you don't verify your information immediately.</div>
        <div style="margin-top: 12px;">Click here to verify: <span style="color: #3B82F6; text-decoration: underline; font-weight: 600;">http://bankofchina-secure-verify.com</span></div>
        <div style="margin-top: 12px;">Bank of China Security Team</div>
      </div>
      <!-- 底部问题栏 -->
      <div style="background: #1E40AF; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; color: #F0F9FF;">
        Question: Is this a phishing attempt? What red flags do you see?
      </div>
    </div>
    <!-- 右侧：LinkedIn Connection 请求 -->
    <div style="background: #0F0F0F; border: 1px solid #333; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #2563EB; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">2</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">LinkedIn Connection</div>
      </div>
      <!-- 邮件内容 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
        <div>From: <span style="color: #3B82F6; font-weight: 600;">invitations@linkedin.com</span></div>
        <div style="margin-top: 12px;">Subject: Sarah Johnson wants to connect on LinkedIn</div>
        <div style="margin-top: 12px;">Hi Alex,</div>
        <div style="margin-top: 12px;">I'd like to add you to my professional network on LinkedIn.</div>
        <div style="margin-top: 12px;">- Sarah Johnson</div>
        <div style="margin-top: 12px;">Marketing Director at TechCorp</div>
        <div style="margin-top: 12px;">
          <span style="color: #3B82F6; text-decoration: underline; font-weight: 600;">View invitation</span> | <span style="color: #3B82F6; text-decoration: underline; font-weight: 600;">Ignore</span>
        </div>
      </div>
      <!-- 底部问题栏 -->
      <div style="background: #7F1D1D; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; color: #FECACA;">
        Question: Could this be phishing? What would you check?
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：Shipping Notification 钓鱼邮件 -->
    <div style="background: #0F0F0F; border: 1px solid #333; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #7F1D1D; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">3</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">Shipping Notification</div>
      </div>
      <!-- 邮件内容 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
        <div>From: <span style="color: #EF4444; font-weight: 600;">noreply@amazon-delivery.net</span></div>
        <div style="margin-top: 12px;">Subject: Package Delivery Failed - Action Required</div>
        <div style="margin-top: 12px;">Hello,</div>
        <div style="margin-top: 12px;">We attempted to deliver your package but no one was available. <span style="color: #EF4444; font-weight: 600;">Please reschedule <br>delivery within 48 hours</span> or your package will be returned.</div>
        <div style="margin-top: 12px; color: #3B82F6; font-weight: 600; text-decoration: underline;">Reschedule Now</div>
        <div style="margin-top: 12px;">Amazon Logistics Team</div>
      </div>
      <!-- 底部问题栏 -->
      <div style="background: #1E40AF; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; color: #F0F9FF;">
        Question: What indicators suggest this might be phishing?
      </div>
    </div>
    <!-- 右侧：IT Support Request 邮件 -->
    <div style="background: #0F0F0F; border: 1px solid #333; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #2563EB; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">4</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">IT Support Request</div>
      </div>
      <!-- 邮件内容 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 16px;">
        <div>From: <span style="color: #3B82F6; font-weight: 600;">itsupport@university.edu</span></div>
        <div style="margin-top: 12px;">Subject: Password Expiration Notice</div>
        <div style="margin-top: 12px;">Dear Student,</div>
        <div style="margin-top: 12px;">Your university password will expire in 7 days. Please <span style="color: #3B82F6; font-weight: 600; text-decoration: underline;">log in to the university portal</span> to <br>update your password.</div>
        <div style="margin-top: 12px;">If you have any issues, contact the IT Help Desk at (555) 123-4567 or visit the Tech <br>Center in Building C.</div>
        <div style="margin-top: 12px;">University IT Services</div>
      </div>
      <!-- 底部问题栏 -->
      <div style="background: #7F1D1D; border-radius: 8px; padding: 16px; font-size: 16px; font-weight: 600; color: #FECACA;">
        Question: Is this legitimate? What features confirm or deny?
      </div>
    </div>
  </div>
</div>

## <span style="color: red">What Would You Do?</span>

Scenario-based decision making for real-world situations

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：The Failed Delivery 场景 -->
    <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #7F1D1D; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">1</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">The Failed Delivery</div>
      </div>
      <!-- 场景描述 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        You receive a text message: "UPS: <span style="color: #EF4444; font-weight: 600;">Your package delivery failed. Click here to <br>reschedule</span>: bit.ly/2xKp9mL"
      </div>
      <!-- 选项栏 -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          A. Click the link to reschedule delivery
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          B. Check UPS website directly by typing the URL
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          C. Reply to the text asking for more information
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          D. Call the number in the text message
        </div>
      </div>
    </div>
    <!-- 右侧：The CEO Request 场景 -->
    <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #2563EB; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">2</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">The CEO Request</div>
      </div>
      <!-- 场景描述 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        Your "CEO" emails you: "<span style="color: #3B82F6; font-weight: 600;">I'm in a meeting and need you to process an urgent wire <br>transfer immediately. Don't call me - just execute. Details attached.</span>"
      </div>
      <!-- 选项栏 -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          A. Process the transfer immediately as requested
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          B. Open the attachment to review transfer details
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          C. Verify through a separate channel (call/text)
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          D. Forward to finance team for processing
        </div>
      </div>
    </div>
  </div>
</div>

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; gap: 20px; min-width: max-content; padding: 16px;">
    <!-- 左侧：The Tech Support Popup 场景 -->
    <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #7F1D1D; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">3</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">The Tech Support Popup</div>
      </div>
      <!-- 场景描述 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        A popup appears: "<span style="color: #EF4444; font-weight: bold;">⚠️ CRITICAL ALERT: Your computer is infected with 12 viruses! <br>Call Microsoft Support immediately: 1-800-555-0199</span>"
      </div>
      <!-- 选项栏 -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          A. Call the number immediately for help
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          B. Close the popup and run antivirus scan
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          C. Download the suggested removal tool
        </div>
        <div style="background: #1E40AF; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #F0F9FF;">
          D. Restart computer and check if it persists
        </div>
      </div>
    </div>
    <!-- 右侧：The Accidental Click 场景 -->
    <div style="background: #0F0F0F; border-radius: 12px; padding: 20px; width: 720px; flex-shrink: 0; color: white;">
      <!-- 顶部编号+标题 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 28px; height: 28px; background: #2563EB; border-radius: 6px; color: white; font-size: 16px; font-weight: bold; display: flex; align-items: center; justify-content: center;">4</div>
        <div style="font-size: 20px; font-weight: 600; color: #E2E8F0;">The Accidental Click</div>
      </div>
      <!-- 场景描述 -->
      <div style="background: #1A1A1A; border-radius: 8px; padding: 20px; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
        You accidentally clicked a suspicious link in an email. The page loaded but you didn't <br>enter any information. What should you do?
      </div>
      <!-- 选项栏 -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          A. Close the browser and forget about it
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          B. Report to IT security team immediately
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          C. Clear browser history and cookies
        </div>
        <div style="background: #7F1D1D; border-radius: 6px; padding: 12px 16px; font-size: 16px; color: #FECACA;">
          D. Run a full system antivirus scan
        </div>
      </div>
    </div>
  </div>
</div>

## <span style="color: red">Key Takeaways</span>

Stay vigilant. Stay secure.

<div style="margin: 20px 0; overflow-x: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: inline-flex; flex-direction: column; gap: 12px; min-width: max-content; padding: 16px; align-items: center;">
    <!-- 核心原则卡片组 -->
    <div style="display: flex; gap: 20px; flex-shrink: 0;">
      <!-- 左侧列 -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- Phishing Exploits Psychology -->
        <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #E76F51;">🎭</div>
            <div style="font-size: 20px; font-weight: 600;">Phishing Exploits Psychology</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            Attackers target human emotions and cognitive biases, not just technology. <br>Understanding these tactics is your first defense.
          </div>
        </div>
        <!-- Verify Everything -->
        <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #3B82F6;">🔍</div>
            <div style="font-size: 20px; font-weight: 600;">Verify Everything</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            Always verify sender identity through official channels. Don't trust email addresses or <br>phone numbers provided in suspicious messages.
          </div>
        </div>
        <!-- Urgency is a Red Flag -->
        <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #E76F51;">⏰</div>
            <div style="font-size: 20px; font-weight: 600;">Urgency is a Red Flag</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            Legitimate organizations don't create false time pressure. Take time to verify before <br>acting on urgent requests.
          </div>
        </div>
      </div>
      <!-- 右侧列 -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <!-- Never Share Credentials -->
        <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #3B82F6;">🔒</div>
            <div style="font-size: 20px; font-weight: 600;">Never Share Credentials</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            No legitimate organization will ask for passwords, SSNs, or credit card numbers via <br>email, text, or phone.
          </div>
        </div>
        <!-- Report Suspicious Activity -->
        <div style="background: #0F0F0F; border-left: 4px solid #E76F51; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #E76F51;">🚩</div>
            <div style="font-size: 20px; font-weight: 600;">Report Suspicious Activity</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            When in doubt, report phishing attempts to your IT security team. Early reporting <br>prevents wider attacks.
          </div>
        </div>
        <!-- Continuous Learning -->
        <div style="background: #0F0F0F; border-left: 4px solid #3B82F6; border-radius: 8px; padding: 20px; width: 680px; color: white;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 20px; color: #3B82F6;">🎓</div>
            <div style="font-size: 20px; font-weight: 600;">Continuous Learning</div>
          </div>
          <div style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            Phishing tactics evolve constantly. Stay informed through security awareness training <br>and simulations.
          </div>
        </div>
      </div>
    </div>
    <!-- 底部标语栏 -->
    <div style="background: linear-gradient(to right, #FEE2E2, #DBEAFE); border-radius: 12px; padding: 24px 40px; margin-top: 20px; text-align: center; width: 1380px; flex-shrink: 0;">
      <div style="font-size: 28px; font-weight: bold; color: #111827; margin-bottom: 8px;">"Think Before You Click"</div>
      <div style="font-size: 18px; color: #1F2937; font-weight: 600;">
        You are the first line of defense against phishing attacks
      </div>
    </div>
  </div>
</div>
