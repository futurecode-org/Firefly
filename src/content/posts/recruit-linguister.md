---
title: 合作翻译官绝赞招募中！
published: 2026-03-29
# updated: 
description: "Ciallo～(∠・ω< )⌒★"
image: "api"
tags: []
category: Pinned
draft: false
pinned: true
# slug: 
lang: zh-Hans
author: 🐦‍🔥不死鸟Anka
comment: true
# licenseName: 
# licenseUrl: 
# sourceLink: 
# password: 
# passwordHint: 
---

Ciallo～(∠・ω< )⌒★  
首先，欢迎你阅读由仓库贡献者们共同维护的英方课程笔记～  
在这个知识共享的时代，我们诚挚地邀请你运用你那优秀的英语阅读能力，给这份课程笔记增加中文翻译，为开源社区作出属于你的贡献！  
作为一个计算机专业的翻译官，你需要具备git、markdown和html的基础知识。

> [!ABSTRACT] 附：
> [Git](https://git-scm.com/book/zh/v2)
> 
> [基本写作和格式语法 - GitHub 文档](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
> 
> [HTML5 教程](https://www.runoob.com/html/html5-intro.html)

## 开始贡献

::github{repo="A-n-k-a/Firefly"}

将这个仓库派生（fork）到你自己的账号下，使用 `git clone <派生后的仓库地址>` 将现有代码克隆到本地，你可以在 `src/content/posts/obu/level5/semester2/<科目>/<周数>` 找到本学期笔记的markdown文件。

## 翻译要求

逐段对照翻译（英文原文在上，中文译文在下），并且原文的某些词汇带有样式时，译文的对应词语需要使用与它相同的样式（你可以直接复制原文的样式）。

> [!TODO] 附：
> 翻译格式参考：https://mizuki.anka2.top/posts/l5-cpp-week9-lecture/
> 
> ::github{repo="A-n-k-a/Mizuki"}

## 本地预览

<img
  loading="lazy"
  width="100"
  src="https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Node.js/Node.js.png"
  alt="Node.js®" />
1. 安装[Node.js®](https://nodejs.org/zh-cn)24（或更新版本，但一般不推荐安装非LTS版本）和pnpm  
> （已安装的情况下可直接进行下一步）

2. 在仓库根目录下打开终端，依次运行
```console
pnpm install
pnpm dev
```

3. 稍等片刻，终端会出现一个本地链接
```console {8}
[vite] connected.
[types] Generated 0ms
[vite] connected.
[content] Syncing content
[content] Synced content
[vite] Re-optimizing dependencies because vite config has changed
 astro ready in 1608 ms
┃ Local    http://localhost:4321/
┃ Network  use --host to expose
watching for file changes...
```

4. 在浏览器打开即可看到渲染效果

## 提交翻译

向我们的仓库开启Pull request即可

## 已完成的翻译

| 文章                                                                                                                                          | 翻译官                                                     | 相关PR                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DSA Week2: Binary search, Sorting and Linked list](/posts/obu/level5/semester2/dsa/week2/lecture/)                                         | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4121230713" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/1" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/1/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/1" aria-keyshortcuts="Alt+ArrowUp">Translate dsa/week2/lecture<span class="issue-shorthand">&nbsp;#1</span></a></span>                                   |
| [A Linked List Class to Represent Polynomials](/posts/obu/level5/semester2/dsa/week2/seminar-a-linked-list-class-to-represent-polynomials/) | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Sorting](/posts/obu/level5/semester2/dsa/week2/seminar-practical-sorting/)                                                                 | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Data Structures and Algorithms Week5: Tree](/posts/obu/level5/semester2/dsa/week5/lecture/)                                                | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Binary Trees and Cross-referencing (Binary search tree)](/posts/obu/level5/semester2/dsa/week5/seminar/)                                   | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Data Structures and Algorithms Week6: AVL Tree](/posts/obu/level5/semester2/dsa/week6/lecture/)                                            | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Exercises AVL Tree](/posts/obu/level5/semester2/dsa/week6/seminar/)                                                                        | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4283998181" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/2/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/2" aria-keyshortcuts="Alt+ArrowUp">Translation for DSA week 2 5 6<span class="issue-shorthand">&nbsp;#2</span></a></span>       |
| [Data Structures and Algorithms Coursework2](/posts/obu/level5/semester2/dsa/coursework/2/)                                                 | [bertyuan (Bertrand Yuan)](https://github.com/bertyuan) | <span class="reference"><svg data-component="Octicon" class="octicon octicon-git-merge merged color-fg-done mr-1" title="Merged" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"></path></svg><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4514812257" data-permission-text="Title is private" data-url="https://github.com/A-n-k-a/Firefly/issues/5" data-hovercard-type="pull_request" data-hovercard-url="/A-n-k-a/Firefly/pull/5/hovercard" href="https://github.com/A-n-k-a/Firefly/pull/5" aria-keyshortcuts="Alt+ArrowUp">add translation for DSA coursework 2<span class="issue-shorthand">&nbsp;#5</span></a></span> |
