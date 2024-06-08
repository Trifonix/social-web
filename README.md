```bash
$ git clone https://github.com/Trifonix/social-web.git
$ cd social-web
$ npm i
Запустить БД
$ npm run start || npm run start:dev
http://localhost:4444/
```

## Проверка регистрации-аутентификации

```bash
curl -X POST http://localhost:4444/users/signup \
-H "Content-Type: application/json" \
-d '{"username": "Ivan", "email": "nikanorov@gmail.com", "password": "superPuperPass"}'

curl -X POST http://localhost:4444/users/signin \
-H "Content-Type: application/json" \
-d '{"email": "nikanorov@gmail.com", "password": "superPuperPass"}'
```
