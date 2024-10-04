const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

router.post('/register', registerUser);
router.get('/allusers', getAllUsers);
router.get('/user/:id', getUser);
router.put('/update/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports = router;