import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { Link, useNavigate  } from 'react-router-dom';

const card = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  flexDirection: 'column',
  height: "33vh",
  margin: "30px",
  background: "#3FA2F6",
  color: "white",
  padding:"20px",
  '&:hover': { backgroundColor: '#3FA2DF' }
}
const HomePage = () => {

  const navigate = useNavigate();

  const goToAccount = () => {
    navigate('/Accounts');
  };
 
  const goToAdd = () => {
    navigate('/add');
  };
 
  const goToUser = () => {
    navigate('/Users');
  };
 
  return (
    <div >
      <Grid container sx={{height: "80vh", display: 'flex',justifyContent: 'center',alignItems: 'center',
            height: '100vh',
            backgroundColor: '#CFFCE8',}}>
        <Button item sx={{ width : "33%", height: "auto" }} onClick={goToAccount}>
          <Card sx={card}>
            <Typography gutterBottom variant="h5" component="div">
              Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get All the Iteam List of Accounts
            </Typography>
          </Card>
        </Button>
        <Button item  sx={{ width : "33%", height: "auto", }} onClick={goToUser}>
            <Card sx={card}>
              <Typography gutterBottom variant="h5" component="div">
                User
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get All the Iteam List of Users
              </Typography>
            </Card>
        </Button>
        <Button item sx={{ width : "33%", height: "auto", }} onClick={goToAdd}>
            <Card sx={card}>
              <Typography gutterBottom variant="h5" component="div">
                Add Account/user
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add Iteam List for Account/user
              </Typography>
            </Card>
        </Button>
      </Grid>
    </div>
  ); 
};

export default HomePage;
