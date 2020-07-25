import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantesId,deleteEstudiantes} from '../../redux'
import { withRouter } from "react-router";


class ViewIdEstudiantes extends Component {

    constructor(props) {
        super(props);
        this.state={
            modalActive:'',
            modalMsg :'Esta seguro de eliminar este curso',
            idEstudiante:''
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
        
    }
    openModal =(id)=>{
        console.log('openModal() '+id)
        this.setState(
            {
                ...this.state,
                modalActive:'is-active',
                idEstudiante:id
            }
        )
    }
    closeModal =()=>{
        console.log('closeModal')
        this.setState(
            {
                ...this.state,
                modalActive:''
            }
        )
    }
    deleteEstudiante=()=>{
        this.closeModal()
        this.props.deleteEstudiante(this.state.idEstudiante)

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
                <ViewModal active={this.state.modalActive} closeModal={this.closeModal} msg={this.state.modalMsg} delete={this.deleteEstudiante} />
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
                            <button className="button is-primary" onClick={()=>{window.location.href='/funciones/estudiantecurso/'+estudiante.id}}>Ver Cursos</button>
                            <button className="button is-danger" onClick={()=>{this.openModal(estudiante.id)}}>Eliminar</button>
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


        
function ViewModal(props){

    return(
        
        <div className= {`modal ${props.active}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Alerta</p>
                    <button className="delete" aria-label="close" onClick={props.closeModal}></button>
                </header>
                <section className="modal-card-body">
                    <p>{props.msg}</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={props.delete}>Aceptar</button>
                    <button className="button is-danger" onClick={props.closeModal}>Cancelar</button>
                </footer>
            </div>
        </div>
       
    )
    
}
   
