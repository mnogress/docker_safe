---
layout: splash
title: Pandas Python 慣用句
toc: true
toc_label: "Unique Title"
toc_icon: "heart" 
classes:
  - landing
  - dark-theme
---


**目次**<br>
1. [文字の強調](#文字の強調){:style="font-size: 75%"}
2. [21人以上にフィルタリングする](#21人以上にフィルタリングする){:style="font-size: 75%"}<br>
3. [データフレームをCSVファイルで書き出す](#データフレームをcsvファイルで書き出す){:style="font-size: 75%"}<br>

| Python                                                                                        | CSS 他                                                                                             |
| :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| [21人以上にフィルタリングする](#21人以上にフィルタリングする)                                 | [文字の強調](#文字の強調)                                                                          |
| [データフレームをCSVファイルで書き出す](#データフレームをcsvファイルで書き出す)               | [Point枠の応用](#point-枠の応用)                                                                   |
| [nanの行を取る](#nanの行を取る)                                                               | [before擬似要素の使い方h1 が”◆”から開始される](#style--before擬似要素の使い方-h1-がから開始される) |
| [#２つのデータフレームをindexをkeyにmergeする](#２つのデータフレームをindexをkeyにmerge-する) | [画像の拡大](#画像の拡大)                                                                          |


---

### Point で強調したBox

{% highlight python linenos %}

<div class="box28">
    <span class="box-title">ここにタイトル</span>
    <p>ここに文章</p>
</div>

<style>
.box28 {
    position: relative;
    margin: 2em 0;
    padding: 25px 10px 7px;
    border: solid 3px #DF8914;
}
.box28 .box-title {
    position: absolute;
    display: inline-block;
    top: -2px;
    left: -2px;
    padding: 0 9px;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    background: #DF8914;
    color: #ffffff;
    font-weight: bold;
}
.box28 p {
    margin: 0; 
    padding: 1em;
}
</style>
{% endhighlight %}



<div class="box28">
    <span class="box-title">ここにタイトル</span>
    <p>ここに文章</p>
</div>

<style>
.box28 {
    position: relative;
    margin: 2em 0;
    padding: 25px 10px 7px;
    border: solid 3px #DF8914;
}
.box28 .box-title {
    position: absolute;
    display: inline-block;
    top: -2px;
    left: -2px;
    padding: 0 9px;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    background: #DF8914;
    color: #ffffff;
    font-weight: bold;
}
.box28 p {
    margin: 0; 
    padding: 1em;
}
</style>


### Table

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

### 枠で囲む

{% highlight python linenos %}
　<div style="font-size: 130%; padding: 20px; margin-bottom: 10px; border: 3px solid #DF1452; border-radius: 8px;">
   ここにテキストはいる
　</div>

{% endhighlight %}

<div style="font-size: 130%; padding: 20px; margin-bottom: 10px; border: 3px solid #DF1452; border-radius: 8px;">
   ここにテキストはいる　font-size: 130%; border: 3px solid #DF1452; border-radius: 8px;
</div>
<div style="font-size: 80%; padding: 20px; margin-bottom: 10px; border: 3px solid #092CDB; border-radius: 12px;">
   ここにテキストはいる　font-size: 80%; border: 3px solid #092CDB; border-radius: 12px;
</div>
<div style="padding: 20px; margin-bottom: 10px; border: 7px dashed #DF8914; border-radius: 5px;">
   ここにテキストはいる　 border: 7px dashed #DF8914; border-radius: 5px;
</div>
<div style="padding: 20px; margin-bottom: 10px; border: 3px double #14DF20; border-radius: 5px; border-width: thick;">
   ここにテキストはいる　 border: 3px double #14DF20; border-radius: 5px; border-width: thick;
</div>


### 文字の強調

{% highlight python linenos %}
　`ascending = False`{:style="background: #ff0044; color: white; font-size: 150%"}
{% endhighlight %}

150% で白抜き文字、赤背景

　`ascending = False`{:style="background: #ff0044; color: white; font-size: 150%"}

#f5e964 : 黄色
#ff0044 : コバルトブルー

{% highlight python linenos %}
`git@github.com:`{:style="background: #f5e964; font-size: 120%"} 
`git@github.com:`{:style="background: #64f5eb; font-size: 120%"} 
{% endhighlight %}

  `git@github.com:`{:style="background: #f5e964; font-size: 120%"} <br>
  `git@github.com:`{:style="background: #64f5eb; font-size: 120%"} 


### Style  before擬似要素の使い方 h1 が"◆"から開始される。

{% highlight html linenos %}

<style>
h1:before {
content: "◆";
color: #326693;
}
/*p:before {
content: "★";
color: #b20000;
}*/
</style>

<h1>before擬似要素の使い方</h1>
<p>特定のセレクタにbefore擬似要素を追加します。</p>
<p></p>

{% endhighlight %}




<style>
h1:before {
content: "◆";
color: #326693;
}
/*p:before {
content: "★";
color: #b20000;
}*/
</style>

<h1>before擬似要素の使い方</h1>
<p>特定のセレクタにbefore擬似要素を追加します。</p>
<p></p>



### Git Remote の変更

{% highlight python linenos %}

tkjyoke@KENKYU01 MINGW64 ~/docker_jekyll (main)
$ git remote -v
origin  https://github.com/mnogress/sdocker_mysimple.git (fetch)
origin  https://github.com/mnogress/sdocker_mysimple.git (push)

tkjyoke@KENKYU01 MINGW64 ~/docker_jekyll (main)
$ git push origin main
remote: Repository not found.
fatal: repository 'https://github.com/mnogress/sdocker_mysimple.git/' not found


tkjyoke@KENKYU01 MINGW64 ~/docker_jekyll (main)
$ git remote set-url origin git@github.com:mnogress/docker_jekyll.git

tkjyoke@KENKYU01 MINGW64 ~/docker_jekyll (main)
$ git push origin main
Enumerating objects: 345, done.
Counting objects: 100% (345/345), done.
Delta compression using up to 8 threads
Compressing objects: 100% (315/315), done.
Writing objects: 100% (345/345), 12.41 MiB | 277.00 KiB/s, done.
Total 345 (delta 167), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (167/167), done.
To github.com:mnogress/docker_jekyll.git
 * [new branch]      main -> main

{% endhighlight %}





### データフレームの各列の列名、ユニーク数、型、NaNの数の一覧表を作成する
{% highlight python linenos %}


df_overview = pd.DataFrame([[i, len(df[i].unique()), df[i].dtypes, df[i].isnull().sum()] 
    for i in df.columns], columns=['Feature', 'Unique Values', 'dtypes', 'NaN'])

df_overview

{% endhighlight %}

### float64 で読んでしまった INT 列を　INTに戻す
{% highlight python linenos %}

for p in df.columns:
    if p == '最新更新日' or p == '最新確認日' or df[p].dtypes == 'object' or  df[p].dtypes == 'int64' or df[p].dtypes == 'datetime64[ns]':
        continue
    df[p] = df[p].fillna(0).astype(np.int64)

{% endhighlight %}



### 一件、一行で日付けのあるデータ、申し込み等々を月次で集計する
{% highlight python linenos %}
df['count']=1　　
df = df.set_index('申請日')
df = df.loc[:, ['count']]
df = df.resample('1M').sum()
{% endhighlight %}

All 1 の列'count'を作成して、日付けをSet Index してサンプリングする<br>
`df = df.resample('1M').sum()`{:style="background: #ff0044; color: white; font-size: 110%"} が`肝`で結果が以下のとおり

![countplot]({{ "assets/img/2020_08_15/2024-02-01 152844.png" | relative_url}}){:height="250px" width="180px"}<br>



### 21人以上にフィルタリングする
{% highlight python linenos %}

   print(df.shape)
   df = df[df['労働者総数'] >= 21]
   print(df.shape)

{% endhighlight %}

### 関数で yyyymmdd を　yyyy-mm-dd の文字列に変える
{% highlight python linenos %}

def yyyymmdd(orgstr):
    return orgstr[:4] + '-' + orgstr[4:6] + '-' + orgstr[6:]

df['yyyy-mm-dd'] = df['yyyymmdd'].apply(yyyymmdd)

#ついでにdatetime 型式に変更する
df['申請日']=pd.to_datetime(df['yyyy-mm-dd'])

{% endhighlight %}

![countplot]({{ "assets/img/2020_08_15/2024-02-01 151621.png" | relative_url}}){:height="350px" width="250px"}<br>


### NaNの行を取る
{% highlight python linenos %}

   print(df.shape)
   df = df[df['会社数'].isnull() == False]
   print(df.shape)

{% endhighlight %}

### データフレームをCSVファイルで書き出す

インデックス値は不要
{% highlight python %}

   df.to_csv('dup.csv', encoding='utf-8',  index=False)

{% endhighlight %}



### ラベルインデックス列に名前をつける
{% highlight python linenos %}

　df = df.rename_axis('申請月')
　df

{% endhighlight %}

<br>

![countplot]({{ "assets/img/2020_08_15/2024-02-01 150553.png" | relative_url}}){:height="450px" width="300px"}<br>



 
### 先頭の2桁を抜き出す　

string なので、それをnumeric に変換する  抜き出した都道府県番号が47個あるか確認する。

{% highlight python linenos %}

  df['都道府県番号'] = df['適用事業所番号'].str[:2]
  df['都道府県番号'] = pd.to_numeric(df['都道府県番号'],errors = 'coerce' )

{% endhighlight %}

### s.str[2:6]で6桁の申請日のうち、3,4,5,6 を取り出す。　これが mmdd である
{% highlight python %}

  df['日月'] = df['申請日'].str[2:6]

{% endhighlight %}

### 列名 length は不要なので、その列を drop する
{% highlight python %}

 df = df.drop(columns=['length'])

{% endhighlight %}

### 列名「法人番号」を「会社数」に変更する
{% highlight python %}

 df.rename(columns={'法人番号': '会社数'}, inplace = True)

{% endhighlight %}

 
### 列名を指定してデータフレームを再編成する
{% highlight python %}

  df = df.loc[:, ['番号', '事業所','法人名', '住所', '総数レンジ', '都道府県名', '産業大分類名']]

{% endhighlight %}

### 列名「法人名かな」に含まれる全角をなくす 
{% highlight python %}

  df['法人名かな']=df['法人名かな'].str.replace("　", "")

{% endhighlight %}

### オリジナルデータに含まれていた列 Unnamed 130 から　139 までを削除する
{% highlight python linenos %}

df=df.drop(columns=[
    'Unnamed: 130',
    'Unnamed: 131'
                   ])

{% endhighlight %}

### データフレームの列名を縦にリストする
{% highlight python linenos %}

pd.options.display.max_rows = 220
columns = df.columns
columns = pd.DataFrame(columns)
columns.head(220)

{% endhighlight %}

### 抜き出した都道府県番号が47個あるか確認する

{% highlight python %}

df['都道府県番号'].nunique()

{% endhighlight %}

### 法人番号の列内のNaNの総数を出す
{% highlight python %}

df['法人番号'].isnull().sum()

{% endhighlight %}

### NaN を 9999 で埋める　fillna(9999) で行う
{% highlight python %}

df['法人番号']=df['法人番号'].fillna(9999)

{% endhighlight %}

### 申請日の列の型をdatetime 型　dtype('<M8[ns]')にする
{% highlight python %}

df['申請日']=pd.to_datetime(df['申請日'])

{% endhighlight %}

### 法人番号で重複排除する
{% highlight python linenos %}

print(df.shape)
df.drop_duplicates(subset='法人番号', keep='first', inplace=True)
print(df.shape)

{% endhighlight %}

### 法人名の処理する前にオリジナルのデータを取っておく

{% highlight python %}

df['法人名オリジナル']=df['法人名'].copy()

{% endhighlight %}

### 法人名についている空白を埋める

{% highlight python %}

df['法人名']=df['法人名'].str.replace("　", "")

{% endhighlight %}

### SQL DB名：137.db  <br> SQL Table名： 137_tab を作成する

{% highlight python linenos %}

dbname = '137.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()
df.to_sql('137_tab', conn, if_exists='replace')

{% endhighlight %}



### display df のフォーマットを指定する

{% highlight python linenos %}

format_dict = { 'str%': '{:.1%}',
               '番号': '{:.0f}', 
               '総数-65未満': '{:.0f}',
               '退職者数65歳未満': '{:.0f}',
               '雇用者数65歳未満': '{:.0f}'
              }
df.style.format(format_dict)

{% endhighlight %}



### SQL query サンプル

{% highlight sql linenos %}

dbname = dbname
conn = sqlite3.connect(dbname)
cur = conn.cursor()
df = pd.read_sql(query, conn)
cur.close()
conn.close()

{% endhighlight %}


### Read EXCEL file ファイル名とシート名とIndexとするカラムを指定する。 EXCELにインデクスがない場合は　`index_col=None` を指定する

{% highlight python linenos %}

xlsx = pd.ExcelFile('基準データ2023.xlsx')
df = pd.read_excel(xlsx, 'data_2023', index_col='idx', header=0)

{% endhighlight %}

### 読み込んだdfからヒートマップを作成

{% highlight python linenos %}

plt.rcParams['figure.figsize'] = 12, 12
sns.heatmap(df, annot=True, cmap='BuGn')
plt.savefig('employment1.png')

{% endhighlight %}

### インデックスJoin

{% highlight python %}

df12 = df1.join(df2, rsuffix='_2')

{% endhighlight %}

### カラム"mean" の値の大きい順 ascending = False でソートする

値の大きい順、日付けの新しい順　`ascending = False`{:style="background: #ff0044; color: white; font-size: 180%"}


{% highlight python %}

df = df.sort_values(["mean"], ascending = False)

{% endhighlight %}


### カラム名　産業大分類名で構成比を成型して表示する

{% highlight python linenos %}

col_name = '産業大分類名'
tab = df[col_name].value_counts()
tab = pd.DataFrame(tab)
tab = tab.rename_axis(col_name)
tab['構成比']=(tab[col_name] / tab[col_name].sum())
tab.rename(columns={col_name: '会社数'}, inplace = True)
format_dict = {'構成比': '{:.1%}'}
display(tab.style.format(format_dict))

{% endhighlight %}

### CSV file read

{% highlight python linenos %}

import codecs
with codecs.open("WA_Fn-UseC_-HR-Employee-Attrition.csv", mode ="r", encoding ="utf-8", errors="ignore") as file:
    df = pd.read_csv(file, delimiter =",", header=0)

{% endhighlight %}

### Count Plot サンプル

{% highlight python linenos %}

import numpy as np
import pandas as pd
import seaborn as sns
# matplotlibのグラフをRetinaの高解像度で表示する
%config InlineBackend.figure_formats = {'png', 'retina'}
# Jupyter Notebookの中で作図した画像を表示させる
%matplotlib inline
# matplotlib をインポートする
import matplotlib.pyplot as plt
# 図のサイズを12inch x 12inch = 864px X 864px にする
plt.rcParams['figure.figsize'] = 12, 12
# 日本語タイトルのため、japanizeをインポートする
import japanize_matplotlib
plt.rcParams['font.family'] = 'IPAexGothic'
# 列を縦にする
# plt.xticks(rotation=90)
col_name = 'YearsAtCompany'
sns.countplot(x=col_name, data=df, palette='hls')
#seaborn countplotを設定し、変数axとしてAnnotationを上書できるようにする
ax = sns.countplot(x = col_name, 
                   data = df)
# Annotation を設定する
for p in ax.patches:
    ax.annotate(format(p.get_height(), '.0f'), 
                   (p.get_x() + p.get_width() / 2., 
                    p.get_height()), 
                    ha = 'center', 
                    va = 'center', 
                    xytext = (0, 9), 
                    textcoords = 'offset points',
                    fontsize = 8,
                    color = 'blue')

{% endhighlight %}

![countplot]({{ "assets/img/2020_08_15/countplot1.png" | relative_url}}){:height="500px" width="500px"}<br>


### Openpyxl でExcel file のシート名を確認する
{% highlight python linenos %}

# ライブラリを読み込む
import openpyxl as xl
import win32com.client
import os

filename = '61_matching_lisr_winner_1221_v2.xlsx'
wb = xl.load_workbook(filename)
wb.sheetnames
{% endhighlight %}


### データフレーム df, dt を横に結合させる
{% highlight python  %}
df = pd.concat([df, dt], axis = 1)
{% endhighlight %}


### 都道府県番号；都道府県名を一つの要素としてカラム名「都道府県」部分を、<br>「都道府県番号」と「都道府県名」に分割した新しいデータフレーム「dt」を作成する

{% highlight python linenos %}

df['new'] = df['都道府県'].str.split(':')
np_array = df['new'].values
np_list = np_array.tolist()
dt = pd.DataFrame(np_list)
cols = ['都道府県番号', '都道府県名']
dt.columns = cols
display(dt.head())

{% endhighlight %}

### カラム名「name」をインデクスに変える

{% highlight python %}
df = df.set_index('name')
{% endhighlight %}

### 元のインデクス値をインデクスに戻す（リセットする）
{% highlight python %}
df = df.reset_index()
{% endhighlight %}


### 列間を比較し、その結果を 1\9 で出す
{% highlight python linenos %}

# 必要なモジュールをインポートします
import numpy as np
import pandas as pd
# 演習用のデータフレームを作成します。
# ２番目の北海道と宮城県の顧客番号はint型でその他はstr型でデータフレームを作成
df = pd.DataFrame({ '社員番号': ['01285679', '01340788', '02123782', '03541976', '04297411', '13299899', '30144450', '47339981'],
                   '記録 列A':   [4,3,2,1,4,2,3,8],
                   '報告 列B': [4,3,2,2,4,0,3,8]},
                    index=[0, 1, 2, 3, 4, 5, 6,7])
# データフレームを表示します
display(df)

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

df['結果'] = df.apply(func_row_check, axis = 1)

display(df)

{% endhighlight %}

### カテゴリ毎に人数出して、整形する
{% highlight python linenos %}

cat = df[col4].value_counts()
cat = pd.DataFrame(cat)
cat = cat.rename_axis(col4)
cat.rename(columns={col4: '人数'}, inplace = True)

display(cat)

{% endhighlight %}


### カテゴリ集計を円グラフにする

{% highlight python linenos %}
tot = cat.sum()
print(tot)
sizes = cat['人数']
labels = cat.index.tolist()
fix1, ax1 = plt.subplots()
colors = sns.color_palette('pastel')[0:9]
ax1.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=0, colors=colors)

ax1.axis('equal')
ax1.set_title('申し込み者属性', pad=4, fontsize=12, color='black')
plt.show()

{% endhighlight %}



### SPSS データの読み取り　カテゴリカルデータでデータフレームを作成
SPSS データは、ラベル名付きとラベル名なし（数値）の二種類をシートを分割して表示している

{% highlight python %}

df = pd.read_spss('SPSSデータ20230405.sav', usecols=None, convert_categoricals=True)

{% endhighlight %}

### SQL here documens

{% highlight sql %}

query = """
    SELECT "法人名",
    FROM   r137_tab
    WHERE  "適号" 
    IN (    
        '09040018408',
        '48046133551',
        '53086280459'
        )
 """

#dbname = 'r137.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()

# dbをpandasで読み出す。
# WHERE で条件に合致した要素のみを読み込み、それをDataFrame に格納する
df1 = pd.read_sql(query, conn)

{% endhighlight %}

### docker グループにユーザ(user)を追加する

>$ docker ps<br>
Got permission denied while trying to connect to the Docker daemon 
socket at unix:///var/run/docker.sock: 
Get http://%2Fvar%2Frun%2Fdocker.sock/v1.39/containers/json: 
dial unix /var/run/docker.sock: connect: permission denied


{% highlight vb %}

user@KENKYU01:~$ sudo gpasswd -a user sudo

[sudo] password for user:
Adding user user to group sudo

{% endhighlight %}

### docker conainer  からminimal thema でPublish(bundle exec jekyll server -H 0.0.0.0)する

{% highlight vb %}

$ winpty docker run --rm -it --name docker_jekyll     -v /$PWD/_config.yml://work/_config.yml     -v /$PWD/index.html://work/index.html     -v /$PWD/_data/://work/_data/     -v /$PWD/_posts/://work/_posts/     -v /$PWD/_site/://work/_site/     -v /$PWD/images/://work/images/     -v /$PWD/assets/://work/assets/     -p 4000:4000     -w //work     docker_jekyll     bundle exec jekyll serve -H 0.0.0.0

{% endhighlight %}


### グループの追加ができたことを確認する。ログアウトすること。

{% highlight vb %}

user@KENKYU01:~$ id user
uid=1000(user) gid=1000(user) groups=1000(user),27(sudo),1001(docker)
user@KENKYU01:~$ exit
logout

{% endhighlight %}


#### ２つのデータフレームをIndexをKeyにmerge する。

Merge するキー列をIndexにするため、df.set_index('キー列名')をする

{% highlight python linenos %}

df = df.set_index("事業所番号")
da = df

df = df.set_index("事業所番号")
dfb = df


df = pd.merge(dfa, dfb, how = 'inner', on = '事業所番号')
OR
df = pd.merge(dfa, dfb, how = 'outer', on = '事業所番号')


{% endhighlight %}

#### 練習データフレーム

{% highlight python linenos %}
# 演習用のデータフレームを作成します。
df = pd.DataFrame({ '顧客番号': ['01285679', '01340788', '02123782', '10541976', '12297411', 
                             '13299899', '30144450', '47339981'],
                   '都道府県名': ["北海道","北海道",'青森県','群馬県','千葉県','東京都','和歌山県','沖縄県'],
                  'メールアドレス':   ["nabe@example.net","hiro@example.net","aatsu@example.net",
                               "hi106@example.org","im_to@example.co.jp","ka713@example.org",
                               "sato@example.com","oka_h@example.net"]},
                    index=[0, 1, 2, 3, 4, 5, 6,7])
# オリジナルのデータフレームを表示

{% endhighlight %}

### Point 枠の応用

{% highlight python html %}

<details>
    <summary>Point 枠の応用Coding結果</summary>
    <div class="box28">
    <span class="box-title">Point</span>
    <p style="font-size: 130%; color: blue;">df = df[df['メールアドレス'].str.contains('@example.org')]　<strong>含む</strong>で抽出<br>
    df = df[~df['メールアドレス'].str.contains('@example.org')]　<strong>含まない</strong>で抽出</p>
    </div>
</details>

<style>
.box28 {
    position: relative;
    margin: 2em 0;
    padding: 25px 10px 7px;
    border: solid 5px #FFC107;
}
.box28 .box-title {
    position: absolute;
    display: inline-block;
    top: -2px;
    left: -2px;
    padding: 0 9px;
    height: 25px;
    line-height: 25px;
    font-size: 17px;
    background: #FFC107;
    color: #ffffff;
    font-weight: bold;
}
.box28 p {
    margin: 0; 
    padding: 0;
}
</style>

{% endhighlight %}

<details>
    <summary>Point 枠の応用Coding結果</summary>
    <div class="box28">
    <span class="box-title">Point</span>
    <p style="font-size: 130%; color: blue;">df = df[df['メールアドレス'].str.contains('@example.org')]　<strong>含む</strong>で抽出<br>
    df = df[~df['メールアドレス'].str.contains('@example.org')]　<strong>含まない</strong>で抽出</p>
    </div>
</details>

<style>
.box28 {
    position: relative;
    margin: 2em 0;
    padding: 25px 10px 7px;
    border: solid 5px #FFC107;
}
.box28 .box-title {
    position: absolute;
    display: inline-block;
    top: -2px;
    left: -2px;
    padding: 0 9px;
    height: 25px;
    line-height: 25px;
    font-size: 17px;
    background: #FFC107;
    color: #ffffff;
    font-weight: bold;
}
.box28 p {
    margin: 0; 
    padding: 0;
}
</style>





## 画像の拡大

{% highlight python linenos %}

![countplot]({{ "assets/img/2020_08_15/fig_1107_01.png" | relative_url}}){:height="500px" width="500px"}<br>

{% endhighlight %}

結果
![countplot]({{ "assets/img/2020_08_15/fig_1107_01.png" | relative_url}}){:height="500px" width="500px"}<br>


{% highlight python linenos %}

![countplot]({{ "assets/img/2020_08_15/fig_1107_01.png" | relative_url}})<br>

{% endhighlight %}

結果：原寸大
![countplot]({{ "assets/img/2020_08_15/fig_1107_01.png" | relative_url}})<br>



{% highlight python linenos %}

<style type="text/css">

img.example1 { zoom: 1.5; }
img.example2 { zoom: 70%; }

</style>

<p><img src="fig_1107_01.png" alt="［写真］" class="example1"> 1.5倍に拡大</p>

<p><img src="rainbow.jpg" alt="［写真］" class="example2"> 70%に縮小</p>

{% endhighlight %}


#### エクセルファイル「youtube_forum_12_06_v1_forum_final222.xlsx」のSheet 名を確認する

> file名を変数filename で定義する

{% highlight python linenos %}

import openpyxl as xl
filename = 'youtube_forum_12_06_v1_forum_final222.xlsx'
wb = xl.load_workbook(filename)
wb.sheetnames

{% endhighlight %}

![countplot]({{ "assets/img/2020_08_15/wbsheets_01.png" | relative_url}}){:height="400px" width="400px"}<br>

#### エクセルファイル; 変数名filnenameのSheet 名; mail_list を読み込み、excel というDF名とする

`header=0`     最初の行をヘッダーとする
`header=None`  最初の行からデータとする（ヘッダーなし）


{% highlight python linenos %}

xlsx = pd.ExcelFile(filename)
excel = pd.read_excel(xlsx, 'mail_list', header=0)

{% endhighlight %}

### filename というexcel名変数のexcelファイルにexcelというデータフレームをsheet名`mail_list6`で追加する

{% highlight python linenos %}

with pd.ExcelWriter(filename,engine='openpyxl', mode='a') as writer:
    excel.to_excel(writer, sheet_name='mail_list6')

{% endhighlight %}

> 追加されたか確認する

![countplot]({{ "assets/img/2020_08_15/wbsheets_02.png" | relative_url}}){:height="550px" width="500px"}<br>

### `"output.csv"` というcsv ファイルの中身をクリアする

{% highlight python linenos %}

with open("output.csv", "w") as f:
    pass

{% endhighlight %}


### データフレーム内の特定の要素値があるか無いかを探す

{% highlight python linenos %}

dt[dt.isin(['探したい値：完全形で入れること'])]

{% endhighlight %}

![countplot]({{ "assets/img/2020_08_15/wbsheets_03.png" | relative_url}}){:height="550px" width="700px"}<br>

> `dt[dt[0].isin(['探したい値：完全形で入れること'])]` とすれば、カラム名0のみを探す



### Mail Address の`";"`で連結した塊の作成

> Outlook のメールアドレスは複数の場合は、`";"`　で連結する必要がある。
> Bcc で複数人に送る場合はまず`";"`　で連結された塊を作成する

`STEP 1`{:style="background: #ff0044; color: white; font-size: 130%"}  <strong>N列のデータフレームの作成</strong>
{% highlight python linenos %}

df = df_oct.loc[:, ['メールアドレス']]

# convert ndarry, then list
np_array = df['メールアドレス'].values
np_list = np_array.tolist()
# splited into 5
N = 5 
splited_df = [np_list[i:i+N] for i in range(0, len(df), N)]
# convert into a dataframe
dt = pd.DataFrame(splited_df)

{% endhighlight %}

<div style="font-size: 110%; padding: 20px; margin-bottom: 10px; border: 3px solid #DF1452; border-radius: 8px;">
   上記の例は、5分割。データフレーム内のカラム名は 0,1,2,3,4
</div>


`STEP 2`{:style="background: #ff0044; color: white; font-size: 130%"}  <strong>output.csvに塊を作成する</strong>

{% highlight python linenos %}
# initialize "output.csv"
with open("output.csv", "w") as f:
    pass

# define variable for 'output.csv'
out_csv = 'output.csv'

# connect with ";" from col 0 to 4 then print to file
for i in range(5):
    k = ";".join(dt[i])
    print(k, "," , file=codecs.open('out_csv', 'a', 'utf-8'))

# read csv as df
import codecs
with codecs.open("out_csv", mode ="r", encoding ="utf-8", errors="ignore") as file:
    df = pd.read_csv(file, delimiter =",", header=None)

# drop second column
df = df.drop(columns=[1])

{% endhighlight %}
