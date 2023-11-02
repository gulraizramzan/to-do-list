import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux/userReducer'

function Update() {
  const {id}=useParams()
  const navigat=useNavigate()
  const users=useSelector((state)=>state.users);
  const existingUser=users.filter(f => f.id == id)
  const {name,task,status}=existingUser[0]

  const [formData, setFormData] = useState({
    name:name,
    task: task,
    status: status,
    
});

const dispatch=useDispatch()

const handelChanges=(event)=>{
  const {name, value}=event.target;
  setFormData({
      ...formData,
      [name]: value
  });
};

const handelSubmit=(event)=>{
  event.preventDefault();
  dispatch(updateUser({id: id, 
    name: formData.name, 
    task:formData.task,
    status:formData.status
  }));
  navigat('/');
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <h3>Update User</h3>
            <form>
                <div>
                <label htmlFor="name">Name:</label>
                <input
               value={formData.name}
               onChange={handelChanges}
                type="text" name='name' className="form-control" placeholder='enter name' />
                </div>
                <div>
                <label htmlFor="name">Task:</label>
                <input
               value={formData.task}
               onChange={handelChanges}
                type="text" name='task' className="form-control" placeholder='enter task'/>

                </div>
                <div>
                <label htmlFor="name">Status:</label>
                <input
                value={formData.status}
                onChange={handelChanges}
                type="text" name='status' className="form-control" placeholder='enter task'/>
                </div>
                <br />
<button className='btn btn-info' onClick={handelSubmit} >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Update