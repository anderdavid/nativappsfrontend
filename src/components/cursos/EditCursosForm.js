import React, { Component } from 'react';
import {connect} from 'react-redux'
import {putCursos} from '../../redux'

class EditCursosForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nombre_curso: props.curso.nombre_curso,
            horario: props.curso.horario,
            fecha_inicio: props.curso.fecha_inicio,
            fecha_fin: props.curso.fecha_fin,
            numero_estudiantes: props.curso.numero_estudiantes
        }
        
    }

    valueChange =(event)=>{
        var name = event.target.name
        var value=event.target.value

        this.setState({
            [name]:value
        })
    }
    send =(event)=>{
        event.preventDefault()
        this.props.putCursos(this.state,this.props.cursoId)
    }
    
    render() {
        return (
            <div>
                {/* <p>props {JSON.stringify(this.props.cursoId)}</p>
                <p>{JSON.stringify(this.state)}</p> */}

                <h1 className="title has-text-info">Actualizar Curso</h1>
                <div className="columns">
                    <div className="column is-three-quarters">
                        <form onSubmit={this.send}>
                            <div className="field">
                                <label className="label">Nombre Curso:</label>
                                <div className="control">
                                    <input className="input" name="nombre_curso" value={this.state.nombre_curso} type="text"  placeholder="Ingrese nombre" required={true} onChange={this.valueChange} />
                                </div>
                            </div>
                            <div className="field">
                                    <label className="label">Horario:</label>
                                    <div className="control">
                                        <div className="select">
                                            <select name="horario" value={this.state.horario} required={true} className="input" onChange={this.valueChange}>
                                                <option>7am-9am</option>
                                                <option>9am-11am</option>
                                                <option>11am-1pm</option>
                                                <option>2pm-4pm</option>
                                                <option>4pm-6pm</option>
                                                <option>6pm-8pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Fecha de Inicio:</label>
                                    <div className="control">
                                        <input name="fecha_inicio"  type="date" dateFormat="YYYY-MM-DD" data-color="danger" className="input"  required={true} value={this.state.fecha_inicio} onChange={this.valueChange}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Fecha de Finalizacion:</label>
                                    <div className="control">
                                        <input name="fecha_fin"  type="date" dateFormat="YYYY-MM-DD" data-color="danger" className="input"  required={true} value={this.state.fecha_fin} onChange={this.valueChange}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="submit" name="Guardar" className="button is-info"/>
                                </div>

                        </form>
                    </div>
                </div>
                
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
        putCursos:(state,id)=>dispatch(putCursos(state,id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (EditCursosForm)