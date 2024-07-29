---
layout: single
title: html table Reference
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
---


Markdown Table の作成方法のベーシックをまとめました。 <!--more-->


#### Table by Markdown



{% highlight python linenos %}


| 左寄せ(Left) | 真ん中(Cebter) | 右寄せ(Right) |
| :-----    | :----: | -----: |
| td_1-1    |  td_1-2   |  td_1-3 |
| td_2-1    |  td_2-2   |  td_2-3 |
|----
| td_3-1                      |  
| td_4-1    |  td_4-2   |  td_4-3 |  
|====
| footer    |  ft_1-2   |  ft_1-3 |
{% raw %}{: style="font-size:1.15em;"}{% endraw %}
{% endhighlight %}

#### Result


| 左寄せ(Left) | 真ん中(Cebter) | 右寄せ(Right) |
| :-----    | :----: | -----: |
| td_1-1    |  td_1-2   |  td_1-3 |
| td_2-1    |  td_2-2   |  td_2-3 |
|----
| td_3-1                      |  
| td_4-1    |  td_4-2   |  td_4-3 |  
|====
| footer    |  ft_1-2   |  ft_1-3 |
{: style="font-size:1.15em;"}
