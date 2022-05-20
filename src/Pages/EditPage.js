import React, { useState } from "react";
import Swal from "sweetalert2";

const EditPage = ({
  employees,
  selectedEmployee,
  setEmployees,
  setIsEditing,
}) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  // Handle Update
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={handleUpdate}>
      <h1 className="text-center py-5 text-black-50">Edit Employee</h1>

      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        className="form-control"
        id="firstName"
        type="text"
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
        <input className="btn btn-success" type="submit" value="Update" />
        <input
          className="btn btn-warning ms-2"
          type="button"
          value="Cancel"
          onClick={() => setIsEditing(false)}
        />
      </div>
    </form>
  );
};

export default EditPage;
