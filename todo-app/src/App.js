import './App.css';
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, completeTodo, deleteTodo,updateTodo} from './actions/todoActions';
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [task, setTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const [filter, setFilter] = useState('all');
  const todos=useSelector((state) => state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
     
      <input className='placeholder' type="text"placeholder="Add a new task" onChange={(e)=>setTask(e.target.value)}/>
       
       <button className='add' onClick={()=>dispatch(addTodo(task))}>Add Task</button>
       <button className=' all'onClick={()=>setFilter('all')}>All</button>
       <button className='done' onClick={()=>setFilter('done')}>Done</button>
       <button className='undone' onClick={()=>setFilter('undone')}>Undone</button>
        {filter ==='all'? todos.map(el=><div>
          <h3>{el.title}</h3>
          
          <Button className='update' variant="primary" onClick={handleShow}>
        update
      </Button>
      <Modal className='model' show={show} onHide={handleClose} >
        
        <Modal.Body >
          <input className='input' type="text"placeholder="Edit Task" onChange={(e)=>setUpdateTask(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {dispatch(updateTodo(updateTask,el.id));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button className='delete' onClick={()=>dispatch(deleteTodo(el.id))}>DELETE</button>
      <button className='complete' onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? 'done':'undone'}</button>
      </div>):
       filter==='done'? todos.filter(el=>el.complete===true)
      .map(el=><div>
     <h3>{el.title}</h3>
     <button className='delete' onClick={()=>dispatch(deleteTodo(el.id))}>DELETE</button>
     <button className='complete' onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? 'done':'undone'}</button> 
      </div>): todos.filter(el=>el.complete === false)
      .map(el=><div>
        <h3>{el.title}</h3>
        <button className='delete' onClick={()=>dispatch(deleteTodo(el.id))}>DELETE</button>
        <button className='complete' onClick={()=>dispatch(completeTodo(el.id))}>{el.complete ? 'done':'undone'}</button> 
       </div>) 
      }
    </div>
);
}

export default App;
