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

日付の新しいの残す重複排除<!--more-->


#### Step 1：新しい順に並び替える

{% highlight python linenos  %}
# ascending = False -> 値の大きい順、日付けの新しい順　

df = df.sort_values(["date"], ascending = False)

{% endhighlight %}

列名**date**で新しい順に並び替えておく。


<dl><strong>Notice:</strong>
<dt>ascending = True</dt> 
<dd>昇順　古いものから新しいものへ　小さいものから大きいものへ</dd>
<dt>ascending = False</dt>
<dd>降順　新しいものから古いものへ　大きいものから小さいものへ</dd>
</dl>
{: .notice--danger}



