
Нельзя редактировать существующие файлы, кроме stream-factory.ts, можно добавлять новые.

`yarn install`

запуск тестов

`yarn test`

## задача:

1. вернуть из класса StreamFactory пять разных реализаций IStream:

`createFirstStream()`:<br>
запись и чтение из файла<br>
`createSecondStream()`:<br>
приводит каждый второй символ к верхнему регистру и записывает в файл<br>
читает из файла, затем меняет регистр каждому символу<br>
`createThirdStream()`:<br>
сортирует символы в строке и записывает в файл<br>
читает из файла и перемешивает символы<br>
`createFourthStream()`:<br>
приводит каждый второй символ к верхнему регистру, сортирует и записывает в файл<br>
читает из файла перемешивает и меняет регистр каждому символу<br>
`createFifthStream()`:<br>
сортирует, приводит каждый второй символ к верхнему регистру и записывает в файл<br>
читает из файла меняет регистр каждому символу и перемешивает

2. найти недостатки в тестах