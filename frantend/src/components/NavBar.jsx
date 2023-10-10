import React from 'react';
import {AppBar,Toolbar, styled } from '@mui/material';

import  {NavLink} from 'react-router-dom'

const Header = styled(AppBar)`
background:#ad3e45`

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px ;
text-decoration:none;
color: inherit;
text-decoration:none;
`
const NavBar = () => {
  return (
    <div>
        <Header position='static'>
        <Toolbar>
          
            <Tabs to='/'>CRUD APP</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <span style={{
  backgroundImage: "linear-gradient(45deg, yellow, blue)",
  padding: "10px 20px",
  borderRadius: "5px",
  display: "inline-block",
  marginLeft:'auto'
}}>
  <Tabs to='/AddUser' style={{ color: "white", textDecoration: "none" }}>
    Add User
  </Tabs>
</span>


        </Toolbar>
        </Header>

      
    </div>
  );
}

export default NavBar;
