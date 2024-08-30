---
layout: single
title: カテゴリカルデータの個数、構成比率、トータル行を集計、整形する
header:
  overlay_image: images/header_6.png
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
date: 2024-08-14
last_modified_at : 2024-08-14 15:00:00
---

カテゴリカルデータの個数、構成比率、トータル行を集計、整形する<!--more-->方法をまとめました。


#### サンプルコードの紹介

カテゴリカルデータのそれぞれの個数を大きい順に表示し、その構成比率とトータル行を追加した内容を
データフレームとして提供するスクリプトになります。

{% highlight python linenos  %}

col_name = '部門' # 集計したい列名
tab = df[col_name].value_counts()
tab = pd.DataFrame(tab)
tab = tab.rename_axis(col_name)
tab['構成比']=(tab['count'] / tab['count'].sum())
tab.rename(columns={col_name: '会社数', 'count': '件数'}, inplace = True)

# Total 行を追加する関数
def append_sum_row_label(df):
    df.loc['Total'] = df.sum(numeric_only=True)
    return df

tab = append_sum_row_label(tab)
format_dict = {'構成比': '{:.1%}', '件数' : '{:n}'}
display(tab.style.format(format_dict))

{% endhighlight %}

#### サンプルデータフレームと確認結果

以下のとおり、サンプルデータフレームの集計結果をデータフレームとして得ることができます。

{% highlight python linenos  %}

# 演習用のデータフレームを作成します。
df = pd.DataFrame({ 'ID': ['01285679', '01340788', '02123782', '10541976', '12297411', 
                             '13299899', '48144450', '55339981'],
                   '出身地': ["東京都","山口県",'大阪府','千葉県','東京都',
                          '埼玉県','千葉県','千葉県'],
                  '部門':   ["首都圏営業部","関西支部","本部総務",
                               "研究開発","東北支部","北海道支部",
                               "首都圏営業部","研究開発"]},
                    index=[0, 1, 2, 3, 4, 5, 6,7])
# オリジナルのデータフレームを表示
display(df)

{% endhighlight %}

![image]({{ "/images/fig_1.png" | relative_url}}){:height="300px" width="300px"}<br>

![image]({{ "/images/fig_2.png" | relative_url}}){:height="300px" width="300px"}<br>


データフレームdf2 は、**'Sheet1_name'**のすべてのExcel列をデータフレームの列として読み込みます。
最初の行もデータで、タイトル行はありません。

{% highlight python  linenos %}

# Sheet1_nameのシートをそのまま全部
# 最初の行もデータとして読み込む
# タイトル行はなし（header=None）

df2 = pd.read_excel(xlsx, 'Sheet1_name', header=None)


{% endhighlight %}

#### read_excel() でよく使われる引数のまとめ


| パラメータ(引数) | 説明 |
| :----- | :---- |
|sheet_name= *"sheet_name"* or *int*| 読み込むシート名、最初のシートを*0*として整数で指定|
|index_col = *"column_name"*　or *None* |データフレームでIndexとする列名の指定、*None* は無し|
|header= *0* or *None*| タイトル行の指定、*0*は先頭行、*None* は無し|
|skiprows = *int*| 上部の何行を読み飛ばすか指定|
|skipfooter= *int*| データ下部の何行を読み飛ばすか指定|
|usecol = [ 1, 2, 6, 7, 8 ]| 読み込む列番号を*int*で指定|
|usecol = "A, C:F"|読み込む列名を文字列で指定、リスト型式ではなく単体の文字列として与えること|
|==== 
| 補足*int* の意味 | 整数値　0,1,2,3... |
{: .notice}


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

