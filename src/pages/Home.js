import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../Redux/userReducer'

function Home() {
    const user=useSelector((state)=>state.users)

    const dispatch=useDispatch()

   const handelDelete  = (id)=>{
    dispatch(deleteUser({id: id}))
   }
    console.log(user)
  return (
    <div className='container-fluid'>
        <h2>Todo app </h2>
        <Link to='/create' className='btn btn-success my-2'>Creacte+</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
<tbody>
{user.map((user,index)=>(
  <tr key={index}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.task}</td>
    <td>{user.status}</td>
    <td><Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link></td>
    <td><button className='btn btn-sm btn-danger ms-2' onClick={handelDelete}>Delete</button></td>
  </tr>
))}
</tbody>
        </table>
      
    </div>
  )
}

export default Home