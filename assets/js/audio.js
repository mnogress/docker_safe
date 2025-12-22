// assets/js/audio.js
// 音声プレイヤーの初期化（ページ内の .audio-card を一括セットアップ）
// 競合防止：二重初期化ガード + IIFE でスコープを閉じる

(() => {
  // 二重初期化防止フラグ（ページごとに一度）
  if (window.__audioPlayersInitialized) return;
  window.__audioPlayersInitialized = true;

  // DOM準備後に初期化（defer 読み込みでも保険）
  const ready = () => {
    const players = document.querySelectorAll('.audio-card');
    players.forEach(root => {
      const audio     = root.querySelector('[data-role="audio"]');
      const playBtn   = root.querySelector('[data-role="play"]');
      const repeatBtn = root.querySelector('[data-role="repeat"]');
      const cur       = root.querySelector('[data-role="cur"]');
      const dur       = root.querySelector('[data-role="dur"]');
      const progress  = root.querySelector('[data-role="progress"]');
      const bar       = progress?.parentElement;

      if (!audio) return; // audio 要素が無いカードはスキップ

      // mm:ss の整形
      const fmt = s => {
        if (!isFinite(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2,'0')}`;
      };

      // 再生／一時停止（トグル）
      const onPlayClick = async () => {
        try {
          if (audio.paused) {
            await audio.play(); // 非同期完了を待つことで競合を低減
          } else {
            audio.pause();
          }
        } catch (err) {
          console.error('play() に失敗:', err);
        }
      };

      // もう一度（頭出し再生）
      const onRepeatClick = async () => {
        try {
          audio.currentTime = 0;
          await audio.play();
        } catch (err) {
          console.error('repeat play() に失敗:', err);
        }
      };

      // 進捗バークリックでシーク（click に統一）
      const onSeek = e => {
        if (!bar) return;
        const rect = bar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, x / rect.width));
        audio.currentTime = ratio * (audio.duration || 0);
      };

      // イベント登録（click のみに統一：touchstartの重複発火を避ける）
      playBtn?.addEventListener('click', onPlayClick);
      repeatBtn?.addEventListener('click', onRepeatClick);
      bar?.addEventListener('click', onSeek);

      // キーボード操作（Enter/Space）
      [playBtn, repeatBtn].forEach(btn => {
        btn?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
          }
        });
      });

      // メタデータ読み込み後に総時間表示
      audio.addEventListener('loadedmetadata', () => {
        dur && (dur.textContent = fmt(audio.duration));
      });

      // 進捗更新（requestAnimationFrame）
      const update = () => {
        if (cur && progress) {
          cur.textContent = fmt(audio.currentTime);
          const ratio = audio.duration ? (audio.currentTime / audio.duration) : 0;
          progress.style.width = `${(ratio * 100).toFixed(2)}%`;
        }
        requestAnimationFrame(update);
      };
      update();

      // 任意のログ（デバッグに役立ちます）
      // audio.addEventListener('play',  () => console.log('PLAY'));
      // audio.addEventListener('pause', () => console.log('PAUSE'));
      // audio.addEventListener('ended', () => console.log('ENDED'));
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();