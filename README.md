# Solid MVVM API

## Require Software

- Node.js
- MongoDB

## or

    -Docker coming soon!!!

## API Documentation

API for user registration with JWT authentication for route protection, entering user stories.

Managing MongoDB database

### Usage:

- First, create a folder for your project and navigate to it:
  - mkdir solid-mvvm-api
  - cd solid-mvvm-api
- Initialize the project node.js
  - npm init -y

### Installs required dependencies

    - npm install express mongoose body-parser
    - npm install --save-dev typescript ts-node @types/node @types/express
    - npm install express mongoose bcryptjs jsonwebtoken
    - npm install

### Star Server

    - ts-node src/app.ts

### TsConfig.json

    ```
    {
        "compilerOptions": {
            "target": "ES6",
            "module": "commonjs",
            "outDir": "./dist",
            "rootDir": "./src",
            "strict": true,
            "esModuleInterop": true
        }
    }
    ```

## MVVM

    Model: Representa los datos y la lógica de negocio.
    View: Representa la interfaz de usuario.
    ViewModel: Actúa como un intermediario entre el Model y la View.

### Structure

    solid-mvvm-api/
    ├── src/
    │ ├── controllers/
    │ │ ├── authController.ts
    │ │ ├── storyController.ts
    │ │ └── userController.ts
    │ ├── models/
    │ │ ├── story.ts
    │ │ └── user.ts
    │ ├── repositories/
    │ │ ├── storyRepository.ts
    │ │ └── userRepository.ts
    │ ├── services/
    │ │ ├── authService.ts
    │ │ ├── storyService.ts
    │ │ └── userService.ts
    │ ├── views/
    │ │ └── viewModel.ts
    │ ├── middlewares/
    │ │ └── authMiddleware.ts
    │ ├── app.ts
    │ └── routes.ts
    ├── tsconfig.json
    └── package.json

## Principios SOLID

- S: Responsabilidad Única
- O: Abierto/Cerrado
- L: Sustitución de Liskov
- I: Segregación de Interfaces
- D: Inversión de Dependencias

# Endpoints:

## Users

### New User

- URL: /api/register
- Method: POST
- Body :
  ```
  {
      "name":"Juan",
      "username":"Pablo",
      "email":"pedro@pedro.co",
      "password":"1234567"
  }
  ```

### Login User

- URL: /api/login
- Method: POST
- Body :
  ```
  {
      "username":"Pgutisga",
      "password":"1234567"
  }
  ```
  ### Return
  ```
  {
      "token":"######"
  }
  ```

### Get User List

- URL: /api/users
- Method: GET
- Header:
  ```
      Authorization: token
  ```
  ### Return
  ```
  {
      "_id":"66ba5501c6a5290a737ddce4",
      "name":"Juan P\u00e9rez",
      "email":"juan.perez@example.com",
      "__v":0
  }
  ```

### Id user

- URL: /api/userst
- Method: POST
- Header:
  ```
      Authorization: token
  ```
- Body:
  ```
      userId: userId
  ```
  ```
  {
      "_id":"66ba77aa55dc1f6f3b62eb48",
      "name":"JuanPaga",
      "username":"Pgutisga",
      "email":"pedro@pedro.comuga",
      "password":"####",
      "__v":0
  }
  ```

## Story

### New Story

- URL: /api/stories
- Method: POST
- Header:
  ```
      Authorization: token
  ```
- Body:
  ```
  {
      "title": "My First Story",
      "content": "New Story Node.js.",
      "userId": "_id"
  }
  ```

### Get Stories by User ID

- URL: /stories/user
- Method: POST
- Header:
  ```
  Authorization: token
  ```
- Body:
  ```
  {
      "userId": "_id"
  }
  ```

### Get Stories by Story ID

- URL: /api/stories/story
- Método: POST
- Header:
  ```
  Authorization: token
  ```
- Body:
  ```
  {
      "_id":"66bb557fde17b55cc4862df1",
      "userId":"66ba77aa55dc1f6f3b62eb48"
  }
  ```

### Edit Story by ID

- URL: /api/stories/story/edit
- Método: POST
- Header:
  ```
  Authorization: token
  ```
- Body:
  ```
  {
      "title":"Julio",
      "content":"Domingos",
      "userId":"66ba77aa55dc1f6f3b62eb48",
      "_id":"66bb557fde17b55cc4862df1"
  }
  ```

### Delete Story by ID

- URL: /api/stories/story/delete
- Método: POST
- Header:
  ```
  Authorization: token
  ```
- Body:

  ```
  {
      "_id":"idStory"
  }
  ```

- @version 1.0.0
- @author [JuanPGutiDev]
- @email [juanpgutidev@gmail.com]
