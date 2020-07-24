import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getCursosId,deleteCursos} from '../../redux'
import { withRouter } from "react-router";
import EditCursosForm from './EditCursosForm'


class EditCursos extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount=()=>{
        console.log('useEfecct')
        const id = this.props.match.params.id;
        this.props.getCursosId(id)
    }
    
    render() {
        var status = this.props.state.cursosResponse.status
        console.log('status '+status)
    
        if(!status){
            var msg = this.props.state.cursosResponse.msg
            this.content=<div>Estudiante no encontrado</div>
        }else{
            this.content=<EditCursosForm curso={this.props.state.cursosResponse.cursos[0]} cursoId={this.props.match.params.id}/>
        }

        return (
            <div>
                {/* {JSON.stringify(this.props.state.cursosResponse)} */}
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
        getCursosId:(id)=>dispatch(getCursosId(id)),
        deleteCursos:(id)=>dispatch(deleteCursos(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditCursos))