import React, { useState } from 'react';
import { Typography,TextField, OutlinedInput, Box, Container , Button,Select, MenuItem,InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import api from '../api/api';

const Add= () => {
    const [ selectType, setSelectType] = useState('User')
    const [ accountType, setAccountType] = useState('')
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ phone, setPhone] = useState('')
    const [ description, setDescription] = useState('')

    const handleAdd = async(e) => {
        e.preventDefault()
        if( selectType == 'User') {
            if( !name|| !email || !phone ) {
                alert('Full the fields')
                return
            }
            await axios.post(`${api}/api/users`, {
                name,
                email,
                phone
            })
            .then( (res) => {
                setName('')
                setEmail('')
                setPhone('')
                alert('Created successfully')
            })
            .catch(e => console.log(e))
        } else {
            if( !name|| !accountType || !description ) {
                alert('Full the fields')
                return
            }
            await axios.post(`${api}/api/accounts`, {
                name,
                type: accountType,
                description
            })
            .then( (res) => {
                setName('')
                setAccountType('')
                setDescription('')
                alert('Created successfully')
            })
            .catch(e => console.log(e))
        }
    };
    
    const handleSelectType = (e) => {
        setSelectType(e.target.value)
    };
    const handleAccountType = (e) => {
        setAccountType(e.target.value)
    };
    const handleName = (e) => {
        setName(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePhone = (e) => {
        setPhone(e.target.value)
    };
    const handleDescription = (e) => {
        setDescription(e.target.value)
    };

    return(
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
                Add Account / User
                </Typography>
                <form  noValidate>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="multi-select-label">Add Type</InputLabel>
                        <Select
                            value={selectType}
                            onChange={handleSelectType}
                            input={<OutlinedInput label="Name" />}
                        >
                            {['User', 'Account'].map((option) => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    { selectType=='User' ? (
                        <>
                            <Box mb={2}>
                                <TextField
                                fullWidth
                                label="User Name"
                                value={name}
                                onChange={handleName}
                                variant="outlined"
                                margin="normal"
                                />
                            </Box>
                            <Box mb={2}>
                                <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                value={email}
                                onChange={handleEmail}
                                />
                            </Box>
                            <Box mb={2}>
                                <TextField
                                fullWidth
                                label="Phone Number"
                                type="number"
                                variant="outlined"
                                margin="normal"
                                value={phone}
                                onChange={handlePhone}
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box mb={2}>
                                <TextField
                                fullWidth
                                label="Account Name"
                                onChange={(e) => setName(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                value={name}
                                />
                            </Box>
                            <Box mb={2}>
                                <TextField
                                fullWidth
                                label="Description"
                                variant="outlined"
                                margin="normal"
                                value={description}
                                onChange={handleDescription}
                                />
                            </Box>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="multi-select-label">Account Type</InputLabel>
                                <Select
                                    value={accountType}
                                    onChange={handleAccountType}
                                    input={<OutlinedInput label="Account Type" />}
                                >
                                    {['Private', 'Public'].map((option) => (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </>
                    ) }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ backgroundColor: '#10ABAC', '&:hover': { backgroundColor: '#0B8390' } }}
                        onClick={handleAdd}
                    >
                        Add
                    </Button>
                </form>
            </Box>
            </Container>
        </Box>
    )
    
};

export default Add;