import http from '../http-common';
class odontogramaDataService {
	getAll() { 
		return http.get("/odontograma");
	}
	get(id) { 
		return http.get(`/odontograma/${id}`);
	}
	create(data) {
		return http.post("/odontograma", data);
	}
	delete(id){
		return http.delete(`/odontograma/${id}`);
	}
	update(id, data) { 
		return http.put(`/odontograma/${id}`, data);
	}
}
export default odontogramaDataService;