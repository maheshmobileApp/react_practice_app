
import React from 'react'
import { Typography, Box, List, Card } from '@mui/material'

const UsersList = () => {

    const users = [
        { name: "Mahesh", email: "mahesh@gmail.com" },
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Alice Johnson', email: 'alice@example.com' },
        { name: "Mahesh", email: "mahesh@gmail.com" },
        { name: 'John Doe', email: 'john@example.com' },

    ];
    return (
        <Box>
            <Typography sx={{ fontSize: 35 }} >Users List</Typography>
            {/* <UserCard name={users[0].name, email = {users[0].email}}></UserCard> */}
            <List>
                {
                    users.map((user, index) => {
                        return <UserCard key={index} user={user} />
                    })
                }
            </List>

        </Box>
    );
}

const UserCard = ({ user }) => {
    const { name, email } = user;
    return (
        <Card sx={{ padding: 1, margin: 2 }}>
            <Typography>{name}</Typography>
            <Typography>{email}</Typography>
        </Card>
    );

}

export default UsersList;

/*
1. Read about Functioal Component
2. Read about props
3. Display the cricketers list with in screen using functional component and props 
 {name, age, counntry,country logo, runs, wikets, mathes,avarage }
*/