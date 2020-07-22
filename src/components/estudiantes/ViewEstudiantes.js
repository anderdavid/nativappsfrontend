import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantes,deleteEstudiantes} from '../../redux'

class ViewEstudiantes extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount =()=>{
        this.props.getEstudiantes()
    }
    render() {
        var status = this.props.state.estudiantesResponse.status
        console.log(this.status)

        if(!status){
            this.contend=<tr><td>No hay estudiantes</td></tr>
        }else{
            this.contend = this.props.state.estudiantesResponse.estudiantes.map(
                estudiante=><tr key={estudiante.id}>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.apellido}</td>
                                <td>{estudiante.edad}</td>
                                <td>{estudiante.email}</td>
                                <td>
                                    <div className="buttons">
                                        <button className="button is-success" onClick={()=>{window.location.href='/estudiantes/ver/'+estudiante.id}}>Ver</button>
                                        <button className="button is-info" onClick={()=>{window.location.href='/estudiantes/edit/'+estudiante.id}}>Editar</button>
                                        <button className="button is-danger" onClick={()=>{this.props.deleteEstudiante(estudiante.id)}}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
            )
        }

        return (
            <div>
                {/* {JSON.stringify(this.props.state)} */}
                <h1 className="title is-2">Ver estudiantes</h1>
                <div className="table-container">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.contend}
                        </tbody>
                    </table>
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
const mapDispatchToProps =dispatch =>{
    return{
        getEstudiantes:()=>dispatch(getEstudiantes()),
        deleteEstudiante:(id)=>dispatch(deleteEstudiantes(id))
    }
      
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ViewEstudiantes)