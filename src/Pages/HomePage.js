import React, { useState } from "react";

// Import All Data
import { employeesData } from "../Data/Data";

// Import Sweetalert
import Swal from "sweetalert2";

// Import Components
import Header from "../Components/Header";
import List from "../Components/List";

// Import Pages
import AddPage from "./AddPage";
import EditPage from "./EditPage";

const HomePage = () => {
  // Save All Employees Data
  const [employees, setEmployees] = useState(employeesData);

  // Selected Employees On Click Edit Button
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Edit & Add Button
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Handle Edit Function
  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  // Handle Delete Function
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="container-lg">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {/* == Adding == */}
      {isAdding && (
        <AddPage
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}

      {/* == Editing == */}
      {isEditing && (
        <EditPage
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default HomePage;
