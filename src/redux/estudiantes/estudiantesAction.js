import axios from 'axios'

export const GET_ESTUDIANTES ='GET_ESTUDIANTES'
export const GET_ESTUDIANTES_ID='GET_ESTUDIANTES_ID'
export const POST_ESTUDIANTES ='POST_ESTUDIANTES'
export const PUT_ESTUDIANTES='PUT_ESTUDIANTES'
export const DELETE_ESTUDIANTES ='DELETE_ESTUDIANTES'


export const getEstudiantes =()=>{
    console.log('getEstudiantes()')
    return(dispatch)=>{
        axios.get('http://localhost:3002/estudiantes').then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:GET_ESTUDIANTES,
                    status:response.data.status,
                    estudiantes:response.data.estudiantes,
                    msg:response.data.msg
                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:GET_ESTUDIANTES,
                    status:false, 
                    msg: errorMsg
                })
            }
        )

    }
}

export const getEstudiantesId =(id)=>{
    console.log('getEstudiantesId()')

    return(dispatch)=>{
        axios.get('http://localhost:3002/estudiantes/'+id).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:GET_ESTUDIANTES_ID,
                    status:response.data.status,
                    estudiante:response.data.estudiante,
                    msg:response.data.msg
                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:GET_ESTUDIANTES_ID,
                    status:false, 
                    msg: errorMsg
                })
            }
        )

    }
}

export const postEstudiantes =(estudiante)=>{
    console.log('postEstudiantes()')

    return(dispatch)=>{
        axios.post('http://localhost:3002/estudiantes',estudiante).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:POST_ESTUDIANTES,
                    status:response.data.status,
                    msg:response.data.msg
                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:POST_ESTUDIANTES,
                    status:false, 
                    msg: errorMsg
                })
            }
        )

    }
}
export const putEstudiantes =(estudiante,id)=>{
    console.log('putEstudiantes()')

    return(dispatch)=>{
        axios.put('http://localhost:3002/estudiantes/'+id,estudiante).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:PUT_ESTUDIANTES,
                    status:response.data.status,
                    msg:response.data.msg
                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:PUT_ESTUDIANTES,
                    status:false, 
                    msg: errorMsg
                })
            }
        )

    }
}
export const deleteEstudiantes=(id)=>{
    console.log('deleteEstudiantes()')

    return(dispatch)=>{
        axios.delete('http://localhost:3002/estudiantes/'+id).then(
            response=>{
                console.log(response.data)
                dispatch({
                    type:DELETE_ESTUDIANTES,
                    status:response.data.status,
                    msg:response.data.msg
                })
            }
        ).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({
                    type:DELETE_ESTUDIANTES,
                    status:false, 
                    msg: errorMsg
                })
            }
        ).then(
            window.location.href="/estudiantes/ver/"
        )

    }
}