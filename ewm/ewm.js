// Функция Test, которую мы будем вызывать из основного скрипта
function Test() {
    console.log('Функция Test успешно вызвана из удаленного скрипта!');
}

// Можно также определить другие функции или переменные, если нужно
function anotherFunction() {
    console.log('Это еще одна функция из удаленного скрипта.');
}

// Экспортируем функцию Test, если модульная система поддерживается (например, CommonJS или ES6 модули)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        Test: Test
    };
} else {
    // Для браузера добавляем функцию Test в глобальный объект window
    window.Test = Test;
}
