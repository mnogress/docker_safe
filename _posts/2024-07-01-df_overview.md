---
layout: single
title: df_overview スクリプト
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
tag: ["Pandas", "Function"]
---

データフレームの概要理解する  "df_overview" スクリプト<!--more-->

#### スクリプトの内容

{% highlight python linenos  %}

# 必要なモジュールをインポート
import numpy as np
import pandas as pd

# DataFrame 要約　列番号、列名、ユニーク変数数、データタイプ、NaN の個数
pd.options.display.max_rows = 220
## Check for unique values of categorical variables
df_overview = pd.DataFrame([[i, len(df[i].unique()), df[i].dtypes, df[i].isnull().sum()] for i in df.columns], 
                          columns=['Feature', 'Unique Values', 'dtypes', 'NaN'])
df_overview

{% endhighlight %}


#### 結果

![image]({{ "/images/2024-07150340.png" | relative_url}}){:height="500px" width="500px"}<br>

