import http from '../http-common';
class pagosDataService {
	getAll() { 
		return http.get("/pagos");
	}
	get(id) { 
		return http.get(`/pagos/${id}`);
	}
	create(data) {
		return http.post("/pagos", data);
	}
	delete(id){
		return http.delete(`/pagos/${id}`);
	}
	update(id, data) { 
		return http.put(`/pagos/${id}`, data);
	}
}
export default pagosDataService;