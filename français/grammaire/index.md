---
layout: single
title: 文法（Grammaire）
permalink: /français/grammaire/
header:
  overlay_image: "/images/header_fr30_1280by336.png"
  overlay_filter: rgba(12, 99, 100, 0.20) 
toc: false
author_profile: true
toc: false
sidebar:
  nav: "docs"
---

## 🧩 文法（Grammaire）

このカテゴリでは、初級〜中級レベルの文法を  
**日本語話者向けに分かりやすく解説**しています。

---

## 学べる内容

(１) 代名動詞  
(２) 前置詞  
(３) 文の構造  
(４) 時制の基本  
(５) 初級者がつまずくポイント  

---

## 記事一覧

{% assign posts = site.categories.grammaire %}
{% for post in posts %}
・ [{{ post.title }}]({{ post.url }})
{% endfor %}

---

## 関連カテゴリ

・ [発音（Prononciation）](/français/prononciation/)<br>
・ [動詞活用（Conjugaison）](/français/conjugaison/)<bt>


<style>
  /* トップページ（splashレイアウト）だけの文字サイズ調整 */
  .page-content p {
    font-size: 1rem;
    /* 通常の本文サイズ */
    line-height: 1.3;
    /* 読みやすさ向上 */
  }

  .page-content ul li,
  .page-content ol li {
    font-size: 1.3rem;
    /* 通常の本文サイズ */
    line-height: 1.6;
  }
</style>