---
layout: single
title: Excelファイルの読み書き
toc: true
toc_label: "目次"
toc_icon: "heart" 
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
sidebar:
  nav: "docs"
category: Reference
tag: ["Pandas", "Function"]
---

Excelファイルの読み書き<!--more-->


## Excel File の読込み、書き込み、シート名の確認

#### シート名の確認

{% highlight python linenos  %}

# 必要なモジュールをインポート
import openpyxl as xl
import win32com.client
import os

# excel_file.xlsx　を"filename"として定義する
filename = 'excel_file.xlsx'
 
# エクセルファイルを読み込む
wb = xl.load_workbook(filename)

# 読み込んだexcelファイルのシート名を確認する
wb.sheetnames

{% endhighlight %}


{% highlight python %}

['Sheet1_name', 'Sheet2_name']

# リスト型式で出力される。

{% endhighlight %}

>
**Notice** 注意{:.notice}
>

```
**Notice** 注意{:.notice}
```