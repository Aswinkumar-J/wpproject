import React, { useState } from 'react';

const Register = () => {
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    const newErrors = {};
    newErrors.firstName = 'First Name is required';
    newErrors.lastName = 'Last Name is required';
    newErrors.email = 'Email is required';
    newErrors.mobile = 'Mobile Number is required';
    newErrors.password = 'Password is required';
    newErrors.confirmPassword = 'Confirm Password is required';
    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Create Your Account</h1>

      <input placeholder="First Name" />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input placeholder="Last Name" />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <input placeholder="Mobile Number" />
      {errors.mobile && <p>{errors.mobile}</p>}

      <input placeholder="Password" type="password" />
      {errors.password && <p>{errors.password}</p>}

      <input placeholder="Confirm Password" type="password" />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
