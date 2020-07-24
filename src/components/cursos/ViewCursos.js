import React, { Component } from 'react';
import {connect} from 'react-redux'
import{getCursos,deleteCursos} from '../../redux'

class ViewCursos extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalActive:'',
            modalMsg :'Esta seguro de eliminar este curso',
            idCurso:''
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
                idCurso:id
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

    deleteCurso =()=>{
        this.closeModal()
        this.props.deleteCursos(this.state.idCurso)
    }

    componentWillMount = ()=>{
        this.props.getCursos()
    }
    
    render() {
        var status = this.props.state.cursosResponse.status
        console.log('status '+status)
    
        if(!status){
            var msg = this.props.state.cursosResponse.msg
            this.content=<tr><td>{msg}</td></tr>
        }else{
            var cursos =this.props.state.cursosResponse.cursos
            this.content = cursos.map(curso=>
                <tr key={curso.id}>
                    <td>{curso.id}</td>
                    <td>{curso.nombre_curso}</td>
                    <td>{curso.horario}</td>
                    <td>{curso.fecha_inicio}</td>
                    <td>{curso.fecha_fin}</td>
                    <td>{curso.numero_estudiantes}</td>
                    <td>
                        <div className="buttons">
                            <button className="button is-success" onClick={()=>{window.location.href='/cursos/ver/'+curso.id}}>Ver</button>
                            <button className="button is-info" onClick={()=>{window.location.href='/cursos/edit/'+curso.id}}>Editar</button>
                            <button className="button is-danger" onClick={()=>{this.openModal(curso.id)}}>Eliminar</button>
                        </div>
                    </td>
                </tr>
            )
        }
       
            return (
                <div>
                   {/*  <p>{JSON.stringify(this.props.state.cursosResponse)}</p> */}
                   <ViewModal active={this.state.modalActive} closeModal={this.closeModal} msg={this.state.modalMsg} delete={this.deleteCurso} />
                   <h1 className="title is-2">Ver Cursos</h1>
                   <div className="table-container">
                        <table className="table is-striped is-fullwidth">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Nombre</th>
                                    <th>Horario</th>
                                    <th>Fecha de Inicio</th>
                                    <th>Fecha de Finalizacion </th>
                                    <th>Numero de Estudiantes</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.content}
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
const  mapDispatchToProps =dispatch =>{
    return{
        getCursos:()=>dispatch(getCursos()),
        deleteCursos:(id)=>dispatch(deleteCursos(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCursos)




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

