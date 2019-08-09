const { Router } = require('express');
const router = Router();

const controller = require("./controller");


/*
 *  /api/teams/ POST - Creacion equipos 
    Se envia el body con el siguiente formato
    {
      "leader": "id lider",
      "members": ["id1", "id2", ... , id_n],
      "task": ["task1", "task2", "task_n"],
      "projects": ["projec1", "project2", "project_n"]
    }
 *  /api/teams/add POST - añadir miembros (id_miembros *dentro arreglo*) a un equipo (id_equipo)  todo enviado en el body
    formato body
    {
      "teamId": "id",
      "newMembers": ["id1", "id2", "id_n"]
    }
 *  /api/teams/del PUT - eliminar miembros (id_miembros *dentro arreglo*) de un equipo (id_equipo) todo enviado en el body
    formato body
    {
      "teamId": "id",
      "targetMembers": ["id1", "id2", "id_n"]
    }
 *  /api/teams/:teamid/members GET - Obtener todos los miembros pertenecientes a un equipo
 *  /api/users/:teamid/projects GET - Obtener todos los proyectos pertenecientes a un equipo
 *  /api/users/:teamid/tasks GET - Obtener todas las tareas pertenecientes a un equipo
 */

router.route('/')
  .get(controller.all)
  .post(controller.create);

router.route("/add").post(controller.addmembers);
router.route("/del").put(controller.deletemembers);
router.route("/:teamid/members").get(controller.getmembers);
router.route("/:teamid/projects").get(controller.getprojects);
router.route("/:teamid/tasks").get(controller.gettasks);
/*


router.get(("/"),(req,res)=>{
  console.log("ruta raiz equipos");
  res.send("ruta raiz equipos");
});

router.get(("/:id"),(req,res)=>{
  res.send(req.params);
  console.log(req.params);
});

router.post(("/"),(req,res)=>{  
  console.log(req.body)
  res.json(req.body);
});
*/
module.exports = router;