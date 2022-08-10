Запуск приложения:
На одном локальном хосте запускаем json-server командой "json-server --watch  src/data/db.json --port 3001"
Ни в коем случае не менять порт =)
Затем на второй консоли запускаем второй локальный хост с приложением, командой "npm start" 

В приложении реализовал весь требуемый функционал, в том числе и поиск контактов
Для асинхронных запросов к json-server использовал thunk middleware

Node: v14.17.0
Стек: typescript, react.js, router, redux, redux thunk, fake API json-server, scss
Резюме: https://hh.ru/resume/10206929ff0984c6100039ed1f637157647942