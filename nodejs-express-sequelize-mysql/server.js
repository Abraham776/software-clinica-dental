const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/pacientes.routes")(app);
require("./app/routes/pagos.routes")(app);
require("./app/routes/citas.routes")(app);
require("./app/routes/doctor.routes")(app);
require("./app/routes/tratamiento.routes")(app);
require("./app/routes/evolucion.routes")(app);
require("./app/routes/imagenes.routes")(app);
require("./app/routes/odontograma.routes")(app);
require("./app/routes/receta.routes")(app);
require("./app/routes/consentimiento.routes")(app);
require("./app/routes/historial1.routes")(app);
require("./app/routes/historial2.routes")(app);
require("./app/routes/historial3.routes")(app);
require("./app/routes/historial4.routes")(app);
require("./app/routes/historial5.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});