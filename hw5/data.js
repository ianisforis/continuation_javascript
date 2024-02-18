// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.
let apiData = {};

function fetchDataFromOpenLibrary() {
    const isbn = '0451526538';
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            apiData = data;
            console.log(apiData);
        });
}


