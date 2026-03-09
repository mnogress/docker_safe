---
layout: single
title: そのまま覚えるフランス語の文例 ～ aller ～
header:
  overlay_image: images/header_fr41_1280by336.png
  overlay_filter: rgba(107, 74, 43, 0.33)
toc: True
toc_label: "目次"
toc_icon: "heart" 
toc_sticky: True
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
sidebar:
  nav: "docs"
category: français
tag: ["French", "フランス語学習"]
date: 2026-03-09
last_modified_at : 2026-03-09 8:30:00
---
フランス語の決まり文句や重要フレーズをそのまま覚えるべき文例集 ～ aller ～<!--more-->

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
color: rgb(160, 15, 8);
font-size: 1.14em;
font-weight: 500;
font-style: italic;
font-family: inherit;
letter-spacing: 0.02em;
}
.gris_p {
color: rgb(45, 43, 42);
font-size: 0.7em;
font-weight: 500;
font-style: normal;
font-family: inherit;
letter-spacing: 0.02em;
}
.noir {
color: #090c0cff;
font-weight: normal;
font-family: inherit;
letter-spacing: inherit;
}
.bleu {
color: #0053a6;
font-size: 1.20em;
font-weight: 500;
font-style: italic;
font-family: inherit;
letter-spacing: 0.02em;
}S
.petit {
font-size: 0.60em;
color: black;
font-family: inherit;
line-height: 1.1;
display: inline-block;
letter-spacing: inherit;
}
  /* このページだけのULを調整（スコープ＝.page-ul-fix） */
  .page-ul-fix ul {
    font-size: 1rem;       /* 任意のサイズに */
    line-height: 1.3;      /* 読みやすさ調整（任意） */
  }

  /* このページだけのOLを調整（スコープ＝.page-ul-fix） */
  .page-ul-fix ol {
    font-size: 1rem;       /* 任意のサイズに */
    line-height: 1.6;      /* 読みやすさ調整（任意） */
  }
