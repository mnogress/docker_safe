---
layout: single
title: html table Reference
toc: true
toc_label: "目次"
toc_icon: "heart" 
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
---


[SQLite](https://www.sqlite.org/index.html){:target="_blank"}は、軽量なディスク上のデータベースを提供する C ライブラリです。
別のサーバプロセスを用意する必要なく、<!--more--> SQLクエリー言語（SQL文）を使用してデータベースにアクセスできます。SQLiteを使ってアプリケーションのプロトタイプを作り、その後そのコードを PostgreSQLやOracle等の大規模データベースに移植することができるため、アプリ開発でのマストアイテム的なSQL DBツールです。


### 問題の所在

HTML Table の作成方法のベーシックをまとめました。

### html table

{% highlight html linenos  %}

<style>
@media screen and (max-width:1280px){
	.p_table {width:100%;overflow:scroll;}
	.p_table table {width:1153px;}
}
@media screen and (max-width:750px){
  .resp_table {width:100% !important;}
  .resp_table th ,.resp_table td{padding:10px !important;}
}
</style>


<table class="resp_table">
    <caption>表示例</caption>
    <thead>
      <tr>
        <th width="120">th_1</th>
        <th width="120">th_2</th>
        <th width="600">th_3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>td_1_1</td>
        <td>td_1_2</td>
        <td>td_1_3</td>
      </tr>
      <tr>
        <td>td_2_1</td>
        <td>td_2_2</td>
        <td>td_2_3</td>
      </tr>
      <tr>
        <td colspan="3">td_3</td>
      </tr>
      <tr>
        <td rowspan="2">td_4_1</td>
        <td>td_4_2</td>
        <td>td_4_3</td>
      </tr>
      <tr>
        <td>td_5_2</td>
        <td>td_5_3</td>
      </tr>
    </tbody>
  </table>

{% endhighlight %}





<style>
@media screen and (max-width:1280px){
	.p_table {width:100%;overflow:scroll;}
	.p_table table {width:1153px;}
}
@media screen and (max-width:750px){
  .resp_table {width:100% !important;}
  .resp_table th ,.resp_table td{padding:10px !important;}
}
</style>


<table class="resp_table">
    <caption>表示例</caption>
    <thead>
      <tr>
        <th width="120">th_1</th>
        <th width="120">th_2</th>
        <th width="600">th_3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>td_1_1</td>
        <td>td_1_2</td>
        <td>td_1_3</td>
      </tr>
      <tr>
        <td>td_2_1</td>
        <td>td_2_2</td>
        <td>td_2_3</td>
      </tr>
      <tr>
        <td colspan="3">td_3</td>
      </tr>
      <tr>
        <td rowspan="2">td_4_1</td>
        <td>td_4_2</td>
        <td>td_4_3</td>
      </tr>
      <tr>
        <td>td_5_2</td>
        <td>td_5_3</td>
      </tr>
    </tbody>
  </table>


### Table by Markdown

{% highlight python linenos %}
| 左寄せ | 真ん中 | 右寄せ |
| :----- | :----: | -----: |
| 1-1    |  1-2   |    1-3 |
| 2-1    |  2-2   |    2-3 |
{% endhighlight %}

| 左寄せ | 真ん中 | 右寄せ |
| :----- | :----: | -----: |
| 1-1    |  1-2   |    1-3 |
| 2-1    |  2-2   |    2-3 |



| 左寄せ | 真ん中 | 右寄せ |
| :-----{.width="120"} | :----:{.width="120"} | -----:{.width="420"} |
| 1-1    |  1-2   |    1-3 |
| 2-1    |  2-2   |    2-3 |