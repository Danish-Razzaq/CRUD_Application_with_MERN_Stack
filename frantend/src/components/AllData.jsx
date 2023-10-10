import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import {styled} from "@mui/material";

import { deleteUser, getUsers } from "../Service/api";

const StyledTable = styled(Table)`
 width:90%;
 margin: 5%  auto 0px auto;
 } 
 `;
const THead = styled(TableRow)`
  background: #d66adb;
  & > th {
    color: #fff;
    font-size: 15px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

function UserTable() {
  const getAllUsers = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="top"
    height="100vh"
    bgcolor="#94e9d1" // Set your desired background color here
  >
    <TableContainer  sx={{width:1200, mt:5 } } component={Paper} bgcolor="#94e9d1">
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Actions</TableCell>
          </THead>
        </TableHead>
        <TableBody sx={{pb:5}}>
          {users.map((user, index) => (
            <TBody key={index}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
    </Box>
  );
}

export default UserTable;
