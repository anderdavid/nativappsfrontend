import {ASIGNAR_CURSO,GET_ESTUDIANTE_CURSO} from './funcionesAction'

const initialState ={
    status:false,
    estudianteCursos:[],
    msg:''
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ASIGNAR_CURSO:
            return{
                ...state,
                status:action.status,
                msg:action.msg 
            }
        case GET_ESTUDIANTE_CURSO:
            return{
                ...state,
                status:action.status,
                estudianteCursos:action.estudianteCursos,
                msg:action.msg 
            }
        default:
            return state
    }
}

export default reducer