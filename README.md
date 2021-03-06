# Проект поиск сотрудников

[Демо проекта](https://nikbritoff.github.io/dashboard-app/)

## Описание

Происходит фильрация списка сотрудников при добавлении/удалении/очистике фильтров. Фильтры добавляются путём нажатия на навык сотрудника в правой части карточки сотрудника. Удаление отдельного фильтра просиходит при нажатии на крестик у фильтра в панели фильтров. Очистка при нажатии на кнопку "Clear".


### Требования

- В объекте правильной парой всегда считается ключ и его значение;
- Использование TypeScript обязательно;
- Хранение и обработку данных необходимо реализовать в Redux. Можно использовать любые побочные инструменты к нему. (В качестве задания со звездочкой - можно сохранять прогресс игры между сессиями браузера. Но если игра была закончена, то следующий запуск страницы начинается с новой игры);
- Стилизация свободная, главное учесть цвета кнопок указанные в задании;
- Ограничения по времени нет, поэтому рекомендуется сделать упор на качестве кода:)
- Результат принимается в любом удобном виде - codesandbox/репозиторий/архив.

### Исходные данные

В качестве исходных данных есть массив объектов:
  [
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
  ];
