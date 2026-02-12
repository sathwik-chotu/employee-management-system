import axios from "axios";

const BASE_URL = "http://localhost:8888/api/v1";

export const getEmpList = () => axios.get(`${BASE_URL}/getEmpList`);
export const getEmpById = (id) => axios.get(`${BASE_URL}/getEmpById/${id}`);
export const getEmpByEphone = (phone) => axios.get(`${BASE_URL}/getEmpByEphone/${phone}`);
export const insertEmp = (employee) => axios.post(`${BASE_URL}/insertEmp`, employee);
export const updateEmp = (id, employee) => axios.put(`${BASE_URL}/updateEmp/${id}`, employee);
export const deleteEmp = (id) => axios.delete(`${BASE_URL}/deleteEmp/${id}`);
