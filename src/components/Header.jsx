import React from 'react';
import { AppBar, Typography} from '@mui/material';

const Header= () => {
  return (
    <AppBar sx={{ backgroundColor: '#14e9d7', textAlign: 'center', padding: '5px' }}>
        <Typography variant='h6'>Radware Dashboard</Typography>
    </AppBar>
  );
};

export default Header;