---
layout: single
title: Excelファイルの読み書き
header:
  overlay_image: images/header_A.png
  overlay_filter: rgba(44, 82, 207, 0.35)
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
date: 2024-08-01
last_modified_at : 2024-08-01 15:00:00
---

Excelファイルの読み書きをPandas データフレーム上で行なう<!--more-->基本事項をまとめました。


#### シート名の確認

Excelファイルをデータフレームとして読み込む場合、ファイル名に加えてシート名を指定する必要があります。
シート名を確認するために、いちいちExcelファイルを開くことなく、Jupyter Notebook で確認します。

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

#### 確認結果

以下のとおり、読み込むExcelファイルには **'Sheet1_name'**、 **'Sheet2_name'** 2つのシートがあることが分かりました。いずれか一方のみか
それとも両方を2つのデータフレームとして読み込むか。ここで、Excelファイルの中身の確認が必要になります。

{% highlight python linenos  %}

# リスト型式で出力される。

['Sheet1_name', 'Sheet2_name']

{% endhighlight %}

#### Excel シートを読み込み、結果をデータフレームとする

データフレームdf1 は、'Sheet2_name'から読込み、col1列をインデックスにして
最初の行はタイトル（ヘッダー行）とします。


{% highlight python  linenos %}

# Sheet2_nameのシートを選択
# col1のデータをIndex にする
# 最初の行がタイトル行のデータフレームとして読み込む

xlsx = pd.ExcelFile(filename)
df1 = pd.read_excel(xlsx, 'Sheet2_name', index_col="col1", header=0)

{% endhighlight %}


データフレームdf2 は、'Sheet1_name'からすべての列を列として読み込みます。
最初の行もデータです。

{% highlight python  linenos %}

# Sheet1_nameのシートをそのまま全部
# 最初の行もデータとして読み込む
# タイトル行はなし（header=None）

df2 = pd.read_excel(xlsx, 'Sheet1_name', header=None)


{% endhighlight %}

#### データフレーム(df)をExcel ファイルとして保存する

Pandas データフレームが自動で作成するインデックス（0から始まる各行に対する
シーケンシャル番号）は、通常Exceファイルでは不要ですから、**"index=False"**
としてExcelには書き出さない。

{% highlight python  linenos %}

# データフレームをファイル名"excel_false_index.xlsx"で保存
# データフレームのインデックスはExcelには書き出さない

df.to_excel("excel_false_index.xlsx", index=False)

{% endhighlight %}

ラベルインデックスのようにインデックス自体に意味を持たせているのであれば、
インデックスはExcel列「A」の値として書き出すこともできます。
**"index=True"**は、デフォルトでので、指定しなければ書き出します。

{% highlight python  linenos %}

# データフレームをファイル名"excel_true_index.xlsx"で保存する
# データフレームのインデックスはExcel列「A」の値として書き出す

df.to_excel("excel_true_index.xlsx")

{% endhighlight %}

