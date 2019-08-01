const router = require("express").Router();

const controller = require("./controller");

/*
 *  /api/users/ POST - Creacion de usuario
 *  /api/users/:email/:password POST - Autenticación de usuario
 *  /api/users/:userId/profile GET - Obtener la informacion del usuario que se esta consultando
 *  /api/users/:userId/teams GET - Obtener todos los equipos a los cuales pertenece un usuario
 *  /api/users/:userId/projects GET - Obtener todos los proyectos a los cuales pertenece un usuario
 *  /api/users/:userId/tasks GET - Obtener todas las tareas que tiene asignado un usuario
 */

router.route("/").post(controller.all);

router.route("/:email/:password").post();

router.route("/:userId/profile").get();
router.route("/:userId/teams").get();
router.route("/:userId/projects").get();
router.route("/:userId/tasks").get();

module.exports = router;
