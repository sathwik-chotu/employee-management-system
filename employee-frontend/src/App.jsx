import { useState, useEffect } from "react";
import {
  getEmpList,
  getEmpById,
  getEmpByEphone,
  insertEmp,
  updateEmp,
  deleteEmp
} from "./api/employeeApi";

function App() {
  // Form states
  const [ename, setEname] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [ephone, setEphone] = useState("");
  const [esal, setEsal] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Employee list
  const [employees, setEmployees] = useState([]);

  // Search
  const [searchId, setSearchId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Fetch all employees
  const fetchEmployees = () => {
    getEmpList()
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add or Update employee
  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = {
      ename,
      age: Number(age),
      city,
      ephone: Number(ephone),
      esal: Number(esal)
    };

    if (editingId) {
      updateEmp(editingId, emp)
        .then(() => {
          fetchEmployees();
          resetForm();
        })
        .catch(err => console.error(err));
    } else {
      insertEmp(emp)
        .then(() => {
          fetchEmployees();
          resetForm();
        })
        .catch(err => console.error(err));
    }
  };

  const handleEdit = (emp) => {
    setEname(emp.ename);
    setAge(emp.age);
    setCity(emp.city);
    setEphone(emp.ephone);
    setEsal(emp.esal);
    setEditingId(emp.eid);
  };

  const handleDelete = (id) => {
    deleteEmp(id)
      .then(() => fetchEmployees())
      .catch(err => console.error(err));
  };

  const resetForm = () => {
    setEname("");
    setAge("");
    setCity("");
    setEphone("");
    setEsal("");
    setEditingId(null);
  };

  // Search by ID
  const handleSearchById = () => {
    if (!searchId) return alert("Enter Employee ID");
    getEmpById(searchId)
      .then(res => setSearchResult(res.data))
      .catch(err => {
        console.error(err);
        setSearchResult(null);
        alert("Employee not found");
      });
  };

  // Search by Phone
  const handleSearchByPhone = () => {
    if (!searchPhone) return alert("Enter Phone number");
    getEmpByEphone(searchPhone)
      .then(res => setSearchResult(res.data))
      .catch(err => {
        console.error(err);
        setSearchResult(null);
        alert("Employee not found");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Management</h1>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={ename}
          onChange={e => setEname(e.target.value)}
          required
        />
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
        <input
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
        <input
          placeholder="Phone"
          type="number"
          value={ephone}
          onChange={e => setEphone(e.target.value)}
          required
        />
        <input
          placeholder="Salary"
          type="number"
          value={esal}
          onChange={e => setEsal(e.target.value)}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"} Employee</button>
        {editingId && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      {/* Search Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Search Employee</h3>
        <input
          placeholder="Search by ID"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
        />
        <button onClick={handleSearchById}>Search</button>

        <input
          placeholder="Search by Phone"
          value={searchPhone}
          onChange={e => setSearchPhone(e.target.value)}
        />
        <button onClick={handleSearchByPhone}>Search</button>

        {searchResult && (
          <div style={{ marginTop: "10px", border: "1px solid #ccc", padding: "10px" }}>
            <h4>Search Result:</h4>
            <p>ID: {searchResult.eid}</p>
            <p>Name: {searchResult.ename}</p>
            <p>Age: {searchResult.age}</p>
            <p>City: {searchResult.city}</p>
            <p>Phone: {searchResult.ephone}</p>
            <p>Salary: {searchResult.esal}</p>
          </div>
        )}
      </div>

      {/* Employee List */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>City</th><th>Phone</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.eid}>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
              <td>{emp.ephone}</td>
              <td>{emp.esal}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.eid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
