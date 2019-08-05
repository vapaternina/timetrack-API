const router = require("express").Router();

const controller = require("./controller");

const teamsRouter = require("./../teams/routes");

/*
 *  /api/users/ POST - Creacion de usuario
 *  /api/users/:email/:password POST - Autenticación de usuario
 *  /api/users/:userId/profile GET - Obtener la informacion del usuario que se esta consultando
 *  /api/users/:userId/teams GET - Obtener todos los equipos a los cuales pertenece un usuario
 *  /api/users/:userId/projects GET - Obtener todos los proyectos a los cuales pertenece un usuario
 *  /api/users/:userId/tasks GET - Obtener todas las tareas que tiene asignado un usuario
 */

router.route("/").post(controller.signup);

router.route("/:email/:password").post(/*controller.verify*/);

router.route("/:userId/profile").get(/*controller.read*/);
router.use("/:userId/teams", teamsRouter);
router.route("/:userId/projects");
router.route("/:userId/tasks").get();

module.exports = router;
