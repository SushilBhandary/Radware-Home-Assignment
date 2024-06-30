import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';
import api from '../api/api'

const ItemPage = ({ type }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`${api}/api/${type}/${id}`);
      setItem(response.data);
      console.log(response.data);
    };
    fetchItem();
  }, [type, id]);

  return (
    <Box
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#CFFCE8',
        }}
    >
        <Container maxWidth="sm">
        <Box
            sx={{
            padding: 4,
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: 3,
            }}
        >
          { type=='users' ? (
            <>
              <Typography variant="h4" component="h1" textAlign="center" fontWeight="bold">
              Item Page of User 
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              User Name : {item.name}
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              Email : {item.email}
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              Phone : {item.phone}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h4" component="h1" textAlign="center" fontWeight="bold">
              Item Page of Account 
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              Account Name : {item.accountName}
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              Description : {item.description}
              </Typography>
              <Typography variant="p" component="p" textAlign="center" >
              AccountType : {item.type}
              </Typography>
            </>
          )}
            
        </Box>
        </Container>
    </Box>
  );
};

export default ItemPage;
