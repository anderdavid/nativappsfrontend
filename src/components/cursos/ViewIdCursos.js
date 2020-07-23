import React, { Component } from 'react';
import { withRouter } from "react-router";
import {connect} from 'react-redux'
import {getCursosId,deleteCursos} from '../../redux'

class ViewIdCursos extends Component {
    componentWillMount =()=>{
        const id = this.props.match.params.id
        console.log('id: '+id)
        this.props.getCursosId(id)
    }
    render() {
        var status =this.props.state.cursosResponse.status
        console.log('status: '+status)

        if(!status){
            var msg = this.props.state.cursosResponse.msg
            this.content=<div>{msg}</div>
        }else{
            var curso =this.props.state.cursosResponse.cursos[0]

            this.content =<div>
                            <p><strong className="has-text-danger-dark">Id: </strong>{curso.id}</p>
                            <p><strong className="has-text-danger-dark">Nombre: </strong>{curso.nombre}</p>
                            <p><strong className="has-text-danger-dark">Horario: </strong>{curso.horario}</p>
                            <p><strong className="has-text-danger-dark">Fecha de Inicio: </strong>{curso.fecha_inicio}</p>
                            <p><strong className="has-text-danger-dark">Fecha de Fin: </strong>{curso.fecha_fin}</p>
                            <p><strong className="has-text-danger-dark">Numero de Estudiantes: </strong>{curso.numero_estudiantes}</p>
                        </div>
        }
        return (
            <div>
                <p>{JSON.stringify(this.props.state.cursosResponse)}</p>
                <section className="hero">
                    <div className="hero-body has-background-light"> 
                        <div className="container">
                            <h1 className="title has-text-info">
                                Ver Curso
                            </h1>
                            {this.content}
                        </div>
                    </div>
                </section>
                <section className="container" style={{marginTop:"20px"}}>
                    <div class="buttons">
                        <button className="button is-info" onClick={()=>{window.location.href='/cursos/edit/'+curso.id}}>Editar</button>
                        <button className="button is-danger" onClick={()=>{this.props.deletecurso(curso.id)}}>Eliminar</button>
                    </div>
                </section>
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
)(withRouter(ViewIdCursos))