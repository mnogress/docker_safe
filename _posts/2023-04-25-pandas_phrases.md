---
layout: splash
title: Pandas, Python 慣用句
classes:
  - landing
  - dark-theme
---

##### データフレームの各列の列名、ユニーク数、型、NaNの数の一覧表を作成する
{% highlight python linenos %}


df_overview = pd.DataFrame([[i, len(df[i].unique()), df[i].dtypes, df[i].isnull().sum()] for i in df.columns], columns=['Feature', 'Unique Values', 'dtypes', 'NaN'])

df_overview

{% endhighlight %}


##### 21人以上にフィルタリングする
{% highlight python linenos %}

   print(df.shape)
   df = df[df['労働者総数'] >= 21]
   print(df.shape)

{% endhighlight %}


##### NaNの行を取る
{% highlight python linenos %}

   print(df.shape)
   df = df[df['会社数'].isnull() == False]
   print(df.shape)

{% endhighlight %}

##### データフレームをCSVファイルで書き出す。インデックス値は不要
{% highlight python %}

   df.to_csv('61_法人番号_dup.csv', encoding='utf-8',  index=False)

{% endhighlight %}

##### 適用事業所番号の列の桁数をチェックする。　最初がゼロの場合、Excel 通してゼロになっている場合があるため 桁数が 10桁のところがあるので、全てを11桁に統一させる 先頭の2桁を抜き出す
{% highlight python linenos %}

   df['適用事業所番号']=df['適用事業所番号'].astype(str)
   df['length']=list(map(len,df['適用事業所番号']))
   df['length'].value_counts()
 
   s = df['適用事業所番号']
   df['適用事業所番号']=pd.DataFrame(s.str.zfill(11))

{% endhighlight %}

 
##### 先頭の2桁を抜き出す　この場合、string なので、それをnumeric に変換する  抜き出した都道府県番号が47個あるか確認する
{% highlight python linenos %}

  df['都道府県番号'] = df['適用事業所番号'].str[:2]
  df['都道府県番号'] = pd.to_numeric(df['都道府県番号'],errors = 'coerce' )

{% endhighlight %}

##### s.str[2:6]で6桁の申請日のうち、3,4,5,6 を取り出す。　これが mmdd である
{% highlight python %}

  df['日月'] = df['申請日'].str[2:6]

{% endhighlight %}

##### 列名 length は不要なので、その列を drop する
{% highlight python %}

 df = df.drop(columns=['length'])

{% endhighlight %}

##### 列名「法人番号」を「会社数」に変更する
{% highlight python %}

 df.rename(columns={'法人番号': '会社数'}, inplace = True)

{% endhighlight %}

 
##### 列名を指定してデータフレームを再編成する
{% highlight python %}

  df = df.loc[:, ['法人番号', '適用事業所番号','法人名', '住所', '労働者総数レンジ', '都道府県名', '産業大分類名']]

{% endhighlight %}

##### 列名「法人名かな」に含まれる全角をなくす 
{% highlight python %}

  df['法人名かな']=df['法人名かな'].str.replace("　", "")

{% endhighlight %}

##### オリジナル６１データに含まれていた列 Unnamed 130 から　139 までを削除する
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

##### データフレームの列名を縦にリストする
{% highlight python linenos %}

pd.options.display.max_rows = 220
columns = df.columns
columns = pd.DataFrame(columns)
columns.head(220)

{% endhighlight %}

##### 抜き出した都道府県番号が47個あるか確認する

{% highlight python %}

df['都道府県番号'].nunique()

{% endhighlight %}

##### 法人番号の列内のNaNの総数を出す
{% highlight python %}

df['法人番号'].isnull().sum()

{% endhighlight %}

##### NaN を 9999 で埋める　fillna(9999) で行う
{% highlight python %}

df['法人番号']=df['法人番号'].fillna(9999)

{% endhighlight %}

##### 申請日の列の型をdatetime 型　dtype('<M8[ns]')にする
{% highlight python %}

df['申請日']=pd.to_datetime(df['申請日'])

{% endhighlight %}

##### 法人番号で重複排除する
{% highlight python linenos %}

print(df.shape)
df.drop_duplicates(subset='法人番号', keep='first', inplace=True)
print(df.shape)

{% endhighlight %}

##### 法人名の処理する前にオリジナルのデータを取っておく

{% highlight python %}

df['法人名オリジナル']=df['法人名'].copy()

{% endhighlight %}

##### 法人名についている空白を埋める

{% highlight python %}

df['法人名']=df['法人名'].str.replace("　", "")

{% endhighlight %}

##### SQL DB名：r3_61_227052by137_emp_num_r4.db  <br> SQL Table名： r3_61_227052by137_tab を作成する

{% highlight python linenos %}

dbname = 'r3_61_227052by137_emp_num_r4.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()
df.to_sql('r3_61_227052by137_tab', conn, if_exists='replace')

{% endhighlight %}

##### SQL ヒアドキュメントサンプル

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

##### SQL ヒアドキュメントメインQuery

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




##### display df のフォーマットを指定する

{% highlight python linenos %}

format_dict = { 'str%': '{:.1%}',
               '法人番号': '{:.0f}', 
               '定年到達者総数-65歳未満': '{:.0f}',
               '定年退職者数（継続雇用希望なし）-65歳未満': '{:.0f}',
               '継続雇用者数-65歳未満': '{:.0f}'
              }
df.style.format(format_dict)

{% endhighlight %}



##### SQL query サンプル

{% highlight sql linenos %}

dbname = dbname
conn = sqlite3.connect(dbname)
cur = conn.cursor()
df = pd.read_sql(query, conn)
cur.close()
conn.close()

{% endhighlight %}


##### Read EXCEL file ファイル名とシート名とIndexとするカラムを指定する。

{% highlight python linenos %}

xlsx = pd.ExcelFile('基準データ2023.xlsx')
df = pd.read_excel(xlsx, 'data_2023', index_col='idx', header=0)

{% endhighlight %}

##### 読み込んだdfからヒートマップを作成

{% highlight python linenos %}

plt.rcParams['figure.figsize'] = 12, 12
sns.heatmap(df, annot=True, cmap='BuGn')
plt.savefig('employment1.png')

{% endhighlight %}

##### インデックスJoin

{% highlight python %}

df12 = df1.join(df2, rsuffix='_2')

{% endhighlight %}

##### カラム"mean" の値の大きい順 ascending = False でソートする

{% highlight python %}

df = df.sort_values(["mean"], ascending = False)

{% endhighlight %}


##### カラム名　産業大分類名で構成比を成型して表示する

{% highlight python %}

col_name = '産業大分類名'
tab = df[col_name].value_counts()
tab = pd.DataFrame(tab)
tab = tab.rename_axis(col_name)
tab['構成比']=(tab[col_name] / tab[col_name].sum())
tab.rename(columns={col_name: '会社数'}, inplace = True)
format_dict = {'構成比': '{:.1%}'}
display(tab.style.format(format_dict))

{% endhighlight %}

##### CSV file read

{% highlight python %}

import codecs
with codecs.open("WA_Fn-UseC_-HR-Employee-Attrition.csv", mode ="r", encoding ="utf-8", errors="ignore") as file:
    df = pd.read_csv(file, delimiter =",", header=0)

{% endhighlight %}

