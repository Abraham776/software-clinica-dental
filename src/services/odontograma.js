import http from '../http-common';
class odontogramaDataService {
	getAll(id) { 
		return http.get(`/odontograma/paciente/${id}`);
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