---
layout: single
title: pivot で縦持ちから横持ちにデータフレームを変換する
classes:
  - landing
  - dark-theme
  - wide
---

縦持ちのデータセット（これは、DB担当者からデータをもらう場合、大体この形です）を横持ちにして分析用にデータセットを加工することは
データ分析者が必ずハマる作業の一つです。
pivot の機能を正しく理解すれば、殆どの縦持ちを横持ち変換のニーズに対応できます。　今回は、横持ち変換のための pivot の使い方について　Blogにまとめました。

----

##### サンプルデータセットの紹介

データセットを利用しながら、説明をした方が分かりやすいと思いますので、今回は、以下のようなサンプルデータセットを用意しました。



##### 21人以上にフィルタリングする
{% highlight python linenos %}

   print(df.shape)
   df = df[df['労働者総数'] >= 21]
   print(df.shape)

{% endhighlight %}




### 参照ページ一覧
このブログを作成するにあたり、以下のページを参考にしています。併せてご覧ください。
>
1) [サンプルデータセットの説明](https://www.so-wi.com/2019/06/01/reference_data.html){:target="_blank"}<br>
2) [df.value_counts() の結果をパワポ用にビジュアル化する](https://www.so-wi.com/2022/03/11/df_value_counts_visualization.html){:target="_blank"}<br>
3) [クロス集計表とヒートマップでデータセットを理解する](https://www.so-wi.com/2020/12/22/cross_tab_heat_map.html){:target="_blank"}<br>
{:style="border-color: #5f564d; border-top-color: #5f564d; font-size: 1.0em; background-color: #f5f5dc;"}