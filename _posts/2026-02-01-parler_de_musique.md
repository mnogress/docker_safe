---
layout: single
title: フランス語学習者のための_雑談　(音声ファイル付き)
header:
  overlay_image: images/header_fr24_1280by336.png
  overlay_filter: rgba(107, 74, 43, 0.33)
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
category: français
tag: ["French", "フランス語学習"]
date: 2026-01-31
last_modified_at : 2026-02-01 10:30:00
---

外国語を勉強していて、最もハードルが高いのはやはり**「しゃべる（会話する）」**ではないでしょうか。　音声付きでリエゾン・アンシェヌマンを理解し、聞き取り力を強化を目的に音声ファイルを付加しました。<!--more-->　内容的には英語のでは、ストレスなく出てくるのではないでしょうか。

<div markdown='1'>
---
### 音声で学ぶフランス語リスニング｜リエゾン・アンシェヌマン基礎メモ
</div>


フランス語のリスニング力を本気で伸ばしたい学習者のための音声学習ページです。Googleの合成音声サービスを利用したクリアなフランス語音声とスクリプトを掲載し、リエゾン・アンシェヌマン・語末の発音変化・つづりと発音の対応を丁寧に理解できます。　フランス語初心者から中級者まで、会話の聞き取りに自信をつけたい方におすすめの教材です。毎日の学習に取り入れることで、自然なフランス語のリズムと発音が身につきます。

<style type="text/css">

table {
  display: block;
  margin-bottom: 1em;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  font-size: 0.75em;
  border-collapse: collapse;
  overflow-x: auto;
}

table + table {
  margin-top: 1em;
}

thead {
  background-color: #e6e6fa;
  border-bottom: 2px solid #9b9b9d;
}

th {
  padding: 0.5em;
  font-weight: bold;
  text-align: start;
}

td {
  padding: 0.5em;
  border-bottom: 1px solid #9b9b9d;
}

tfoot {
  background-color: #afeeee;
  padding: 0.5em;
  border-top: 2px solid #9b9b9d;
  border-bottom: 2px solid #9b9b9d;
}

tr,
td,
th {
  vertical-align: middle;
}
_media screen and (max-width:1280px){
.p_table {width:100%;overflow:scroll;}
.p_table table {width:1153px;}
}
_media screen and (max-width:750px){
.resp_table {width:100% !important;}
.resp_table th ,.resp_table td{padding:10px !important;}
}
.rouge {
color: red;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.bleu {
color: #0053a6;
font-size: 1.25em;
font-weight: 500;
font-style: italic;
font-family: inherit;
letter-spacing: 0.02em;
}
.rouge2 {
color: red;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.bleu2 {
color: blue;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.gold {
color: #6e5204ff;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.green {
color: #055c12ff;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.petit {
font-size: 0.80em;
color: black;
font-family: inherit;
line-height: 1.1;
display: inline-block;
letter-spacing: inherit;
}

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 10px; /* 吹き出し間の余白 */
  max-width: 900px;
}

.speech-bubble {
  position: relative;
  background: #f9f9f9;
  border-radius: 13px;
  padding: 10px 15px;
  width: fit-content;
  max-width: 900px;
  font-size: 16px;
  color: #333;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
  margin-bottom: 12px
}

/* 左端に固定 */
.left-align {
  align-self: flex-start;
  margin-left: 0;
}

/* 左から少し内側に寄せる */
.left-inner {
  align-self: flex-start;
  margin-left: 50px; /* 調整可能 */
}

.speech-bubble.bottom::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #f8efefff;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0,0.2));
}

.speech-bubble.left::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: #f8efefff;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0,0.2));
}

.speech-bubble.right::after {
  content: "";
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left-color: #f8efefff;
  filter: drop-shadow(2px 2px 6px rgba(0,0,0,0.2));
}

  #rate-control { display:flex; align-items:center; gap:1rem; margin:1rem 0; }
  #status { margin-top: .5rem; color: #333; }
</style>

