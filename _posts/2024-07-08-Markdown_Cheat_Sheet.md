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

This is <span style="color:blue">my *blue*</span> text.<br>
This is <span style="color:#FF33AB">my **custom** _colored_</span> text, using a hex color code.

{% endhighlight %}

This is <span style="color:blue">my *blue*</span> text.<br>
This is <span style="color:#FF33AB">my **custom** _colored_</span> text, using a hex color code.


### 強制的に文字を左右中央に配置する

{% highlight python linenos %}

中央
{: style="text-align: center; color: blue;"} 
右寄せ
{: style="text-align: right; color: red"} 
左寄せ
{: style="text-align: left;"} 


{% endhighlight %}

中央
{: style="text-align: center; color: blue;"} 
右寄せ
{: style="text-align: right; color: red"} 
左寄せ
{: style="text-align: left;"} 


{% highlight python linenos %}

**Notice:** 重要なNoticeです。
{: .notice--danger}
{% endhighlight %}

**Notice:** 重要なNoticeです。
{: .notice--danger}

### Capture Notice (Liquid Version)

{% highlight python linenos %}
{% raw %}
{% capture notice-1 %}{% endraw %}
**Extended notice box**:
* You can include lists
* and even fenced code blocks:

```html
<html>
  <body>Some body.<body>
</html>
```
{% raw %}
{% endcapture %}
{% endraw %}
{% endhighlight %}

### Result

{% capture notice-1 %}
**Extended notice box**:
* You can include lists
* and even fenced code blocks:

```html
<html>
  <body>Some body.<body>
</html>
```
{% endcapture %}

<div class="notice">{{ notice-1 | markdownify }}</div>



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

This is *red*{: style="color: red"}.

{% endhighlight %}


### 結果

**Some custom styled text with a [_link_](#文字装飾_リンク付け).**
{: style="text-align: center; font-size:1.75em; color: #f78c6c;"}

This is *red*{: style="color: red"}.