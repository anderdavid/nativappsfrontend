import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantesId,deleteEstudiantes} from '../../redux'
import { withRouter } from "react-router";


class ViewIdEstudiantes extends Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount=()=>{
        const id =this.props.match.params.id
        this.props.getEstudiantesId(id)
    }

    render() {
        var status =this.props.state.estudiantesResponse.status

        if(!status){
            var msg = this.props.state.estudiantesResponse.msg
            this.content=<div>{msg}</div>
        }else{
            var estudiante =this.props.state.estudiantesResponse.estudiantes[0]
          
            this.content =<div>
                            <p><strong className="has-text-danger-dark">Id: </strong>{estudiante.id}</p>
                            <p><strong className="has-text-danger-dark">Nombre: </strong>{estudiante.nombre}</p>
                            <p><strong className="has-text-danger-dark">apellido: </strong>{estudiante.apellido}</p>
                            <p><strong className="has-text-danger-dark">edad: </strong>{estudiante.edad}</p>
                            <p><strong className="has-text-danger-dark">email: </strong>{estudiante.email}</p>
                        </div>
        }
        
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.state.estudiantesResponse.estudiantes[0])}</p> */}
                <section className="hero">
                    <div className="hero-body has-background-light"> 
                        <div className="container">
                            <h1 className="title has-text-info">
                                Ver estudiante
                            </h1>
                            {this.content}
                        </div>
                    </div>
                </section>
                <section className="container" style={{marginTop:"20px"}}>
                <div class="buttons">
                            <button className="button is-info" onClick={()=>{window.location.href='/estudiantes/edit/'+estudiante.id}}>Editar</button>
                            <button className="button is-danger" onClick={()=>{this.props.deleteEstudiante(estudiante.id)}}>Eliminar</button>
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
        getEstudiantesId:(id)=>dispatch(getEstudiantesId(id)),
        deleteEstudiante:(id)=>dispatch(deleteEstudiantes(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter( ViewIdEstudiantes))