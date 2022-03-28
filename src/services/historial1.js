import http from '../http-common';
class historial1DataService {
	getAll(id) { 
		return http.get(`/historial1/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/historial1/${id}`);
	}
	create(data) {
		return http.post("/historial1", data);
	}
	delete(id){
		return http.delete(`/historial1/${id}`);
	}
	update(id, data) { 
		return http.put(`/historial1/${id}`, data);
	}
}
export default historial1DataService;