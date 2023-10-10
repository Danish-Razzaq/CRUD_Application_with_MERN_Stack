import React, { useState , useEffect } from 'react';
import { FormGroup, TextField, Button, Typography,FormControl, Box } from '@mui/material';
import {styled} from '@mui/material';
import { editUser, getUser } from '../Service/api'
import {useNavigate , useParams} from 'react-router-dom'



 const Container = styled(FormGroup)`
 width:50%;
 margin: 5%  auto 0px auto;
 } 
 `
 
 const EditUser = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
  });

 //for calling the API

 useEffect(() => {
   loadUserDetail()
 }, []);

 const {id} = useParams(); 

const loadUserDetail = async()=>{
const res = await getUser(id)
setFormData(res.data)

}

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const navigate = useNavigate(id)

  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/all')
    // Handle form submission here, e.g., send data to the server
    // console.log(formData);
   await editUser(formData , id)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="top"
        height="100vh"
        bgcolor="#94e9d1" // Set the background color to white
      >
        <Container  style={{backgroundColor:"white" , padding:'40px', borderRadius:'10px' }}>
          <FormControl style={{ gap: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Edit User
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
            <Button type="submit" variant="contained" color="primary">
              Update User
            </Button>
          </FormControl>
        </Container>
      </Box>
    </form>
  );
};

export default EditUser;