<script defer>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.player').forEach((wrap, idx) => {
    const audioEl = wrap.querySelector('audio');
    const btn = wrap.querySelector('button');

    console.log(`player #${idx+1}`, { audioEl, btn });

    if (!audioEl || !btn) {
      console.warn(`player #${idx+1} に audio または button が見つかりません`);
      return;
    }
    btn.addEventListener('click', () => {
      if (audioEl.paused) audioEl.play().catch(err => console.error('再生失敗:', err));
      else audioEl.pause();
    });

    audioEl.addEventListener('ended', () => updateLabel(btn, false));
    audioEl.addEventListener('play',  () => updateLabel(btn, true));
    audioEl.addEventListener('pause', () => updateLabel(btn, false));
  });

  function updateLabel(button, playing) {
    const label = button.querySelector('.label');
    if (label) label.textContent = playing ? '停止' : '🔄';
  }
});
</script>

<div markdown='1'>
---
### 決まり文句 (cliché)　｜音声ファイル付き
</div>

<details>
    <summary><span class="petit">その通り</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">C'est vrai.</span><br>
<span class="green">セヴレ</span><br>
その通り<br>
<span class="gold">That's right</span><br>
</div>
      <div class="player">
            <audio id="F201a1" preload="auto">
                <source src="\audio\0132\01_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a1">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">そう、よかった。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu as dit oui ?　Tant mieux.</span><br>
<span class="green">テュ・ア・ディ・ウィ？　タン・ミュー</span><br>
そう、よかった。<br>
<span class="gold">You said Yes?　That's good.</span><br>
</div>
      <div class="player">
            <audio id="F201a2" preload="auto">
                <source src="\audio\0132\02_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a2">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">それは違います。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Ce n'est pas correct.</span><br>
<span class="green">スネパ・コレクト</span><br>
それは違います。<br>
<span class="gold">That's not right.</span><br>
</div>
      <div class="player">
            <audio id="F201a3" preload="auto">
                <source src="\audio\0132\03_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a3">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">やあ、調子どう？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Salut, quoi de neuf?</span><br>
<span class="green">サルー コワ・ドゥ・ナフ？</span><br>
やあ、調子どう？<br>
<span class="gold">Hi, what's new?</span><br>
</div>
      <div class="player">
            <audio id="F201a4" preload="auto">
                <source src="\audio\0132\04_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a4">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">お元気ですか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Comment vas-tu ?</span><br>
<span class="green">コモ・ヴァ・テュ？</span><br>
お元気ですか？<br>
<span class="gold">How are you?</span><br>
</div>
      <div class="player">
            <audio id="F201a5" preload="auto">
                <source src="\audio\0132\05_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a5">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">どうぞ、どうぞお先に</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">allez-y</span><br>
<span class="green">アレジィ</span><br>
「どうぞ」「どうぞお先に」<br>
<span class="gold">go ahead.</span><br>
</div>
      <div class="player">
            <audio id="F201a6" preload="auto">
                <source src="\audio\0132\06_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a6">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">何の話ですか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">De quoi parlez-vous ?</span><br>
<span class="green">ドゥコア・パルレ・ヴ？</span><br>
何の話ですか？<br>
<span class="gold">What are you talking about?</span><br>
</div>
      <div class="player">
            <audio id="F201a7" preload="auto">
                <source src="\audio\0132\07_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a7">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">いつでも電話してね、いい？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Appelle-moi quand tu veux, d'accord ?</span><br>
<span class="green">アペル・モァ・カンテュ・ヴゥ、ダコール？</span><br>
いつでも電話してね、いい？<br>
<span class="gold">Call me anytime, okay?</span><br>
</div>
      <div class="player">
            <audio id="F201a8" preload="auto">
                <source src="\audio\0132\08_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a8">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">会いたい時に電話しますね</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je t'appelle quand je veux</span><br>
<span class="green">ジュ・タペル・カン・ジュ・ヴゥ</span><br>
会いたい時に電話しますね<br>
<span class="gold">I call you when I want.</span><br>
</div>
      <div class="player">
            <audio id="F201a9" preload="auto">
                <source src="\audio\0132\09_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201a9">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">またすぐにお会いしましょう！</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">À tres vite!</span><br>
