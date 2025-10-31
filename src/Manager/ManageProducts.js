import React from 'react';

const ManageProducts = () => {
  return (
    <div>
      <h1>Manage Eyewear Products</h1>

      <div>
        <button>Add Product</button>
        <button>Logout</button>
      </div>

      <input type="text" placeholder="Search by product name" />

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Category</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ManageProducts;
