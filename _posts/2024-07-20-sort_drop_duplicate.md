---
layout: single
title: 日付の新しいものを残す重複排除
header:
  overlay_image: images/header_6.png
  overlay_filter: rgba(44, 82, 207, 0.65)
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

日付の新しいものを残す重複排除<!--more-->する方法をまとめました。重複排除するルールとして、❶新しいものを残す。❷古い方を残す。といった一工夫が必要な場合があります。そのステップをまとめました。

#### Step 1：datetime オブジェクトの確認

日付の列でソートするには、その列がdatetime オブジェクトでなければなりません。まず、ソートする列のデータ型を確認します。

{% highlight python linenos  %}
# データ型を確認する

df['date'].dtypes

>> dtype('<M8[ns]')  --> OK
>> dtype('O')  --------> NG  datetime 型式にする必要ある
>> dtype('int64')  ----> NG  datetime 型式にする必要ある
>> dtype('float64') ---> NG  datetime 型式にする必要ある
{% endhighlight %}

NGの場合には、datetime オブジェクトにします。

{% highlight python linenos  %}
# データ型をdatetime にする

df['date']=pd.to_datetime(df['date'])

{% endhighlight %}


#### Step 2：新しい順に並び替える

{% highlight python linenos  %}
# ascending = False -> 値の大きい順、日付けの新しい順　

df = df.sort_values(["date"], ascending = False)

{% endhighlight %}

列名**date**で新しい順に並び替えておく。


<dl><strong>ascending の意味：上昇</strong>
<dt>ascending = True</dt> 
<dd>昇順　古いものから新しいものへ　小さいものから大きいものへ</dd>
<dt>ascending = False</dt>
<dd>降順　新しいものから古いものへ　大きいものから小さいものへ</dd>
</dl>
{: .notice--danger}


#### Step 3：列A（例：社員番号）の重複排除の基準として新しいものを残す

{% highlight python linenos  %}

# 新しいものが最初にソートされているので、keep='first'とする
# inplace=True で上書きする
# 前後にdf.shapeで要素数をプリントし排除された数を把握する

print(df.shape)
df.drop_duplicates(subset='社員番号', keep='first', inplace=True)
print(df.shape)

{% endhighlight %}
