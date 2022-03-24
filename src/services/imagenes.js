import http from '../http-common';
class imagenesDataService {
	getAll() { 
		return http.get("/imagenes");
	}
	get(id) { 
		return http.get(`/imagenes/${id}`);
	}
	create(data) {
		return http.post("/imagenes", data);
	}
	delete(id){
		return http.delete(`/imagenes/${id}`);
	}
	update(id, data) { 
		return http.put(`/imagenes/${id}`, data);
	}
}
export default imagenesDataService;