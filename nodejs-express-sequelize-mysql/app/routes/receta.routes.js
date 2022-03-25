module.exports = app => {
	const receta = require("../controllers/receta.controller.js");
	var router = require("express").Router();
	
	router.post("/", receta.create);

	router.delete("/:id", receta.delete);

	router.put("/:id", receta.update);
	
	router.get("/paciente/:id", receta.findAll);
	router.get("/:id", receta.findOne);

	app.use('/api/receta', router);
};
