import http from '../http-common';
class pacientesDataService {
	getAll() { 
		return http.get("/pacientes");
	}
	get(id) { 
		return http.get(`/pacientes/${id}`);
	}
	
	create(data) {
		return http.post("/pacientes", data);
	}
}
export default pacientesDataService;