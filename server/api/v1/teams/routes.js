const { Router } = require('express');
const router = Router();

const controller = require("./controller");


router.route('/')
  .get(controller.all)
  .post(controller.create);

router.route("/add").post(controller.addmembers);
router.route("/del").put(controller.deletemembers)
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