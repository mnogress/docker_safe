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
ここでは、コメントにもあるとおりHR_Employee_Attrition.db`という名前のDBがなければ作成し、接続して使えるようにします。
すでに存在する場合は接続して使えるようにします。

{% highlight python linenos %}

#モジュールをインポートします
import sqlite3

#HR_Employee_Attrition.db という名前のDBをなければ作成して接続する
dbname = 'HR_Employee_Attrition.db'

conn = sqlite3.connect(dbname)
cur = conn.cursor()

{% endhighlight %}


### SQlite DBにテーブルを定義し、データフレームの中身をテーブルに流し込む 

DB名はHR_Employee_Attrition.dbでその情報はconnectionオブジェクト `conn` で引き継がれます。
DB内のテーブル名は`HR_Employee_Attrition_tab`と定義します。

{% highlight python linenos %}
# tableのnameを"HR_Employee_Attrition_tab"とし、読み込んだcsvファイルをsqlに書き込む
# index=False としてindex は書き込まないようにする
df.to_sql('HR_Employee_Attrition_tab', conn, if_exists='replace', index=False)
{% endhighlight %}

1. `if_exists='replace`でテーブルが既に存在していた場合、上書きします。
2. データフレームが持つIndexはテーブルには書き込ませません。SQLite DB は独自にIndexを持ちますので、不要ですので、`index=False`を指定します。

ls コマンドでファイルを確認すると、217,088 バイトの大きさで`HR_Employee_Attrition.db`というDBが作成されています。

{% highlight python %}
 ドライブ D のボリューム ラベルは ボリューム です
 ボリューム シリアル番号は C64A-8xx です

 D:\jupyter\sqliteDB のディレクトリ

2023/03/0x  14:35    <DIR>          .
2023/03/0x  14:35    <DIR>          ..
2023/03/0x  14:35           217,088 HR_Employee_Attrition.db
               1 個のファイル             217,088 バイト
               2 個のディレクトリ  212,100,857,856 バイトの空き領域
{% endhighlight %}

### SQLite DB にアクセスしてSQL文を実行する

作成したSQlite DBにJupyter Notebook からアクセス（接続）し、SELECT文を使ってテーブルの中身を抽出します。
抽出したデータは、Pandas データフレームとして取り込みます。
以下のSELECT文では、テーブル全体すなわち、DBのデータ全部をデータフレームとして読み込むこととなります。

{% highlight python linenos %}

dbname = "HR_Employee_Attrition.db"
conn = sqlite3.connect(dbname)
cur = conn.cursor()

# dbをpandasで読み出す。
df = pd.read_sql('SELECT * FROM HR_Employee_Attrition_tab', conn)

cur.close()
conn.close()

{% endhighlight %}

Jupyter Notebook から内容を確認します。
 
![data_frame]({{ "assets/img/2020_08_15/fig31011.png" | relative_url}})<br>


---

### Here Document でSELECT文の見通しの良さをアップする

SELECT文等でクエリを組み込みますが、以下のとおり、「`"""`」で囲んでQuery を独立させ、見通しを良くさせます。 
このQueryでは、抽出するカラムを"Department", "Age", "Attrition", "BusinessTravel", "DailyRate"のみを抽出します。
また、条件として、"BusinessTravel"="Travel_Frequently"　かつ、"DailyRate" < 1350　かつ "Age" > 36に絞ります。

{% highlight python linenos %}

query = """
    SELECT 
          "Department", 
          "Age", 
          "Attrition", 
          "BusinessTravel", 
          "DailyRate"
    FROM  "HR_Employee_Attrition_tab" 
    WHERE "BusinessTravel"="Travel_Frequently" 
    AND   "DailyRate" < 1350
    AND   "Age" > 36
  """

{% endhighlight %}

このQuery を実行するコードは以下のとおりです。　すでに、DB名は`dbname = "HR_Employee_Attrition.db"`で定義していますので
その部分は省略していますので、注意してください。

{% highlight python linenos %}
conn = sqlite3.connect(dbname)
cur = conn.cursor()

# 変数Queryで定義したSQL 文を使ってpandas　Dataframeで読み出す。
df = pd.read_sql(query, conn)

{% endhighlight %}

内容を確認します。

![data_frame]({{ "assets/img/2020_08_15/fig31012.png" | relative_url}})<br>




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