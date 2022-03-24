import http from '../http-common';
class evolucionDataService {
	getAll() { 
		return http.get("/evolucion");
	}
	get(id) { 
		return http.get(`/evolucion/${id}`);
	}
	create(data) {
		return http.post("/evolucion", data);
	}
	delete(id){
		return http.delete(`/evolucion/${id}`);
	}
	update(id, data) { 
		return http.put(`/evolucion/${id}`, data);
	}
}
export default evolucionDataService;