<span class="green">ア・トレ・ヴィッㇳ！</span><br>
またすぐにお会いしましょう！<br>
<span class="gold">See you soon!</span><br>
</div>
      <div class="player">
            <audio id="F201aa" preload="auto">
                <source src="\audio\0132\0a_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201aa">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">またすぐ会いましょう。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">On se voit bientôt.</span><br>
<span class="green">オン・ス・ヴォワ・ビエントゥト</span><br>
またすぐ会いましょう。<br>
<span class="gold">See you soon!</span><br>
</div>
      <div class="player">
            <audio id="F201ab" preload="auto">
                <source src="\audio\0132\0b_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ab">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">じゃあね！</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">À plus trad!</span><br>
<span class="green">ア・プル・タール！</span><br>
じゃあね！<br>
<span class="gold">See you later!</span><br>
</div>
      <div class="player">
            <audio id="F201ac" preload="auto">
                <source src="\audio\0132\0c_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ac">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">それが見えますか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Est-ce que vous le voyez? </span><br>
<span class="green">エスク・ヴ・ル・ヴォワイエ？</span><br>
それが見えますか？<br>
<span class="gold">Do you see it? </span><br>
</div>
      <div class="player">
            <audio id="F201ad" preload="auto">
                <source src="\audio\0132\0d_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ad">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">問題ないです。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Pas de souci.</span><br>
<span class="green">パ・ドゥ・スシ</span><br>
問題ないです。<br>
<span class="gold">No problem.</span><br>
</div>
      <div class="player">
            <audio id="F201ae" preload="auto">
                <source src="\audio\0132\0e_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ae">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">君を誇りに思うよ。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je suis fier de toi.</span><br>
<span class="green">ジュ・スイ・フィエール・ドゥ・トワ</span><br>
君を誇りに思うよ。<br>
<span class="gold">I'm proud of you.</span><br>
</div>
      <div class="player">
            <audio id="F201af" preload="auto">
                <source src="\audio\0132\0f_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201af">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">あなたは恥をかいた。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu es honteux.</span><br>
<span class="green">テュ・エ・ オントゥー</span><br>
あなたは恥をかいた。<br>
<span class="gold">Yoou are shamed.</span><br>
</div>
      <div class="player">
            <audio id="F201ag" preload="auto">
                <source src="\audio\0132\0g_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ag">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">私は忙しいです。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je suis occupé.</span><br>
<span class="green">ジュ・スイゾキュペ</span><br>
私は忙しいです。<br>
<span class="gold">I am busy.</span><br>
</div>
      <div class="player">
            <audio id="F201a2h" preload="auto">
                <source src="\audio\0132\0h_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ah">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">それは理にかなっている。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Ça a du sens.</span><br>
<span class="green">サ・ア・ドュ・サーンス</span><br>
それは理にかなっている。<br>
<span class="gold">That makes a sense.</span><br>
</div>
      <div class="player">
            <audio id="F201a2i" preload="auto">
                <source src="\audio\0132\0i_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ai">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">その家は売りに出されています。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">La maison est à vendre.</span><br>
<span class="green">ラ・メゾン・エ・ア・ヴァーンドル</span><br>
その家は売りに出されています。<br>
<span class="gold">The house is for sale.</span><br>
</div>
      <div class="player">
            <audio id="F201aj" preload="auto">
                <source src="\audio\0132\0j_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201aj">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">どうしたの？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Que se passe-t-il?</span><br>
<span class="green">ケス・パスティル？</span><br>
どうしたの？<br>
<span class="gold">What's going on?</span><br>
</div>
      <div class="player">
            <audio id="F201ak" preload="auto">
                <source src="\audio\0132\0k_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ak">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">急いで！</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Dépêchez-vous!</span><br>
<span class="green">デペシェ・ヴ！</span><br>
急いで！<br>
<span class="gold">Hurry up!</span><br>
</div>
      <div class="player">
            <audio id="F201al" preload="auto">
                <source src="\audio\0132\0l_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201al">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">わかりましたか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">C'est clair?</span><br>
<span class="green">セ・クレール？</span><br>
わかりましたか？<br>
<span class="gold">Is that clear?</span><br>
</div>
      <div class="player">
            <audio id="F201am" preload="auto">
                <source src="\audio\0132\0m_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201am">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>


