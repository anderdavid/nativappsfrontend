import {combineReducers} from 'redux'
import estudiantesReducer from './estudiantes/estudiantesReducer'

const rootReducer = combineReducers({
   estudiantesResponse:estudiantesReducer
 })

export default rootReducer