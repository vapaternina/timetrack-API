# Time tracking API

API para un servicio de manejo de proyectos y contabilizacion de horas de trabajo para la empresa BERA Group

### Technologies

- Node
- Express
- MongoDB

### Instalation

`git clone https://github.com/bera-group/timetrack-API`

`npm install`

Create a `.env` file in the config folder, example:

```
SERVER_IP=127.0.0.1
SERVER_PORT=3000
DB_URI=mongodb+srv://<user>:<password>@cluster0-	xj7vb.mongodb.net/test?retryWrites=true&w=majority
```

### Run

- Development: `npm run server`
- Production: `npm start`
