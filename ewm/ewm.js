async function RunManager() {
  console.log("Функция RunManager успешно вызвана из удаленного скрипта!");

  // Проверка текущего адреса страницы
  if (window.location.href !== window.location.origin + "/stream") {
    // Изменение адреса страницы на /stream
    window.location.href = "/stream";

    await new Promise((r) => setTimeout(r, 500));

    checkAndPlay();
    setInterval(checkAndPlay, 20000);
  } else {
    console.log("Текущий адрес уже равен /stream.");
  }
}

function checkAndPlay() {
  const player = document.getElementById("player");
  if (player) {
    console.log('Элемент с id "player" найден.');

    // Ищем кнопку воспроизведения
    const playButton = document.querySelector(
      "button.ytp-large-play-button.ytp-button.ytp-large-play-button-red-bg"
    );
    if (playButton) {
      console.log("Кнопка воспроизведения найдена, нажимаем на неё.");
      playButton.click();

      // Начинаем отслеживать изменение текста в span после нажатия на кнопку
      trackSpanChanges();
    } else {
      console.log("Кнопка воспроизведения не найдена.");
    }
  } else {
    console.log('Элемент с id "player" не найден.');
  }
}

function trackSpanChanges() {
  const spanElement = document.querySelector("span.truncate.font-semibold");
  if (spanElement) {
    let lastText = spanElement.innerText;
    let unchangedTime = 0; // Время в секундах, в течение которого текст не изменялся

    const checkInterval = setInterval(() => {
      const currentText = spanElement.innerText;

      if (currentText === lastText) {
        unchangedTime += 10; // Проверяем каждые 10 секунд

        if (unchangedTime >= 60) {
          // Если текст не меняется в течение 60 секунд
          console.log(
            "Текст не изменяется в течение 60 секунд, перезагружаем страницу."
          );
          clearInterval(checkInterval);
          window.location.reload(); // Перезагрузка страницы
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
    }, 10000); // Интервал проверки 10 секунд
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
