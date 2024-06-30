// src/components/ItemsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Typography, Box, Container , Button } from '@mui/material';
import api from '../api/api'


const ItemslistPage = ({ type }) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(`${api}/api/${type}`);
      setItems(response.data);
      console.log(response.data);
    //   const data = [ {
    //     _id: "001",
    //     name: "Sushil",
    //     accountName: " Account 1 "
    //   },
    //   {
    //     _id: "002",
    //     name: "Kumar",
    //     accountName: " Account 2 "
    //   }
    // ]
    // setItems(data);

    };
    fetchItems();
  }, [type]);

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
                Item List of {type}
                </Typography>
                {items && items.map(item => (
                    
                  <Link to={`/${type}/${item._id}`} key={item._id}>
                    <Button
                    key={item._id}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ margin: "10px"}}
                  >
                    {type=='users' ?item.name :  item.accountName}
                    </Button>
                  </Link>
                ))}
            </Box>
            </Container>
        </Box>
  );
};

export default ItemslistPage;
