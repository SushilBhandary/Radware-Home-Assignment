// src/components/ItemPage.js
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Typography, Box, Container } from '@mui/material';


const ItemPage = ({ type }) => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
    //   const response = await axios.get(`/api/${type}/${id}`);
    //   setItem(response.data);
        const data = {
            _id: "01",
            name : "Sushil",
            Description: "hi this is a very new thing ",
            AccountType: "Public"
        }
        setItem(data)
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
            <Typography variant="h4" component="h1" textAlign="center" fontWeight="bold">
            Item Page of {type} - {id}
            </Typography>
            <Typography variant="p" component="p" textAlign="center" >
            Account Name : {item.name}
            </Typography>
            <Typography variant="p" component="p" textAlign="center" >
            Description : {item.Description}
            </Typography>
            <Typography variant="p" component="p" textAlign="center" >
            AccountType : {item.AccountType}
            </Typography>
        </Box>
        </Container>
    </Box>
  );
};

export default ItemPage;
