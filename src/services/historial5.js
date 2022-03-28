import http from '../http-common';
class historial5DataService {
	getAll(id) { 
		return http.get(`/historial5/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/historial5/${id}`);
	}
	create(data) {
		return http.post("/historial5", data);
	}
	delete(id){
		return http.delete(`/historial5/${id}`);
	}
	update(id, data) { 
		return http.put(`/historial5/${id}`, data);
	}
}
export default historial5DataService;