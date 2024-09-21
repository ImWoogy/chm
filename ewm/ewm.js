async function RunManager() {
  console.log("Функция RunManager успешно вызвана из удаленного скрипта!");

  // Проверка текущего адреса страницы
  if (window.location.href !== window.location.origin + "/stream") {
    // Изменение адреса страницы на /stream
    window.location.href = "/stream";
  } else {
    console.log("Текущий адрес уже равен /stream.");
  }

  await new Promise((r) => setTimeout(r, 1500));

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

  if (!params.has("autoplay") || params.get("autoplay") !== "0") {
    console.log(
      "Видео не запущено, добавляем параметр autoplay и перезагружаем iframe."
    );

    params.set("autoplay", "0");
    params.set("vq", "medium");
    iframe.src = currentSrc.toString(); // Update the iframe src

    iframe.onload = () => {
      // Function to search and click the play button
      const searchPlayButton = () => {
        try {
          // Check if contentDocument is accessible
          if (iframe.contentDocument) {
            const playButton = iframe.contentDocument.querySelector(
              "button.ytp-large-play-button.ytp-large-play-button-red-bg"
            );
            if (playButton) {
              console.log("Кнопка воспроизведения найдена, выполняем клик.");
              playButton.click();
              clearInterval(intervalId); // Stop the search after clicking
            } else {
              console.log(
                "Кнопка воспроизведения не найдена, продолжаем поиск..."
              );
            }
          } else {
            console.log("iframe.contentDocument is not accessible yet.");
          }
        } catch (error) {
          console.error("Ошибка доступа к iframe:", error);
        }
      };

      // Start searching for the play button every 5 seconds
      const intervalId = setInterval(searchPlayButton, 5000);
    };
  } else {
    console.log("Видео уже должно быть запущено.");
  }

  // Track changes in the span element
  trackSpanChanges();
}

function trackSpanChanges() {
  // Locate the parent element with data-test-id="user-balance"
  const balanceElement = document.querySelector(
    '[data-test-id="user-balance"]'
  );

  if (balanceElement) {
    console.log('Элемент с data-test-id="user-balance" найден.');

    // Now find the span element within the balanceElement
    const spanElement = balanceElement.querySelector(
      "span.truncate.font-semibold"
    );

    if (spanElement) {
      console.log('Элемент span с классом "truncate font-semibold" найден.');

      let lastText = spanElement.innerText;
      let unchangedTime = 0; // Time in seconds without change

      // Check for changes in the span text every 10 seconds
      const checkInterval = setInterval(() => {
        const currentText = spanElement.innerText;

        if (currentText === lastText) {
          unchangedTime += 10; // Increment unchanged time

          if (unchangedTime >= 30) {
            console.log(
              "Текст не изменяется в течение 60 секунд, перезагружаем страницу."
            );
            clearInterval(checkInterval);
            window.location.reload(); // Reload the page
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
      }, 10000); // Check interval is 10 seconds
    } else {
      console.log('Элемент span с классом "truncate font-semibold" не найден.');
    }
  } else {
    console.log('Элемент с data-test-id="user-balance" не найден.');
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
