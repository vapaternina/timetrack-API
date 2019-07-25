[TOC]

#Time tracking API

API para un servicio de manejo de proyectos y contabilizacion de horas de trabajo para la empresa BERA Group

### Technologies

- Node
- Express
- MongoDB

### Instalation

`git clone https://github.com/bera-group/timetrack-API`

`npm install`

Create a `default.json` file in the config folder, example:

```
{
  "mongoURI": "mongodb+srv://<user>:<password>@cluster0-	xj7vb.mongodb.net/test?retryWrites=true&w=majority"
}
```

### Run

- Development: `npm run server`
- Production: `npm start`
