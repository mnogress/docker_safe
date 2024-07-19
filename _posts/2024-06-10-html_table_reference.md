---
layout: single
title: html table Reference
header:
  overlay_image: images/header_1.png
  overlay_filter: rgba(255, 0, 0, 0.25)
  #overlay_color: "#333"
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
---


HTML Table の作成方法のベーシックをまとめました。 <!--more-->

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