<details>
    <summary><span class="petit">私は最善を尽くしています。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je fais de mon mieux.</span><br>
<span class="green">ジュ・フェ・ドゥ・モン・ミュー</span><br>
私は最善を尽くしています。<br>
<span class="gold">I'm doing my best.</span><br>
</div>
      <div class="player">
            <audio id="F201an" preload="auto">
                <source src="\audio\0132\0n_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201an">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<details>
    <summary><span class="petit">私は途方に暮れてます。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je me sens perdu.</span><br>
<span class="green">ジュ・ム・サンース・ペルドゥ</span><br>
私は途方に暮れてます。<br>
<span class="gold">I feel lost.</span><br>
</div>
      <div class="player">
            <audio id="F201ao" preload="auto">
                <source src="\audio\0132\0o_cliche.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="F201ao">
                    <span class="label">📢</span>
                </button>
      </div>
</div>
</details>

<div markdown='1'>
---
### 音声付きフランス語例文（音楽編）｜音声ファイル付き
</div>

音楽に関する短いフランス語の例文を、音声と一緒に練習できます。リエゾンやアンシェヌマンの感覚をつかむための導入として最適です。


<details>
    <summary><span class="petit">お気に入りの歌手はいますか</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">As-tu un chanteur préféré ?</span><br>
<span class="green">ア・テュ・アン・シャントゥール・プレフェレ？</span><br>
お気に入りの歌手はいますか？<br>
<span class="gold">Do you have a favorite singer?</span><br>
</div>
</div>
<div class="player">
  <audio id="voice1" preload="auto">
    <source src="\audio\0101\0201_musique.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice1">
    <span class="label">📢</span>
  </button>
</div>
</details>


<details>
    <summary><span class="petit">こんにちは、お会いできて嬉しいです。音楽について話たいです</span></summary>
  <div class="chat-container">
  <div class="speech-bubble left-align bottom">
  <span class="bleu">Bonjour, ravi de te voir. Je veux parler de musique.</span><br>
  <span class="green">ボンジュール、ラヴィ・ドゥ・テェ・ヴォワ　ジュ・ブ・パルレ・ドゥ・ミュジィク</span><br>
  こんにちは、お会いできて嬉しいです。音楽について話たいです<br>
  <span class="gold">Hello, it's nice to see you. I want to speak about music</span><br>
  </div>
  </div>

<div class="player">
  <audio id="voice2" preload="auto">
    <source src="\audio\0101\Bonjour_musique.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice2">
    <span class="label">📢</span>
  </button>
</div>
</details>

<details>
    <summary><span class="petit">元気です。ありがとう、音楽？　どうぞ！</span></summary>
<div class="chat-container"> 
  <div class="speech-bubble left-align bottom">
  <span class="bleu">Ça va bien, Merci, Musique? Allez-y!</span><br>
  <span class="green">サ・ヴァ・ビヤン　メルシィ ミュジィク？　アレジィ!</span><br>
  元気です。ありがとう、音楽？　どうぞ！<br>
  <span class="gold">Fine thank you, music? Go ahead.</span><br>
</div>
</div>
<div class="player">
  <audio id="voice3" preload="auto">
    <source src="\audio\0101\Ça_va_bien_Merci_MusiqueAllez-y.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice3">
    <span class="label">📢</span>
  </button>
</div>

</details>

<details>
    <summary><span class="petit">何人かいますが、全員、日本人の歌手です。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Il y en a plusieurs, mais ce sont tous des chanteurs japonais.</span><br>
<span class="green">イリオナ・プリュズィユール　メ・スソン・トゥー・デ・シャントゥール・ジャポネ</span><br>
何人かいますが、全員、日本人の歌手です。<br>
<span class="gold">There are several, but they are all Japanese singers.</span><br>
</div>
</div>
<div class="player">
  <audio id="voice4" preload="auto">
    <source src="\audio\0101\Il_plusieurs_mais_ce_sont_tous_des_chanteurs_japonais.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice4">
    <span class="label">📢</span>
  </button>
</div>
</details>

<details>
    <summary><span class="petit">今夜は優しい歌を歌うの？それとも力強い歌を歌うの？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu chantes une chanson douce ou forte ce soir?</span><br>
