---
layout: single
title: Minimal mistakes の文字の大きさ変更のためのscss
toc: true
toc_label: "目次"
toc_icon: "heart" 
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
sidebar:
  nav: "docs"
category: Reference
tag: ["scss", "minimal_mistakes"]
---

Minimal mistakes の文字の大きさ変更のためのscss<!--more-->

### Minimal Mistakes の文字の大きさをコントロールする

>
場所<br>C:\Users\usr\project_name\\_sass\minimal-mistakes<br>
            _sass\minimal-mistakes\\_base.scss<br>
            _sass\minimal-mistakes\\_variables.scss<br>  
>

#### <p> の文字サイズとして、$type-size-5 を指定する

{% highlight css linenos  %}
# _sass\minimal-mistakes\_base.scss
p,
pre,
blockquote,
ul,
ol,
dl,
figure,
table,
fieldset {
  font-size: $type-size-5;  <== Key Parameter!!
  orphans: 3;
  widows: 3;
}

{% endhighlight %}

#### $type-size-5: 0.88em の相対サイズを指定する


{% highlight css linenos  %}
# _sass\minimal-mistakes\_variables.scss

/* type scale */
$type-size-1: 2.20em !default; // ~39.056px
$type-size-2: 1.553em !default; // ~31.248px
$type-size-3: 1.01em !default; // ~25.008px
$type-size-4: 0.99em !default; // ~20px
$type-size-5: 0.88em !default; // ~16px   <== Key Parameter!!
$type-size-6: 0.75em !default; // ~12px
$type-size-7: 0.72em !default; // ~11px
$type-size-8: 0.68em !default; // ~10px

/* headline scale */
$h-size-1: 1.363em !default; // ~25.008px
$h-size-2: 1.15em !default; // ~20px
$h-size-3: 1.025em !default; // ~18px
$h-size-4: 1.0125em !default; // ~17px
$h-size-5: 1.0125em !default; // ~16.5px
$h-size-6: 0.9em !default; // ~16px

{% endhighlight %}
