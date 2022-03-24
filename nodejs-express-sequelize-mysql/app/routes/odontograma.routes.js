module.exports = app => {
	const odontograma = require("../controllers/odontograma.controller.js");
	var router = require("express").Router();
	
	router.post("/", odontograma.create);

	router.delete("/:id", odontograma.delete);

	router.put("/:id", odontograma.update);
	
	router.get("/", odontograma.findAll);
	router.get("/:id", odontograma.findOne);

	app.use('/api/odontograma', router);
};