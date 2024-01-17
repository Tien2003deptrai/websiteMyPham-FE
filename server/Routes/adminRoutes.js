const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userModel = require('../Models/userModel');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const verifyToken = require('../middleware/authMiddleware');

router.get('/profile', verifyToken, checkRoleMiddleware('admin'), (req, res) => {
    try {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, process.env.JWT_SECRET_KEY);

        userModel.findById({ _id: checkTokenValid._id })
            .then((response) => {
                return res.json({
                    message: 'access token admin',
                    _id: response._id,
                    name: response.name,
                    email: response.email,
                    role: response.role,
                });
            }).catch((error) => {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