<span class="green">テュ・シャンテ・ウヌ・シャンソン・ドゥース・ウ・フォルト・ス・ソワ？</span><br>
今夜は優しい歌を歌うの？それとも力強い歌を歌うの？<br>
<span class="gold">Are you singing a soft song or a loud song tonight?</span><br>
</div>
</div>
<div class="player">
  <audio id="voice5" preload="auto">
    <source src="\audio\0101\Tu_chantes_une_chanson_douce_ou_forte_ce_soir.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice5">
    <span class="label">📢</span>
  </button>
</div>

</details>

<details>
    <summary><span class="petit">日本の曲の名前を言うの？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu veux dire le nom de la chanson japonaise?</span><br>
<span class="green">テュ・ヴ・ディール・ル・ノム・ドゥ・ラ・シャンソン・ジャポネーゼ</span><br>
日本の曲の名前を言うの？<br>
<span class="gold">You mean the name of the Japanese song?</span><br>
</div>
</div>
<div class="player">
  <audio id="voice6" preload="auto">
    <source src="\audio\0101\Tu_veux_dire_le_nom_de_la_chanson_japonaise.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice6">
    <span class="label">📢</span>
  </button>
</div>

</details>

<details>
    <summary><span class="petit">日本の歌しかよく知らないんだ。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Je ne connais bien que les chansons japonaises.</span><br>
<span class="green">ジュ・ネ・コネ・ビエン・ク・レ・シャンソン・ジャポネーゼ</span><br>
日本の歌しかよく知らないんだ。<br>
<span class="gold">I only know Japanese songs well.</span><br>
</div>
</div>
<div class="player">
  <audio id="voice7" preload="auto">
    <source src="\audio\0101\Je_ne_connais_bien_que_les_chansons_japonaises.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice7">
    <span class="label">📢</span>
  </button>
</div>

</details>


<details>
    <summary><span class="petit">その歌はあなたを幸せにしますか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">La chanson te rend heureuse?</span><br>
<span class="green">ラ・シャンソン・テ・ランド・ウールーズ？</span><br>
その歌はあなたを幸せにしますか？<br>
<span class="gold">Does the song make you happy?</span><br>
</div>
</div>
<div class="player">
  <audio id="voice8" preload="auto">
    <source src="\audio\0101\La_chanson_te_rend_heureuse.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice8">
    <span class="label">📢</span>
  </button>
</div>

</details>


<details>
    <summary><span class="petit">そう、よかった。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu as dit oui ?　Tant mieux.</span><br>
<span class="green">テュ・ア・ディ・ウィ？　タン・ミュー</span><br>
そう、よかった。<br>
<span class="gold">You said Yes?　That's good.</span><br>
</div>
</div>

<div class="player">
  <audio id="voice9" preload="auto">
    <source src="\audio\0101\Tu_as_dit_oui_Tant_mieux.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice9">
    <span class="label">📢</span>
  </button>
</div>
</details>

<details>
    <summary><span class="petit">その歌を聴くとき、目を閉じますか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu fermes les yeux quand tu écoutes la chanson?</span><br>
<span class="green">テュ・フェルム・レジユー・カン・テュ・エクートゥ・ラ・シャンソン？</span><br>
その歌を聴くとき、目を閉じますか？<br>
<span class="gold">Do you close your eyes when you listen to the song?</span><br>
</div>
</div>

<div class="player">
  <audio id="voice10" preload="auto">
    <source src="\audio\0101\Tu_fermesles_yeux_quand_tu_écoutes_la_chanson.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice10">
    <span class="label">📢</span>
  </button>
</div>
</details>

<details>
    <summary><span class="petit">なぜ、君はその歌を聴くと泣いてしまうの？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Pourquoi pleures-tu quand tu écoutes la chanson ?</span><br>
<span class="green">ポコワ・プルレ・テュ・カンテュ・エクートゥ・ラ・シャンソン？</span><br>
なぜ、君はその歌を聴くと泣いてしまうの？<br>
<span class="gold">Why do you cry when you hear that song?</span><br>
</div>
</div>

