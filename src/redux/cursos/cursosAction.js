import axios from 'axios'

export const GET_CURSOS='GET_CURSOS'
export const GET_CURSOS_ID ='GET_CURSOS_ID'
export const POST_CURSOS ='POST_CURSOS'
export const UPDATE_CURSOS ='UPDATE_CURSOS'
export const DELETE_CURSOS='DELETE_CURSOS'

export const getCursos =() =>{
    return(dispatch)=>{
       axios.get('https://nativeappsbackend.herokuapp.com/cursos').then(
            response=>{
              dispatch({type:GET_CURSOS, status:response.data.status, cursos: response.data.cursos,msg:response.data.msg});
            }
        ).catch(
            error=>{
              const errorMsg =error.message
              dispatch({type:GET_CURSOS, status:false, msg: errorMsg}) 
            }
        )
    }
}

export const getCursosId =(id)=>{

    return(dispatch)=>{
      console.log('id: '+id)
      axios.get('https://nativeappsbackend.herokuapp.com/cursos/'+id).then(
          response=>{
            console.log(response.data)
            dispatch({type:GET_CURSOS_ID , status:response.data.status, curso: response.data.curso, msg:response.data.msg});
           }
       ).catch(
           error=>{
                const errorMsg =error.message
                dispatch({type:GET_CURSOS_ID , status:false, msg: errorMsg}) 
           }
       )
   }
}

export const postCursos =(curso)=>{

    console.log('curso: '+JSON.stringify(curso))
  
    return(dispatch)=>{
  
        axios.post('https://nativeappsbackend.herokuapp.com/cursos',curso).then(
          response=>{
            console.log(response.data)
            dispatch({type:POST_CURSOS, status:response.data.status,msg:response.data.msg});
        }).catch(
            error=>{
                const errorMsg =error.message
                console.log(errorMsg)
                dispatch({type:POST_CURSOS, status:false, msg: errorMsg})
            }
        )
    }
}

export const putCursos =(curso,id) =>{

    console.log('curso '+ JSON.stringify(curso)+'id '+id)
  
    return(dispatch)=>{
      axios.put('https://nativeappsbackend.herokuapp.com/cursos/'+id,curso).then(
        response=>{
          console.log(response.data)
          dispatch({type:UPDATE_CURSOS, status:response.data.status, msg:response.data.msg});
          window.location.href="/cursos/ver/"+id
        }
        
      ).catch(
        error=>{
          const errorMsg =error.message
          console.log(errorMsg)
          dispatch({type:UPDATE_CURSOS, status:false, msg: errorMsg})
        }
      ).then(
       
      )
    }
  }

export const deleteCursos =(id)=>{
    return(dispatch)=>{
      axios.delete('https://nativeappsbackend.herokuapp.com/cursos/'+id).then(
       response=>{
         console.log(response.data)
         dispatch({type:DELETE_CURSOS, status:response.data.status,msg:response.data.msg});
       }
      ).catch(
        error=>{
          const errorMsg =error.message
          console.log(errorMsg)
          dispatch({type:DELETE_CURSOS, status:false, msg: errorMsg})
        }
      ).then(
        window.location.href="/cursos/ver"
      )
    }
}