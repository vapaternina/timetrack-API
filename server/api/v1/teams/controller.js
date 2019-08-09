const teamModel = require("../teams/model");
exports.all = (req, res, next) => {
  res.send("Work team routes");
  console.log("Work team routes");
};

//crear equipo de trabajo
exports.create = async (req, res, next) => {
  const body = req.body;
  const newTeam = new teamModel(body);
  console.log(newTeam);
  //console.log(body);
  res.json(req.body);
  await newTeam.save().then(console.log("Equipo creado"));
};
//añadir uno o mas miembros al equipo de trabajo
exports.addmembers = async (req, res, next) => {
  const body = req.body;
  const teamId = body.teamId;
  const newMembers = body.newMembers;
  //console.log(newMembers);
  await teamModel.findById({ _id: teamId }, function (err, user) {
    if (err) return console.error(err);
    if (user != null) {
      const target = user;
      //console.log(user);
      newMembers.forEach(element => {
        if (!target.members.includes(element)) {
          target.members.push(element);
        }
        else {
          console.log("miembro con id: " + element + " ya existe");
        }
      });
      target.save();
      res.json(target);
    } else {
      res.json("no existe equipo de trabajo con este id");
    }
  });

};

//eliminar miembros del equipo de trabajo
exports.deletemembers = async (req, res, next) => {
  const body = req.body;
  const teamId = body.teamId;
  const targetMembers = body.newMembers;
  await teamModel.updateMany({ _id: teamId }, { $pullAll: { members: targetMembers } } , function (err, user) {
    if (err) return console.error(err);
    console.log(user.ok);
    res.send("Miembro(s) eliminados correctamente");
  });
};

exports.getmembers = async(req, res, next)=>{
  const teamId= req.params.teamid;
  const team = await teamModel.findById({_id: teamId}, function (err, user){
    if (err) return res.send("not members found");
    res.send(user.members);
  });
}

exports.getprojects = async(req, res, next)=>{
  const teamId= req.params.teamid;
  const team = await teamModel.findById({_id: teamId}, function (err, user){
    if (err) return res.send("not projects found");
    res.send(user.projects);
  });
}