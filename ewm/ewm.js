// Функция RunManager, которую мы будем вызывать из основного скрипта
function RunManager() {
    console.log('Функция RunManager успешно вызвана из удаленного скрипта!');
    // Изменение адреса страницы
    window.location.href = '/stream';
}

// Можно также определить другие функции или переменные, если нужно
function anotherFunction() {
    console.log('Это еще одна функция из удаленного скрипта.');
}

// Экспортируем функцию RunManager, если модульная система поддерживается (например, CommonJS или ES6 модули)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        RunManager: RunManager
    };
} else {
    // Для браузера добавляем функцию RunManager в глобальный объект window
    window.RunManager = RunManager;
}