.mytable tbody.rowgroup { background: #78aae3; }        /* デフォルト色 */
.mytable tbody.rowgroup.group-a { background: #17bb25; } /* Aは淡いグリーン */
.mytable tbody.rowgroup.group-b { background: #4c3d0a; } /* Bは淡いイエロー */
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

### aller の基本事項

「aller」のような重要な動詞は、口頭練習と並行して活用の基本を押さえることで、理解と応用力がぐっと深まります。
以下が活用表です。ここでは、不定詞・現在形・現在分詞・過去分詞を紹介します。　ポイントは以下になります。

1. 現在形は日常会話で最もよく使われるので、まずはここを重点的に。
2. 現在分詞は「〜しながら」「〜する途中で」のような文に使われます。
3. 過去分詞は複合過去（passé composé）で使われ、「être」と一緒に使うのが特徴です（例：Je suis allé）。
4. 発音は主語とセットで覚えると、口に出しやすくなります。

<main class="page-ul-fix">
<table class="resp_table">
  <colgroup>
    <col>               <!-- 1列目 -->
    <col>               <!-- 2列目 -->
    <col>               <!-- 3列目 -->
    <col style="background:#E6E6FA;"> <!-- 4列目を薄いブルー -->
    <col>               <!-- 5列目 -->
  </colgroup>
<caption>allerの活用表</caption>
<thead>
<tr>
    <th width="10%">活用</th>
    <th width="20%">つづり</th>
    <th width="25%">訳</th>
    <th width="10%">音声</th>
    <th width="35%">コメント</th>
</tr>
</thead>
<tbody>
<tr>
    <td>不定詞</td>
    <td class="group"><span class="bleu">aller</span><br><span class="gris_p"> (アレ)</span></td>
    <td><span class="noir">行く</span></td>
    <td rowspan="4" ><span class="noir"></span>
          <div class="player">
            <audio id="all03_101" preload="auto">
                <source src="\audio\0309\01_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all03_101">
                    <span class="label">📢</span>
                </button>
      </div>
    </td>
    <td></td>
</tr>
<tr>
    <td rowspan="6">現在形</td>
    <td>je <span class="bleu">vais</span><br><span class="gris_p"> (ジュ・ヴェ)</span></td>
    <td><span class="noir">私は、行く</span></td>
    <td></td>
</tr>
<tr>
    <td>tu <span class="bleu">vas</span><br><span class="gris_p"> (チュ・ヴァ)</span></td>
    <td><span class="noir">君は、行く</span></td>
    <td rowspan="2">vas, va とも発音は同じ「ヴァ」</td>
</tr>
<tr>
    <td>il/elle/on <span class="bleu">va</span><br><span class="gris_p"> (イル／エル／オン・ヴァ)</span></td>
    <td><span class="noir">彼／彼女／私たちは、行く</span></td>
    <td><span class="noir"></span></td>
</tr>
<tr>
    <td>nous <span class="bleu">allons</span><br><span class="gris_p"> (ヌザロン)</span></td>
    <td><span class="noir">私たちは、行く</span></td>
    <td rowspan="5"><span class="noir"></span>
              <div class="player">
            <audio id="all03_102" preload="auto">
                <source src="\audio\0309\02_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all03_102">
                    <span class="label">📢</span>
                </button>
      </div>
    </td>
    <td>ヌ<span class="rouge">ザ</span>ロン　と「ザ」リエゾンする</td>
    </tr>
<tr>
    <td>vous <span class="bleu">allez</span><br><span class="gris_p"> (ブザレ)</span></td>
    <td><span class="noir">あなたは、行く</span></td>
    <td>ヴ<span class="rouge">ザ</span>レ　と「ザ」リエゾンする</td>
</tr>
<tr>
    <td>ils/elles <span class="bleu">vont</span><br><span class="gris_p"> (イル／エル・ヴォン)</span></td>
    <td><span class="noir">彼ら／彼女らは、行く</span></td>
    <td></td>
</tr>
<tr>
    <td>現在分詞</td>
    <td><span class="bleu">allant</span><br><span class="gris_p"> (アラン)</span></td>
    <td><span class="noir">行く</span></td>
    <td>allons からons をとってantをつける</td>
</tr>
<tr>
    <td>過去分詞</td>
    <td><span class="bleu">allé/allée</span><br><span class="gris_p"> (アレ)</span></td>
    <td><span class="noir">行った</span></td>
    <td>étre + allé/allée で複合過去を作る　性数一致のこと。</td>
</tr>
</tbody>
</table>
</main>



### 動詞 aller の使い方：口から覚えるフレーズ集

活用のポイントに沿ったフレーズ集です。フレーズごとに「主語＋動詞」をリズムで覚えましょう。　　

<main class="page-ul-fix">
<table class="resp_table">
  <colgroup>
    <col>               <!-- 1列目 -->
    <col>               <!-- 2列目 -->
    <col style="background:#E6E6FA;"> <!-- 3列目を薄いブルー -->
    <col>               <!-- 4列目 -->
  </colgroup>
    <caption>allerのフレーズ集</caption>
    <thead>
    <tr>
        <th width="35%">phrase</th>
        <th width="30%">訳</th>
        <th width="10%">音声</th>
        <th width="25%">コメント</th>
    </tr>
    </thead>
<tbody>
    <tr>
        <td>Vous <span class="bleu">allez</span> <span class="rouge">en</span> France ?<br><span class="gris_p"> (ヴザレ・アン・フランス？)</span></td>
        <td ><span class="noir">あなたはフランスに行くのですか？</span></td>
            <td rowspan="4"><span class="noir"></span>
              <div class="player">
            <audio id="all03_102" preload="auto">
                <source src="\audio\0309\03_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all03_102">
                    <span class="label">📢</span>
                </button>
             </div>
        </td>
        <td>女性名詞の国は「<span class="rouge">en</span>」</td>
    </tr>
    <tr>
        <td>Vous <span class="bleu">allez</span>  <span class="rouge">au</span> Japon ?<br><span class="gris_p"> (ヴザレ・オ・ジャポン？)</span></td>
        <td><span class="noir">あなたは日本に行くのですか？</span></td>
        <td>子音から始まる男性名詞の国は「<span class="rouge">au</span>」</td>
    </tr>
    <tr>
        <td>Non, je <span class="bleu">vais </span> <span class="rouge">aux</span> Etats-Unis.<br><span class="gris_p"> (ノン、ジュ・ヴェ・オゼタズュニ)</span></td>
        <td><span class="noir">いいえ、アメリカに行きます。</span></td>
        <td>複数形の国は「<span class="rouge">aux</span>」</td>
    </tr>
    <tr>
        <td>On <span class="bleu">va </span>au cinema ?<br><span class="gris_p"> (オンヴァ・オスィネマ？)</span></td>
        <td><span class="noir">映画に行こうか？</span></td>
        <td></td>
    </tr>
    <tr>
        <td>On y <span class="bleu">va </span>ensemble.<br><span class="gris_p"> (オニヴァ・アンサンブル)</span></td>
        <td><span class="noir">一緒に行こうよ</span></td>
            <td rowspan="4"><span class="noir"></span>
              <div class="player">
            <audio id="all03_102" preload="auto">
                <source src="\audio\0309\04_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all03_102">
                    <span class="label">📢</span>
                </button>
             </div>
        </td>
        <td>英:Shall we go?</td>
    </tr>
    <tr>
        <td><span class="bleu">Allons</span>-y ensemble.<br><span class="gris_p"> (アロンジィ・アンサンブル)</span></td>
        <td><span class="noir">一緒に行こうよ</span></td>
        <td>英:Let's go.</td>
    </tr>
    <tr>
        <td>Qu'<span class="bleu">allons</span>-nous faire demain ?<br><span class="gris_p"> (カロンヌ・フェア・ドゥマン ？)</span></td>
        <td><span class="noir">明日は何をしよう？</span></td>
        <td></td>
    </tr>
    <tr>
        <td>Je <span class="bleu">vais </span>vous emmener à l'hôtel.<br><span class="gris_p"> (ジュヴァ・ヴゾムネ・アロテル)</span></td>
        <td><span class="noir">ホテルに連れて行きます。</span></td>
        <td></td>
    </tr>
    <tr>
        <td>Nous<span class="bleu"> allons aller </span>dans mon restaurant préféré.<br><span class="gris_p"> (ヌザロン・アレ・ダン・モンレストラン・プリフェレ)</span></td>
        <td><span class="noir">私のお気に入りのレストランに行きましょう</span></td>
            <td rowspan="4"><span class="noir"></span>
              <div class="player">
            <audio id="all05_102" preload="auto">
                <source src="\audio\0309\05_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all05_102">
                    <span class="label">📢</span>
                </button>
             </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>Elle<span class="bleu"> est allée </span>à la boulangerie.<br><span class="gris_p"> (エレ・タレア・ラ・ブランジュリー)</span></td>
        <td><span class="noir">彼女はパン屋へ行った。</span></td>
        <td></td>
    </tr>
    <tr>
        <td>Je ne <span class="bleu">vais </span>pas faire de tennis.<br><span class="gris_p"> (ジュ・ヌ・ヴァパ・フェアドゥ・テニス)</span></td>
        <td><span class="noir">私はテニスをするつもりはありません。</span></td>
        <td>近接未来：allerの活用＋動詞の不定詞</td>
    </tr>
    <tr>
        <td><span class="bleu">Va</span>-t'en!<br><span class="gris_p"> (ヴァ・タン)</span></td>
        <td><span class="noir">出て行け！</span></td>
        <td>英:Go away!</td>
    </tr>
    <tr>
        <td><span class="bleu">allez</span>-y<br><span class="gris_p"> (アレジィ)</span></td>
        <td><span class="noir">さあ、どうぞ</span></td>
            <td rowspan="4"><span class="noir"></span>
              <div class="player">
            <audio id="all06_102" preload="auto">
                <source src="\audio\0309\06_all.m4a" type="audio/mp4">
            </audio>
                <button type="button" data-audio-id="all06_102">
                    <span class="label">📢</span>
                </button>
             </div>
        </td>
        <td>英：Go right ahead. </td>
    </tr>
    <tr>
        <td>Vous <span class="bleu">allez y aller</span> ?<br><span class="gris_p"> (ヴ・ザレ・イ・アレ)</span></td>
        <td><span class="noir">行きますか？</span></td>
        <td></td>
    </tr>
    <tr>
        <td>Il veut y <span class="bleu">aller</span>.<br><span class="gris_p"> (イル・ヴー・イ・アレ)</span></td>
        <td><span class="noir">彼はそこに行きたい</span></td>
        <td></td>
    </tr>
    <tr>
        <td><span class="bleu">Va </span>te changer, tu <span class="bleu">vas </span>te salir.<br><span class="gris_p"> (ブァ・テ・シャンジェ　チュ・ヴァ・テ・サリ)</span></td>
        <td><span class="noir">着替えて、汚れるよ</span></td>
        <td></td>
    </tr>
</tbody>
</table>
</main>


