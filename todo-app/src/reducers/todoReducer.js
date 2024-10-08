import { v4 as uuidv4 } from 'uuid';
import { ADD, COMPLETE, DELETE, UPDATE } from '../actions/types';

const todo = [
  {
    id: uuidv4(), // Call uuidv4() to generate the ID
    complete: false, // Correct the typo in 'complete'
    title: "Task",
  }
];

const todoReducer = (state = todo, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { title: action.payload, id: uuidv4(), complete: false } // Call uuidv4() to generate the ID
      ];
      
    case DELETE:
      return state.filter(el => el.id !== action.payload);
      case COMPLETE:
        return state.map(el => el.id === action.payload ? {...el,complete:!el.complete}:el); 
        case UPDATE:
        
        return state.map(el => el.id === action.payload.id ? {...el,title:action.payload.updateTask}:el); 
    default:
      return state;
  }
};





export default todoReducer;
