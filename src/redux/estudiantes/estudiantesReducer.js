import { GET_ESTUDIANTES, GET_ESTUDIANTES_ID, POST_ESTUDIANTES,
        PUT_ESTUDIANTES,DELETE_ESTUDIANTES,RESET_STATUS_ESTUDIANTES
} from './estudiantesAction'

const initialState ={
    status:false,
    estudiantes :[],
    msg:''
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case RESET_STATUS_ESTUDIANTES:return{
            ...state,
            status:false
        }
        case GET_ESTUDIANTES:
            return{
                ...state,
                status:action.status,
                estudiantes:action.estudiantes,
                msg:action.msg
        }
        case GET_ESTUDIANTES_ID:
            return{
                ...state,
                status:action.status,
                estudiantes:action.estudiante,
                msg:action.msg
        }
        case POST_ESTUDIANTES:
            return{
                ...state,
                status:action.status,
                msg:action.msg
        }
        case PUT_ESTUDIANTES:
            return{
                ...state,
                status:action.status,
                msg:action.msg
        }
        case DELETE_ESTUDIANTES:
            return{
                ...state,
                status:action.status,
                msg:action.msg
        }
        default:
            return state
    }

}

export default reducer