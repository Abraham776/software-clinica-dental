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
	delete(id){
		return http.delete(`/pacientes/${id}`);
	}
	update(id, data) { 
		return http.put(`/pacientes/${id}`, data);
	}
}
export default pacientesDataService;