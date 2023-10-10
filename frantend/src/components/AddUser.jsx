import React, { useState } from 'react';
import { FormGroup, TextField, Button, Typography,FormControl, Box } from '@mui/material';
import styled from '@emotion/styled';
import { addUser } from '../Service/api';
import {useNavigate} from 'react-router-dom'


 const Container = styled(FormGroup)`
 width:50%;
 margin: 5%  auto 0px auto;
 } 
 `
 
 const MyForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
  });

  
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/all')
    // Handle form submission here, e.g., send data to the server
    // console.log(formData);
   await addUser(formData)
  };

  return (
    <Box
    display="flex"
    flexDirection="column"
    // alignItems="center"
    justifyContent="top"
    height="100vh"
    bgcolor="#94e9d1" // Set the background color to white
  >
    
    <form onSubmit={handleSubmit}>
      <Container style={{backgroundColor:"white" , padding:'40px', borderRadius:'10px' }}>
        <FormControl style={{gap:"20px"}}>
           <Typography variant="h4" gutterBottom>
        Add User
      </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" >
        Add User
      </Button>
        </FormControl>
        </Container>
    </form>
   </Box>
  );
};

export default MyForm;
