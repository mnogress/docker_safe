---
layout: single
title: フランス語学習者のための_音声ファイル集
header:
  overlay_image: images/header_fr10_1280by336.png
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
date: 2025-12-22
last_modified_at : 2025-12-22 10:30:00
---

音声ファイルを追加しました。正しく、聞き取り、オウム返しすることが大事だと思います。<!--more-->　

<style type="text/css">
    .player {
      margin: 1rem 0;
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
    button {
      padding: 0.4rem 0.8rem;
    }
    audio {
      /* 画面に出したくない場合は隠してもOK */
      display: none;
    }

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
color: blue;
font-size: 1.46em;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
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
    if (label) label.textContent = playing ? '停止' : '再生';
  }
});
</script>





<div markdown='1'>
---
### 音声ファイル付き決まり文句 (cliché)
</div>

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
    <source src="\audio\As-tu un chanteur préféré.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice1">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Bonjour_musique.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice2">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Ça_va_bien_Merci_MusiqueAllez-y.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice3">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Il_plusieurs_mais_ce_sont_tous_des_chanteurs_japonais.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice4">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Tu_chantes_une_chanson_douce_ou_forte_ce_soir.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice5">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Tu_veux_dire_le_nom_de_la_chanson_japonaise.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice6">
    <span class="label">音声を聴く</span>
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
</div>
<div class="player">
  <audio id="voice7" preload="auto">
    <source src="\audio\Je_ne_connais_bien_que_les_chansons_japonaises.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice7">
    <span class="label">音声を聴く</span>
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
</details>
<div class="player">
  <audio id="voice8" preload="auto">
    <source src="\audio\La_chanson_te_rend_heureuse.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice8">
    <span class="label">音声を聴く</span>
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
    <source src="\audio\Tu_as_dit_oui_Tant_mieux.m4a" type="audio/mp4">
  </audio>
  <button type="button" data-audio-id="voice9">
    <span class="label">音声を聴く</span>
  </button>
</div>
</details>
---


