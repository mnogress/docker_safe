---
layout: splash
title: Docker and Git command memo
classes:
  - landing
  - dark-theme
---
GitとDocker いつも分からなくなるので、ここでまとめておきます。　定期的にUpdateしたいですね。

----


#### PC間でrepository を共有するため、git clone する。

home directory で`git clone git@github.com:mnogress/sdocker_mysimple.git`{:style="background: #ff0044; color: white; font-size: 100%"} する。
すると、フォルダごとダウンロードされるので、その配下にdirectory を作成して
`git@githun.com:`{:style="background: #ffebf6"} 以下をGit Hub ページからClone したいRepository　に入って操作する

{% highlight vb linenos %}

user@DESKTOP-L7J0P2V MINGW64 ~
$ git clone git@github.com:mnogress/sdocker_mysimple.git

>Cloning into 'sdocker_mysimple'...
>remote: Enumerating objects: 248, done.
>remote: Counting objects: 100% (248/248), done.
>remote: Compressing objects: 100% (172/172), done.
>remote: Total 248 (delta 111), reused 186 (delta 49), pack-reused 0
>Receiving objects: 100% (248/248), 12.27 MiB | 7.77 MiB/s, done.
>Resolving deltas: 100% (111/111), done.

{% endhighlight %}


#### PC間でrepository を共有するため、git clone する。

#### SSH Key が無い場合、それをGit Hubに登録する。

{% highlight console linenos %}

user@DESKTOP-L7J0P2V MINGW64 ~
$ ls -al ~/.ssh
ls: cannot access '/c/Users/user/.ssh': No such file or directory

user@DESKTOP-L7J0P2V MINGW64 ~
$ cd docker_jekyll

user@DESKTOP-L7J0P2V MINGW64 ~/docker_jekyll (master)
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/user/.ssh/id_rsa):
Created directory '/c/Users/user/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/user/.ssh/id_rsa
Your public key has been saved in /c/Users/user/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:vk67Bt2D+DcFB9/Tubuyeo3g6pLceM1xE5kgRo8JsdE your_email@example.com
The keys randomart image is:
+---[RSA 4096]----+
|       ++.       |
|        +E=.     |
|       ..o.+..o..|
|          . o+o..|
|       oSo o  ...|
|      o.o oo.o . |
|      .o* +o+ + .|
|       *o=o+ + o |
|       oO=.oo.o..|
+----[SHA256]-----+

user@DESKTOP-L7J0P2V MINGW64 ~/docker_jekyll (master)
$ ssh-add ~/.ssh/id_rsa
Could not open a connection to your authentication agent.

user@DESKTOP-L7J0P2V MINGW64 ~/docker_jekyll (master)
$ eval "$(ssh-agent -s)"
Agent pid 1992

user@DESKTOP-L7J0P2V MINGW64 ~/docker_jekyll (master)
$ ssh-add ~/.ssh/id_rsa
Identity added: /c/Users/user/.ssh/id_rsa (your_email@example.com)

user@DESKTOP-L7J0P2V MINGW64 ~/docker_jekyll (master)
$ clip < ~/.ssh/id_rsa.pub

{% endhighlight %}


#### Docker が立ち上がらない時の解決方法

`wsl --status`{:style="background: #ff0044; color: white"} で状況を確認する。　以下の結果であれば大丈夫なはず。

{% highlight console linenos %}

C:\Users\usr>wsl --status
既定のディストリビューション: Ubuntu
既定のバージョン: 2

C:\Users\usr>
{% endhighlight %}

Start > Windows システムツール　> コントロールパネルでコントロールパネルを呼び出す

![win_control_panel]({{ "assets/img/2020_08_15/wsl_status.png" | relative_url}})<br>



>
`[ここがポイント！]`{:style="color: blue; font-size: 1.3em; background-color: #ffe3e2"} 
sqlite3 モジュールで作成したDBは、DB Browser for SQLiteから操作可能です。SQL文の練習には、Python 上のsqlite3を使うだけでなく、DB Browser for SQLiteを使ってみるのも、環境のセットアップ等を考えると効率的に行えます。sqlite3と一緒にDB Browser for SQLiteをPCにインストールして一緒に遊んでみるのも、いいかもしれません　　`axis=1`{:style="background: #ff0044; color: white"}
テスト
{:style="background-color: #ffe3e2; border-left: #ffe3e2; font-size: 1.0em"}
