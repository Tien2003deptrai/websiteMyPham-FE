import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';

const Profile = ({ user }) => {
    if (!user) {
        return <div>Error: Missing user data</div>;
    }

    console.log('user profile', user);

    return (
        <Card style={{ maxWidth: 400, margin: 'auto', borderRadius: 16 }}>
            <CardContent>
                <Avatar src={user.avatar} alt={user.name} style={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h5" style={{ textAlign: 'center', marginTop: 10, marginBottom: 1 }}>
                    {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center', marginBottom: 3, marginTop: 10 }}>
                    {user.name || 'Username'} | <a href="#!">{user.email || 'example.com'}</a>
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                    <Button style={{ marginX: 1, marginRight: 5 }} variant="outlined" startIcon={<FacebookIcon />}>
                    </Button>
                    <Button style={{ marginX: 1, marginRight: 5 }} variant="outlined" startIcon={<TwitterIcon />}>
                    </Button>
                    <Button style={{ marginX: 1 }} variant="outlined" startIcon={<CallIcon />}>
                    </Button>
                </div>
                <Button variant="contained" size="large" fullWidth color="primary" style={{ marginBottom: 2, marginTop: 10 }}>
                    Message Now
                </Button>
                <Button variant="outlined" size="large" fullWidth color="primary" style={{ marginBottom: 2, marginTop: 10 }}>
                    Edit Profile
                </Button>
            </CardContent>
        </Card>
    );
};

export default Profile;
