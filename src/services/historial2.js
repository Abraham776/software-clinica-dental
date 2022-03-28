import http from '../http-common';
class historial2DataService {
	getAll(id) { 
		return http.get(`/historial2/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/historial2/${id}`);
	}
	create(data) {
		return http.post("/historial2", data);
	}
	delete(id){
		return http.delete(`/historial2/${id}`);
	}
	update(id, data) { 
		return http.put(`/historial2/${id}`, data);
	}
}
export default historial2DataService;