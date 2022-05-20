import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const AddPage = ({ employees, setEmployees, setIsAdding }) => {
  // Sava Input Data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  // Focus Input
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  // Add Button
  const handleAdd = (e) => {
    e.preventDefault();

    // Show Aleart If User Not Full All Inputs
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    // Sava Data On New Employee Object
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    // Show Aleart If User Add Success
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={handleAdd}>
      <h1 className="text-center py-5 text-black-50">Add Employee</h1>

      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        className="form-control"
        id="firstName"
        type="text"
        ref={textInput}
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        className="form-control"
        id="lastName"
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        className="form-control"
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="salary" className="form-label">
        Salary ($)
      </label>
      <input
        className="form-control"
        id="salary"
        type="number"
        name="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <label htmlFor="date" className="form-label">
        Date
      </label>
      <input
        className="form-control"
        id="date"
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="mt-4">
        <input className="btn btn-success" type="submit" value="Add" />
        <input
          className="btn btn-warning ms-2"
          type="button"
          value="Cancel"
          onClick={() => setIsAdding(false)}
        />
      </div>
    </form>
  );
};

export default AddPage;
