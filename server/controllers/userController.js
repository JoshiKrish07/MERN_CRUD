const UserModel = require('../models/users');

const registerUser = async (req,res) => {

    try {
        const { name, email, password } = req.body;
        if(!email) {
            return res.status(400).json({error: 'email required'});
        }
    
        if(!name) {
            return res.status(400).json({error: 'name required'});
        }
    
        if(!password) {
            return res.status(400).json({error: 'password required'});
        }

        const emailExist = await UserModel.findOne({email});
        if(emailExist){
            return res.status(400).json({error: 'email already exists'});
        }
    
        const user = await UserModel.create({ name, email, password });
        return res.status(200).json(user);
    } catch (error) {
        console.log("error in catch block", error);
        return res.status(400).json({error: error});
    }
    
}

const getAllUsers = async (req,res) => {
    try {
        const userData = await UserModel.find();
        if(!userData) {
            return res.status(400).json({error: "No data found"});
        }
        return res.status(200).json(userData);
    } catch(error) {
         return res.status(400).json({error: error});
    }
}

const getUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExists = await UserModel.findById(id);
        if(!userExists) {
         return res.status(400).json({error: "User does not exist"});
        }
        return res.status(200).json(userExists);
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

const updateUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExists = await UserModel.findById(id);
        if(!userExists) {
         return res.status(400).json({error: "User does not exist"});
        }

        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedUser);

    } catch (error) {
        console.log('error in update user', error);
        return res.status(500).json({error: error});
    }
}

const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExists = await UserModel.findById(id);
        if(!userExists) {
         return res.status(400).json({error: "User does not exist"});
        }

        await UserModel.findByIdAndDelete(id);
        return res.status(200).json({msg:"User deleted succesfully"});
    } catch (error) {
        console.log('error in delete user', error);
        return res.status(500).json({error: error});
    }
}

module.exports = {
    registerUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}