import {combineReducers} from 'redux'
import estudiantesReducer from './estudiantes/estudiantesReducer'
import cursosReducer from './cursos/cursosReducer'
import funcionesReducer from './funciones/funcionesReducer'

const rootReducer = combineReducers({
   estudiantesResponse:estudiantesReducer,
   cursosResponse:cursosReducer,
   funcionesResponse:funcionesReducer
})

export default rootReducer