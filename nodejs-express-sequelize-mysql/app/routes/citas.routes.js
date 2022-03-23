module.exports = app => {
	const cita = require("../controllers/citas.controller.js");
	var router = require("express").Router();
	
	router.post("/", cita.create);

	router.delete("/:id", cita.delete);

	router.put("/:id", cita.update);
	
	router.get("/", cita.findAll);
	router.get("/:id", cita.findOne);

	app.use('/api/citas', router);
};
