module.exports = app => {
	const imagenes = require("../controllers/imagenes.controller.js");
	var router = require("express").Router();
	
	router.post("/", imagenes.create);

	router.delete("/:id", imagenes.delete);

	router.put("/:id", imagenes.update);
	
	router.get("/", imagenes.findAll);
	router.get("/:id", imagenes.findOne);

	app.use('/api/imagenes', router);
};
