import axios from 'axios'

export const ASIGNAR_CURSO ='ASIGNAR_CURSO'
export const GET_ESTUDIANTE_CURSO='GET_ESTUDIANTE_CURSO'

export const asignarCurso =(asignacion)=>{
    console.log('asignarCurso()')
    
    return(dispatch)=>{
        axios.post('http://localhost:3002/asignacion',asignacion).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:ASIGNAR_CURSO,
                    status:response.data.status,
                    msg:response.data.msg

                })
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
            window.location.href="/estudiantes/ver/"
        )
    }
}

export const getEstudianteCursos =(id)=>{
    return(dispatch)=>{
        axios.get('http://localhost:3002/estudianteCurso/'+id).then(
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