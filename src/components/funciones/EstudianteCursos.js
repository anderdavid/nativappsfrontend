import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from 'react-redux'
import {getEstudianteCursos} from '../../redux'

class EstudianteCursos extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount =()=>{
        const id = this.props.match.params.idEstudiante
        console.log('id: '+id)
        this.props.getEstudianteCursos(id)
    }
    
    render() {
        var status =this.props.state.funcionesResponse.status
        if(status){
            this.estudiante = <p className="has-text-grey">Nombre estudiante: <strong className="has-text-danger-dark">{this.props.state.funcionesResponse.estudianteCursos[0].nombre}</strong></p>
            this.cursos =this.props.state.funcionesResponse.estudianteCursos.map(
                curso=><li style={{padding:"5px 10px"}}><strong className="has-text-primary">{curso.nombre_curso}</strong></li>
            )
        }
        return (
        <section className="hero">
            <h1 className="title has-text-info">Ver Cursos Inscritos</h1>
            {/* <p>{JSON.stringify(this.props.state.funcionesResponse)}</p> */}
            <div className="hero-body has-background-light"> 
                <div className="container">
                    {this.estudiante}
                    <h4 className="title has-text-grey-darker" style={{marginTop:"30px"}}>Cursos:</h4>
                    <div className="container" style={{marginLeft:"20px"}}>
                        {this.cursos}
                    </div>
                   
                </div>
            </div>
        </section>
        
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
        getEstudianteCursos:(id)=>dispatch(getEstudianteCursos(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EstudianteCursos))