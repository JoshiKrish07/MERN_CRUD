import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Register.css';

const Register = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=> {
    if(id) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/user/${id}`);
      setUserData({
        'name': data.name,
        'email': data.email,
        'password': data.password
      });
    } catch (error) {
      console.log("error in get user api", error);
      toast.error(error.message);
    }
  }

  const updateUser = async () => {
    try {
      const { data } = await axios.put(`http://localhost:3000/update/${id}`, userData);
      if(data.error) {
        toast.error(data.error);
      } else {
        toast.success('User updated successfully');
        navigate('/allusers');
      }
    } catch (error) {
      console.log("error in update api", error);
      toast.error(error.message);
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(id) {
      await updateUser();
    }    
    else {
        try {
          const { data } = await axios.post('http://localhost:3000/register', userData);
          if(data.error) {
            toast.error(data.error);
          } else {
            toast.success("User registered successfully");
            navigate('/allusers');
          }
        } catch (error) {
          console.log("error in register api", error);
          toast.error(error.message);
        }
    }
  }

  const handleInputChange = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value});
  }

  return (
    <>
        {/* <form onSubmit={handleFormSubmit}>
          <div>
            <input type='text' id='username' placeholder='your name' name='name' value={userData.name || ''} onChange={handleInputChange}/>
            <label htmlFor="username">Name</label>
          </div>
          <div>
            <input type='text' id='useremail' placeholder='your email' name='email' value={userData.email || ''} onChange={handleInputChange}/>
            <label htmlFor="useremail">E-Mail</label>
          </div>
          <div>
            <input type='password' id='userpassword' placeholder='your password' name='password' value={userData.password || ''} onChange={handleInputChange}/>
            <label htmlFor="userpassword">Password</label>
          </div>
          <div>
            <button type='submit'>{id ? 'Update' : 'Register' }</button>
          </div>
        </form> */}

        <form onSubmit={handleFormSubmit}>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label className='frm-lbl' htmlFor="username"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" id="username" value={userData.name || ''} onChange={handleInputChange} required />

            <label htmlFor="useremail"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="useremail" value={userData.email || ''} onChange={handleInputChange} required />

            <label htmlFor="userpassword"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="userpassword" value={userData.password || ''} onChange={handleInputChange} required />

            <hr />

            <button type="submit" className="registerbtn">{id ? 'Update' : 'Register' }</button>
          </div>
          
        </form>


    </>
  )
}

export default Register;