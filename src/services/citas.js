import http from '../http-common';
class citasDataService {
	getAll() { 
		return http.get("/citas");
	}
	get(id) { 
		return http.get(`/citas/${id}`);
	}
	create(data) {
		return http.post("/citas", data);
	}
	delete(id){
		return http.delete(`/citas/${id}`);
	}
	update(id, data) { 
		return http.put(`/citas/${id}`, data);
	}
}
export default citasDataService;