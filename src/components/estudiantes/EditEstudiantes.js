import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantesId} from '../../redux'
import { withRouter } from "react-router";
import EditEstudiantesForm from './EditEstudiantesForm';

class EditEstudiantes extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount=()=>{
        const id = this.props.match.params.id;
        this.props.getEstudiantesId(id)
    }
    
    render() {
        var status = this.props.state.estudiantesResponse.status
        console.log('status '+status)
    
        if(!status){
            var msg = this.props.state.estudiantesResponse.msg
        this.content=<div>{msg}</div>
        }else{
            this.content=<EditEstudiantesForm estudiante={this.props.state.estudiantesResponse.estudiantes[0]} estudianteId={this.props.match.params.id}/>
        }

        return (
            <div>
                {/* {JSON.stringify(this.props.state.estudiantesResponse.status)} */}
                {this.content}
            </div>
        );
    }
}

const mapStateToProps =state=>{
    return{
        state:state
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
)(withRouter(EditEstudiantes))