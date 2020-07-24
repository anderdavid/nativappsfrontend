import React, { Component } from 'react';
import {connect} from 'react-redux'
import{getCursos,getEstudiantes} from '../../redux'
import AsignarCursosForm from './AsignarCursosForm'

class AsignarCursos extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentWillMount =()=>{
        this.props.getEstudiantes()
        this.props.getCursos()
        
    }
    render() {
        var statusCursos = this.props.state.cursosResponse.status
        console.log('statusCur '+statusCursos)

        var statusEstudiantes = this.props.state.estudiantesResponse.status
        console.log('statusEs '+statusEstudiantes)

        if(statusCursos && statusEstudiantes){
            this.content =<AsignarCursosForm cursos={this.props.state.cursosResponse.cursos} estudiantes={this.props.state.estudiantesResponse.estudiantes}/>
        }else{
            this.content=<p>Error</p>
        }

        return (
            <div>
                {/*  <p>{JSON.stringify(this.props.state)}</p> */}
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
        getCursos:()=>dispatch(getCursos()),
        getEstudiantes:()=>dispatch(getEstudiantes())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsignarCursos)