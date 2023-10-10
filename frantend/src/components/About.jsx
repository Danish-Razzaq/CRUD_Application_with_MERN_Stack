import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
} from '@mui/material';

function AboutPage() {
  const containerStyle = {
    flexGrow: 1,
    padding: '50px',
    shadow:'10px'

  };

  const paperStyle = {
    padding: '16px',
  };

  const listItemStyle = {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  };

 

  return (
     <div style={{backgroundColor:'pink' , height:'100vh'}}>
    <Container style={containerStyle}  >
      <Typography variant="h4" gutterBottom>
        About Our CRUD Application
      </Typography>
      <Paper style={paperStyle}>
        <Typography variant="body1" paragraph>
          Our CRUD (Create, Read, Update, Delete) application is designed to
          simplify data management for various tasks. Whether you need to track
          customer information, manage inventory, or organize tasks, our
          application has you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          Key Features:
        </Typography>
        <ul>
          <li>
            <strong>Create:</strong> Add new data entries easily, whether it's
            adding new products, customers, or tasks.
          </li>
          <li>
            <strong>Read:</strong> View and search for existing data entries
            quickly and efficiently.
          </li>
          <li>
            <strong>Update:</strong> Edit and update existing data with just a
            few clicks or taps.
          </li>
          <li>
            <strong>Delete:</strong> Remove unnecessary data entries to keep
            your records clean and organized.
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          Our goal is to provide a user-friendly and efficient solution for
          managing data, helping you save time and focus on what matters most to
          you or your organization.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our CRUD application. We are continually
          working to improve and enhance your experience.
        </Typography>
        <Typography variant="body1">
          If you have any questions or feedback, please feel free to contact us
          at support@example.com.
        </Typography>
      </Paper>
    </Container>
    </div>
  );
}

export default AboutPage;
