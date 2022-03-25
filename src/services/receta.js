import http from '../http-common';
class recetaDataService {
	getAll(id) { 
		return http.get(`/receta/paciente/${id}`);
	}
	get(id) { 
		return http.get(`/receta/${id}`);
	}
	create(data) {
		return http.post("/receta", data);
	}
	delete(id){
		return http.delete(`/receta/${id}`);
	}
	update(id, data) { 
		return http.put(`/receta/${id}`, data);
	}
}
export default recetaDataService;