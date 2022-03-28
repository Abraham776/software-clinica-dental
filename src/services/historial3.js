import http from '../http-common';
class historial3DataService {
	getAll(id) { 
		return http.get(`/historial3/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/historial3/${id}`);
	}
	create(data) {
		return http.post("/historial3", data);
	}
	delete(id){
		return http.delete(`/historial3/${id}`);
	}
	update(id, data) { 
		return http.put(`/historial3/${id}`, data);
	}
}
export default historial3DataService;