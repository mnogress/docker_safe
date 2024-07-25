---
layout: single
title: Markdown Cheat Sheet
header:
  overlay_image: images/header_4.png
  overlay_filter: rgba(107, 74, 43, 0.40)
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
tag: ["HTML", "Markdown", "css"]
---

HTML/Markdown のStyle sheet reference になります。 <!--more-->

### 文字に色をつける


{% highlight python linenos %}

これは<span style="color:green">my *green*</span> text.<br>
これは<span style="color:#FF44AB">my **カスタム** _colored_</span> 16進コード

{% endhighlight %}

これは<span style="color:green">my *green*</span> text.<br>
これは<span style="color:#FF33AB">my **カスタム** _colored_</span> 16進コード

---

### 強制的に文字を左右中央に配置する

{% highlight python linenos %}

中央
{: style="text-align: center; color: blue; font-weight: bold;"} 
Right[^1]
{: style="text-align: right; color: red; font-style: italic;"} 
左寄せ
{: style="text-align: left; color: green; font-size:1.10em;"} 

[^1]: イタリックは主に英語で使用する

{% endhighlight %}

中央
{: style="text-align: center; color: blue; font-weight: bold;"} 
Right[^1]
{: style="text-align: right; color: red; font-style: italic;"} 
左寄せ
{: style="text-align: left; color: green; font-size:1.10em;"} 

[^1]: イタリックは主に英語で使用する

---

{% highlight python linenos %}

**Notice:** 重要なNoticeです。
{: .notice--danger}
{% endhighlight %}

**Notice:** 重要なNoticeです。
{: .notice--danger}

**Notice:** {: .notice}
{: .notice}

**Primay Notice:** {: .notice--primary}
{: .notice--primary}

**Info Notice:** {: .notice--info}
{: .notice--info}

**Warning Notice:** {: .notice--warning}
{: .notice--warning}

**Danger Notice:** {: .notice--danger}
{: .notice--danger}

**Success Notice:** {: .notice--success}
{: .notice--success}

### Capture Notice (Liquid Version)

{% highlight python linenos %}
{% raw %}
{% capture notice-1 %}{% endraw %}
**Notice Box**:
* リスト表示できます
* Code Blockも可能
```python
import numpy as np
import pandas as pd
import seaborn as sns
```
{% raw %}{% endcapture %}{% endraw %}
{% raw %}<div class="notice">{{ notice-1 | markdownify }}</div>{% endraw %}

{% endhighlight %}



### Result1

---

{% capture notice-1 %}
**Notice Box**:
* リスト表示できます
* Code Blockも可能

```python
import numpy as np
import pandas as pd
import seaborn as sns
```
{% endcapture %}
<div class="notice">{{ notice-1 | markdownify }}</div>



### Result2

{% capture notice-1 %}
**Notice Box**:
* リスト表示できます
* Tableも可能

| 左寄せ | 真ん中 | 右寄せ |
| :----- | :----: | -----: |
| 1-1    |  1-2   |    1-3 |
| 2-1    |  2-2   |    2-3 |
{% endcapture %}
<div class="notice">{{ notice-1 | markdownify }}</div>

---

### Capture Notice (HTML Version)

{% highlight python linenos %}
<div class="notice--danger" markdown="1">
<span style="font-size:1.25em;">**Primary Notice with code block:** Some Text...</span><br>
<span style="font-size:1.25em;">Some more text....</span>

```html
<html>
  <body>Some body.<body>
</html>
```
</div>

{% endhighlight %}

### Result

<div class="notice--danger" markdown="1">
<span style="font-size:1.25em;">**Primary Notice with code block:** Some Text...</span><br>
<span style="font-size:1.25em;">Some more text....</span>

```html
<html>
  <body>Some body.<body>
</html>
```
</div>


### 文字装飾_リンク付け


{% highlight python linenos %}

**Some custom styled text with a [_link_](#文字装飾_リンク付け).**
{: style="text-align: center; font-size:1.75em; color: #f78c6c;"}

これは*red*{: style="color: red"}.

{% endhighlight %}


### 結果

**Some custom styled text with a [_link_](#文字装飾_リンク付け).**
{: style="text-align: center; font-size:1.75em; color: #f78c6c;"}

これは*red*{: style="color: red"}.