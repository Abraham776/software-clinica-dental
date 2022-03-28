import http from '../http-common';
class historial4DataService {
	getAll(id) { 
		return http.get(`/historial4/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/historial4/${id}`);
	}
	create(data) {
		return http.post("/historial4", data);
	}
	delete(id){
		return http.delete(`/historial4/${id}`);
	}
	update(id, data) { 
		return http.put(`/historial4/${id}`, data);
	}
}
export default historial4DataService;