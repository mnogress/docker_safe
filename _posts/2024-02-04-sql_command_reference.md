---
layout: single
title: SQL Command Reference
toc: true
toc_label: "目次"
toc_icon: "heart" 
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
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


### html table

{% highlight html linenos  %}

<style>
@media screen and (max-width:1280px){
	.p_table {width:100%;overflow:scroll;}
	.p_table table {width:1153px;}
}
@media screen and (max-width:750px){
  .resp_table {width:100% !important;}
  .resp_table th ,.resp_table td{padding:10px !important;}
}
</style>


<table class="resp_table">
    <caption>表示例</caption>
    <thead>
      <tr>
        <th width="120">th_1</th>
        <th width="120">th_2</th>
        <th width="600">th_3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>td_1_1</td>
        <td>td_1_2</td>
        <td>td_1_3</td>
      </tr>
      <tr>
        <td>td_2_1</td>
        <td>td_2_2</td>
        <td>td_2_3</td>
      </tr>
      <tr>
        <td colspan="3">td_3</td>
      </tr>
      <tr>
        <td rowspan="2">td_4_1</td>
        <td>td_4_2</td>
        <td>td_4_3</td>
      </tr>
      <tr>
        <td>td_5_2</td>
        <td>td_5_3</td>
      </tr>
    </tbody>
  </table>

{% endhighlight %}





<style>
@media screen and (max-width:1280px){
	.p_table {width:100%;overflow:scroll;}
	.p_table table {width:1153px;}
}
@media screen and (max-width:750px){
  .resp_table {width:100% !important;}
  .resp_table th ,.resp_table td{padding:10px !important;}
}
</style>


<table class="resp_table">
    <caption>表示例</caption>
    <thead>
      <tr>
        <th width="120">th_1</th>
        <th width="120">th_2</th>
        <th width="600">th_3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>td_1_1</td>
        <td>td_1_2</td>
        <td>td_1_3</td>
      </tr>
      <tr>
        <td>td_2_1</td>
        <td>td_2_2</td>
        <td>td_2_3</td>
      </tr>
      <tr>
        <td colspan="3">td_3</td>
      </tr>
      <tr>
        <td rowspan="2">td_4_1</td>
        <td>td_4_2</td>
        <td>td_4_3</td>
      </tr>
      <tr>
        <td>td_5_2</td>
        <td>td_5_3</td>
      </tr>
    </tbody>
  </table>

