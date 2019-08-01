const router = require("express").Router();

const users = require("./users/routes");

const teams = require('./teams/routes');


router.use("/users", users);

router.use("/teams",teams);



module.exports = router;