<div class="player">
  <audio id="voice11" preload="auto">
    <source src="\audio\0101\Pourquoi_pleures-tu_quand_tu_écoutes_la_chanson.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice11">
    <span class="label">📢</span>
  </button>
</div>
</details>

<details>
    <summary><span class="petit">この歌には思い出が多すぎて、涙がこぼれそうになる。</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Cette chanson me rappelle trop de souvenirs, et elle me fait monter les larmes aux yeux.</span><br>
<span class="green">セット・シャンソン・ム・ラペル・トロ・ドゥ・スーヴェニール　エ・エレム・フエ・モンテ・レ・ラルム・オジユー</span><br>
この歌には思い出が多すぎて、涙がこぼれそうになる。<br>
<span class="gold">This song holds too many memories for me, and it brings tears to my eyes.</span><br>
</div>
</div>

<div class="player">
  <audio id="voice12" preload="auto">
    <source src="\audio\0101\Cette_chanson_me_rappelle_trop_de_souvenirs.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice12">
    <span class="label">📢</span>
  </button>
</div>
</details>


<details>
    <summary><span class="petit">音楽はどうやって聴くの？　iphone ですか、それともラジオ</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Comment ecoutes-tu la musique ?　Avec ton iPhone ou à la radio ?</span><br>
<span class="green">コモ・エクテ・テュ・ラ・ミュジィク？　アベク・トン・アイフォーン・ウー・ア・ラ・ラディヨ？</span><br>
音楽はどうやって聴くの？　iphone ですか、それともラジオ<br>
<span class="gold">How do you listen to music?　On your iPhone, or on the radio?</span><br>
</div>
</div>

<div class="player">
  <audio id="voice13" preload="auto">
    <source src="\audio\0101\Comment_ecoutes-tu_la_musique.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice13">
    <span class="label">📢</span>
  </button>
</div>
</details>


<details>
    <summary><span class="petit">あなたは静かな音楽と明るい音楽、どちらが好きですか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu préfères la musique calme ou la musique joyeuse ?</span><br>
<span class="green">テュ・プレフェレ・ラ・ミュズィク・カルム・ウー・ラ・ミュジィク・ジョワイユーズ</span><br>
あなたは静かな音楽と明るい音楽、どちらが好きですか？<br>
<span class="gold">Do you prefer quiet music or bright music?</span><br>
</div>
</div>
<div class="player">
  <audio id="voice14" preload="auto">
    <source src="\audio\0101\Tu_préfères_la_musique_calme_ou_la_musique.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice14">
    <span class="label">📢</span>
  </button>
</div>
</details>


<details>
    <summary><span class="petit">いつも、やさしい歌がすきなの</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">J'aime toujours les chansons douces.</span><br>
<span class="green">ジェイム・トゥジュー・レ・シャンソン・ドゥース</span><br>
いつも、やさしい歌がすきなの<br>
<span class="gold">I always like soft songs.</span><br>
</div>
</div>

<div class="player">
  <audio id="voice14" preload="auto">
    <source src="\audio\0101\J_aime_toujours_les_chansons_douces.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice14">
    <span class="label">📢</span>
  </button>
</div>
</details>


<details>
    <summary><span class="petit">いつかフランス語の歌を習いたい？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu veux apprendre une chanson en français un jour ?</span><br>
<span class="green">テュ・ヴ・アプラーンドル・ウヌ・シャンソン・オン・フランセ・アン・ジュー？</span><br>
いつかフランス語の歌を習いたい？<br>
<span class="gold">Would you like to learn a French song someday?</span><br>
</div>
</div>

<div class="player">
  <audio id="voice15" preload="auto">
    <source src="\audio\0101\Tu_veux_apprendre_un_jour.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice15">
    <span class="label">📢</span>
  </button>
</div>
</details>




<div markdown='1'>
---
### 外国の友達について (de nouveaux amis etrangers)
</div>

<details>
    <summary><span class="petit">学校を見るために旅行に行きたいですか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu veux 💡voyager pour voir des écoles ?</span><br>
<span class="green">テュ・ヴ・ヴォワヤジェ・ポ・ヴォワ・デ・エコル？</span><br>
学校を見るために旅行に行きたいですか？<br>
<span class="gold">Do you want to travel to see schools?</span><br>
</div>
</div>
</details>

