import React,{ useEffect } from 'react';
import {connect} from 'react-redux'
import {getEstudiantesId} from '../../redux'
import { withRouter } from "react-router";
import EditEstudiantesForm from './EditEstudiantesForm';

function Edit(props) {

    useEffect(()=>{
        console.log('useEfecct')
        const id = props.match.params.id;
        props.getEstudiantesId(id)
        
     })
     return !props.state.status?(
        <div><p>Usuario no encontrado</p></div>
    ): (
       
        <div>
           
          {/*   {JSON.stringify(props.state.estudiantes[0])}  */}
            <EditEstudiantesForm estudiante={props.state.estudiantes[0]} estudianteId={props.match.params.id}/>
        </div>
    );
   
}
const mapStateToProps =state=>{
    return{
        state:state.estudiantesResponse
    }
}
const  mapDispatchToProps =dispatch =>{
    return{
       getEstudiantesId:(id)=>dispatch(getEstudiantesId(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter( Edit))