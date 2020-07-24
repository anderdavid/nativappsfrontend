import React, { Component } from 'react';
import {connect} from 'react-redux'
import{asignarCurso} from '../../redux'

class AsignarCursosForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            estudiantes:props.estudiantes,
            cursos:props.cursos,
            asingnacion:{
                estudianteId:props.estudiantes[0].id,
                cursoId:props.cursos[0].id
            }
        }

        this.valueChange= this.valueChange.bind(this)
        
    }

    valueChange =(event)=>{
        var name = event.target.name
        var value=event.target.value

        this.setState({
           ...this.state,
           asingnacion:{
               ...this.state.asingnacion,
                [name]:value
           }
        })
    }
    send =(event)=>{
        event.preventDefault()
        this.props.asignarCurso(this.state.asingnacion)
    }
    
    render() {
        this.contentEstudiantes =this.state.estudiantes.map(
            estudiante=><option  value={estudiante.id}>{estudiante.nombre}</option>
        )
        this.contentCursos = this.state.cursos.map(
            curso=><option  value={curso.id}>{curso.nombre_curso}</option>
        )
        return (
            <div>
               {/*  <p>{JSON.stringify(this.state.asingnacion)}</p> */}
                <h1 className="title has-text-info">Asignar Curso</h1>
                <form onSubmit={this.send}>
                   <div className="columns">
                       <div className="column is-half is-offset-one-quarter">
                            <div className="columns is-gapless" >
                                <div className="column is-half">
                                    <label className="label">Estudiante:</label>
                                    <div className="control">
                                        <div className="select">
                                            <select name="estudianteId" onChange={this.valueChange}>
                                               {this.contentEstudiantes}
                                            </select>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="column">
                                    <label className="label">Curso:</label>
                                    <div className="control">
                                        <div className="select" >
                                            <select name="cursoId" onChange={this.valueChange}>
                                                {this.contentCursos}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <input type="submit" value="Asignar" className="button is-primary" style={{marginTop:"30px",marginLeft:"30px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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
        asignarCurso:(asignacion)=>dispatch(asignarCurso(asignacion)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsignarCursosForm)