import React, { useState } from 'react';

const CreateProduct = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    newErrors.productName = 'Product name is required';
    newErrors.description = 'Description is required';
    newErrors.brand = 'Brand is required';
    newErrors.price = 'Price must be a positive number';
    newErrors.category = 'Category is required';
    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Create New Eyewear Product</h1>
      <button>Back</button>

      <form>
        <input placeholder="Product Name" />
        {errors.productName && <p>{errors.productName}</p>}

        <input placeholder="Description" />
        {errors.description && <p>{errors.description}</p>}

        <input placeholder="Brand" />
        {errors.brand && <p>{errors.brand}</p>}

        <input placeholder="Price" />
        {errors.price && <p>{errors.price}</p>}

        <input placeholder="Category" />
        {errors.category && <p>{errors.category}</p>}

        <button type="button" onClick={handleSubmit}>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
