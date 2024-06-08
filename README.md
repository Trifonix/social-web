```bash
$ git clone https://github.com/Trifonix/social-web.git
$ cd social-web
$ npm i
Запустить БД
$ npm run start || npm run start:dev
http://localhost:4444/
```

## Создание таблицы в БД

```bash
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

## Проверка регистрации-аутентификации

```bash
curl -X POST http://localhost:4444/users/signup \
-H "Content-Type: application/json" \
-d '{"username": "Ivan", "email": "nikanorov@gmail.com", "password": "superPuperPass"}'
```

```bash
curl -X POST http://localhost:4444/users/login \
-H "Content-Type: application/json" \
-d '{"email": "nikanorov@gmail.com", "password": "superPuperPass"}'
```
