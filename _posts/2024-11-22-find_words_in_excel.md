---
layout: single
title: Excelファイルの内容をKey Word検索する
header:
  overlay_image: images/header_E.png
  #overlay_filter: rgba(107, 74, 43, 0.40)
toc: True
toc_label: "目次"
toc_icon: "heart" 
toc_sticky: True
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  #- wide
sidebar:
  nav: "docs"
category: Reference
date: 2024-11-22
last_modified_at : 2024-11-22 13:23:00
---


Excelファイルの内容をKey Word検索するPython Scriptをまとめました。 <!--more-->
フォルダ内のExcelファイルのタイトルではなく中身について検索するPython Script になります。

#### if "検索文字" in "検索対象文字列" を理解する 

検索には、**if "検索文字" in "検索対象文字列"**の構文を使っています。
以下の例で理解できます。検索対象文字列に対して**検索文字を含む部分検索**が可能です。

{% highlight python linenos %}
if 'リンゴ' in 'リンゴみかん':
    print('Matched')
else:
    print("No Matched")

>>> Matched
# 'リンゴみかん'の文字列には文字列'リンゴ'はある。
{% endhighlight %}


{% highlight python linenos %}
if 'リンゴみかん' in 'リンゴ':
    print('Matched')
else:
    print("No Matched")

>>> No Matched
# 'リンゴ'の文字列には文字列'リンゴみかん'はない。
{% endhighlight %}


{% highlight python linenos %}
if 'リンゴみかん' in 'リンゴみかんレモン':
    print('Matched')
else:
    print("No Matched")

>>> Matched
#  'リンゴみかんレモン'の文字列には文字列'リンゴみかん'はある。
{% endhighlight %}


#### Base Table by Markdown and CSS

main.css のtableクラスを取り込み、それを利用して「**このページのみ有効**」とする装飾を
アレンジしたベーステーブルを作成する。　手順は以下のとおりです。


| Line# | 概要    |備考 | 
| :-----    | :-----   |:---- | 
| **1 to 38**    | main.css のtableクラスを取り込む  | \<style type="text/css">と</style>で囲みこのページ独自のCSSを作成する |
| **2 to 10**     | クラス名を"table"とする  |table {}で囲む|
| **7**     | font-sizeを変更  |font-size: 0.65em;と指定する|
| **27 to 31**   | tfootを追加し、backgroud-colorを別の色に変更  |background-color: #afeeee;と指定する|
| **49**   |  {: class="table"}を最後に付加する |これで設定したCSSが効くようになる　|
{: .notice}



{% highlight python linenos %}

import openpyxl as xl
import os
PATHS = [r'C:\\Users\\tkjyoke\\PycharmProjects\\project\\find_test\\']
KEYS = ["人","雇用力評価", "1"]
for key_ in KEYS:
    for path_ in PATHS:
        for fn in os.listdir(path_):
            wb = xl.open(os.path.join(path_,fn))
            for ws in wb.worksheets:
                for rows in ws.iter_rows(ws.min_row, ws.max_row, ws.min_column, ws.max_column):
                    for cell in rows:
                        if key_ in str(cell.value):
                            print(key_,os.path.basename(os.path.dirname(path_)),fn,ws.title, cell.coordinate)

{% endhighlight %}

