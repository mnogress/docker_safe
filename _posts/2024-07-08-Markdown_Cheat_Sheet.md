---
layout: single
title: Markdown Cheat Sheet
header:
  overlay_image: images/header.jpg
toc: true
toc_label: "目次"
toc_icon: "heart" 
toc_sticky: true
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
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

*Center aligned text.*
{: style="text-align: center; color: blue;"} 
Right aligned text.
{: style="text-align: right; color: red"} 
Left aligned text.
{: style="text-align: left;"} 


{% endhighlight %}

*Center aligned text.*
{: style="text-align: center; color: blue;"} 
Right aligned text.
{: style="text-align: right; color: red"} 
Left aligned text.
{: style="text-align: left;"} 


{% highlight python linenos %}

**Notice:** This is an important info notice.
{: .notice--danger}
{% endhighlight %}


**Notice:** This is an important info notice.
{: .notice--danger}

### Capture Notice

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


<div class="notice--danger" markdown="1">
<span style="font-size:1.25em;">**Primary Notice with code block:** Some Text...</span><br>
<span style="font-size:1.25em;">Some more text....</span>

```html
<html>
  <body>Some body.<body>
</html>
```
</div>



**Some custom styled text with a [_link_](#text-alignment-and-styling).**
{: style="text-align: center; font-size:1.75em; color: #f78c6c;"}

This is *red*{: style="color: red"}.