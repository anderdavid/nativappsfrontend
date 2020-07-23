import {combineReducers} from 'redux'
import estudiantesReducer from './estudiantes/estudiantesReducer'
import cursosReducer from './cursos/cursosReducer'

const rootReducer = combineReducers({
   estudiantesResponse:estudiantesReducer,
   cursosResponse:cursosReducer
})

export default rootReducer