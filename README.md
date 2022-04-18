### В проекте используется TypeScript

В этом ничего страшного нету, просто немного больше кода. Но это того стоит.

### Стилизация проекта. 

В папке ***theme*** есть двай файлика. Файл с декларацией и сама тема.
Просто добавляя свойство в тему, нужно добавлять тип в декларацию. По сути это просто 
дублирование, это важно для дальнейшей разработки.

### Разработка

В папке ***components*** я сделал компонент ***Test***.
Разработка стелей начинается прежде всего с ui (соответствующая папка находится в components)
Ты можешь импортировать компоненты ui (кнопки, инпуты) на страницу Test и смотреть как они выглядят

### Styled-components
Собственно говоря это обычные стили которые пишутся прямо в компонентах и могут динамически
изменятся в зависимости от параметров. Также в стилях доступна тема, которую можно изменять через redux

Я сделал один компонет Button для примера.

Думаю в этом нет ничего сложного.

### STORYBOOK

Разработку элементов ui можно вести в ***storybook***;

Для этого запустить ***yarn storybook***.

В открывшемся меню можно посмотреть как выглядят компоненты, и там же можно из стилить. Потом переносить это в 
компонент 

