---
layout: single
title: Github command reference
header:
  overlay_image: images/header_L.png
  overlay_filter: rgba(107, 74, 43, 0.40)
toc: True
toc_label: "目次"
toc_icon: "heart" 
toc_sticky: True
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  #- wide
sidebar:
  nav: "docs"
category: Reference
tag: ["Github"]
date: 2024-06-11
last_modified_at : 2024-06-11 15:00:00
---

Git repository 作成方法のベーシックをまとめました。 <!--more-->

### error: remote origin already exists. の解決方法

{% highlight diff linenos  %}

user@user MINGW64 ~/docker_xxx (main)
$ git remote add origin git@github.com:hoge/docker_xxx.git
error: remote origin already exists.

user@user MINGW64 ~/docker_xxx (main)
$ git remote rm origin

user@user MINGW64 ~/docker_xxx (main)
$ git remote add origin git@github.com:hoge/docker_xxx.git

{% endhighlight %}


### git push origin main でリモートに追加

無事にGitHubへpushできました。

{% highlight diff linenos  %}

user@user MINGW64 ~/docker_xxx (main)
$ git push origin main
Enumerating objects: 592, done.
Counting objects: 100% (592/592), done.
Delta compression using up to 8 threads
Compressing objects: 100% (549/549), done.
Writing objects: 100% (592/592), 16.12 MiB | 674.00 KiB/s, done.
Total 592 (delta 313), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (313/313), done.
To github.com:hoge/docker_xxx.git
 * [new branch]      main -> main

user@user MINGW64 ~/docker_xxx (main)

{% endhighlight %}

### .git/config について


**解説**<br>
git remote add origin ~は.git/configファイルに[remote "origin"]を設定するコマンド
従って、これを一旦、削除すれば追加(add)できる。
{: .notice--danger}

### .git/config の中身を見る

{% highlight diff linenos  %}

user@user MINGW64 ~/docker_xxx (main)
$ cat .git/config
[core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
[remote "origin"]
        url = git@github.com:hoge/docker_xxx.git
        fetch = +refs/heads/*:refs/remotes/origin/*

{% endhighlight %}
