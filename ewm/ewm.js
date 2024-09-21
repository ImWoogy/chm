async function RunManager() {
  console.log("Функция RunManager успешно вызвана из удаленного скрипта!");

  if (window.location.href !== window.location.origin + "/stream") {
    window.location.href = "/stream";
    await new Promise((r) => setTimeout(r, 1500));
  } else {
    console.log("Текущий адрес уже равен /stream.");
     await new Promise((r) => setTimeout(r, 1500));
  }
  checkAndPlay();
  setInterval(checkAndPlay, 20000);
}

function loadYouTubeAPI() {
  return new Promise((resolve) => {
    if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://www.youtube.com/iframe_api";
      scriptTag.onload = () => resolve();
      document.head.appendChild(scriptTag);
    } else {
      resolve();
    }
  });
}

async function checkAndPlay() {
  console.log("checkAndPlay");

  const iframe = document.getElementById("stream-live-event");
  if (!iframe) {
    console.log('Элемент с id "stream-live-event" не найден.');
    return;
  }

  await loadYouTubeAPI();

  const player = new YT.Player(iframe, {
    events: {
      onReady: () => {
        console.log("YouTube Player готов.");
        playerStateCheck(player);
      },
      onError: (event) => {
        console.error("Ошибка YouTube Player:", event.data);
      },
    },
  });
}

function playerStateCheck(player) {
  const playerState = player.getPlayerState();

  if (playerState !== YT.PlayerState.PLAYING) {
    console.log("Видео не запущено, запускаем воспроизведение.");
    player.playVideo();
  } else {
    console.log("Видео уже воспроизводится.");
  }

  trackSpanChanges();
}

function trackSpanChanges() {
  const spanElement = document.querySelector("span.truncate.font-semibold");
  if (spanElement) {
    let lastText = spanElement.innerText;
    let unchangedTime = 0;

    const checkInterval = setInterval(() => {
      const currentText = spanElement.innerText;

      if (currentText === lastText) {
        unchangedTime += 10;

        if (unchangedTime >= 60) {
          console.log(
            "Текст не изменяется в течение 60 секунд, перезагружаем страницу."
          );
          clearInterval(checkInterval);
          window.location.reload();
        } else {
          console.log(
            "Текст не изменяется, время без изменений: " +
              unchangedTime +
              " секунд."
          );
        }
      } else {
        console.log("Текст изменился, сбрасываем таймер.");
        lastText = currentText;
        unchangedTime = 0;
      }
    }, 10000);
  } else {
    console.log('Элемент span с классом "truncate font-semibold" не найден.');
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    RunManager: RunManager,
    checkAndPlay: checkAndPlay,
    trackSpanChanges: trackSpanChanges,
  };
} else {
  window.RunManager = RunManager;
  window.checkAndPlay = checkAndPlay;
  window.trackSpanChanges = trackSpanChanges;
}
