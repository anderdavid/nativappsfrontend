import {ASIGNAR_CURSO,GET_ESTUDIANTE_CURSO,TOP_3} from './funcionesAction'

const initialState ={
    status:false,
    estudianteCursos:[],
    top3:[],
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
        case TOP_3:
            return{
                ...state,
                status:action.status,
                top3:action.top3,
                msg:action.msg 
            }
        default:
            return state
    }
}

export default reducer