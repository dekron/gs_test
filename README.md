# Тестовое задание на Angular + WebSocket

## Задача

Приложение должно быть реализовано с использованием фреймворка Angular версий 6 или 7. 
Допускается использование дополнительных библиотек для реализации отдельной функциональности (в частности, для отображения графиков и таблиц). Авторизация не требуется. Поддержка https не требуется.

Приложение должно состоять из двух страниц
1. Страница просмотра
2. Страница администрирования

### Страница просмотра

Страница просмотра должна отображать активную структуру данных

Структура данных состоит из следующих параметров:
1. Активность - активной может быть только одна структура
2. Шаблон - визуальное расположение блоков, шаблоны должны быть подготовлены разработчиком минимум 2
3. Блоки - должны подставляться в шаблон в позиции в порядке указанном при настройке структуры, типы блоков должны быть подготовлены разработчиком заранее (блок с числом "Значение", блок с графиком с накоплением данных "Timestamp - значение”, блок с таблицей с накоплением данных "Timestamp - значение”)

Блоки должны подключаться к источникам данным и отображать получаемую из них информацию в указаном типе блока.

Источник данных блока должны быть подготовлены заранее минимум 3.
Источником данных должно выступать какое-нибудь вебсокет соединение (например http://websocket.org/echo.html). 
Для генерации значений должны быть сделаны генераторы случайных чисел для каждого источника, это может быть массив значений или генерация на лету. 

### Страница администрирования

Страница администрирования состоит из списка структур.
Должна быть возмоность добавлять, удалять, активировать, декативировать и редактировать структуры

При редактировании или создании структуры должна быть форма редактирования которая состоит из следующих элементов

1. Наименование - строка
2. Шаблон - список
3. Группа блоков (мин 1, макс 3)
    1. Тип блока - список
    2. Источник данных блока - список


## Запуск проекта

``` bash
# клонируем репозиторий
git clone https://github.com/dekron/gs_test.git

# переходим в папку с проектом
cd gs_test

# устанавливаем зависимости
npm install

# запускаем сервер для разработки по адресу localhost:8080
npm run dev

# собрать проект в папку dist
npm run build
```
