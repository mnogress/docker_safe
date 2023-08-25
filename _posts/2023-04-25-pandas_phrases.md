---
layout: splash
title: Pandas, Python 慣用句
toc: true
toc_label: "Unique Title"
toc_icon: "heart" 
classes:
  - landing
  - dark-theme
---

### データフレームの各列の列名、ユニーク数、型、NaNの数の一覧表を作成する
{% highlight python linenos %}


df_overview = pd.DataFrame([[i, len(df[i].unique()), df[i].dtypes, df[i].isnull().sum()] 
    for i in df.columns], columns=['Feature', 'Unique Values', 'dtypes', 'NaN'])

df_overview

{% endhighlight %}


### 21人以上にフィルタリングする
{% highlight python linenos %}

   print(df.shape)
   df = df[df['労働者総数'] >= 21]
   print(df.shape)

{% endhighlight %}


### NaNの行を取る
{% highlight python linenos %}

   print(df.shape)
   df = df[df['会社数'].isnull() == False]
   print(df.shape)

{% endhighlight %}

### データフレームをCSVファイルで書き出す。インデックス値は不要
{% highlight python %}

   df.to_csv('61_法人番号_dup.csv', encoding='utf-8',  index=False)

{% endhighlight %}

### 適用事業所番号の列の桁数をチェックする。　最初がゼロの場合、Excel 通してゼロになっている場合があるため 桁数が 10桁のところがあるので、全てを11桁に統一させる 先頭の2桁を抜き出す
{% highlight python linenos %}

   df['適用事業所番号']=df['適用事業所番号'].astype(str)
   df['length']=list(map(len,df['適用事業所番号']))
   df['length'].value_counts()
 
   s = df['適用事業所番号']
   df['適用事業所番号']=pd.DataFrame(s.str.zfill(11))

{% endhighlight %}

 
### 先頭の2桁を抜き出す　この場合、string なので、それをnumeric に変換する  抜き出した都道府県番号が47個あるか確認する
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

  df = df.loc[:, ['法人番号', '適用事業所番号','法人名', '住所', '労働者総数レンジ', '都道府県名', '産業大分類名']]

{% endhighlight %}

### 列名「法人名かな」に含まれる全角をなくす 
{% highlight python %}

  df['法人名かな']=df['法人名かな'].str.replace("　", "")

{% endhighlight %}

### オリジナル６１データに含まれていた列 Unnamed 130 から　139 までを削除する
{% highlight python linenos %}

df=df.drop(columns=[
    'Unnamed: 130',
    'Unnamed: 131',
    'Unnamed: 132',
    'Unnamed: 133',
    'Unnamed: 134',
    'Unnamed: 135',
    'Unnamed: 136',
    'Unnamed: 137',
    'Unnamed: 138',
    'Unnamed: 139'
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

### SQL DB名：r3_61_227052by137_emp_num_r4.db  <br> SQL Table名： r3_61_227052by137_tab を作成する

{% highlight python linenos %}

dbname = 'r3_61_227052by137_emp_num_r4.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()
df.to_sql('r3_61_227052by137_tab', conn, if_exists='replace')

{% endhighlight %}

### SQL ヒアドキュメントサンプル

{% highlight sql linenos %}

query = """
    SELECT 
            "法人名", 
            "都道府県名",
            "労働者総数",
            "産業大分類名",
            "法人番号"
    FROM    "r3_61_227052by137_tab"
    WHERE   "法人名" 
    IN      (    
            '北海道信用金庫',
            '株式会社エスピー工研'
            )
  """

{% endhighlight %}

### SQL ヒアドキュメントメインQuery

{% highlight sql linenos %}

query = """
    SELECT 
            "法人名", 
            "適用事業所番号",
            "法人番号", 
            "住所",
            "定年有無" ,
            "定年年齢", 
            "継続雇用-希望者最低年齢", 
            "労働者総数レンジ", 
            "産業大分類名", 
            "都道府県名"
    FROM    "r3_61_227052by137_tab"
    WHERE   "定年有無" == 2 OR
            "定年年齢" >= 70 OR
            "継続雇用-希望者最低年齢" >= 70 AND
            "産業中分類コード" <> 94 AND
            "産業中分類コード" <> 97 AND
            "産業中分類コード" <> 98  
  """
{% endhighlight %}




### display df のフォーマットを指定する

{% highlight python linenos %}

format_dict = { 'str%': '{:.1%}',
               '法人番号': '{:.0f}', 
               '定年到達者総数-65歳未満': '{:.0f}',
               '定年退職者数（継続雇用希望なし）-65歳未満': '{:.0f}',
               '継続雇用者数-65歳未満': '{:.0f}'
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

![countplot]({{ "assets/img/2020_08_15/countplot1.png" | relative_url}})<br>


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

![str_number]({{ "assets/img/2020_08_15/str_num1.png" | relative_url}})<br>

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
    SELECT "法人名", "適用事業所番号","定年年齢", "継続雇用制度","労働者総数","労働者総数レンジ", 
            "継続雇用-希望者最低年齢", "継続雇用-基準最高年齢", "60〜64歳", "65〜69歳", "70歳以上", 
            "都道府県名", "都道府県番号","産業大分類名","産業大分類コード","事業具体的内容"
    FROM   r4_61_235875by137_tab
    WHERE  "適用事業所番号" 
    IN (    
        '07040018408',
        '38046133551',
        '19041009509',
        '24031041347',
        '28050009587',
        '03010054500',
        '23090023395',
        '35030028271',
        '47020004572',
        '45032017649',
        '20040019386',
        '41061002192',
        '20040026435',
        '26071017321',
        '23066143807',
        '23044415753',
        '17010005343',
        '17020009844',
        '08011007115',
        '14015254513',
        '13086280459'
        )
 """

#dbname = 'r4_61_235875by137_0118r5.db'
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


### SQL 文　条件追加 and/or/not

{% highlight sql %}


format_dict = { 'str%': '{:.1%}',
               '法人番号': '{:.0f}' ,
               '定年到達者総数-65歳未満': '{:.0f}',
               '定年退職者数（継続雇用希望なし）-65歳未満': '{:.0f}',
               '継続雇用者数-65歳未満': '{:.0f}' }

query = """
    SELECT "法人名", "適用事業所番号","法人番号", "住所","定年有無" ,"定年年齢", "継続雇用-希望者最低年齢", "労働者総数レンジ", "労働者総数" ,"産業大分類名", "都道府県名"
    FROM "r3_61_227051by137_tab"
    WHERE "定年有無" == 2 OR
    "定年年齢" >= 70 OR
    "継続雇用-希望者最低年齢" >= 70 AND
    "産業中分類コード" <> 94 AND
    "産業中分類コード" <> 97 AND
    "産業中分類コード" <> 98
  """

dbname = dbname
conn = sqlite3.connect(dbname)
cur = conn.cursor()
# dbをpandasで読み出す。
df = pd.read_sql(query, conn)
cur.close()
conn.close()

{% endhighlight %}
