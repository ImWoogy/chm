async function RunManager() {
  console.log("Функция RunManager успешно вызвана из удаленного скрипта!");

  if (window.location.href !== window.location.origin + "/stream") {
    window.location.href = "/stream";
    await new Promise((r) => setTimeout(r, 700));
  } else {
    console.log("Текущий адрес уже равен /stream.");
    await new Promise((r) => setTimeout(r, 700));
  }
  checkAndPlay();
  setInterval(checkAndPlay, 20000);
}

function checkAndPlay() {
  console.log("checkAndPlay");

  const iframe = document.getElementById("stream-live-event");
  if (!iframe) {
    console.log('Элемент с id "stream-live-event" не найден.');
    return;
  }

  const currentSrc = new URL(iframe.src);
  const params = currentSrc.searchParams;

  if (!params.has("autoplay") || params.get("autoplay") !== "1") {
    console.log("Видео не запущено, добавляем параметр autoplay и перезагружаем iframe.");

    // Add or update the autoplay parameter to 1
    params.set("autoplay", "1");
    iframe.src = currentSrc.toString(); // Update the iframe src
  } else {
    console.log("Видео уже должно быть запущено.");
  }

  // Track changes in the span element
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
