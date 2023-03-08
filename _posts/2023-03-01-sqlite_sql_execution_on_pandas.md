---
layout: splash
title: データフレーム内の列間の値を比較する
feature-img: "assets/img/2020_08_15/flowers-g500bc7407_640.jpg"
tags: [Python, sqlite3, SQL ]
excerpt_separator: <!--more-->
---

### layout: post

SQLiteは、軽量なディスク上のデータベースを提供する C ライブラリです。
別のサーバプロセスを用意する必要なく、 SQLクエリー言語（SQL文）を使用してデータベースにアクセスできます。アプリケーションは内部データ保存に SQLite を使えます。SQLite を使ってアプリケーションのプロトタイプを作り、その後そのコードを PostgreSQL や Oracle 等の大規模データベースに移植することができるため、アプリ開発での定番のSQL DBです。
[sqlite3](https://docs.python.org/ja/3.5/library/sqlite3.html){:target="_blank"}モジュールは、データセットをSQL DBとして格納しSQL文でアクセスできるインターフェイスを提供します。今回は、Jupyter Notebook でデータ分析をする際にデータの読み込み、抽出の操作をsqlite3で提供されるSQL文を利用する方法にまとめました。

<!--more-->
PythonプログラムでのSQLの取り込みに活用頂ければ幸いです。

---

### サンプルデータセット

[サンプルデータセット](https://www.so-wi.com/2019/06/01/reference_data.html){:target="_blank"}で紹介した「データセット3: HR データ」を使います。他のデータセットでももちろん可能ですが、このデータセットに興味のある方は、[Kaggle_HR_attrition](https://www.kaggle.com/search?q=hr+attrition){:target="_blank"}で検索してデータセットをダウンロードしてください。

カレントディレクトリにダウンロードしたデータセットを配置して、Dataframeとして読み込みます。読み込むコードは以下のとおりです。

{% highlight python linenos %}
import codecs
with codecs.open("WA_Fn-UseC_-HR-Employee-Attrition.csv", mode ="r", encoding ="utf-8", errors="ignore") as file:
    df = pd.read_csv(file, delimiter =",", header=0)
{% endhighlight %}

今回は、データクリーニング前のRaw Data の読み込みを前提としているため、
[UnicodeDecodeErrorで csv ファイルが読み込みエラーになる](https://www.so-wi.com/portfolio/csv-read-error){:target="_blank"}でもご紹介している方法でCSV形式のファイルを読み込みます。
1. `mode ="r"` 読み込みモードを指定します。
2. `encoding ="utf-8"` インターネットからダウンロードした場合は、`utf-8` を指定します。Windows PC（Excel）で操作したデータを使う場合は、`shift-jis`を指定します。
3. `errors="ignore"`を指定してデコードできない文字が含まれていた場合に無視(ignore)するを指定します。
4. CSVファイルをデータフレームとして読み込むにあたり`delimiter =","` CSVファイルなのでカンマを区切り文字にします。　
5. `header=0`最初の行をヘッダーとして扱います。

### sqlite DB を定義する

SQliteDBを作成します。DB名は`HR_Employee_Attrition.db`としています。以下のCode でDBを作成します。
ここでは、コメントにもあるとおりHR_Employee_Attrition.db`という名前のDBがなければ作成しますが、すでに存在する場合はそれに接続して使えるようにします。

{% highlight python linenos %}

#モジュールをインポートします
import sqlite3

#HR_Employee_Attrition.db という名前のDBをなければ作成して接続する
dbname = 'HR_Employee_Attrition.db'

conn = sqlite3.connect(dbname)
cur = conn.cursor()

{% endhighlight %}


### SQlite DBにテーブルを定義し、データフレームをテーブルの中身とする 

DB名はHR_Employee_Attrition.dbでその情報はconnectionオブジェクト conn から引き継がれます。
DB内のテーブル名は`HR_Employee_Attrition_tab`としています。

{% highlight python linenos %}
# tableのnameを"HR_Employee_Attrition_tab"とし、読み込んだcsvファイルをsqlに書き込む
# index=False としてindex は書き込まないようにする
df.to_sql('HR_Employee_Attrition_tab', conn, if_exists='replace', index=False)
{% endhighlight %}

1. `if_exists='replace`でテーブルが既に存在していた場合、上書きします。
2. データフレームが持つIndexはテーブルには書き込ませません。SQLite DB は独自にIndexを持ちますので、不要です。

### 関数を適用する

関数を適用した結果は、列名「結果」という新しい列に内容を追加します。

{% highlight python linenos %}

`df['結果'] = df.apply(func_row_check, axis=1)`

{% endhighlight %}


### データフレームで内容を確認します。
 
![fnction]({{ "assets/img/2020_08_15/fig6.png" | relative_url}})<br>


---

### サンプルコード

サンプルコードでは、データフレームの作成から、関数の定義と適用、結果の確認までを紹介していますので、お手元の
Python 環境(Jupyrt Notebook 等)でお確かめくださいませ。


{% highlight python linenos %}

# 必要なモジュールをインポートします
import numpy as np
import pandas as pd
# 演習用のデータフレームを作成します。
df = pd.DataFrame({ '社員番号': ['01285679', '01340788', '02123782', '03541976', '04297411', '13299899', '30144450', '47339981'],
                   '記録 列A':   [4,3,2,1,4,2,3,8],
                   '報告 列B': [4,3,2,2,4,0,3,8]},
                    index=[0, 1, 2, 3, 4, 5, 6,7])
# オリジナルのデータフレームを表示
display(df)
# 関数を定義
def func_row_check(row):
    """
    列間を比較する

    引数:
        row['col1']: 比較したい列名 col1
        row['col2']: 比較したいもう一つの列名 col2

    Returns:
        1 : 一致
        9 : 不一致
    """
    if row['記録 列A'] == row['報告 列B']:
        return 1
    else:
        return 9
# 関数を適用
df['結果'] = df.apply(func_row_check, axis=1)
# 結果のデータフレームを表示
display(df)

{% endhighlight %}


>
`[ここがポイント！]`{:style="color: blue; font-size: 1.3em; background-color: #ffe3e2"} 
`df['結果'] = df.apply(func_row_check, axis=1)` で`axis=1`{:style="background: #ffebf6"}の指定をしないと
デフォルトでは、`axis=0`のため`KeyErro`で例外となってしまい関数が上手く働きません。
{:style="background-color: #ffe3e2; border-left: #ffe3e2; font-size: 1.0em"}

---


### 参照ページ一覧
このブログを作成するにあたり、以下のページを参考にしています。併せてご覧ください。
>
1) [先頭のゼロが抜け落ちた番号をzfillを使って修復する](https://www.so-wi.com/2021/02/27/filling_zeros_right.html){:target="_blank"}<br>
2) [任意の列の計算結果を新しい列に格納 lambda](https://www.so-wi.com/portfolio/lambda-if-new){:target="_blank"}<br>
3) [df.value_counts() の結果をパワポ用にビジュアル化する](https://www.so-wi.com/2022/03/11/df_value_counts_visualization.html){:target="_blank"}<br>
{:style="border-color: #5f564d; border-top-color: #5f564d; font-size: 1.0em; background-color: #f5f5dc;"}