<details>
    <summary><span class="petit">他の国の学生に会いたいですか？</span></summary>
<div class="chat-container">
<div class="speech-bubble left-align bottom">
<span class="bleu">Tu veux rencontrer des élèves d'autres pays ?</span><br>
<span class="green">テュ・ヴ・ランコントレ・デ・エレヴェ・ドー・トゥル・ぺイ？</span><br>
他の国の学生に会いたいですか？<br>
<span class="gold">Do you want to meet students from other countries?</span><br>
</div>
</div>
</details>

<details>
    <summary><span class="petit">外国から新しい友達が欲しいですか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Tu veux te faire de nouveaux amis etrangers ?</span><br>
<span class="green">テユ・ヴ・テ・フェア・ドゥ・ヌーヴォ・ザミ・ゼトランジェ？</span><br>
外国から新しい友達が欲しいですか？<br>
<span class="gold">Do you want a new friend from another country?</span><br>
<span class="rouge">se faire des amis｜友達を作る</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">学校で友達に会いますか？それとも他の場所で？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Tu vois ton ami à l'ecole ? Ou ailleurs ?</span><br>
<span class="green">テュ・ヴォワ・トナミ・ア・レコル？　ウー・アイユール</span><br>
学校で友達に会いますか？それとも他の場所で？<br>
<span class="gold">Do you see your friend at school? Or somewhere else?</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">そのゲームをよくプレイしますか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Tu joues souvent à ce jeu ?</span><br>
<span class="green">テユ・ジュー・スヴォン・ア・ス・ジュー？</span><br>
そのゲームをよくプレイしますか？<br>
<span class="gold">Do you play this game often?</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">誕生日プレゼントを贈るのが好きですか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Vous aimez offrir des cadeaux pour les anniversaires ?</span><br>
<span class="green">ヴーゼメ・オフリール・デ・カドー・ポウレ・アニヴェルセール？</span><br>
誕生日プレゼントを贈るのが好きですか？<br>
<span class="gold">Do you like giving gifts for birthdays?</span><br>
<span class="rouge">J'aime(ジェーム) Tu amies (テュ・エーム)　Vous aimez　(ヴーゼメ) </span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">何が好きですか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Qu’est-ce que vous aimez?</span><br>
<span class="green">ケスク・ヴーゼメ？</span><br>
何が好きですか？<br>
<span class="gold">What do you like?</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">オーディオブックを聴くのが好きです。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">J'aime écouter des livres audio.</span><br>
<span class="green">ジェーム・エクテ・デ・リーヴル・オデゥオ</span><br>
オーディオブックを聴くのが好きです。<br>
<span class="gold">I enjoy listening to audiobooks.</span><br>
    </div>
</div>
</details>



<div markdown='1'>
---
### 冬と寒さについて (du froid et de l'hiver)
</div>

<details>
    <summary><span class="petit">寒さと冬について話しましょう。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Parlons du froid et de l'hiver.</span><br>
<span class="green">パルロン・ドュ・フロワ・エ・ドゥ・リヴェール</span><br>
寒さと冬について話しましょう。<br>
<span class="gold">Let's talk about the cold and winter.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">雪が降ったら暖かいコートを着ますか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Quand il neige, tu portes un manteau chaud ?</span><br>
<span class="green">カンティル・ネージュ, テュ・ポルトゥ・ウン・マントゥ・ショゥ？</span><br>
雪が降ったら暖かいコートを着ますか？<br>
<span class="gold">When it snows, do you wear a warm coat?</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">もっと寒くなるかもしれない、もう11月だ。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Il pourrait faire plus froid, nous sommes déjà en Novembre. </span><br>
<span class="green">イル・プゥレー・フェア・プル・フロワ　ヌソム・デジャ・オン・ヌヴァンブる</span><br>
もっと寒くなるかもしれない、もう11月だ。<br>
<span class="gold">It may get colder, it’s already November. </span><br>
<span class="rouge">pouvoirの条件法現在第三人称単数形。pourrait</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">私の妻は仕事でズボンをはいています。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Ma femme porte des pantalons au travail.</span><br>
<span class="green">マ・ファム・ポルトゥ・デ・パンタロン・オ・トラバイユ</span><br>
私の妻は仕事でズボンをはいています。<br>
<span class="gold">My wife wears trousers to work.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">寒いですか？ セーターを着ていますか？</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Il fait froid? Tu portes un pull?</span><br>
<span class="green">イル・フェ・フロワ？　テュ・ポルトゥ・ウン・プル？</span><br>
寒いですか？ セーターを着ていますか？<br>
<span class="gold">Is it cold? Are you wearing a sweater?</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">外はすごく寒い。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Il fait trop froid dehors.</span><br>
<span class="green">イル・フェ・トロ・フロワ・ドゥオール</span><br>
外はすごく寒い。<br>
<span class="gold">It's too cold outside.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">セーターがないと寒い。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">J'ai froid sans mon pull.</span><br>
<span class="green">ジェ・フロワ・サン・モン・プル</span><br>
セーターがないと寒い。<br>
<span class="gold">I feel cold without my sweater.</span><br>
    </div>
