import axios from 'axios'

const URL = 'http://localhost:4000'; // Use http:// for a local server

export const addUser=async (data)=>{
    try {
      return  await  axios.post(`${URL}/add`,data);
        
    } catch (error) {
        console.log('Error While calling add User Api',error);
    }

}

 //For Get All users Data
export const getUsers = async()=>{
  try {
       return  await axios.get(`${URL}/all`)
      } catch (error) {
        console.log('Error While calling add Get User Api',error);
    }
}

//just for single data Getting
export const getUser = async(id)=>{
  try {
       return  await axios.get(`${URL}/${id}`)
      } catch (error) {
        console.log('Error While calling add Get User Api',error);
    }
}

//update data
export const editUser = async(user, id)=>{
  try {
       return  await axios.put(`${URL}/${id}`,user)
      } catch (error) {
        console.log('Error While calling add Edit User Api',error);
    }
}
//Delete user data
export const deleteUser = async(id)=>{
  try {
       return  await axios.delete(`${URL}/${id}`)
      } catch (error) {
        console.log('Error While Delete User Api',error);
    }
}


