import http from '../http-common';
class tratamientoDataService {
	getAll() { 
		return http.get("/tratamiento");
	}
	get(id) { 
		return http.get(`/tratamiento/${id}`);
	}
	create(data) {
		return http.post("/tratamiento", data);
	}
	delete(id){
		return http.delete(`/tratamiento/${id}`);
	}
	update(id, data) { 
		return http.put(`/tratamiento/${id}`, data);
	}
}
export default tratamientoDataService;