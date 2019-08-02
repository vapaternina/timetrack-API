const router = require('express').Router();

const controller = require('./controller');

/**
 * /api/projects/ POST Creación de proyecto
 * /api/projects/:projectId/tasks GET Consultar tareas del proyecto
 * /api/projects/:projectId/report GET Consultar/generar reporte del proyecto
 * /api/projects/:projectId/members GET Consultar miembros del proyecto
 */

router.route('/').post(controller.all);

router.route('/:projectId/tasks').get();
router.route('/:projectId/report').get();
router.route('/:projectId/members').get();

module.exports = router;
