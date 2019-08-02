const router = require('express').Router();

const users = require('./users/routes');

const teams = require('./teams/routes');

const projects = require('./projects/routes');

router.use('/users', users);

router.use('/teams', teams);

router.use('/projects', projects);

module.exports = router;
