import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './AllUsers.css'; // Import the CSS file

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        showAllUsers();
    }, []);

    const showAllUsers = async () => {
        try {
            axios.get('http://localhost:3000/allusers').then((response) => {
                setUsers(response.data);
            }).catch((err) => {
                console.log("error in catch api", err);
                toast.error(err);
            });
        } catch (error) {
            toast.error(error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:3000/deleteuser/${id}`);
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success('User deleted successfully');
                await showAllUsers();
            }
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <>
            <div className="container">
                {users.length == 0 && <p className='no-user'>No Users</p>}
                {/* <h2 className="heading">All Users</h2> */}
                {users.length > 0 && (
                    <>
                    <h2 className="heading">All Users</h2>
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th className="th">S.No</th>
                                <th className="th">Name</th>
                                <th className="th">E-Mail</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr key={index} className="tr">
                                        <td className="td">{Number(index) + 1}</td>
                                        <td className="td">{user.name}</td>
                                        <td className="td">{user.email}</td>
                                        <td className="td">
                                            <button 
                                                className="deleteButton" 
                                                onClick={() => handleDeleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                            <Link to={`/user/${user._id}`}>
                                                <button className="editButton">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    </>
                )}
            </div>
        </>
    );
};

export default AllUsers;
