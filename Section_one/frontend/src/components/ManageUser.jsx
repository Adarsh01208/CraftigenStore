import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {

    const navigate = useNavigate();


    const [userList, setuserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setuserList(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [])

    const deleteUser = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' });

        if (res.status === 200) {
            fetchUserData();
            toast.success('User Deleted Successfully');

        }
    }


    const displayUsers = () => {
        return <table className='table table-bordered table-sm table-striped  '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Image</th>
                   <th></th>
                   <th></th>
                   



                </tr>
            </thead>
            <tbody>
                {
                    userList.map((user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.avatar}</td>
                            <td className='text-center'><button className='btn btn-danger' onClick={() => { deleteUser(user._id) }} >Delete User</button> </td>
                            <td className='text-center'><button className='btn btn-primary' onClick={() => { navigate('/updateuser/' + user._id) }} >Update User</button> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    };

    return (
        <div>
            <h1 className='text-center m-5'>Manage User Data</h1>
           
            <div className='container'>
                {displayUsers()}
            </div>
        </div>
    )
}

export default ManageUser