import http from '../http-common';
class doctorDataService {
	getAll() { 
		return http.get("/doctor");
	}
	get(id) { 
		return http.get(`/doctor/${id}`);
	}
	create(data) {
		return http.post("/doctor", data);
	}
	delete(id){
		return http.delete(`/doctor/${id}`);
	}
}
export default doctorDataService;