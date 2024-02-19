---
layout: splash
title: SQL Command Reference
toc: true
toc_label: "Unique Title"
toc_icon: "heart" 
classes:
  - landing
  - dark-theme
---


### Update DB

{% highlight sql linenos  %}

update db_table_name 
set `姓` = '山田', 
`名` = '花子', 
`メールアドレス` = 'example@example.com', 
`最新確認日` = datetime('now', 'localtime'),
`DB更新日` = CURRENT_DATE
where `level_0` = 199;

{% endhighlight %}

### Search by Name(partial)

{% highlight sql linenos  %}

SELECT 
        *
FROM    db_table_name
WHERE   "法人名" LIKE '%千葉%' 
ORDER BY `最新確認日` ASC


{% endhighlight %}

### Copy Table ALL

{% highlight sql linenos  %}

CREATE TABLE "db_table_name_new" 
AS SELECT * 
FROM "db_table_name_old" 

{% endhighlight %}


### Drop(Delete) Table ALL

{% highlight sql linenos  %}

DROP TABLE "db_table_name_dropped" ;

{% endhighlight %}