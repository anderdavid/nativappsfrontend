import{GET_CURSOS,GET_CURSOS_ID,POST_CURSOS,UPDATE_CURSOS,DELETE_CURSOS} from './cursosAction'

const initialState ={
    status:false,
    cursos:[],
    msg:''
 }

 const reducer =(state =initialState,action)=>{
    switch(action.type){

        case GET_CURSOS:
            return{
                ...state,
                status:action.status,
                cursos:action.cursos,
                msg:action.msg
            }
        case GET_CURSOS_ID:
            return{
                ...state,
                status:action.status,
                cursos:action.curso,
                msg:action.msg
            }
        case POST_CURSOS:
            return{
                ...state,
                status:action.status,
                msg:action.msg
            }
        case UPDATE_CURSOS:
            return{
                ...state,
                status:action.status,
                msg:action.msg
            }
        case DELETE_CURSOS:
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