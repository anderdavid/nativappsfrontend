import {ASIGNAR_CURSO} from './funcionesAction'

const initialState ={
    status:false,
    asignaciones:[],
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
        default:
            return state
    }
}

export default reducer