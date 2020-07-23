import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getEstudiantes,deleteEstudiantes} from '../../redux'

class ViewEstudiantes extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalActive:'',
            modalMsg :'Esta seguro de eliminar este curso'
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }
    componentWillMount =()=>{
        this.props.getEstudiantes()
    }
    openModal =()=>{
        console.log('openModal()')
        this.setState(
            {modalActive:'is-active'}
        )
    }
    closeModal =()=>{
        console.log('closeModal')
        this.setState(
            {modalActive:''}
        )
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
                                        {/* <button className="button is-danger" onClick={()=>{this.props.deleteEstudiante(estudiante.id)}}>Eliminar</button> */}
                                        <button className="button is-danger" onClick={this.openModal}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
            )
        }

        return (
            <div>
                <p>{JSON.stringify(this.state)}</p>
                <ViewModal active={this.state.modalActive} closeModal={this.closeModal} msg={this.state.modalMsg}/>
                {/* {JSON.stringify(this.props.state)} */}
                <h1 className="title has-text-info">Ver estudiantes</h1>
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
                    <button className="button is-success">Aceptar</button>
                    <button className="button is-danger" onClick={props.closeModal}>Cancelar</button>
                </footer>
            </div>
        </div>
       
    )
    
}