import React, { useEffect, useState } from "react";
import styles from '../FormPage/index.module.scss';
import Display from '../../Components/Display';

export const FormData = () => {
  // State for form inputs
  const [formObj, setFormObj] = useState<{
    name: string;
    email: string;
    DOB: string;
    Mobile: string;
  }>({ name: "", email: "", DOB: "", Mobile: "" });

  const [formArray, setFormArray] = useState<
    { name: string; email: string; DOB: string; Mobile: string }[]
  >([]);

  // State for errors
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    DOB: string;
    Mobile: string;
  }>({ name: "", email: "", DOB: "", Mobile: "" });

  // Validation Functions
  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters long.";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    return "";
  };

  const validateDOB = (DOB: string) => {
    if (!DOB.trim()) return "Date of Birth is required.";
    // Additional checks for valid date can be added
    return "";
  };

  const validateMobile = (mobile: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile.trim()) return "Mobile number is required.";
    if (!mobileRegex.test(mobile)) return "Mobile number must be 10 digits.";
    return "";
  };

  // Validation handler
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "DOB":
        return validateDOB(value);
      case "Mobile":
        return validateMobile(value);
      default:
        return "";
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormObj((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(formObj.name),
      email: validateEmail(formObj.email),
      DOB: validateDOB(formObj.DOB),
      Mobile: validateMobile(formObj.Mobile),
    };
    setErrors(newErrors);

    // Check if there are any errors before submitting
    if (Object.values(newErrors).some((error) => error)) {
      alert("Please fix the errors before submitting.");
      return;
    }

    setFormArray((prev) => [...prev, formObj]);
    setFormObj({ name: "", email: "", DOB: "", Mobile: "" });
  };

  return (
    <div>
      <h1>Details Form</h1>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formObj.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <br />
        <div>
          <input
            className={styles.input}
            type="text"
            name="email"
            value={formObj.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <br />
        <div>
          <input
            className={styles.input}
            type="date"
            name="DOB"
            value={formObj.DOB}
            onChange={handleChange}
            placeholder="Enter Date of Birth"
            required
          />
          {errors.DOB && <span className={styles.error}>{errors.DOB}</span>}
        </div>
        <br />
        <div>
          <input
            className={styles.input}
            type="text"
            name="Mobile"
            value={formObj.Mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            required
          />
          {errors.Mobile && <span className={styles.error}>{errors.Mobile}</span>}
        </div>
        <br />
        <button className={styles.btn}>SUBMIT</button>
      </form>
      <Display array={formArray} />
    </div>
  );
};
