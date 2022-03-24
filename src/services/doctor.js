import http from '../http-common';
class doctorDataService {
	getAll() { 
		return http.get("/doctor");
	}
	create(data) {
		return http.post("/doctor", data);
	}
	delete(id){
		return http.delete(`/doctor/${id}`);
	}
}
export default doctorDataService;