</div>
</details>

<div markdown='1'>
---
### 仕事について (travailler)
</div>

<details>
    <summary><span class="petit">おめでとう、成功したよ！</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Félicitations, nous avons réussi !</span><br>
<span class="green">フェリシタション　ヌザヴォン・レゥスイ</span><br>
おめでとう、成功したよ！<br>
<span class="gold">Congratulations, we did it!</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">やっと終わった、ほっとした。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Enfin fini, je suis soulagé</span><br>
<span class="green">アンファン・フィニ　ジュ・スィ・スラージュ</span><br>
やっと終わった、ほっとした。<br>
<span class="gold">Finally finished, I'm relieved.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">もう遅いのに、まだ仕事をしなければなりません。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Il est tard, et pourtant je dois travailler.</span><br>
<span class="green">イレ・タール　エ・プルタン・ジュ・ドゥワ・トラブァイエ</span><br>
もう遅いのに、まだ仕事をしなければなりません。<br>
<span class="gold">It's late, and yet I have to work.</span><br>
    </div>
</div>
</details>


<details>
    <summary><span class="petit">それは休憩が減ることを意味します。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Ça veut dire moins de pauses.</span><br>
<span class="green">サヴゥ・ディール・モワン・ドゥ・ポーズ</span><br>
それは休憩が減ることを意味します。<br>
<span class="gold">That means fewer breaks.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">彼女は時間内に終わってほっとしている。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Elle est soulagée d'avoir fini a temps.</span><br>
<span class="green">エレ・エ・スラージュェ・ダヴォワ・フィニ・ア・トンプ</span><br>
彼女は時間内に終わってほっとしている。<br>
<span class="gold">She is relieved to have finished on time.</span><br>
    </div>
</div>
</details>

<details>
    <summary><span class="petit">この本は素晴らしいので、お勧めします。</span></summary>
<div class="chat-container">
    <div class="speech-bubble left-align bottom">
<span class="bleu">Vu que ce livre est genial, je le recommande.</span><br>
<span class="green">ヴ・ク・ス・リーヴル・エ・ジェニアル　ジュ・ル・ルコマンド</span><br>
この本は素晴らしいので、お勧めします。<br>
<span class="gold">Since the book is great, I recommend it.</span><br>
    </div>
</div>
</details>



<div markdown='1'>
---
### イグレック(Y/y)の発音について
</div>

<div class="box44">
    <span class="box-title">💡イグレックの発音について</span>
    <ol style="font-size: 80%; color: noir;">
    <li>「Y/y：イグレック」は、「i」が２つくっついた物＝「i + i」＝「ii」として扱われる</li> 
    <li>「les yeux」は、「les <strong>ii</strong>eux」となるs+i がリエゾンして「レジユー」と発音する</li>
    <li>「joyeuse」は、「jo<strong>ii</strong>euse」となり、最初のo+i が「ワ」次のie が「イ」となり、「ジョワイユーズ」と発音する</li>
    <li>「voyager」は、「vo<strong>ii</strong>ager」となり、最初のo+i が「ワ」次のia が「ヤ」となり、「ヴォワヤジェ」と発音する</li>
    </ol>
</div>



