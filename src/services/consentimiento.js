import http from '../http-common';
class consentimientoDataService {
	getAll(id) { 
		return http.get(`/consentimiento/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/consentimiento/${id}`);
	}
	create(data) {
		return http.post("/consentimiento", data);
	}
	delete(id){
		return http.delete(`/consentimiento/${id}`);
	}
	update(id, data) { 
		return http.put(`/consentimiento/${id}`, data);
	}
}
export default consentimientoDataService;