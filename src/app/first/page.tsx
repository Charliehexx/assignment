'use client'
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation'
interface FormValues {
  firstName: string;
  phoneNumber:number;
  email: string;
}

const initialFormValues: FormValues = {
  firstName: '',
  phoneNumber:23424,
  email: '',
};

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const router =useRouter()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
     localStorage.setItem('formValues', JSON.stringify(formValues));
    console.log(formValues);

    setFormValues(initialFormValues);
     router.push('/second');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="number"
        name="number"
        value={formValues.phoneNumber}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
