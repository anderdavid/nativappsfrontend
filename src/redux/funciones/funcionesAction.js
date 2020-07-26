import axios from 'axios'

export const ASIGNAR_CURSO ='ASIGNAR_CURSO'
export const GET_ESTUDIANTE_CURSO='GET_ESTUDIANTE_CURSO'
export const TOP_3 ='TOP_3'

export const asignarCurso =(asignacion)=>{
    console.log('asignarCurso()')
    
    return(dispatch)=>{
        axios.post('https://nativeappsbackend.herokuapp.com/asignacion',asignacion).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:ASIGNAR_CURSO,
                    status:response.data.status,
                    msg:response.data.msg

                })
                window.location.href="/cursos/ver"
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:ASIGNAR_CURSO,
                    status:false, 
                    msg: errorMsg
                })
            }
        ).then(
            
        )
    }
}

export const getEstudianteCursos =(id)=>{
    return(dispatch)=>{
        axios.get('https://nativeappsbackend.herokuapp.com/estudianteCurso/'+id).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:GET_ESTUDIANTE_CURSO,
                    status:response.data.status,
                    estudianteCursos:response.data.estudianteCursos,
                    msg:response.data.msg

                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:GET_ESTUDIANTE_CURSO,
                    status:false, 
                    msg: errorMsg
                })
            }
        )
    }
}

export const top3 =()=>{
    console.log('top3')
    return(dispatch)=>{
        axios.get('https://nativeappsbackend.herokuapp.com/top3').then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:TOP_3,
                    status:response.data.status,
                    msg:response.data.msg,
                    top3:response.data.top3
                })
            }
        ).catch(
            error =>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:TOP_3,
                    status:false, 
                    msg: errorMsg
                })
            }
        )
    }
}