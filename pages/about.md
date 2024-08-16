---
permalink: /about/
title: "About me"
layout: single
author_profile: false
---
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}

</style>
</head>
<body>

<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

<body>

<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

<div style="background-color:black;color:white;padding:1.3em">管理人の SouthWiseMan です。</div>
<div style="background-color:lightgrey;padding:1.3em 1.3em 15em">

<p>新卒で某外資系のITベンダーに入社し、その会社で60歳の定年を迎えました。法の定めにより、会社が用意した「継続雇用」は選ばず、数ヶ月の浪人を経験しましたが、現在の職場に再就職し、最初は3ヶ月で辞めるかと思いつつ、今年で7年目となり、IT歴46年になりました。</p>

<p>HTML/CSS、JavaScript、Photoshop、IllustratorからAWS・IBM Cloudまで、いわゆるWeb関連はなんでもこなします。また、現在の職場ではPython（機械学習）、SPSS、Excel（VBA）を日常的に使っています。</p>

<p>新しい職場ではホームページの刷新が最初の仕事となり、今までのWordPressで簡単にホームページを立ち上げていましたが、セキュリティに強い静的Webサイト構築技術を調べるうちにJekyllに出会いました。個人的なサイトもWordPressをやめて、JekyllでサイトをMinimal Mistakes のテーマで立ち上げるに至りました。</p>

<p>このサイトでは、私のこれまでのIT仕事歴で出会った数々の技術のうち、50代を過ぎてリスキリングで得たPythonによるデータ分析の実際を易しく解説したいと思います。どうぞよろしくお願いします。</P>  
  
<p><strong>Thank You for reading!</strong></p>
  
  </div>

<script>
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

</body>
