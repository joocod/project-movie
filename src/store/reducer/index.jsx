import { combineReducers } from "redux";
import {FETCH_ACTION_MOVIES} from '../'   

const actionMovie = (state = [], action)=>{
    switch(action.type){
        case FETCH_ACTION_MOVIES :
          return{
          ...state,
          movies : action.data
          };
        default:
        return state;
      }
}

const rootReducer = combineReducers({
    action : actionMovie,
})

export default rootReducer;