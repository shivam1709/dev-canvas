import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'; // Import your external CSS file

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data); // You can replace this with your Firebase registration logic
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <div className="form-group">
          <label>First Name</label>
          <input {...register('firstName', { required: 'First name is required' })} />
          {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input {...register('lastName', { required: 'Last name is required' })} />
          {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="error-message">{errors.email.message || 'Invalid email'}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register('password', { required: 'Password is required', minLength: 6 })} />
          {errors.password && <span className="error-message">{errors.password.message || 'Password must be at least 6 characters'}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" {...register('confirmPassword', { validate: value => value === watch('password') || 'Passwords do not match' })} />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
        </div>
        <div className='buttons-container'>
          <div className='button-child'>
            <button type="submit" className="register-button">Register</button>
            <button className="google-register-button">
            <span className="google-icon"></span> Continue with Google
            </button>
          </div>
        </div>
      </form>

      {/* Add your Google registration button */}
    </div>
  );
}

export default Register;
