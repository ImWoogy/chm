async function RunManager() {
  if (window.location.href !== window.location.origin + "/stream") {
    window.location.href = "/stream";
    await new Promise((r) => setTimeout(r, 500));
  }
  checkAndPlay();
  setInterval(checkAndPlay, 20000);
}

function checkAndPlay() {
  const player = document.getElementById("stream-live-event");
  if (player) {
    const playButton = document.querySelector(
      "button.ytp-large-play-button.ytp-button.ytp-large-play-button-red-bg"
    );
    if (playButton) {
      playButton.click();
      trackSpanChanges();
    }
  }
}

function trackSpanChanges() {
  // Locate the parent element with data-test-id="user-balance"
  const balanceElement = document.querySelector(
    '[data-test-id="user-balance"]'
  );

  if (balanceElement) {
    // Now find the span element within the balanceElement
    const spanElement = balanceElement.querySelector(
      "span.truncate.font-semibold"
    );

    if (spanElement) {
      let lastText = spanElement.innerText;
      let unchangedTime = 0; // Time in seconds without change

      // Check for changes in the span text every 10 seconds
      const checkInterval = setInterval(() => {
        const currentText = spanElement.innerText;

        if (currentText === lastText) {
          unchangedTime += 10; // Increment unchanged time

          if (unchangedTime >= 60) {
            console.log(
              "Текст не изменяется в течение 60 секунд, перезагружаем страницу."
            );
            clearInterval(checkInterval);
            window.location.reload(); // Reload the page
          }
        } else {
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
