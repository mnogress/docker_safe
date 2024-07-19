---
layout: single
title: Excelファイルの読み書き
header:
  overlay_image: images/header.jpg
  overlay_filter: rgba(205, 239, 154, 0.30)
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
tag: ["Pandas", "Function"]
---

Excelファイルの読み書き<!--more-->


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

#### 結果

{% highlight python linenos  %}

# リスト型式で出力される。

['Sheet1_name', 'Sheet2_name']

{% endhighlight %}

#### Excel シートを読み込み、結果をデータフレームとする

{% highlight python  linenos %}

# Sheet2_nameのシートを選択
# col1のデータをIndex にする
# 最初の行がタイトル行のデータフレームとして読み込む

xlsx = pd.ExcelFile(filename)
df = pd.read_excel(xlsx, 'Sheet2_name', index_col="col1", header=0)

# Sheet1_nameのシートをそのまま全部
# 最初の行がタイトル行のデータフレームとして読み込む

df = pd.read_excel(xlsx, 'Sheet1_name', header=0)


{% endhighlight %}

#### データフレーム(df)をExcel ファイルとして保存する

{% highlight python  linenos %}

# データフレームをファイル名"excel_false_index.xlsx"で保存
# データフレームのインデックスはExcelには読み込まない

df.to_excel("excel_false_index.xlsx", index=False)

# データフレームをファイル名"excel_true_index.xlsx"で保存する
# データフレームのインデックスはExcel列「A」の値として読み込む

df.to_excel("excel_true_index.xlsx")

{% endhighlight %}

