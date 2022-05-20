import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <>
      <h1 className="text-center py-4 text-black-50">Management Software</h1>

      <button
        className="btn btn-success d-block m-auto mb-4"
        onClick={() => setIsAdding(true)}
      >
        Add New User
      </button>
    </>
  );
};

export default Header;
